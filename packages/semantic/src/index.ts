import type { PluginSpec } from "semantic-release";

import { getConfig } from "./getConfig";
import { getPluginOptions } from "./plugins/index";

const plugins: PluginSpec[] = getPluginOptions();
const config = getConfig();

export type { GetConfigOptions } from "./getConfig";

export { config, getConfig, getPluginOptions, plugins };
