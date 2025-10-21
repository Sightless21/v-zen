import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RepairJobPlain = t.Object(
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
);

export const RepairJobRelations = t.Object(
  {
    repairApprovals: t.Array(
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
          comments: __nullable__(t.String()),
          repairJobId: t.Integer(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    repairRequest: t.Object(
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
    repairJobItems: t.Array(
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
          remarks: __nullable__(t.String()),
          repairJobId: t.Integer(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    repairLogs: t.Array(
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
          notes: __nullable__(t.String()),
          repairJobId: t.Integer(),
          technicianId: t.Integer(),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const RepairJobPlainInputCreate = t.Object(
  {
    jobNo: t.String(),
    assignedDate: t.Optional(__nullable__(t.Date())),
    jobStatus: t.Optional(
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
    totalCost: t.Optional(t.Number()),
    approvalStatus: t.Optional(
      t.Union(
        [t.Literal("WAITING"), t.Literal("APPROVED"), t.Literal("REJECTED")],
        { additionalProperties: false },
      ),
    ),
    approvalDate: t.Optional(__nullable__(t.Date())),
    approvedBy: t.Optional(__nullable__(t.String())),
    completedDate: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const RepairJobPlainInputUpdate = t.Object(
  {
    jobNo: t.Optional(t.String()),
    assignedDate: t.Optional(__nullable__(t.Date())),
    jobStatus: t.Optional(
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
    totalCost: t.Optional(t.Number()),
    approvalStatus: t.Optional(
      t.Union(
        [t.Literal("WAITING"), t.Literal("APPROVED"), t.Literal("REJECTED")],
        { additionalProperties: false },
      ),
    ),
    approvalDate: t.Optional(__nullable__(t.Date())),
    approvedBy: t.Optional(__nullable__(t.String())),
    completedDate: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const RepairJobRelationsInputCreate = t.Object(
  {
    repairApprovals: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    repairRequest: t.Object(
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
    repairJobItems: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    repairLogs: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const RepairJobRelationsInputUpdate = t.Partial(
  t.Object(
    {
      repairApprovals: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      repairRequest: t.Object(
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
      repairJobItems: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      repairLogs: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const RepairJobWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          jobNo: t.String(),
          assignedDate: t.Date(),
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
          approvalDate: t.Date(),
          approvedBy: t.String(),
          completedDate: t.Date(),
          repairRequestId: t.Integer(),
          technicianId: t.Integer(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "RepairJob" },
  ),
);

export const RepairJobWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              jobNo: t.String(),
              repairRequestId: t.Integer(),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({ jobNo: t.String() }),
            t.Object({ repairRequestId: t.Integer() }),
          ],
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
              jobNo: t.String(),
              assignedDate: t.Date(),
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
              approvalDate: t.Date(),
              approvedBy: t.String(),
              completedDate: t.Date(),
              repairRequestId: t.Integer(),
              technicianId: t.Integer(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RepairJob" },
);

export const RepairJobSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      jobNo: t.Boolean(),
      assignedDate: t.Boolean(),
      jobStatus: t.Boolean(),
      totalCost: t.Boolean(),
      approvalStatus: t.Boolean(),
      approvalDate: t.Boolean(),
      approvedBy: t.Boolean(),
      completedDate: t.Boolean(),
      repairRequestId: t.Boolean(),
      technicianId: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      repairApprovals: t.Boolean(),
      repairRequest: t.Boolean(),
      technician: t.Boolean(),
      repairJobItems: t.Boolean(),
      repairLogs: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairJobInclude = t.Partial(
  t.Object(
    {
      jobStatus: t.Boolean(),
      approvalStatus: t.Boolean(),
      repairApprovals: t.Boolean(),
      repairRequest: t.Boolean(),
      technician: t.Boolean(),
      repairJobItems: t.Boolean(),
      repairLogs: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RepairJobOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      jobNo: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      assignedDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      totalCost: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      approvalDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      approvedBy: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      completedDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      repairRequestId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      technicianId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RepairJob = t.Composite([RepairJobPlain, RepairJobRelations], {
  additionalProperties: false,
});

export const RepairJobInputCreate = t.Composite(
  [RepairJobPlainInputCreate, RepairJobRelationsInputCreate],
  { additionalProperties: false },
);

export const RepairJobInputUpdate = t.Composite(
  [RepairJobPlainInputUpdate, RepairJobRelationsInputUpdate],
  { additionalProperties: false },
);
