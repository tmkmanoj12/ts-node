import { Schema } from "mongoose";

export const userSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    customers: [{ type: Schema.Types.ObjectId, ref: 'customer', required: false }],
    firstName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    createdAt1: { type: Date, default: Date.now },
}) 
