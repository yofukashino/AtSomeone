import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";
export default (): void => {
  const { Slate, SlateUtils } = Modules;
  PluginInjector.before(Slate.type, "render", ([SlateArgs, ...args]: [Types.SlateArgs]) => {
    const someone = /(?:^|\s)@(s|S)(o|O)(m|M)(e|E)(o|O)(n|N)(e|E)(?=\s|$)/g.exec(
      SlateArgs.textValue,
    )?.[0];
    if (someone) {
      const randomUserId = Utils.randomUserId(SlateArgs.channel);
      SlateArgs.textValue = SlateArgs.textValue.replace(someone, `<@${randomUserId}>`);
      SlateArgs.richValue = SlateUtils.toRichValue(SlateArgs.textValue);
    }
    return [SlateArgs, ...args];
  });
};
