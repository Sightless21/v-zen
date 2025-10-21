import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const JobStatus = t.Union(
  [
    t.Literal("PENDING"),
    t.Literal("IN_PROGRESS"),
    t.Literal("WAITING_PARTS"),
    t.Literal("APPROVED"),
    t.Literal("COMPLETED"),
    t.Literal("RETURNED"),
    t.Literal("CANCELLED"),
  ],
  { additionalProperties: false },
);
