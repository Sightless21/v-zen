import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const CustomerPlain = t.Object(
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
);

export const CustomerRelations = t.Object(
  {
    products: t.Array(
      t.Object(
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
      { additionalProperties: false },
    ),
    repairRequests: t.Array(
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
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const CustomerPlainInputCreate = t.Object(
  {
    name: t.String(),
    email: t.String(),
    phone: t.Optional(__nullable__(t.String())),
    address: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const CustomerPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    email: t.Optional(t.String()),
    phone: t.Optional(__nullable__(t.String())),
    address: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const CustomerRelationsInputCreate = t.Object(
  {
    products: t.Optional(
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
    repairRequests: t.Optional(
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

export const CustomerRelationsInputUpdate = t.Partial(
  t.Object(
    {
      products: t.Partial(
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
      repairRequests: t.Partial(
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

export const CustomerWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          lineUserId: t.String(),
          name: t.String(),
          email: t.String(),
          phone: t.String(),
          address: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Customer" },
  ),
);

export const CustomerWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer(), lineUserId: t.String(), email: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({ lineUserId: t.String() }),
            t.Object({ email: t.String() }),
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
              lineUserId: t.String(),
              name: t.String(),
              email: t.String(),
              phone: t.String(),
              address: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Customer" },
);

export const CustomerSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      lineUserId: t.Boolean(),
      name: t.Boolean(),
      email: t.Boolean(),
      phone: t.Boolean(),
      address: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      products: t.Boolean(),
      repairRequests: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const CustomerInclude = t.Partial(
  t.Object(
    { products: t.Boolean(), repairRequests: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const CustomerOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      lineUserId: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      address: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Customer = t.Composite([CustomerPlain, CustomerRelations], {
  additionalProperties: false,
});

export const CustomerInputCreate = t.Composite(
  [CustomerPlainInputCreate, CustomerRelationsInputCreate],
  { additionalProperties: false },
);

export const CustomerInputUpdate = t.Composite(
  [CustomerPlainInputUpdate, CustomerRelationsInputUpdate],
  { additionalProperties: false },
);
