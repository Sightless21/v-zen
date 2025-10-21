import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RepairLogPlain = t.Object(
  {
    id: t.Integer(),
    action: t.String(),
    logDate: t.Date(),
    statusAfter: t.Union(
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
    notes: __nullable__(t.String()),
    repairJobId: t.Integer(),
    technicianId: t.Integer(),
    createdAt: t.Date(),
  },
  { additionalProperties: false },
);

export const RepairLogRelations = t.Object(
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
    technician: t.Object(
      {
        id: t.Integer(),
        name: t.String(),
        email: __nullable__(t.String()),
        phone: __nullable__(t.String()),
        specialization: __nullable__(t.String()),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const RepairLogPlainInputCreate = t.Object(
  {
    action: t.String(),
    logDate: t.Optional(t.Date()),
    statusAfter: t.Union(
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
    notes: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RepairLogPlainInputUpdate = t.Object(
  {
    action: t.Optional(t.String()),
    logDate: t.Optional(t.Date()),
    statusAfter: t.Optional(
      t.Union(
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
    ),
    notes: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RepairLogRelationsInputCreate = t.Object(
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
    technician: t.Object(
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

export const RepairLogRelationsInputUpdate = t.Partial(
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
      technician: t.Object(
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

export const RepairLogWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          action: t.String(),
          logDate: t.Date(),
          statusAfter: t.Union(
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
          notes: t.String(),
          repairJobId: t.Integer(),
          technicianId: t.Integer(),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "RepairLog" },
  ),
);

export const RepairLogWhereUnique = t.Recursive(
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
              action: t.String(),
              logDate: t.Date(),
              statusAfter: t.Union(
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
              notes: t.String(),
              repairJobId: t.Integer(),
              technicianId: t.Integer(),
              createdAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RepairLog" },
);

export const RepairLogSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      action: t.Boolean(),
      logDate: t.Boolean(),
      statusAfter: t.Boolean(),
      notes: t.Boolean(),
      repairJobId: t.Boolean(),
      technicianId: t.Boolean(),
      createdAt: t.Boolean(),
      repairJob: t.Boolean(),
      technician: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairLogInclude = t.Partial(
  t.Object(
    {
      statusAfter: t.Boolean(),
      repairJob: t.Boolean(),
      technician: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairLogOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      action: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      logDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      notes: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      repairJobId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      technicianId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RepairLog = t.Composite([RepairLogPlain, RepairLogRelations], {
  additionalProperties: false,
});

export const RepairLogInputCreate = t.Composite(
  [RepairLogPlainInputCreate, RepairLogRelationsInputCreate],
  { additionalProperties: false },
);

export const RepairLogInputUpdate = t.Composite(
  [RepairLogPlainInputUpdate, RepairLogRelationsInputUpdate],
  { additionalProperties: false },
);
