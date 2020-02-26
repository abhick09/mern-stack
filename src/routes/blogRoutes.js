import {
  addnewBlog,
  getBlog,
  getBlogwithID,
  updateBlog,
  deleteBlog
} from '../controllers/blogController';

const routes = app => {
  app
    .route('/contact')
    .get((req, res, next) => {
      //middleware
      console.log(`request from ${req.originalUrl}`);
      console.log(`request from ${req.method}`);
      next();
    }, getBlog)

    .post(addnewBlog);

  app
    .route('/contact/:firstname')
    .get(getBlogwithID)
    .put(updateBlog)
    .delete(deleteBlog);
};

export default routes;
