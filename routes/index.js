const router = require('express').Router()

router.use('/api', require('./exercisesRoutes.js'))

module.exports = router