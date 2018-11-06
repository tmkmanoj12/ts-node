import mongoose = require('mongoose')
import { Model, Document } from "mongoose";
import { customerSchema } from "../schemas/customer-schema";
import { Customer as ICustomer } from "../../interfaces/dal/customer-interface";

export interface customerModel extends ICustomer, Document { }

export interface customerModelStatic extends Model<customerModel> { }

const name = "hoasd"
export const Customer = mongoose.model<customerModel, customerModelStatic>('customer', customerSchema)