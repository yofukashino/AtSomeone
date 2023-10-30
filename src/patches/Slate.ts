import { PluginInjector } from "../index";
import { GuildMemberStore, Slate, SlateUtils } from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";
export default (): void => {
  PluginInjector.before(Slate.type, "render", (args: [Types.SlateArgs]) => {
    const [SlateArgs] = args;
    if (SlateArgs.textValue.match(/(?:^|\s)@someone(?=\s|$)/g)) {
      const userIds = SlateArgs.channel.guild_id
        ? (GuildMemberStore.getMemberIds(SlateArgs.channel.guild_id) as [])
        : SlateArgs.channel.recipients;
      const randomUserId = userIds[Utils.randomNo(0, userIds.length - 1)];
      SlateArgs.textValue = SlateArgs.textValue.replace("@someone", `<@${randomUserId}>`);
      SlateArgs.richValue = SlateUtils.toRichValue(SlateArgs.textValue);
    }
    return args;
  });
};
