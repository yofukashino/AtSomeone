import patchSlate from "./Slate";
import patchAutocompleteOptions from "./AutocompleteOptions";
export default (): void => {
  patchAutocompleteOptions();
  patchSlate();
};
