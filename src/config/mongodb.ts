export default (): {
  BASE: string;
  USER: string;
  PASSWORD: string;
} => {
  return {
    BASE: process.env.MONGODB_NAME ?? '',
    USER: process.env.MONGODB_USER ?? '',
    PASSWORD: process.env.MONGODB_PASSWORD ?? '',
  };
};
