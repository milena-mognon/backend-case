const newDocument = ({ title, description, owner_id, keywords }) => {
  return {
    title,
    description,
    owner_id,
    keywords,
    created_at: new Date(),
    updated_at: new Date(),
  };
};

module.exports = newDocument;
