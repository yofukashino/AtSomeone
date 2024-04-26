import Modules from "../lib/requiredModules";
import injectSlate from "./Slate";
import injectAutocompleteOptions from "./AutocompleteOptions";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectAutocompleteOptions();
  injectSlate();
};

export default { applyInjections };
