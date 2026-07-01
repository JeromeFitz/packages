import { get as _get, set as _set } from "lodash-es";

import type { ParsedCommit, TransformedCommit } from "../types";

type TransformFn = (commit: ParsedCommit, context: unknown) => Record<string, unknown> | undefined;

type TransformMap = Record<string, ((value: unknown, path: string) => unknown) | unknown>;

type Transform = TransformFn | TransformMap;

function processCommit(
  chunk: ParsedCommit,
  transform: Transform,
  context: unknown,
): TransformedCommit | undefined {
  const commit: ParsedCommit | TransformedCommit = structuredClone(chunk);

  if (typeof transform === "function") {
    const result = transform(commit as ParsedCommit, context) as TransformedCommit | undefined;
    if (result) result.raw = chunk;
    return result;
  }

  for (const [path, el] of Object.entries(transform)) {
    let value = _get(commit, path);
    value = typeof el === "function" ? el(value, path) : el;
    _set(commit, path, value);
  }

  (commit as TransformedCommit).raw = chunk;
  return commit as TransformedCommit;
}

export type { Transform, TransformFn, TransformMap };
export { processCommit };
