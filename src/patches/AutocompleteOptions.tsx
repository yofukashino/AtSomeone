import { PluginInjector } from "../index";
import {
  ChannelAutoCompleteOptions,
  ChannelAutoCompleteOptionsUtils,
  GuildMemberStore,
} from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";
export default (): void => {
  PluginInjector.after(
    ChannelAutoCompleteOptions,
    "default",
    (args: [{ textValue: string }], res) => {
      const mentions = args[0].textValue.match(/(?:^|\s)@(\S+)?(?=\s|$)/g);
      if (mentions && Utils.isMentioningSomeone(mentions[0])) {
        res[0].isVisible = true;
        if (!res[0].query?.results.globals.some((g) => g.test === "someone"))
          res[0].query?.results.globals.push({
            description: "We do a little trolling here.",
            test: "someone",
            text: "@Someone",
          });
      }
      return res;
    },
  );
  PluginInjector.after(
    ChannelAutoCompleteOptionsUtils.default.prototype,
    "onResultClick",
    (
      args: [number],
      res,
      instance: {
        props: {
          channel: Types.Channel;
        };
        state: {
          queryText: string;
          query: {
            options: {
              insertText: (toReplace: string, replacement: string) => void;
            };
            results: {
              users: [];
              globals: Array<{
                description: string;
                test: string;
                text: string;
              }>;
            };
          };
        };
      },
    ) => {
      if (
        instance?.state?.query?.results?.globals[
          args[0] - (instance?.state?.query?.results?.users?.length || 0)
        ]?.test === "someone"
      ) {
        const userIds = instance.props.channel.guild_id
          ? (GuildMemberStore.getMemberIds(instance.props.channel.guild_id) as [])
          : instance.props.channel.recipients;
        const randomUserId = userIds[Utils.randomNo(0, userIds.length - 1)];
        instance?.state.query.options.insertText(
          `@${instance?.state?.queryText}`,
          `<@${randomUserId}>`,
        );
      }
      return res;
    },
  );
};
