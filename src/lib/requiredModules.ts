import { webpack } from "replugged";
import Types from "../types";
export const Slate = webpack.getBySource<Types.Slate>("isSubmitButtonEnabled:");
export const SlateUtils = webpack.getByProps<Types.SlateRichUtils>("toRichValue");
export const { exports: ChannelAutoCompleteOptions } = webpack.getBySource("channel-autocomplete", {
  raw: true,
});
export const ChannelAutoCompleteOptionsUtils = webpack.getBySource<{
  default: Types.DefaultTypes.AnyFunction;
}>("onMaybeShowAutocomplete(){");
export const GuildMemberStore = webpack.getByStoreName<Types.GuildMemberStore>("GuildMemberStore");
