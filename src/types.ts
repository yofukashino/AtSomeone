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
  export interface ChannelAutoCompleteOptions {
    default: (
      options: {
        canMentionChannels: boolean;
        canMentionRoles: boolean;
        canOnlyUseTextCommands: boolean;
        canSendStickers: boolean;
        channel: Channel;
        editorHeight: number;
        editorRef: React.Ref<unknown>;
        expressionPickerView: unknown;
        focused: boolean;
        guild: Guild | null;
        onSendMessage: DefaultTypes.AnyFunction;
        onSendSticker: DefaultTypes.AnyFunction;
        onVisibilityChange: DefaultTypes.AnyFunction;
        position: unknown;
        setValue: DefaultTypes.AnyFunction;
        textValue: string;
        type: Record<string, unknown>;
        useNewSlashCommands: boolean;
      },
      editorRef: React.Ref<unknown>,
      optionsRef: React.Ref<unknown>,
    ) =>
      | [
          {
            didInitialQuery?: boolean;
            isVisible?: boolean;
            query?: {
              isLoading?: boolean;
              options?: Record<string, unknown>;
              queryText?: string;
              resultCount?: number;
              results?: {
                globals?: Array<{
                  description?: string;
                  test?: string;
                  text?: string;
                }>;
                roles?: Array<{
                  color?: number;
                  colorString?: string;
                  flags?: number;
                  hoist?: boolean;
                  icon?: string;
                  id?: string;
                  managed?: boolean;
                  mentionable?: boolean;
                  name?: string;
                  originalPosition?: number;
                  permissions?: bigint;
                  position?: number;
                  tags?: Record<string, string>;
                  unicodeEmoji?: string | null;
                }>;
                users?: Array<{
                  comparator: string;
                  nick: string | null;
                  score: number;
                  status: string;
                }>;
              };
              type?: string;
              typeInfo?: Record<string, unknown>;
            };
            selectedIndex?: number | null;
          },
          Record<string, unknown>,
          Record<string, unknown>,
        ]
      | []
      | void;
  }
  export interface ChannelAutoCompleteOptionsUtilsInstance extends DefaultTypes.ObjectExports {
    props: {
      channel: Types.Channel;
    };
    state: {
      queryText: string;
      resultCount: number;
      type: string;
      typeInfo: Record<string, unknown>;
      query: {
        options: {
          insertText: (toReplace: string, replacement: string) => void;
        };
        results: {
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
        };
      };
    };
  }
  export interface Modules {
    loadModules?: () => Promise<void>;
    Slate?: Slate;
    SlateUtils?: SlateRichUtils;
    ChannelAutoCompleteOptions?: ChannelAutoCompleteOptions;
    ChannelAutoCompleteOptionsUtils?: GenericModule;
    GuildMemberStore?: GuildMemberStore;
  }
}
export default Types;
