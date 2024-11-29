const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {isEmail} = require('validator')



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Enter an email'],
        unique: true,
        lowercase: true,
        validator: [isEmail, 'Enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Min length of password is 6']
    },
    role: {
        type: String,
        required: [true, "select a role"],
        enum: ["Job-Seeker" , "Employer"]
    }
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();

})



userSchema.statics.login =  async function(email, password)
{
    const user = await this.findOne({email});
    if(user)
    {
       const isAuth = await bcrypt.compare(password, user.password);
       if(isAuth)
       {
        return user;
       }
       throw Error('incorrect password')

    }
    else{
        throw Error('incorrect email')
    }
}

userSchema.methods.changePassword = async function(email, oldpassword, newpassword) {
    const user = await User.findOne({ email });
    if (!user) {
        throw Error('User not found');
    }




    const match = await bcrypt.compare(oldpassword, user.password)
    if (!match) {
        throw Error("Incorrect Password")
    }
    console.log(newpassword)
    user.password = newpassword;
    await user.save();
    return `Password sucessfully updated`
}

userSchema.methods.deleteAccount = async function(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
        throw Error('User not found');
    }

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
        throw Error('Incorrect password');
    }

    await User.findByIdAndDelete(user._id);

    return 'Successfully deleted account';
};

const User = mongoose.model('user', userSchema);
module.exports = User; 