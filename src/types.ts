export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
import { Channel } from "discord-types/general";
export { Channel } from "discord-types/general";
import { Store } from "replugged/dist/renderer/modules/common/flux";
export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface Slate {
  $$typeof: symbol;
  compare: null;
  type: { $$typeof: symbol; render: DefaultTypes.AnyFunction };
}
export interface GuildMemberStore extends Store {
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
export interface richValue
  extends Array<{
    type: string;
    children: Array<{
      text: string;
    }>;
  }> {}
export interface SlateRichUtils {
  toRichValue: (e: string) => richValue;
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
  richValue: richValue;
  setEditorRef: DefaultTypes.AnyFunction;
  textValue: string;
}

export * as default from "./types";
