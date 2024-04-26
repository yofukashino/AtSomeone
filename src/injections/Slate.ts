import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";
export default (): void => {
  const { Slate, SlateUtils } = Modules;
  PluginInjector.before(Slate.type, "render", ([SlateArgs, ...args]: [Types.SlateArgs]) => {
    if (/(?:^|\s)@someone(?=\s|$)/g.test(SlateArgs.textValue)) {
      const randomUserId = Utils.randomUserId(SlateArgs.channel);
      SlateArgs.textValue = SlateArgs.textValue.replace("@someone", `<@${randomUserId}>`);
      SlateArgs.richValue = SlateUtils.toRichValue(SlateArgs.textValue);
    }
    return [SlateArgs, ...args];
  });
};
