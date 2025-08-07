import { webpack } from "replugged";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";

export default (): void => {
  const { SlateParser } = Modules;
  const parse = webpack.getFunctionKeyBySource(SlateParser, "");

  PluginInjector.before(SlateParser, parse, ([text, ...args]: [string, string]) => {
    if (text.includes("<@someone>")) {
      const randomUserId = Utils.randomUserId({ guildId: args[0] });
      text = text.replace("<@someone>", `<@${randomUserId}>`);
    }
    return [text, ...args];
  });
};
