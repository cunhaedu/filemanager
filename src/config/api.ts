export default (): {
  /** @default 3333 */
  PORT: number;
  /** @default 'v1/UNKNOWN' */
  BASE_URL: string;
  /** @default 'false' */
} => {
  process.env.NODE_DEBUG = process.env.API_DEBUG_LEVEL?.toUpperCase();
  return {
    PORT: Number(process.env.API_REST_PORT ?? 3333),
    BASE_URL: process.env.API_BASE_URL ?? '/v1/UNKNOWN',
  };
};
