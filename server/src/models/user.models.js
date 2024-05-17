import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    profilePicture: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw2Q9f-vdDjI_lmuoMTSfaAU&ust=1716056262834000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiFq_SllYYDFQAAAAAdAAAAABAE"
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;