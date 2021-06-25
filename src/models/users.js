const {Schema,model}=require('mongoose');
const bcrypt= require('bcrypt');
const UserSchema = new Schema({
    name:{type:'String',required: true},
    email:{type:'String',required: true},
    password:{type:'String',required: true}
},{
    timestamps: true
});

UserSchema.methods.encrypPassword=async password=>{
    const salt =await bcrypt.hasgenSalt(10);
    return await bcrypt.hash(password, salt);
}

UserSchema.methods.matchPassword=async matchPassword=>{
    return await bcript.compare(password, this.password);
}

module.exports=model('User',UserSchema);

