import { webpack } from "replugged";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";

export const injectChannelAutoCompleteOptions = (): void => {
  const loader = webpack.getFunctionKeyBySource(
    Modules.ChannelAutoCompleteOptions,
    "canMentionEveryone",
  );

  PluginInjector.after(
    Modules.ChannelAutoCompleteOptions,
    loader,
    ([{ textValue }]: [{ textValue: string }], res) => {
      const [mentions] = textValue.match(/(?:^|\s)@(\S+)?(?=\s|$)/g) || [""];
      if (mentions && Utils.isMentioningSomeone(mentions)) {
        res ??= [];
        res[0] ??= {};
        res[0].isVisible = true;
        if (!res?.[0].query?.results.globals?.some?.((g) => g.test === "someone"))
          res?.[0]?.query?.results?.globals?.push?.({
            description: "We do a little trolling here.",
            test: "someone",
            text: "@Someone",
          });
      }
      return res;
    },
  );
};

export const injectChannelAutoCompleteOptionsUtils = (): void => {
  const ChannelAutoCompleteOptionsUtilsMain =
    webpack.getFunctionBySource<Types.DefaultTypes.AnyFunction>(
      Modules.ChannelAutoCompleteOptionsUtils,
      "selectResult",
    );

  PluginInjector.after(
    ChannelAutoCompleteOptionsUtilsMain.prototype,
    "onResultClick",
    (args: [number], res, instance: Types.ChannelAutoCompleteOptionsUtilsInstance) => {
      if (
        instance?.state?.query?.results?.globals?.[
          args?.[0] - (instance?.state?.query?.results?.users?.length || 0)
        ]?.test === "someone"
      ) {
        const randomUserId = Utils.randomUserId(instance?.props?.channel);
        instance?.state?.query?.options?.insertText?.(
          `@${instance?.state?.queryText}`,
          `<@${randomUserId}>`,
        );
      }
      return res;
    },
  );
};

export default (): void => {
  injectChannelAutoCompleteOptions();
  injectChannelAutoCompleteOptionsUtils();
};
