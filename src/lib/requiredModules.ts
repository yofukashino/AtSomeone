import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.SlateParser ??= await webpack
    .waitForModule<Types.DefaultTypes.ModuleExports>(
      webpack.filters.bySource("returnMentionIds:!0"),
      {
        timeout: 10000,
      },
    )
    .catch(() => {
      throw new Error("Failed To Find Slate Module");
    });

  Modules.MentionAutoComplete = await webpack
    .waitForModule<Types.MentionAutoComplete>(webpack.filters.bySource(/sentinel:\w+?\.ME/), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find MentionAUtoComplete Module");
    });

  Modules.GuildMemberStore ??= webpack.getByStoreName<Types.GuildMemberStore>("GuildMemberStore");
};

export default Modules;
