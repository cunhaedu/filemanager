import ibmCloudStorage from '@config/multer';
import aws from 'aws-sdk';
import crypto from 'crypto';
import multer, { Multer } from 'multer';
import multerS3 from 'multer-s3';
import { join } from 'path';

const ibmCloudStorageConfig = ibmCloudStorage();

const storageS3 = new aws.S3({
  accessKeyId: ibmCloudStorageConfig.AWS_ACCESS_KEY_ID,
  secretAccessKey: ibmCloudStorageConfig.AWS_SECRET_ACCESS_KEY,
  endpoint: new aws.Endpoint(ibmCloudStorageConfig.AWS_ENDPOINT),
  region: ibmCloudStorageConfig.AWS_DEFAULT_REGION,
})

const storageTypes = {
  s3: multerS3({
    s3: storageS3,
    bucket: ibmCloudStorageConfig.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      const randomBytes = crypto.randomBytes(8).toString('hex');
      const fileType = file.originalname.split('.').slice(-1)[0];
      const fileName = `${randomBytes}-${Date.now()}.${fileType}`;

      cb(null, fileName);
    }
  }),
  local: multer.diskStorage({
    destination: join(process.cwd(), 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) cb(err, '');

        const fileType = file.originalname.split('.').slice(-1)[0];
        const key = `${hash.toString('hex')}-${Date.now()}.${fileType}`;

        cb(null, key);
      });
    },
  }),
}

/**
 * Instance of the multer middleware
 *
 * @param {number} size Size in Kilobytes, e.g 1024KB = 1 MB
 * @param {string[]} fileFormat
 * @returns {Multer}
 */
export default (size: number, fileFormat: string[]): Multer => {
  return multer({
    limits: { fileSize: size * 1024 },
    storage: ibmCloudStorageConfig.STORAGE_TYPE === 'local' ? storageTypes.local : storageTypes.s3,
    fileFilter: (req, file, cb) => {
      const regex = new RegExp(`\\.(${fileFormat.join('|')})$`);
      if (!file.originalname.match(regex)) {
        return cb(new Error('Please, provide a file with a valid format!'));
      }

      return cb(null, true);
    },
  });
}
