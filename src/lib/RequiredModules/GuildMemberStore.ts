import { webpack } from "replugged";

import type Types from "@Types";

export interface GuildMemberStore extends Types.Store {
  getMemberIds: (guildId: string) => string[];
}

export default await webpack.waitForStore<GuildMemberStore>("GuildMemberStore");
