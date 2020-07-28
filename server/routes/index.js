const router = require(`express`).Router()
const productRoutes = require(`./product`)
const bannerRoutes = require(`./banner`)
const cartRoutes = require(`./cart`)
const {authentication, authorization} = require(`../middlewares/auth`)
const UserController = require(`../controllers/UserController`)


router.post(`/register`, UserController.register)
router.post(`/login`, UserController.login)
router.use(authentication)
router.use(`/carts`, cartRoutes)
router.use(`/products`, authorization, productRoutes)
router.use(`/banners`, authorization, bannerRoutes)

module.exports = router
