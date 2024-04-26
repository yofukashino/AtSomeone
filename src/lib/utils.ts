import Modules from "./requiredModules";
import Types from "../types";
export const randomNo = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const isMentioningSomeone = (query: string): boolean =>
  ["@", "@s", "@so", "@som", "@some", "@someo", "someon", "@someone"].some((t) =>
    query.includes(t),
  ) || query === "";

export const randomUserId = (channel: Types.Channel): string => {
  const userIds = channel.guild_id
    ? Modules.GuildMemberStore?.getMemberIds(channel.guild_id)
    : channel.recipients;
  return userIds[randomNo(0, userIds.length - 1)];
};

export default { randomNo, isMentioningSomeone, randomUserId };
