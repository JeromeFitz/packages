import type { IReleaseRule, IReleaseRuleProps } from "../index";

type CustomReleaseRulesProps = {
  message?: null | string;
  release?: null | string;
  tag?: null | string;
  type?: null | string;
};

const getReleaseRules = (types: IReleaseRule): CustomReleaseRulesProps[] =>
  Object.keys(types).flatMap((type) => {
    const releaseRule: IReleaseRuleProps = types[type];
    if (!releaseRule?.semver) return [];

    const { semver: release } = releaseRule;

    // Two input forms per type — the conventional word and the gitmoji — both
    // mapping to the same bump, so a commit written either way is matched.
    return [
      { release, type: releaseRule.commit },
      { release, type: releaseRule.emoji },
    ];
  });

export default getReleaseRules;
