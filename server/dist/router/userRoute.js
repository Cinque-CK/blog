const userController = require('../controller/userController');
module.exports = router => {
    router.get('/user', userController.getUsers);
    router.post('/user/register', userController.register);
    router.post('/user/login', userController.login);
};
//# sourceMappingURL=userRoute.js.map