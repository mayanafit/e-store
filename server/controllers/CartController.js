const {Cart} = require(`../models`)

class CartController {

    static read(req, res, next) {
        let UserId = req.user.id
        const error = {
            name: `otherError`,
            statusCode: 404,
            message: `Sorry can't find data.`
        }

        Cart.findAll({where: {UserId}, include: [`Product`, `User`], order: [['createdAt', 'ASC']]})
        .then((result) => {
            if (result) {
                res.status(200).json(result)
            } else {
                throw error
            }
        })
        .catch((err) => {
            next(err)
        })
    }

    static add(req, res, next) {
        let newCart = {
            UserId: req.user.id,
            ProductId: req.params.id,
            status: false
        }
        Cart.create(newCart)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            next(err)
        })
    }

    static delete(req, res, next) {
        let ProductId = req.params.id
        let UserId = req.user.id
        const error = {
            name: `otherError`,
            statusCode: 404,
            message: `Sorry can't find data.`
        }

        Cart.destroy({where: {UserId, ProductId}})
        .then((result) => {
            if (result === 0) {
                throw error
            } else {
                res.status(200).json({message: `Successfully delete item from cart!`})
            }
        })
        .catch((err) => {
            next(err)
        })
    }

    static deleteAll(req, res, next) {
        const error = {
            name: `otherError`,
            statusCode: 404,
            message: `Sorry can't find data.`
        }
        Cart.destroy({where: {}})
        .then((result) => {
            if (result === 0) {
                throw error
            } else {
                res.status(200).json({message: `Successfully delete all items from cart!`})
            }
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = CartController