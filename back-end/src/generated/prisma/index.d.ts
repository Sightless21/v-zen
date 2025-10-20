
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Technician
 * 
 */
export type Technician = $Result.DefaultSelection<Prisma.$TechnicianPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model RepairRequest
 * 
 */
export type RepairRequest = $Result.DefaultSelection<Prisma.$RepairRequestPayload>
/**
 * Model RepairJob
 * 
 */
export type RepairJob = $Result.DefaultSelection<Prisma.$RepairJobPayload>
/**
 * Model RepairJobItem
 * 
 */
export type RepairJobItem = $Result.DefaultSelection<Prisma.$RepairJobItemPayload>
/**
 * Model RepairApproval
 * 
 */
export type RepairApproval = $Result.DefaultSelection<Prisma.$RepairApprovalPayload>
/**
 * Model RepairLog
 * 
 */
export type RepairLog = $Result.DefaultSelection<Prisma.$RepairLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RepairRequestStatus: {
  PENDING: 'PENDING',
  RECEIVED: 'RECEIVED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  JOB_CREATED: 'JOB_CREATED'
};

export type RepairRequestStatus = (typeof RepairRequestStatus)[keyof typeof RepairRequestStatus]


export const JobStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING_PARTS: 'WAITING_PARTS',
  APPROVED: 'APPROVED',
  COMPLETED: 'COMPLETED',
  RETURNED: 'RETURNED',
  CANCELLED: 'CANCELLED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const RepairStatus: {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING_PARTS: 'WAITING_PARTS',
  REPAIRED: 'REPAIRED',
  RETURNED: 'RETURNED',
  CANCELLED: 'CANCELLED'
};

export type RepairStatus = (typeof RepairStatus)[keyof typeof RepairStatus]


export const ApprovalStatus: {
  WAITING: 'WAITING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]


export const JobItemType: {
  PART: 'PART',
  LABOR: 'LABOR',
  SERVICE: 'SERVICE',
  OTHER: 'OTHER'
};

export type JobItemType = (typeof JobItemType)[keyof typeof JobItemType]

}

export type RepairRequestStatus = $Enums.RepairRequestStatus

export const RepairRequestStatus: typeof $Enums.RepairRequestStatus

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type RepairStatus = $Enums.RepairStatus

export const RepairStatus: typeof $Enums.RepairStatus

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

export type JobItemType = $Enums.JobItemType

