# E-Store

E-Store is here to help you choose what you need (and perhaps, want). We use RESTful API with JSON formatted responses.

stack server:

Bcrypt
JWT
Express
PostgreSQL
Sequelize

stack client:

Vue
Bootstrap
HTML & CSS

you can check out the demo here https://e-store-24ed0.web.app/

below is e-store formatted server responses:

## Global Response

    - Response 500: Internal server error
        {
            "message": "Internal Server Error."
        }
    
    - Response 401: Unauthorized
        {
            "message": "Please login to access this page."
        }

    - Response 403: Forbidden
        {
            "message": "You don't have access to this."
        }

## User Routes

### POST /register : Create new user

    - Request Header
        Not required.

    - Request Body
        {
            "name": "<user's name>",
            "email": "<user's email>",
            "password": "<user's password>",
            "role": "<user's role>"
        }
    
    - Response 201: Created
        {   
            "id": "<created id by system>"
            "name": "<posted user's name>",
            "email": "<posted user's email>",
            "password": "<posted user's password>",
            "role": "<posted user's role>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }
   
    - Response 400: Bad Request
        {
            "message": [...] "<list of validation errors>"
        }

### POST /login : login to user's account

    - Request Header
        Not required.

    - Request Body
        {
            "email": "<user's email>",
            "password": "<user's password>"
        }
    
    - Response 200: OK
        {
            "access_token": "<user's token>"
        }
   
    - Response 400: Bad Request
        {
            "message": "Invalid Email or Password, please check again!"
        }

## Product Routes

### POST /products : Create new product

    - Request Header
        {
            "access_token":"<access token>"
        }


    - Request Body
        {
            "name": "<product's name>",
            "image_url": "<image of product>",
            "price": "<product's price>",
            "stock": "<product's stock>",
            "category": "<product's category>"
        }
    
    - Response 201: Created
        {
            "id": "<given id by system>",
            "name": "<product's name>",
            "image_url": "<image of product>",
            "price": "<product's price>",
            "stock": "<product's stock>",
            "category": "<product's category>",
            "BannerId" "<product's BannerId>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }
   
    - Response 400: Bad Request
        {
            "message": [...] "<list of validation errors>"
        }

### GET /products : show all products.

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Body
        Not required.
    
    - Response 200: OK
        [
            {
                "id": "<given id by system>",
                "name": "<product's name>",
                "image_url": "<image of product>",
                "price": "<product's price>",
                "stock": "<product's stock>",
                "category": "<product's category>",
                "BannerId" "<product's BannerId>",
                "createdAt": "<date given by system>",
                "updatedAt": "<date given by system>"
            },
            {
                "id": "<given id by system>",
                "name": "<product's name>",
                "image_url": "<image of product>",
                "price": "<product's price>",
                "stock": "<product's stock>",
                "category": "<product's category>",
                "BannerId" "<product's BannerId>",
                "createdAt": "<date given by system>",
                "updatedAt": "<date given by system>"
            },
            {
                "id": "<given id by system>",
                "name": "<product's name>",
                "image_url": "<image of product>",
                "price": "<product's price>",
                "stock": "<product's stock>",
                "category": "<product's category>",
                "BannerId" "<product's BannerId>",
                "createdAt": "<date given by system>",
                "updatedAt": "<date given by system>"
            }
        ]

### GET /products/:id : show a selected product based on id

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": "<selected product's id>"
        }

    - Request Body
        Not required.
    
    - Response 200: OK
        {
            "id": "<given id by system>",
            "name": "<product's name>",
            "image_url": "<image of product>",
            "price": "<product's price>",
            "stock": "<product's stock>",
            "category": "<product's category>",
            "BannerId" "<product's BannerId>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }
   
    - Response 404: Not Found
        {
            message: "Can't find the data."
        }

### PUT /products/:id : update a product

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": "<selected product's id>"
        }

    - Request Body
        {
            "name": "<product's name>",
            "image_url": "<image of product>",
            "price": "<product's price>",
            "stock": "<product's stock>",
            "category": "<product's category>"
        }
    
    - Response 200: OK
        {
            "id": "<given id by system>",
            "name": "<updated product's name>",
            "image_url": "<updated image of product>",
            "price": "<updated product's price>",
            "stock": "<updated product's stock>",
            "category": "<updated product's category>",
            "BannerId" "<product's BannerId>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }
    
    - Response 404: Not Found
        {
            message: "Can't find the data."
        }
   
    - Response 400: Bad Request
        {
            "message": [...] "<list of validation errors>"
        }
   
### DELETE /products/:id : delete a selected product based on id

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": "<selected product's id>"
        }

    - Request Body
        Not required.
    
    - Response 200: OK

        {
            "message": "Successfully delete product '<product's name>'!"
        }
   
    - Response 404: Not Found
        {
            "message": "Can't find the data."
        }

## Banner Routes

### POST /banners : Create new banner

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Body
        {
            "name": "<banner's name>",
            "image_url": "<image of banner>",
            "description": "<banner's description>",
            "status": "<banner's status>"
        }
    
    - Response 201: Created
        {
            "id": "<given id by system>",
            "name": "<banner's name>",
            "image_url": "<image of banner>",
            "description": "<banner's description>",
            "status": "<banner's status>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }
   
    - Response 400: Bad Request
        {
            "message": [...] "<list of validation errors>"
        }

### GET /banners : show all banners.

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Body
        Not required.
    
    - Response 200: OK
        [
            {
                "id": "<given id by system>",
                "name": "<banner's name>",
                "image_url": "<image of banner>",
                "description": "<banner's description>",
                "status": "<banner's status>",
                "createdAt": "<date given by system>",
                "updatedAt": "<date given by system>"
            },
            {
                "id": "<given id by system>",
                "name": "<banner's name>",
                "image_url": "<image of banner>",
                "description": "<banner's description>",
                "status": "<banner's status>",
                "createdAt": "<date given by system>",
                "updatedAt": "<date given by system>"
            },
           {
                "id": "<given id by system>",
                "name": "<banner's name>",
                "image_url": "<image of banner>",
                "description": "<banner's description>",
                "status": "<banner's status>",
                "createdAt": "<date given by system>",
                "updatedAt": "<date given by system>"
            }
        ]

### GET /banners/:id : show a selected banner based on id

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": "<selected banner's id>"
        }

    - Request Body
        Not required.
    
    - Response 200: OK
        {
            "id": "<given id by system>",
            "name": "<banner's name>",
            "image_url": "<image of banner>",
            "description": "<banner's description>",
            "status": "<banner's status>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }
   
    - Response 404: Not Found
        {
            message: "Can't find the data."
        }

### PUT /banners/:id : update a banner

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": "<selected banner's id>"
        }

    - Request Body
        {
            "name": "<banner's name>",
            "image_url": "<image of banner>",
            "description": "<banner's description>",
            "status": "<banner's status>"
        }
    
    - Response 200: OK
        {
            "id": "<given id by system>",
            "name": "<updated banner's name>",
            "image_url": "<updated image of banner>",
            "description": "<updated banner's description>",
            "status": "<updated banner's status>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }
    
    - Response 404: Not Found
        {
            message: "Can't find the data."
        }
   
    - Response 400: Bad Request
        {
            "message": [...] "<list of validation errors>"
        }
   
### DELETE /banners/:id : delete a selected banner based on id

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": "<selected banner's id>"
        }

    - Request Body
        Not required.
    
    - Response 200: OK

        {
            "message": "Successfully delete banner '<banner's name>'!"
        }
   
    - Response 404: Not Found
        {
            "message": "Can't find the data."
        }


## Cart Routes

### GET /carts: to get all carts data

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        Not required.

    - Request Body
        Not required.

    - Response 200: OK
        [
            {
                "id": "<cart's id given by system>",
                "UserId": "<user's id>",
                "ProductId": "<product's id>",
                "status": "<status cart>",
                "quantity": "<cart's quantity>",
                "createdAt": "<date given by system>",
                "updatedAt": "<date given by system>",
                "Product": {
                    "id": "<given id by system>",
                    "name": "<product's name>",
                    "image_url": "<image of product>",
                    "price": "<product's price>",
                    "stock": "<product's stock>",
                    "category": "<product's category>",
                    "BannerId" "<product's BannerId>",
                    "createdAt": "<date given by system>",
                    "updatedAt": "<date given by system>"
                }
            }
        ]
    
    - Response 404: Not Found
        {
            message: "Can't find the data."
        }

### PUT /carts: to update product's quantity 

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        Not required.

    - Request Body
        {
            "ProductId": "<cart's product id>",
            "quantity": "<cart's quantity>"
        }

    - Response 200: OK
        {
            "id": "<given id by system>",
            "name": "<product's name>",
            "image_url": "<image of product>",
            "price": "<product's price>",
            "stock": "<product's stock>",
            "category": "<product's category>",
            "BannerId" "<product's BannerId>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }

### DELETE /carts: to delete all data in cart

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        Not required.

    - Request Body
        Not required.

    - Response 200: OK
        {
            "message": "Successfully delete items from cart!"
        }

    - Response 404: Not Found
        {
            message: "Can't find the data."
        }

### DELETE /carts/:id: to delete one data in cart

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": "<selected cart's id>"
        }

    - Request Body
        Not required.

        - Response 200: OK
        {
            "message": "Successfully delete item from cart!"
        }

    - Response 404: Not Found
        {
            message: "Can't find the data."
        }

## POST /carts/:ProductId: add product to cart

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "ProductId": "<selected product's id>"
        }

    - Request Body
        {
            "quantity": "<cart's product quantity>"

    - Response 201: created
        {
            "id": "<cart's id given by system>",
            "UserId": "<user's id>",
            "ProductId": "<product's id>",
            "status": "<status cart>",
            "quantity": "<cart's quantity>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>",
        }

    - Response 200: OK
        {
            "id": "<cart's id given by system>",
            "UserId": "<user's id>",
            "ProductId": "<product's id>",
            "status": "<status cart>",
            "quantity": "<cart's quantity>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>",
        }


