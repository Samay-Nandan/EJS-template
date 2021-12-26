import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

export default mongoose.model('Blog', blogSchema);