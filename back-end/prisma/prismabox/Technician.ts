import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TechnicianPlain = t.Object(
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
);

export const TechnicianRelations = t.Object(
  {
    repairJobs: t.Array(
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

export const TechnicianPlainInputCreate = t.Object(
  {
    name: t.String(),
    email: t.Optional(__nullable__(t.String())),
    phone: t.Optional(__nullable__(t.String())),
    specialization: t.Optional(__nullable__(t.String())),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const TechnicianPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    email: t.Optional(__nullable__(t.String())),
    phone: t.Optional(__nullable__(t.String())),
    specialization: t.Optional(__nullable__(t.String())),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const TechnicianRelationsInputCreate = t.Object(
  {
    repairJobs: t.Optional(
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

export const TechnicianRelationsInputUpdate = t.Partial(
  t.Object(
    {
      repairJobs: t.Partial(
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

export const TechnicianWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          name: t.String(),
          email: t.String(),
          phone: t.String(),
          specialization: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Technician" },
  ),
);

export const TechnicianWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer(), email: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.Integer() }), t.Object({ email: t.String() })],
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
              name: t.String(),
              email: t.String(),
              phone: t.String(),
              specialization: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Technician" },
);

export const TechnicianSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      email: t.Boolean(),
      phone: t.Boolean(),
      specialization: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      repairJobs: t.Boolean(),
      repairLogs: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const TechnicianInclude = t.Partial(
  t.Object(
    { repairJobs: t.Boolean(), repairLogs: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const TechnicianOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      specialization: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Technician = t.Composite([TechnicianPlain, TechnicianRelations], {
  additionalProperties: false,
});

export const TechnicianInputCreate = t.Composite(
  [TechnicianPlainInputCreate, TechnicianRelationsInputCreate],
  { additionalProperties: false },
);

export const TechnicianInputUpdate = t.Composite(
  [TechnicianPlainInputUpdate, TechnicianRelationsInputUpdate],
  { additionalProperties: false },
);
