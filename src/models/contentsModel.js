import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const contentSchema = new Schema({
  name: {
    type: String,
    required: 'Enter name'
  },
  title: {
    type: String
  },
  content: {
    type: String
  }
});
