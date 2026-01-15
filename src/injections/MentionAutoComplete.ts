import { PluginInjector } from "@this";
import { MentionAutoComplete } from "@lib/RequiredModules";
import Utils from "@Utils";

PluginInjector.after(MentionAutoComplete, "queryResults", ([, , query], res) => {
  if (
    !Utils.isMentioningSomeone(`@${query}`) ||
    res.results.globals.some((g) => g.test === "someone")
  )
    return res;
  console.log(res.results.globals);
  res.results.globals.push({
    description: "We do a little trolling here.",
    test: "someone",
    inlineAutocompleteType: "someoneMentionInput",
    text: "@someone",
  });

  return res;
});

PluginInjector.instead(MentionAutoComplete, "onSelect", (args, res, instance) => {
  const [
    {
      index,
      results: { users, globals },
      options,
    },
  ] = args;

  const current = globals[index - users.length];

  if (current?.inlineAutocompleteType === "someoneMentionInput") {
    options.insertText("<@someone>");
    return { type: "MENTION" };
  }

  return res.call(instance, ...args);
});
