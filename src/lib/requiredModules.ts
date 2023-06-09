import { webpack } from "replugged";
import * as Types from "../types";
export const Slate = webpack.getBySource<Types.Slate>(/\.textValue.*\.richValue.*\.placeholder/);
export const SlateRichUtilsModule = webpack.getBySource<Types.GenericModule>(
  /textValue.*richValue.*text:""/,
);
export const SlateRichUtils = {
  toRichValue: webpack.getFunctionBySource(SlateRichUtilsModule, '.split("\\n")'),
} as Types.SlateRichUtils;
export const GuildMemberStore = webpack.getByProps<Types.GuildMemberStore>("getMember");
