const { Router } = require('express');
const controller = require('../controllers/userControllers');

function userRouter() {
  const router = Router();

  router
    .route('/')
    .get(controller.loadUser)
    .post(controller.createUser)
    .put(controller.updateUser)
    .delete(controller.deleteUser);

  return router;
}

module.exports = userRouter();
