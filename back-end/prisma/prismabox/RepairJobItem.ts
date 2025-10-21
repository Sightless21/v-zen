import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RepairJobItemPlain = t.Object(
  {
    id: t.Integer(),
    itemType: t.Union(
      [
        t.Literal("PART"),
        t.Literal("LABOR"),
        t.Literal("SERVICE"),
        t.Literal("OTHER"),
      ],
      { additionalProperties: false },
    ),
    description: t.String(),
    quantity: t.Integer(),
    unitPrice: t.Number(),
    totalPrice: t.Number(),
    remarks: __nullable__(t.String()),
    repairJobId: t.Integer(),
  },
  { additionalProperties: false },
);

export const RepairJobItemRelations = t.Object(
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

export const RepairJobItemPlainInputCreate = t.Object(
  {
    itemType: t.Union(
      [
        t.Literal("PART"),
        t.Literal("LABOR"),
        t.Literal("SERVICE"),
        t.Literal("OTHER"),
      ],
      { additionalProperties: false },
    ),
    description: t.String(),
    quantity: t.Optional(t.Integer()),
    unitPrice: t.Number(),
    totalPrice: t.Number(),
    remarks: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RepairJobItemPlainInputUpdate = t.Object(
  {
    itemType: t.Optional(
      t.Union(
        [
          t.Literal("PART"),
          t.Literal("LABOR"),
          t.Literal("SERVICE"),
          t.Literal("OTHER"),
        ],
        { additionalProperties: false },
      ),
    ),
    description: t.Optional(t.String()),
    quantity: t.Optional(t.Integer()),
    unitPrice: t.Optional(t.Number()),
    totalPrice: t.Optional(t.Number()),
    remarks: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RepairJobItemRelationsInputCreate = t.Object(
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

export const RepairJobItemRelationsInputUpdate = t.Partial(
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

export const RepairJobItemWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          itemType: t.Union(
            [
              t.Literal("PART"),
              t.Literal("LABOR"),
              t.Literal("SERVICE"),
              t.Literal("OTHER"),
            ],
            { additionalProperties: false },
          ),
          description: t.String(),
          quantity: t.Integer(),
          unitPrice: t.Number(),
          totalPrice: t.Number(),
          remarks: t.String(),
          repairJobId: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "RepairJobItem" },
  ),
);

export const RepairJobItemWhereUnique = t.Recursive(
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
              itemType: t.Union(
                [
                  t.Literal("PART"),
                  t.Literal("LABOR"),
                  t.Literal("SERVICE"),
                  t.Literal("OTHER"),
                ],
                { additionalProperties: false },
              ),
              description: t.String(),
              quantity: t.Integer(),
              unitPrice: t.Number(),
              totalPrice: t.Number(),
              remarks: t.String(),
              repairJobId: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RepairJobItem" },
);

export const RepairJobItemSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      itemType: t.Boolean(),
      description: t.Boolean(),
      quantity: t.Boolean(),
      unitPrice: t.Boolean(),
      totalPrice: t.Boolean(),
      remarks: t.Boolean(),
      repairJobId: t.Boolean(),
      repairJob: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairJobItemInclude = t.Partial(
  t.Object(
    { itemType: t.Boolean(), repairJob: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const RepairJobItemOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unitPrice: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      totalPrice: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      remarks: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      repairJobId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RepairJobItem = t.Composite(
  [RepairJobItemPlain, RepairJobItemRelations],
  { additionalProperties: false },
);

export const RepairJobItemInputCreate = t.Composite(
  [RepairJobItemPlainInputCreate, RepairJobItemRelationsInputCreate],
  { additionalProperties: false },
);

export const RepairJobItemInputUpdate = t.Composite(
  [RepairJobItemPlainInputUpdate, RepairJobItemRelationsInputUpdate],
  { additionalProperties: false },
);
