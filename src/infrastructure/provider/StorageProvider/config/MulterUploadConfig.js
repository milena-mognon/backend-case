const multer = require('multer');
const { resolve, extname } = require('path');
const crypto = require('node:crypto');
const fs = require('node:fs');

const tmpFolder = resolve(__dirname, '..', '..', '..', '..', '..', 'tmp');

const uploadsFolder = resolve(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
  'uploads',
);

const uploadConfig = {
  driver: 'disk',
  tmpFolder,
  uploadsFolder,

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        /** Cria um nome único para o arquivo */
        const fileHash = crypto.randomBytes(20).toString('hex');
        /** filename passa a ser o valor único com a extensão do arquivo original */
        const fileName = `${fileHash}${extname(file.originalname)}`;

        return callback(null, fileName);
      },
    }),
  },
};

/**
 * Verifica se um diretório existe. Se não, cria.
 */
const checkDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
};

/**
 * verifica se o diretório tmp e upload existe
 */
const checkTmpDirAndUploadsDir = () => {
  checkDir(uploadConfig.tmpFolder);
  checkDir(uploadConfig.uploadsFolder);
};

checkTmpDirAndUploadsDir();

module.exports = uploadConfig;
