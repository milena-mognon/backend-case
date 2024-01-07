const fs = require('fs');
const path = require('path');
const uploadConfig = require('../config/MulterUploadConfig');

/** Implementação de Armazenamento em disco - segue a "interface" StorageProvider */
const DiskStorageProvider = () => {
  const saveFile = async (filename) => {
    try {
      await fs.promises.copyFile(
        path.resolve(uploadConfig.tmpFolder, filename),
        path.resolve(uploadConfig.uploadsFolder, filename),
      );

      fs.unlinkSync(path.resolve(uploadConfig.tmpFolder, filename));
    } catch (error) {
      throw new Error('Ocorreu um erro ao fazer o upload do arquivo!');
    }

    return filename;
  };

  const deleteFile = async (filename) => {
    const filePath = path.resolve(uploadConfig.uploadsFolder, filename);

    try {
      await fs.promises.stat(filePath);
      await fs.promises.unlink(filePath);
    } catch (error) {
      throw new Error('Ocorreu um erro ao deletar o arquivo!');
    }
  };

  return {
    saveFile,
    deleteFile,
  };
};

module.exports = DiskStorageProvider;
