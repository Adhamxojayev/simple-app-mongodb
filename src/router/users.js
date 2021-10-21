const router = require('express').Router()
const Auth = require('./controller/auth.js')

router
    .route('/users')
    .post(Auth.CREATE)
    .get(Auth.READ)
    .put(Auth.UPDATE)
    .delete(Auth.DELETE)


module.exports = router