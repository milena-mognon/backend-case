const { randomUUID } = require('node:crypto');
const { mongoose, Schema } = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: Schema.Types.UUID,
      required: true,
      default: () => randomUUID(),
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
