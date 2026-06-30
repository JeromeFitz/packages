import { readFileSync, writeFileSync } from "node:fs";

import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

import { config as _config, rewriteDistExports } from "../../tsdown.config.ts";

const GITMOJI_CLI_LICENSE = `MIT License

Copyright (c) 2016-2022 Carlos Cuesta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

const entry = ["src/index.ts"];
const config: UserConfig = {
  ..._config,
  entry,
  onSuccess: () => {
    rewriteDistExports();
    const license = readFileSync("../../LICENSE", "utf8");
    writeFileSync("./dist/index.mjs.LICENSE.txt", `${license}\n${GITMOJI_CLI_LICENSE}`);
  },
  treeshake: true,
};

export default defineConfig({
  ...config,
});
