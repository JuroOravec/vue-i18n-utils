declare module 'generate-schema' {
  export function clickhouse(...args: any): string;
  export function bigquery(...args: any): any;
  export function json(...args: any): any;
  export function generic(...args: any): any;
  export function mongoose(...args: any): any;
  export function mysql(...args: any): string;
}
