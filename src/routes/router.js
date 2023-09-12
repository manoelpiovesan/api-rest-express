const router = require('express').Router();

///
///
///
const userController = require('../controllers/userController');


///
/// Rota principal
///
router.get('/', (req, res) => {
    res.send('Hello World');
});


///
/// Rotas de usuário
///
router.route('/user').post((req,res)=>userController.create(req,res));

router.route('/user').get((req,res)=>userController.read(req,res));

router.route('/user/:id').put((req,res)=>userController.update(req,res));

router.route('/user/:id').delete((req,res)=>userController.delete(req,res));


///
///
///
module.exports = router;   