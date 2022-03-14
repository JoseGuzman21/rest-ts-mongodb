import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: Date
});


PostSchema.methods.toJSON = function () {
    const { __v, createdAt, updatedAt, ...post } = this.toObject();
    return post;
  }

export default model('Post', PostSchema);