import { webpack } from "replugged";
import { PluginInjector } from "@this";
import { SlateParser } from "@lib/RequiredModules";
import Utils from "@Utils";

const someoneRegex = /(?:^|\s)(?:@someone|<@someone>)(?=\s|$)/i;

const parse = webpack.getFunctionKeyBySource(SlateParser, "arguments.length");
PluginInjector.before(SlateParser, parse, ([text, ...args]: [string, string]) => {
  const someone = someoneRegex.exec(text)?.[0];

  if (someone) {
    const randomUserId = Utils.randomUserId({ guildId: args[0] });
    text = text.replace(someone, `<@${randomUserId}>`);
  }
  return [text, ...args];
});
