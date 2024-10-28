import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
clerkId:{type:String,required:true,unique:true},
firstName:{type:String,required:true},
lastName:{type:String,required:true},username:{type:String,required:true},
email:{type:String,required:true},profilePhoto:{type:String,required:true},
posts:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],
defaults:[]},

savedPosts:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],
defaults:[]},
likedPosts:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],
defaults:[]},
followers:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],defaults:[]},
following:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],defaults:[]},
createdAt:{type:Date,default:Date.now},

});
const User=mongoose.models.User||mongoose.models('User',UserSchema)

export default User;