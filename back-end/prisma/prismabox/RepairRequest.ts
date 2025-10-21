import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RepairRequestPlain = t.Object(
  {
    id: t.Integer(),
    requestNo: t.String(),
    problemDescription: t.String(),
    requestDate: t.Date(),
    status: t.Union(
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
    ),
    customerId: t.Integer(),
    productId: t.Integer(),
  },
  { additionalProperties: false },
);

export const RepairRequestRelations = t.Object(
  {
    repairJob: __nullable__(
      t.Object(
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
            [
              t.Literal("WAITING"),
              t.Literal("APPROVED"),
              t.Literal("REJECTED"),
            ],
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
    ),
    customer: t.Object(
      {
        id: t.Integer(),
        lineUserId: t.String(),
        name: t.String(),
        email: t.String(),
        phone: __nullable__(t.String()),
        address: __nullable__(t.String()),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
    product: t.Object(
      {
        id: t.Integer(),
        productCode: t.String(),
        name: t.String(),
        model: t.String(),
        description: __nullable__(t.String()),
        customerId: t.Integer(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const RepairRequestPlainInputCreate = t.Object(
  {
    requestNo: t.String(),
    problemDescription: t.String(),
    requestDate: t.Optional(t.Date()),
    status: t.Optional(
      t.Union(
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
      ),
    ),
  },
  { additionalProperties: false },
);

export const RepairRequestPlainInputUpdate = t.Object(
  {
    requestNo: t.Optional(t.String()),
    problemDescription: t.Optional(t.String()),
    requestDate: t.Optional(t.Date()),
    status: t.Optional(
      t.Union(
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
      ),
    ),
  },
  { additionalProperties: false },
);

export const RepairRequestRelationsInputCreate = t.Object(
  {
    repairJob: t.Optional(
      t.Object(
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
    ),
    customer: t.Object(
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
    product: t.Object(
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

export const RepairRequestRelationsInputUpdate = t.Partial(
  t.Object(
    {
      repairJob: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      customer: t.Object(
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
      product: t.Object(
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

export const RepairRequestWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          requestNo: t.String(),
          problemDescription: t.String(),
          requestDate: t.Date(),
          status: t.Union(
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
          ),
          customerId: t.Integer(),
          productId: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "RepairRequest" },
  ),
);

export const RepairRequestWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer(), requestNo: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.Integer() }), t.Object({ requestNo: t.String() })],
          { additionalProperties: false },
        ),
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
              requestNo: t.String(),
              problemDescription: t.String(),
              requestDate: t.Date(),
              status: t.Union(
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
              ),
              customerId: t.Integer(),
              productId: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RepairRequest" },
);

export const RepairRequestSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      requestNo: t.Boolean(),
      problemDescription: t.Boolean(),
      requestDate: t.Boolean(),
      status: t.Boolean(),
      customerId: t.Boolean(),
      productId: t.Boolean(),
      repairJob: t.Boolean(),
      customer: t.Boolean(),
      product: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairRequestInclude = t.Partial(
  t.Object(
    {
      status: t.Boolean(),
      repairJob: t.Boolean(),
      customer: t.Boolean(),
      product: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairRequestOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      requestNo: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      problemDescription: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      requestDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customerId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      productId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RepairRequest = t.Composite(
  [RepairRequestPlain, RepairRequestRelations],
  { additionalProperties: false },
);

export const RepairRequestInputCreate = t.Composite(
  [RepairRequestPlainInputCreate, RepairRequestRelationsInputCreate],
  { additionalProperties: false },
);

export const RepairRequestInputUpdate = t.Composite(
  [RepairRequestPlainInputUpdate, RepairRequestRelationsInputUpdate],
  { additionalProperties: false },
);
