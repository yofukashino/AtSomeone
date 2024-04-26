import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.Slate ??= await webpack.waitForModule<Types.Slate>(
    webpack.filters.bySource("isSubmitButtonEnabled:"),
  );
  Modules.SlateUtils ??= await webpack.waitForProps<Types.SlateRichUtils>("toRichValue");
  Modules.ChannelAutoCompleteOptions = await webpack
    .waitForModule<{ exports: Types.ChannelAutoCompleteOptions }>(
      webpack.filters.bySource("channel-autocomplete"),
      {
        raw: true,
      },
    )
    .then(({ exports }) => exports);
  Modules.ChannelAutoCompleteOptionsUtils = await webpack.waitForModule<Types.GenericModule>(
    webpack.filters.bySource("onMaybeShowAutocomplete(){"),
  );
  Modules.GuildMemberStore ??= webpack.getByStoreName<Types.GuildMemberStore>("GuildMemberStore");
};

export default Modules;
