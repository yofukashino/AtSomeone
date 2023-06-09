import { PluginInjector } from "../index";
import { GuildMemberStore, Slate, SlateRichUtils } from "../lib/requiredModules";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const patchSlate = (): void => {
  PluginInjector.before(Slate.type, "render", (args: [Types.SlateArgs]) => {
    const [SlateArgs] = args;
    if (SlateArgs.textValue.includes("@someone")) {
      const userIds = SlateArgs.channel.guild_id
        ? (GuildMemberStore.getMemberIds(SlateArgs.channel.guild_id) as [])
        : SlateArgs.channel.recipients;
      const randomUserId = userIds[Utils.randomNo(0, userIds.length - 1)];
      SlateArgs.textValue = SlateArgs.textValue.replace("@someone", `<@${randomUserId}>`);
      SlateArgs.richValue = SlateRichUtils.toRichValue(SlateArgs.textValue);
    }
    return args;
  });
};
