import Modules from "../lib/requiredModules";
import injectMentionAutoComplete from "./MentionAutoComplete";
import injectSlateParser from "./SlateParser";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectMentionAutoComplete();
  injectSlateParser();
};

export default { applyInjections };
