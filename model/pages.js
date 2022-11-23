import React from 'react'
import mongoose from 'mongoose'

const pageSchema = new mongoose.Schema({
    shortname: String,
    title: String,
    content: String,
    enabled: Boolean
}, { timestamps: true })

const pages = mongoose.model("pages", pageSchema)

export default pageSchema