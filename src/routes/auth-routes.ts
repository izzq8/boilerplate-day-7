const router = require('express').Router();

const authController = require('../controllers/auth-controller');

// GET /api/auth/register (testing only - menampilkan info endpoint)
router.get('/register', (req: any, res: any) => {
  res.json({
    message: 'Register endpoint - gunakan POST method',
    method: 'POST',
    endpoint: '/api/auth/register',
    body: {
      name: 'string',
      email: 'string', 
      password: 'string',
      role: 'student | admin'
    }
  });
});

// POST /api/auth/register
router.post('/register', authController.register);

// GET /api/auth/login (testing only)
router.get('/login', (req: any, res: any) => {
  res.json({
    message: 'Login endpoint - gunakan POST method',
    method: 'POST', 
    endpoint: '/api/auth/login',
    body: {
      email: 'string',
      password: 'string'
    }
  });
});

// POST /api/auth/login
router.post('/login', authController.login);

module.exports = router;
