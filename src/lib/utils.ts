export const randomNo = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const isMentioningSomeone = (query: string): boolean =>
  ["@", "@s", "@so", "@som", "@some", "@someo", "someon", "@someone"].some((t) =>
    query.includes(t),
  ) || query === "";

export default { randomNo, isMentioningSomeone };
