import { model, Schema } from 'mongoose';

export default model('File', new Schema(
  {
    id: { type: String },
    prefix: { type: String },
    key: { type: String },
    originalName: { type: String },
    type: { type: String },
    size: { type: Number },
    companyId: { type: Number },
    companyName: { type: String },
    partFile: { type: String },
    description: { type: String },
    deletedAt: {type: Date, default: null},
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    collection: 'File',
  }
));
