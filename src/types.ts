import { types } from "replugged";
import { Store } from "replugged/dist/renderer/modules/common/flux";
import GeneralDiscordTypes from "discord-types/general";

export namespace Types {
  export import DefaultTypes = types;
  export type Channel = GeneralDiscordTypes.Channel;
  export type Guild = GeneralDiscordTypes.Guild;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction> & {
    default: DefaultTypes.AnyFunction;
  };
  export interface Slate {
    $$typeof: symbol;
    compare: null;
    type: { $$typeof: symbol; render: DefaultTypes.AnyFunction };
  }
  export interface GuildMemberStore extends Store {
    getCommunicationDisabledUserMap: DefaultTypes.AnyFunction;
    getCommunicationDisabledVersion: DefaultTypes.AnyFunction;
    getMember: DefaultTypes.AnyFunction;
    getMemberIds: (guildId: string) => string[];
    getMemberRoleWithPendingUpdates: DefaultTypes.AnyFunction;
    getMembers: DefaultTypes.AnyFunction;
    getMutableAllGuildsAndMembers: DefaultTypes.AnyFunction;
    getNick: DefaultTypes.AnyFunction;
    getNicknameGuildsMapping: DefaultTypes.AnyFunction;
    getNicknames: DefaultTypes.AnyFunction;
    getPendingRoleUpdates: DefaultTypes.AnyFunction;
    getSelfMember: DefaultTypes.AnyFunction;
    getTrueMember: DefaultTypes.AnyFunction;
    initialize: DefaultTypes.AnyFunction;
    isMember: DefaultTypes.AnyFunction;
    memberOf: DefaultTypes.AnyFunction;
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
  }

  export interface ResultsType {
    globals: Array<{
      description: string;
      test: string;
      text: string;
    }>;
    roles: Array<{
      color: number;
      colorString: string;
      flags: number;
      hoist: boolean;
      icon: string;
      id: string;
      managed: boolean;
      mentionable: boolean;
      name: string;

      originalPosition: number;
      permissions: bigint;
      position: number;
      tags: Record<string, string>;
      unicodeEmoji: string | null;
    }>;
    users: Array<{
      comparator: string;
      nick: string | null;
      score: number;
      status: string;
    }>;
  }

  export interface MentionAutoComplete {
    matches: DefaultTypes.AnyFunction;
    onSelect: (opts: {
      channel: Channel;
      guild?: Guild;
      index: number;
      options: Record<string, unknown> & { insertText: (e: string) => void };
      queryText: string;
      results: ResultsType;
      tabOrEnter?: boolean;
      type: number;
    }) => { type: "MENTION" };
    queryResults: (
      channel: Channel,
      guild: Guild,
      query: string,
      options: Record<string, unknown>,
    ) => {
      results: ResultsType;
    };
    renderResults: DefaultTypes.AnyFunction;
    sentinel: "@";
    stores: Store[];
  }
  export interface Modules {
    loadModules?: () => Promise<void>;
    SlateParser?: DefaultTypes.ModuleExports;
    MentionAutoComplete?: MentionAutoComplete;

    GuildMemberStore?: GuildMemberStore;
  }
}
export default Types;
