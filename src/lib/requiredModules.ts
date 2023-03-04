import { webpack } from "replugged";
import * as Types from "../types";
export const Slate = webpack.getBySource(
  /\.textValue.*\.richValue.*\.placeholder/,
) as unknown as Types.Slate;
export const SlateRichUtilsModule = webpack.getBySource(
  /textValue.*richValue.*text:""/,
) as unknown as Types.GenericModule;
export const SlateRichUtils = {
  toRichValue: webpack.getFunctionBySource(SlateRichUtilsModule, '.split("\\n")'),
};
export const GuildMemberStore = webpack.getByProps(
  "getMember",
) as unknown as Types.GuildMemberStore;
