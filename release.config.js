const branches = [{ name: "main" }, { name: "oxc/kebab", prerelease: "canary" }];

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ["BotJerome", "JeromeFitz"],
  },
  pkgRoot: ".",
};

export { config };
