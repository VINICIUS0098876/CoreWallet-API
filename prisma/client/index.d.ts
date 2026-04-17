
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
 * Model transictions
 * 
 */
export type transictions = $Result.DefaultSelection<Prisma.$transictionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model wallets
 * 
 */
export type wallets = $Result.DefaultSelection<Prisma.$walletsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Transictions
 * const transictions = await prisma.transictions.findMany()
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
   * // Fetch zero or more Transictions
   * const transictions = await prisma.transictions.findMany()
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
   * `prisma.transictions`: Exposes CRUD operations for the **transictions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transictions
    * const transictions = await prisma.transictions.findMany()
    * ```
    */
  get transictions(): Prisma.transictionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallets`: Exposes CRUD operations for the **wallets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallets.findMany()
    * ```
    */
  get wallets(): Prisma.walletsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    transictions: 'transictions',
    users: 'users',
    wallets: 'wallets'
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
      modelProps: "transictions" | "users" | "wallets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      transictions: {
        payload: Prisma.$transictionsPayload<ExtArgs>
        fields: Prisma.transictionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transictionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transictionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload>
          }
          findFirst: {
            args: Prisma.transictionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transictionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload>
          }
          findMany: {
            args: Prisma.transictionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload>[]
          }
          create: {
            args: Prisma.transictionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload>
          }
          createMany: {
            args: Prisma.transictionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transictionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload>
          }
          update: {
            args: Prisma.transictionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload>
          }
          deleteMany: {
            args: Prisma.transictionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transictionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transictionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transictionsPayload>
          }
          aggregate: {
            args: Prisma.TransictionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransictions>
          }
          groupBy: {
            args: Prisma.transictionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransictionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transictionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransictionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      wallets: {
        payload: Prisma.$walletsPayload<ExtArgs>
        fields: Prisma.walletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.walletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.walletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          findFirst: {
            args: Prisma.walletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.walletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          findMany: {
            args: Prisma.walletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          create: {
            args: Prisma.walletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          createMany: {
            args: Prisma.walletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.walletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          update: {
            args: Prisma.walletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          deleteMany: {
            args: Prisma.walletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.walletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.walletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          aggregate: {
            args: Prisma.WalletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallets>
          }
          groupBy: {
            args: Prisma.walletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.walletsCountArgs<ExtArgs>
            result: $Utils.Optional<WalletsCountAggregateOutputType> | number
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
    transictions?: transictionsOmit
    users?: usersOmit
    wallets?: walletsOmit
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
   * Count Type WalletsCountOutputType
   */

  export type WalletsCountOutputType = {
    transictions_transictions_id_wallet_originTowallets: number
    transictions_transictions_id_wallet_destinationTowallets: number
  }

  export type WalletsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transictions_transictions_id_wallet_originTowallets?: boolean | WalletsCountOutputTypeCountTransictions_transictions_id_wallet_originTowalletsArgs
    transictions_transictions_id_wallet_destinationTowallets?: boolean | WalletsCountOutputTypeCountTransictions_transictions_id_wallet_destinationTowalletsArgs
  }

  // Custom InputTypes
  /**
   * WalletsCountOutputType without action
   */
  export type WalletsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletsCountOutputType
     */
    select?: WalletsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletsCountOutputType without action
   */
  export type WalletsCountOutputTypeCountTransictions_transictions_id_wallet_originTowalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transictionsWhereInput
  }

  /**
   * WalletsCountOutputType without action
   */
  export type WalletsCountOutputTypeCountTransictions_transictions_id_wallet_destinationTowalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transictionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model transictions
   */

  export type AggregateTransictions = {
    _count: TransictionsCountAggregateOutputType | null
    _avg: TransictionsAvgAggregateOutputType | null
    _sum: TransictionsSumAggregateOutputType | null
    _min: TransictionsMinAggregateOutputType | null
    _max: TransictionsMaxAggregateOutputType | null
  }

  export type TransictionsAvgAggregateOutputType = {
    id_transiction: number | null
    value_transiction: Decimal | null
    id_wallet_origin: number | null
    id_wallet_destination: number | null
  }

  export type TransictionsSumAggregateOutputType = {
    id_transiction: number | null
    value_transiction: Decimal | null
    id_wallet_origin: number | null
    id_wallet_destination: number | null
  }

  export type TransictionsMinAggregateOutputType = {
    id_transiction: number | null
    value_transiction: Decimal | null
    date_time: Date | null
    id_wallet_origin: number | null
    id_wallet_destination: number | null
  }

  export type TransictionsMaxAggregateOutputType = {
    id_transiction: number | null
    value_transiction: Decimal | null
    date_time: Date | null
    id_wallet_origin: number | null
    id_wallet_destination: number | null
  }

  export type TransictionsCountAggregateOutputType = {
    id_transiction: number
    value_transiction: number
    date_time: number
    id_wallet_origin: number
    id_wallet_destination: number
    _all: number
  }


  export type TransictionsAvgAggregateInputType = {
    id_transiction?: true
    value_transiction?: true
    id_wallet_origin?: true
    id_wallet_destination?: true
  }

  export type TransictionsSumAggregateInputType = {
    id_transiction?: true
    value_transiction?: true
    id_wallet_origin?: true
    id_wallet_destination?: true
  }

  export type TransictionsMinAggregateInputType = {
    id_transiction?: true
    value_transiction?: true
    date_time?: true
    id_wallet_origin?: true
    id_wallet_destination?: true
  }

  export type TransictionsMaxAggregateInputType = {
    id_transiction?: true
    value_transiction?: true
    date_time?: true
    id_wallet_origin?: true
    id_wallet_destination?: true
  }

  export type TransictionsCountAggregateInputType = {
    id_transiction?: true
    value_transiction?: true
    date_time?: true
    id_wallet_origin?: true
    id_wallet_destination?: true
    _all?: true
  }

  export type TransictionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transictions to aggregate.
     */
    where?: transictionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transictions to fetch.
     */
    orderBy?: transictionsOrderByWithRelationInput | transictionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transictionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transictions
    **/
    _count?: true | TransictionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransictionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransictionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransictionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransictionsMaxAggregateInputType
  }

  export type GetTransictionsAggregateType<T extends TransictionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransictions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransictions[P]>
      : GetScalarType<T[P], AggregateTransictions[P]>
  }




  export type transictionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transictionsWhereInput
    orderBy?: transictionsOrderByWithAggregationInput | transictionsOrderByWithAggregationInput[]
    by: TransictionsScalarFieldEnum[] | TransictionsScalarFieldEnum
    having?: transictionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransictionsCountAggregateInputType | true
    _avg?: TransictionsAvgAggregateInputType
    _sum?: TransictionsSumAggregateInputType
    _min?: TransictionsMinAggregateInputType
    _max?: TransictionsMaxAggregateInputType
  }

  export type TransictionsGroupByOutputType = {
    id_transiction: number
    value_transiction: Decimal
    date_time: Date | null
    id_wallet_origin: number
    id_wallet_destination: number
    _count: TransictionsCountAggregateOutputType | null
    _avg: TransictionsAvgAggregateOutputType | null
    _sum: TransictionsSumAggregateOutputType | null
    _min: TransictionsMinAggregateOutputType | null
    _max: TransictionsMaxAggregateOutputType | null
  }

  type GetTransictionsGroupByPayload<T extends transictionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransictionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransictionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransictionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransictionsGroupByOutputType[P]>
        }
      >
    >


  export type transictionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transiction?: boolean
    value_transiction?: boolean
    date_time?: boolean
    id_wallet_origin?: boolean
    id_wallet_destination?: boolean
    wallets_transictions_id_wallet_originTowallets?: boolean | walletsDefaultArgs<ExtArgs>
    wallets_transictions_id_wallet_destinationTowallets?: boolean | walletsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transictions"]>



  export type transictionsSelectScalar = {
    id_transiction?: boolean
    value_transiction?: boolean
    date_time?: boolean
    id_wallet_origin?: boolean
    id_wallet_destination?: boolean
  }

  export type transictionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_transiction" | "value_transiction" | "date_time" | "id_wallet_origin" | "id_wallet_destination", ExtArgs["result"]["transictions"]>
  export type transictionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets_transictions_id_wallet_originTowallets?: boolean | walletsDefaultArgs<ExtArgs>
    wallets_transictions_id_wallet_destinationTowallets?: boolean | walletsDefaultArgs<ExtArgs>
  }

  export type $transictionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transictions"
    objects: {
      wallets_transictions_id_wallet_originTowallets: Prisma.$walletsPayload<ExtArgs>
      wallets_transictions_id_wallet_destinationTowallets: Prisma.$walletsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_transiction: number
      value_transiction: Prisma.Decimal
      date_time: Date | null
      id_wallet_origin: number
      id_wallet_destination: number
    }, ExtArgs["result"]["transictions"]>
    composites: {}
  }

  type transictionsGetPayload<S extends boolean | null | undefined | transictionsDefaultArgs> = $Result.GetResult<Prisma.$transictionsPayload, S>

  type transictionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transictionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransictionsCountAggregateInputType | true
    }

  export interface transictionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transictions'], meta: { name: 'transictions' } }
    /**
     * Find zero or one Transictions that matches the filter.
     * @param {transictionsFindUniqueArgs} args - Arguments to find a Transictions
     * @example
     * // Get one Transictions
     * const transictions = await prisma.transictions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transictionsFindUniqueArgs>(args: SelectSubset<T, transictionsFindUniqueArgs<ExtArgs>>): Prisma__transictionsClient<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transictions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transictionsFindUniqueOrThrowArgs} args - Arguments to find a Transictions
     * @example
     * // Get one Transictions
     * const transictions = await prisma.transictions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transictionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transictionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transictionsClient<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transictionsFindFirstArgs} args - Arguments to find a Transictions
     * @example
     * // Get one Transictions
     * const transictions = await prisma.transictions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transictionsFindFirstArgs>(args?: SelectSubset<T, transictionsFindFirstArgs<ExtArgs>>): Prisma__transictionsClient<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transictions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transictionsFindFirstOrThrowArgs} args - Arguments to find a Transictions
     * @example
     * // Get one Transictions
     * const transictions = await prisma.transictions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transictionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transictionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transictionsClient<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transictionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transictions
     * const transictions = await prisma.transictions.findMany()
     * 
     * // Get first 10 Transictions
     * const transictions = await prisma.transictions.findMany({ take: 10 })
     * 
     * // Only select the `id_transiction`
     * const transictionsWithId_transictionOnly = await prisma.transictions.findMany({ select: { id_transiction: true } })
     * 
     */
    findMany<T extends transictionsFindManyArgs>(args?: SelectSubset<T, transictionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transictions.
     * @param {transictionsCreateArgs} args - Arguments to create a Transictions.
     * @example
     * // Create one Transictions
     * const Transictions = await prisma.transictions.create({
     *   data: {
     *     // ... data to create a Transictions
     *   }
     * })
     * 
     */
    create<T extends transictionsCreateArgs>(args: SelectSubset<T, transictionsCreateArgs<ExtArgs>>): Prisma__transictionsClient<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transictions.
     * @param {transictionsCreateManyArgs} args - Arguments to create many Transictions.
     * @example
     * // Create many Transictions
     * const transictions = await prisma.transictions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transictionsCreateManyArgs>(args?: SelectSubset<T, transictionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transictions.
     * @param {transictionsDeleteArgs} args - Arguments to delete one Transictions.
     * @example
     * // Delete one Transictions
     * const Transictions = await prisma.transictions.delete({
     *   where: {
     *     // ... filter to delete one Transictions
     *   }
     * })
     * 
     */
    delete<T extends transictionsDeleteArgs>(args: SelectSubset<T, transictionsDeleteArgs<ExtArgs>>): Prisma__transictionsClient<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transictions.
     * @param {transictionsUpdateArgs} args - Arguments to update one Transictions.
     * @example
     * // Update one Transictions
     * const transictions = await prisma.transictions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transictionsUpdateArgs>(args: SelectSubset<T, transictionsUpdateArgs<ExtArgs>>): Prisma__transictionsClient<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transictions.
     * @param {transictionsDeleteManyArgs} args - Arguments to filter Transictions to delete.
     * @example
     * // Delete a few Transictions
     * const { count } = await prisma.transictions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transictionsDeleteManyArgs>(args?: SelectSubset<T, transictionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transictionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transictions
     * const transictions = await prisma.transictions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transictionsUpdateManyArgs>(args: SelectSubset<T, transictionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transictions.
     * @param {transictionsUpsertArgs} args - Arguments to update or create a Transictions.
     * @example
     * // Update or create a Transictions
     * const transictions = await prisma.transictions.upsert({
     *   create: {
     *     // ... data to create a Transictions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transictions we want to update
     *   }
     * })
     */
    upsert<T extends transictionsUpsertArgs>(args: SelectSubset<T, transictionsUpsertArgs<ExtArgs>>): Prisma__transictionsClient<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transictionsCountArgs} args - Arguments to filter Transictions to count.
     * @example
     * // Count the number of Transictions
     * const count = await prisma.transictions.count({
     *   where: {
     *     // ... the filter for the Transictions we want to count
     *   }
     * })
    **/
    count<T extends transictionsCountArgs>(
      args?: Subset<T, transictionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransictionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransictionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransictionsAggregateArgs>(args: Subset<T, TransictionsAggregateArgs>): Prisma.PrismaPromise<GetTransictionsAggregateType<T>>

    /**
     * Group by Transictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transictionsGroupByArgs} args - Group by arguments.
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
      T extends transictionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transictionsGroupByArgs['orderBy'] }
        : { orderBy?: transictionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transictionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransictionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transictions model
   */
  readonly fields: transictionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transictions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transictionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallets_transictions_id_wallet_originTowallets<T extends walletsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, walletsDefaultArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wallets_transictions_id_wallet_destinationTowallets<T extends walletsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, walletsDefaultArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transictions model
   */
  interface transictionsFieldRefs {
    readonly id_transiction: FieldRef<"transictions", 'Int'>
    readonly value_transiction: FieldRef<"transictions", 'Decimal'>
    readonly date_time: FieldRef<"transictions", 'DateTime'>
    readonly id_wallet_origin: FieldRef<"transictions", 'Int'>
    readonly id_wallet_destination: FieldRef<"transictions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transictions findUnique
   */
  export type transictionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * Filter, which transictions to fetch.
     */
    where: transictionsWhereUniqueInput
  }

  /**
   * transictions findUniqueOrThrow
   */
  export type transictionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * Filter, which transictions to fetch.
     */
    where: transictionsWhereUniqueInput
  }

  /**
   * transictions findFirst
   */
  export type transictionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * Filter, which transictions to fetch.
     */
    where?: transictionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transictions to fetch.
     */
    orderBy?: transictionsOrderByWithRelationInput | transictionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transictions.
     */
    cursor?: transictionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transictions.
     */
    distinct?: TransictionsScalarFieldEnum | TransictionsScalarFieldEnum[]
  }

  /**
   * transictions findFirstOrThrow
   */
  export type transictionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * Filter, which transictions to fetch.
     */
    where?: transictionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transictions to fetch.
     */
    orderBy?: transictionsOrderByWithRelationInput | transictionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transictions.
     */
    cursor?: transictionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transictions.
     */
    distinct?: TransictionsScalarFieldEnum | TransictionsScalarFieldEnum[]
  }

  /**
   * transictions findMany
   */
  export type transictionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * Filter, which transictions to fetch.
     */
    where?: transictionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transictions to fetch.
     */
    orderBy?: transictionsOrderByWithRelationInput | transictionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transictions.
     */
    cursor?: transictionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transictions.
     */
    skip?: number
    distinct?: TransictionsScalarFieldEnum | TransictionsScalarFieldEnum[]
  }

  /**
   * transictions create
   */
  export type transictionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transictions.
     */
    data: XOR<transictionsCreateInput, transictionsUncheckedCreateInput>
  }

  /**
   * transictions createMany
   */
  export type transictionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transictions.
     */
    data: transictionsCreateManyInput | transictionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transictions update
   */
  export type transictionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transictions.
     */
    data: XOR<transictionsUpdateInput, transictionsUncheckedUpdateInput>
    /**
     * Choose, which transictions to update.
     */
    where: transictionsWhereUniqueInput
  }

  /**
   * transictions updateMany
   */
  export type transictionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transictions.
     */
    data: XOR<transictionsUpdateManyMutationInput, transictionsUncheckedUpdateManyInput>
    /**
     * Filter which transictions to update
     */
    where?: transictionsWhereInput
    /**
     * Limit how many transictions to update.
     */
    limit?: number
  }

  /**
   * transictions upsert
   */
  export type transictionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transictions to update in case it exists.
     */
    where: transictionsWhereUniqueInput
    /**
     * In case the transictions found by the `where` argument doesn't exist, create a new transictions with this data.
     */
    create: XOR<transictionsCreateInput, transictionsUncheckedCreateInput>
    /**
     * In case the transictions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transictionsUpdateInput, transictionsUncheckedUpdateInput>
  }

  /**
   * transictions delete
   */
  export type transictionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    /**
     * Filter which transictions to delete.
     */
    where: transictionsWhereUniqueInput
  }

  /**
   * transictions deleteMany
   */
  export type transictionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transictions to delete
     */
    where?: transictionsWhereInput
    /**
     * Limit how many transictions to delete.
     */
    limit?: number
  }

  /**
   * transictions without action
   */
  export type transictionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UsersSumAggregateOutputType = {
    id_user: number | null
  }

  export type UsersMinAggregateOutputType = {
    id_user: number | null
    name_user: string | null
    cpf: string | null
    email: string | null
    password_user: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id_user: number | null
    name_user: string | null
    cpf: string | null
    email: string | null
    password_user: string | null
  }

  export type UsersCountAggregateOutputType = {
    id_user: number
    name_user: number
    cpf: number
    email: number
    password_user: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id_user?: true
  }

  export type UsersSumAggregateInputType = {
    id_user?: true
  }

  export type UsersMinAggregateInputType = {
    id_user?: true
    name_user?: true
    cpf?: true
    email?: true
    password_user?: true
  }

  export type UsersMaxAggregateInputType = {
    id_user?: true
    name_user?: true
    cpf?: true
    email?: true
    password_user?: true
  }

  export type UsersCountAggregateInputType = {
    id_user?: true
    name_user?: true
    cpf?: true
    email?: true
    password_user?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_user: number
    name_user: string
    cpf: string
    email: string
    password_user: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name_user?: boolean
    cpf?: boolean
    email?: boolean
    password_user?: boolean
    wallets?: boolean | users$walletsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id_user?: boolean
    name_user?: boolean
    cpf?: boolean
    email?: boolean
    password_user?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "name_user" | "cpf" | "email" | "password_user", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | users$walletsArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      wallets: Prisma.$walletsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      name_user: string
      cpf: string
      email: string
      password_user: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const usersWithId_userOnly = await prisma.users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallets<T extends users$walletsArgs<ExtArgs> = {}>(args?: Subset<T, users$walletsArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id_user: FieldRef<"users", 'Int'>
    readonly name_user: FieldRef<"users", 'String'>
    readonly cpf: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_user: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.wallets
   */
  export type users$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    where?: walletsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model wallets
   */

  export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  export type WalletsAvgAggregateOutputType = {
    id_wallet: number | null
    id_user: number | null
    balance: Decimal | null
  }

  export type WalletsSumAggregateOutputType = {
    id_wallet: number | null
    id_user: number | null
    balance: Decimal | null
  }

  export type WalletsMinAggregateOutputType = {
    id_wallet: number | null
    id_user: number | null
    balance: Decimal | null
  }

  export type WalletsMaxAggregateOutputType = {
    id_wallet: number | null
    id_user: number | null
    balance: Decimal | null
  }

  export type WalletsCountAggregateOutputType = {
    id_wallet: number
    id_user: number
    balance: number
    _all: number
  }


  export type WalletsAvgAggregateInputType = {
    id_wallet?: true
    id_user?: true
    balance?: true
  }

  export type WalletsSumAggregateInputType = {
    id_wallet?: true
    id_user?: true
    balance?: true
  }

  export type WalletsMinAggregateInputType = {
    id_wallet?: true
    id_user?: true
    balance?: true
  }

  export type WalletsMaxAggregateInputType = {
    id_wallet?: true
    id_user?: true
    balance?: true
  }

  export type WalletsCountAggregateInputType = {
    id_wallet?: true
    id_user?: true
    balance?: true
    _all?: true
  }

  export type WalletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to aggregate.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallets
    **/
    _count?: true | WalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletsMaxAggregateInputType
  }

  export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
        [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallets[P]>
      : GetScalarType<T[P], AggregateWallets[P]>
  }




  export type walletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletsWhereInput
    orderBy?: walletsOrderByWithAggregationInput | walletsOrderByWithAggregationInput[]
    by: WalletsScalarFieldEnum[] | WalletsScalarFieldEnum
    having?: walletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletsCountAggregateInputType | true
    _avg?: WalletsAvgAggregateInputType
    _sum?: WalletsSumAggregateInputType
    _min?: WalletsMinAggregateInputType
    _max?: WalletsMaxAggregateInputType
  }

  export type WalletsGroupByOutputType = {
    id_wallet: number
    id_user: number
    balance: Decimal | null
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  type GetWalletsGroupByPayload<T extends walletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletsGroupByOutputType[P]>
            : GetScalarType<T[P], WalletsGroupByOutputType[P]>
        }
      >
    >


  export type walletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_wallet?: boolean
    id_user?: boolean
    balance?: boolean
    transictions_transictions_id_wallet_originTowallets?: boolean | wallets$transictions_transictions_id_wallet_originTowalletsArgs<ExtArgs>
    transictions_transictions_id_wallet_destinationTowallets?: boolean | wallets$transictions_transictions_id_wallet_destinationTowalletsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | WalletsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>



  export type walletsSelectScalar = {
    id_wallet?: boolean
    id_user?: boolean
    balance?: boolean
  }

  export type walletsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_wallet" | "id_user" | "balance", ExtArgs["result"]["wallets"]>
  export type walletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transictions_transictions_id_wallet_originTowallets?: boolean | wallets$transictions_transictions_id_wallet_originTowalletsArgs<ExtArgs>
    transictions_transictions_id_wallet_destinationTowallets?: boolean | wallets$transictions_transictions_id_wallet_destinationTowalletsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | WalletsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $walletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallets"
    objects: {
      transictions_transictions_id_wallet_originTowallets: Prisma.$transictionsPayload<ExtArgs>[]
      transictions_transictions_id_wallet_destinationTowallets: Prisma.$transictionsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_wallet: number
      id_user: number
      balance: Prisma.Decimal | null
    }, ExtArgs["result"]["wallets"]>
    composites: {}
  }

  type walletsGetPayload<S extends boolean | null | undefined | walletsDefaultArgs> = $Result.GetResult<Prisma.$walletsPayload, S>

  type walletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<walletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletsCountAggregateInputType | true
    }

  export interface walletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallets'], meta: { name: 'wallets' } }
    /**
     * Find zero or one Wallets that matches the filter.
     * @param {walletsFindUniqueArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends walletsFindUniqueArgs>(args: SelectSubset<T, walletsFindUniqueArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {walletsFindUniqueOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends walletsFindUniqueOrThrowArgs>(args: SelectSubset<T, walletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends walletsFindFirstArgs>(args?: SelectSubset<T, walletsFindFirstArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends walletsFindFirstOrThrowArgs>(args?: SelectSubset<T, walletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallets.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallets.findMany({ take: 10 })
     * 
     * // Only select the `id_wallet`
     * const walletsWithId_walletOnly = await prisma.wallets.findMany({ select: { id_wallet: true } })
     * 
     */
    findMany<T extends walletsFindManyArgs>(args?: SelectSubset<T, walletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallets.
     * @param {walletsCreateArgs} args - Arguments to create a Wallets.
     * @example
     * // Create one Wallets
     * const Wallets = await prisma.wallets.create({
     *   data: {
     *     // ... data to create a Wallets
     *   }
     * })
     * 
     */
    create<T extends walletsCreateArgs>(args: SelectSubset<T, walletsCreateArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {walletsCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends walletsCreateManyArgs>(args?: SelectSubset<T, walletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wallets.
     * @param {walletsDeleteArgs} args - Arguments to delete one Wallets.
     * @example
     * // Delete one Wallets
     * const Wallets = await prisma.wallets.delete({
     *   where: {
     *     // ... filter to delete one Wallets
     *   }
     * })
     * 
     */
    delete<T extends walletsDeleteArgs>(args: SelectSubset<T, walletsDeleteArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallets.
     * @param {walletsUpdateArgs} args - Arguments to update one Wallets.
     * @example
     * // Update one Wallets
     * const wallets = await prisma.wallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends walletsUpdateArgs>(args: SelectSubset<T, walletsUpdateArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {walletsDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends walletsDeleteManyArgs>(args?: SelectSubset<T, walletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends walletsUpdateManyArgs>(args: SelectSubset<T, walletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallets.
     * @param {walletsUpsertArgs} args - Arguments to update or create a Wallets.
     * @example
     * // Update or create a Wallets
     * const wallets = await prisma.wallets.upsert({
     *   create: {
     *     // ... data to create a Wallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallets we want to update
     *   }
     * })
     */
    upsert<T extends walletsUpsertArgs>(args: SelectSubset<T, walletsUpsertArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallets.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends walletsCountArgs>(
      args?: Subset<T, walletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletsAggregateArgs>(args: Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>

    /**
     * Group by Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsGroupByArgs} args - Group by arguments.
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
      T extends walletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: walletsGroupByArgs['orderBy'] }
        : { orderBy?: walletsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, walletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallets model
   */
  readonly fields: walletsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__walletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transictions_transictions_id_wallet_originTowallets<T extends wallets$transictions_transictions_id_wallet_originTowalletsArgs<ExtArgs> = {}>(args?: Subset<T, wallets$transictions_transictions_id_wallet_originTowalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transictions_transictions_id_wallet_destinationTowallets<T extends wallets$transictions_transictions_id_wallet_destinationTowalletsArgs<ExtArgs> = {}>(args?: Subset<T, wallets$transictions_transictions_id_wallet_destinationTowalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transictionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the wallets model
   */
  interface walletsFieldRefs {
    readonly id_wallet: FieldRef<"wallets", 'Int'>
    readonly id_user: FieldRef<"wallets", 'Int'>
    readonly balance: FieldRef<"wallets", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * wallets findUnique
   */
  export type walletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findUniqueOrThrow
   */
  export type walletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findFirst
   */
  export type walletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets findFirstOrThrow
   */
  export type walletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets findMany
   */
  export type walletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets create
   */
  export type walletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to create a wallets.
     */
    data: XOR<walletsCreateInput, walletsUncheckedCreateInput>
  }

  /**
   * wallets createMany
   */
  export type walletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallets.
     */
    data: walletsCreateManyInput | walletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallets update
   */
  export type walletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to update a wallets.
     */
    data: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
    /**
     * Choose, which wallets to update.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets updateMany
   */
  export type walletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallets.
     */
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
  }

  /**
   * wallets upsert
   */
  export type walletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The filter to search for the wallets to update in case it exists.
     */
    where: walletsWhereUniqueInput
    /**
     * In case the wallets found by the `where` argument doesn't exist, create a new wallets with this data.
     */
    create: XOR<walletsCreateInput, walletsUncheckedCreateInput>
    /**
     * In case the wallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
  }

  /**
   * wallets delete
   */
  export type walletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter which wallets to delete.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets deleteMany
   */
  export type walletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to delete
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to delete.
     */
    limit?: number
  }

  /**
   * wallets.transictions_transictions_id_wallet_originTowallets
   */
  export type wallets$transictions_transictions_id_wallet_originTowalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    where?: transictionsWhereInput
    orderBy?: transictionsOrderByWithRelationInput | transictionsOrderByWithRelationInput[]
    cursor?: transictionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransictionsScalarFieldEnum | TransictionsScalarFieldEnum[]
  }

  /**
   * wallets.transictions_transictions_id_wallet_destinationTowallets
   */
  export type wallets$transictions_transictions_id_wallet_destinationTowalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transictions
     */
    select?: transictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transictions
     */
    omit?: transictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transictionsInclude<ExtArgs> | null
    where?: transictionsWhereInput
    orderBy?: transictionsOrderByWithRelationInput | transictionsOrderByWithRelationInput[]
    cursor?: transictionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransictionsScalarFieldEnum | TransictionsScalarFieldEnum[]
  }

  /**
   * wallets without action
   */
  export type walletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
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


  export const TransictionsScalarFieldEnum: {
    id_transiction: 'id_transiction',
    value_transiction: 'value_transiction',
    date_time: 'date_time',
    id_wallet_origin: 'id_wallet_origin',
    id_wallet_destination: 'id_wallet_destination'
  };

  export type TransictionsScalarFieldEnum = (typeof TransictionsScalarFieldEnum)[keyof typeof TransictionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id_user: 'id_user',
    name_user: 'name_user',
    cpf: 'cpf',
    email: 'email',
    password_user: 'password_user'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WalletsScalarFieldEnum: {
    id_wallet: 'id_wallet',
    id_user: 'id_user',
    balance: 'balance'
  };

  export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    name_user: 'name_user',
    cpf: 'cpf',
    email: 'email',
    password_user: 'password_user'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type transictionsWhereInput = {
    AND?: transictionsWhereInput | transictionsWhereInput[]
    OR?: transictionsWhereInput[]
    NOT?: transictionsWhereInput | transictionsWhereInput[]
    id_transiction?: IntFilter<"transictions"> | number
    value_transiction?: DecimalFilter<"transictions"> | Decimal | DecimalJsLike | number | string
    date_time?: DateTimeNullableFilter<"transictions"> | Date | string | null
    id_wallet_origin?: IntFilter<"transictions"> | number
    id_wallet_destination?: IntFilter<"transictions"> | number
    wallets_transictions_id_wallet_originTowallets?: XOR<WalletsScalarRelationFilter, walletsWhereInput>
    wallets_transictions_id_wallet_destinationTowallets?: XOR<WalletsScalarRelationFilter, walletsWhereInput>
  }

  export type transictionsOrderByWithRelationInput = {
    id_transiction?: SortOrder
    value_transiction?: SortOrder
    date_time?: SortOrderInput | SortOrder
    id_wallet_origin?: SortOrder
    id_wallet_destination?: SortOrder
    wallets_transictions_id_wallet_originTowallets?: walletsOrderByWithRelationInput
    wallets_transictions_id_wallet_destinationTowallets?: walletsOrderByWithRelationInput
  }

  export type transictionsWhereUniqueInput = Prisma.AtLeast<{
    id_transiction?: number
    AND?: transictionsWhereInput | transictionsWhereInput[]
    OR?: transictionsWhereInput[]
    NOT?: transictionsWhereInput | transictionsWhereInput[]
    value_transiction?: DecimalFilter<"transictions"> | Decimal | DecimalJsLike | number | string
    date_time?: DateTimeNullableFilter<"transictions"> | Date | string | null
    id_wallet_origin?: IntFilter<"transictions"> | number
    id_wallet_destination?: IntFilter<"transictions"> | number
    wallets_transictions_id_wallet_originTowallets?: XOR<WalletsScalarRelationFilter, walletsWhereInput>
    wallets_transictions_id_wallet_destinationTowallets?: XOR<WalletsScalarRelationFilter, walletsWhereInput>
  }, "id_transiction">

  export type transictionsOrderByWithAggregationInput = {
    id_transiction?: SortOrder
    value_transiction?: SortOrder
    date_time?: SortOrderInput | SortOrder
    id_wallet_origin?: SortOrder
    id_wallet_destination?: SortOrder
    _count?: transictionsCountOrderByAggregateInput
    _avg?: transictionsAvgOrderByAggregateInput
    _max?: transictionsMaxOrderByAggregateInput
    _min?: transictionsMinOrderByAggregateInput
    _sum?: transictionsSumOrderByAggregateInput
  }

  export type transictionsScalarWhereWithAggregatesInput = {
    AND?: transictionsScalarWhereWithAggregatesInput | transictionsScalarWhereWithAggregatesInput[]
    OR?: transictionsScalarWhereWithAggregatesInput[]
    NOT?: transictionsScalarWhereWithAggregatesInput | transictionsScalarWhereWithAggregatesInput[]
    id_transiction?: IntWithAggregatesFilter<"transictions"> | number
    value_transiction?: DecimalWithAggregatesFilter<"transictions"> | Decimal | DecimalJsLike | number | string
    date_time?: DateTimeNullableWithAggregatesFilter<"transictions"> | Date | string | null
    id_wallet_origin?: IntWithAggregatesFilter<"transictions"> | number
    id_wallet_destination?: IntWithAggregatesFilter<"transictions"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id_user?: IntFilter<"users"> | number
    name_user?: StringFilter<"users"> | string
    cpf?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_user?: StringFilter<"users"> | string
    wallets?: XOR<WalletsNullableScalarRelationFilter, walletsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password_user?: SortOrder
    wallets?: walletsOrderByWithRelationInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    cpf?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name_user?: StringFilter<"users"> | string
    password_user?: StringFilter<"users"> | string
    wallets?: XOR<WalletsNullableScalarRelationFilter, walletsWhereInput> | null
  }, "id_user" | "cpf" | "email">

  export type usersOrderByWithAggregationInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password_user?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"users"> | number
    name_user?: StringWithAggregatesFilter<"users"> | string
    cpf?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_user?: StringWithAggregatesFilter<"users"> | string
  }

  export type walletsWhereInput = {
    AND?: walletsWhereInput | walletsWhereInput[]
    OR?: walletsWhereInput[]
    NOT?: walletsWhereInput | walletsWhereInput[]
    id_wallet?: IntFilter<"wallets"> | number
    id_user?: IntFilter<"wallets"> | number
    balance?: DecimalNullableFilter<"wallets"> | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: TransictionsListRelationFilter
    transictions_transictions_id_wallet_destinationTowallets?: TransictionsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type walletsOrderByWithRelationInput = {
    id_wallet?: SortOrder
    id_user?: SortOrder
    balance?: SortOrderInput | SortOrder
    transictions_transictions_id_wallet_originTowallets?: transictionsOrderByRelationAggregateInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type walletsWhereUniqueInput = Prisma.AtLeast<{
    id_wallet?: number
    id_user?: number
    AND?: walletsWhereInput | walletsWhereInput[]
    OR?: walletsWhereInput[]
    NOT?: walletsWhereInput | walletsWhereInput[]
    balance?: DecimalNullableFilter<"wallets"> | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: TransictionsListRelationFilter
    transictions_transictions_id_wallet_destinationTowallets?: TransictionsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id_wallet" | "id_user">

  export type walletsOrderByWithAggregationInput = {
    id_wallet?: SortOrder
    id_user?: SortOrder
    balance?: SortOrderInput | SortOrder
    _count?: walletsCountOrderByAggregateInput
    _avg?: walletsAvgOrderByAggregateInput
    _max?: walletsMaxOrderByAggregateInput
    _min?: walletsMinOrderByAggregateInput
    _sum?: walletsSumOrderByAggregateInput
  }

  export type walletsScalarWhereWithAggregatesInput = {
    AND?: walletsScalarWhereWithAggregatesInput | walletsScalarWhereWithAggregatesInput[]
    OR?: walletsScalarWhereWithAggregatesInput[]
    NOT?: walletsScalarWhereWithAggregatesInput | walletsScalarWhereWithAggregatesInput[]
    id_wallet?: IntWithAggregatesFilter<"wallets"> | number
    id_user?: IntWithAggregatesFilter<"wallets"> | number
    balance?: DecimalNullableWithAggregatesFilter<"wallets"> | Decimal | DecimalJsLike | number | string | null
  }

  export type transictionsCreateInput = {
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    wallets_transictions_id_wallet_originTowallets: walletsCreateNestedOneWithoutTransictions_transictions_id_wallet_originTowalletsInput
    wallets_transictions_id_wallet_destinationTowallets: walletsCreateNestedOneWithoutTransictions_transictions_id_wallet_destinationTowalletsInput
  }

  export type transictionsUncheckedCreateInput = {
    id_transiction?: number
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    id_wallet_origin: number
    id_wallet_destination: number
  }

  export type transictionsUpdateInput = {
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallets_transictions_id_wallet_originTowallets?: walletsUpdateOneRequiredWithoutTransictions_transictions_id_wallet_originTowalletsNestedInput
    wallets_transictions_id_wallet_destinationTowallets?: walletsUpdateOneRequiredWithoutTransictions_transictions_id_wallet_destinationTowalletsNestedInput
  }

  export type transictionsUncheckedUpdateInput = {
    id_transiction?: IntFieldUpdateOperationsInput | number
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_wallet_origin?: IntFieldUpdateOperationsInput | number
    id_wallet_destination?: IntFieldUpdateOperationsInput | number
  }

  export type transictionsCreateManyInput = {
    id_transiction?: number
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    id_wallet_origin: number
    id_wallet_destination: number
  }

  export type transictionsUpdateManyMutationInput = {
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transictionsUncheckedUpdateManyInput = {
    id_transiction?: IntFieldUpdateOperationsInput | number
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_wallet_origin?: IntFieldUpdateOperationsInput | number
    id_wallet_destination?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    name_user: string
    cpf: string
    email: string
    password_user: string
    wallets?: walletsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id_user?: number
    name_user: string
    cpf: string
    email: string
    password_user: string
    wallets?: walletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    name_user?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
    wallets?: walletsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
    wallets?: walletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id_user?: number
    name_user: string
    cpf: string
    email: string
    password_user: string
  }

  export type usersUpdateManyMutationInput = {
    name_user?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
  }

  export type walletsCreateInput = {
    balance?: Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsCreateNestedManyWithoutWallets_transictions_id_wallet_originTowalletsInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsCreateNestedManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput
    users: usersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateInput = {
    id_wallet?: number
    id_user: number
    balance?: Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUncheckedCreateNestedManyWithoutWallets_transictions_id_wallet_originTowalletsInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUncheckedCreateNestedManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput
  }

  export type walletsUpdateInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsNestedInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsNestedInput
    users?: usersUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateInput = {
    id_wallet?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsNestedInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsNestedInput
  }

  export type walletsCreateManyInput = {
    id_wallet?: number
    id_user: number
    balance?: Decimal | DecimalJsLike | number | string | null
  }

  export type walletsUpdateManyMutationInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type walletsUncheckedUpdateManyInput = {
    id_wallet?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WalletsScalarRelationFilter = {
    is?: walletsWhereInput
    isNot?: walletsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type transictionsCountOrderByAggregateInput = {
    id_transiction?: SortOrder
    value_transiction?: SortOrder
    date_time?: SortOrder
    id_wallet_origin?: SortOrder
    id_wallet_destination?: SortOrder
  }

  export type transictionsAvgOrderByAggregateInput = {
    id_transiction?: SortOrder
    value_transiction?: SortOrder
    id_wallet_origin?: SortOrder
    id_wallet_destination?: SortOrder
  }

  export type transictionsMaxOrderByAggregateInput = {
    id_transiction?: SortOrder
    value_transiction?: SortOrder
    date_time?: SortOrder
    id_wallet_origin?: SortOrder
    id_wallet_destination?: SortOrder
  }

  export type transictionsMinOrderByAggregateInput = {
    id_transiction?: SortOrder
    value_transiction?: SortOrder
    date_time?: SortOrder
    id_wallet_origin?: SortOrder
    id_wallet_destination?: SortOrder
  }

  export type transictionsSumOrderByAggregateInput = {
    id_transiction?: SortOrder
    value_transiction?: SortOrder
    id_wallet_origin?: SortOrder
    id_wallet_destination?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type WalletsNullableScalarRelationFilter = {
    is?: walletsWhereInput | null
    isNot?: walletsWhereInput | null
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password_user?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password_user?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password_user?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type TransictionsListRelationFilter = {
    every?: transictionsWhereInput
    some?: transictionsWhereInput
    none?: transictionsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type transictionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type walletsCountOrderByAggregateInput = {
    id_wallet?: SortOrder
    id_user?: SortOrder
    balance?: SortOrder
  }

  export type walletsAvgOrderByAggregateInput = {
    id_wallet?: SortOrder
    id_user?: SortOrder
    balance?: SortOrder
  }

  export type walletsMaxOrderByAggregateInput = {
    id_wallet?: SortOrder
    id_user?: SortOrder
    balance?: SortOrder
  }

  export type walletsMinOrderByAggregateInput = {
    id_wallet?: SortOrder
    id_user?: SortOrder
    balance?: SortOrder
  }

  export type walletsSumOrderByAggregateInput = {
    id_wallet?: SortOrder
    id_user?: SortOrder
    balance?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type walletsCreateNestedOneWithoutTransictions_transictions_id_wallet_originTowalletsInput = {
    create?: XOR<walletsCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput, walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput>
    connectOrCreate?: walletsCreateOrConnectWithoutTransictions_transictions_id_wallet_originTowalletsInput
    connect?: walletsWhereUniqueInput
  }

  export type walletsCreateNestedOneWithoutTransictions_transictions_id_wallet_destinationTowalletsInput = {
    create?: XOR<walletsCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput, walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput>
    connectOrCreate?: walletsCreateOrConnectWithoutTransictions_transictions_id_wallet_destinationTowalletsInput
    connect?: walletsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type walletsUpdateOneRequiredWithoutTransictions_transictions_id_wallet_originTowalletsNestedInput = {
    create?: XOR<walletsCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput, walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput>
    connectOrCreate?: walletsCreateOrConnectWithoutTransictions_transictions_id_wallet_originTowalletsInput
    upsert?: walletsUpsertWithoutTransictions_transictions_id_wallet_originTowalletsInput
    connect?: walletsWhereUniqueInput
    update?: XOR<XOR<walletsUpdateToOneWithWhereWithoutTransictions_transictions_id_wallet_originTowalletsInput, walletsUpdateWithoutTransictions_transictions_id_wallet_originTowalletsInput>, walletsUncheckedUpdateWithoutTransictions_transictions_id_wallet_originTowalletsInput>
  }

  export type walletsUpdateOneRequiredWithoutTransictions_transictions_id_wallet_destinationTowalletsNestedInput = {
    create?: XOR<walletsCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput, walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput>
    connectOrCreate?: walletsCreateOrConnectWithoutTransictions_transictions_id_wallet_destinationTowalletsInput
    upsert?: walletsUpsertWithoutTransictions_transictions_id_wallet_destinationTowalletsInput
    connect?: walletsWhereUniqueInput
    update?: XOR<XOR<walletsUpdateToOneWithWhereWithoutTransictions_transictions_id_wallet_destinationTowalletsInput, walletsUpdateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput>, walletsUncheckedUpdateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type walletsCreateNestedOneWithoutUsersInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput
    connect?: walletsWhereUniqueInput
  }

  export type walletsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput
    connect?: walletsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type walletsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput
    upsert?: walletsUpsertWithoutUsersInput
    disconnect?: walletsWhereInput | boolean
    delete?: walletsWhereInput | boolean
    connect?: walletsWhereUniqueInput
    update?: XOR<XOR<walletsUpdateToOneWithWhereWithoutUsersInput, walletsUpdateWithoutUsersInput>, walletsUncheckedUpdateWithoutUsersInput>
  }

  export type walletsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput
    upsert?: walletsUpsertWithoutUsersInput
    disconnect?: walletsWhereInput | boolean
    delete?: walletsWhereInput | boolean
    connect?: walletsWhereUniqueInput
    update?: XOR<XOR<walletsUpdateToOneWithWhereWithoutUsersInput, walletsUpdateWithoutUsersInput>, walletsUncheckedUpdateWithoutUsersInput>
  }

  export type transictionsCreateNestedManyWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    create?: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput> | transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput[] | transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    connectOrCreate?: transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    createMany?: transictionsCreateManyWallets_transictions_id_wallet_originTowalletsInputEnvelope
    connect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
  }

  export type transictionsCreateNestedManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    create?: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput> | transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput[] | transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    connectOrCreate?: transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    createMany?: transictionsCreateManyWallets_transictions_id_wallet_destinationTowalletsInputEnvelope
    connect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutWalletsInput = {
    create?: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWalletsInput
    connect?: usersWhereUniqueInput
  }

  export type transictionsUncheckedCreateNestedManyWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    create?: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput> | transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput[] | transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    connectOrCreate?: transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    createMany?: transictionsCreateManyWallets_transictions_id_wallet_originTowalletsInputEnvelope
    connect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
  }

  export type transictionsUncheckedCreateNestedManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    create?: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput> | transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput[] | transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    connectOrCreate?: transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    createMany?: transictionsCreateManyWallets_transictions_id_wallet_destinationTowalletsInputEnvelope
    connect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type transictionsUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsNestedInput = {
    create?: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput> | transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput[] | transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    connectOrCreate?: transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    upsert?: transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    createMany?: transictionsCreateManyWallets_transictions_id_wallet_originTowalletsInputEnvelope
    set?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    disconnect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    delete?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    connect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    update?: transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    updateMany?: transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    deleteMany?: transictionsScalarWhereInput | transictionsScalarWhereInput[]
  }

  export type transictionsUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsNestedInput = {
    create?: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput> | transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput[] | transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    connectOrCreate?: transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    upsert?: transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    createMany?: transictionsCreateManyWallets_transictions_id_wallet_destinationTowalletsInputEnvelope
    set?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    disconnect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    delete?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    connect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    update?: transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    updateMany?: transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    deleteMany?: transictionsScalarWhereInput | transictionsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWalletsInput
    upsert?: usersUpsertWithoutWalletsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWalletsInput, usersUpdateWithoutWalletsInput>, usersUncheckedUpdateWithoutWalletsInput>
  }

  export type transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsNestedInput = {
    create?: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput> | transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput[] | transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    connectOrCreate?: transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    upsert?: transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    createMany?: transictionsCreateManyWallets_transictions_id_wallet_originTowalletsInputEnvelope
    set?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    disconnect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    delete?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    connect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    update?: transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    updateMany?: transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_originTowalletsInput | transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_originTowalletsInput[]
    deleteMany?: transictionsScalarWhereInput | transictionsScalarWhereInput[]
  }

  export type transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsNestedInput = {
    create?: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput> | transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput[] | transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    connectOrCreate?: transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    upsert?: transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    createMany?: transictionsCreateManyWallets_transictions_id_wallet_destinationTowalletsInputEnvelope
    set?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    disconnect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    delete?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    connect?: transictionsWhereUniqueInput | transictionsWhereUniqueInput[]
    update?: transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    updateMany?: transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_destinationTowalletsInput | transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_destinationTowalletsInput[]
    deleteMany?: transictionsScalarWhereInput | transictionsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type walletsCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput = {
    balance?: Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_destinationTowallets?: transictionsCreateNestedManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput
    users: usersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput = {
    id_wallet?: number
    id_user: number
    balance?: Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUncheckedCreateNestedManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput
  }

  export type walletsCreateOrConnectWithoutTransictions_transictions_id_wallet_originTowalletsInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput, walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput>
  }

  export type walletsCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput = {
    balance?: Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsCreateNestedManyWithoutWallets_transictions_id_wallet_originTowalletsInput
    users: usersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput = {
    id_wallet?: number
    id_user: number
    balance?: Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUncheckedCreateNestedManyWithoutWallets_transictions_id_wallet_originTowalletsInput
  }

  export type walletsCreateOrConnectWithoutTransictions_transictions_id_wallet_destinationTowalletsInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput, walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput>
  }

  export type walletsUpsertWithoutTransictions_transictions_id_wallet_originTowalletsInput = {
    update: XOR<walletsUpdateWithoutTransictions_transictions_id_wallet_originTowalletsInput, walletsUncheckedUpdateWithoutTransictions_transictions_id_wallet_originTowalletsInput>
    create: XOR<walletsCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput, walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_originTowalletsInput>
    where?: walletsWhereInput
  }

  export type walletsUpdateToOneWithWhereWithoutTransictions_transictions_id_wallet_originTowalletsInput = {
    where?: walletsWhereInput
    data: XOR<walletsUpdateWithoutTransictions_transictions_id_wallet_originTowalletsInput, walletsUncheckedUpdateWithoutTransictions_transictions_id_wallet_originTowalletsInput>
  }

  export type walletsUpdateWithoutTransictions_transictions_id_wallet_originTowalletsInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsNestedInput
    users?: usersUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateWithoutTransictions_transictions_id_wallet_originTowalletsInput = {
    id_wallet?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsNestedInput
  }

  export type walletsUpsertWithoutTransictions_transictions_id_wallet_destinationTowalletsInput = {
    update: XOR<walletsUpdateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput, walletsUncheckedUpdateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput>
    create: XOR<walletsCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput, walletsUncheckedCreateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput>
    where?: walletsWhereInput
  }

  export type walletsUpdateToOneWithWhereWithoutTransictions_transictions_id_wallet_destinationTowalletsInput = {
    where?: walletsWhereInput
    data: XOR<walletsUpdateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput, walletsUncheckedUpdateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput>
  }

  export type walletsUpdateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsNestedInput
    users?: usersUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateWithoutTransictions_transictions_id_wallet_destinationTowalletsInput = {
    id_wallet?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsNestedInput
  }

  export type walletsCreateWithoutUsersInput = {
    balance?: Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsCreateNestedManyWithoutWallets_transictions_id_wallet_originTowalletsInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsCreateNestedManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput
  }

  export type walletsUncheckedCreateWithoutUsersInput = {
    id_wallet?: number
    balance?: Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUncheckedCreateNestedManyWithoutWallets_transictions_id_wallet_originTowalletsInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUncheckedCreateNestedManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput
  }

  export type walletsCreateOrConnectWithoutUsersInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
  }

  export type walletsUpsertWithoutUsersInput = {
    update: XOR<walletsUpdateWithoutUsersInput, walletsUncheckedUpdateWithoutUsersInput>
    create: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    where?: walletsWhereInput
  }

  export type walletsUpdateToOneWithWhereWithoutUsersInput = {
    where?: walletsWhereInput
    data: XOR<walletsUpdateWithoutUsersInput, walletsUncheckedUpdateWithoutUsersInput>
  }

  export type walletsUpdateWithoutUsersInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsNestedInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsNestedInput
  }

  export type walletsUncheckedUpdateWithoutUsersInput = {
    id_wallet?: IntFieldUpdateOperationsInput | number
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transictions_transictions_id_wallet_originTowallets?: transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsNestedInput
    transictions_transictions_id_wallet_destinationTowallets?: transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsNestedInput
  }

  export type transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    wallets_transictions_id_wallet_destinationTowallets: walletsCreateNestedOneWithoutTransictions_transictions_id_wallet_destinationTowalletsInput
  }

  export type transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    id_transiction?: number
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    id_wallet_destination: number
  }

  export type transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    where: transictionsWhereUniqueInput
    create: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput>
  }

  export type transictionsCreateManyWallets_transictions_id_wallet_originTowalletsInputEnvelope = {
    data: transictionsCreateManyWallets_transictions_id_wallet_originTowalletsInput | transictionsCreateManyWallets_transictions_id_wallet_originTowalletsInput[]
    skipDuplicates?: boolean
  }

  export type transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    wallets_transictions_id_wallet_originTowallets: walletsCreateNestedOneWithoutTransictions_transictions_id_wallet_originTowalletsInput
  }

  export type transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    id_transiction?: number
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    id_wallet_origin: number
  }

  export type transictionsCreateOrConnectWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    where: transictionsWhereUniqueInput
    create: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput>
  }

  export type transictionsCreateManyWallets_transictions_id_wallet_destinationTowalletsInputEnvelope = {
    data: transictionsCreateManyWallets_transictions_id_wallet_destinationTowalletsInput | transictionsCreateManyWallets_transictions_id_wallet_destinationTowalletsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutWalletsInput = {
    name_user: string
    cpf: string
    email: string
    password_user: string
  }

  export type usersUncheckedCreateWithoutWalletsInput = {
    id_user?: number
    name_user: string
    cpf: string
    email: string
    password_user: string
  }

  export type usersCreateOrConnectWithoutWalletsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
  }

  export type transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    where: transictionsWhereUniqueInput
    update: XOR<transictionsUpdateWithoutWallets_transictions_id_wallet_originTowalletsInput, transictionsUncheckedUpdateWithoutWallets_transictions_id_wallet_originTowalletsInput>
    create: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_originTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_originTowalletsInput>
  }

  export type transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    where: transictionsWhereUniqueInput
    data: XOR<transictionsUpdateWithoutWallets_transictions_id_wallet_originTowalletsInput, transictionsUncheckedUpdateWithoutWallets_transictions_id_wallet_originTowalletsInput>
  }

  export type transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    where: transictionsScalarWhereInput
    data: XOR<transictionsUpdateManyMutationInput, transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsInput>
  }

  export type transictionsScalarWhereInput = {
    AND?: transictionsScalarWhereInput | transictionsScalarWhereInput[]
    OR?: transictionsScalarWhereInput[]
    NOT?: transictionsScalarWhereInput | transictionsScalarWhereInput[]
    id_transiction?: IntFilter<"transictions"> | number
    value_transiction?: DecimalFilter<"transictions"> | Decimal | DecimalJsLike | number | string
    date_time?: DateTimeNullableFilter<"transictions"> | Date | string | null
    id_wallet_origin?: IntFilter<"transictions"> | number
    id_wallet_destination?: IntFilter<"transictions"> | number
  }

  export type transictionsUpsertWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    where: transictionsWhereUniqueInput
    update: XOR<transictionsUpdateWithoutWallets_transictions_id_wallet_destinationTowalletsInput, transictionsUncheckedUpdateWithoutWallets_transictions_id_wallet_destinationTowalletsInput>
    create: XOR<transictionsCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput, transictionsUncheckedCreateWithoutWallets_transictions_id_wallet_destinationTowalletsInput>
  }

  export type transictionsUpdateWithWhereUniqueWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    where: transictionsWhereUniqueInput
    data: XOR<transictionsUpdateWithoutWallets_transictions_id_wallet_destinationTowalletsInput, transictionsUncheckedUpdateWithoutWallets_transictions_id_wallet_destinationTowalletsInput>
  }

  export type transictionsUpdateManyWithWhereWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    where: transictionsScalarWhereInput
    data: XOR<transictionsUpdateManyMutationInput, transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput>
  }

  export type usersUpsertWithoutWalletsInput = {
    update: XOR<usersUpdateWithoutWalletsInput, usersUncheckedUpdateWithoutWalletsInput>
    create: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWalletsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWalletsInput, usersUncheckedUpdateWithoutWalletsInput>
  }

  export type usersUpdateWithoutWalletsInput = {
    name_user?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutWalletsInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
  }

  export type transictionsCreateManyWallets_transictions_id_wallet_originTowalletsInput = {
    id_transiction?: number
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    id_wallet_destination: number
  }

  export type transictionsCreateManyWallets_transictions_id_wallet_destinationTowalletsInput = {
    id_transiction?: number
    value_transiction: Decimal | DecimalJsLike | number | string
    date_time?: Date | string | null
    id_wallet_origin: number
  }

  export type transictionsUpdateWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallets_transictions_id_wallet_destinationTowallets?: walletsUpdateOneRequiredWithoutTransictions_transictions_id_wallet_destinationTowalletsNestedInput
  }

  export type transictionsUncheckedUpdateWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    id_transiction?: IntFieldUpdateOperationsInput | number
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_wallet_destination?: IntFieldUpdateOperationsInput | number
  }

  export type transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_originTowalletsInput = {
    id_transiction?: IntFieldUpdateOperationsInput | number
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_wallet_destination?: IntFieldUpdateOperationsInput | number
  }

  export type transictionsUpdateWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallets_transictions_id_wallet_originTowallets?: walletsUpdateOneRequiredWithoutTransictions_transictions_id_wallet_originTowalletsNestedInput
  }

  export type transictionsUncheckedUpdateWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    id_transiction?: IntFieldUpdateOperationsInput | number
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_wallet_origin?: IntFieldUpdateOperationsInput | number
  }

  export type transictionsUncheckedUpdateManyWithoutWallets_transictions_id_wallet_destinationTowalletsInput = {
    id_transiction?: IntFieldUpdateOperationsInput | number
    value_transiction?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_wallet_origin?: IntFieldUpdateOperationsInput | number
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