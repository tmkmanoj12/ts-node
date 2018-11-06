import { Schema } from "mongoose";

export interface User {
    firstName: string
    customer : Array<Schema.Types.ObjectId>
    lastName?: string
    lo: number,
    age?: number
    email?: string
    mobile?: string
    createdAt?: Date
}