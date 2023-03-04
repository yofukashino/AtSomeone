export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";

export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface Slate {
  $$typeof: symbol;
  compare: null;
  type: { $$typeof: symbol; render: DefaultTypes.AnyFunction };
}
export interface GuildMemberStore {
  getCommunicationDisabledUserMap: DefaultTypes.AnyFunction;
  getCommunicationDisabledVersion: DefaultTypes.AnyFunction;
  getMember: DefaultTypes.AnyFunction;
  getMemberIds: DefaultTypes.AnyFunction;
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
export interface Channel {
  defaultAutoArchiveDuration: undefined | number;
  defaultThreadRateLimitPerUser: undefined | number;
  flags_: number;
  id: string;
  lastMessageId: string;
  lastPinTimestamp: string;
  memberListId: undefined | string;
  name: string;
  nsfw_: boolean;
  permissionOverwrites_: {
    [key: string | number]: {
      allow: bigint;
      deny: bigint;
      id: string;
      type: number;
    };
  };
  guild_id: string;
  position_: number;
  rateLimitPerUser_: number;
  topic_: string;
  type: number;
  version: undefined | number;
  accessPermissions: bigint;
  bitrate: number;
  flags: number;
  nsfw: boolean;
  recipients: string[];
  permissionOverwrites: {
    [key: string | number]: {
      allow: bigint;
      deny: bigint;
      id: string;
      type: number;
    };
  };
  position: number;
  rateLimitPerUser: number;
  topic: undefined | string;
  userLimit: number;
  availableTags: Array<{
    name: string;
  }>;
  isHidden: () => boolean;
  isGuildVocal: () => boolean;
}
export interface richValue
  extends Array<{
    type: string;
    children: Array<{
      text: string;
    }>;
  }> {}
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
  richValue: richValue;
  setEditorRef: DefaultTypes.AnyFunction;
  textValue: string;
}
