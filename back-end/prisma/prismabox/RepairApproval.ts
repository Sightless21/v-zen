import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RepairApprovalPlain = t.Object(
  {
    id: t.Integer(),
    approverName: t.String(),
    approvalDate: t.Date(),
    approvalStatus: t.Union(
      [t.Literal("WAITING"), t.Literal("APPROVED"), t.Literal("REJECTED")],
      { additionalProperties: false },
    ),
    comments: __nullable__(t.String()),
    repairJobId: t.Integer(),
  },
  { additionalProperties: false },
);

export const RepairApprovalRelations = t.Object(
  {
    repairJob: t.Object(
      {
        id: t.Integer(),
        jobNo: t.String(),
        assignedDate: __nullable__(t.Date()),
        jobStatus: t.Union(
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
        ),
        totalCost: t.Number(),
        approvalStatus: t.Union(
          [t.Literal("WAITING"), t.Literal("APPROVED"), t.Literal("REJECTED")],
          { additionalProperties: false },
        ),
        approvalDate: __nullable__(t.Date()),
        approvedBy: __nullable__(t.String()),
        completedDate: __nullable__(t.Date()),
        repairRequestId: t.Integer(),
        technicianId: t.Integer(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const RepairApprovalPlainInputCreate = t.Object(
  {
    approverName: t.String(),
    approvalDate: t.Optional(t.Date()),
    approvalStatus: t.Optional(
      t.Union(
        [t.Literal("WAITING"), t.Literal("APPROVED"), t.Literal("REJECTED")],
        { additionalProperties: false },
      ),
    ),
    comments: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RepairApprovalPlainInputUpdate = t.Object(
  {
    approverName: t.Optional(t.String()),
    approvalDate: t.Optional(t.Date()),
    approvalStatus: t.Optional(
      t.Union(
        [t.Literal("WAITING"), t.Literal("APPROVED"), t.Literal("REJECTED")],
        { additionalProperties: false },
      ),
    ),
    comments: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RepairApprovalRelationsInputCreate = t.Object(
  {
    repairJob: t.Object(
      {
        connect: t.Object(
          {
            id: t.Integer({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const RepairApprovalRelationsInputUpdate = t.Partial(
  t.Object(
    {
      repairJob: t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    },
    { additionalProperties: false },
  ),
);

export const RepairApprovalWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          approverName: t.String(),
          approvalDate: t.Date(),
          approvalStatus: t.Union(
            [
              t.Literal("WAITING"),
              t.Literal("APPROVED"),
              t.Literal("REJECTED"),
            ],
            { additionalProperties: false },
          ),
          comments: t.String(),
          repairJobId: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "RepairApproval" },
  ),
);

export const RepairApprovalWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.Integer() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.Integer() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              approverName: t.String(),
              approvalDate: t.Date(),
              approvalStatus: t.Union(
                [
                  t.Literal("WAITING"),
                  t.Literal("APPROVED"),
                  t.Literal("REJECTED"),
                ],
                { additionalProperties: false },
              ),
              comments: t.String(),
              repairJobId: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RepairApproval" },
);

export const RepairApprovalSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      approverName: t.Boolean(),
      approvalDate: t.Boolean(),
      approvalStatus: t.Boolean(),
      comments: t.Boolean(),
      repairJobId: t.Boolean(),
      repairJob: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairApprovalInclude = t.Partial(
  t.Object(
    {
      approvalStatus: t.Boolean(),
      repairJob: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairApprovalOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      approverName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      approvalDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      comments: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      repairJobId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RepairApproval = t.Composite(
  [RepairApprovalPlain, RepairApprovalRelations],
  { additionalProperties: false },
);

export const RepairApprovalInputCreate = t.Composite(
  [RepairApprovalPlainInputCreate, RepairApprovalRelationsInputCreate],
  { additionalProperties: false },
);

export const RepairApprovalInputUpdate = t.Composite(
  [RepairApprovalPlainInputUpdate, RepairApprovalRelationsInputUpdate],
  { additionalProperties: false },
);
