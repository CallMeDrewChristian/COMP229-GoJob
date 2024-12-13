const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [false, 'Enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Enter a valid email']
    },
    password: {
        type: String,
        required: [false, 'Please enter a password'],
        minlength: [6, 'Minimum length of password is 6 characters']
    },
    role: {
        type: String,
        required: [true, 'Select a role'],
        enum: ['Job Applicant', 'Employer']
    },
    firstName: {
        type: String,
        required: [true, 'Enter your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Enter your last name']
    },
    address: {
        type: String,
        required: [true, 'Enter your address']
    },
    dateOfBirth: {
        type: Date,
        required: function () {
            return this.role === 'jobapplicant';
        }
    },
    phoneNumber: {
        type: String,
        required: [true, 'Enter your phone number']
    },
    educationLevel: {
        type: String,
        required: function () {
            return this.role === 'jobapplicant';
        }
    },
    jobPosition: {
        type: String,
        required: function () {
            return this.role === 'employer';
        }
    },
    company: {
        type: String,
        required: function () {
            return this.role === 'employer';
        }
    },
    companyWebsite: {
        type: String,
        validate: {
            validator: function (v) {
                return v === '' || /^https?:\/\/\S+\.\S+/.test(v);
            },
            message: 'Enter a valid URL'
        }
    },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
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

const User = mongoose.model('User', userSchema);
module.exports = User;
