import mongoose = require('mongoose')
import { Document, Model } from "mongoose";
import { userSchema } from "../schemas/user-schema";
import { User as IUser } from "../../interfaces/dal/user-interface";

export interface userModel extends IUser, Document { }
export interface staticUserModel extends Model<userModel> { }
export const User = mongoose.model<userModel, staticUserModel>('user', userSchema)