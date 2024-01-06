const { randomUUID } = require('node:crypto');
// const { mongoose } = require('../../../mongoose');
const { mongoose, Schema } = require('mongoose');

const documentSchema = new mongoose.Schema(
  {
    _id: {
      type: Schema.Types.UUID,
      required: true,
      default: () => randomUUID(),
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    keywords: [String],
  },
  { timestamps: true },
);

const DocumentModel = mongoose.model('Document', documentSchema);

module.exports = DocumentModel;
