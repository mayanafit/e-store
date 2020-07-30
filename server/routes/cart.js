const router = require(`express`).Router()
const CartController = require(`../controllers/CartController`)
const {authorizationCustomer, authentication} = require(`../middlewares/auth`)

router.use(authentication)  
router.get(`/`, CartController.read)
router.put(`/`, CartController.editStock)
router.delete(`/`, CartController.deleteAll)
router.post(`/:ProductId`, CartController.add)
router.delete(`/:id`, authorizationCustomer, CartController.delete)

module.exports = router