const router = require('express').Router();

const authenticationMiddleware = require('../middlewares/authentication-middleware');
const onlyAdminMiddleware = require('../middlewares/only-admin-middleware');
const onlyStudentMiddleware = require('../middlewares/only-student-middleware');
const userController = require('../controllers/user-controller');

// GET /api/users
router.get('/', userController.index);

// POST /api/users -> create user baru (hanya admin)
router.post('/', authenticationMiddleware, onlyAdminMiddleware, userController.create);

// GET /api/users/students
router.get(
  '/students',
  authenticationMiddleware,
  // onlyStudentMiddleware,
  userController.index,
);

// PATCH /api/users
router.patch('/', authenticationMiddleware, userController.update);

// DELETE /api/users/:id -> hanya boleh oleh ADMIN
router.delete(
  '/:id',
  authenticationMiddleware,
  onlyAdminMiddleware,
  userController.deleteById,
);

module.exports = router;
