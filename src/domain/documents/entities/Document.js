const { randomUUID } = require('node:crypto');

const newDocument = ({
  title,
  description,
  owner_id,
  keywords,
  id = randomUUID(),
}) => {
  return {
    id,
    title,
    description,
    owner_id,
    keywords,
    created_at: new Date(),
    updated_at: new Date(),
  };
};

module.exports = newDocument;
