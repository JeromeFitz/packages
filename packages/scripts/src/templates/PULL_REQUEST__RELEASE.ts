import { space } from "../utils/get-chars";

const PULL_REQUEST = {
  gitflow: `### 🔀️ ${space} **Gitflow Automation:** \`{version} => {base}\`

  - [x] 📦️ ${space} **Version**: \`{version}\`
  - [x] 🔀️ ${space} **Merge**: \`{head} => {base}\`
  - [ ] 🏪️ ${space} **Submit/Release to Store**
    - [ ] 🍏️ ${space} **Apple:** \`iOS\`
    - [ ] 🤖️ ${space} **Google:** \`Android\`

  ---

  📝️ **Note:** _This PR was automatically generated._ :octocat:
  `,
};

export default PULL_REQUEST;
