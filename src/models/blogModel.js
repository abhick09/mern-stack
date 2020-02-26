import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const blogSchema = new Schema({
  firstname: {
    type: String,
    required: 'Enter first name'
  },
  lastname: {
    type: String,
    required: 'Enter last name'
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created_data: {
    type: Date,
    default: Date.now
  }
});
