import { types } from "replugged";
import type * as flux from "replugged/dist/renderer/modules/common/flux";
import type GeneralDiscordTypes from "discord-types/general";

import type { GuildMemberStore } from "@lib/RequiredModules/GuildMemberStore";
import type { MentionAutoComplete } from "@lib/RequiredModules/MentionAutoComplete";
import type { SlaterParser } from "@lib/RequiredModules/SlateParser";

export namespace Types {
  export import DefaultTypes = types;
  export type Channel = GeneralDiscordTypes.Channel;
  export type Guild = GeneralDiscordTypes.Guild;
  export type Store = flux.Store;
  /* 
  export interface Slate {
    $$typeof: symbol;
    compare: null;
    type: { $$typeof: symbol; render: DefaultTypes.AnyFunction };
  }

  export type RichValue = Array<{
    type: string;
    children: Array<{
      text: string;
    }>;
  }>;
  export interface SlateRichUtils {
    toRichValue: (e: string) => RichValue;
  }
  export interface SlateArgs {
    SlateArgs: unknown;
    accessibilityLabel: string;
    channel: Channel;
    className: string;
    focused: boolean;
    highlighted: boolean;
    onBlur: DefaultTypes.AnyFunction;
    onChange: DefaultTypes.AnyFunction;
    onFocus: DefaultTypes.AnyFunction;
    onKeyDown: DefaultTypes.AnyFunction;
    onResize: undefined | DefaultTypes.AnyFunction;
    onSubmit: DefaultTypes.AnyFunction;
    pendingReply: undefined | string;
    placeholder: string;
    promptToUpload: DefaultTypes.AnyFunction;
    renderApplicationCommandIcon: DefaultTypes.AnyFunction;
    renderAttachButton: DefaultTypes.AnyFunction;
    richValue: RichValue;
    setEditorRef: DefaultTypes.AnyFunction;
    textValue: string;
  } */

  export interface Modules {
    Proxy: Exclude<Modules, "Proxy" | "loadModules">;
    loadModules?: () => Promise<void>;
    GuildMemberStore?: GuildMemberStore;
    MentionAutoComplete?: MentionAutoComplete;
    SlateParser?: SlaterParser;
  }
}
export default Types;
