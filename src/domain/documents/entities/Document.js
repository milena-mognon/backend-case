const { randomUUID } = require('node:crypto');

const newDocument = ({
  title,
  description,
  owner_id,
  keywords,
  related_files = [],
  id = randomUUID(),
}) => {
  return {
    id,
    title,
    description,
    owner_id,
    keywords,
    related_files: related_files.map((file) => {
      return {
        filename: file.filename,
        id: file?.id ?? file?._id ?? randomUUID(),
      };
    }),
  };
};

module.exports = newDocument;
