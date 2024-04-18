import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    fullName: {
        type: String,
        require: [true, "Full Name is required !"],
    },
    userId: {
        type: String,
        lowecase: true,
        unique: [true, "Not available ! Try with a new one.."],
        require: [true, "User ID is required !"],
    },
    password: {
        type: String,
        require: [true, "Full Name is required !"],
    },
    email: {
        type: String,
        unique: true,
        require: [true, "Full Name is required !"],
        minLength: 10,
        lowercase
    },
    userType: {
        type: String,
        require: true,
        default: ["CUSTOMER"],
        enum: ["CUSTOMER", "ADMIN"]
    },



}, {timestamps: true})


export const User = mongoose.model("User", userSchema)