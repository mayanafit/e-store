const router = require(`express`).Router()
const BannerController = require(`../controllers/BannerController`)
const {authentication, authorization} = require(`../middlewares/auth`)

router.get(`/`, BannerController.read)
router.get(`/:id`, BannerController.find)
router.use(authentication)
router.use(authorization)
router.post(`/`, BannerController.new)
router.put(`/:id`, BannerController.edit)
router.delete(`/:id`, BannerController.delete)


module.exports = router