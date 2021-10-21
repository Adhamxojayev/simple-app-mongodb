const router = require('express').Router()
const POST = require('./auth/post.js')

router
    .route('/post')
    .post(POST.CREATE)
    .get(POST.READ)
    .put(POST.UPDATE)
    .delete(POST.DELETE)


module.exports = router