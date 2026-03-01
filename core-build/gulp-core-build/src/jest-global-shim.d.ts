/**
 * Shim for NodeJS.Global which was removed in @types/node@16+.
 *
 * The @jest/types@25.5.0 package references NodeJS.Global in its type definitions
 * (Global.d.ts and Config.d.ts), which causes compilation errors with @types/node@18.
 * This was fixed upstream in Jest 27 by replacing NodeJS.Global with typeof globalThis.
 *
 * @see {@link https://github.com/jestjs/jest/issues/11640}
 */
declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Global {}
}
