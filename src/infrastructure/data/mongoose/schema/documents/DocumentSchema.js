const { randomUUID } = require('node:crypto');
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
    owner_id: {
      type: Schema.Types.UUID,
      ref: 'users',
      required: true,
    },
    related_files: [
      {
        _id: {
          type: Schema.Types.UUID,
          required: true,
          default: () => randomUUID(),
        },
        filename: {
          type: String,
          required: true,
        },
      },
    ],
    keywords: [String],
  },
  { timestamps: true },
);

const DocumentModel = mongoose.model('Document', documentSchema);

module.exports = DocumentModel;
