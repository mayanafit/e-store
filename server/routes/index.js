const router = require(`express`).Router()
const productRoutes = require(`./product`)
const bannerRoutes = require(`./banner`)
const cartRoutes = require(`./cart`)
const UserController = require(`../controllers/UserController`)


router.post(`/register`, UserController.register)
router.post(`/login`, UserController.login)
router.use(`/carts`, cartRoutes)
router.use(`/products`, productRoutes)
router.use(`/banners`, bannerRoutes)

module.exports = router
