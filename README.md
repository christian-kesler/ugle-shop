# ugle-shop

An ecommerce package for NodeJS web apps using SQLite


## Installation

    npm install ugle-shop


## Dependencies

You will probably be able to use this package with older or newer versions than these, but I know these work for sure.  

    "dependencies": {
        "sqlite3": "5.1.2",
    }


## Usage


### Loading package

    const ugle_shop = require('ugle-shop')


### Connecting to Database

    await ugle_shop.initDtb('./database.db', (err, dtb) => {
        if (err) {
            console.log(err.message);
        } else {
            global.dtb = dtb;
        }
    })


### Functions and Arguments


    createProduct
        dtb - [object] database connection
        args - [object]
            sku - [string || number]
            name - [string] 
            price - [number]
            description_short - [string]
            description_long - [string] 
            images - [string]
            created_at - [string]
            created_by - [string]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured


    readProduct
        dtb - [object], database connection
        sku - [number]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            data - [object] contains product data


    updateProduct
        dtb - [object], database connection
        args - [object]
            field - [string]
            param - [string || number]
            value - [string]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            changes - [object]


    deleteProduct           (dtb, sku,  callback(err, changes))
        dtb - [object], database connection
        sku - [string || number]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            data - [object]


    allProducts
        dtb - [object], database connection
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            data - [array object]





    addToCart
        dtb - [object], database connection
        args - [object]
            sku - [string || number]
            qty - [number]
            cart - [array object]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            cart - [array object]


    removeFromCart
        dtb - [object], database connection
        args - [object]
            sku - [string || number]
            qty - [number]
            cart - [array object]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            cart - [array object]


    setCartQty
        dtb - [object], database connection
        args - [object]
            sku - [string || number]
            qty - [number]
            cart - [array object]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            cart - [array object]


    emptyCart
        dtb - [object], database connection
        cart - [array object]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            cart - [array object]


    checkoutCart
        dtb - [object], database connection
        args - [object]
            cart - [array object]
            time - [string]
            user - [string]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            cart - [array object]





    readReceipt
        dtb - [object], database connection
        id - [number || string]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            data - [object]


    confirmReceipt   
        dtb - [object], database connection
        args - [object]
            id - [string || number]
            time - [string]
            user - [string]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            data - [object]


    rejectReceipt          
        dtb - [object], database connection
        args - [object]
            id - [string || number]
            time - [string]
            user - [string]
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            data - [object]


    allReceipts            
        dtb - [object], database connection
        callback - [function]
            err - [object] null if function is successful
                message - [string] describes the error that occured
            data - [object]


## Security


### Billing Information

This package DOES NOT handle sensitive billing information such as credit cards.  


### User Information

The user information handled here does not extend beyond a single string used to identify the creator of a receipt, and using the user's email or username is recommended.  