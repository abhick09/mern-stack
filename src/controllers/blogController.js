import mongoose from 'mongoose';
import { blogSchema } from '../models/blogModel';

const Blog = mongoose.model('Blog', blogSchema);

export const addnewBlog = (req, res) => {
  let newBlog = new Blog(req.body);
  newBlog.save((err, blog) => {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
};

export const getBlog = (req, res) => {
  Blog.find({}, (err, blog) => {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
};

export const getBlogwithID = (req, res) => {
  Blog.findOne({ firstname: req.params.firstname }, (err, blog) => {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
};

export const updateBlog = (req, res) => {
  Blog.findOneAndUpdate(
    { firstname: req.params.firstname },
    req.body,
    {
      new: true
    },
    (err, blog) => {
      if (err) {
        res.send(err);
      }
      res.json(blog);
    }
  );
};

export const deleteBlog = (req, res) => {
  Blog.deleteOne({ firstname: req.params.firstname }, (err, blog) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Deleted' });
  });
};
