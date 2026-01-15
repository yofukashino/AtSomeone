import { webpack } from "replugged";

export type SlaterParser = Record<
  string,
  (text: string, guildId: string, ...args: unknown[]) => unknown
>;

export default await webpack
  .waitForModule<SlaterParser>(webpack.filters.bySource("returnMentionIds:!0"), {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find SlateParser Module");
  });
