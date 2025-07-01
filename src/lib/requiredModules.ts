import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.Slate ??= await webpack
    .waitForModule<Types.Slate>(webpack.filters.bySource("chat input type must be set"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find Slate Module");
    });

  Modules.SlateUtilsModule ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource('richValue:[{type:"line",'), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find SlateUtils Module");
    });

  Modules.SlateUtils ??= {
    toRichValue: webpack.getFunctionBySource(Modules.SlateUtilsModule, '.split("\\n")'),
  };

  Modules.ChannelAutoCompleteOptions = await webpack
    .waitForModule<{ exports: Types.ChannelAutoCompleteOptions }>(
      webpack.filters.bySource("channel-autocomplete"),
      {
        raw: true,
        timeout: 10000,
      },
    )
    .then(({ exports }) => exports)
    .catch(() => {
      throw new Error("Failed To Find ChannelAutoCompleteOptions Module");
    });

  Modules.ChannelAutoCompleteOptionsUtils = await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("onMaybeShowAutocomplete(){"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find ChannelAutoCompleteOptionsUtils Module");
    });

  Modules.GuildMemberStore ??= webpack.getByStoreName<Types.GuildMemberStore>("GuildMemberStore");
};

export default Modules;
