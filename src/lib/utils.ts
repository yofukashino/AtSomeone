import { channels as UltimateChannelStore } from "replugged/common";
import Modules from "./requiredModules";

export const randomNo = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const isMentioningSomeone = (query: string): boolean => {
  const levenshteinDistance = (a: string, b: string): number => {
    if (!a.length || !b.length) return b.length || a.length || 0;
    return Math.min(
      levenshteinDistance(a.slice(1), b) + 1,
      levenshteinDistance(a, b.slice(1)) + 1,
      levenshteinDistance(a.slice(1), b.slice(1)) + (a[0].startsWith(b[0]) ? 0 : 1),
    );
  };

  if (!query.startsWith("@")) return false;
  if (query === "@") return true;
  const typedPart = query.slice(1);
  const targetPart = "someone".slice(0, typedPart.length);
  return levenshteinDistance(typedPart, targetPart) <= (typedPart.length <= 3 ? 1 : 2);
};

export const randomUserId = ({
  channelId,
  guildId,
}: {
  guildId?: string;
  channelId?: string;
}): string => {
  const channel = UltimateChannelStore.getChannel(channelId ?? UltimateChannelStore.getChannelId());
  guildId ??= channel.getGuildId();
  const userIds = guildId ? Modules.GuildMemberStore?.getMemberIds(guildId) : channel.recipients;
  return userIds[randomNo(0, userIds.length - 1)];
};

export default { randomNo, isMentioningSomeone, randomUserId };
