import patchSlate from "./Slate";
import patchAutocompleteOptions from "./AutocompleteOptions";
export const applyInjections = (): void => {
  patchAutocompleteOptions();
  patchSlate();
};
