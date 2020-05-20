import type { O } from 'ts-toolbelt';

/**
 * General variant for typed functions.
 */
export type AnyFunc<A extends any = any, R extends any = any> = (
  ...args: A[]
) => R;

export type AnyObj<V extends any = any> = {
  [key: string]: V;
  [key: number]: V;
};

export type Default<T1, T2> = T1 extends T2 ? T1 : T2;

export type DefaultProps<T1 extends object, T2 extends object> = Required<
  O.Merge<T1, T2>
>;

export interface AnyClass {
  new (...args: any[]): any;
}

export type As<T, Type> = T extends Type ? T : never;

export type AsObject<T> = As<T, object>;

export type Params<T extends AnyFunc> = Parameters<T>;
