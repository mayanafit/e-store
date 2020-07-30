const {User, Cart} = require(`../models`)
const {decode} = require(`../helpers/jwt`)

const authentication = (req, res, next) => {
    let access_token = req.headers.access_token
    // console.log(access_token, `ini di auth`)
    let userData = decode(access_token)
    req.user = userData
    User.findByPk(userData.id)
    .then(result => {
        // console.log(result, `ini result di auth`)
        if (result) {
            next()
        }
    })
    .catch(err => {
        next(err)
    })
}

const authorization = (req, res, next) => {
    let error = {
        name: `otherError`,
        statusCode: 403,
        message: `You don't have access to this.`
    }
    let userRole = req.user.role
    if (userRole === `admin`) {
        next()
    } else {
        throw error
    }
}

const authorizationCustomer = (req, res, next) => {
    let id = req.params.id
    let UserId = req.user.id
    let error = {
        name: `otherError`,
        statusCode: 403,
        message: `Sorry you don't have access to this.`
    }

    Cart.findByPk(id)
    .then(data => {
        if (data) {
            if (data.UserId === UserId) {
                next()
            } else {
                throw error
            }
        } else {
            next()
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {authentication, authorization, authorizationCustomer}