export const JobItemType: typeof $Enums.JobItemType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technician`: Exposes CRUD operations for the **Technician** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Technicians
    * const technicians = await prisma.technician.findMany()
    * ```
    */
  get technician(): Prisma.TechnicianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairRequest`: Exposes CRUD operations for the **RepairRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairRequests
    * const repairRequests = await prisma.repairRequest.findMany()
    * ```
    */
  get repairRequest(): Prisma.RepairRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairJob`: Exposes CRUD operations for the **RepairJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairJobs
    * const repairJobs = await prisma.repairJob.findMany()
    * ```
    */
  get repairJob(): Prisma.RepairJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairJobItem`: Exposes CRUD operations for the **RepairJobItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairJobItems
    * const repairJobItems = await prisma.repairJobItem.findMany()
    * ```
    */
  get repairJobItem(): Prisma.RepairJobItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairApproval`: Exposes CRUD operations for the **RepairApproval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairApprovals
    * const repairApprovals = await prisma.repairApproval.findMany()
    * ```
    */
  get repairApproval(): Prisma.RepairApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairLog`: Exposes CRUD operations for the **RepairLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairLogs
    * const repairLogs = await prisma.repairLog.findMany()
    * ```
    */
  get repairLog(): Prisma.RepairLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Technician: 'Technician',
    Product: 'Product',
    RepairRequest: 'RepairRequest',
    RepairJob: 'RepairJob',
    RepairJobItem: 'RepairJobItem',
    RepairApproval: 'RepairApproval',
    RepairLog: 'RepairLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "technician" | "product" | "repairRequest" | "repairJob" | "repairJobItem" | "repairApproval" | "repairLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Technician: {
        payload: Prisma.$TechnicianPayload<ExtArgs>
        fields: Prisma.TechnicianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          findFirst: {
            args: Prisma.TechnicianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          findMany: {
            args: Prisma.TechnicianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          create: {
            args: Prisma.TechnicianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          createMany: {
            args: Prisma.TechnicianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnicianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          delete: {
            args: Prisma.TechnicianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          update: {
            args: Prisma.TechnicianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          deleteMany: {
            args: Prisma.TechnicianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnicianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          upsert: {
            args: Prisma.TechnicianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          aggregate: {
            args: Prisma.TechnicianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnician>
          }
          groupBy: {
            args: Prisma.TechnicianGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnicianCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      RepairRequest: {
        payload: Prisma.$RepairRequestPayload<ExtArgs>
        fields: Prisma.RepairRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          findFirst: {
            args: Prisma.RepairRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          findMany: {
            args: Prisma.RepairRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>[]
          }
          create: {
            args: Prisma.RepairRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          createMany: {
            args: Prisma.RepairRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>[]
          }
          delete: {
            args: Prisma.RepairRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          update: {
            args: Prisma.RepairRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          deleteMany: {
            args: Prisma.RepairRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>[]
          }
          upsert: {
            args: Prisma.RepairRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          aggregate: {
            args: Prisma.RepairRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairRequest>
          }
          groupBy: {
            args: Prisma.RepairRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairRequestCountArgs<ExtArgs>
            result: $Utils.Optional<RepairRequestCountAggregateOutputType> | number
          }
        }
      }
      RepairJob: {
        payload: Prisma.$RepairJobPayload<ExtArgs>
        fields: Prisma.RepairJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>
          }
          findFirst: {
            args: Prisma.RepairJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>
          }
          findMany: {
            args: Prisma.RepairJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>[]
          }
          create: {
            args: Prisma.RepairJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>
          }
          createMany: {
            args: Prisma.RepairJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>[]
          }
          delete: {
            args: Prisma.RepairJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>
          }
          update: {
            args: Prisma.RepairJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>
          }
          deleteMany: {
            args: Prisma.RepairJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>[]
          }
          upsert: {
            args: Prisma.RepairJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobPayload>
          }
          aggregate: {
            args: Prisma.RepairJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairJob>
          }
          groupBy: {
            args: Prisma.RepairJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairJobCountArgs<ExtArgs>
            result: $Utils.Optional<RepairJobCountAggregateOutputType> | number
          }
        }
      }
      RepairJobItem: {
        payload: Prisma.$RepairJobItemPayload<ExtArgs>
        fields: Prisma.RepairJobItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairJobItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairJobItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>
          }
          findFirst: {
            args: Prisma.RepairJobItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairJobItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>
          }
          findMany: {
            args: Prisma.RepairJobItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>[]
          }
          create: {
            args: Prisma.RepairJobItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>
          }
          createMany: {
            args: Prisma.RepairJobItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairJobItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>[]
          }
          delete: {
            args: Prisma.RepairJobItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>
          }
          update: {
            args: Prisma.RepairJobItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>
          }
          deleteMany: {
            args: Prisma.RepairJobItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairJobItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairJobItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>[]
          }
          upsert: {
            args: Prisma.RepairJobItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairJobItemPayload>
          }
          aggregate: {
            args: Prisma.RepairJobItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairJobItem>
          }
          groupBy: {
            args: Prisma.RepairJobItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairJobItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairJobItemCountArgs<ExtArgs>
            result: $Utils.Optional<RepairJobItemCountAggregateOutputType> | number
          }
        }
      }
      RepairApproval: {
        payload: Prisma.$RepairApprovalPayload<ExtArgs>
        fields: Prisma.RepairApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>
          }
          findFirst: {
            args: Prisma.RepairApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>
          }
          findMany: {
            args: Prisma.RepairApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>[]
          }
          create: {
            args: Prisma.RepairApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>
          }
          createMany: {
            args: Prisma.RepairApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>[]
          }
          delete: {
            args: Prisma.RepairApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>
          }
          update: {
            args: Prisma.RepairApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>
          }
          deleteMany: {
            args: Prisma.RepairApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>[]
          }
          upsert: {
            args: Prisma.RepairApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairApprovalPayload>
          }
          aggregate: {
            args: Prisma.RepairApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairApproval>
          }
          groupBy: {
            args: Prisma.RepairApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<RepairApprovalCountAggregateOutputType> | number
          }
        }
      }
      RepairLog: {
        payload: Prisma.$RepairLogPayload<ExtArgs>
        fields: Prisma.RepairLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>
          }
          findFirst: {
            args: Prisma.RepairLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>
          }
          findMany: {
            args: Prisma.RepairLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>[]
          }
          create: {
            args: Prisma.RepairLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>
          }
          createMany: {
            args: Prisma.RepairLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>[]
          }
          delete: {
            args: Prisma.RepairLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>
          }
          update: {
            args: Prisma.RepairLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>
          }
          deleteMany: {
            args: Prisma.RepairLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>[]
          }
          upsert: {
            args: Prisma.RepairLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairLogPayload>
          }
          aggregate: {
            args: Prisma.RepairLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairLog>
          }
          groupBy: {
            args: Prisma.RepairLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairLogCountArgs<ExtArgs>
            result: $Utils.Optional<RepairLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    technician?: TechnicianOmit
    product?: ProductOmit
    repairRequest?: RepairRequestOmit
    repairJob?: RepairJobOmit
    repairJobItem?: RepairJobItemOmit
    repairApproval?: RepairApprovalOmit
    repairLog?: RepairLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    products: number
    repairRequests: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CustomerCountOutputTypeCountProductsArgs
    repairRequests?: boolean | CustomerCountOutputTypeCountRepairRequestsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountRepairRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairRequestWhereInput
  }


  /**
   * Count Type TechnicianCountOutputType
   */

  export type TechnicianCountOutputType = {
    repairJobs: number
    repairLogs: number
  }

  export type TechnicianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJobs?: boolean | TechnicianCountOutputTypeCountRepairJobsArgs
    repairLogs?: boolean | TechnicianCountOutputTypeCountRepairLogsArgs
  }

  // Custom InputTypes
  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianCountOutputType
     */
    select?: TechnicianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountRepairJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairJobWhereInput
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountRepairLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairLogWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    repairRequests: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequests?: boolean | ProductCountOutputTypeCountRepairRequestsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRepairRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairRequestWhereInput
  }


  /**
   * Count Type RepairJobCountOutputType
   */

  export type RepairJobCountOutputType = {
    repairJobItems: number
    repairApprovals: number
    repairLogs: number
  }

  export type RepairJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJobItems?: boolean | RepairJobCountOutputTypeCountRepairJobItemsArgs
    repairApprovals?: boolean | RepairJobCountOutputTypeCountRepairApprovalsArgs
    repairLogs?: boolean | RepairJobCountOutputTypeCountRepairLogsArgs
  }

  // Custom InputTypes
  /**
   * RepairJobCountOutputType without action
   */
  export type RepairJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobCountOutputType
     */
    select?: RepairJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepairJobCountOutputType without action
   */
  export type RepairJobCountOutputTypeCountRepairJobItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairJobItemWhereInput
  }

  /**
   * RepairJobCountOutputType without action
   */
  export type RepairJobCountOutputTypeCountRepairApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairApprovalWhereInput
  }

  /**
   * RepairJobCountOutputType without action
   */
  export type RepairJobCountOutputTypeCountRepairLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    lineUserId: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    lineUserId: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    lineUserId: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    lineUserId?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    lineUserId?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    lineUserId?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    lineUserId: string
    name: string
    email: string
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineUserId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Customer$productsArgs<ExtArgs>
    repairRequests?: boolean | Customer$repairRequestsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineUserId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineUserId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    lineUserId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lineUserId" | "name" | "email" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Customer$productsArgs<ExtArgs>
    repairRequests?: boolean | Customer$repairRequestsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      repairRequests: Prisma.$RepairRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lineUserId: string
      name: string
      email: string
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Customer$productsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repairRequests<T extends Customer$repairRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$repairRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly lineUserId: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.products
   */
  export type Customer$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Customer.repairRequests
   */
  export type Customer$repairRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    where?: RepairRequestWhereInput
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    cursor?: RepairRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Technician
   */

  export type AggregateTechnician = {
    _count: TechnicianCountAggregateOutputType | null
    _avg: TechnicianAvgAggregateOutputType | null
    _sum: TechnicianSumAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  export type TechnicianAvgAggregateOutputType = {
    id: number | null
  }

  export type TechnicianSumAggregateOutputType = {
    id: number | null
  }

  export type TechnicianMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    specialization: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechnicianMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    specialization: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechnicianCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    specialization: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TechnicianAvgAggregateInputType = {
    id?: true
  }

  export type TechnicianSumAggregateInputType = {
    id?: true
  }

  export type TechnicianMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    specialization?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechnicianMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    specialization?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechnicianCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    specialization?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TechnicianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technician to aggregate.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Technicians
    **/
    _count?: true | TechnicianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianMaxAggregateInputType
  }

  export type GetTechnicianAggregateType<T extends TechnicianAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnician]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnician[P]>
      : GetScalarType<T[P], AggregateTechnician[P]>
  }




  export type TechnicianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianWhereInput
    orderBy?: TechnicianOrderByWithAggregationInput | TechnicianOrderByWithAggregationInput[]
    by: TechnicianScalarFieldEnum[] | TechnicianScalarFieldEnum
    having?: TechnicianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianCountAggregateInputType | true
    _avg?: TechnicianAvgAggregateInputType
    _sum?: TechnicianSumAggregateInputType
    _min?: TechnicianMinAggregateInputType
    _max?: TechnicianMaxAggregateInputType
  }

  export type TechnicianGroupByOutputType = {
    id: number
    name: string
    email: string | null
    phone: string | null
    specialization: string | null
    createdAt: Date
    updatedAt: Date
    _count: TechnicianCountAggregateOutputType | null
    _avg: TechnicianAvgAggregateOutputType | null
    _sum: TechnicianSumAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  type GetTechnicianGroupByPayload<T extends TechnicianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
        }
      >
    >


  export type TechnicianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    specialization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repairJobs?: boolean | Technician$repairJobsArgs<ExtArgs>
    repairLogs?: boolean | Technician$repairLogsArgs<ExtArgs>
    _count?: boolean | TechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    specialization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    specialization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    specialization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TechnicianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "specialization" | "createdAt" | "updatedAt", ExtArgs["result"]["technician"]>
  export type TechnicianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJobs?: boolean | Technician$repairJobsArgs<ExtArgs>
    repairLogs?: boolean | Technician$repairLogsArgs<ExtArgs>
    _count?: boolean | TechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TechnicianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TechnicianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TechnicianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Technician"
    objects: {
      repairJobs: Prisma.$RepairJobPayload<ExtArgs>[]
      repairLogs: Prisma.$RepairLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      phone: string | null
      specialization: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["technician"]>
    composites: {}
  }

  type TechnicianGetPayload<S extends boolean | null | undefined | TechnicianDefaultArgs> = $Result.GetResult<Prisma.$TechnicianPayload, S>

  type TechnicianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnicianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnicianCountAggregateInputType | true
    }

  export interface TechnicianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Technician'], meta: { name: 'Technician' } }
    /**
     * Find zero or one Technician that matches the filter.
     * @param {TechnicianFindUniqueArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicianFindUniqueArgs>(args: SelectSubset<T, TechnicianFindUniqueArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Technician that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnicianFindUniqueOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicianFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technician that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindFirstArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicianFindFirstArgs>(args?: SelectSubset<T, TechnicianFindFirstArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technician that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindFirstOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicianFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicianFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Technicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technicians
     * const technicians = await prisma.technician.findMany()
     * 
     * // Get first 10 Technicians
     * const technicians = await prisma.technician.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianWithIdOnly = await prisma.technician.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicianFindManyArgs>(args?: SelectSubset<T, TechnicianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Technician.
     * @param {TechnicianCreateArgs} args - Arguments to create a Technician.
     * @example
     * // Create one Technician
     * const Technician = await prisma.technician.create({
     *   data: {
     *     // ... data to create a Technician
     *   }
     * })
     * 
     */
    create<T extends TechnicianCreateArgs>(args: SelectSubset<T, TechnicianCreateArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Technicians.
     * @param {TechnicianCreateManyArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicianCreateManyArgs>(args?: SelectSubset<T, TechnicianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Technicians and returns the data saved in the database.
     * @param {TechnicianCreateManyAndReturnArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Technicians and only return the `id`
     * const technicianWithIdOnly = await prisma.technician.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnicianCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnicianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Technician.
     * @param {TechnicianDeleteArgs} args - Arguments to delete one Technician.
     * @example
     * // Delete one Technician
     * const Technician = await prisma.technician.delete({
     *   where: {
     *     // ... filter to delete one Technician
     *   }
     * })
     * 
     */
    delete<T extends TechnicianDeleteArgs>(args: SelectSubset<T, TechnicianDeleteArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Technician.
     * @param {TechnicianUpdateArgs} args - Arguments to update one Technician.
     * @example
     * // Update one Technician
     * const technician = await prisma.technician.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicianUpdateArgs>(args: SelectSubset<T, TechnicianUpdateArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Technicians.
     * @param {TechnicianDeleteManyArgs} args - Arguments to filter Technicians to delete.
     * @example
     * // Delete a few Technicians
     * const { count } = await prisma.technician.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicianDeleteManyArgs>(args?: SelectSubset<T, TechnicianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicianUpdateManyArgs>(args: SelectSubset<T, TechnicianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians and returns the data updated in the database.
     * @param {TechnicianUpdateManyAndReturnArgs} args - Arguments to update many Technicians.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Technicians and only return the `id`
     * const technicianWithIdOnly = await prisma.technician.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TechnicianUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnicianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Technician.
     * @param {TechnicianUpsertArgs} args - Arguments to update or create a Technician.
     * @example
     * // Update or create a Technician
     * const technician = await prisma.technician.upsert({
     *   create: {
     *     // ... data to create a Technician
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technician we want to update
     *   }
     * })
     */
    upsert<T extends TechnicianUpsertArgs>(args: SelectSubset<T, TechnicianUpsertArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianCountArgs} args - Arguments to filter Technicians to count.
     * @example
     * // Count the number of Technicians
     * const count = await prisma.technician.count({
     *   where: {
     *     // ... the filter for the Technicians we want to count
     *   }
     * })
    **/
    count<T extends TechnicianCountArgs>(
      args?: Subset<T, TechnicianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnicianAggregateArgs>(args: Subset<T, TechnicianAggregateArgs>): Prisma.PrismaPromise<GetTechnicianAggregateType<T>>

    /**
     * Group by Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnicianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicianGroupByArgs['orderBy'] }
        : { orderBy?: TechnicianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnicianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Technician model
   */
  readonly fields: TechnicianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Technician.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairJobs<T extends Technician$repairJobsArgs<ExtArgs> = {}>(args?: Subset<T, Technician$repairJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repairLogs<T extends Technician$repairLogsArgs<ExtArgs> = {}>(args?: Subset<T, Technician$repairLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Technician model
   */
  interface TechnicianFieldRefs {
    readonly id: FieldRef<"Technician", 'Int'>
    readonly name: FieldRef<"Technician", 'String'>
    readonly email: FieldRef<"Technician", 'String'>
    readonly phone: FieldRef<"Technician", 'String'>
    readonly specialization: FieldRef<"Technician", 'String'>
    readonly createdAt: FieldRef<"Technician", 'DateTime'>
    readonly updatedAt: FieldRef<"Technician", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Technician findUnique
   */
  export type TechnicianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician findUniqueOrThrow
   */
  export type TechnicianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician findFirst
   */
  export type TechnicianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician findFirstOrThrow
   */
  export type TechnicianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician findMany
   */
  export type TechnicianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technicians to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician create
   */
  export type TechnicianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The data needed to create a Technician.
     */
    data: XOR<TechnicianCreateInput, TechnicianUncheckedCreateInput>
  }

  /**
   * Technician createMany
   */
  export type TechnicianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Technicians.
     */
    data: TechnicianCreateManyInput | TechnicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technician createManyAndReturn
   */
  export type TechnicianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The data used to create many Technicians.
     */
    data: TechnicianCreateManyInput | TechnicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technician update
   */
  export type TechnicianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The data needed to update a Technician.
     */
    data: XOR<TechnicianUpdateInput, TechnicianUncheckedUpdateInput>
    /**
     * Choose, which Technician to update.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician updateMany
   */
  export type TechnicianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Technicians.
     */
    data: XOR<TechnicianUpdateManyMutationInput, TechnicianUncheckedUpdateManyInput>
    /**
     * Filter which Technicians to update
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to update.
     */
    limit?: number
  }

  /**
   * Technician updateManyAndReturn
   */
  export type TechnicianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The data used to update Technicians.
     */
    data: XOR<TechnicianUpdateManyMutationInput, TechnicianUncheckedUpdateManyInput>
    /**
     * Filter which Technicians to update
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to update.
     */
    limit?: number
  }

  /**
   * Technician upsert
   */
  export type TechnicianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The filter to search for the Technician to update in case it exists.
     */
    where: TechnicianWhereUniqueInput
    /**
     * In case the Technician found by the `where` argument doesn't exist, create a new Technician with this data.
     */
    create: XOR<TechnicianCreateInput, TechnicianUncheckedCreateInput>
    /**
     * In case the Technician was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicianUpdateInput, TechnicianUncheckedUpdateInput>
  }

  /**
   * Technician delete
   */
  export type TechnicianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter which Technician to delete.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician deleteMany
   */
  export type TechnicianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technicians to delete
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to delete.
     */
    limit?: number
  }

  /**
   * Technician.repairJobs
   */
  export type Technician$repairJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    where?: RepairJobWhereInput
    orderBy?: RepairJobOrderByWithRelationInput | RepairJobOrderByWithRelationInput[]
    cursor?: RepairJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairJobScalarFieldEnum | RepairJobScalarFieldEnum[]
  }

  /**
   * Technician.repairLogs
   */
  export type Technician$repairLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    where?: RepairLogWhereInput
    orderBy?: RepairLogOrderByWithRelationInput | RepairLogOrderByWithRelationInput[]
    cursor?: RepairLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairLogScalarFieldEnum | RepairLogScalarFieldEnum[]
  }

  /**
   * Technician without action
   */
  export type TechnicianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    productCode: string | null
    name: string | null
    model: string | null
    description: string | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    productCode: string | null
    name: string | null
    model: string | null
    description: string | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    productCode: number
    name: number
    model: number
    description: number
    customerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    productCode?: true
    name?: true
    model?: true
    description?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    productCode?: true
    name?: true
    model?: true
    description?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    productCode?: true
    name?: true
    model?: true
    description?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    productCode: string
    name: string
    model: string
    description: string | null
    customerId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCode?: boolean
    name?: boolean
    model?: boolean
    description?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    repairRequests?: boolean | Product$repairRequestsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCode?: boolean
    name?: boolean
    model?: boolean
    description?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCode?: boolean
    name?: boolean
    model?: boolean
    description?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    productCode?: boolean
    name?: boolean
    model?: boolean
    description?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productCode" | "name" | "model" | "description" | "customerId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    repairRequests?: boolean | Product$repairRequestsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      repairRequests: Prisma.$RepairRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productCode: string
      name: string
      model: string
      description: string | null
      customerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repairRequests<T extends Product$repairRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Product$repairRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly productCode: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly model: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly customerId: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.repairRequests
   */
  export type Product$repairRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    where?: RepairRequestWhereInput
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    cursor?: RepairRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model RepairRequest
   */

  export type AggregateRepairRequest = {
    _count: RepairRequestCountAggregateOutputType | null
    _avg: RepairRequestAvgAggregateOutputType | null
    _sum: RepairRequestSumAggregateOutputType | null
    _min: RepairRequestMinAggregateOutputType | null
    _max: RepairRequestMaxAggregateOutputType | null
  }

  export type RepairRequestAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    productId: number | null
  }

  export type RepairRequestSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    productId: number | null
  }

  export type RepairRequestMinAggregateOutputType = {
    id: number | null
    requestNo: string | null
    problemDescription: string | null
    requestDate: Date | null
    status: $Enums.RepairRequestStatus | null
    customerId: number | null
    productId: number | null
  }

  export type RepairRequestMaxAggregateOutputType = {
    id: number | null
    requestNo: string | null
    problemDescription: string | null
    requestDate: Date | null
    status: $Enums.RepairRequestStatus | null
    customerId: number | null
    productId: number | null
  }

  export type RepairRequestCountAggregateOutputType = {
    id: number
    requestNo: number
    problemDescription: number
    requestDate: number
    status: number
    customerId: number
    productId: number
    _all: number
  }


  export type RepairRequestAvgAggregateInputType = {
    id?: true
    customerId?: true
    productId?: true
  }

  export type RepairRequestSumAggregateInputType = {
    id?: true
    customerId?: true
    productId?: true
  }

  export type RepairRequestMinAggregateInputType = {
    id?: true
    requestNo?: true
    problemDescription?: true
    requestDate?: true
    status?: true
    customerId?: true
    productId?: true
  }

  export type RepairRequestMaxAggregateInputType = {
    id?: true
    requestNo?: true
    problemDescription?: true
    requestDate?: true
    status?: true
    customerId?: true
    productId?: true
  }

  export type RepairRequestCountAggregateInputType = {
    id?: true
    requestNo?: true
    problemDescription?: true
    requestDate?: true
    status?: true
    customerId?: true
    productId?: true
    _all?: true
  }

  export type RepairRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairRequest to aggregate.
     */
    where?: RepairRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairRequests to fetch.
     */
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairRequests
    **/
    _count?: true | RepairRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairRequestMaxAggregateInputType
  }

  export type GetRepairRequestAggregateType<T extends RepairRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairRequest[P]>
      : GetScalarType<T[P], AggregateRepairRequest[P]>
  }




  export type RepairRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairRequestWhereInput
    orderBy?: RepairRequestOrderByWithAggregationInput | RepairRequestOrderByWithAggregationInput[]
    by: RepairRequestScalarFieldEnum[] | RepairRequestScalarFieldEnum
    having?: RepairRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairRequestCountAggregateInputType | true
    _avg?: RepairRequestAvgAggregateInputType
    _sum?: RepairRequestSumAggregateInputType
    _min?: RepairRequestMinAggregateInputType
    _max?: RepairRequestMaxAggregateInputType
  }

  export type RepairRequestGroupByOutputType = {
    id: number
    requestNo: string
    problemDescription: string
    requestDate: Date
    status: $Enums.RepairRequestStatus
    customerId: number
    productId: number
    _count: RepairRequestCountAggregateOutputType | null
    _avg: RepairRequestAvgAggregateOutputType | null
    _sum: RepairRequestSumAggregateOutputType | null
    _min: RepairRequestMinAggregateOutputType | null
    _max: RepairRequestMaxAggregateOutputType | null
  }

  type GetRepairRequestGroupByPayload<T extends RepairRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RepairRequestGroupByOutputType[P]>
        }
      >
    >


  export type RepairRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestNo?: boolean
    problemDescription?: boolean
    requestDate?: boolean
    status?: boolean
    customerId?: boolean
    productId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    repairJob?: boolean | RepairRequest$repairJobArgs<ExtArgs>
  }, ExtArgs["result"]["repairRequest"]>

  export type RepairRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestNo?: boolean
    problemDescription?: boolean
    requestDate?: boolean
    status?: boolean
    customerId?: boolean
    productId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairRequest"]>

  export type RepairRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestNo?: boolean
    problemDescription?: boolean
    requestDate?: boolean
    status?: boolean
    customerId?: boolean
    productId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairRequest"]>

  export type RepairRequestSelectScalar = {
    id?: boolean
    requestNo?: boolean
    problemDescription?: boolean
    requestDate?: boolean
    status?: boolean
    customerId?: boolean
    productId?: boolean
  }

  export type RepairRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestNo" | "problemDescription" | "requestDate" | "status" | "customerId" | "productId", ExtArgs["result"]["repairRequest"]>
  export type RepairRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    repairJob?: boolean | RepairRequest$repairJobArgs<ExtArgs>
  }
  export type RepairRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RepairRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $RepairRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairRequest"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      repairJob: Prisma.$RepairJobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requestNo: string
      problemDescription: string
      requestDate: Date
      status: $Enums.RepairRequestStatus
      customerId: number
      productId: number
    }, ExtArgs["result"]["repairRequest"]>
    composites: {}
  }

  type RepairRequestGetPayload<S extends boolean | null | undefined | RepairRequestDefaultArgs> = $Result.GetResult<Prisma.$RepairRequestPayload, S>

  type RepairRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairRequestCountAggregateInputType | true
    }

  export interface RepairRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairRequest'], meta: { name: 'RepairRequest' } }
    /**
     * Find zero or one RepairRequest that matches the filter.
     * @param {RepairRequestFindUniqueArgs} args - Arguments to find a RepairRequest
     * @example
     * // Get one RepairRequest
     * const repairRequest = await prisma.repairRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairRequestFindUniqueArgs>(args: SelectSubset<T, RepairRequestFindUniqueArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairRequestFindUniqueOrThrowArgs} args - Arguments to find a RepairRequest
     * @example
     * // Get one RepairRequest
     * const repairRequest = await prisma.repairRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestFindFirstArgs} args - Arguments to find a RepairRequest
     * @example
     * // Get one RepairRequest
     * const repairRequest = await prisma.repairRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairRequestFindFirstArgs>(args?: SelectSubset<T, RepairRequestFindFirstArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestFindFirstOrThrowArgs} args - Arguments to find a RepairRequest
     * @example
     * // Get one RepairRequest
     * const repairRequest = await prisma.repairRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairRequests
     * const repairRequests = await prisma.repairRequest.findMany()
     * 
     * // Get first 10 RepairRequests
     * const repairRequests = await prisma.repairRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairRequestWithIdOnly = await prisma.repairRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairRequestFindManyArgs>(args?: SelectSubset<T, RepairRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairRequest.
     * @param {RepairRequestCreateArgs} args - Arguments to create a RepairRequest.
     * @example
     * // Create one RepairRequest
     * const RepairRequest = await prisma.repairRequest.create({
     *   data: {
     *     // ... data to create a RepairRequest
     *   }
     * })
     * 
     */
    create<T extends RepairRequestCreateArgs>(args: SelectSubset<T, RepairRequestCreateArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairRequests.
     * @param {RepairRequestCreateManyArgs} args - Arguments to create many RepairRequests.
     * @example
     * // Create many RepairRequests
     * const repairRequest = await prisma.repairRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairRequestCreateManyArgs>(args?: SelectSubset<T, RepairRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairRequests and returns the data saved in the database.
     * @param {RepairRequestCreateManyAndReturnArgs} args - Arguments to create many RepairRequests.
     * @example
     * // Create many RepairRequests
     * const repairRequest = await prisma.repairRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairRequests and only return the `id`
     * const repairRequestWithIdOnly = await prisma.repairRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairRequest.
     * @param {RepairRequestDeleteArgs} args - Arguments to delete one RepairRequest.
     * @example
     * // Delete one RepairRequest
     * const RepairRequest = await prisma.repairRequest.delete({
     *   where: {
     *     // ... filter to delete one RepairRequest
     *   }
     * })
     * 
     */
    delete<T extends RepairRequestDeleteArgs>(args: SelectSubset<T, RepairRequestDeleteArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairRequest.
     * @param {RepairRequestUpdateArgs} args - Arguments to update one RepairRequest.
     * @example
     * // Update one RepairRequest
     * const repairRequest = await prisma.repairRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairRequestUpdateArgs>(args: SelectSubset<T, RepairRequestUpdateArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairRequests.
     * @param {RepairRequestDeleteManyArgs} args - Arguments to filter RepairRequests to delete.
     * @example
     * // Delete a few RepairRequests
     * const { count } = await prisma.repairRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairRequestDeleteManyArgs>(args?: SelectSubset<T, RepairRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairRequests
     * const repairRequest = await prisma.repairRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairRequestUpdateManyArgs>(args: SelectSubset<T, RepairRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairRequests and returns the data updated in the database.
     * @param {RepairRequestUpdateManyAndReturnArgs} args - Arguments to update many RepairRequests.
     * @example
     * // Update many RepairRequests
     * const repairRequest = await prisma.repairRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairRequests and only return the `id`
     * const repairRequestWithIdOnly = await prisma.repairRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairRequest.
     * @param {RepairRequestUpsertArgs} args - Arguments to update or create a RepairRequest.
     * @example
     * // Update or create a RepairRequest
     * const repairRequest = await prisma.repairRequest.upsert({
     *   create: {
     *     // ... data to create a RepairRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairRequest we want to update
     *   }
     * })
     */
    upsert<T extends RepairRequestUpsertArgs>(args: SelectSubset<T, RepairRequestUpsertArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestCountArgs} args - Arguments to filter RepairRequests to count.
     * @example
     * // Count the number of RepairRequests
     * const count = await prisma.repairRequest.count({
     *   where: {
     *     // ... the filter for the RepairRequests we want to count
     *   }
     * })
    **/
    count<T extends RepairRequestCountArgs>(
      args?: Subset<T, RepairRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairRequestAggregateArgs>(args: Subset<T, RepairRequestAggregateArgs>): Prisma.PrismaPromise<GetRepairRequestAggregateType<T>>

    /**
     * Group by RepairRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairRequestGroupByArgs['orderBy'] }
        : { orderBy?: RepairRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairRequest model
   */
  readonly fields: RepairRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repairJob<T extends RepairRequest$repairJobArgs<ExtArgs> = {}>(args?: Subset<T, RepairRequest$repairJobArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairRequest model
   */
  interface RepairRequestFieldRefs {
    readonly id: FieldRef<"RepairRequest", 'Int'>
    readonly requestNo: FieldRef<"RepairRequest", 'String'>
    readonly problemDescription: FieldRef<"RepairRequest", 'String'>
    readonly requestDate: FieldRef<"RepairRequest", 'DateTime'>
    readonly status: FieldRef<"RepairRequest", 'RepairRequestStatus'>
    readonly customerId: FieldRef<"RepairRequest", 'Int'>
    readonly productId: FieldRef<"RepairRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RepairRequest findUnique
   */
  export type RepairRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequest to fetch.
     */
    where: RepairRequestWhereUniqueInput
  }

  /**
   * RepairRequest findUniqueOrThrow
   */
  export type RepairRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequest to fetch.
     */
    where: RepairRequestWhereUniqueInput
  }

  /**
   * RepairRequest findFirst
   */
  export type RepairRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequest to fetch.
     */
    where?: RepairRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairRequests to fetch.
     */
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairRequests.
     */
    cursor?: RepairRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairRequests.
     */
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * RepairRequest findFirstOrThrow
   */
  export type RepairRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequest to fetch.
     */
    where?: RepairRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairRequests to fetch.
     */
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairRequests.
     */
    cursor?: RepairRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairRequests.
     */
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * RepairRequest findMany
   */
  export type RepairRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequests to fetch.
     */
    where?: RepairRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairRequests to fetch.
     */
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairRequests.
     */
    cursor?: RepairRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairRequests.
     */
    skip?: number
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * RepairRequest create
   */
  export type RepairRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairRequest.
     */
    data: XOR<RepairRequestCreateInput, RepairRequestUncheckedCreateInput>
  }

  /**
   * RepairRequest createMany
   */
  export type RepairRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairRequests.
     */
    data: RepairRequestCreateManyInput | RepairRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairRequest createManyAndReturn
   */
  export type RepairRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * The data used to create many RepairRequests.
     */
    data: RepairRequestCreateManyInput | RepairRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairRequest update
   */
  export type RepairRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairRequest.
     */
    data: XOR<RepairRequestUpdateInput, RepairRequestUncheckedUpdateInput>
    /**
     * Choose, which RepairRequest to update.
     */
    where: RepairRequestWhereUniqueInput
  }

  /**
   * RepairRequest updateMany
   */
  export type RepairRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairRequests.
     */
    data: XOR<RepairRequestUpdateManyMutationInput, RepairRequestUncheckedUpdateManyInput>
    /**
     * Filter which RepairRequests to update
     */
    where?: RepairRequestWhereInput
    /**
     * Limit how many RepairRequests to update.
     */
    limit?: number
  }

  /**
   * RepairRequest updateManyAndReturn
   */
  export type RepairRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * The data used to update RepairRequests.
     */
    data: XOR<RepairRequestUpdateManyMutationInput, RepairRequestUncheckedUpdateManyInput>
    /**
     * Filter which RepairRequests to update
     */
    where?: RepairRequestWhereInput
    /**
     * Limit how many RepairRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairRequest upsert
   */
  export type RepairRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairRequest to update in case it exists.
     */
    where: RepairRequestWhereUniqueInput
    /**
     * In case the RepairRequest found by the `where` argument doesn't exist, create a new RepairRequest with this data.
     */
    create: XOR<RepairRequestCreateInput, RepairRequestUncheckedCreateInput>
    /**
     * In case the RepairRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairRequestUpdateInput, RepairRequestUncheckedUpdateInput>
  }

  /**
   * RepairRequest delete
   */
  export type RepairRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter which RepairRequest to delete.
     */
    where: RepairRequestWhereUniqueInput
  }

  /**
   * RepairRequest deleteMany
   */
  export type RepairRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairRequests to delete
     */
    where?: RepairRequestWhereInput
    /**
     * Limit how many RepairRequests to delete.
     */
    limit?: number
  }

  /**
   * RepairRequest.repairJob
   */
  export type RepairRequest$repairJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    where?: RepairJobWhereInput
  }

  /**
   * RepairRequest without action
   */
  export type RepairRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
  }


  /**
   * Model RepairJob
   */

  export type AggregateRepairJob = {
    _count: RepairJobCountAggregateOutputType | null
    _avg: RepairJobAvgAggregateOutputType | null
    _sum: RepairJobSumAggregateOutputType | null
    _min: RepairJobMinAggregateOutputType | null
    _max: RepairJobMaxAggregateOutputType | null
  }

  export type RepairJobAvgAggregateOutputType = {
    id: number | null
    totalCost: Decimal | null
    repairRequestId: number | null
    technicianId: number | null
  }

  export type RepairJobSumAggregateOutputType = {
    id: number | null
    totalCost: Decimal | null
    repairRequestId: number | null
    technicianId: number | null
  }

  export type RepairJobMinAggregateOutputType = {
    id: number | null
    jobNo: string | null
    assignedDate: Date | null
    jobStatus: $Enums.JobStatus | null
    totalCost: Decimal | null
    approvalStatus: $Enums.ApprovalStatus | null
    approvalDate: Date | null
    approvedBy: string | null
    completedDate: Date | null
    repairRequestId: number | null
    technicianId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepairJobMaxAggregateOutputType = {
    id: number | null
    jobNo: string | null
    assignedDate: Date | null
    jobStatus: $Enums.JobStatus | null
    totalCost: Decimal | null
    approvalStatus: $Enums.ApprovalStatus | null
    approvalDate: Date | null
    approvedBy: string | null
    completedDate: Date | null
    repairRequestId: number | null
    technicianId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepairJobCountAggregateOutputType = {
    id: number
    jobNo: number
    assignedDate: number
    jobStatus: number
    totalCost: number
    approvalStatus: number
    approvalDate: number
    approvedBy: number
    completedDate: number
    repairRequestId: number
    technicianId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepairJobAvgAggregateInputType = {
    id?: true
    totalCost?: true
    repairRequestId?: true
    technicianId?: true
  }

  export type RepairJobSumAggregateInputType = {
    id?: true
    totalCost?: true
    repairRequestId?: true
    technicianId?: true
  }

  export type RepairJobMinAggregateInputType = {
    id?: true
    jobNo?: true
    assignedDate?: true
    jobStatus?: true
    totalCost?: true
    approvalStatus?: true
    approvalDate?: true
    approvedBy?: true
    completedDate?: true
    repairRequestId?: true
    technicianId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepairJobMaxAggregateInputType = {
    id?: true
    jobNo?: true
    assignedDate?: true
    jobStatus?: true
    totalCost?: true
    approvalStatus?: true
    approvalDate?: true
    approvedBy?: true
    completedDate?: true
    repairRequestId?: true
    technicianId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepairJobCountAggregateInputType = {
    id?: true
    jobNo?: true
    assignedDate?: true
    jobStatus?: true
    totalCost?: true
    approvalStatus?: true
    approvalDate?: true
    approvedBy?: true
    completedDate?: true
    repairRequestId?: true
    technicianId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepairJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairJob to aggregate.
     */
    where?: RepairJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairJobs to fetch.
     */
    orderBy?: RepairJobOrderByWithRelationInput | RepairJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairJobs
    **/
    _count?: true | RepairJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairJobMaxAggregateInputType
  }

  export type GetRepairJobAggregateType<T extends RepairJobAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairJob[P]>
      : GetScalarType<T[P], AggregateRepairJob[P]>
  }




  export type RepairJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairJobWhereInput
    orderBy?: RepairJobOrderByWithAggregationInput | RepairJobOrderByWithAggregationInput[]
    by: RepairJobScalarFieldEnum[] | RepairJobScalarFieldEnum
    having?: RepairJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairJobCountAggregateInputType | true
    _avg?: RepairJobAvgAggregateInputType
    _sum?: RepairJobSumAggregateInputType
    _min?: RepairJobMinAggregateInputType
    _max?: RepairJobMaxAggregateInputType
  }

  export type RepairJobGroupByOutputType = {
    id: number
    jobNo: string
    assignedDate: Date | null
    jobStatus: $Enums.JobStatus
    totalCost: Decimal
    approvalStatus: $Enums.ApprovalStatus
    approvalDate: Date | null
    approvedBy: string | null
    completedDate: Date | null
    repairRequestId: number
    technicianId: number
    createdAt: Date
    updatedAt: Date
    _count: RepairJobCountAggregateOutputType | null
    _avg: RepairJobAvgAggregateOutputType | null
    _sum: RepairJobSumAggregateOutputType | null
    _min: RepairJobMinAggregateOutputType | null
    _max: RepairJobMaxAggregateOutputType | null
  }

  type GetRepairJobGroupByPayload<T extends RepairJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairJobGroupByOutputType[P]>
            : GetScalarType<T[P], RepairJobGroupByOutputType[P]>
        }
      >
    >


  export type RepairJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobNo?: boolean
    assignedDate?: boolean
    jobStatus?: boolean
    totalCost?: boolean
    approvalStatus?: boolean
    approvalDate?: boolean
    approvedBy?: boolean
    completedDate?: boolean
    repairRequestId?: boolean
    technicianId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
    repairJobItems?: boolean | RepairJob$repairJobItemsArgs<ExtArgs>
    repairApprovals?: boolean | RepairJob$repairApprovalsArgs<ExtArgs>
    repairLogs?: boolean | RepairJob$repairLogsArgs<ExtArgs>
    _count?: boolean | RepairJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairJob"]>

  export type RepairJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobNo?: boolean
    assignedDate?: boolean
    jobStatus?: boolean
    totalCost?: boolean
    approvalStatus?: boolean
    approvalDate?: boolean
    approvedBy?: boolean
    completedDate?: boolean
    repairRequestId?: boolean
    technicianId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairJob"]>

  export type RepairJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobNo?: boolean
    assignedDate?: boolean
    jobStatus?: boolean
    totalCost?: boolean
    approvalStatus?: boolean
    approvalDate?: boolean
    approvedBy?: boolean
    completedDate?: boolean
    repairRequestId?: boolean
    technicianId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairJob"]>

  export type RepairJobSelectScalar = {
    id?: boolean
    jobNo?: boolean
    assignedDate?: boolean
    jobStatus?: boolean
    totalCost?: boolean
    approvalStatus?: boolean
    approvalDate?: boolean
    approvedBy?: boolean
    completedDate?: boolean
    repairRequestId?: boolean
    technicianId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepairJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobNo" | "assignedDate" | "jobStatus" | "totalCost" | "approvalStatus" | "approvalDate" | "approvedBy" | "completedDate" | "repairRequestId" | "technicianId" | "createdAt" | "updatedAt", ExtArgs["result"]["repairJob"]>
  export type RepairJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
    repairJobItems?: boolean | RepairJob$repairJobItemsArgs<ExtArgs>
    repairApprovals?: boolean | RepairJob$repairApprovalsArgs<ExtArgs>
    repairLogs?: boolean | RepairJob$repairLogsArgs<ExtArgs>
    _count?: boolean | RepairJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepairJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }
  export type RepairJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }

  export type $RepairJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairJob"
    objects: {
      repairRequest: Prisma.$RepairRequestPayload<ExtArgs>
      technician: Prisma.$TechnicianPayload<ExtArgs>
      repairJobItems: Prisma.$RepairJobItemPayload<ExtArgs>[]
      repairApprovals: Prisma.$RepairApprovalPayload<ExtArgs>[]
      repairLogs: Prisma.$RepairLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobNo: string
      assignedDate: Date | null
      jobStatus: $Enums.JobStatus
      totalCost: Prisma.Decimal
      approvalStatus: $Enums.ApprovalStatus
      approvalDate: Date | null
      approvedBy: string | null
      completedDate: Date | null
      repairRequestId: number
      technicianId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repairJob"]>
    composites: {}
  }

  type RepairJobGetPayload<S extends boolean | null | undefined | RepairJobDefaultArgs> = $Result.GetResult<Prisma.$RepairJobPayload, S>

  type RepairJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairJobCountAggregateInputType | true
    }

  export interface RepairJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairJob'], meta: { name: 'RepairJob' } }
    /**
     * Find zero or one RepairJob that matches the filter.
     * @param {RepairJobFindUniqueArgs} args - Arguments to find a RepairJob
     * @example
     * // Get one RepairJob
     * const repairJob = await prisma.repairJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairJobFindUniqueArgs>(args: SelectSubset<T, RepairJobFindUniqueArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairJobFindUniqueOrThrowArgs} args - Arguments to find a RepairJob
     * @example
     * // Get one RepairJob
     * const repairJob = await prisma.repairJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairJobFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobFindFirstArgs} args - Arguments to find a RepairJob
     * @example
     * // Get one RepairJob
     * const repairJob = await prisma.repairJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairJobFindFirstArgs>(args?: SelectSubset<T, RepairJobFindFirstArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobFindFirstOrThrowArgs} args - Arguments to find a RepairJob
     * @example
     * // Get one RepairJob
     * const repairJob = await prisma.repairJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairJobFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairJobs
     * const repairJobs = await prisma.repairJob.findMany()
     * 
     * // Get first 10 RepairJobs
     * const repairJobs = await prisma.repairJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairJobWithIdOnly = await prisma.repairJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairJobFindManyArgs>(args?: SelectSubset<T, RepairJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairJob.
     * @param {RepairJobCreateArgs} args - Arguments to create a RepairJob.
     * @example
     * // Create one RepairJob
     * const RepairJob = await prisma.repairJob.create({
     *   data: {
     *     // ... data to create a RepairJob
     *   }
     * })
     * 
     */
    create<T extends RepairJobCreateArgs>(args: SelectSubset<T, RepairJobCreateArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairJobs.
     * @param {RepairJobCreateManyArgs} args - Arguments to create many RepairJobs.
     * @example
     * // Create many RepairJobs
     * const repairJob = await prisma.repairJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairJobCreateManyArgs>(args?: SelectSubset<T, RepairJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairJobs and returns the data saved in the database.
     * @param {RepairJobCreateManyAndReturnArgs} args - Arguments to create many RepairJobs.
     * @example
     * // Create many RepairJobs
     * const repairJob = await prisma.repairJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairJobs and only return the `id`
     * const repairJobWithIdOnly = await prisma.repairJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairJobCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairJob.
     * @param {RepairJobDeleteArgs} args - Arguments to delete one RepairJob.
     * @example
     * // Delete one RepairJob
     * const RepairJob = await prisma.repairJob.delete({
     *   where: {
     *     // ... filter to delete one RepairJob
     *   }
     * })
     * 
     */
    delete<T extends RepairJobDeleteArgs>(args: SelectSubset<T, RepairJobDeleteArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairJob.
     * @param {RepairJobUpdateArgs} args - Arguments to update one RepairJob.
     * @example
     * // Update one RepairJob
     * const repairJob = await prisma.repairJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairJobUpdateArgs>(args: SelectSubset<T, RepairJobUpdateArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairJobs.
     * @param {RepairJobDeleteManyArgs} args - Arguments to filter RepairJobs to delete.
     * @example
     * // Delete a few RepairJobs
     * const { count } = await prisma.repairJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairJobDeleteManyArgs>(args?: SelectSubset<T, RepairJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairJobs
     * const repairJob = await prisma.repairJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairJobUpdateManyArgs>(args: SelectSubset<T, RepairJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairJobs and returns the data updated in the database.
     * @param {RepairJobUpdateManyAndReturnArgs} args - Arguments to update many RepairJobs.
     * @example
     * // Update many RepairJobs
     * const repairJob = await prisma.repairJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairJobs and only return the `id`
     * const repairJobWithIdOnly = await prisma.repairJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairJobUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairJob.
     * @param {RepairJobUpsertArgs} args - Arguments to update or create a RepairJob.
     * @example
     * // Update or create a RepairJob
     * const repairJob = await prisma.repairJob.upsert({
     *   create: {
     *     // ... data to create a RepairJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairJob we want to update
     *   }
     * })
     */
    upsert<T extends RepairJobUpsertArgs>(args: SelectSubset<T, RepairJobUpsertArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobCountArgs} args - Arguments to filter RepairJobs to count.
     * @example
     * // Count the number of RepairJobs
     * const count = await prisma.repairJob.count({
     *   where: {
     *     // ... the filter for the RepairJobs we want to count
     *   }
     * })
    **/
    count<T extends RepairJobCountArgs>(
      args?: Subset<T, RepairJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairJobAggregateArgs>(args: Subset<T, RepairJobAggregateArgs>): Prisma.PrismaPromise<GetRepairJobAggregateType<T>>

    /**
     * Group by RepairJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairJobGroupByArgs['orderBy'] }
        : { orderBy?: RepairJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairJob model
   */
  readonly fields: RepairJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairRequest<T extends RepairRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairRequestDefaultArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technician<T extends TechnicianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnicianDefaultArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repairJobItems<T extends RepairJob$repairJobItemsArgs<ExtArgs> = {}>(args?: Subset<T, RepairJob$repairJobItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repairApprovals<T extends RepairJob$repairApprovalsArgs<ExtArgs> = {}>(args?: Subset<T, RepairJob$repairApprovalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repairLogs<T extends RepairJob$repairLogsArgs<ExtArgs> = {}>(args?: Subset<T, RepairJob$repairLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairJob model
   */
  interface RepairJobFieldRefs {
    readonly id: FieldRef<"RepairJob", 'Int'>
    readonly jobNo: FieldRef<"RepairJob", 'String'>
    readonly assignedDate: FieldRef<"RepairJob", 'DateTime'>
    readonly jobStatus: FieldRef<"RepairJob", 'JobStatus'>
    readonly totalCost: FieldRef<"RepairJob", 'Decimal'>
    readonly approvalStatus: FieldRef<"RepairJob", 'ApprovalStatus'>
    readonly approvalDate: FieldRef<"RepairJob", 'DateTime'>
    readonly approvedBy: FieldRef<"RepairJob", 'String'>
    readonly completedDate: FieldRef<"RepairJob", 'DateTime'>
    readonly repairRequestId: FieldRef<"RepairJob", 'Int'>
    readonly technicianId: FieldRef<"RepairJob", 'Int'>
    readonly createdAt: FieldRef<"RepairJob", 'DateTime'>
    readonly updatedAt: FieldRef<"RepairJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RepairJob findUnique
   */
  export type RepairJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * Filter, which RepairJob to fetch.
     */
    where: RepairJobWhereUniqueInput
  }

  /**
   * RepairJob findUniqueOrThrow
   */
  export type RepairJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * Filter, which RepairJob to fetch.
     */
    where: RepairJobWhereUniqueInput
  }

  /**
   * RepairJob findFirst
   */
  export type RepairJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * Filter, which RepairJob to fetch.
     */
    where?: RepairJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairJobs to fetch.
     */
    orderBy?: RepairJobOrderByWithRelationInput | RepairJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairJobs.
     */
    cursor?: RepairJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairJobs.
     */
    distinct?: RepairJobScalarFieldEnum | RepairJobScalarFieldEnum[]
  }

  /**
   * RepairJob findFirstOrThrow
   */
  export type RepairJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * Filter, which RepairJob to fetch.
     */
    where?: RepairJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairJobs to fetch.
     */
    orderBy?: RepairJobOrderByWithRelationInput | RepairJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairJobs.
     */
    cursor?: RepairJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairJobs.
     */
    distinct?: RepairJobScalarFieldEnum | RepairJobScalarFieldEnum[]
  }

  /**
   * RepairJob findMany
   */
  export type RepairJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * Filter, which RepairJobs to fetch.
     */
    where?: RepairJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairJobs to fetch.
     */
    orderBy?: RepairJobOrderByWithRelationInput | RepairJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairJobs.
     */
    cursor?: RepairJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairJobs.
     */
    skip?: number
    distinct?: RepairJobScalarFieldEnum | RepairJobScalarFieldEnum[]
  }

  /**
   * RepairJob create
   */
  export type RepairJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairJob.
     */
    data: XOR<RepairJobCreateInput, RepairJobUncheckedCreateInput>
  }

  /**
   * RepairJob createMany
   */
  export type RepairJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairJobs.
     */
    data: RepairJobCreateManyInput | RepairJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairJob createManyAndReturn
   */
  export type RepairJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * The data used to create many RepairJobs.
     */
    data: RepairJobCreateManyInput | RepairJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairJob update
   */
  export type RepairJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairJob.
     */
    data: XOR<RepairJobUpdateInput, RepairJobUncheckedUpdateInput>
    /**
     * Choose, which RepairJob to update.
     */
    where: RepairJobWhereUniqueInput
  }

  /**
   * RepairJob updateMany
   */
  export type RepairJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairJobs.
     */
    data: XOR<RepairJobUpdateManyMutationInput, RepairJobUncheckedUpdateManyInput>
    /**
     * Filter which RepairJobs to update
     */
    where?: RepairJobWhereInput
    /**
     * Limit how many RepairJobs to update.
     */
    limit?: number
  }

  /**
   * RepairJob updateManyAndReturn
   */
  export type RepairJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * The data used to update RepairJobs.
     */
    data: XOR<RepairJobUpdateManyMutationInput, RepairJobUncheckedUpdateManyInput>
    /**
     * Filter which RepairJobs to update
     */
    where?: RepairJobWhereInput
    /**
     * Limit how many RepairJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairJob upsert
   */
  export type RepairJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairJob to update in case it exists.
     */
    where: RepairJobWhereUniqueInput
    /**
     * In case the RepairJob found by the `where` argument doesn't exist, create a new RepairJob with this data.
     */
    create: XOR<RepairJobCreateInput, RepairJobUncheckedCreateInput>
    /**
     * In case the RepairJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairJobUpdateInput, RepairJobUncheckedUpdateInput>
  }

  /**
   * RepairJob delete
   */
  export type RepairJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
    /**
     * Filter which RepairJob to delete.
     */
    where: RepairJobWhereUniqueInput
  }

  /**
   * RepairJob deleteMany
   */
  export type RepairJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairJobs to delete
     */
    where?: RepairJobWhereInput
    /**
     * Limit how many RepairJobs to delete.
     */
    limit?: number
  }

  /**
   * RepairJob.repairJobItems
   */
  export type RepairJob$repairJobItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    where?: RepairJobItemWhereInput
    orderBy?: RepairJobItemOrderByWithRelationInput | RepairJobItemOrderByWithRelationInput[]
    cursor?: RepairJobItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairJobItemScalarFieldEnum | RepairJobItemScalarFieldEnum[]
  }

  /**
   * RepairJob.repairApprovals
   */
  export type RepairJob$repairApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    where?: RepairApprovalWhereInput
    orderBy?: RepairApprovalOrderByWithRelationInput | RepairApprovalOrderByWithRelationInput[]
    cursor?: RepairApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairApprovalScalarFieldEnum | RepairApprovalScalarFieldEnum[]
  }

  /**
   * RepairJob.repairLogs
   */
  export type RepairJob$repairLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    where?: RepairLogWhereInput
    orderBy?: RepairLogOrderByWithRelationInput | RepairLogOrderByWithRelationInput[]
    cursor?: RepairLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairLogScalarFieldEnum | RepairLogScalarFieldEnum[]
  }

  /**
   * RepairJob without action
   */
  export type RepairJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJob
     */
    select?: RepairJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJob
     */
    omit?: RepairJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobInclude<ExtArgs> | null
  }


  /**
   * Model RepairJobItem
   */

  export type AggregateRepairJobItem = {
    _count: RepairJobItemCountAggregateOutputType | null
    _avg: RepairJobItemAvgAggregateOutputType | null
    _sum: RepairJobItemSumAggregateOutputType | null
    _min: RepairJobItemMinAggregateOutputType | null
    _max: RepairJobItemMaxAggregateOutputType | null
  }

  export type RepairJobItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    repairJobId: number | null
  }

  export type RepairJobItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    repairJobId: number | null
  }

  export type RepairJobItemMinAggregateOutputType = {
    id: number | null
    itemType: $Enums.JobItemType | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    remarks: string | null
    repairJobId: number | null
  }

  export type RepairJobItemMaxAggregateOutputType = {
    id: number | null
    itemType: $Enums.JobItemType | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    remarks: string | null
    repairJobId: number | null
  }

  export type RepairJobItemCountAggregateOutputType = {
    id: number
    itemType: number
    description: number
    quantity: number
    unitPrice: number
    totalPrice: number
    remarks: number
    repairJobId: number
    _all: number
  }


  export type RepairJobItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    repairJobId?: true
  }

  export type RepairJobItemSumAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    repairJobId?: true
  }

  export type RepairJobItemMinAggregateInputType = {
    id?: true
    itemType?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    remarks?: true
    repairJobId?: true
  }

  export type RepairJobItemMaxAggregateInputType = {
    id?: true
    itemType?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    remarks?: true
    repairJobId?: true
  }

  export type RepairJobItemCountAggregateInputType = {
    id?: true
    itemType?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    remarks?: true
    repairJobId?: true
    _all?: true
  }

  export type RepairJobItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairJobItem to aggregate.
     */
    where?: RepairJobItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairJobItems to fetch.
     */
    orderBy?: RepairJobItemOrderByWithRelationInput | RepairJobItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairJobItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairJobItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairJobItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairJobItems
    **/
    _count?: true | RepairJobItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairJobItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairJobItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairJobItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairJobItemMaxAggregateInputType
  }

  export type GetRepairJobItemAggregateType<T extends RepairJobItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairJobItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairJobItem[P]>
      : GetScalarType<T[P], AggregateRepairJobItem[P]>
  }




  export type RepairJobItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairJobItemWhereInput
    orderBy?: RepairJobItemOrderByWithAggregationInput | RepairJobItemOrderByWithAggregationInput[]
    by: RepairJobItemScalarFieldEnum[] | RepairJobItemScalarFieldEnum
    having?: RepairJobItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairJobItemCountAggregateInputType | true
    _avg?: RepairJobItemAvgAggregateInputType
    _sum?: RepairJobItemSumAggregateInputType
    _min?: RepairJobItemMinAggregateInputType
    _max?: RepairJobItemMaxAggregateInputType
  }

  export type RepairJobItemGroupByOutputType = {
    id: number
    itemType: $Enums.JobItemType
    description: string
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    remarks: string | null
    repairJobId: number
    _count: RepairJobItemCountAggregateOutputType | null
    _avg: RepairJobItemAvgAggregateOutputType | null
    _sum: RepairJobItemSumAggregateOutputType | null
    _min: RepairJobItemMinAggregateOutputType | null
    _max: RepairJobItemMaxAggregateOutputType | null
  }

  type GetRepairJobItemGroupByPayload<T extends RepairJobItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairJobItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairJobItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairJobItemGroupByOutputType[P]>
            : GetScalarType<T[P], RepairJobItemGroupByOutputType[P]>
        }
      >
    >


  export type RepairJobItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemType?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    remarks?: boolean
    repairJobId?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairJobItem"]>

  export type RepairJobItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemType?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    remarks?: boolean
    repairJobId?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairJobItem"]>

  export type RepairJobItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemType?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    remarks?: boolean
    repairJobId?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairJobItem"]>

  export type RepairJobItemSelectScalar = {
    id?: boolean
    itemType?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    remarks?: boolean
    repairJobId?: boolean
  }

  export type RepairJobItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemType" | "description" | "quantity" | "unitPrice" | "totalPrice" | "remarks" | "repairJobId", ExtArgs["result"]["repairJobItem"]>
  export type RepairJobItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }
  export type RepairJobItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }
  export type RepairJobItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }

  export type $RepairJobItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairJobItem"
    objects: {
      repairJob: Prisma.$RepairJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemType: $Enums.JobItemType
      description: string
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      remarks: string | null
      repairJobId: number
    }, ExtArgs["result"]["repairJobItem"]>
    composites: {}
  }

  type RepairJobItemGetPayload<S extends boolean | null | undefined | RepairJobItemDefaultArgs> = $Result.GetResult<Prisma.$RepairJobItemPayload, S>

  type RepairJobItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairJobItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairJobItemCountAggregateInputType | true
    }

  export interface RepairJobItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairJobItem'], meta: { name: 'RepairJobItem' } }
    /**
     * Find zero or one RepairJobItem that matches the filter.
     * @param {RepairJobItemFindUniqueArgs} args - Arguments to find a RepairJobItem
     * @example
     * // Get one RepairJobItem
     * const repairJobItem = await prisma.repairJobItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairJobItemFindUniqueArgs>(args: SelectSubset<T, RepairJobItemFindUniqueArgs<ExtArgs>>): Prisma__RepairJobItemClient<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairJobItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairJobItemFindUniqueOrThrowArgs} args - Arguments to find a RepairJobItem
     * @example
     * // Get one RepairJobItem
     * const repairJobItem = await prisma.repairJobItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairJobItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairJobItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairJobItemClient<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairJobItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobItemFindFirstArgs} args - Arguments to find a RepairJobItem
     * @example
     * // Get one RepairJobItem
     * const repairJobItem = await prisma.repairJobItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairJobItemFindFirstArgs>(args?: SelectSubset<T, RepairJobItemFindFirstArgs<ExtArgs>>): Prisma__RepairJobItemClient<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairJobItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobItemFindFirstOrThrowArgs} args - Arguments to find a RepairJobItem
     * @example
     * // Get one RepairJobItem
     * const repairJobItem = await prisma.repairJobItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairJobItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairJobItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairJobItemClient<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairJobItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairJobItems
     * const repairJobItems = await prisma.repairJobItem.findMany()
     * 
     * // Get first 10 RepairJobItems
     * const repairJobItems = await prisma.repairJobItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairJobItemWithIdOnly = await prisma.repairJobItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairJobItemFindManyArgs>(args?: SelectSubset<T, RepairJobItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairJobItem.
     * @param {RepairJobItemCreateArgs} args - Arguments to create a RepairJobItem.
     * @example
     * // Create one RepairJobItem
     * const RepairJobItem = await prisma.repairJobItem.create({
     *   data: {
     *     // ... data to create a RepairJobItem
     *   }
     * })
     * 
     */
    create<T extends RepairJobItemCreateArgs>(args: SelectSubset<T, RepairJobItemCreateArgs<ExtArgs>>): Prisma__RepairJobItemClient<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairJobItems.
     * @param {RepairJobItemCreateManyArgs} args - Arguments to create many RepairJobItems.
     * @example
     * // Create many RepairJobItems
     * const repairJobItem = await prisma.repairJobItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairJobItemCreateManyArgs>(args?: SelectSubset<T, RepairJobItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairJobItems and returns the data saved in the database.
     * @param {RepairJobItemCreateManyAndReturnArgs} args - Arguments to create many RepairJobItems.
     * @example
     * // Create many RepairJobItems
     * const repairJobItem = await prisma.repairJobItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairJobItems and only return the `id`
     * const repairJobItemWithIdOnly = await prisma.repairJobItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairJobItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairJobItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairJobItem.
     * @param {RepairJobItemDeleteArgs} args - Arguments to delete one RepairJobItem.
     * @example
     * // Delete one RepairJobItem
     * const RepairJobItem = await prisma.repairJobItem.delete({
     *   where: {
     *     // ... filter to delete one RepairJobItem
     *   }
     * })
     * 
     */
    delete<T extends RepairJobItemDeleteArgs>(args: SelectSubset<T, RepairJobItemDeleteArgs<ExtArgs>>): Prisma__RepairJobItemClient<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairJobItem.
     * @param {RepairJobItemUpdateArgs} args - Arguments to update one RepairJobItem.
     * @example
     * // Update one RepairJobItem
     * const repairJobItem = await prisma.repairJobItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairJobItemUpdateArgs>(args: SelectSubset<T, RepairJobItemUpdateArgs<ExtArgs>>): Prisma__RepairJobItemClient<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairJobItems.
     * @param {RepairJobItemDeleteManyArgs} args - Arguments to filter RepairJobItems to delete.
     * @example
     * // Delete a few RepairJobItems
     * const { count } = await prisma.repairJobItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairJobItemDeleteManyArgs>(args?: SelectSubset<T, RepairJobItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairJobItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairJobItems
     * const repairJobItem = await prisma.repairJobItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairJobItemUpdateManyArgs>(args: SelectSubset<T, RepairJobItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairJobItems and returns the data updated in the database.
     * @param {RepairJobItemUpdateManyAndReturnArgs} args - Arguments to update many RepairJobItems.
     * @example
     * // Update many RepairJobItems
     * const repairJobItem = await prisma.repairJobItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairJobItems and only return the `id`
     * const repairJobItemWithIdOnly = await prisma.repairJobItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairJobItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairJobItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairJobItem.
     * @param {RepairJobItemUpsertArgs} args - Arguments to update or create a RepairJobItem.
     * @example
     * // Update or create a RepairJobItem
     * const repairJobItem = await prisma.repairJobItem.upsert({
     *   create: {
     *     // ... data to create a RepairJobItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairJobItem we want to update
     *   }
     * })
     */
    upsert<T extends RepairJobItemUpsertArgs>(args: SelectSubset<T, RepairJobItemUpsertArgs<ExtArgs>>): Prisma__RepairJobItemClient<$Result.GetResult<Prisma.$RepairJobItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairJobItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobItemCountArgs} args - Arguments to filter RepairJobItems to count.
     * @example
     * // Count the number of RepairJobItems
     * const count = await prisma.repairJobItem.count({
     *   where: {
     *     // ... the filter for the RepairJobItems we want to count
     *   }
     * })
    **/
    count<T extends RepairJobItemCountArgs>(
      args?: Subset<T, RepairJobItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairJobItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairJobItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairJobItemAggregateArgs>(args: Subset<T, RepairJobItemAggregateArgs>): Prisma.PrismaPromise<GetRepairJobItemAggregateType<T>>

    /**
     * Group by RepairJobItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairJobItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairJobItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairJobItemGroupByArgs['orderBy'] }
        : { orderBy?: RepairJobItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairJobItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairJobItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairJobItem model
   */
  readonly fields: RepairJobItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairJobItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairJobItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairJob<T extends RepairJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairJobDefaultArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairJobItem model
   */
  interface RepairJobItemFieldRefs {
    readonly id: FieldRef<"RepairJobItem", 'Int'>
    readonly itemType: FieldRef<"RepairJobItem", 'JobItemType'>
    readonly description: FieldRef<"RepairJobItem", 'String'>
    readonly quantity: FieldRef<"RepairJobItem", 'Int'>
    readonly unitPrice: FieldRef<"RepairJobItem", 'Decimal'>
    readonly totalPrice: FieldRef<"RepairJobItem", 'Decimal'>
    readonly remarks: FieldRef<"RepairJobItem", 'String'>
    readonly repairJobId: FieldRef<"RepairJobItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RepairJobItem findUnique
   */
  export type RepairJobItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * Filter, which RepairJobItem to fetch.
     */
    where: RepairJobItemWhereUniqueInput
  }

  /**
   * RepairJobItem findUniqueOrThrow
   */
  export type RepairJobItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * Filter, which RepairJobItem to fetch.
     */
    where: RepairJobItemWhereUniqueInput
  }

  /**
   * RepairJobItem findFirst
   */
  export type RepairJobItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * Filter, which RepairJobItem to fetch.
     */
    where?: RepairJobItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairJobItems to fetch.
     */
    orderBy?: RepairJobItemOrderByWithRelationInput | RepairJobItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairJobItems.
     */
    cursor?: RepairJobItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairJobItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairJobItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairJobItems.
     */
    distinct?: RepairJobItemScalarFieldEnum | RepairJobItemScalarFieldEnum[]
  }

  /**
   * RepairJobItem findFirstOrThrow
   */
  export type RepairJobItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * Filter, which RepairJobItem to fetch.
     */
    where?: RepairJobItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairJobItems to fetch.
     */
    orderBy?: RepairJobItemOrderByWithRelationInput | RepairJobItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairJobItems.
     */
    cursor?: RepairJobItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairJobItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairJobItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairJobItems.
     */
    distinct?: RepairJobItemScalarFieldEnum | RepairJobItemScalarFieldEnum[]
  }

  /**
   * RepairJobItem findMany
   */
  export type RepairJobItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * Filter, which RepairJobItems to fetch.
     */
    where?: RepairJobItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairJobItems to fetch.
     */
    orderBy?: RepairJobItemOrderByWithRelationInput | RepairJobItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairJobItems.
     */
    cursor?: RepairJobItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairJobItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairJobItems.
     */
    skip?: number
    distinct?: RepairJobItemScalarFieldEnum | RepairJobItemScalarFieldEnum[]
  }

  /**
   * RepairJobItem create
   */
  export type RepairJobItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairJobItem.
     */
    data: XOR<RepairJobItemCreateInput, RepairJobItemUncheckedCreateInput>
  }

  /**
   * RepairJobItem createMany
   */
  export type RepairJobItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairJobItems.
     */
    data: RepairJobItemCreateManyInput | RepairJobItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairJobItem createManyAndReturn
   */
  export type RepairJobItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * The data used to create many RepairJobItems.
     */
    data: RepairJobItemCreateManyInput | RepairJobItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairJobItem update
   */
  export type RepairJobItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairJobItem.
     */
    data: XOR<RepairJobItemUpdateInput, RepairJobItemUncheckedUpdateInput>
    /**
     * Choose, which RepairJobItem to update.
     */
    where: RepairJobItemWhereUniqueInput
  }

  /**
   * RepairJobItem updateMany
   */
  export type RepairJobItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairJobItems.
     */
    data: XOR<RepairJobItemUpdateManyMutationInput, RepairJobItemUncheckedUpdateManyInput>
    /**
     * Filter which RepairJobItems to update
     */
    where?: RepairJobItemWhereInput
    /**
     * Limit how many RepairJobItems to update.
     */
    limit?: number
  }

  /**
   * RepairJobItem updateManyAndReturn
   */
  export type RepairJobItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * The data used to update RepairJobItems.
     */
    data: XOR<RepairJobItemUpdateManyMutationInput, RepairJobItemUncheckedUpdateManyInput>
    /**
     * Filter which RepairJobItems to update
     */
    where?: RepairJobItemWhereInput
    /**
     * Limit how many RepairJobItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairJobItem upsert
   */
  export type RepairJobItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairJobItem to update in case it exists.
     */
    where: RepairJobItemWhereUniqueInput
    /**
     * In case the RepairJobItem found by the `where` argument doesn't exist, create a new RepairJobItem with this data.
     */
    create: XOR<RepairJobItemCreateInput, RepairJobItemUncheckedCreateInput>
    /**
     * In case the RepairJobItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairJobItemUpdateInput, RepairJobItemUncheckedUpdateInput>
  }

  /**
   * RepairJobItem delete
   */
  export type RepairJobItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
    /**
     * Filter which RepairJobItem to delete.
     */
    where: RepairJobItemWhereUniqueInput
  }

  /**
   * RepairJobItem deleteMany
   */
  export type RepairJobItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairJobItems to delete
     */
    where?: RepairJobItemWhereInput
    /**
     * Limit how many RepairJobItems to delete.
     */
    limit?: number
  }

  /**
   * RepairJobItem without action
   */
  export type RepairJobItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairJobItem
     */
    select?: RepairJobItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairJobItem
     */
    omit?: RepairJobItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairJobItemInclude<ExtArgs> | null
  }


  /**
   * Model RepairApproval
   */

  export type AggregateRepairApproval = {
    _count: RepairApprovalCountAggregateOutputType | null
    _avg: RepairApprovalAvgAggregateOutputType | null
    _sum: RepairApprovalSumAggregateOutputType | null
    _min: RepairApprovalMinAggregateOutputType | null
    _max: RepairApprovalMaxAggregateOutputType | null
  }

  export type RepairApprovalAvgAggregateOutputType = {
    id: number | null
    repairJobId: number | null
  }

  export type RepairApprovalSumAggregateOutputType = {
    id: number | null
    repairJobId: number | null
  }

  export type RepairApprovalMinAggregateOutputType = {
    id: number | null
    approverName: string | null
    approvalDate: Date | null
    approvalStatus: $Enums.ApprovalStatus | null
    comments: string | null
    repairJobId: number | null
  }

  export type RepairApprovalMaxAggregateOutputType = {
    id: number | null
    approverName: string | null
    approvalDate: Date | null
    approvalStatus: $Enums.ApprovalStatus | null
    comments: string | null
    repairJobId: number | null
  }

  export type RepairApprovalCountAggregateOutputType = {
    id: number
    approverName: number
    approvalDate: number
    approvalStatus: number
    comments: number
    repairJobId: number
    _all: number
  }


  export type RepairApprovalAvgAggregateInputType = {
    id?: true
    repairJobId?: true
  }

  export type RepairApprovalSumAggregateInputType = {
    id?: true
    repairJobId?: true
  }

  export type RepairApprovalMinAggregateInputType = {
    id?: true
    approverName?: true
    approvalDate?: true
    approvalStatus?: true
    comments?: true
    repairJobId?: true
  }

  export type RepairApprovalMaxAggregateInputType = {
    id?: true
    approverName?: true
    approvalDate?: true
    approvalStatus?: true
    comments?: true
    repairJobId?: true
  }

  export type RepairApprovalCountAggregateInputType = {
    id?: true
    approverName?: true
    approvalDate?: true
    approvalStatus?: true
    comments?: true
    repairJobId?: true
    _all?: true
  }

  export type RepairApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairApproval to aggregate.
     */
    where?: RepairApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairApprovals to fetch.
     */
    orderBy?: RepairApprovalOrderByWithRelationInput | RepairApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairApprovals
    **/
    _count?: true | RepairApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairApprovalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairApprovalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairApprovalMaxAggregateInputType
  }

  export type GetRepairApprovalAggregateType<T extends RepairApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairApproval[P]>
      : GetScalarType<T[P], AggregateRepairApproval[P]>
  }




  export type RepairApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairApprovalWhereInput
    orderBy?: RepairApprovalOrderByWithAggregationInput | RepairApprovalOrderByWithAggregationInput[]
    by: RepairApprovalScalarFieldEnum[] | RepairApprovalScalarFieldEnum
    having?: RepairApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairApprovalCountAggregateInputType | true
    _avg?: RepairApprovalAvgAggregateInputType
    _sum?: RepairApprovalSumAggregateInputType
    _min?: RepairApprovalMinAggregateInputType
    _max?: RepairApprovalMaxAggregateInputType
  }

  export type RepairApprovalGroupByOutputType = {
    id: number
    approverName: string
    approvalDate: Date
    approvalStatus: $Enums.ApprovalStatus
    comments: string | null
    repairJobId: number
    _count: RepairApprovalCountAggregateOutputType | null
    _avg: RepairApprovalAvgAggregateOutputType | null
    _sum: RepairApprovalSumAggregateOutputType | null
    _min: RepairApprovalMinAggregateOutputType | null
    _max: RepairApprovalMaxAggregateOutputType | null
  }

  type GetRepairApprovalGroupByPayload<T extends RepairApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], RepairApprovalGroupByOutputType[P]>
        }
      >
    >


  export type RepairApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approverName?: boolean
    approvalDate?: boolean
    approvalStatus?: boolean
    comments?: boolean
    repairJobId?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairApproval"]>

  export type RepairApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approverName?: boolean
    approvalDate?: boolean
    approvalStatus?: boolean
    comments?: boolean
    repairJobId?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairApproval"]>

  export type RepairApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approverName?: boolean
    approvalDate?: boolean
    approvalStatus?: boolean
    comments?: boolean
    repairJobId?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairApproval"]>

  export type RepairApprovalSelectScalar = {
    id?: boolean
    approverName?: boolean
    approvalDate?: boolean
    approvalStatus?: boolean
    comments?: boolean
    repairJobId?: boolean
  }

  export type RepairApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "approverName" | "approvalDate" | "approvalStatus" | "comments" | "repairJobId", ExtArgs["result"]["repairApproval"]>
  export type RepairApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }
  export type RepairApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }
  export type RepairApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
  }

  export type $RepairApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairApproval"
    objects: {
      repairJob: Prisma.$RepairJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      approverName: string
      approvalDate: Date
      approvalStatus: $Enums.ApprovalStatus
      comments: string | null
      repairJobId: number
    }, ExtArgs["result"]["repairApproval"]>
    composites: {}
  }

  type RepairApprovalGetPayload<S extends boolean | null | undefined | RepairApprovalDefaultArgs> = $Result.GetResult<Prisma.$RepairApprovalPayload, S>

  type RepairApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairApprovalCountAggregateInputType | true
    }

  export interface RepairApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairApproval'], meta: { name: 'RepairApproval' } }
    /**
     * Find zero or one RepairApproval that matches the filter.
     * @param {RepairApprovalFindUniqueArgs} args - Arguments to find a RepairApproval
     * @example
     * // Get one RepairApproval
     * const repairApproval = await prisma.repairApproval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairApprovalFindUniqueArgs>(args: SelectSubset<T, RepairApprovalFindUniqueArgs<ExtArgs>>): Prisma__RepairApprovalClient<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairApproval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairApprovalFindUniqueOrThrowArgs} args - Arguments to find a RepairApproval
     * @example
     * // Get one RepairApproval
     * const repairApproval = await prisma.repairApproval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairApprovalClient<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairApproval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairApprovalFindFirstArgs} args - Arguments to find a RepairApproval
     * @example
     * // Get one RepairApproval
     * const repairApproval = await prisma.repairApproval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairApprovalFindFirstArgs>(args?: SelectSubset<T, RepairApprovalFindFirstArgs<ExtArgs>>): Prisma__RepairApprovalClient<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairApproval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairApprovalFindFirstOrThrowArgs} args - Arguments to find a RepairApproval
     * @example
     * // Get one RepairApproval
     * const repairApproval = await prisma.repairApproval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairApprovalClient<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairApprovals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairApprovals
     * const repairApprovals = await prisma.repairApproval.findMany()
     * 
     * // Get first 10 RepairApprovals
     * const repairApprovals = await prisma.repairApproval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairApprovalWithIdOnly = await prisma.repairApproval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairApprovalFindManyArgs>(args?: SelectSubset<T, RepairApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairApproval.
     * @param {RepairApprovalCreateArgs} args - Arguments to create a RepairApproval.
     * @example
     * // Create one RepairApproval
     * const RepairApproval = await prisma.repairApproval.create({
     *   data: {
     *     // ... data to create a RepairApproval
     *   }
     * })
     * 
     */
    create<T extends RepairApprovalCreateArgs>(args: SelectSubset<T, RepairApprovalCreateArgs<ExtArgs>>): Prisma__RepairApprovalClient<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairApprovals.
     * @param {RepairApprovalCreateManyArgs} args - Arguments to create many RepairApprovals.
     * @example
     * // Create many RepairApprovals
     * const repairApproval = await prisma.repairApproval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairApprovalCreateManyArgs>(args?: SelectSubset<T, RepairApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairApprovals and returns the data saved in the database.
     * @param {RepairApprovalCreateManyAndReturnArgs} args - Arguments to create many RepairApprovals.
     * @example
     * // Create many RepairApprovals
     * const repairApproval = await prisma.repairApproval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairApprovals and only return the `id`
     * const repairApprovalWithIdOnly = await prisma.repairApproval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairApproval.
     * @param {RepairApprovalDeleteArgs} args - Arguments to delete one RepairApproval.
     * @example
     * // Delete one RepairApproval
     * const RepairApproval = await prisma.repairApproval.delete({
     *   where: {
     *     // ... filter to delete one RepairApproval
     *   }
     * })
     * 
     */
    delete<T extends RepairApprovalDeleteArgs>(args: SelectSubset<T, RepairApprovalDeleteArgs<ExtArgs>>): Prisma__RepairApprovalClient<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairApproval.
     * @param {RepairApprovalUpdateArgs} args - Arguments to update one RepairApproval.
     * @example
     * // Update one RepairApproval
     * const repairApproval = await prisma.repairApproval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairApprovalUpdateArgs>(args: SelectSubset<T, RepairApprovalUpdateArgs<ExtArgs>>): Prisma__RepairApprovalClient<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairApprovals.
     * @param {RepairApprovalDeleteManyArgs} args - Arguments to filter RepairApprovals to delete.
     * @example
     * // Delete a few RepairApprovals
     * const { count } = await prisma.repairApproval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairApprovalDeleteManyArgs>(args?: SelectSubset<T, RepairApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairApprovals
     * const repairApproval = await prisma.repairApproval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairApprovalUpdateManyArgs>(args: SelectSubset<T, RepairApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairApprovals and returns the data updated in the database.
     * @param {RepairApprovalUpdateManyAndReturnArgs} args - Arguments to update many RepairApprovals.
     * @example
     * // Update many RepairApprovals
     * const repairApproval = await prisma.repairApproval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairApprovals and only return the `id`
     * const repairApprovalWithIdOnly = await prisma.repairApproval.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairApproval.
     * @param {RepairApprovalUpsertArgs} args - Arguments to update or create a RepairApproval.
     * @example
     * // Update or create a RepairApproval
     * const repairApproval = await prisma.repairApproval.upsert({
     *   create: {
     *     // ... data to create a RepairApproval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairApproval we want to update
     *   }
     * })
     */
    upsert<T extends RepairApprovalUpsertArgs>(args: SelectSubset<T, RepairApprovalUpsertArgs<ExtArgs>>): Prisma__RepairApprovalClient<$Result.GetResult<Prisma.$RepairApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairApprovalCountArgs} args - Arguments to filter RepairApprovals to count.
     * @example
     * // Count the number of RepairApprovals
     * const count = await prisma.repairApproval.count({
     *   where: {
     *     // ... the filter for the RepairApprovals we want to count
     *   }
     * })
    **/
    count<T extends RepairApprovalCountArgs>(
      args?: Subset<T, RepairApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairApprovalAggregateArgs>(args: Subset<T, RepairApprovalAggregateArgs>): Prisma.PrismaPromise<GetRepairApprovalAggregateType<T>>

    /**
     * Group by RepairApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairApprovalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairApprovalGroupByArgs['orderBy'] }
        : { orderBy?: RepairApprovalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairApproval model
   */
  readonly fields: RepairApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairApproval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairJob<T extends RepairJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairJobDefaultArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairApproval model
   */
  interface RepairApprovalFieldRefs {
    readonly id: FieldRef<"RepairApproval", 'Int'>
    readonly approverName: FieldRef<"RepairApproval", 'String'>
    readonly approvalDate: FieldRef<"RepairApproval", 'DateTime'>
    readonly approvalStatus: FieldRef<"RepairApproval", 'ApprovalStatus'>
    readonly comments: FieldRef<"RepairApproval", 'String'>
    readonly repairJobId: FieldRef<"RepairApproval", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RepairApproval findUnique
   */
  export type RepairApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * Filter, which RepairApproval to fetch.
     */
    where: RepairApprovalWhereUniqueInput
  }

  /**
   * RepairApproval findUniqueOrThrow
   */
  export type RepairApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * Filter, which RepairApproval to fetch.
     */
    where: RepairApprovalWhereUniqueInput
  }

  /**
   * RepairApproval findFirst
   */
  export type RepairApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * Filter, which RepairApproval to fetch.
     */
    where?: RepairApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairApprovals to fetch.
     */
    orderBy?: RepairApprovalOrderByWithRelationInput | RepairApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairApprovals.
     */
    cursor?: RepairApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairApprovals.
     */
    distinct?: RepairApprovalScalarFieldEnum | RepairApprovalScalarFieldEnum[]
  }

  /**
   * RepairApproval findFirstOrThrow
   */
  export type RepairApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * Filter, which RepairApproval to fetch.
     */
    where?: RepairApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairApprovals to fetch.
     */
    orderBy?: RepairApprovalOrderByWithRelationInput | RepairApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairApprovals.
     */
    cursor?: RepairApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairApprovals.
     */
    distinct?: RepairApprovalScalarFieldEnum | RepairApprovalScalarFieldEnum[]
  }

  /**
   * RepairApproval findMany
   */
  export type RepairApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * Filter, which RepairApprovals to fetch.
     */
    where?: RepairApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairApprovals to fetch.
     */
    orderBy?: RepairApprovalOrderByWithRelationInput | RepairApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairApprovals.
     */
    cursor?: RepairApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairApprovals.
     */
    skip?: number
    distinct?: RepairApprovalScalarFieldEnum | RepairApprovalScalarFieldEnum[]
  }

  /**
   * RepairApproval create
   */
  export type RepairApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairApproval.
     */
    data: XOR<RepairApprovalCreateInput, RepairApprovalUncheckedCreateInput>
  }

  /**
   * RepairApproval createMany
   */
  export type RepairApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairApprovals.
     */
    data: RepairApprovalCreateManyInput | RepairApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairApproval createManyAndReturn
   */
  export type RepairApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many RepairApprovals.
     */
    data: RepairApprovalCreateManyInput | RepairApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairApproval update
   */
  export type RepairApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairApproval.
     */
    data: XOR<RepairApprovalUpdateInput, RepairApprovalUncheckedUpdateInput>
    /**
     * Choose, which RepairApproval to update.
     */
    where: RepairApprovalWhereUniqueInput
  }

  /**
   * RepairApproval updateMany
   */
  export type RepairApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairApprovals.
     */
    data: XOR<RepairApprovalUpdateManyMutationInput, RepairApprovalUncheckedUpdateManyInput>
    /**
     * Filter which RepairApprovals to update
     */
    where?: RepairApprovalWhereInput
    /**
     * Limit how many RepairApprovals to update.
     */
    limit?: number
  }

  /**
   * RepairApproval updateManyAndReturn
   */
  export type RepairApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * The data used to update RepairApprovals.
     */
    data: XOR<RepairApprovalUpdateManyMutationInput, RepairApprovalUncheckedUpdateManyInput>
    /**
     * Filter which RepairApprovals to update
     */
    where?: RepairApprovalWhereInput
    /**
     * Limit how many RepairApprovals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairApproval upsert
   */
  export type RepairApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairApproval to update in case it exists.
     */
    where: RepairApprovalWhereUniqueInput
    /**
     * In case the RepairApproval found by the `where` argument doesn't exist, create a new RepairApproval with this data.
     */
    create: XOR<RepairApprovalCreateInput, RepairApprovalUncheckedCreateInput>
    /**
     * In case the RepairApproval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairApprovalUpdateInput, RepairApprovalUncheckedUpdateInput>
  }

  /**
   * RepairApproval delete
   */
  export type RepairApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
    /**
     * Filter which RepairApproval to delete.
     */
    where: RepairApprovalWhereUniqueInput
  }

  /**
   * RepairApproval deleteMany
   */
  export type RepairApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairApprovals to delete
     */
    where?: RepairApprovalWhereInput
    /**
     * Limit how many RepairApprovals to delete.
     */
    limit?: number
  }

  /**
   * RepairApproval without action
   */
  export type RepairApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairApproval
     */
    select?: RepairApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairApproval
     */
    omit?: RepairApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairApprovalInclude<ExtArgs> | null
  }


  /**
   * Model RepairLog
   */

  export type AggregateRepairLog = {
    _count: RepairLogCountAggregateOutputType | null
    _avg: RepairLogAvgAggregateOutputType | null
    _sum: RepairLogSumAggregateOutputType | null
    _min: RepairLogMinAggregateOutputType | null
    _max: RepairLogMaxAggregateOutputType | null
  }

  export type RepairLogAvgAggregateOutputType = {
    id: number | null
    repairJobId: number | null
    technicianId: number | null
  }

  export type RepairLogSumAggregateOutputType = {
    id: number | null
    repairJobId: number | null
    technicianId: number | null
  }

  export type RepairLogMinAggregateOutputType = {
    id: number | null
    action: string | null
    logDate: Date | null
    statusAfter: $Enums.JobStatus | null
    notes: string | null
    repairJobId: number | null
    technicianId: number | null
    createdAt: Date | null
  }

  export type RepairLogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    logDate: Date | null
    statusAfter: $Enums.JobStatus | null
    notes: string | null
    repairJobId: number | null
    technicianId: number | null
    createdAt: Date | null
  }

  export type RepairLogCountAggregateOutputType = {
    id: number
    action: number
    logDate: number
    statusAfter: number
    notes: number
    repairJobId: number
    technicianId: number
    createdAt: number
    _all: number
  }


  export type RepairLogAvgAggregateInputType = {
    id?: true
    repairJobId?: true
    technicianId?: true
  }

  export type RepairLogSumAggregateInputType = {
    id?: true
    repairJobId?: true
    technicianId?: true
  }

  export type RepairLogMinAggregateInputType = {
    id?: true
    action?: true
    logDate?: true
    statusAfter?: true
    notes?: true
    repairJobId?: true
    technicianId?: true
    createdAt?: true
  }

  export type RepairLogMaxAggregateInputType = {
    id?: true
    action?: true
    logDate?: true
    statusAfter?: true
    notes?: true
    repairJobId?: true
    technicianId?: true
    createdAt?: true
  }

  export type RepairLogCountAggregateInputType = {
    id?: true
    action?: true
    logDate?: true
    statusAfter?: true
    notes?: true
    repairJobId?: true
    technicianId?: true
    createdAt?: true
    _all?: true
  }

  export type RepairLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairLog to aggregate.
     */
    where?: RepairLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairLogs to fetch.
     */
    orderBy?: RepairLogOrderByWithRelationInput | RepairLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairLogs
    **/
    _count?: true | RepairLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairLogMaxAggregateInputType
  }

  export type GetRepairLogAggregateType<T extends RepairLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairLog[P]>
      : GetScalarType<T[P], AggregateRepairLog[P]>
  }




  export type RepairLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairLogWhereInput
    orderBy?: RepairLogOrderByWithAggregationInput | RepairLogOrderByWithAggregationInput[]
    by: RepairLogScalarFieldEnum[] | RepairLogScalarFieldEnum
    having?: RepairLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairLogCountAggregateInputType | true
    _avg?: RepairLogAvgAggregateInputType
    _sum?: RepairLogSumAggregateInputType
    _min?: RepairLogMinAggregateInputType
    _max?: RepairLogMaxAggregateInputType
  }

  export type RepairLogGroupByOutputType = {
    id: number
    action: string
    logDate: Date
    statusAfter: $Enums.JobStatus
    notes: string | null
    repairJobId: number
    technicianId: number
    createdAt: Date
    _count: RepairLogCountAggregateOutputType | null
    _avg: RepairLogAvgAggregateOutputType | null
    _sum: RepairLogSumAggregateOutputType | null
    _min: RepairLogMinAggregateOutputType | null
    _max: RepairLogMaxAggregateOutputType | null
  }

  type GetRepairLogGroupByPayload<T extends RepairLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairLogGroupByOutputType[P]>
            : GetScalarType<T[P], RepairLogGroupByOutputType[P]>
        }
      >
    >


  export type RepairLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    logDate?: boolean
    statusAfter?: boolean
    notes?: boolean
    repairJobId?: boolean
    technicianId?: boolean
    createdAt?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairLog"]>

  export type RepairLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    logDate?: boolean
    statusAfter?: boolean
    notes?: boolean
    repairJobId?: boolean
    technicianId?: boolean
    createdAt?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairLog"]>

  export type RepairLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    logDate?: boolean
    statusAfter?: boolean
    notes?: boolean
    repairJobId?: boolean
    technicianId?: boolean
    createdAt?: boolean
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairLog"]>

  export type RepairLogSelectScalar = {
    id?: boolean
    action?: boolean
    logDate?: boolean
    statusAfter?: boolean
    notes?: boolean
    repairJobId?: boolean
    technicianId?: boolean
    createdAt?: boolean
  }

  export type RepairLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "logDate" | "statusAfter" | "notes" | "repairJobId" | "technicianId" | "createdAt", ExtArgs["result"]["repairLog"]>
  export type RepairLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }
  export type RepairLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }
  export type RepairLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairJob?: boolean | RepairJobDefaultArgs<ExtArgs>
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }

  export type $RepairLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairLog"
    objects: {
      repairJob: Prisma.$RepairJobPayload<ExtArgs>
      technician: Prisma.$TechnicianPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      logDate: Date
      statusAfter: $Enums.JobStatus
      notes: string | null
      repairJobId: number
      technicianId: number
      createdAt: Date
    }, ExtArgs["result"]["repairLog"]>
    composites: {}
  }

  type RepairLogGetPayload<S extends boolean | null | undefined | RepairLogDefaultArgs> = $Result.GetResult<Prisma.$RepairLogPayload, S>

  type RepairLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairLogCountAggregateInputType | true
    }

  export interface RepairLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairLog'], meta: { name: 'RepairLog' } }
    /**
     * Find zero or one RepairLog that matches the filter.
     * @param {RepairLogFindUniqueArgs} args - Arguments to find a RepairLog
     * @example
     * // Get one RepairLog
     * const repairLog = await prisma.repairLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairLogFindUniqueArgs>(args: SelectSubset<T, RepairLogFindUniqueArgs<ExtArgs>>): Prisma__RepairLogClient<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairLogFindUniqueOrThrowArgs} args - Arguments to find a RepairLog
     * @example
     * // Get one RepairLog
     * const repairLog = await prisma.repairLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairLogClient<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairLogFindFirstArgs} args - Arguments to find a RepairLog
     * @example
     * // Get one RepairLog
     * const repairLog = await prisma.repairLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairLogFindFirstArgs>(args?: SelectSubset<T, RepairLogFindFirstArgs<ExtArgs>>): Prisma__RepairLogClient<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairLogFindFirstOrThrowArgs} args - Arguments to find a RepairLog
     * @example
     * // Get one RepairLog
     * const repairLog = await prisma.repairLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairLogClient<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairLogs
     * const repairLogs = await prisma.repairLog.findMany()
     * 
     * // Get first 10 RepairLogs
     * const repairLogs = await prisma.repairLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairLogWithIdOnly = await prisma.repairLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairLogFindManyArgs>(args?: SelectSubset<T, RepairLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairLog.
     * @param {RepairLogCreateArgs} args - Arguments to create a RepairLog.
     * @example
     * // Create one RepairLog
     * const RepairLog = await prisma.repairLog.create({
     *   data: {
     *     // ... data to create a RepairLog
     *   }
     * })
     * 
     */
    create<T extends RepairLogCreateArgs>(args: SelectSubset<T, RepairLogCreateArgs<ExtArgs>>): Prisma__RepairLogClient<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairLogs.
     * @param {RepairLogCreateManyArgs} args - Arguments to create many RepairLogs.
     * @example
     * // Create many RepairLogs
     * const repairLog = await prisma.repairLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairLogCreateManyArgs>(args?: SelectSubset<T, RepairLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairLogs and returns the data saved in the database.
     * @param {RepairLogCreateManyAndReturnArgs} args - Arguments to create many RepairLogs.
     * @example
     * // Create many RepairLogs
     * const repairLog = await prisma.repairLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairLogs and only return the `id`
     * const repairLogWithIdOnly = await prisma.repairLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairLogCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairLog.
     * @param {RepairLogDeleteArgs} args - Arguments to delete one RepairLog.
     * @example
     * // Delete one RepairLog
     * const RepairLog = await prisma.repairLog.delete({
     *   where: {
     *     // ... filter to delete one RepairLog
     *   }
     * })
     * 
     */
    delete<T extends RepairLogDeleteArgs>(args: SelectSubset<T, RepairLogDeleteArgs<ExtArgs>>): Prisma__RepairLogClient<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairLog.
     * @param {RepairLogUpdateArgs} args - Arguments to update one RepairLog.
     * @example
     * // Update one RepairLog
     * const repairLog = await prisma.repairLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairLogUpdateArgs>(args: SelectSubset<T, RepairLogUpdateArgs<ExtArgs>>): Prisma__RepairLogClient<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairLogs.
     * @param {RepairLogDeleteManyArgs} args - Arguments to filter RepairLogs to delete.
     * @example
     * // Delete a few RepairLogs
     * const { count } = await prisma.repairLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairLogDeleteManyArgs>(args?: SelectSubset<T, RepairLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairLogs
     * const repairLog = await prisma.repairLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairLogUpdateManyArgs>(args: SelectSubset<T, RepairLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairLogs and returns the data updated in the database.
     * @param {RepairLogUpdateManyAndReturnArgs} args - Arguments to update many RepairLogs.
     * @example
     * // Update many RepairLogs
     * const repairLog = await prisma.repairLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairLogs and only return the `id`
     * const repairLogWithIdOnly = await prisma.repairLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairLogUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairLog.
     * @param {RepairLogUpsertArgs} args - Arguments to update or create a RepairLog.
     * @example
     * // Update or create a RepairLog
     * const repairLog = await prisma.repairLog.upsert({
     *   create: {
     *     // ... data to create a RepairLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairLog we want to update
     *   }
     * })
     */
    upsert<T extends RepairLogUpsertArgs>(args: SelectSubset<T, RepairLogUpsertArgs<ExtArgs>>): Prisma__RepairLogClient<$Result.GetResult<Prisma.$RepairLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairLogCountArgs} args - Arguments to filter RepairLogs to count.
     * @example
     * // Count the number of RepairLogs
     * const count = await prisma.repairLog.count({
     *   where: {
     *     // ... the filter for the RepairLogs we want to count
     *   }
     * })
    **/
    count<T extends RepairLogCountArgs>(
      args?: Subset<T, RepairLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairLogAggregateArgs>(args: Subset<T, RepairLogAggregateArgs>): Prisma.PrismaPromise<GetRepairLogAggregateType<T>>

    /**
     * Group by RepairLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairLogGroupByArgs['orderBy'] }
        : { orderBy?: RepairLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairLog model
   */
  readonly fields: RepairLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairJob<T extends RepairJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairJobDefaultArgs<ExtArgs>>): Prisma__RepairJobClient<$Result.GetResult<Prisma.$RepairJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technician<T extends TechnicianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnicianDefaultArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairLog model
   */
  interface RepairLogFieldRefs {
    readonly id: FieldRef<"RepairLog", 'Int'>
    readonly action: FieldRef<"RepairLog", 'String'>
    readonly logDate: FieldRef<"RepairLog", 'DateTime'>
    readonly statusAfter: FieldRef<"RepairLog", 'JobStatus'>
    readonly notes: FieldRef<"RepairLog", 'String'>
    readonly repairJobId: FieldRef<"RepairLog", 'Int'>
    readonly technicianId: FieldRef<"RepairLog", 'Int'>
    readonly createdAt: FieldRef<"RepairLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RepairLog findUnique
   */
  export type RepairLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * Filter, which RepairLog to fetch.
     */
    where: RepairLogWhereUniqueInput
  }

  /**
   * RepairLog findUniqueOrThrow
   */
  export type RepairLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * Filter, which RepairLog to fetch.
     */
    where: RepairLogWhereUniqueInput
  }

  /**
   * RepairLog findFirst
   */
  export type RepairLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * Filter, which RepairLog to fetch.
     */
    where?: RepairLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairLogs to fetch.
     */
    orderBy?: RepairLogOrderByWithRelationInput | RepairLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairLogs.
     */
    cursor?: RepairLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairLogs.
     */
    distinct?: RepairLogScalarFieldEnum | RepairLogScalarFieldEnum[]
  }

  /**
   * RepairLog findFirstOrThrow
   */
  export type RepairLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * Filter, which RepairLog to fetch.
     */
    where?: RepairLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairLogs to fetch.
     */
    orderBy?: RepairLogOrderByWithRelationInput | RepairLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairLogs.
     */
    cursor?: RepairLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairLogs.
     */
    distinct?: RepairLogScalarFieldEnum | RepairLogScalarFieldEnum[]
  }

  /**
   * RepairLog findMany
   */
  export type RepairLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * Filter, which RepairLogs to fetch.
     */
    where?: RepairLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairLogs to fetch.
     */
    orderBy?: RepairLogOrderByWithRelationInput | RepairLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairLogs.
     */
    cursor?: RepairLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairLogs.
     */
    skip?: number
    distinct?: RepairLogScalarFieldEnum | RepairLogScalarFieldEnum[]
  }

  /**
   * RepairLog create
   */
  export type RepairLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairLog.
     */
    data: XOR<RepairLogCreateInput, RepairLogUncheckedCreateInput>
  }

  /**
   * RepairLog createMany
   */
  export type RepairLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairLogs.
     */
    data: RepairLogCreateManyInput | RepairLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairLog createManyAndReturn
   */
  export type RepairLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * The data used to create many RepairLogs.
     */
    data: RepairLogCreateManyInput | RepairLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairLog update
   */
  export type RepairLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairLog.
     */
    data: XOR<RepairLogUpdateInput, RepairLogUncheckedUpdateInput>
    /**
     * Choose, which RepairLog to update.
     */
    where: RepairLogWhereUniqueInput
  }

  /**
   * RepairLog updateMany
   */
  export type RepairLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairLogs.
     */
    data: XOR<RepairLogUpdateManyMutationInput, RepairLogUncheckedUpdateManyInput>
    /**
     * Filter which RepairLogs to update
     */
    where?: RepairLogWhereInput
    /**
     * Limit how many RepairLogs to update.
     */
    limit?: number
  }

  /**
   * RepairLog updateManyAndReturn
   */
  export type RepairLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * The data used to update RepairLogs.
     */
    data: XOR<RepairLogUpdateManyMutationInput, RepairLogUncheckedUpdateManyInput>
    /**
     * Filter which RepairLogs to update
     */
    where?: RepairLogWhereInput
    /**
     * Limit how many RepairLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairLog upsert
   */
  export type RepairLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairLog to update in case it exists.
     */
    where: RepairLogWhereUniqueInput
    /**
     * In case the RepairLog found by the `where` argument doesn't exist, create a new RepairLog with this data.
     */
    create: XOR<RepairLogCreateInput, RepairLogUncheckedCreateInput>
    /**
     * In case the RepairLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairLogUpdateInput, RepairLogUncheckedUpdateInput>
  }

  /**
   * RepairLog delete
   */
  export type RepairLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
    /**
     * Filter which RepairLog to delete.
     */
    where: RepairLogWhereUniqueInput
  }

  /**
   * RepairLog deleteMany
   */
  export type RepairLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairLogs to delete
     */
    where?: RepairLogWhereInput
    /**
     * Limit how many RepairLogs to delete.
     */
    limit?: number
  }

  /**
   * RepairLog without action
   */
  export type RepairLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairLog
     */
    select?: RepairLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairLog
     */
    omit?: RepairLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    lineUserId: 'lineUserId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const TechnicianScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    specialization: 'specialization',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TechnicianScalarFieldEnum = (typeof TechnicianScalarFieldEnum)[keyof typeof TechnicianScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    productCode: 'productCode',
    name: 'name',
    model: 'model',
    description: 'description',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const RepairRequestScalarFieldEnum: {
    id: 'id',
    requestNo: 'requestNo',
    problemDescription: 'problemDescription',
    requestDate: 'requestDate',
    status: 'status',
    customerId: 'customerId',
    productId: 'productId'
  };

  export type RepairRequestScalarFieldEnum = (typeof RepairRequestScalarFieldEnum)[keyof typeof RepairRequestScalarFieldEnum]


  export const RepairJobScalarFieldEnum: {
    id: 'id',
    jobNo: 'jobNo',
    assignedDate: 'assignedDate',
    jobStatus: 'jobStatus',
    totalCost: 'totalCost',
    approvalStatus: 'approvalStatus',
    approvalDate: 'approvalDate',
    approvedBy: 'approvedBy',
    completedDate: 'completedDate',
    repairRequestId: 'repairRequestId',
    technicianId: 'technicianId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepairJobScalarFieldEnum = (typeof RepairJobScalarFieldEnum)[keyof typeof RepairJobScalarFieldEnum]


  export const RepairJobItemScalarFieldEnum: {
    id: 'id',
    itemType: 'itemType',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    remarks: 'remarks',
    repairJobId: 'repairJobId'
  };

  export type RepairJobItemScalarFieldEnum = (typeof RepairJobItemScalarFieldEnum)[keyof typeof RepairJobItemScalarFieldEnum]


  export const RepairApprovalScalarFieldEnum: {
    id: 'id',
    approverName: 'approverName',
    approvalDate: 'approvalDate',
    approvalStatus: 'approvalStatus',
    comments: 'comments',
    repairJobId: 'repairJobId'
  };

  export type RepairApprovalScalarFieldEnum = (typeof RepairApprovalScalarFieldEnum)[keyof typeof RepairApprovalScalarFieldEnum]


  export const RepairLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    logDate: 'logDate',
    statusAfter: 'statusAfter',
    notes: 'notes',
    repairJobId: 'repairJobId',
    technicianId: 'technicianId',
    createdAt: 'createdAt'
  };

  export type RepairLogScalarFieldEnum = (typeof RepairLogScalarFieldEnum)[keyof typeof RepairLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RepairRequestStatus'
   */
  export type EnumRepairRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RepairRequestStatus'>
    


  /**
   * Reference to a field of type 'RepairRequestStatus[]'
   */
  export type ListEnumRepairRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RepairRequestStatus[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'ApprovalStatus[]'
   */
  export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>
    


  /**
   * Reference to a field of type 'JobItemType'
   */
  export type EnumJobItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobItemType'>
    


  /**
   * Reference to a field of type 'JobItemType[]'
   */
  export type ListEnumJobItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobItemType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    lineUserId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    products?: ProductListRelationFilter
    repairRequests?: RepairRequestListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    repairRequests?: RepairRequestOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    lineUserId?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    products?: ProductListRelationFilter
    repairRequests?: RepairRequestListRelationFilter
  }, "id" | "lineUserId" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    lineUserId?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type TechnicianWhereInput = {
    AND?: TechnicianWhereInput | TechnicianWhereInput[]
    OR?: TechnicianWhereInput[]
    NOT?: TechnicianWhereInput | TechnicianWhereInput[]
    id?: IntFilter<"Technician"> | number
    name?: StringFilter<"Technician"> | string
    email?: StringNullableFilter<"Technician"> | string | null
    phone?: StringNullableFilter<"Technician"> | string | null
    specialization?: StringNullableFilter<"Technician"> | string | null
    createdAt?: DateTimeFilter<"Technician"> | Date | string
    updatedAt?: DateTimeFilter<"Technician"> | Date | string
    repairJobs?: RepairJobListRelationFilter
    repairLogs?: RepairLogListRelationFilter
  }

  export type TechnicianOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repairJobs?: RepairJobOrderByRelationAggregateInput
    repairLogs?: RepairLogOrderByRelationAggregateInput
  }

  export type TechnicianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: TechnicianWhereInput | TechnicianWhereInput[]
    OR?: TechnicianWhereInput[]
    NOT?: TechnicianWhereInput | TechnicianWhereInput[]
    name?: StringFilter<"Technician"> | string
    phone?: StringNullableFilter<"Technician"> | string | null
    specialization?: StringNullableFilter<"Technician"> | string | null
    createdAt?: DateTimeFilter<"Technician"> | Date | string
    updatedAt?: DateTimeFilter<"Technician"> | Date | string
    repairJobs?: RepairJobListRelationFilter
    repairLogs?: RepairLogListRelationFilter
  }, "id" | "email">

  export type TechnicianOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TechnicianCountOrderByAggregateInput
    _avg?: TechnicianAvgOrderByAggregateInput
    _max?: TechnicianMaxOrderByAggregateInput
    _min?: TechnicianMinOrderByAggregateInput
    _sum?: TechnicianSumOrderByAggregateInput
  }

  export type TechnicianScalarWhereWithAggregatesInput = {
    AND?: TechnicianScalarWhereWithAggregatesInput | TechnicianScalarWhereWithAggregatesInput[]
    OR?: TechnicianScalarWhereWithAggregatesInput[]
    NOT?: TechnicianScalarWhereWithAggregatesInput | TechnicianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Technician"> | number
    name?: StringWithAggregatesFilter<"Technician"> | string
    email?: StringNullableWithAggregatesFilter<"Technician"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Technician"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"Technician"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Technician"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Technician"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    productCode?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    model?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    customerId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    repairRequests?: RepairRequestListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrderInput | SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    repairRequests?: RepairRequestOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productCode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    model?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    customerId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    repairRequests?: RepairRequestListRelationFilter
  }, "id" | "productCode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrderInput | SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    productCode?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    model?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    customerId?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type RepairRequestWhereInput = {
    AND?: RepairRequestWhereInput | RepairRequestWhereInput[]
    OR?: RepairRequestWhereInput[]
    NOT?: RepairRequestWhereInput | RepairRequestWhereInput[]
    id?: IntFilter<"RepairRequest"> | number
    requestNo?: StringFilter<"RepairRequest"> | string
    problemDescription?: StringFilter<"RepairRequest"> | string
    requestDate?: DateTimeFilter<"RepairRequest"> | Date | string
    status?: EnumRepairRequestStatusFilter<"RepairRequest"> | $Enums.RepairRequestStatus
    customerId?: IntFilter<"RepairRequest"> | number
    productId?: IntFilter<"RepairRequest"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    repairJob?: XOR<RepairJobNullableScalarRelationFilter, RepairJobWhereInput> | null
  }

  export type RepairRequestOrderByWithRelationInput = {
    id?: SortOrder
    requestNo?: SortOrder
    problemDescription?: SortOrder
    requestDate?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    repairJob?: RepairJobOrderByWithRelationInput
  }

  export type RepairRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    requestNo?: string
    AND?: RepairRequestWhereInput | RepairRequestWhereInput[]
    OR?: RepairRequestWhereInput[]
    NOT?: RepairRequestWhereInput | RepairRequestWhereInput[]
    problemDescription?: StringFilter<"RepairRequest"> | string
    requestDate?: DateTimeFilter<"RepairRequest"> | Date | string
    status?: EnumRepairRequestStatusFilter<"RepairRequest"> | $Enums.RepairRequestStatus
    customerId?: IntFilter<"RepairRequest"> | number
    productId?: IntFilter<"RepairRequest"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    repairJob?: XOR<RepairJobNullableScalarRelationFilter, RepairJobWhereInput> | null
  }, "id" | "requestNo">

  export type RepairRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requestNo?: SortOrder
    problemDescription?: SortOrder
    requestDate?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    _count?: RepairRequestCountOrderByAggregateInput
    _avg?: RepairRequestAvgOrderByAggregateInput
    _max?: RepairRequestMaxOrderByAggregateInput
    _min?: RepairRequestMinOrderByAggregateInput
    _sum?: RepairRequestSumOrderByAggregateInput
  }

  export type RepairRequestScalarWhereWithAggregatesInput = {
    AND?: RepairRequestScalarWhereWithAggregatesInput | RepairRequestScalarWhereWithAggregatesInput[]
    OR?: RepairRequestScalarWhereWithAggregatesInput[]
    NOT?: RepairRequestScalarWhereWithAggregatesInput | RepairRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairRequest"> | number
    requestNo?: StringWithAggregatesFilter<"RepairRequest"> | string
    problemDescription?: StringWithAggregatesFilter<"RepairRequest"> | string
    requestDate?: DateTimeWithAggregatesFilter<"RepairRequest"> | Date | string
    status?: EnumRepairRequestStatusWithAggregatesFilter<"RepairRequest"> | $Enums.RepairRequestStatus
    customerId?: IntWithAggregatesFilter<"RepairRequest"> | number
    productId?: IntWithAggregatesFilter<"RepairRequest"> | number
  }

  export type RepairJobWhereInput = {
    AND?: RepairJobWhereInput | RepairJobWhereInput[]
    OR?: RepairJobWhereInput[]
    NOT?: RepairJobWhereInput | RepairJobWhereInput[]
    id?: IntFilter<"RepairJob"> | number
    jobNo?: StringFilter<"RepairJob"> | string
    assignedDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    jobStatus?: EnumJobStatusFilter<"RepairJob"> | $Enums.JobStatus
    totalCost?: DecimalFilter<"RepairJob"> | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFilter<"RepairJob"> | $Enums.ApprovalStatus
    approvalDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    approvedBy?: StringNullableFilter<"RepairJob"> | string | null
    completedDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    repairRequestId?: IntFilter<"RepairJob"> | number
    technicianId?: IntFilter<"RepairJob"> | number
    createdAt?: DateTimeFilter<"RepairJob"> | Date | string
    updatedAt?: DateTimeFilter<"RepairJob"> | Date | string
    repairRequest?: XOR<RepairRequestScalarRelationFilter, RepairRequestWhereInput>
    technician?: XOR<TechnicianScalarRelationFilter, TechnicianWhereInput>
    repairJobItems?: RepairJobItemListRelationFilter
    repairApprovals?: RepairApprovalListRelationFilter
    repairLogs?: RepairLogListRelationFilter
  }

  export type RepairJobOrderByWithRelationInput = {
    id?: SortOrder
    jobNo?: SortOrder
    assignedDate?: SortOrderInput | SortOrder
    jobStatus?: SortOrder
    totalCost?: SortOrder
    approvalStatus?: SortOrder
    approvalDate?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    completedDate?: SortOrderInput | SortOrder
    repairRequestId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repairRequest?: RepairRequestOrderByWithRelationInput
    technician?: TechnicianOrderByWithRelationInput
    repairJobItems?: RepairJobItemOrderByRelationAggregateInput
    repairApprovals?: RepairApprovalOrderByRelationAggregateInput
    repairLogs?: RepairLogOrderByRelationAggregateInput
  }

  export type RepairJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jobNo?: string
    repairRequestId?: number
    AND?: RepairJobWhereInput | RepairJobWhereInput[]
    OR?: RepairJobWhereInput[]
    NOT?: RepairJobWhereInput | RepairJobWhereInput[]
    assignedDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    jobStatus?: EnumJobStatusFilter<"RepairJob"> | $Enums.JobStatus
    totalCost?: DecimalFilter<"RepairJob"> | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFilter<"RepairJob"> | $Enums.ApprovalStatus
    approvalDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    approvedBy?: StringNullableFilter<"RepairJob"> | string | null
    completedDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    technicianId?: IntFilter<"RepairJob"> | number
    createdAt?: DateTimeFilter<"RepairJob"> | Date | string
    updatedAt?: DateTimeFilter<"RepairJob"> | Date | string
    repairRequest?: XOR<RepairRequestScalarRelationFilter, RepairRequestWhereInput>
    technician?: XOR<TechnicianScalarRelationFilter, TechnicianWhereInput>
    repairJobItems?: RepairJobItemListRelationFilter
    repairApprovals?: RepairApprovalListRelationFilter
    repairLogs?: RepairLogListRelationFilter
  }, "id" | "jobNo" | "repairRequestId">

  export type RepairJobOrderByWithAggregationInput = {
    id?: SortOrder
    jobNo?: SortOrder
    assignedDate?: SortOrderInput | SortOrder
    jobStatus?: SortOrder
    totalCost?: SortOrder
    approvalStatus?: SortOrder
    approvalDate?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    completedDate?: SortOrderInput | SortOrder
    repairRequestId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepairJobCountOrderByAggregateInput
    _avg?: RepairJobAvgOrderByAggregateInput
    _max?: RepairJobMaxOrderByAggregateInput
    _min?: RepairJobMinOrderByAggregateInput
    _sum?: RepairJobSumOrderByAggregateInput
  }

  export type RepairJobScalarWhereWithAggregatesInput = {
    AND?: RepairJobScalarWhereWithAggregatesInput | RepairJobScalarWhereWithAggregatesInput[]
    OR?: RepairJobScalarWhereWithAggregatesInput[]
    NOT?: RepairJobScalarWhereWithAggregatesInput | RepairJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairJob"> | number
    jobNo?: StringWithAggregatesFilter<"RepairJob"> | string
    assignedDate?: DateTimeNullableWithAggregatesFilter<"RepairJob"> | Date | string | null
    jobStatus?: EnumJobStatusWithAggregatesFilter<"RepairJob"> | $Enums.JobStatus
    totalCost?: DecimalWithAggregatesFilter<"RepairJob"> | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusWithAggregatesFilter<"RepairJob"> | $Enums.ApprovalStatus
    approvalDate?: DateTimeNullableWithAggregatesFilter<"RepairJob"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"RepairJob"> | string | null
    completedDate?: DateTimeNullableWithAggregatesFilter<"RepairJob"> | Date | string | null
    repairRequestId?: IntWithAggregatesFilter<"RepairJob"> | number
    technicianId?: IntWithAggregatesFilter<"RepairJob"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RepairJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RepairJob"> | Date | string
  }

  export type RepairJobItemWhereInput = {
    AND?: RepairJobItemWhereInput | RepairJobItemWhereInput[]
    OR?: RepairJobItemWhereInput[]
    NOT?: RepairJobItemWhereInput | RepairJobItemWhereInput[]
    id?: IntFilter<"RepairJobItem"> | number
    itemType?: EnumJobItemTypeFilter<"RepairJobItem"> | $Enums.JobItemType
    description?: StringFilter<"RepairJobItem"> | string
    quantity?: IntFilter<"RepairJobItem"> | number
    unitPrice?: DecimalFilter<"RepairJobItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"RepairJobItem"> | Decimal | DecimalJsLike | number | string
    remarks?: StringNullableFilter<"RepairJobItem"> | string | null
    repairJobId?: IntFilter<"RepairJobItem"> | number
    repairJob?: XOR<RepairJobScalarRelationFilter, RepairJobWhereInput>
  }

  export type RepairJobItemOrderByWithRelationInput = {
    id?: SortOrder
    itemType?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    remarks?: SortOrderInput | SortOrder
    repairJobId?: SortOrder
    repairJob?: RepairJobOrderByWithRelationInput
  }

  export type RepairJobItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepairJobItemWhereInput | RepairJobItemWhereInput[]
    OR?: RepairJobItemWhereInput[]
    NOT?: RepairJobItemWhereInput | RepairJobItemWhereInput[]
    itemType?: EnumJobItemTypeFilter<"RepairJobItem"> | $Enums.JobItemType
    description?: StringFilter<"RepairJobItem"> | string
    quantity?: IntFilter<"RepairJobItem"> | number
    unitPrice?: DecimalFilter<"RepairJobItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"RepairJobItem"> | Decimal | DecimalJsLike | number | string
    remarks?: StringNullableFilter<"RepairJobItem"> | string | null
    repairJobId?: IntFilter<"RepairJobItem"> | number
    repairJob?: XOR<RepairJobScalarRelationFilter, RepairJobWhereInput>
  }, "id">

  export type RepairJobItemOrderByWithAggregationInput = {
    id?: SortOrder
    itemType?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    remarks?: SortOrderInput | SortOrder
    repairJobId?: SortOrder
    _count?: RepairJobItemCountOrderByAggregateInput
    _avg?: RepairJobItemAvgOrderByAggregateInput
    _max?: RepairJobItemMaxOrderByAggregateInput
    _min?: RepairJobItemMinOrderByAggregateInput
    _sum?: RepairJobItemSumOrderByAggregateInput
  }

  export type RepairJobItemScalarWhereWithAggregatesInput = {
    AND?: RepairJobItemScalarWhereWithAggregatesInput | RepairJobItemScalarWhereWithAggregatesInput[]
    OR?: RepairJobItemScalarWhereWithAggregatesInput[]
    NOT?: RepairJobItemScalarWhereWithAggregatesInput | RepairJobItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairJobItem"> | number
    itemType?: EnumJobItemTypeWithAggregatesFilter<"RepairJobItem"> | $Enums.JobItemType
    description?: StringWithAggregatesFilter<"RepairJobItem"> | string
    quantity?: IntWithAggregatesFilter<"RepairJobItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"RepairJobItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"RepairJobItem"> | Decimal | DecimalJsLike | number | string
    remarks?: StringNullableWithAggregatesFilter<"RepairJobItem"> | string | null
    repairJobId?: IntWithAggregatesFilter<"RepairJobItem"> | number
  }

  export type RepairApprovalWhereInput = {
    AND?: RepairApprovalWhereInput | RepairApprovalWhereInput[]
    OR?: RepairApprovalWhereInput[]
    NOT?: RepairApprovalWhereInput | RepairApprovalWhereInput[]
    id?: IntFilter<"RepairApproval"> | number
    approverName?: StringFilter<"RepairApproval"> | string
    approvalDate?: DateTimeFilter<"RepairApproval"> | Date | string
    approvalStatus?: EnumApprovalStatusFilter<"RepairApproval"> | $Enums.ApprovalStatus
    comments?: StringNullableFilter<"RepairApproval"> | string | null
    repairJobId?: IntFilter<"RepairApproval"> | number
    repairJob?: XOR<RepairJobScalarRelationFilter, RepairJobWhereInput>
  }

  export type RepairApprovalOrderByWithRelationInput = {
    id?: SortOrder
    approverName?: SortOrder
    approvalDate?: SortOrder
    approvalStatus?: SortOrder
    comments?: SortOrderInput | SortOrder
    repairJobId?: SortOrder
    repairJob?: RepairJobOrderByWithRelationInput
  }

  export type RepairApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepairApprovalWhereInput | RepairApprovalWhereInput[]
    OR?: RepairApprovalWhereInput[]
    NOT?: RepairApprovalWhereInput | RepairApprovalWhereInput[]
    approverName?: StringFilter<"RepairApproval"> | string
    approvalDate?: DateTimeFilter<"RepairApproval"> | Date | string
    approvalStatus?: EnumApprovalStatusFilter<"RepairApproval"> | $Enums.ApprovalStatus
    comments?: StringNullableFilter<"RepairApproval"> | string | null
    repairJobId?: IntFilter<"RepairApproval"> | number
    repairJob?: XOR<RepairJobScalarRelationFilter, RepairJobWhereInput>
  }, "id">

  export type RepairApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    approverName?: SortOrder
    approvalDate?: SortOrder
    approvalStatus?: SortOrder
    comments?: SortOrderInput | SortOrder
    repairJobId?: SortOrder
    _count?: RepairApprovalCountOrderByAggregateInput
    _avg?: RepairApprovalAvgOrderByAggregateInput
    _max?: RepairApprovalMaxOrderByAggregateInput
    _min?: RepairApprovalMinOrderByAggregateInput
    _sum?: RepairApprovalSumOrderByAggregateInput
  }

  export type RepairApprovalScalarWhereWithAggregatesInput = {
    AND?: RepairApprovalScalarWhereWithAggregatesInput | RepairApprovalScalarWhereWithAggregatesInput[]
    OR?: RepairApprovalScalarWhereWithAggregatesInput[]
    NOT?: RepairApprovalScalarWhereWithAggregatesInput | RepairApprovalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairApproval"> | number
    approverName?: StringWithAggregatesFilter<"RepairApproval"> | string
    approvalDate?: DateTimeWithAggregatesFilter<"RepairApproval"> | Date | string
    approvalStatus?: EnumApprovalStatusWithAggregatesFilter<"RepairApproval"> | $Enums.ApprovalStatus
    comments?: StringNullableWithAggregatesFilter<"RepairApproval"> | string | null
    repairJobId?: IntWithAggregatesFilter<"RepairApproval"> | number
  }

  export type RepairLogWhereInput = {
    AND?: RepairLogWhereInput | RepairLogWhereInput[]
    OR?: RepairLogWhereInput[]
    NOT?: RepairLogWhereInput | RepairLogWhereInput[]
    id?: IntFilter<"RepairLog"> | number
    action?: StringFilter<"RepairLog"> | string
    logDate?: DateTimeFilter<"RepairLog"> | Date | string
    statusAfter?: EnumJobStatusFilter<"RepairLog"> | $Enums.JobStatus
    notes?: StringNullableFilter<"RepairLog"> | string | null
    repairJobId?: IntFilter<"RepairLog"> | number
    technicianId?: IntFilter<"RepairLog"> | number
    createdAt?: DateTimeFilter<"RepairLog"> | Date | string
    repairJob?: XOR<RepairJobScalarRelationFilter, RepairJobWhereInput>
    technician?: XOR<TechnicianScalarRelationFilter, TechnicianWhereInput>
  }

  export type RepairLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    logDate?: SortOrder
    statusAfter?: SortOrder
    notes?: SortOrderInput | SortOrder
    repairJobId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
    repairJob?: RepairJobOrderByWithRelationInput
    technician?: TechnicianOrderByWithRelationInput
  }

  export type RepairLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepairLogWhereInput | RepairLogWhereInput[]
    OR?: RepairLogWhereInput[]
    NOT?: RepairLogWhereInput | RepairLogWhereInput[]
    action?: StringFilter<"RepairLog"> | string
    logDate?: DateTimeFilter<"RepairLog"> | Date | string
    statusAfter?: EnumJobStatusFilter<"RepairLog"> | $Enums.JobStatus
    notes?: StringNullableFilter<"RepairLog"> | string | null
    repairJobId?: IntFilter<"RepairLog"> | number
    technicianId?: IntFilter<"RepairLog"> | number
    createdAt?: DateTimeFilter<"RepairLog"> | Date | string
    repairJob?: XOR<RepairJobScalarRelationFilter, RepairJobWhereInput>
    technician?: XOR<TechnicianScalarRelationFilter, TechnicianWhereInput>
  }, "id">

  export type RepairLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    logDate?: SortOrder
    statusAfter?: SortOrder
    notes?: SortOrderInput | SortOrder
    repairJobId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
    _count?: RepairLogCountOrderByAggregateInput
    _avg?: RepairLogAvgOrderByAggregateInput
    _max?: RepairLogMaxOrderByAggregateInput
    _min?: RepairLogMinOrderByAggregateInput
    _sum?: RepairLogSumOrderByAggregateInput
  }

  export type RepairLogScalarWhereWithAggregatesInput = {
    AND?: RepairLogScalarWhereWithAggregatesInput | RepairLogScalarWhereWithAggregatesInput[]
    OR?: RepairLogScalarWhereWithAggregatesInput[]
    NOT?: RepairLogScalarWhereWithAggregatesInput | RepairLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairLog"> | number
    action?: StringWithAggregatesFilter<"RepairLog"> | string
    logDate?: DateTimeWithAggregatesFilter<"RepairLog"> | Date | string
    statusAfter?: EnumJobStatusWithAggregatesFilter<"RepairLog"> | $Enums.JobStatus
    notes?: StringNullableWithAggregatesFilter<"RepairLog"> | string | null
    repairJobId?: IntWithAggregatesFilter<"RepairLog"> | number
    technicianId?: IntWithAggregatesFilter<"RepairLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RepairLog"> | Date | string
  }

  export type CustomerCreateInput = {
    lineUserId: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCustomerInput
    repairRequests?: RepairRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    lineUserId: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCustomerInput
    repairRequests?: RepairRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    lineUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCustomerNestedInput
    repairRequests?: RepairRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCustomerNestedInput
    repairRequests?: RepairRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    lineUserId: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    lineUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicianCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobs?: RepairJobCreateNestedManyWithoutTechnicianInput
    repairLogs?: RepairLogCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobs?: RepairJobUncheckedCreateNestedManyWithoutTechnicianInput
    repairLogs?: RepairLogUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobs?: RepairJobUpdateManyWithoutTechnicianNestedInput
    repairLogs?: RepairLogUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobs?: RepairJobUncheckedUpdateManyWithoutTechnicianNestedInput
    repairLogs?: RepairLogUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TechnicianUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    productCode: string
    name: string
    model: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutProductsInput
    repairRequests?: RepairRequestCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    productCode: string
    name: string
    model: string
    description?: string | null
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequests?: RepairRequestUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutProductsNestedInput
    repairRequests?: RepairRequestUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequests?: RepairRequestUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    productCode: string
    name: string
    model: string
    description?: string | null
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairRequestCreateInput = {
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    customer: CustomerCreateNestedOneWithoutRepairRequestsInput
    product: ProductCreateNestedOneWithoutRepairRequestsInput
    repairJob?: RepairJobCreateNestedOneWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateInput = {
    id?: number
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    customerId: number
    productId: number
    repairJob?: RepairJobUncheckedCreateNestedOneWithoutRepairRequestInput
  }

  export type RepairRequestUpdateInput = {
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    customer?: CustomerUpdateOneRequiredWithoutRepairRequestsNestedInput
    product?: ProductUpdateOneRequiredWithoutRepairRequestsNestedInput
    repairJob?: RepairJobUpdateOneWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    customerId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    repairJob?: RepairJobUncheckedUpdateOneWithoutRepairRequestNestedInput
  }

  export type RepairRequestCreateManyInput = {
    id?: number
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    customerId: number
    productId: number
  }

  export type RepairRequestUpdateManyMutationInput = {
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
  }

  export type RepairRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    customerId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairJobCreateInput = {
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequest: RepairRequestCreateNestedOneWithoutRepairJobInput
    technician: TechnicianCreateNestedOneWithoutRepairJobsInput
    repairJobItems?: RepairJobItemCreateNestedManyWithoutRepairJobInput
    repairApprovals?: RepairApprovalCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobUncheckedCreateInput = {
    id?: number
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    repairRequestId: number
    technicianId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobItems?: RepairJobItemUncheckedCreateNestedManyWithoutRepairJobInput
    repairApprovals?: RepairApprovalUncheckedCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogUncheckedCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobUpdateInput = {
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequest?: RepairRequestUpdateOneRequiredWithoutRepairJobNestedInput
    technician?: TechnicianUpdateOneRequiredWithoutRepairJobsNestedInput
    repairJobItems?: RepairJobItemUpdateManyWithoutRepairJobNestedInput
    repairApprovals?: RepairApprovalUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repairRequestId?: IntFieldUpdateOperationsInput | number
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobItems?: RepairJobItemUncheckedUpdateManyWithoutRepairJobNestedInput
    repairApprovals?: RepairApprovalUncheckedUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUncheckedUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobCreateManyInput = {
    id?: number
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    repairRequestId: number
    technicianId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepairJobUpdateManyMutationInput = {
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repairRequestId?: IntFieldUpdateOperationsInput | number
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairJobItemCreateInput = {
    itemType: $Enums.JobItemType
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    remarks?: string | null
    repairJob: RepairJobCreateNestedOneWithoutRepairJobItemsInput
  }

  export type RepairJobItemUncheckedCreateInput = {
    id?: number
    itemType: $Enums.JobItemType
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    remarks?: string | null
    repairJobId: number
  }

  export type RepairJobItemUpdateInput = {
    itemType?: EnumJobItemTypeFieldUpdateOperationsInput | $Enums.JobItemType
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    repairJob?: RepairJobUpdateOneRequiredWithoutRepairJobItemsNestedInput
  }

  export type RepairJobItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemType?: EnumJobItemTypeFieldUpdateOperationsInput | $Enums.JobItemType
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    repairJobId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairJobItemCreateManyInput = {
    id?: number
    itemType: $Enums.JobItemType
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    remarks?: string | null
    repairJobId: number
  }

  export type RepairJobItemUpdateManyMutationInput = {
    itemType?: EnumJobItemTypeFieldUpdateOperationsInput | $Enums.JobItemType
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepairJobItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemType?: EnumJobItemTypeFieldUpdateOperationsInput | $Enums.JobItemType
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    repairJobId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairApprovalCreateInput = {
    approverName: string
    approvalDate?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    comments?: string | null
    repairJob: RepairJobCreateNestedOneWithoutRepairApprovalsInput
  }

  export type RepairApprovalUncheckedCreateInput = {
    id?: number
    approverName: string
    approvalDate?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    comments?: string | null
    repairJobId: number
  }

  export type RepairApprovalUpdateInput = {
    approverName?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    repairJob?: RepairJobUpdateOneRequiredWithoutRepairApprovalsNestedInput
  }

  export type RepairApprovalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverName?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    repairJobId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairApprovalCreateManyInput = {
    id?: number
    approverName: string
    approvalDate?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    comments?: string | null
    repairJobId: number
  }

  export type RepairApprovalUpdateManyMutationInput = {
    approverName?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepairApprovalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverName?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    repairJobId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairLogCreateInput = {
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    createdAt?: Date | string
    repairJob: RepairJobCreateNestedOneWithoutRepairLogsInput
    technician: TechnicianCreateNestedOneWithoutRepairLogsInput
  }

  export type RepairLogUncheckedCreateInput = {
    id?: number
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    repairJobId: number
    technicianId: number
    createdAt?: Date | string
  }

  export type RepairLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJob?: RepairJobUpdateOneRequiredWithoutRepairLogsNestedInput
    technician?: TechnicianUpdateOneRequiredWithoutRepairLogsNestedInput
  }

  export type RepairLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    repairJobId?: IntFieldUpdateOperationsInput | number
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairLogCreateManyInput = {
    id?: number
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    repairJobId: number
    technicianId: number
    createdAt?: Date | string
  }

  export type RepairLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    repairJobId?: IntFieldUpdateOperationsInput | number
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type RepairRequestListRelationFilter = {
    every?: RepairRequestWhereInput
    some?: RepairRequestWhereInput
    none?: RepairRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepairRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RepairJobListRelationFilter = {
    every?: RepairJobWhereInput
    some?: RepairJobWhereInput
    none?: RepairJobWhereInput
  }

  export type RepairLogListRelationFilter = {
    every?: RepairLogWhereInput
    some?: RepairLogWhereInput
    none?: RepairLogWhereInput
  }

  export type RepairJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepairLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechnicianCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    specialization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicianAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechnicianMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    specialization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicianMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    specialization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicianSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type EnumRepairRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RepairRequestStatus | EnumRepairRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RepairRequestStatus[] | ListEnumRepairRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepairRequestStatus[] | ListEnumRepairRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRepairRequestStatusFilter<$PrismaModel> | $Enums.RepairRequestStatus
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type RepairJobNullableScalarRelationFilter = {
    is?: RepairJobWhereInput | null
    isNot?: RepairJobWhereInput | null
  }

  export type RepairRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requestNo?: SortOrder
    problemDescription?: SortOrder
    requestDate?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
  }

  export type RepairRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
  }

  export type RepairRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requestNo?: SortOrder
    problemDescription?: SortOrder
    requestDate?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
  }

  export type RepairRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requestNo?: SortOrder
    problemDescription?: SortOrder
    requestDate?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
  }

  export type RepairRequestSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
  }

  export type EnumRepairRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RepairRequestStatus | EnumRepairRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RepairRequestStatus[] | ListEnumRepairRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepairRequestStatus[] | ListEnumRepairRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRepairRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RepairRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRepairRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRepairRequestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type RepairRequestScalarRelationFilter = {
    is?: RepairRequestWhereInput
    isNot?: RepairRequestWhereInput
  }

  export type TechnicianScalarRelationFilter = {
    is?: TechnicianWhereInput
    isNot?: TechnicianWhereInput
  }

  export type RepairJobItemListRelationFilter = {
    every?: RepairJobItemWhereInput
    some?: RepairJobItemWhereInput
    none?: RepairJobItemWhereInput
  }

  export type RepairApprovalListRelationFilter = {
    every?: RepairApprovalWhereInput
    some?: RepairApprovalWhereInput
    none?: RepairApprovalWhereInput
  }

  export type RepairJobItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepairApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepairJobCountOrderByAggregateInput = {
    id?: SortOrder
    jobNo?: SortOrder
    assignedDate?: SortOrder
    jobStatus?: SortOrder
    totalCost?: SortOrder
    approvalStatus?: SortOrder
    approvalDate?: SortOrder
    approvedBy?: SortOrder
    completedDate?: SortOrder
    repairRequestId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepairJobAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCost?: SortOrder
    repairRequestId?: SortOrder
    technicianId?: SortOrder
  }

  export type RepairJobMaxOrderByAggregateInput = {
    id?: SortOrder
    jobNo?: SortOrder
    assignedDate?: SortOrder
    jobStatus?: SortOrder
    totalCost?: SortOrder
    approvalStatus?: SortOrder
    approvalDate?: SortOrder
    approvedBy?: SortOrder
    completedDate?: SortOrder
    repairRequestId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepairJobMinOrderByAggregateInput = {
    id?: SortOrder
    jobNo?: SortOrder
    assignedDate?: SortOrder
    jobStatus?: SortOrder
    totalCost?: SortOrder
    approvalStatus?: SortOrder
    approvalDate?: SortOrder
    approvedBy?: SortOrder
    completedDate?: SortOrder
    repairRequestId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepairJobSumOrderByAggregateInput = {
    id?: SortOrder
    totalCost?: SortOrder
    repairRequestId?: SortOrder
    technicianId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type EnumJobItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobItemType | EnumJobItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobItemType[] | ListEnumJobItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobItemType[] | ListEnumJobItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobItemTypeFilter<$PrismaModel> | $Enums.JobItemType
  }

  export type RepairJobScalarRelationFilter = {
    is?: RepairJobWhereInput
    isNot?: RepairJobWhereInput
  }

  export type RepairJobItemCountOrderByAggregateInput = {
    id?: SortOrder
    itemType?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    remarks?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairJobItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairJobItemMaxOrderByAggregateInput = {
    id?: SortOrder
    itemType?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    remarks?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairJobItemMinOrderByAggregateInput = {
    id?: SortOrder
    itemType?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    remarks?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairJobItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    repairJobId?: SortOrder
  }

  export type EnumJobItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobItemType | EnumJobItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobItemType[] | ListEnumJobItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobItemType[] | ListEnumJobItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobItemTypeFilter<$PrismaModel>
    _max?: NestedEnumJobItemTypeFilter<$PrismaModel>
  }

  export type RepairApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    approverName?: SortOrder
    approvalDate?: SortOrder
    approvalStatus?: SortOrder
    comments?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairApprovalAvgOrderByAggregateInput = {
    id?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    approverName?: SortOrder
    approvalDate?: SortOrder
    approvalStatus?: SortOrder
    comments?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    approverName?: SortOrder
    approvalDate?: SortOrder
    approvalStatus?: SortOrder
    comments?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairApprovalSumOrderByAggregateInput = {
    id?: SortOrder
    repairJobId?: SortOrder
  }

  export type RepairLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    logDate?: SortOrder
    statusAfter?: SortOrder
    notes?: SortOrder
    repairJobId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
  }

  export type RepairLogAvgOrderByAggregateInput = {
    id?: SortOrder
    repairJobId?: SortOrder
    technicianId?: SortOrder
  }

  export type RepairLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    logDate?: SortOrder
    statusAfter?: SortOrder
    notes?: SortOrder
    repairJobId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
  }

  export type RepairLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    logDate?: SortOrder
    statusAfter?: SortOrder
    notes?: SortOrder
    repairJobId?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
  }

  export type RepairLogSumOrderByAggregateInput = {
    id?: SortOrder
    repairJobId?: SortOrder
    technicianId?: SortOrder
  }

  export type ProductCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ProductCreateWithoutCustomerInput, ProductUncheckedCreateWithoutCustomerInput> | ProductCreateWithoutCustomerInput[] | ProductUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCustomerInput | ProductCreateOrConnectWithoutCustomerInput[]
    createMany?: ProductCreateManyCustomerInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type RepairRequestCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RepairRequestCreateWithoutCustomerInput, RepairRequestUncheckedCreateWithoutCustomerInput> | RepairRequestCreateWithoutCustomerInput[] | RepairRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutCustomerInput | RepairRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: RepairRequestCreateManyCustomerInputEnvelope
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ProductCreateWithoutCustomerInput, ProductUncheckedCreateWithoutCustomerInput> | ProductCreateWithoutCustomerInput[] | ProductUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCustomerInput | ProductCreateOrConnectWithoutCustomerInput[]
    createMany?: ProductCreateManyCustomerInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type RepairRequestUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RepairRequestCreateWithoutCustomerInput, RepairRequestUncheckedCreateWithoutCustomerInput> | RepairRequestCreateWithoutCustomerInput[] | RepairRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutCustomerInput | RepairRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: RepairRequestCreateManyCustomerInputEnvelope
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ProductCreateWithoutCustomerInput, ProductUncheckedCreateWithoutCustomerInput> | ProductCreateWithoutCustomerInput[] | ProductUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCustomerInput | ProductCreateOrConnectWithoutCustomerInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCustomerInput | ProductUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ProductCreateManyCustomerInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCustomerInput | ProductUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCustomerInput | ProductUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type RepairRequestUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RepairRequestCreateWithoutCustomerInput, RepairRequestUncheckedCreateWithoutCustomerInput> | RepairRequestCreateWithoutCustomerInput[] | RepairRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutCustomerInput | RepairRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: RepairRequestUpsertWithWhereUniqueWithoutCustomerInput | RepairRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RepairRequestCreateManyCustomerInputEnvelope
    set?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    disconnect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    delete?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    update?: RepairRequestUpdateWithWhereUniqueWithoutCustomerInput | RepairRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RepairRequestUpdateManyWithWhereWithoutCustomerInput | RepairRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ProductCreateWithoutCustomerInput, ProductUncheckedCreateWithoutCustomerInput> | ProductCreateWithoutCustomerInput[] | ProductUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCustomerInput | ProductCreateOrConnectWithoutCustomerInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCustomerInput | ProductUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ProductCreateManyCustomerInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCustomerInput | ProductUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCustomerInput | ProductUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type RepairRequestUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RepairRequestCreateWithoutCustomerInput, RepairRequestUncheckedCreateWithoutCustomerInput> | RepairRequestCreateWithoutCustomerInput[] | RepairRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutCustomerInput | RepairRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: RepairRequestUpsertWithWhereUniqueWithoutCustomerInput | RepairRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RepairRequestCreateManyCustomerInputEnvelope
    set?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    disconnect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    delete?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    update?: RepairRequestUpdateWithWhereUniqueWithoutCustomerInput | RepairRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RepairRequestUpdateManyWithWhereWithoutCustomerInput | RepairRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
  }

  export type RepairJobCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<RepairJobCreateWithoutTechnicianInput, RepairJobUncheckedCreateWithoutTechnicianInput> | RepairJobCreateWithoutTechnicianInput[] | RepairJobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: RepairJobCreateOrConnectWithoutTechnicianInput | RepairJobCreateOrConnectWithoutTechnicianInput[]
    createMany?: RepairJobCreateManyTechnicianInputEnvelope
    connect?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
  }

  export type RepairLogCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<RepairLogCreateWithoutTechnicianInput, RepairLogUncheckedCreateWithoutTechnicianInput> | RepairLogCreateWithoutTechnicianInput[] | RepairLogUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: RepairLogCreateOrConnectWithoutTechnicianInput | RepairLogCreateOrConnectWithoutTechnicianInput[]
    createMany?: RepairLogCreateManyTechnicianInputEnvelope
    connect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
  }

  export type RepairJobUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<RepairJobCreateWithoutTechnicianInput, RepairJobUncheckedCreateWithoutTechnicianInput> | RepairJobCreateWithoutTechnicianInput[] | RepairJobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: RepairJobCreateOrConnectWithoutTechnicianInput | RepairJobCreateOrConnectWithoutTechnicianInput[]
    createMany?: RepairJobCreateManyTechnicianInputEnvelope
    connect?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
  }

  export type RepairLogUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<RepairLogCreateWithoutTechnicianInput, RepairLogUncheckedCreateWithoutTechnicianInput> | RepairLogCreateWithoutTechnicianInput[] | RepairLogUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: RepairLogCreateOrConnectWithoutTechnicianInput | RepairLogCreateOrConnectWithoutTechnicianInput[]
    createMany?: RepairLogCreateManyTechnicianInputEnvelope
    connect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
  }

  export type RepairJobUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<RepairJobCreateWithoutTechnicianInput, RepairJobUncheckedCreateWithoutTechnicianInput> | RepairJobCreateWithoutTechnicianInput[] | RepairJobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: RepairJobCreateOrConnectWithoutTechnicianInput | RepairJobCreateOrConnectWithoutTechnicianInput[]
    upsert?: RepairJobUpsertWithWhereUniqueWithoutTechnicianInput | RepairJobUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: RepairJobCreateManyTechnicianInputEnvelope
    set?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
    disconnect?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
    delete?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
    connect?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
    update?: RepairJobUpdateWithWhereUniqueWithoutTechnicianInput | RepairJobUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: RepairJobUpdateManyWithWhereWithoutTechnicianInput | RepairJobUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: RepairJobScalarWhereInput | RepairJobScalarWhereInput[]
  }

  export type RepairLogUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<RepairLogCreateWithoutTechnicianInput, RepairLogUncheckedCreateWithoutTechnicianInput> | RepairLogCreateWithoutTechnicianInput[] | RepairLogUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: RepairLogCreateOrConnectWithoutTechnicianInput | RepairLogCreateOrConnectWithoutTechnicianInput[]
    upsert?: RepairLogUpsertWithWhereUniqueWithoutTechnicianInput | RepairLogUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: RepairLogCreateManyTechnicianInputEnvelope
    set?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    disconnect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    delete?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    connect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    update?: RepairLogUpdateWithWhereUniqueWithoutTechnicianInput | RepairLogUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: RepairLogUpdateManyWithWhereWithoutTechnicianInput | RepairLogUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: RepairLogScalarWhereInput | RepairLogScalarWhereInput[]
  }

  export type RepairJobUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<RepairJobCreateWithoutTechnicianInput, RepairJobUncheckedCreateWithoutTechnicianInput> | RepairJobCreateWithoutTechnicianInput[] | RepairJobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: RepairJobCreateOrConnectWithoutTechnicianInput | RepairJobCreateOrConnectWithoutTechnicianInput[]
    upsert?: RepairJobUpsertWithWhereUniqueWithoutTechnicianInput | RepairJobUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: RepairJobCreateManyTechnicianInputEnvelope
    set?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
    disconnect?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
    delete?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
    connect?: RepairJobWhereUniqueInput | RepairJobWhereUniqueInput[]
    update?: RepairJobUpdateWithWhereUniqueWithoutTechnicianInput | RepairJobUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: RepairJobUpdateManyWithWhereWithoutTechnicianInput | RepairJobUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: RepairJobScalarWhereInput | RepairJobScalarWhereInput[]
  }

  export type RepairLogUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<RepairLogCreateWithoutTechnicianInput, RepairLogUncheckedCreateWithoutTechnicianInput> | RepairLogCreateWithoutTechnicianInput[] | RepairLogUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: RepairLogCreateOrConnectWithoutTechnicianInput | RepairLogCreateOrConnectWithoutTechnicianInput[]
    upsert?: RepairLogUpsertWithWhereUniqueWithoutTechnicianInput | RepairLogUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: RepairLogCreateManyTechnicianInputEnvelope
    set?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    disconnect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    delete?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    connect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    update?: RepairLogUpdateWithWhereUniqueWithoutTechnicianInput | RepairLogUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: RepairLogUpdateManyWithWhereWithoutTechnicianInput | RepairLogUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: RepairLogScalarWhereInput | RepairLogScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutProductsInput = {
    create?: XOR<CustomerCreateWithoutProductsInput, CustomerUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProductsInput
    connect?: CustomerWhereUniqueInput
  }

  export type RepairRequestCreateNestedManyWithoutProductInput = {
    create?: XOR<RepairRequestCreateWithoutProductInput, RepairRequestUncheckedCreateWithoutProductInput> | RepairRequestCreateWithoutProductInput[] | RepairRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutProductInput | RepairRequestCreateOrConnectWithoutProductInput[]
    createMany?: RepairRequestCreateManyProductInputEnvelope
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
  }

  export type RepairRequestUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RepairRequestCreateWithoutProductInput, RepairRequestUncheckedCreateWithoutProductInput> | RepairRequestCreateWithoutProductInput[] | RepairRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutProductInput | RepairRequestCreateOrConnectWithoutProductInput[]
    createMany?: RepairRequestCreateManyProductInputEnvelope
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CustomerCreateWithoutProductsInput, CustomerUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProductsInput
    upsert?: CustomerUpsertWithoutProductsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutProductsInput, CustomerUpdateWithoutProductsInput>, CustomerUncheckedUpdateWithoutProductsInput>
  }

  export type RepairRequestUpdateManyWithoutProductNestedInput = {
    create?: XOR<RepairRequestCreateWithoutProductInput, RepairRequestUncheckedCreateWithoutProductInput> | RepairRequestCreateWithoutProductInput[] | RepairRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutProductInput | RepairRequestCreateOrConnectWithoutProductInput[]
    upsert?: RepairRequestUpsertWithWhereUniqueWithoutProductInput | RepairRequestUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RepairRequestCreateManyProductInputEnvelope
    set?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    disconnect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    delete?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    update?: RepairRequestUpdateWithWhereUniqueWithoutProductInput | RepairRequestUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RepairRequestUpdateManyWithWhereWithoutProductInput | RepairRequestUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
  }

  export type RepairRequestUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RepairRequestCreateWithoutProductInput, RepairRequestUncheckedCreateWithoutProductInput> | RepairRequestCreateWithoutProductInput[] | RepairRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutProductInput | RepairRequestCreateOrConnectWithoutProductInput[]
    upsert?: RepairRequestUpsertWithWhereUniqueWithoutProductInput | RepairRequestUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RepairRequestCreateManyProductInputEnvelope
    set?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    disconnect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    delete?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    update?: RepairRequestUpdateWithWhereUniqueWithoutProductInput | RepairRequestUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RepairRequestUpdateManyWithWhereWithoutProductInput | RepairRequestUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutRepairRequestsInput = {
    create?: XOR<CustomerCreateWithoutRepairRequestsInput, CustomerUncheckedCreateWithoutRepairRequestsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRepairRequestsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutRepairRequestsInput = {
    create?: XOR<ProductCreateWithoutRepairRequestsInput, ProductUncheckedCreateWithoutRepairRequestsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRepairRequestsInput
    connect?: ProductWhereUniqueInput
  }

  export type RepairJobCreateNestedOneWithoutRepairRequestInput = {
    create?: XOR<RepairJobCreateWithoutRepairRequestInput, RepairJobUncheckedCreateWithoutRepairRequestInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairRequestInput
    connect?: RepairJobWhereUniqueInput
  }

  export type RepairJobUncheckedCreateNestedOneWithoutRepairRequestInput = {
    create?: XOR<RepairJobCreateWithoutRepairRequestInput, RepairJobUncheckedCreateWithoutRepairRequestInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairRequestInput
    connect?: RepairJobWhereUniqueInput
  }

  export type EnumRepairRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RepairRequestStatus
  }

  export type CustomerUpdateOneRequiredWithoutRepairRequestsNestedInput = {
    create?: XOR<CustomerCreateWithoutRepairRequestsInput, CustomerUncheckedCreateWithoutRepairRequestsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRepairRequestsInput
    upsert?: CustomerUpsertWithoutRepairRequestsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRepairRequestsInput, CustomerUpdateWithoutRepairRequestsInput>, CustomerUncheckedUpdateWithoutRepairRequestsInput>
  }

  export type ProductUpdateOneRequiredWithoutRepairRequestsNestedInput = {
    create?: XOR<ProductCreateWithoutRepairRequestsInput, ProductUncheckedCreateWithoutRepairRequestsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRepairRequestsInput
    upsert?: ProductUpsertWithoutRepairRequestsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRepairRequestsInput, ProductUpdateWithoutRepairRequestsInput>, ProductUncheckedUpdateWithoutRepairRequestsInput>
  }

  export type RepairJobUpdateOneWithoutRepairRequestNestedInput = {
    create?: XOR<RepairJobCreateWithoutRepairRequestInput, RepairJobUncheckedCreateWithoutRepairRequestInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairRequestInput
    upsert?: RepairJobUpsertWithoutRepairRequestInput
    disconnect?: RepairJobWhereInput | boolean
    delete?: RepairJobWhereInput | boolean
    connect?: RepairJobWhereUniqueInput
    update?: XOR<XOR<RepairJobUpdateToOneWithWhereWithoutRepairRequestInput, RepairJobUpdateWithoutRepairRequestInput>, RepairJobUncheckedUpdateWithoutRepairRequestInput>
  }

  export type RepairJobUncheckedUpdateOneWithoutRepairRequestNestedInput = {
    create?: XOR<RepairJobCreateWithoutRepairRequestInput, RepairJobUncheckedCreateWithoutRepairRequestInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairRequestInput
    upsert?: RepairJobUpsertWithoutRepairRequestInput
    disconnect?: RepairJobWhereInput | boolean
    delete?: RepairJobWhereInput | boolean
    connect?: RepairJobWhereUniqueInput
    update?: XOR<XOR<RepairJobUpdateToOneWithWhereWithoutRepairRequestInput, RepairJobUpdateWithoutRepairRequestInput>, RepairJobUncheckedUpdateWithoutRepairRequestInput>
  }

  export type RepairRequestCreateNestedOneWithoutRepairJobInput = {
    create?: XOR<RepairRequestCreateWithoutRepairJobInput, RepairRequestUncheckedCreateWithoutRepairJobInput>
    connectOrCreate?: RepairRequestCreateOrConnectWithoutRepairJobInput
    connect?: RepairRequestWhereUniqueInput
  }

  export type TechnicianCreateNestedOneWithoutRepairJobsInput = {
    create?: XOR<TechnicianCreateWithoutRepairJobsInput, TechnicianUncheckedCreateWithoutRepairJobsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutRepairJobsInput
    connect?: TechnicianWhereUniqueInput
  }

  export type RepairJobItemCreateNestedManyWithoutRepairJobInput = {
    create?: XOR<RepairJobItemCreateWithoutRepairJobInput, RepairJobItemUncheckedCreateWithoutRepairJobInput> | RepairJobItemCreateWithoutRepairJobInput[] | RepairJobItemUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairJobItemCreateOrConnectWithoutRepairJobInput | RepairJobItemCreateOrConnectWithoutRepairJobInput[]
    createMany?: RepairJobItemCreateManyRepairJobInputEnvelope
    connect?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
  }

  export type RepairApprovalCreateNestedManyWithoutRepairJobInput = {
    create?: XOR<RepairApprovalCreateWithoutRepairJobInput, RepairApprovalUncheckedCreateWithoutRepairJobInput> | RepairApprovalCreateWithoutRepairJobInput[] | RepairApprovalUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairApprovalCreateOrConnectWithoutRepairJobInput | RepairApprovalCreateOrConnectWithoutRepairJobInput[]
    createMany?: RepairApprovalCreateManyRepairJobInputEnvelope
    connect?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
  }

  export type RepairLogCreateNestedManyWithoutRepairJobInput = {
    create?: XOR<RepairLogCreateWithoutRepairJobInput, RepairLogUncheckedCreateWithoutRepairJobInput> | RepairLogCreateWithoutRepairJobInput[] | RepairLogUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairLogCreateOrConnectWithoutRepairJobInput | RepairLogCreateOrConnectWithoutRepairJobInput[]
    createMany?: RepairLogCreateManyRepairJobInputEnvelope
    connect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
  }

  export type RepairJobItemUncheckedCreateNestedManyWithoutRepairJobInput = {
    create?: XOR<RepairJobItemCreateWithoutRepairJobInput, RepairJobItemUncheckedCreateWithoutRepairJobInput> | RepairJobItemCreateWithoutRepairJobInput[] | RepairJobItemUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairJobItemCreateOrConnectWithoutRepairJobInput | RepairJobItemCreateOrConnectWithoutRepairJobInput[]
    createMany?: RepairJobItemCreateManyRepairJobInputEnvelope
    connect?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
  }

  export type RepairApprovalUncheckedCreateNestedManyWithoutRepairJobInput = {
    create?: XOR<RepairApprovalCreateWithoutRepairJobInput, RepairApprovalUncheckedCreateWithoutRepairJobInput> | RepairApprovalCreateWithoutRepairJobInput[] | RepairApprovalUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairApprovalCreateOrConnectWithoutRepairJobInput | RepairApprovalCreateOrConnectWithoutRepairJobInput[]
    createMany?: RepairApprovalCreateManyRepairJobInputEnvelope
    connect?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
  }

  export type RepairLogUncheckedCreateNestedManyWithoutRepairJobInput = {
    create?: XOR<RepairLogCreateWithoutRepairJobInput, RepairLogUncheckedCreateWithoutRepairJobInput> | RepairLogCreateWithoutRepairJobInput[] | RepairLogUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairLogCreateOrConnectWithoutRepairJobInput | RepairLogCreateOrConnectWithoutRepairJobInput[]
    createMany?: RepairLogCreateManyRepairJobInputEnvelope
    connect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type RepairRequestUpdateOneRequiredWithoutRepairJobNestedInput = {
    create?: XOR<RepairRequestCreateWithoutRepairJobInput, RepairRequestUncheckedCreateWithoutRepairJobInput>
    connectOrCreate?: RepairRequestCreateOrConnectWithoutRepairJobInput
    upsert?: RepairRequestUpsertWithoutRepairJobInput
    connect?: RepairRequestWhereUniqueInput
    update?: XOR<XOR<RepairRequestUpdateToOneWithWhereWithoutRepairJobInput, RepairRequestUpdateWithoutRepairJobInput>, RepairRequestUncheckedUpdateWithoutRepairJobInput>
  }

  export type TechnicianUpdateOneRequiredWithoutRepairJobsNestedInput = {
    create?: XOR<TechnicianCreateWithoutRepairJobsInput, TechnicianUncheckedCreateWithoutRepairJobsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutRepairJobsInput
    upsert?: TechnicianUpsertWithoutRepairJobsInput
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutRepairJobsInput, TechnicianUpdateWithoutRepairJobsInput>, TechnicianUncheckedUpdateWithoutRepairJobsInput>
  }

  export type RepairJobItemUpdateManyWithoutRepairJobNestedInput = {
    create?: XOR<RepairJobItemCreateWithoutRepairJobInput, RepairJobItemUncheckedCreateWithoutRepairJobInput> | RepairJobItemCreateWithoutRepairJobInput[] | RepairJobItemUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairJobItemCreateOrConnectWithoutRepairJobInput | RepairJobItemCreateOrConnectWithoutRepairJobInput[]
    upsert?: RepairJobItemUpsertWithWhereUniqueWithoutRepairJobInput | RepairJobItemUpsertWithWhereUniqueWithoutRepairJobInput[]
    createMany?: RepairJobItemCreateManyRepairJobInputEnvelope
    set?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
    disconnect?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
    delete?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
    connect?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
    update?: RepairJobItemUpdateWithWhereUniqueWithoutRepairJobInput | RepairJobItemUpdateWithWhereUniqueWithoutRepairJobInput[]
    updateMany?: RepairJobItemUpdateManyWithWhereWithoutRepairJobInput | RepairJobItemUpdateManyWithWhereWithoutRepairJobInput[]
    deleteMany?: RepairJobItemScalarWhereInput | RepairJobItemScalarWhereInput[]
  }

  export type RepairApprovalUpdateManyWithoutRepairJobNestedInput = {
    create?: XOR<RepairApprovalCreateWithoutRepairJobInput, RepairApprovalUncheckedCreateWithoutRepairJobInput> | RepairApprovalCreateWithoutRepairJobInput[] | RepairApprovalUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairApprovalCreateOrConnectWithoutRepairJobInput | RepairApprovalCreateOrConnectWithoutRepairJobInput[]
    upsert?: RepairApprovalUpsertWithWhereUniqueWithoutRepairJobInput | RepairApprovalUpsertWithWhereUniqueWithoutRepairJobInput[]
    createMany?: RepairApprovalCreateManyRepairJobInputEnvelope
    set?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
    disconnect?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
    delete?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
    connect?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
    update?: RepairApprovalUpdateWithWhereUniqueWithoutRepairJobInput | RepairApprovalUpdateWithWhereUniqueWithoutRepairJobInput[]
    updateMany?: RepairApprovalUpdateManyWithWhereWithoutRepairJobInput | RepairApprovalUpdateManyWithWhereWithoutRepairJobInput[]
    deleteMany?: RepairApprovalScalarWhereInput | RepairApprovalScalarWhereInput[]
  }

  export type RepairLogUpdateManyWithoutRepairJobNestedInput = {
    create?: XOR<RepairLogCreateWithoutRepairJobInput, RepairLogUncheckedCreateWithoutRepairJobInput> | RepairLogCreateWithoutRepairJobInput[] | RepairLogUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairLogCreateOrConnectWithoutRepairJobInput | RepairLogCreateOrConnectWithoutRepairJobInput[]
    upsert?: RepairLogUpsertWithWhereUniqueWithoutRepairJobInput | RepairLogUpsertWithWhereUniqueWithoutRepairJobInput[]
    createMany?: RepairLogCreateManyRepairJobInputEnvelope
    set?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    disconnect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    delete?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    connect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    update?: RepairLogUpdateWithWhereUniqueWithoutRepairJobInput | RepairLogUpdateWithWhereUniqueWithoutRepairJobInput[]
    updateMany?: RepairLogUpdateManyWithWhereWithoutRepairJobInput | RepairLogUpdateManyWithWhereWithoutRepairJobInput[]
    deleteMany?: RepairLogScalarWhereInput | RepairLogScalarWhereInput[]
  }

  export type RepairJobItemUncheckedUpdateManyWithoutRepairJobNestedInput = {
    create?: XOR<RepairJobItemCreateWithoutRepairJobInput, RepairJobItemUncheckedCreateWithoutRepairJobInput> | RepairJobItemCreateWithoutRepairJobInput[] | RepairJobItemUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairJobItemCreateOrConnectWithoutRepairJobInput | RepairJobItemCreateOrConnectWithoutRepairJobInput[]
    upsert?: RepairJobItemUpsertWithWhereUniqueWithoutRepairJobInput | RepairJobItemUpsertWithWhereUniqueWithoutRepairJobInput[]
    createMany?: RepairJobItemCreateManyRepairJobInputEnvelope
    set?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
    disconnect?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
    delete?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
    connect?: RepairJobItemWhereUniqueInput | RepairJobItemWhereUniqueInput[]
    update?: RepairJobItemUpdateWithWhereUniqueWithoutRepairJobInput | RepairJobItemUpdateWithWhereUniqueWithoutRepairJobInput[]
    updateMany?: RepairJobItemUpdateManyWithWhereWithoutRepairJobInput | RepairJobItemUpdateManyWithWhereWithoutRepairJobInput[]
    deleteMany?: RepairJobItemScalarWhereInput | RepairJobItemScalarWhereInput[]
  }

  export type RepairApprovalUncheckedUpdateManyWithoutRepairJobNestedInput = {
    create?: XOR<RepairApprovalCreateWithoutRepairJobInput, RepairApprovalUncheckedCreateWithoutRepairJobInput> | RepairApprovalCreateWithoutRepairJobInput[] | RepairApprovalUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairApprovalCreateOrConnectWithoutRepairJobInput | RepairApprovalCreateOrConnectWithoutRepairJobInput[]
    upsert?: RepairApprovalUpsertWithWhereUniqueWithoutRepairJobInput | RepairApprovalUpsertWithWhereUniqueWithoutRepairJobInput[]
    createMany?: RepairApprovalCreateManyRepairJobInputEnvelope
    set?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
    disconnect?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
    delete?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
    connect?: RepairApprovalWhereUniqueInput | RepairApprovalWhereUniqueInput[]
    update?: RepairApprovalUpdateWithWhereUniqueWithoutRepairJobInput | RepairApprovalUpdateWithWhereUniqueWithoutRepairJobInput[]
    updateMany?: RepairApprovalUpdateManyWithWhereWithoutRepairJobInput | RepairApprovalUpdateManyWithWhereWithoutRepairJobInput[]
    deleteMany?: RepairApprovalScalarWhereInput | RepairApprovalScalarWhereInput[]
  }

  export type RepairLogUncheckedUpdateManyWithoutRepairJobNestedInput = {
    create?: XOR<RepairLogCreateWithoutRepairJobInput, RepairLogUncheckedCreateWithoutRepairJobInput> | RepairLogCreateWithoutRepairJobInput[] | RepairLogUncheckedCreateWithoutRepairJobInput[]
    connectOrCreate?: RepairLogCreateOrConnectWithoutRepairJobInput | RepairLogCreateOrConnectWithoutRepairJobInput[]
    upsert?: RepairLogUpsertWithWhereUniqueWithoutRepairJobInput | RepairLogUpsertWithWhereUniqueWithoutRepairJobInput[]
    createMany?: RepairLogCreateManyRepairJobInputEnvelope
    set?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    disconnect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    delete?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    connect?: RepairLogWhereUniqueInput | RepairLogWhereUniqueInput[]
    update?: RepairLogUpdateWithWhereUniqueWithoutRepairJobInput | RepairLogUpdateWithWhereUniqueWithoutRepairJobInput[]
    updateMany?: RepairLogUpdateManyWithWhereWithoutRepairJobInput | RepairLogUpdateManyWithWhereWithoutRepairJobInput[]
    deleteMany?: RepairLogScalarWhereInput | RepairLogScalarWhereInput[]
  }

  export type RepairJobCreateNestedOneWithoutRepairJobItemsInput = {
    create?: XOR<RepairJobCreateWithoutRepairJobItemsInput, RepairJobUncheckedCreateWithoutRepairJobItemsInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairJobItemsInput
    connect?: RepairJobWhereUniqueInput
  }

  export type EnumJobItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobItemType
  }

  export type RepairJobUpdateOneRequiredWithoutRepairJobItemsNestedInput = {
    create?: XOR<RepairJobCreateWithoutRepairJobItemsInput, RepairJobUncheckedCreateWithoutRepairJobItemsInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairJobItemsInput
    upsert?: RepairJobUpsertWithoutRepairJobItemsInput
    connect?: RepairJobWhereUniqueInput
    update?: XOR<XOR<RepairJobUpdateToOneWithWhereWithoutRepairJobItemsInput, RepairJobUpdateWithoutRepairJobItemsInput>, RepairJobUncheckedUpdateWithoutRepairJobItemsInput>
  }

  export type RepairJobCreateNestedOneWithoutRepairApprovalsInput = {
    create?: XOR<RepairJobCreateWithoutRepairApprovalsInput, RepairJobUncheckedCreateWithoutRepairApprovalsInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairApprovalsInput
    connect?: RepairJobWhereUniqueInput
  }

  export type RepairJobUpdateOneRequiredWithoutRepairApprovalsNestedInput = {
    create?: XOR<RepairJobCreateWithoutRepairApprovalsInput, RepairJobUncheckedCreateWithoutRepairApprovalsInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairApprovalsInput
    upsert?: RepairJobUpsertWithoutRepairApprovalsInput
    connect?: RepairJobWhereUniqueInput
    update?: XOR<XOR<RepairJobUpdateToOneWithWhereWithoutRepairApprovalsInput, RepairJobUpdateWithoutRepairApprovalsInput>, RepairJobUncheckedUpdateWithoutRepairApprovalsInput>
  }

  export type RepairJobCreateNestedOneWithoutRepairLogsInput = {
    create?: XOR<RepairJobCreateWithoutRepairLogsInput, RepairJobUncheckedCreateWithoutRepairLogsInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairLogsInput
    connect?: RepairJobWhereUniqueInput
  }

  export type TechnicianCreateNestedOneWithoutRepairLogsInput = {
    create?: XOR<TechnicianCreateWithoutRepairLogsInput, TechnicianUncheckedCreateWithoutRepairLogsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutRepairLogsInput
    connect?: TechnicianWhereUniqueInput
  }

  export type RepairJobUpdateOneRequiredWithoutRepairLogsNestedInput = {
    create?: XOR<RepairJobCreateWithoutRepairLogsInput, RepairJobUncheckedCreateWithoutRepairLogsInput>
    connectOrCreate?: RepairJobCreateOrConnectWithoutRepairLogsInput
    upsert?: RepairJobUpsertWithoutRepairLogsInput
    connect?: RepairJobWhereUniqueInput
    update?: XOR<XOR<RepairJobUpdateToOneWithWhereWithoutRepairLogsInput, RepairJobUpdateWithoutRepairLogsInput>, RepairJobUncheckedUpdateWithoutRepairLogsInput>
  }

  export type TechnicianUpdateOneRequiredWithoutRepairLogsNestedInput = {
    create?: XOR<TechnicianCreateWithoutRepairLogsInput, TechnicianUncheckedCreateWithoutRepairLogsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutRepairLogsInput
    upsert?: TechnicianUpsertWithoutRepairLogsInput
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutRepairLogsInput, TechnicianUpdateWithoutRepairLogsInput>, TechnicianUncheckedUpdateWithoutRepairLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRepairRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RepairRequestStatus | EnumRepairRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RepairRequestStatus[] | ListEnumRepairRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepairRequestStatus[] | ListEnumRepairRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRepairRequestStatusFilter<$PrismaModel> | $Enums.RepairRequestStatus
  }

  export type NestedEnumRepairRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RepairRequestStatus | EnumRepairRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RepairRequestStatus[] | ListEnumRepairRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepairRequestStatus[] | ListEnumRepairRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRepairRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RepairRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRepairRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRepairRequestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type NestedEnumJobItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobItemType | EnumJobItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobItemType[] | ListEnumJobItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobItemType[] | ListEnumJobItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobItemTypeFilter<$PrismaModel> | $Enums.JobItemType
  }

  export type NestedEnumJobItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobItemType | EnumJobItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobItemType[] | ListEnumJobItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobItemType[] | ListEnumJobItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobItemTypeFilter<$PrismaModel>
    _max?: NestedEnumJobItemTypeFilter<$PrismaModel>
  }

  export type ProductCreateWithoutCustomerInput = {
    productCode: string
    name: string
    model: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequests?: RepairRequestCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCustomerInput = {
    id?: number
    productCode: string
    name: string
    model: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequests?: RepairRequestUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCustomerInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCustomerInput, ProductUncheckedCreateWithoutCustomerInput>
  }

  export type ProductCreateManyCustomerInputEnvelope = {
    data: ProductCreateManyCustomerInput | ProductCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type RepairRequestCreateWithoutCustomerInput = {
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    product: ProductCreateNestedOneWithoutRepairRequestsInput
    repairJob?: RepairJobCreateNestedOneWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateWithoutCustomerInput = {
    id?: number
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    productId: number
    repairJob?: RepairJobUncheckedCreateNestedOneWithoutRepairRequestInput
  }

  export type RepairRequestCreateOrConnectWithoutCustomerInput = {
    where: RepairRequestWhereUniqueInput
    create: XOR<RepairRequestCreateWithoutCustomerInput, RepairRequestUncheckedCreateWithoutCustomerInput>
  }

  export type RepairRequestCreateManyCustomerInputEnvelope = {
    data: RepairRequestCreateManyCustomerInput | RepairRequestCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCustomerInput, ProductUncheckedUpdateWithoutCustomerInput>
    create: XOR<ProductCreateWithoutCustomerInput, ProductUncheckedCreateWithoutCustomerInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCustomerInput, ProductUncheckedUpdateWithoutCustomerInput>
  }

  export type ProductUpdateManyWithWhereWithoutCustomerInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    productCode?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    model?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    customerId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type RepairRequestUpsertWithWhereUniqueWithoutCustomerInput = {
    where: RepairRequestWhereUniqueInput
    update: XOR<RepairRequestUpdateWithoutCustomerInput, RepairRequestUncheckedUpdateWithoutCustomerInput>
    create: XOR<RepairRequestCreateWithoutCustomerInput, RepairRequestUncheckedCreateWithoutCustomerInput>
  }

  export type RepairRequestUpdateWithWhereUniqueWithoutCustomerInput = {
    where: RepairRequestWhereUniqueInput
    data: XOR<RepairRequestUpdateWithoutCustomerInput, RepairRequestUncheckedUpdateWithoutCustomerInput>
  }

  export type RepairRequestUpdateManyWithWhereWithoutCustomerInput = {
    where: RepairRequestScalarWhereInput
    data: XOR<RepairRequestUpdateManyMutationInput, RepairRequestUncheckedUpdateManyWithoutCustomerInput>
  }

  export type RepairRequestScalarWhereInput = {
    AND?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
    OR?: RepairRequestScalarWhereInput[]
    NOT?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
    id?: IntFilter<"RepairRequest"> | number
    requestNo?: StringFilter<"RepairRequest"> | string
    problemDescription?: StringFilter<"RepairRequest"> | string
    requestDate?: DateTimeFilter<"RepairRequest"> | Date | string
    status?: EnumRepairRequestStatusFilter<"RepairRequest"> | $Enums.RepairRequestStatus
    customerId?: IntFilter<"RepairRequest"> | number
    productId?: IntFilter<"RepairRequest"> | number
  }

  export type RepairJobCreateWithoutTechnicianInput = {
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequest: RepairRequestCreateNestedOneWithoutRepairJobInput
    repairJobItems?: RepairJobItemCreateNestedManyWithoutRepairJobInput
    repairApprovals?: RepairApprovalCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobUncheckedCreateWithoutTechnicianInput = {
    id?: number
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    repairRequestId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobItems?: RepairJobItemUncheckedCreateNestedManyWithoutRepairJobInput
    repairApprovals?: RepairApprovalUncheckedCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogUncheckedCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobCreateOrConnectWithoutTechnicianInput = {
    where: RepairJobWhereUniqueInput
    create: XOR<RepairJobCreateWithoutTechnicianInput, RepairJobUncheckedCreateWithoutTechnicianInput>
  }

  export type RepairJobCreateManyTechnicianInputEnvelope = {
    data: RepairJobCreateManyTechnicianInput | RepairJobCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type RepairLogCreateWithoutTechnicianInput = {
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    createdAt?: Date | string
    repairJob: RepairJobCreateNestedOneWithoutRepairLogsInput
  }

  export type RepairLogUncheckedCreateWithoutTechnicianInput = {
    id?: number
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    repairJobId: number
    createdAt?: Date | string
  }

  export type RepairLogCreateOrConnectWithoutTechnicianInput = {
    where: RepairLogWhereUniqueInput
    create: XOR<RepairLogCreateWithoutTechnicianInput, RepairLogUncheckedCreateWithoutTechnicianInput>
  }

  export type RepairLogCreateManyTechnicianInputEnvelope = {
    data: RepairLogCreateManyTechnicianInput | RepairLogCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type RepairJobUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: RepairJobWhereUniqueInput
    update: XOR<RepairJobUpdateWithoutTechnicianInput, RepairJobUncheckedUpdateWithoutTechnicianInput>
    create: XOR<RepairJobCreateWithoutTechnicianInput, RepairJobUncheckedCreateWithoutTechnicianInput>
  }

  export type RepairJobUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: RepairJobWhereUniqueInput
    data: XOR<RepairJobUpdateWithoutTechnicianInput, RepairJobUncheckedUpdateWithoutTechnicianInput>
  }

  export type RepairJobUpdateManyWithWhereWithoutTechnicianInput = {
    where: RepairJobScalarWhereInput
    data: XOR<RepairJobUpdateManyMutationInput, RepairJobUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type RepairJobScalarWhereInput = {
    AND?: RepairJobScalarWhereInput | RepairJobScalarWhereInput[]
    OR?: RepairJobScalarWhereInput[]
    NOT?: RepairJobScalarWhereInput | RepairJobScalarWhereInput[]
    id?: IntFilter<"RepairJob"> | number
    jobNo?: StringFilter<"RepairJob"> | string
    assignedDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    jobStatus?: EnumJobStatusFilter<"RepairJob"> | $Enums.JobStatus
    totalCost?: DecimalFilter<"RepairJob"> | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFilter<"RepairJob"> | $Enums.ApprovalStatus
    approvalDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    approvedBy?: StringNullableFilter<"RepairJob"> | string | null
    completedDate?: DateTimeNullableFilter<"RepairJob"> | Date | string | null
    repairRequestId?: IntFilter<"RepairJob"> | number
    technicianId?: IntFilter<"RepairJob"> | number
    createdAt?: DateTimeFilter<"RepairJob"> | Date | string
    updatedAt?: DateTimeFilter<"RepairJob"> | Date | string
  }

  export type RepairLogUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: RepairLogWhereUniqueInput
    update: XOR<RepairLogUpdateWithoutTechnicianInput, RepairLogUncheckedUpdateWithoutTechnicianInput>
    create: XOR<RepairLogCreateWithoutTechnicianInput, RepairLogUncheckedCreateWithoutTechnicianInput>
  }

  export type RepairLogUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: RepairLogWhereUniqueInput
    data: XOR<RepairLogUpdateWithoutTechnicianInput, RepairLogUncheckedUpdateWithoutTechnicianInput>
  }

  export type RepairLogUpdateManyWithWhereWithoutTechnicianInput = {
    where: RepairLogScalarWhereInput
    data: XOR<RepairLogUpdateManyMutationInput, RepairLogUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type RepairLogScalarWhereInput = {
    AND?: RepairLogScalarWhereInput | RepairLogScalarWhereInput[]
    OR?: RepairLogScalarWhereInput[]
    NOT?: RepairLogScalarWhereInput | RepairLogScalarWhereInput[]
    id?: IntFilter<"RepairLog"> | number
    action?: StringFilter<"RepairLog"> | string
    logDate?: DateTimeFilter<"RepairLog"> | Date | string
    statusAfter?: EnumJobStatusFilter<"RepairLog"> | $Enums.JobStatus
    notes?: StringNullableFilter<"RepairLog"> | string | null
    repairJobId?: IntFilter<"RepairLog"> | number
    technicianId?: IntFilter<"RepairLog"> | number
    createdAt?: DateTimeFilter<"RepairLog"> | Date | string
  }

  export type CustomerCreateWithoutProductsInput = {
    lineUserId: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequests?: RepairRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutProductsInput = {
    id?: number
    lineUserId: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequests?: RepairRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutProductsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutProductsInput, CustomerUncheckedCreateWithoutProductsInput>
  }

  export type RepairRequestCreateWithoutProductInput = {
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    customer: CustomerCreateNestedOneWithoutRepairRequestsInput
    repairJob?: RepairJobCreateNestedOneWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateWithoutProductInput = {
    id?: number
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    customerId: number
    repairJob?: RepairJobUncheckedCreateNestedOneWithoutRepairRequestInput
  }

  export type RepairRequestCreateOrConnectWithoutProductInput = {
    where: RepairRequestWhereUniqueInput
    create: XOR<RepairRequestCreateWithoutProductInput, RepairRequestUncheckedCreateWithoutProductInput>
  }

  export type RepairRequestCreateManyProductInputEnvelope = {
    data: RepairRequestCreateManyProductInput | RepairRequestCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutProductsInput = {
    update: XOR<CustomerUpdateWithoutProductsInput, CustomerUncheckedUpdateWithoutProductsInput>
    create: XOR<CustomerCreateWithoutProductsInput, CustomerUncheckedCreateWithoutProductsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutProductsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutProductsInput, CustomerUncheckedUpdateWithoutProductsInput>
  }

  export type CustomerUpdateWithoutProductsInput = {
    lineUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequests?: RepairRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequests?: RepairRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RepairRequestUpsertWithWhereUniqueWithoutProductInput = {
    where: RepairRequestWhereUniqueInput
    update: XOR<RepairRequestUpdateWithoutProductInput, RepairRequestUncheckedUpdateWithoutProductInput>
    create: XOR<RepairRequestCreateWithoutProductInput, RepairRequestUncheckedCreateWithoutProductInput>
  }

  export type RepairRequestUpdateWithWhereUniqueWithoutProductInput = {
    where: RepairRequestWhereUniqueInput
    data: XOR<RepairRequestUpdateWithoutProductInput, RepairRequestUncheckedUpdateWithoutProductInput>
  }

  export type RepairRequestUpdateManyWithWhereWithoutProductInput = {
    where: RepairRequestScalarWhereInput
    data: XOR<RepairRequestUpdateManyMutationInput, RepairRequestUncheckedUpdateManyWithoutProductInput>
  }

  export type CustomerCreateWithoutRepairRequestsInput = {
    lineUserId: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutRepairRequestsInput = {
    id?: number
    lineUserId: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutRepairRequestsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRepairRequestsInput, CustomerUncheckedCreateWithoutRepairRequestsInput>
  }

  export type ProductCreateWithoutRepairRequestsInput = {
    productCode: string
    name: string
    model: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutRepairRequestsInput = {
    id?: number
    productCode: string
    name: string
    model: string
    description?: string | null
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutRepairRequestsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRepairRequestsInput, ProductUncheckedCreateWithoutRepairRequestsInput>
  }

  export type RepairJobCreateWithoutRepairRequestInput = {
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: TechnicianCreateNestedOneWithoutRepairJobsInput
    repairJobItems?: RepairJobItemCreateNestedManyWithoutRepairJobInput
    repairApprovals?: RepairApprovalCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobUncheckedCreateWithoutRepairRequestInput = {
    id?: number
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    technicianId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobItems?: RepairJobItemUncheckedCreateNestedManyWithoutRepairJobInput
    repairApprovals?: RepairApprovalUncheckedCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogUncheckedCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobCreateOrConnectWithoutRepairRequestInput = {
    where: RepairJobWhereUniqueInput
    create: XOR<RepairJobCreateWithoutRepairRequestInput, RepairJobUncheckedCreateWithoutRepairRequestInput>
  }

  export type CustomerUpsertWithoutRepairRequestsInput = {
    update: XOR<CustomerUpdateWithoutRepairRequestsInput, CustomerUncheckedUpdateWithoutRepairRequestsInput>
    create: XOR<CustomerCreateWithoutRepairRequestsInput, CustomerUncheckedCreateWithoutRepairRequestsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutRepairRequestsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutRepairRequestsInput, CustomerUncheckedUpdateWithoutRepairRequestsInput>
  }

  export type CustomerUpdateWithoutRepairRequestsInput = {
    lineUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutRepairRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ProductUpsertWithoutRepairRequestsInput = {
    update: XOR<ProductUpdateWithoutRepairRequestsInput, ProductUncheckedUpdateWithoutRepairRequestsInput>
    create: XOR<ProductCreateWithoutRepairRequestsInput, ProductUncheckedCreateWithoutRepairRequestsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRepairRequestsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRepairRequestsInput, ProductUncheckedUpdateWithoutRepairRequestsInput>
  }

  export type ProductUpdateWithoutRepairRequestsInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutRepairRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairJobUpsertWithoutRepairRequestInput = {
    update: XOR<RepairJobUpdateWithoutRepairRequestInput, RepairJobUncheckedUpdateWithoutRepairRequestInput>
    create: XOR<RepairJobCreateWithoutRepairRequestInput, RepairJobUncheckedCreateWithoutRepairRequestInput>
    where?: RepairJobWhereInput
  }

  export type RepairJobUpdateToOneWithWhereWithoutRepairRequestInput = {
    where?: RepairJobWhereInput
    data: XOR<RepairJobUpdateWithoutRepairRequestInput, RepairJobUncheckedUpdateWithoutRepairRequestInput>
  }

  export type RepairJobUpdateWithoutRepairRequestInput = {
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: TechnicianUpdateOneRequiredWithoutRepairJobsNestedInput
    repairJobItems?: RepairJobItemUpdateManyWithoutRepairJobNestedInput
    repairApprovals?: RepairApprovalUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobUncheckedUpdateWithoutRepairRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobItems?: RepairJobItemUncheckedUpdateManyWithoutRepairJobNestedInput
    repairApprovals?: RepairApprovalUncheckedUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUncheckedUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairRequestCreateWithoutRepairJobInput = {
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    customer: CustomerCreateNestedOneWithoutRepairRequestsInput
    product: ProductCreateNestedOneWithoutRepairRequestsInput
  }

  export type RepairRequestUncheckedCreateWithoutRepairJobInput = {
    id?: number
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    customerId: number
    productId: number
  }

  export type RepairRequestCreateOrConnectWithoutRepairJobInput = {
    where: RepairRequestWhereUniqueInput
    create: XOR<RepairRequestCreateWithoutRepairJobInput, RepairRequestUncheckedCreateWithoutRepairJobInput>
  }

  export type TechnicianCreateWithoutRepairJobsInput = {
    name: string
    email?: string | null
    phone?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairLogs?: RepairLogCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateWithoutRepairJobsInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairLogs?: RepairLogUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianCreateOrConnectWithoutRepairJobsInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutRepairJobsInput, TechnicianUncheckedCreateWithoutRepairJobsInput>
  }

  export type RepairJobItemCreateWithoutRepairJobInput = {
    itemType: $Enums.JobItemType
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    remarks?: string | null
  }

  export type RepairJobItemUncheckedCreateWithoutRepairJobInput = {
    id?: number
    itemType: $Enums.JobItemType
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    remarks?: string | null
  }

  export type RepairJobItemCreateOrConnectWithoutRepairJobInput = {
    where: RepairJobItemWhereUniqueInput
    create: XOR<RepairJobItemCreateWithoutRepairJobInput, RepairJobItemUncheckedCreateWithoutRepairJobInput>
  }

  export type RepairJobItemCreateManyRepairJobInputEnvelope = {
    data: RepairJobItemCreateManyRepairJobInput | RepairJobItemCreateManyRepairJobInput[]
    skipDuplicates?: boolean
  }

  export type RepairApprovalCreateWithoutRepairJobInput = {
    approverName: string
    approvalDate?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    comments?: string | null
  }

  export type RepairApprovalUncheckedCreateWithoutRepairJobInput = {
    id?: number
    approverName: string
    approvalDate?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    comments?: string | null
  }

  export type RepairApprovalCreateOrConnectWithoutRepairJobInput = {
    where: RepairApprovalWhereUniqueInput
    create: XOR<RepairApprovalCreateWithoutRepairJobInput, RepairApprovalUncheckedCreateWithoutRepairJobInput>
  }

  export type RepairApprovalCreateManyRepairJobInputEnvelope = {
    data: RepairApprovalCreateManyRepairJobInput | RepairApprovalCreateManyRepairJobInput[]
    skipDuplicates?: boolean
  }

  export type RepairLogCreateWithoutRepairJobInput = {
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    createdAt?: Date | string
    technician: TechnicianCreateNestedOneWithoutRepairLogsInput
  }

  export type RepairLogUncheckedCreateWithoutRepairJobInput = {
    id?: number
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    technicianId: number
    createdAt?: Date | string
  }

  export type RepairLogCreateOrConnectWithoutRepairJobInput = {
    where: RepairLogWhereUniqueInput
    create: XOR<RepairLogCreateWithoutRepairJobInput, RepairLogUncheckedCreateWithoutRepairJobInput>
  }

  export type RepairLogCreateManyRepairJobInputEnvelope = {
    data: RepairLogCreateManyRepairJobInput | RepairLogCreateManyRepairJobInput[]
    skipDuplicates?: boolean
  }

  export type RepairRequestUpsertWithoutRepairJobInput = {
    update: XOR<RepairRequestUpdateWithoutRepairJobInput, RepairRequestUncheckedUpdateWithoutRepairJobInput>
    create: XOR<RepairRequestCreateWithoutRepairJobInput, RepairRequestUncheckedCreateWithoutRepairJobInput>
    where?: RepairRequestWhereInput
  }

  export type RepairRequestUpdateToOneWithWhereWithoutRepairJobInput = {
    where?: RepairRequestWhereInput
    data: XOR<RepairRequestUpdateWithoutRepairJobInput, RepairRequestUncheckedUpdateWithoutRepairJobInput>
  }

  export type RepairRequestUpdateWithoutRepairJobInput = {
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    customer?: CustomerUpdateOneRequiredWithoutRepairRequestsNestedInput
    product?: ProductUpdateOneRequiredWithoutRepairRequestsNestedInput
  }

  export type RepairRequestUncheckedUpdateWithoutRepairJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    customerId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type TechnicianUpsertWithoutRepairJobsInput = {
    update: XOR<TechnicianUpdateWithoutRepairJobsInput, TechnicianUncheckedUpdateWithoutRepairJobsInput>
    create: XOR<TechnicianCreateWithoutRepairJobsInput, TechnicianUncheckedCreateWithoutRepairJobsInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutRepairJobsInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutRepairJobsInput, TechnicianUncheckedUpdateWithoutRepairJobsInput>
  }

  export type TechnicianUpdateWithoutRepairJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairLogs?: RepairLogUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateWithoutRepairJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairLogs?: RepairLogUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type RepairJobItemUpsertWithWhereUniqueWithoutRepairJobInput = {
    where: RepairJobItemWhereUniqueInput
    update: XOR<RepairJobItemUpdateWithoutRepairJobInput, RepairJobItemUncheckedUpdateWithoutRepairJobInput>
    create: XOR<RepairJobItemCreateWithoutRepairJobInput, RepairJobItemUncheckedCreateWithoutRepairJobInput>
  }

  export type RepairJobItemUpdateWithWhereUniqueWithoutRepairJobInput = {
    where: RepairJobItemWhereUniqueInput
    data: XOR<RepairJobItemUpdateWithoutRepairJobInput, RepairJobItemUncheckedUpdateWithoutRepairJobInput>
  }

  export type RepairJobItemUpdateManyWithWhereWithoutRepairJobInput = {
    where: RepairJobItemScalarWhereInput
    data: XOR<RepairJobItemUpdateManyMutationInput, RepairJobItemUncheckedUpdateManyWithoutRepairJobInput>
  }

  export type RepairJobItemScalarWhereInput = {
    AND?: RepairJobItemScalarWhereInput | RepairJobItemScalarWhereInput[]
    OR?: RepairJobItemScalarWhereInput[]
    NOT?: RepairJobItemScalarWhereInput | RepairJobItemScalarWhereInput[]
    id?: IntFilter<"RepairJobItem"> | number
    itemType?: EnumJobItemTypeFilter<"RepairJobItem"> | $Enums.JobItemType
    description?: StringFilter<"RepairJobItem"> | string
    quantity?: IntFilter<"RepairJobItem"> | number
    unitPrice?: DecimalFilter<"RepairJobItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"RepairJobItem"> | Decimal | DecimalJsLike | number | string
    remarks?: StringNullableFilter<"RepairJobItem"> | string | null
    repairJobId?: IntFilter<"RepairJobItem"> | number
  }

  export type RepairApprovalUpsertWithWhereUniqueWithoutRepairJobInput = {
    where: RepairApprovalWhereUniqueInput
    update: XOR<RepairApprovalUpdateWithoutRepairJobInput, RepairApprovalUncheckedUpdateWithoutRepairJobInput>
    create: XOR<RepairApprovalCreateWithoutRepairJobInput, RepairApprovalUncheckedCreateWithoutRepairJobInput>
  }

  export type RepairApprovalUpdateWithWhereUniqueWithoutRepairJobInput = {
    where: RepairApprovalWhereUniqueInput
    data: XOR<RepairApprovalUpdateWithoutRepairJobInput, RepairApprovalUncheckedUpdateWithoutRepairJobInput>
  }

  export type RepairApprovalUpdateManyWithWhereWithoutRepairJobInput = {
    where: RepairApprovalScalarWhereInput
    data: XOR<RepairApprovalUpdateManyMutationInput, RepairApprovalUncheckedUpdateManyWithoutRepairJobInput>
  }

  export type RepairApprovalScalarWhereInput = {
    AND?: RepairApprovalScalarWhereInput | RepairApprovalScalarWhereInput[]
    OR?: RepairApprovalScalarWhereInput[]
    NOT?: RepairApprovalScalarWhereInput | RepairApprovalScalarWhereInput[]
    id?: IntFilter<"RepairApproval"> | number
    approverName?: StringFilter<"RepairApproval"> | string
    approvalDate?: DateTimeFilter<"RepairApproval"> | Date | string
    approvalStatus?: EnumApprovalStatusFilter<"RepairApproval"> | $Enums.ApprovalStatus
    comments?: StringNullableFilter<"RepairApproval"> | string | null
    repairJobId?: IntFilter<"RepairApproval"> | number
  }

  export type RepairLogUpsertWithWhereUniqueWithoutRepairJobInput = {
    where: RepairLogWhereUniqueInput
    update: XOR<RepairLogUpdateWithoutRepairJobInput, RepairLogUncheckedUpdateWithoutRepairJobInput>
    create: XOR<RepairLogCreateWithoutRepairJobInput, RepairLogUncheckedCreateWithoutRepairJobInput>
  }

  export type RepairLogUpdateWithWhereUniqueWithoutRepairJobInput = {
    where: RepairLogWhereUniqueInput
    data: XOR<RepairLogUpdateWithoutRepairJobInput, RepairLogUncheckedUpdateWithoutRepairJobInput>
  }

  export type RepairLogUpdateManyWithWhereWithoutRepairJobInput = {
    where: RepairLogScalarWhereInput
    data: XOR<RepairLogUpdateManyMutationInput, RepairLogUncheckedUpdateManyWithoutRepairJobInput>
  }

  export type RepairJobCreateWithoutRepairJobItemsInput = {
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequest: RepairRequestCreateNestedOneWithoutRepairJobInput
    technician: TechnicianCreateNestedOneWithoutRepairJobsInput
    repairApprovals?: RepairApprovalCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobUncheckedCreateWithoutRepairJobItemsInput = {
    id?: number
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    repairRequestId: number
    technicianId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairApprovals?: RepairApprovalUncheckedCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogUncheckedCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobCreateOrConnectWithoutRepairJobItemsInput = {
    where: RepairJobWhereUniqueInput
    create: XOR<RepairJobCreateWithoutRepairJobItemsInput, RepairJobUncheckedCreateWithoutRepairJobItemsInput>
  }

  export type RepairJobUpsertWithoutRepairJobItemsInput = {
    update: XOR<RepairJobUpdateWithoutRepairJobItemsInput, RepairJobUncheckedUpdateWithoutRepairJobItemsInput>
    create: XOR<RepairJobCreateWithoutRepairJobItemsInput, RepairJobUncheckedCreateWithoutRepairJobItemsInput>
    where?: RepairJobWhereInput
  }

  export type RepairJobUpdateToOneWithWhereWithoutRepairJobItemsInput = {
    where?: RepairJobWhereInput
    data: XOR<RepairJobUpdateWithoutRepairJobItemsInput, RepairJobUncheckedUpdateWithoutRepairJobItemsInput>
  }

  export type RepairJobUpdateWithoutRepairJobItemsInput = {
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequest?: RepairRequestUpdateOneRequiredWithoutRepairJobNestedInput
    technician?: TechnicianUpdateOneRequiredWithoutRepairJobsNestedInput
    repairApprovals?: RepairApprovalUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobUncheckedUpdateWithoutRepairJobItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repairRequestId?: IntFieldUpdateOperationsInput | number
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairApprovals?: RepairApprovalUncheckedUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUncheckedUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobCreateWithoutRepairApprovalsInput = {
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequest: RepairRequestCreateNestedOneWithoutRepairJobInput
    technician: TechnicianCreateNestedOneWithoutRepairJobsInput
    repairJobItems?: RepairJobItemCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobUncheckedCreateWithoutRepairApprovalsInput = {
    id?: number
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    repairRequestId: number
    technicianId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobItems?: RepairJobItemUncheckedCreateNestedManyWithoutRepairJobInput
    repairLogs?: RepairLogUncheckedCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobCreateOrConnectWithoutRepairApprovalsInput = {
    where: RepairJobWhereUniqueInput
    create: XOR<RepairJobCreateWithoutRepairApprovalsInput, RepairJobUncheckedCreateWithoutRepairApprovalsInput>
  }

  export type RepairJobUpsertWithoutRepairApprovalsInput = {
    update: XOR<RepairJobUpdateWithoutRepairApprovalsInput, RepairJobUncheckedUpdateWithoutRepairApprovalsInput>
    create: XOR<RepairJobCreateWithoutRepairApprovalsInput, RepairJobUncheckedCreateWithoutRepairApprovalsInput>
    where?: RepairJobWhereInput
  }

  export type RepairJobUpdateToOneWithWhereWithoutRepairApprovalsInput = {
    where?: RepairJobWhereInput
    data: XOR<RepairJobUpdateWithoutRepairApprovalsInput, RepairJobUncheckedUpdateWithoutRepairApprovalsInput>
  }

  export type RepairJobUpdateWithoutRepairApprovalsInput = {
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequest?: RepairRequestUpdateOneRequiredWithoutRepairJobNestedInput
    technician?: TechnicianUpdateOneRequiredWithoutRepairJobsNestedInput
    repairJobItems?: RepairJobItemUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobUncheckedUpdateWithoutRepairApprovalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repairRequestId?: IntFieldUpdateOperationsInput | number
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobItems?: RepairJobItemUncheckedUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUncheckedUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobCreateWithoutRepairLogsInput = {
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairRequest: RepairRequestCreateNestedOneWithoutRepairJobInput
    technician: TechnicianCreateNestedOneWithoutRepairJobsInput
    repairJobItems?: RepairJobItemCreateNestedManyWithoutRepairJobInput
    repairApprovals?: RepairApprovalCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobUncheckedCreateWithoutRepairLogsInput = {
    id?: number
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    repairRequestId: number
    technicianId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobItems?: RepairJobItemUncheckedCreateNestedManyWithoutRepairJobInput
    repairApprovals?: RepairApprovalUncheckedCreateNestedManyWithoutRepairJobInput
  }

  export type RepairJobCreateOrConnectWithoutRepairLogsInput = {
    where: RepairJobWhereUniqueInput
    create: XOR<RepairJobCreateWithoutRepairLogsInput, RepairJobUncheckedCreateWithoutRepairLogsInput>
  }

  export type TechnicianCreateWithoutRepairLogsInput = {
    name: string
    email?: string | null
    phone?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobs?: RepairJobCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateWithoutRepairLogsInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairJobs?: RepairJobUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianCreateOrConnectWithoutRepairLogsInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutRepairLogsInput, TechnicianUncheckedCreateWithoutRepairLogsInput>
  }

  export type RepairJobUpsertWithoutRepairLogsInput = {
    update: XOR<RepairJobUpdateWithoutRepairLogsInput, RepairJobUncheckedUpdateWithoutRepairLogsInput>
    create: XOR<RepairJobCreateWithoutRepairLogsInput, RepairJobUncheckedCreateWithoutRepairLogsInput>
    where?: RepairJobWhereInput
  }

  export type RepairJobUpdateToOneWithWhereWithoutRepairLogsInput = {
    where?: RepairJobWhereInput
    data: XOR<RepairJobUpdateWithoutRepairLogsInput, RepairJobUncheckedUpdateWithoutRepairLogsInput>
  }

  export type RepairJobUpdateWithoutRepairLogsInput = {
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequest?: RepairRequestUpdateOneRequiredWithoutRepairJobNestedInput
    technician?: TechnicianUpdateOneRequiredWithoutRepairJobsNestedInput
    repairJobItems?: RepairJobItemUpdateManyWithoutRepairJobNestedInput
    repairApprovals?: RepairApprovalUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobUncheckedUpdateWithoutRepairLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repairRequestId?: IntFieldUpdateOperationsInput | number
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobItems?: RepairJobItemUncheckedUpdateManyWithoutRepairJobNestedInput
    repairApprovals?: RepairApprovalUncheckedUpdateManyWithoutRepairJobNestedInput
  }

  export type TechnicianUpsertWithoutRepairLogsInput = {
    update: XOR<TechnicianUpdateWithoutRepairLogsInput, TechnicianUncheckedUpdateWithoutRepairLogsInput>
    create: XOR<TechnicianCreateWithoutRepairLogsInput, TechnicianUncheckedCreateWithoutRepairLogsInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutRepairLogsInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutRepairLogsInput, TechnicianUncheckedUpdateWithoutRepairLogsInput>
  }

  export type TechnicianUpdateWithoutRepairLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobs?: RepairJobUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateWithoutRepairLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobs?: RepairJobUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type ProductCreateManyCustomerInput = {
    id?: number
    productCode: string
    name: string
    model: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepairRequestCreateManyCustomerInput = {
    id?: number
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    productId: number
  }

  export type ProductUpdateWithoutCustomerInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequests?: RepairRequestUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequests?: RepairRequestUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairRequestUpdateWithoutCustomerInput = {
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    product?: ProductUpdateOneRequiredWithoutRepairRequestsNestedInput
    repairJob?: RepairJobUpdateOneWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    productId?: IntFieldUpdateOperationsInput | number
    repairJob?: RepairJobUncheckedUpdateOneWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairJobCreateManyTechnicianInput = {
    id?: number
    jobNo: string
    assignedDate?: Date | string | null
    jobStatus?: $Enums.JobStatus
    totalCost?: Decimal | DecimalJsLike | number | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalDate?: Date | string | null
    approvedBy?: string | null
    completedDate?: Date | string | null
    repairRequestId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepairLogCreateManyTechnicianInput = {
    id?: number
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    repairJobId: number
    createdAt?: Date | string
  }

  export type RepairJobUpdateWithoutTechnicianInput = {
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequest?: RepairRequestUpdateOneRequiredWithoutRepairJobNestedInput
    repairJobItems?: RepairJobItemUpdateManyWithoutRepairJobNestedInput
    repairApprovals?: RepairApprovalUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobUncheckedUpdateWithoutTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repairRequestId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJobItems?: RepairJobItemUncheckedUpdateManyWithoutRepairJobNestedInput
    repairApprovals?: RepairApprovalUncheckedUpdateManyWithoutRepairJobNestedInput
    repairLogs?: RepairLogUncheckedUpdateManyWithoutRepairJobNestedInput
  }

  export type RepairJobUncheckedUpdateManyWithoutTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobNo?: StringFieldUpdateOperationsInput | string
    assignedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repairRequestId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairLogUpdateWithoutTechnicianInput = {
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairJob?: RepairJobUpdateOneRequiredWithoutRepairLogsNestedInput
  }

  export type RepairLogUncheckedUpdateWithoutTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    repairJobId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairLogUncheckedUpdateManyWithoutTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    repairJobId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairRequestCreateManyProductInput = {
    id?: number
    requestNo: string
    problemDescription: string
    requestDate?: Date | string
    status?: $Enums.RepairRequestStatus
    customerId: number
  }

  export type RepairRequestUpdateWithoutProductInput = {
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    customer?: CustomerUpdateOneRequiredWithoutRepairRequestsNestedInput
    repairJob?: RepairJobUpdateOneWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    customerId?: IntFieldUpdateOperationsInput | number
    repairJob?: RepairJobUncheckedUpdateOneWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestNo?: StringFieldUpdateOperationsInput | string
    problemDescription?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRepairRequestStatusFieldUpdateOperationsInput | $Enums.RepairRequestStatus
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairJobItemCreateManyRepairJobInput = {
    id?: number
    itemType: $Enums.JobItemType
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    remarks?: string | null
  }

  export type RepairApprovalCreateManyRepairJobInput = {
    id?: number
    approverName: string
    approvalDate?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    comments?: string | null
  }

  export type RepairLogCreateManyRepairJobInput = {
    id?: number
    action: string
    logDate?: Date | string
    statusAfter: $Enums.JobStatus
    notes?: string | null
    technicianId: number
    createdAt?: Date | string
  }

  export type RepairJobItemUpdateWithoutRepairJobInput = {
    itemType?: EnumJobItemTypeFieldUpdateOperationsInput | $Enums.JobItemType
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepairJobItemUncheckedUpdateWithoutRepairJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemType?: EnumJobItemTypeFieldUpdateOperationsInput | $Enums.JobItemType
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepairJobItemUncheckedUpdateManyWithoutRepairJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemType?: EnumJobItemTypeFieldUpdateOperationsInput | $Enums.JobItemType
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepairApprovalUpdateWithoutRepairJobInput = {
    approverName?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepairApprovalUncheckedUpdateWithoutRepairJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverName?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepairApprovalUncheckedUpdateManyWithoutRepairJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverName?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepairLogUpdateWithoutRepairJobInput = {
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: TechnicianUpdateOneRequiredWithoutRepairLogsNestedInput
  }

  export type RepairLogUncheckedUpdateWithoutRepairJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairLogUncheckedUpdateManyWithoutRepairJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAfter?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}