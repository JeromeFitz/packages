import { space } from '../utils/getChars'

const PULL_REQUEST__RELEASE = () => {
  return `### 🔀️ ${space} **Gitflow Automation:** \`{version} => {base}\`

  - [x] 📦️ ${space} **Version**: \`{version}\`
  - [x] 🔀️ ${space} **Merge**: \`{head} => {base}\`
  - [ ] 🏪️ ${space} **{toStore} to Store**
    - [ ] 🍏️ ${space} **Apple:** \`iOS\`
    - [ ] 🤖️ ${space} **Google:** \`Android\`

  ---

  📝️ **Note:** _This PR was automatically generated._ :octocat:
  `
}

export default PULL_REQUEST__RELEASE
