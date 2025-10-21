import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ApprovalStatus = t.Union(
  [t.Literal("WAITING"), t.Literal("APPROVED"), t.Literal("REJECTED")],
  { additionalProperties: false },
);
