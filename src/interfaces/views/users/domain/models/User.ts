import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: Date,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
});


UserSchema.methods.toJSON = function () {
    const { __v, createdAt, updatedAt, ...user } = this.toObject();
    return user;
}

export default model('User', UserSchema);