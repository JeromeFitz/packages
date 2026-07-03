const branches = [{ name: "main" }, { name: "deps/notionhq-client-5.x", prerelease: "canary" }];

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ["BotJerome", "JeromeFitz"],
  },
};

export { config };
