import type { PluginSpec } from "semantic-release";

import { getConfig } from "./get-config";
import { getPluginOptions } from "./plugins/index";

const plugins: PluginSpec[] = getPluginOptions();
const config = getConfig();

export type { GetConfigOptions } from "./get-config";

export { config, getConfig, getPluginOptions, plugins };
