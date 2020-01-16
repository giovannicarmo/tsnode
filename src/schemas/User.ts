import { Schema, model, Document } from 'mongoose';

interface User extends Document {
    email?: string,
    name?: string,
    lastname?: string
}

const UserSchema = new Schema(
  {
    email: String,
    name: String,
    lastname: String
  },
  {
    timestamps: true
  }
);

export default model<User>('User', UserSchema);
