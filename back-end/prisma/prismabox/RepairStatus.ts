import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RepairStatus = t.Union(
  [
    t.Literal("PENDING"),
    t.Literal("ASSIGNED"),
    t.Literal("IN_PROGRESS"),
    t.Literal("WAITING_PARTS"),
    t.Literal("REPAIRED"),
    t.Literal("RETURNED"),
    t.Literal("CANCELLED"),
  ],
  { additionalProperties: false },
);
