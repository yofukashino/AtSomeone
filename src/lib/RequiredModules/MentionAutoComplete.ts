import { webpack } from "replugged";

import type Types from "@Types";

export interface ResultsType {
  globals: Array<{
    description: string;
    test: string;
    text: string;
    inlineAutocompleteType?: string;
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
  matches: (...args: unknown[]) => unknown;
  onSelect: (opts: {
    channel: Types.Channel;
    guild?: Types.Guild;
    index: number;
    options: Record<string, unknown> & { insertText: (e: string) => void };
    queryText: string;
    results: ResultsType;
    tabOrEnter?: boolean;
    type: number;
  }) => { type: "MENTION" };
  queryResults: (
    channel: Types.Channel,
    guild: Types.Guild,
    query: string,
    options: Record<string, unknown>,
  ) => {
    results: ResultsType;
  };
  renderResults: (...args: unknown[]) => unknown;
  sentinel: "@";
  stores: Types.Store[];
}

export default await webpack
  .waitForModule(webpack.filters.bySource(/sentinel:"@"/), {
    timeout: 10000,
  })
  .then((mod) => webpack.getExportsForProps<MentionAutoComplete>(mod, ["sentinel", "queryResults"]))
  .catch(() => {
    throw new Error("Failed To Find MentionAutoComplete Module");
  });
