const DiskStorageProvider = require('./DiskStorageProvider/DiskStorageProvider');

/** Se em algum momento for necessário mudar a implementação para armazenamento em um novo lugar,
 * basta trocar DiskStorageProvider pela outra implementação.
 * O código continuará funcionando desde que tenha seguido a "interface" StorageProvider
 * */
const StorageProvider = DiskStorageProvider;

module.exports = StorageProvider;
