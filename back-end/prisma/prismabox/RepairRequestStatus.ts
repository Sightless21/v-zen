import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RepairRequestStatus = t.Union(
  [
    t.Literal("PENDING"),
    t.Literal("RECEIVED"),
    t.Literal("UNDER_REVIEW"),
    t.Literal("APPROVED"),
    t.Literal("REJECTED"),
    t.Literal("CANCELLED"),
    t.Literal("JOB_CREATED"),
  ],
  { additionalProperties: false },
);
