import { Schema } from "mongoose";

export const customerSchema: Schema = new Schema({
    createdAt: { type: Date, default: Date.now },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: false },

});