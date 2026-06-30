const branches = [{ name: "main" }, { name: "feat/kebab-case", prerelease: "canary" }];

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ["BotJerome", "JeromeFitz"],
  },
  pkgRoot: ".",
};

export { config };
