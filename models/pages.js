import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const pagesSchema = new mongoose.Schema({
    shortname: String,
    title: String,
    content: String,
    enabled: { type: Boolean, default: true }
}, { timestamps: true })

delete mongoose.models.Pages;
const Pages = mongoose.model("Pages", pagesSchema)

export default Pages