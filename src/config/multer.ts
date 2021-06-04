export default (): {
  /** @default '' */
  AWS_ACCESS_KEY_ID: string;
  /** @default '' */
  AWS_SECRET_ACCESS_KEY: string;
  /** @default '' */
  AWS_ENDPOINT: string
  /** @default '' */
  AWS_DEFAULT_REGION: string
  /** @default '' */
  AWS_BUCKET_NAME: string
} => {
  process.env.NODE_DEBUG = process.env.API_DEBUG_LEVEL?.toUpperCase();
  return {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID ?? '',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY ?? '',
    AWS_ENDPOINT: process.env.AWS_ENDPOINT ?? '',
    AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION ?? '',
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME ?? '',
  };
};
