import mongoose from 'mongoose';
import { contentSchema } from '../models/contentsModel';

const contentBody = mongoose.model('contentBody', contentSchema);

export const addnewBody = (req, res) => {
  let newcontentBody = new contentBody(req.body);
  newcontentBody.save((err, contentBody) => {
    if (err) {
      res.send(err);
    }
    res.json(contentBody);
  });
};

export const getBody = (req, res) => {
  contentBody.find({}, (err, contentBody) => {
    if (err) {
      res.send(err);
    }
    res.json(contentBody);
  });
};

export const getBodywithID = (req, res) => {
  contentBody.findOne({ _id: req.params._id }, (err, contentBody) => {
    if (err) {
      res.send(err);
    }
    res.json(contentBody);
  });
};

export const updateBody = (req, res) => {
  contentBody.findOneAndUpdate(
    { _id: req.params._id },
    req.body,
    {
      new: true
    },
    (err, contentBody) => {
      if (err) {
        res.send(err);
      }
      res.json(contentBody);
    }
  );
};

export const deleteBody = (req, res) => {
  contentBody.deleteOne({ _id: req.params._id }, (err, contentBody) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Deleted' });
  });
};
