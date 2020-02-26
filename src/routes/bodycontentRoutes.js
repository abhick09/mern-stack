import {
  addnewBody,
  getBody,
  getBodywithID,
  updateBody,
  deleteBody
} from '../controllers/bodycontentController';

const bodyRoutes = app => {
  app
    .route('/content')
    .get((req, res, next) => {
      //middleware
      console.log(`request from ${req.originalUrl}`);
      console.log(`request from ${req.method}`);
      next();
    }, getBody)

    .post(addnewBody);

  app
    .route('/content/:_id')
    .get(getBodywithID)
    .put(updateBody)
    .delete(deleteBody);
};

export default bodyRoutes;
