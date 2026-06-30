import title from "title";

import type { IReleaseRule, IReleaseRuleProps } from "../index";

type TypeSpec = Omit<IReleaseRuleProps, "branch" | "commit" | "entity" | "name">;

const getTypeSpecs = (types: IReleaseRule): TypeSpec[] =>
  Object.keys(types).map((type) => ({
    code: types[type].code,
    description: title(types[type].description.replace(".", "")),
    emoji: types[type].emoji,
    semver: types[type].semver,
    type: types[type].commit,
    value: types[type].commit,
  }));

export default getTypeSpecs;
