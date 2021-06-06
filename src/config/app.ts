export default (): {
  /** @default 'http://localhost:300' */
  APP_URL: string;
} => {
  process.env.NODE_DEBUG = process.env.API_DEBUG_LEVEL?.toUpperCase();
  return {
    APP_URL: process.env.APP_URL ?? 'http://localhost:300',
  };
};
