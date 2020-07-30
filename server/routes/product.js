const router = require(`express`).Router()
const ProductController = require(`../controllers/ProductController`)
const {authentication, authorization} = require(`../middlewares/auth`)

router.get(`/`, ProductController.read)
router.get(`/:id`, ProductController.find)
router.use(authentication)
router.use(authorization)
router.post(`/`, ProductController.new)
router.put(`/:id`, ProductController.edit)
router.delete(`/:id`, ProductController.delete)


module.exports = router