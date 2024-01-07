const { randomUUID } = require('node:crypto');
const ValidationError = require('../../shared/errors/ValidationError');

const newDocument = ({
  title,
  description,
  owner_id,
  keywords,
  related_files = [],
  id = randomUUID(),
}) => {
  validate({ title, owner_id });
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

const validate = ({ title, owner_id }) => {
  if (!title) {
    ValidationError('Title is required');
  }
  if (!owner_id) {
    ValidationError('Owner is required');
  }
};

module.exports = newDocument;
