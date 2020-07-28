const router = require(`express`).Router()
const CartController = require(`../controllers/CartController`)

router.get(`/`, CartController.read)
router.delete(`/`, CartController.deleteAll)
router.post(`/:id`, CartController.add)
router.delete(`/:id`, CartController.delete)

module.exports = router