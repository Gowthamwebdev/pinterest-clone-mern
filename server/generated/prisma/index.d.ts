
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model pin
 * 
 */
export type pin = $Result.DefaultSelection<Prisma.$pinPayload>
/**
 * Model saved_pin
 * 
 */
export type saved_pin = $Result.DefaultSelection<Prisma.$saved_pinPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pin`: Exposes CRUD operations for the **pin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pins
    * const pins = await prisma.pin.findMany()
    * ```
    */
  get pin(): Prisma.pinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saved_pin`: Exposes CRUD operations for the **saved_pin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_pins
    * const saved_pins = await prisma.saved_pin.findMany()
    * ```
    */
  get saved_pin(): Prisma.saved_pinDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    user: 'user',
    pin: 'pin',
    saved_pin: 'saved_pin'
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
      modelProps: "user" | "pin" | "saved_pin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      pin: {
        payload: Prisma.$pinPayload<ExtArgs>
        fields: Prisma.pinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>
          }
          findFirst: {
            args: Prisma.pinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>
          }
          findMany: {
            args: Prisma.pinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>[]
          }
          create: {
            args: Prisma.pinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>
          }
          createMany: {
            args: Prisma.pinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>[]
          }
          delete: {
            args: Prisma.pinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>
          }
          update: {
            args: Prisma.pinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>
          }
          deleteMany: {
            args: Prisma.pinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>[]
          }
          upsert: {
            args: Prisma.pinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pinPayload>
          }
          aggregate: {
            args: Prisma.PinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePin>
          }
          groupBy: {
            args: Prisma.pinGroupByArgs<ExtArgs>
            result: $Utils.Optional<PinGroupByOutputType>[]
          }
          count: {
            args: Prisma.pinCountArgs<ExtArgs>
            result: $Utils.Optional<PinCountAggregateOutputType> | number
          }
        }
      }
      saved_pin: {
        payload: Prisma.$saved_pinPayload<ExtArgs>
        fields: Prisma.saved_pinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saved_pinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saved_pinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>
          }
          findFirst: {
            args: Prisma.saved_pinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saved_pinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>
          }
          findMany: {
            args: Prisma.saved_pinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>[]
          }
          create: {
            args: Prisma.saved_pinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>
          }
          createMany: {
            args: Prisma.saved_pinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.saved_pinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>[]
          }
          delete: {
            args: Prisma.saved_pinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>
          }
          update: {
            args: Prisma.saved_pinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>
          }
          deleteMany: {
            args: Prisma.saved_pinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saved_pinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.saved_pinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>[]
          }
          upsert: {
            args: Prisma.saved_pinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_pinPayload>
          }
          aggregate: {
            args: Prisma.Saved_pinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaved_pin>
          }
          groupBy: {
            args: Prisma.saved_pinGroupByArgs<ExtArgs>
            result: $Utils.Optional<Saved_pinGroupByOutputType>[]
          }
          count: {
            args: Prisma.saved_pinCountArgs<ExtArgs>
            result: $Utils.Optional<Saved_pinCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: userOmit
    pin?: pinOmit
    saved_pin?: saved_pinOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    created_pins: number
    saved_pins: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_pins?: boolean | UserCountOutputTypeCountCreated_pinsArgs
    saved_pins?: boolean | UserCountOutputTypeCountSaved_pinsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_pinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pinWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSaved_pinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_pinWhereInput
  }


  /**
   * Count Type PinCountOutputType
   */

  export type PinCountOutputType = {
    saved_by: number
  }

  export type PinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_by?: boolean | PinCountOutputTypeCountSaved_byArgs
  }

  // Custom InputTypes
  /**
   * PinCountOutputType without action
   */
  export type PinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinCountOutputType
     */
    select?: PinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PinCountOutputType without action
   */
  export type PinCountOutputTypeCountSaved_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_pinWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    profile_img: string | null
    dob: Date | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    profile_img: string | null
    dob: Date | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    profile_img: number
    dob: number
    created_at: number
    deleted_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_img?: true
    dob?: true
    created_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_img?: true
    dob?: true
    created_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_img?: true
    dob?: true
    created_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    profile_img: string | null
    dob: Date | null
    created_at: Date
    deleted_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
    created_pins?: boolean | user$created_pinsArgs<ExtArgs>
    saved_pins?: boolean | user$saved_pinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "profile_img" | "dob" | "created_at" | "deleted_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_pins?: boolean | user$created_pinsArgs<ExtArgs>
    saved_pins?: boolean | user$saved_pinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      created_pins: Prisma.$pinPayload<ExtArgs>[]
      saved_pins: Prisma.$saved_pinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      profile_img: string | null
      dob: Date | null
      created_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_pins<T extends user$created_pinsArgs<ExtArgs> = {}>(args?: Subset<T, user$created_pinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved_pins<T extends user$saved_pinsArgs<ExtArgs> = {}>(args?: Subset<T, user$saved_pinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly profile_img: FieldRef<"user", 'String'>
    readonly dob: FieldRef<"user", 'DateTime'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly deleted_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.created_pins
   */
  export type user$created_pinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    where?: pinWhereInput
    orderBy?: pinOrderByWithRelationInput | pinOrderByWithRelationInput[]
    cursor?: pinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PinScalarFieldEnum | PinScalarFieldEnum[]
  }

  /**
   * user.saved_pins
   */
  export type user$saved_pinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    where?: saved_pinWhereInput
    orderBy?: saved_pinOrderByWithRelationInput | saved_pinOrderByWithRelationInput[]
    cursor?: saved_pinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_pinScalarFieldEnum | Saved_pinScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model pin
   */

  export type AggregatePin = {
    _count: PinCountAggregateOutputType | null
    _avg: PinAvgAggregateOutputType | null
    _sum: PinSumAggregateOutputType | null
    _min: PinMinAggregateOutputType | null
    _max: PinMaxAggregateOutputType | null
  }

  export type PinAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PinSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PinMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    user_id: number | null
  }

  export type PinMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    user_id: number | null
  }

  export type PinCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image_url: number
    tags: number
    created_at: number
    updated_at: number
    deleted_at: number
    user_id: number
    _all: number
  }


  export type PinAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PinSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PinMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    user_id?: true
  }

  export type PinMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    user_id?: true
  }

  export type PinCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image_url?: true
    tags?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    user_id?: true
    _all?: true
  }

  export type PinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pin to aggregate.
     */
    where?: pinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pins to fetch.
     */
    orderBy?: pinOrderByWithRelationInput | pinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pins
    **/
    _count?: true | PinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PinMaxAggregateInputType
  }

  export type GetPinAggregateType<T extends PinAggregateArgs> = {
        [P in keyof T & keyof AggregatePin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePin[P]>
      : GetScalarType<T[P], AggregatePin[P]>
  }




  export type pinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pinWhereInput
    orderBy?: pinOrderByWithAggregationInput | pinOrderByWithAggregationInput[]
    by: PinScalarFieldEnum[] | PinScalarFieldEnum
    having?: pinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PinCountAggregateInputType | true
    _avg?: PinAvgAggregateInputType
    _sum?: PinSumAggregateInputType
    _min?: PinMinAggregateInputType
    _max?: PinMaxAggregateInputType
  }

  export type PinGroupByOutputType = {
    id: number
    title: string
    description: string | null
    image_url: string
    tags: string[]
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    user_id: number
    _count: PinCountAggregateOutputType | null
    _avg: PinAvgAggregateOutputType | null
    _sum: PinSumAggregateOutputType | null
    _min: PinMinAggregateOutputType | null
    _max: PinMaxAggregateOutputType | null
  }

  type GetPinGroupByPayload<T extends pinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PinGroupByOutputType[P]>
            : GetScalarType<T[P], PinGroupByOutputType[P]>
        }
      >
    >


  export type pinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    saved_by?: boolean | pin$saved_byArgs<ExtArgs>
    _count?: boolean | PinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pin"]>

  export type pinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pin"]>

  export type pinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pin"]>

  export type pinSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user_id?: boolean
  }

  export type pinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image_url" | "tags" | "created_at" | "updated_at" | "deleted_at" | "user_id", ExtArgs["result"]["pin"]>
  export type pinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    saved_by?: boolean | pin$saved_byArgs<ExtArgs>
    _count?: boolean | PinCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type pinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $pinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pin"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      saved_by: Prisma.$saved_pinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      image_url: string
      tags: string[]
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      user_id: number
    }, ExtArgs["result"]["pin"]>
    composites: {}
  }

  type pinGetPayload<S extends boolean | null | undefined | pinDefaultArgs> = $Result.GetResult<Prisma.$pinPayload, S>

  type pinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PinCountAggregateInputType | true
    }

  export interface pinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pin'], meta: { name: 'pin' } }
    /**
     * Find zero or one Pin that matches the filter.
     * @param {pinFindUniqueArgs} args - Arguments to find a Pin
     * @example
     * // Get one Pin
     * const pin = await prisma.pin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pinFindUniqueArgs>(args: SelectSubset<T, pinFindUniqueArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pinFindUniqueOrThrowArgs} args - Arguments to find a Pin
     * @example
     * // Get one Pin
     * const pin = await prisma.pin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pinFindUniqueOrThrowArgs>(args: SelectSubset<T, pinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pinFindFirstArgs} args - Arguments to find a Pin
     * @example
     * // Get one Pin
     * const pin = await prisma.pin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pinFindFirstArgs>(args?: SelectSubset<T, pinFindFirstArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pinFindFirstOrThrowArgs} args - Arguments to find a Pin
     * @example
     * // Get one Pin
     * const pin = await prisma.pin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pinFindFirstOrThrowArgs>(args?: SelectSubset<T, pinFindFirstOrThrowArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pins
     * const pins = await prisma.pin.findMany()
     * 
     * // Get first 10 Pins
     * const pins = await prisma.pin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pinWithIdOnly = await prisma.pin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pinFindManyArgs>(args?: SelectSubset<T, pinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pin.
     * @param {pinCreateArgs} args - Arguments to create a Pin.
     * @example
     * // Create one Pin
     * const Pin = await prisma.pin.create({
     *   data: {
     *     // ... data to create a Pin
     *   }
     * })
     * 
     */
    create<T extends pinCreateArgs>(args: SelectSubset<T, pinCreateArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pins.
     * @param {pinCreateManyArgs} args - Arguments to create many Pins.
     * @example
     * // Create many Pins
     * const pin = await prisma.pin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pinCreateManyArgs>(args?: SelectSubset<T, pinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pins and returns the data saved in the database.
     * @param {pinCreateManyAndReturnArgs} args - Arguments to create many Pins.
     * @example
     * // Create many Pins
     * const pin = await prisma.pin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pins and only return the `id`
     * const pinWithIdOnly = await prisma.pin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pinCreateManyAndReturnArgs>(args?: SelectSubset<T, pinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pin.
     * @param {pinDeleteArgs} args - Arguments to delete one Pin.
     * @example
     * // Delete one Pin
     * const Pin = await prisma.pin.delete({
     *   where: {
     *     // ... filter to delete one Pin
     *   }
     * })
     * 
     */
    delete<T extends pinDeleteArgs>(args: SelectSubset<T, pinDeleteArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pin.
     * @param {pinUpdateArgs} args - Arguments to update one Pin.
     * @example
     * // Update one Pin
     * const pin = await prisma.pin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pinUpdateArgs>(args: SelectSubset<T, pinUpdateArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pins.
     * @param {pinDeleteManyArgs} args - Arguments to filter Pins to delete.
     * @example
     * // Delete a few Pins
     * const { count } = await prisma.pin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pinDeleteManyArgs>(args?: SelectSubset<T, pinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pins
     * const pin = await prisma.pin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pinUpdateManyArgs>(args: SelectSubset<T, pinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pins and returns the data updated in the database.
     * @param {pinUpdateManyAndReturnArgs} args - Arguments to update many Pins.
     * @example
     * // Update many Pins
     * const pin = await prisma.pin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pins and only return the `id`
     * const pinWithIdOnly = await prisma.pin.updateManyAndReturn({
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
    updateManyAndReturn<T extends pinUpdateManyAndReturnArgs>(args: SelectSubset<T, pinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pin.
     * @param {pinUpsertArgs} args - Arguments to update or create a Pin.
     * @example
     * // Update or create a Pin
     * const pin = await prisma.pin.upsert({
     *   create: {
     *     // ... data to create a Pin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pin we want to update
     *   }
     * })
     */
    upsert<T extends pinUpsertArgs>(args: SelectSubset<T, pinUpsertArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pinCountArgs} args - Arguments to filter Pins to count.
     * @example
     * // Count the number of Pins
     * const count = await prisma.pin.count({
     *   where: {
     *     // ... the filter for the Pins we want to count
     *   }
     * })
    **/
    count<T extends pinCountArgs>(
      args?: Subset<T, pinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PinAggregateArgs>(args: Subset<T, PinAggregateArgs>): Prisma.PrismaPromise<GetPinAggregateType<T>>

    /**
     * Group by Pin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pinGroupByArgs} args - Group by arguments.
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
      T extends pinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pinGroupByArgs['orderBy'] }
        : { orderBy?: pinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pin model
   */
  readonly fields: pinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saved_by<T extends pin$saved_byArgs<ExtArgs> = {}>(args?: Subset<T, pin$saved_byArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pin model
   */
  interface pinFieldRefs {
    readonly id: FieldRef<"pin", 'Int'>
    readonly title: FieldRef<"pin", 'String'>
    readonly description: FieldRef<"pin", 'String'>
    readonly image_url: FieldRef<"pin", 'String'>
    readonly tags: FieldRef<"pin", 'String[]'>
    readonly created_at: FieldRef<"pin", 'DateTime'>
    readonly updated_at: FieldRef<"pin", 'DateTime'>
    readonly deleted_at: FieldRef<"pin", 'DateTime'>
    readonly user_id: FieldRef<"pin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pin findUnique
   */
  export type pinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * Filter, which pin to fetch.
     */
    where: pinWhereUniqueInput
  }

  /**
   * pin findUniqueOrThrow
   */
  export type pinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * Filter, which pin to fetch.
     */
    where: pinWhereUniqueInput
  }

  /**
   * pin findFirst
   */
  export type pinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * Filter, which pin to fetch.
     */
    where?: pinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pins to fetch.
     */
    orderBy?: pinOrderByWithRelationInput | pinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pins.
     */
    cursor?: pinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pins.
     */
    distinct?: PinScalarFieldEnum | PinScalarFieldEnum[]
  }

  /**
   * pin findFirstOrThrow
   */
  export type pinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * Filter, which pin to fetch.
     */
    where?: pinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pins to fetch.
     */
    orderBy?: pinOrderByWithRelationInput | pinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pins.
     */
    cursor?: pinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pins.
     */
    distinct?: PinScalarFieldEnum | PinScalarFieldEnum[]
  }

  /**
   * pin findMany
   */
  export type pinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * Filter, which pins to fetch.
     */
    where?: pinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pins to fetch.
     */
    orderBy?: pinOrderByWithRelationInput | pinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pins.
     */
    cursor?: pinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pins.
     */
    skip?: number
    distinct?: PinScalarFieldEnum | PinScalarFieldEnum[]
  }

  /**
   * pin create
   */
  export type pinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * The data needed to create a pin.
     */
    data: XOR<pinCreateInput, pinUncheckedCreateInput>
  }

  /**
   * pin createMany
   */
  export type pinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pins.
     */
    data: pinCreateManyInput | pinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pin createManyAndReturn
   */
  export type pinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * The data used to create many pins.
     */
    data: pinCreateManyInput | pinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pin update
   */
  export type pinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * The data needed to update a pin.
     */
    data: XOR<pinUpdateInput, pinUncheckedUpdateInput>
    /**
     * Choose, which pin to update.
     */
    where: pinWhereUniqueInput
  }

  /**
   * pin updateMany
   */
  export type pinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pins.
     */
    data: XOR<pinUpdateManyMutationInput, pinUncheckedUpdateManyInput>
    /**
     * Filter which pins to update
     */
    where?: pinWhereInput
    /**
     * Limit how many pins to update.
     */
    limit?: number
  }

  /**
   * pin updateManyAndReturn
   */
  export type pinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * The data used to update pins.
     */
    data: XOR<pinUpdateManyMutationInput, pinUncheckedUpdateManyInput>
    /**
     * Filter which pins to update
     */
    where?: pinWhereInput
    /**
     * Limit how many pins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pin upsert
   */
  export type pinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * The filter to search for the pin to update in case it exists.
     */
    where: pinWhereUniqueInput
    /**
     * In case the pin found by the `where` argument doesn't exist, create a new pin with this data.
     */
    create: XOR<pinCreateInput, pinUncheckedCreateInput>
    /**
     * In case the pin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pinUpdateInput, pinUncheckedUpdateInput>
  }

  /**
   * pin delete
   */
  export type pinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
    /**
     * Filter which pin to delete.
     */
    where: pinWhereUniqueInput
  }

  /**
   * pin deleteMany
   */
  export type pinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pins to delete
     */
    where?: pinWhereInput
    /**
     * Limit how many pins to delete.
     */
    limit?: number
  }

  /**
   * pin.saved_by
   */
  export type pin$saved_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    where?: saved_pinWhereInput
    orderBy?: saved_pinOrderByWithRelationInput | saved_pinOrderByWithRelationInput[]
    cursor?: saved_pinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_pinScalarFieldEnum | Saved_pinScalarFieldEnum[]
  }

  /**
   * pin without action
   */
  export type pinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pin
     */
    select?: pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pin
     */
    omit?: pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pinInclude<ExtArgs> | null
  }


  /**
   * Model saved_pin
   */

  export type AggregateSaved_pin = {
    _count: Saved_pinCountAggregateOutputType | null
    _avg: Saved_pinAvgAggregateOutputType | null
    _sum: Saved_pinSumAggregateOutputType | null
    _min: Saved_pinMinAggregateOutputType | null
    _max: Saved_pinMaxAggregateOutputType | null
  }

  export type Saved_pinAvgAggregateOutputType = {
    user_id: number | null
    pin_id: number | null
  }

  export type Saved_pinSumAggregateOutputType = {
    user_id: number | null
    pin_id: number | null
  }

  export type Saved_pinMinAggregateOutputType = {
    user_id: number | null
    pin_id: number | null
    created_at: Date | null
  }

  export type Saved_pinMaxAggregateOutputType = {
    user_id: number | null
    pin_id: number | null
    created_at: Date | null
  }

  export type Saved_pinCountAggregateOutputType = {
    user_id: number
    pin_id: number
    created_at: number
    _all: number
  }


  export type Saved_pinAvgAggregateInputType = {
    user_id?: true
    pin_id?: true
  }

  export type Saved_pinSumAggregateInputType = {
    user_id?: true
    pin_id?: true
  }

  export type Saved_pinMinAggregateInputType = {
    user_id?: true
    pin_id?: true
    created_at?: true
  }

  export type Saved_pinMaxAggregateInputType = {
    user_id?: true
    pin_id?: true
    created_at?: true
  }

  export type Saved_pinCountAggregateInputType = {
    user_id?: true
    pin_id?: true
    created_at?: true
    _all?: true
  }

  export type Saved_pinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_pin to aggregate.
     */
    where?: saved_pinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_pins to fetch.
     */
    orderBy?: saved_pinOrderByWithRelationInput | saved_pinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saved_pinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_pins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_pins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saved_pins
    **/
    _count?: true | Saved_pinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Saved_pinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Saved_pinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_pinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_pinMaxAggregateInputType
  }

  export type GetSaved_pinAggregateType<T extends Saved_pinAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_pin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_pin[P]>
      : GetScalarType<T[P], AggregateSaved_pin[P]>
  }




  export type saved_pinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_pinWhereInput
    orderBy?: saved_pinOrderByWithAggregationInput | saved_pinOrderByWithAggregationInput[]
    by: Saved_pinScalarFieldEnum[] | Saved_pinScalarFieldEnum
    having?: saved_pinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_pinCountAggregateInputType | true
    _avg?: Saved_pinAvgAggregateInputType
    _sum?: Saved_pinSumAggregateInputType
    _min?: Saved_pinMinAggregateInputType
    _max?: Saved_pinMaxAggregateInputType
  }

  export type Saved_pinGroupByOutputType = {
    user_id: number
    pin_id: number
    created_at: Date
    _count: Saved_pinCountAggregateOutputType | null
    _avg: Saved_pinAvgAggregateOutputType | null
    _sum: Saved_pinSumAggregateOutputType | null
    _min: Saved_pinMinAggregateOutputType | null
    _max: Saved_pinMaxAggregateOutputType | null
  }

  type GetSaved_pinGroupByPayload<T extends saved_pinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_pinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_pinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_pinGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_pinGroupByOutputType[P]>
        }
      >
    >


  export type saved_pinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pin_id?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    pin?: boolean | pinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_pin"]>

  export type saved_pinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pin_id?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    pin?: boolean | pinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_pin"]>

  export type saved_pinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pin_id?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    pin?: boolean | pinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_pin"]>

  export type saved_pinSelectScalar = {
    user_id?: boolean
    pin_id?: boolean
    created_at?: boolean
  }

  export type saved_pinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "pin_id" | "created_at", ExtArgs["result"]["saved_pin"]>
  export type saved_pinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    pin?: boolean | pinDefaultArgs<ExtArgs>
  }
  export type saved_pinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    pin?: boolean | pinDefaultArgs<ExtArgs>
  }
  export type saved_pinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    pin?: boolean | pinDefaultArgs<ExtArgs>
  }

  export type $saved_pinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saved_pin"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      pin: Prisma.$pinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      pin_id: number
      created_at: Date
    }, ExtArgs["result"]["saved_pin"]>
    composites: {}
  }

  type saved_pinGetPayload<S extends boolean | null | undefined | saved_pinDefaultArgs> = $Result.GetResult<Prisma.$saved_pinPayload, S>

  type saved_pinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saved_pinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Saved_pinCountAggregateInputType | true
    }

  export interface saved_pinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saved_pin'], meta: { name: 'saved_pin' } }
    /**
     * Find zero or one Saved_pin that matches the filter.
     * @param {saved_pinFindUniqueArgs} args - Arguments to find a Saved_pin
     * @example
     * // Get one Saved_pin
     * const saved_pin = await prisma.saved_pin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saved_pinFindUniqueArgs>(args: SelectSubset<T, saved_pinFindUniqueArgs<ExtArgs>>): Prisma__saved_pinClient<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saved_pin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saved_pinFindUniqueOrThrowArgs} args - Arguments to find a Saved_pin
     * @example
     * // Get one Saved_pin
     * const saved_pin = await prisma.saved_pin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saved_pinFindUniqueOrThrowArgs>(args: SelectSubset<T, saved_pinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saved_pinClient<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_pin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_pinFindFirstArgs} args - Arguments to find a Saved_pin
     * @example
     * // Get one Saved_pin
     * const saved_pin = await prisma.saved_pin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saved_pinFindFirstArgs>(args?: SelectSubset<T, saved_pinFindFirstArgs<ExtArgs>>): Prisma__saved_pinClient<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_pin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_pinFindFirstOrThrowArgs} args - Arguments to find a Saved_pin
     * @example
     * // Get one Saved_pin
     * const saved_pin = await prisma.saved_pin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saved_pinFindFirstOrThrowArgs>(args?: SelectSubset<T, saved_pinFindFirstOrThrowArgs<ExtArgs>>): Prisma__saved_pinClient<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saved_pins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_pinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_pins
     * const saved_pins = await prisma.saved_pin.findMany()
     * 
     * // Get first 10 Saved_pins
     * const saved_pins = await prisma.saved_pin.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const saved_pinWithUser_idOnly = await prisma.saved_pin.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends saved_pinFindManyArgs>(args?: SelectSubset<T, saved_pinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saved_pin.
     * @param {saved_pinCreateArgs} args - Arguments to create a Saved_pin.
     * @example
     * // Create one Saved_pin
     * const Saved_pin = await prisma.saved_pin.create({
     *   data: {
     *     // ... data to create a Saved_pin
     *   }
     * })
     * 
     */
    create<T extends saved_pinCreateArgs>(args: SelectSubset<T, saved_pinCreateArgs<ExtArgs>>): Prisma__saved_pinClient<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saved_pins.
     * @param {saved_pinCreateManyArgs} args - Arguments to create many Saved_pins.
     * @example
     * // Create many Saved_pins
     * const saved_pin = await prisma.saved_pin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saved_pinCreateManyArgs>(args?: SelectSubset<T, saved_pinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saved_pins and returns the data saved in the database.
     * @param {saved_pinCreateManyAndReturnArgs} args - Arguments to create many Saved_pins.
     * @example
     * // Create many Saved_pins
     * const saved_pin = await prisma.saved_pin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saved_pins and only return the `user_id`
     * const saved_pinWithUser_idOnly = await prisma.saved_pin.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends saved_pinCreateManyAndReturnArgs>(args?: SelectSubset<T, saved_pinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saved_pin.
     * @param {saved_pinDeleteArgs} args - Arguments to delete one Saved_pin.
     * @example
     * // Delete one Saved_pin
     * const Saved_pin = await prisma.saved_pin.delete({
     *   where: {
     *     // ... filter to delete one Saved_pin
     *   }
     * })
     * 
     */
    delete<T extends saved_pinDeleteArgs>(args: SelectSubset<T, saved_pinDeleteArgs<ExtArgs>>): Prisma__saved_pinClient<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saved_pin.
     * @param {saved_pinUpdateArgs} args - Arguments to update one Saved_pin.
     * @example
     * // Update one Saved_pin
     * const saved_pin = await prisma.saved_pin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saved_pinUpdateArgs>(args: SelectSubset<T, saved_pinUpdateArgs<ExtArgs>>): Prisma__saved_pinClient<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saved_pins.
     * @param {saved_pinDeleteManyArgs} args - Arguments to filter Saved_pins to delete.
     * @example
     * // Delete a few Saved_pins
     * const { count } = await prisma.saved_pin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saved_pinDeleteManyArgs>(args?: SelectSubset<T, saved_pinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_pins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_pinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_pins
     * const saved_pin = await prisma.saved_pin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saved_pinUpdateManyArgs>(args: SelectSubset<T, saved_pinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_pins and returns the data updated in the database.
     * @param {saved_pinUpdateManyAndReturnArgs} args - Arguments to update many Saved_pins.
     * @example
     * // Update many Saved_pins
     * const saved_pin = await prisma.saved_pin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saved_pins and only return the `user_id`
     * const saved_pinWithUser_idOnly = await prisma.saved_pin.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends saved_pinUpdateManyAndReturnArgs>(args: SelectSubset<T, saved_pinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saved_pin.
     * @param {saved_pinUpsertArgs} args - Arguments to update or create a Saved_pin.
     * @example
     * // Update or create a Saved_pin
     * const saved_pin = await prisma.saved_pin.upsert({
     *   create: {
     *     // ... data to create a Saved_pin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_pin we want to update
     *   }
     * })
     */
    upsert<T extends saved_pinUpsertArgs>(args: SelectSubset<T, saved_pinUpsertArgs<ExtArgs>>): Prisma__saved_pinClient<$Result.GetResult<Prisma.$saved_pinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saved_pins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_pinCountArgs} args - Arguments to filter Saved_pins to count.
     * @example
     * // Count the number of Saved_pins
     * const count = await prisma.saved_pin.count({
     *   where: {
     *     // ... the filter for the Saved_pins we want to count
     *   }
     * })
    **/
    count<T extends saved_pinCountArgs>(
      args?: Subset<T, saved_pinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_pinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_pin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_pinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Saved_pinAggregateArgs>(args: Subset<T, Saved_pinAggregateArgs>): Prisma.PrismaPromise<GetSaved_pinAggregateType<T>>

    /**
     * Group by Saved_pin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_pinGroupByArgs} args - Group by arguments.
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
      T extends saved_pinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saved_pinGroupByArgs['orderBy'] }
        : { orderBy?: saved_pinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, saved_pinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_pinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saved_pin model
   */
  readonly fields: saved_pinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saved_pin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saved_pinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pin<T extends pinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pinDefaultArgs<ExtArgs>>): Prisma__pinClient<$Result.GetResult<Prisma.$pinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the saved_pin model
   */
  interface saved_pinFieldRefs {
    readonly user_id: FieldRef<"saved_pin", 'Int'>
    readonly pin_id: FieldRef<"saved_pin", 'Int'>
    readonly created_at: FieldRef<"saved_pin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * saved_pin findUnique
   */
  export type saved_pinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * Filter, which saved_pin to fetch.
     */
    where: saved_pinWhereUniqueInput
  }

  /**
   * saved_pin findUniqueOrThrow
   */
  export type saved_pinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * Filter, which saved_pin to fetch.
     */
    where: saved_pinWhereUniqueInput
  }

  /**
   * saved_pin findFirst
   */
  export type saved_pinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * Filter, which saved_pin to fetch.
     */
    where?: saved_pinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_pins to fetch.
     */
    orderBy?: saved_pinOrderByWithRelationInput | saved_pinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_pins.
     */
    cursor?: saved_pinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_pins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_pins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_pins.
     */
    distinct?: Saved_pinScalarFieldEnum | Saved_pinScalarFieldEnum[]
  }

  /**
   * saved_pin findFirstOrThrow
   */
  export type saved_pinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * Filter, which saved_pin to fetch.
     */
    where?: saved_pinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_pins to fetch.
     */
    orderBy?: saved_pinOrderByWithRelationInput | saved_pinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_pins.
     */
    cursor?: saved_pinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_pins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_pins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_pins.
     */
    distinct?: Saved_pinScalarFieldEnum | Saved_pinScalarFieldEnum[]
  }

  /**
   * saved_pin findMany
   */
  export type saved_pinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * Filter, which saved_pins to fetch.
     */
    where?: saved_pinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_pins to fetch.
     */
    orderBy?: saved_pinOrderByWithRelationInput | saved_pinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saved_pins.
     */
    cursor?: saved_pinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_pins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_pins.
     */
    skip?: number
    distinct?: Saved_pinScalarFieldEnum | Saved_pinScalarFieldEnum[]
  }

  /**
   * saved_pin create
   */
  export type saved_pinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * The data needed to create a saved_pin.
     */
    data: XOR<saved_pinCreateInput, saved_pinUncheckedCreateInput>
  }

  /**
   * saved_pin createMany
   */
  export type saved_pinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saved_pins.
     */
    data: saved_pinCreateManyInput | saved_pinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * saved_pin createManyAndReturn
   */
  export type saved_pinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * The data used to create many saved_pins.
     */
    data: saved_pinCreateManyInput | saved_pinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * saved_pin update
   */
  export type saved_pinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * The data needed to update a saved_pin.
     */
    data: XOR<saved_pinUpdateInput, saved_pinUncheckedUpdateInput>
    /**
     * Choose, which saved_pin to update.
     */
    where: saved_pinWhereUniqueInput
  }

  /**
   * saved_pin updateMany
   */
  export type saved_pinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saved_pins.
     */
    data: XOR<saved_pinUpdateManyMutationInput, saved_pinUncheckedUpdateManyInput>
    /**
     * Filter which saved_pins to update
     */
    where?: saved_pinWhereInput
    /**
     * Limit how many saved_pins to update.
     */
    limit?: number
  }

  /**
   * saved_pin updateManyAndReturn
   */
  export type saved_pinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * The data used to update saved_pins.
     */
    data: XOR<saved_pinUpdateManyMutationInput, saved_pinUncheckedUpdateManyInput>
    /**
     * Filter which saved_pins to update
     */
    where?: saved_pinWhereInput
    /**
     * Limit how many saved_pins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * saved_pin upsert
   */
  export type saved_pinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * The filter to search for the saved_pin to update in case it exists.
     */
    where: saved_pinWhereUniqueInput
    /**
     * In case the saved_pin found by the `where` argument doesn't exist, create a new saved_pin with this data.
     */
    create: XOR<saved_pinCreateInput, saved_pinUncheckedCreateInput>
    /**
     * In case the saved_pin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saved_pinUpdateInput, saved_pinUncheckedUpdateInput>
  }

  /**
   * saved_pin delete
   */
  export type saved_pinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
    /**
     * Filter which saved_pin to delete.
     */
    where: saved_pinWhereUniqueInput
  }

  /**
   * saved_pin deleteMany
   */
  export type saved_pinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_pins to delete
     */
    where?: saved_pinWhereInput
    /**
     * Limit how many saved_pins to delete.
     */
    limit?: number
  }

  /**
   * saved_pin without action
   */
  export type saved_pinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_pin
     */
    select?: saved_pinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_pin
     */
    omit?: saved_pinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_pinInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profile_img: 'profile_img',
    dob: 'dob',
    created_at: 'created_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PinScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image_url: 'image_url',
    tags: 'tags',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    user_id: 'user_id'
  };

  export type PinScalarFieldEnum = (typeof PinScalarFieldEnum)[keyof typeof PinScalarFieldEnum]


  export const Saved_pinScalarFieldEnum: {
    user_id: 'user_id',
    pin_id: 'pin_id',
    created_at: 'created_at'
  };

  export type Saved_pinScalarFieldEnum = (typeof Saved_pinScalarFieldEnum)[keyof typeof Saved_pinScalarFieldEnum]


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


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profile_img?: StringNullableFilter<"user"> | string | null
    dob?: DateTimeNullableFilter<"user"> | Date | string | null
    created_at?: DateTimeFilter<"user"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    created_pins?: PinListRelationFilter
    saved_pins?: Saved_pinListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_pins?: pinOrderByRelationAggregateInput
    saved_pins?: saved_pinOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profile_img?: StringNullableFilter<"user"> | string | null
    dob?: DateTimeNullableFilter<"user"> | Date | string | null
    created_at?: DateTimeFilter<"user"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    created_pins?: PinListRelationFilter
    saved_pins?: Saved_pinListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    profile_img?: StringNullableWithAggregatesFilter<"user"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type pinWhereInput = {
    AND?: pinWhereInput | pinWhereInput[]
    OR?: pinWhereInput[]
    NOT?: pinWhereInput | pinWhereInput[]
    id?: IntFilter<"pin"> | number
    title?: StringFilter<"pin"> | string
    description?: StringNullableFilter<"pin"> | string | null
    image_url?: StringFilter<"pin"> | string
    tags?: StringNullableListFilter<"pin">
    created_at?: DateTimeFilter<"pin"> | Date | string
    updated_at?: DateTimeFilter<"pin"> | Date | string
    deleted_at?: DateTimeNullableFilter<"pin"> | Date | string | null
    user_id?: IntFilter<"pin"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    saved_by?: Saved_pinListRelationFilter
  }

  export type pinOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    saved_by?: saved_pinOrderByRelationAggregateInput
  }

  export type pinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pinWhereInput | pinWhereInput[]
    OR?: pinWhereInput[]
    NOT?: pinWhereInput | pinWhereInput[]
    title?: StringFilter<"pin"> | string
    description?: StringNullableFilter<"pin"> | string | null
    image_url?: StringFilter<"pin"> | string
    tags?: StringNullableListFilter<"pin">
    created_at?: DateTimeFilter<"pin"> | Date | string
    updated_at?: DateTimeFilter<"pin"> | Date | string
    deleted_at?: DateTimeNullableFilter<"pin"> | Date | string | null
    user_id?: IntFilter<"pin"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    saved_by?: Saved_pinListRelationFilter
  }, "id">

  export type pinOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: pinCountOrderByAggregateInput
    _avg?: pinAvgOrderByAggregateInput
    _max?: pinMaxOrderByAggregateInput
    _min?: pinMinOrderByAggregateInput
    _sum?: pinSumOrderByAggregateInput
  }

  export type pinScalarWhereWithAggregatesInput = {
    AND?: pinScalarWhereWithAggregatesInput | pinScalarWhereWithAggregatesInput[]
    OR?: pinScalarWhereWithAggregatesInput[]
    NOT?: pinScalarWhereWithAggregatesInput | pinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pin"> | number
    title?: StringWithAggregatesFilter<"pin"> | string
    description?: StringNullableWithAggregatesFilter<"pin"> | string | null
    image_url?: StringWithAggregatesFilter<"pin"> | string
    tags?: StringNullableListFilter<"pin">
    created_at?: DateTimeWithAggregatesFilter<"pin"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"pin"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"pin"> | Date | string | null
    user_id?: IntWithAggregatesFilter<"pin"> | number
  }

  export type saved_pinWhereInput = {
    AND?: saved_pinWhereInput | saved_pinWhereInput[]
    OR?: saved_pinWhereInput[]
    NOT?: saved_pinWhereInput | saved_pinWhereInput[]
    user_id?: IntFilter<"saved_pin"> | number
    pin_id?: IntFilter<"saved_pin"> | number
    created_at?: DateTimeFilter<"saved_pin"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    pin?: XOR<PinScalarRelationFilter, pinWhereInput>
  }

  export type saved_pinOrderByWithRelationInput = {
    user_id?: SortOrder
    pin_id?: SortOrder
    created_at?: SortOrder
    user?: userOrderByWithRelationInput
    pin?: pinOrderByWithRelationInput
  }

  export type saved_pinWhereUniqueInput = Prisma.AtLeast<{
    user_id_pin_id?: saved_pinUser_idPin_idCompoundUniqueInput
    AND?: saved_pinWhereInput | saved_pinWhereInput[]
    OR?: saved_pinWhereInput[]
    NOT?: saved_pinWhereInput | saved_pinWhereInput[]
    user_id?: IntFilter<"saved_pin"> | number
    pin_id?: IntFilter<"saved_pin"> | number
    created_at?: DateTimeFilter<"saved_pin"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    pin?: XOR<PinScalarRelationFilter, pinWhereInput>
  }, "user_id_pin_id">

  export type saved_pinOrderByWithAggregationInput = {
    user_id?: SortOrder
    pin_id?: SortOrder
    created_at?: SortOrder
    _count?: saved_pinCountOrderByAggregateInput
    _avg?: saved_pinAvgOrderByAggregateInput
    _max?: saved_pinMaxOrderByAggregateInput
    _min?: saved_pinMinOrderByAggregateInput
    _sum?: saved_pinSumOrderByAggregateInput
  }

  export type saved_pinScalarWhereWithAggregatesInput = {
    AND?: saved_pinScalarWhereWithAggregatesInput | saved_pinScalarWhereWithAggregatesInput[]
    OR?: saved_pinScalarWhereWithAggregatesInput[]
    NOT?: saved_pinScalarWhereWithAggregatesInput | saved_pinScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"saved_pin"> | number
    pin_id?: IntWithAggregatesFilter<"saved_pin"> | number
    created_at?: DateTimeWithAggregatesFilter<"saved_pin"> | Date | string
  }

  export type userCreateInput = {
    name: string
    email: string
    password: string
    profile_img?: string | null
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
    created_pins?: pinCreateNestedManyWithoutUserInput
    saved_pins?: saved_pinCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_img?: string | null
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
    created_pins?: pinUncheckedCreateNestedManyWithoutUserInput
    saved_pins?: saved_pinUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_pins?: pinUpdateManyWithoutUserNestedInput
    saved_pins?: saved_pinUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_pins?: pinUncheckedUpdateManyWithoutUserNestedInput
    saved_pins?: saved_pinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_img?: string | null
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pinCreateInput = {
    title: string
    description?: string | null
    image_url: string
    tags?: pinCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: userCreateNestedOneWithoutCreated_pinsInput
    saved_by?: saved_pinCreateNestedManyWithoutPinInput
  }

  export type pinUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    image_url: string
    tags?: pinCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_id: number
    saved_by?: saved_pinUncheckedCreateNestedManyWithoutPinInput
  }

  export type pinUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutCreated_pinsNestedInput
    saved_by?: saved_pinUpdateManyWithoutPinNestedInput
  }

  export type pinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    saved_by?: saved_pinUncheckedUpdateManyWithoutPinNestedInput
  }

  export type pinCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    image_url: string
    tags?: pinCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_id: number
  }

  export type pinUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type saved_pinCreateInput = {
    created_at?: Date | string
    user: userCreateNestedOneWithoutSaved_pinsInput
    pin: pinCreateNestedOneWithoutSaved_byInput
  }

  export type saved_pinUncheckedCreateInput = {
    user_id: number
    pin_id: number
    created_at?: Date | string
  }

  export type saved_pinUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutSaved_pinsNestedInput
    pin?: pinUpdateOneRequiredWithoutSaved_byNestedInput
  }

  export type saved_pinUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    pin_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_pinCreateManyInput = {
    user_id: number
    pin_id: number
    created_at?: Date | string
  }

  export type saved_pinUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_pinUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    pin_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PinListRelationFilter = {
    every?: pinWhereInput
    some?: pinWhereInput
    none?: pinWhereInput
  }

  export type Saved_pinListRelationFilter = {
    every?: saved_pinWhereInput
    some?: saved_pinWhereInput
    none?: saved_pinWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saved_pinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type pinCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    user_id?: SortOrder
  }

  export type pinAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type pinMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    user_id?: SortOrder
  }

  export type pinMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    user_id?: SortOrder
  }

  export type pinSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type PinScalarRelationFilter = {
    is?: pinWhereInput
    isNot?: pinWhereInput
  }

  export type saved_pinUser_idPin_idCompoundUniqueInput = {
    user_id: number
    pin_id: number
  }

  export type saved_pinCountOrderByAggregateInput = {
    user_id?: SortOrder
    pin_id?: SortOrder
    created_at?: SortOrder
  }

  export type saved_pinAvgOrderByAggregateInput = {
    user_id?: SortOrder
    pin_id?: SortOrder
  }

  export type saved_pinMaxOrderByAggregateInput = {
    user_id?: SortOrder
    pin_id?: SortOrder
    created_at?: SortOrder
  }

  export type saved_pinMinOrderByAggregateInput = {
    user_id?: SortOrder
    pin_id?: SortOrder
    created_at?: SortOrder
  }

  export type saved_pinSumOrderByAggregateInput = {
    user_id?: SortOrder
    pin_id?: SortOrder
  }

  export type pinCreateNestedManyWithoutUserInput = {
    create?: XOR<pinCreateWithoutUserInput, pinUncheckedCreateWithoutUserInput> | pinCreateWithoutUserInput[] | pinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pinCreateOrConnectWithoutUserInput | pinCreateOrConnectWithoutUserInput[]
    createMany?: pinCreateManyUserInputEnvelope
    connect?: pinWhereUniqueInput | pinWhereUniqueInput[]
  }

  export type saved_pinCreateNestedManyWithoutUserInput = {
    create?: XOR<saved_pinCreateWithoutUserInput, saved_pinUncheckedCreateWithoutUserInput> | saved_pinCreateWithoutUserInput[] | saved_pinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: saved_pinCreateOrConnectWithoutUserInput | saved_pinCreateOrConnectWithoutUserInput[]
    createMany?: saved_pinCreateManyUserInputEnvelope
    connect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
  }

  export type pinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<pinCreateWithoutUserInput, pinUncheckedCreateWithoutUserInput> | pinCreateWithoutUserInput[] | pinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pinCreateOrConnectWithoutUserInput | pinCreateOrConnectWithoutUserInput[]
    createMany?: pinCreateManyUserInputEnvelope
    connect?: pinWhereUniqueInput | pinWhereUniqueInput[]
  }

  export type saved_pinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<saved_pinCreateWithoutUserInput, saved_pinUncheckedCreateWithoutUserInput> | saved_pinCreateWithoutUserInput[] | saved_pinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: saved_pinCreateOrConnectWithoutUserInput | saved_pinCreateOrConnectWithoutUserInput[]
    createMany?: saved_pinCreateManyUserInputEnvelope
    connect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type pinUpdateManyWithoutUserNestedInput = {
    create?: XOR<pinCreateWithoutUserInput, pinUncheckedCreateWithoutUserInput> | pinCreateWithoutUserInput[] | pinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pinCreateOrConnectWithoutUserInput | pinCreateOrConnectWithoutUserInput[]
    upsert?: pinUpsertWithWhereUniqueWithoutUserInput | pinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pinCreateManyUserInputEnvelope
    set?: pinWhereUniqueInput | pinWhereUniqueInput[]
    disconnect?: pinWhereUniqueInput | pinWhereUniqueInput[]
    delete?: pinWhereUniqueInput | pinWhereUniqueInput[]
    connect?: pinWhereUniqueInput | pinWhereUniqueInput[]
    update?: pinUpdateWithWhereUniqueWithoutUserInput | pinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pinUpdateManyWithWhereWithoutUserInput | pinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pinScalarWhereInput | pinScalarWhereInput[]
  }

  export type saved_pinUpdateManyWithoutUserNestedInput = {
    create?: XOR<saved_pinCreateWithoutUserInput, saved_pinUncheckedCreateWithoutUserInput> | saved_pinCreateWithoutUserInput[] | saved_pinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: saved_pinCreateOrConnectWithoutUserInput | saved_pinCreateOrConnectWithoutUserInput[]
    upsert?: saved_pinUpsertWithWhereUniqueWithoutUserInput | saved_pinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: saved_pinCreateManyUserInputEnvelope
    set?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    disconnect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    delete?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    connect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    update?: saved_pinUpdateWithWhereUniqueWithoutUserInput | saved_pinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: saved_pinUpdateManyWithWhereWithoutUserInput | saved_pinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: saved_pinScalarWhereInput | saved_pinScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<pinCreateWithoutUserInput, pinUncheckedCreateWithoutUserInput> | pinCreateWithoutUserInput[] | pinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pinCreateOrConnectWithoutUserInput | pinCreateOrConnectWithoutUserInput[]
    upsert?: pinUpsertWithWhereUniqueWithoutUserInput | pinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pinCreateManyUserInputEnvelope
    set?: pinWhereUniqueInput | pinWhereUniqueInput[]
    disconnect?: pinWhereUniqueInput | pinWhereUniqueInput[]
    delete?: pinWhereUniqueInput | pinWhereUniqueInput[]
    connect?: pinWhereUniqueInput | pinWhereUniqueInput[]
    update?: pinUpdateWithWhereUniqueWithoutUserInput | pinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pinUpdateManyWithWhereWithoutUserInput | pinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pinScalarWhereInput | pinScalarWhereInput[]
  }

  export type saved_pinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<saved_pinCreateWithoutUserInput, saved_pinUncheckedCreateWithoutUserInput> | saved_pinCreateWithoutUserInput[] | saved_pinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: saved_pinCreateOrConnectWithoutUserInput | saved_pinCreateOrConnectWithoutUserInput[]
    upsert?: saved_pinUpsertWithWhereUniqueWithoutUserInput | saved_pinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: saved_pinCreateManyUserInputEnvelope
    set?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    disconnect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    delete?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    connect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    update?: saved_pinUpdateWithWhereUniqueWithoutUserInput | saved_pinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: saved_pinUpdateManyWithWhereWithoutUserInput | saved_pinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: saved_pinScalarWhereInput | saved_pinScalarWhereInput[]
  }

  export type pinCreatetagsInput = {
    set: string[]
  }

  export type userCreateNestedOneWithoutCreated_pinsInput = {
    create?: XOR<userCreateWithoutCreated_pinsInput, userUncheckedCreateWithoutCreated_pinsInput>
    connectOrCreate?: userCreateOrConnectWithoutCreated_pinsInput
    connect?: userWhereUniqueInput
  }

  export type saved_pinCreateNestedManyWithoutPinInput = {
    create?: XOR<saved_pinCreateWithoutPinInput, saved_pinUncheckedCreateWithoutPinInput> | saved_pinCreateWithoutPinInput[] | saved_pinUncheckedCreateWithoutPinInput[]
    connectOrCreate?: saved_pinCreateOrConnectWithoutPinInput | saved_pinCreateOrConnectWithoutPinInput[]
    createMany?: saved_pinCreateManyPinInputEnvelope
    connect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
  }

  export type saved_pinUncheckedCreateNestedManyWithoutPinInput = {
    create?: XOR<saved_pinCreateWithoutPinInput, saved_pinUncheckedCreateWithoutPinInput> | saved_pinCreateWithoutPinInput[] | saved_pinUncheckedCreateWithoutPinInput[]
    connectOrCreate?: saved_pinCreateOrConnectWithoutPinInput | saved_pinCreateOrConnectWithoutPinInput[]
    createMany?: saved_pinCreateManyPinInputEnvelope
    connect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
  }

  export type pinUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type userUpdateOneRequiredWithoutCreated_pinsNestedInput = {
    create?: XOR<userCreateWithoutCreated_pinsInput, userUncheckedCreateWithoutCreated_pinsInput>
    connectOrCreate?: userCreateOrConnectWithoutCreated_pinsInput
    upsert?: userUpsertWithoutCreated_pinsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCreated_pinsInput, userUpdateWithoutCreated_pinsInput>, userUncheckedUpdateWithoutCreated_pinsInput>
  }

  export type saved_pinUpdateManyWithoutPinNestedInput = {
    create?: XOR<saved_pinCreateWithoutPinInput, saved_pinUncheckedCreateWithoutPinInput> | saved_pinCreateWithoutPinInput[] | saved_pinUncheckedCreateWithoutPinInput[]
    connectOrCreate?: saved_pinCreateOrConnectWithoutPinInput | saved_pinCreateOrConnectWithoutPinInput[]
    upsert?: saved_pinUpsertWithWhereUniqueWithoutPinInput | saved_pinUpsertWithWhereUniqueWithoutPinInput[]
    createMany?: saved_pinCreateManyPinInputEnvelope
    set?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    disconnect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    delete?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    connect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    update?: saved_pinUpdateWithWhereUniqueWithoutPinInput | saved_pinUpdateWithWhereUniqueWithoutPinInput[]
    updateMany?: saved_pinUpdateManyWithWhereWithoutPinInput | saved_pinUpdateManyWithWhereWithoutPinInput[]
    deleteMany?: saved_pinScalarWhereInput | saved_pinScalarWhereInput[]
  }

  export type saved_pinUncheckedUpdateManyWithoutPinNestedInput = {
    create?: XOR<saved_pinCreateWithoutPinInput, saved_pinUncheckedCreateWithoutPinInput> | saved_pinCreateWithoutPinInput[] | saved_pinUncheckedCreateWithoutPinInput[]
    connectOrCreate?: saved_pinCreateOrConnectWithoutPinInput | saved_pinCreateOrConnectWithoutPinInput[]
    upsert?: saved_pinUpsertWithWhereUniqueWithoutPinInput | saved_pinUpsertWithWhereUniqueWithoutPinInput[]
    createMany?: saved_pinCreateManyPinInputEnvelope
    set?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    disconnect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    delete?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    connect?: saved_pinWhereUniqueInput | saved_pinWhereUniqueInput[]
    update?: saved_pinUpdateWithWhereUniqueWithoutPinInput | saved_pinUpdateWithWhereUniqueWithoutPinInput[]
    updateMany?: saved_pinUpdateManyWithWhereWithoutPinInput | saved_pinUpdateManyWithWhereWithoutPinInput[]
    deleteMany?: saved_pinScalarWhereInput | saved_pinScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutSaved_pinsInput = {
    create?: XOR<userCreateWithoutSaved_pinsInput, userUncheckedCreateWithoutSaved_pinsInput>
    connectOrCreate?: userCreateOrConnectWithoutSaved_pinsInput
    connect?: userWhereUniqueInput
  }

  export type pinCreateNestedOneWithoutSaved_byInput = {
    create?: XOR<pinCreateWithoutSaved_byInput, pinUncheckedCreateWithoutSaved_byInput>
    connectOrCreate?: pinCreateOrConnectWithoutSaved_byInput
    connect?: pinWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutSaved_pinsNestedInput = {
    create?: XOR<userCreateWithoutSaved_pinsInput, userUncheckedCreateWithoutSaved_pinsInput>
    connectOrCreate?: userCreateOrConnectWithoutSaved_pinsInput
    upsert?: userUpsertWithoutSaved_pinsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSaved_pinsInput, userUpdateWithoutSaved_pinsInput>, userUncheckedUpdateWithoutSaved_pinsInput>
  }

  export type pinUpdateOneRequiredWithoutSaved_byNestedInput = {
    create?: XOR<pinCreateWithoutSaved_byInput, pinUncheckedCreateWithoutSaved_byInput>
    connectOrCreate?: pinCreateOrConnectWithoutSaved_byInput
    upsert?: pinUpsertWithoutSaved_byInput
    connect?: pinWhereUniqueInput
    update?: XOR<XOR<pinUpdateToOneWithWhereWithoutSaved_byInput, pinUpdateWithoutSaved_byInput>, pinUncheckedUpdateWithoutSaved_byInput>
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

  export type pinCreateWithoutUserInput = {
    title: string
    description?: string | null
    image_url: string
    tags?: pinCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    saved_by?: saved_pinCreateNestedManyWithoutPinInput
  }

  export type pinUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    image_url: string
    tags?: pinCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    saved_by?: saved_pinUncheckedCreateNestedManyWithoutPinInput
  }

  export type pinCreateOrConnectWithoutUserInput = {
    where: pinWhereUniqueInput
    create: XOR<pinCreateWithoutUserInput, pinUncheckedCreateWithoutUserInput>
  }

  export type pinCreateManyUserInputEnvelope = {
    data: pinCreateManyUserInput | pinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type saved_pinCreateWithoutUserInput = {
    created_at?: Date | string
    pin: pinCreateNestedOneWithoutSaved_byInput
  }

  export type saved_pinUncheckedCreateWithoutUserInput = {
    pin_id: number
    created_at?: Date | string
  }

  export type saved_pinCreateOrConnectWithoutUserInput = {
    where: saved_pinWhereUniqueInput
    create: XOR<saved_pinCreateWithoutUserInput, saved_pinUncheckedCreateWithoutUserInput>
  }

  export type saved_pinCreateManyUserInputEnvelope = {
    data: saved_pinCreateManyUserInput | saved_pinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type pinUpsertWithWhereUniqueWithoutUserInput = {
    where: pinWhereUniqueInput
    update: XOR<pinUpdateWithoutUserInput, pinUncheckedUpdateWithoutUserInput>
    create: XOR<pinCreateWithoutUserInput, pinUncheckedCreateWithoutUserInput>
  }

  export type pinUpdateWithWhereUniqueWithoutUserInput = {
    where: pinWhereUniqueInput
    data: XOR<pinUpdateWithoutUserInput, pinUncheckedUpdateWithoutUserInput>
  }

  export type pinUpdateManyWithWhereWithoutUserInput = {
    where: pinScalarWhereInput
    data: XOR<pinUpdateManyMutationInput, pinUncheckedUpdateManyWithoutUserInput>
  }

  export type pinScalarWhereInput = {
    AND?: pinScalarWhereInput | pinScalarWhereInput[]
    OR?: pinScalarWhereInput[]
    NOT?: pinScalarWhereInput | pinScalarWhereInput[]
    id?: IntFilter<"pin"> | number
    title?: StringFilter<"pin"> | string
    description?: StringNullableFilter<"pin"> | string | null
    image_url?: StringFilter<"pin"> | string
    tags?: StringNullableListFilter<"pin">
    created_at?: DateTimeFilter<"pin"> | Date | string
    updated_at?: DateTimeFilter<"pin"> | Date | string
    deleted_at?: DateTimeNullableFilter<"pin"> | Date | string | null
    user_id?: IntFilter<"pin"> | number
  }

  export type saved_pinUpsertWithWhereUniqueWithoutUserInput = {
    where: saved_pinWhereUniqueInput
    update: XOR<saved_pinUpdateWithoutUserInput, saved_pinUncheckedUpdateWithoutUserInput>
    create: XOR<saved_pinCreateWithoutUserInput, saved_pinUncheckedCreateWithoutUserInput>
  }

  export type saved_pinUpdateWithWhereUniqueWithoutUserInput = {
    where: saved_pinWhereUniqueInput
    data: XOR<saved_pinUpdateWithoutUserInput, saved_pinUncheckedUpdateWithoutUserInput>
  }

  export type saved_pinUpdateManyWithWhereWithoutUserInput = {
    where: saved_pinScalarWhereInput
    data: XOR<saved_pinUpdateManyMutationInput, saved_pinUncheckedUpdateManyWithoutUserInput>
  }

  export type saved_pinScalarWhereInput = {
    AND?: saved_pinScalarWhereInput | saved_pinScalarWhereInput[]
    OR?: saved_pinScalarWhereInput[]
    NOT?: saved_pinScalarWhereInput | saved_pinScalarWhereInput[]
    user_id?: IntFilter<"saved_pin"> | number
    pin_id?: IntFilter<"saved_pin"> | number
    created_at?: DateTimeFilter<"saved_pin"> | Date | string
  }

  export type userCreateWithoutCreated_pinsInput = {
    name: string
    email: string
    password: string
    profile_img?: string | null
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
    saved_pins?: saved_pinCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCreated_pinsInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_img?: string | null
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
    saved_pins?: saved_pinUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCreated_pinsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCreated_pinsInput, userUncheckedCreateWithoutCreated_pinsInput>
  }

  export type saved_pinCreateWithoutPinInput = {
    created_at?: Date | string
    user: userCreateNestedOneWithoutSaved_pinsInput
  }

  export type saved_pinUncheckedCreateWithoutPinInput = {
    user_id: number
    created_at?: Date | string
  }

  export type saved_pinCreateOrConnectWithoutPinInput = {
    where: saved_pinWhereUniqueInput
    create: XOR<saved_pinCreateWithoutPinInput, saved_pinUncheckedCreateWithoutPinInput>
  }

  export type saved_pinCreateManyPinInputEnvelope = {
    data: saved_pinCreateManyPinInput | saved_pinCreateManyPinInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutCreated_pinsInput = {
    update: XOR<userUpdateWithoutCreated_pinsInput, userUncheckedUpdateWithoutCreated_pinsInput>
    create: XOR<userCreateWithoutCreated_pinsInput, userUncheckedCreateWithoutCreated_pinsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCreated_pinsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCreated_pinsInput, userUncheckedUpdateWithoutCreated_pinsInput>
  }

  export type userUpdateWithoutCreated_pinsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saved_pins?: saved_pinUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCreated_pinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saved_pins?: saved_pinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type saved_pinUpsertWithWhereUniqueWithoutPinInput = {
    where: saved_pinWhereUniqueInput
    update: XOR<saved_pinUpdateWithoutPinInput, saved_pinUncheckedUpdateWithoutPinInput>
    create: XOR<saved_pinCreateWithoutPinInput, saved_pinUncheckedCreateWithoutPinInput>
  }

  export type saved_pinUpdateWithWhereUniqueWithoutPinInput = {
    where: saved_pinWhereUniqueInput
    data: XOR<saved_pinUpdateWithoutPinInput, saved_pinUncheckedUpdateWithoutPinInput>
  }

  export type saved_pinUpdateManyWithWhereWithoutPinInput = {
    where: saved_pinScalarWhereInput
    data: XOR<saved_pinUpdateManyMutationInput, saved_pinUncheckedUpdateManyWithoutPinInput>
  }

  export type userCreateWithoutSaved_pinsInput = {
    name: string
    email: string
    password: string
    profile_img?: string | null
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
    created_pins?: pinCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSaved_pinsInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_img?: string | null
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
    created_pins?: pinUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSaved_pinsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSaved_pinsInput, userUncheckedCreateWithoutSaved_pinsInput>
  }

  export type pinCreateWithoutSaved_byInput = {
    title: string
    description?: string | null
    image_url: string
    tags?: pinCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: userCreateNestedOneWithoutCreated_pinsInput
  }

  export type pinUncheckedCreateWithoutSaved_byInput = {
    id?: number
    title: string
    description?: string | null
    image_url: string
    tags?: pinCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_id: number
  }

  export type pinCreateOrConnectWithoutSaved_byInput = {
    where: pinWhereUniqueInput
    create: XOR<pinCreateWithoutSaved_byInput, pinUncheckedCreateWithoutSaved_byInput>
  }

  export type userUpsertWithoutSaved_pinsInput = {
    update: XOR<userUpdateWithoutSaved_pinsInput, userUncheckedUpdateWithoutSaved_pinsInput>
    create: XOR<userCreateWithoutSaved_pinsInput, userUncheckedCreateWithoutSaved_pinsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSaved_pinsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSaved_pinsInput, userUncheckedUpdateWithoutSaved_pinsInput>
  }

  export type userUpdateWithoutSaved_pinsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_pins?: pinUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSaved_pinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_pins?: pinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type pinUpsertWithoutSaved_byInput = {
    update: XOR<pinUpdateWithoutSaved_byInput, pinUncheckedUpdateWithoutSaved_byInput>
    create: XOR<pinCreateWithoutSaved_byInput, pinUncheckedCreateWithoutSaved_byInput>
    where?: pinWhereInput
  }

  export type pinUpdateToOneWithWhereWithoutSaved_byInput = {
    where?: pinWhereInput
    data: XOR<pinUpdateWithoutSaved_byInput, pinUncheckedUpdateWithoutSaved_byInput>
  }

  export type pinUpdateWithoutSaved_byInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutCreated_pinsNestedInput
  }

  export type pinUncheckedUpdateWithoutSaved_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type pinCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    image_url: string
    tags?: pinCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type saved_pinCreateManyUserInput = {
    pin_id: number
    created_at?: Date | string
  }

  export type pinUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saved_by?: saved_pinUpdateManyWithoutPinNestedInput
  }

  export type pinUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saved_by?: saved_pinUncheckedUpdateManyWithoutPinNestedInput
  }

  export type pinUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    tags?: pinUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_pinUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pin?: pinUpdateOneRequiredWithoutSaved_byNestedInput
  }

  export type saved_pinUncheckedUpdateWithoutUserInput = {
    pin_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_pinUncheckedUpdateManyWithoutUserInput = {
    pin_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_pinCreateManyPinInput = {
    user_id: number
    created_at?: Date | string
  }

  export type saved_pinUpdateWithoutPinInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutSaved_pinsNestedInput
  }

  export type saved_pinUncheckedUpdateWithoutPinInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_pinUncheckedUpdateManyWithoutPinInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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