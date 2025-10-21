import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const JobItemType = t.Union(
  [
    t.Literal("PART"),
    t.Literal("LABOR"),
    t.Literal("SERVICE"),
    t.Literal("OTHER"),
  ],
  { additionalProperties: false },
);
