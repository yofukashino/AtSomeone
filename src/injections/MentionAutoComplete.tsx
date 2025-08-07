import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";

export const injectMentionQueryResults = (): void => {
  PluginInjector.after(Modules.MentionAutoComplete, "queryResults", ([, , query], res) => {
    if (
      !Utils.isMentioningSomeone(`@${query}`) ||
      res.results.globals.some((g) => g.test === "someone")
    )
      return res;

    res.results.globals.push({
      description: "We do a little trolling here.",
      test: "someone",
      text: "@Someone",
    });

    return res;
  });
};

export const injectMentionOnSelect = (): void => {
  PluginInjector.instead(Modules.MentionAutoComplete, "onSelect", (args, res, instance) => {
    const [
      {
        index,
        results: { users, globals },
        options,
      },
    ] = args;

    const current = globals[index - users.length];

    if (current?.test === "someone") {
      options.insertText("<@someone>");
      return { type: "MENTION" };
    }

    return res.call(instance, ...args);
  });
};

export default (): void => {
  injectMentionQueryResults();
  injectMentionOnSelect();
};
