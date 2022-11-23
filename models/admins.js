import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const adminsSchema = new mongoose.Schema({
    role: {
        type: String,
        default: "admin"
    },
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    logonCount: Number,
    enabled: Boolean
}, { timestamps: true })

delete mongoose.models.Admins;
const Admins = mongoose.model("Admins", adminsSchema)

export default Admins