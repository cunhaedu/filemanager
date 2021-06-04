import crypto from 'crypto';
import multer, { Multer } from 'multer';

/**
 * Instance of the multer middleware
 *
 * @param {number} size Size in Kilobytes, e.g 1024KB = 1 MB
 * @param {string[]} fileFormat
 * @param {string} path
 * @returns {Multer}
 */
export default (size: number, fileFormat: string[], path: string): Multer =>
  multer({
    limits: { fileSize: size * 1024 },
    storage: multer.diskStorage({
      destination: `${path}`,
      filename: (req, file, cb) => {
        const randomBytes = crypto.randomBytes(8).toString('hex');
        const fileType = file.originalname.split('.').slice(-1)[0];
        const fileName = `${randomBytes}-${Date.now()}.${fileType}`;

        cb(null, fileName);
      },
    }),
    fileFilter: (req, file, cb) => {
      const regex = new RegExp(`\\.(${fileFormat.join('|')})$`);
      if (!file.originalname.match(regex)) {
        return cb(new Error('Please, provide a image with a valid format!'));
      }

      return cb(null, true);
    },
  });
