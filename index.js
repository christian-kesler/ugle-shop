/*
================================================================
ugle-shop
----------------
functions and their arguments

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




================================================================
*/




/*
    Import Statements - BEGIN
*/
const sqlite3 = require('sqlite3');
/*
    Import Statements - END
*/


/*
    Private Functions - BEGIN
*/
async function tryCreateTables(dtb) {
    return new Promise((resolve) => {
        try {
            dtb.exec(
                `CREATE TABLE IF NOT EXISTS products(
                'sku' INTEGER PRIMARY KEY UNIQUE,
                'name' VARCHAR(255),
                'price' INTEGER,
                'description_short' VARCHAR(255),
                'description_long' TEXT,
                'images' TEXT,
                'created_at' DATETIME,
                'created_by' VARCHAR(255)
                );`
            );
            dtb.exec(
                `CREATE TABLE IF NOT EXISTS receipts(
                'id' INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                'total' INTEGER,
                'cart' TEXT,
                'status' VARCHAR(255),
                'created_at' DATETIME,
                'created_by' VARCHAR(255),
                'confirmed_at' DATETIME,
                'confirmed_by' VARCHAR(255),
                'rejected_at' DATETIME,
                'rejected_by' VARCHAR(255)
                );`
            );
            resolve();
        } catch (err) {
            // console.log(err.message);
            resolve();
        }
    });
}
/*
    Private Functions - END
*/


/*
    Public Functions - BEGIN
*/
module.exports = {
    /*
        Database Connection Function - BEGIN
    */
    initDtb: async (path, callback) => {
        return new Promise((resolve) => {
            try {

                const dtb = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        callback(err);
                        resolve();
                    } else {
                        callback(null, dtb);
                        resolve();
                    }
                });

            } catch (err) {
                callback(err);
                resolve();
            }
        });
    },
    /*
        Database Connection Function - END
    */


    /*
            CRUD product functions - BEGIN
    */
    createProduct: async (dtb, args, callback) => {
        // Testing Complete
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {

                tryCreateTables(dtb);

                if (args === undefined) {
                    callback({
                        message: 'args is undefined'
                    });
                    resolve();
                } else if (typeof args != 'object') {
                    callback({
                        message: `args must be object, received "${typeof args}"`
                    });
                    resolve();


                } else if (args.sku === undefined) {
                    callback({
                        message: 'args.sku is undefined'
                    });
                    resolve();
                } else if (typeof args.sku != 'string' && typeof args.sku != 'number') {
                    callback({
                        message: `args.sku must be string or number, received "${typeof args.sku}"`
                    });
                    resolve();


                } else if (args.name === undefined) {
                    callback({
                        message: 'args.name is undefined'
                    });
                    resolve();
                } else if (typeof args.name != 'string') {
                    callback({
                        message: `args.name must be string, received "${typeof args.name}"`
                    });
                    resolve();


                } else if (args.price === undefined) {
                    callback({
                        message: 'args.price is undefined'
                    });
                    resolve();
                } else if (typeof args.price != 'number') {
                    callback({
                        message: `args.price must be number, received "${typeof args.price}"`
                    });
                    resolve();


                } else if (args.description_short === undefined) {
                    callback({
                        message: 'args.description_short is undefined'
                    });
                    resolve();
                } else if (typeof args.description_short != 'string') {
                    callback({
                        message: `args.description_short must be string, received "${typeof args.description_short}"`
                    });
                    resolve();


                } else if (args.description_long === undefined) {
                    callback({
                        message: 'args.description_long is undefined'
                    });
                    resolve();
                } else if (typeof args.description_long != 'string') {
                    callback({
                        message: `args.description_long must be string, received "${typeof args.description_long}"`
                    });
                    resolve();


                } else if (args.images === undefined) {
                    callback({
                        message: 'args.images is undefined'
                    });
                    resolve();
                } else if (typeof args.images != 'string') {
                    callback({
                        message: `args.images must be string, received "${typeof args.images}"`
                    });
                    resolve();


                } else if (args.created_at === undefined) {
                    callback({
                        message: 'args.created_at is undefined'
                    });
                    resolve();
                } else if (typeof args.created_at != 'string') {
                    callback({
                        message: `args.created_at must be string, received "${typeof args.created_at}"`
                    });
                    resolve();


                } else if (args.created_by === undefined) {
                    callback({
                        message: 'args.created_by is undefined'
                    });
                    resolve();
                } else if (typeof args.created_by != 'string') {
                    callback({
                        message: `args.created_by must be string, received "${typeof args.created_by}"`
                    });
                    resolve();


                } else {

                    dtb.run('INSERT INTO products(sku, name, price, description_short, description_long, images, created_at, created_by) VALUES(?, ?, ?, ?, ?, ?, ?, ?);', [
                        args.sku,
                        args.name,
                        args.price,
                        args.description_short,
                        args.description_long,
                        args.images,
                        args.created_at,
                        args.created_by,
                    ], (err) => {
                        if (err) {

                            callback(err);
                            resolve();

                        } else {

                            callback(null);
                            resolve();

                        }
                    });
                }

            } catch (err) {
                callback(err);
                resolve();
            }
        });
    },
    readProduct: async (dtb, sku, callback) => {
        // Testing Complete
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {

                tryCreateTables(dtb);

                if (sku === undefined) {
                    callback({
                        message: 'sku is undefined'
                    });
                    resolve();
                } else if (typeof sku != 'string' && typeof sku != 'number') {
                    callback({
                        message: `sku must be string or number, received "${typeof sku}"`
                    });
                    resolve();

                } else {

                    dtb.all(
                        'SELECT * FROM products WHERE sku = ?;',
                        [sku],
                        (err, rows) => {
                            if (err) {

                                callback(err);
                                resolve();

                            } else if (rows.length == 0) {

                                callback({
                                    message: 'entry not found'
                                });
                                resolve();

                            } else {

                                callback(null, rows[0]);
                                resolve();

                            }
                        }
                    );

                }
            } catch (err) {

                callback(err);
                resolve();

            }
        });
    },
    updateProduct: async (dtb, args, callback) => {
        // Testing Complete
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {

                if (args.field === undefined) {
                    callback({
                        message: 'field is undefined'
                    });
                    resolve();
                } else if (typeof args.field != 'string') {
                    callback({
                        message: `field must be string, received "${typeof args.field}"`
                    });
                    resolve();


                } else if (args.param === undefined) {
                    callback({
                        message: 'param is undefined'
                    });
                    resolve();
                } else if (typeof args.param != 'string' && typeof args.param != 'number') {
                    callback({
                        message: `param must be string or number, received "${typeof args.param}"`
                    });
                    resolve();


                } else if (args.value === undefined) {
                    callback({
                        message: 'value is undefined'
                    });
                    resolve();
                } else if (typeof args.value != 'string' && typeof args.value != 'number') {
                    callback({
                        message: `value must be string or number, received "${typeof args.value}"`
                    });
                    resolve();

                } else {

                    let fields = [
                        'sku',
                        'name',
                        'price',
                        'description_short',
                        'description_long',
                        'images',
                        'created_at',
                        'created_by'
                    ];

                    let query = null;

                    fields.forEach(field => {
                        if (args.field == field) {
                            query = `UPDATE products SET ${args.field} = ? WHERE sku = ?;`;
                        }
                    });

                    if (query == null) {
                        callback({
                            message: `args.field is invalid, expected one of ${JSON.stringify(fields)}`
                        });
                        resolve();

                    } else {

                        dtb.run(query, [args.param, args.value], async function (err) {
                            if (err) {

                                callback(err);
                                resolve();
                            } else if (this.changes == 0) {

                                callback(
                                    {
                                        message: `Row(s) affected: ${this.changes}`
                                    },
                                    {
                                        count: this.changes,
                                        message: `Row(s) affected: ${this.changes}`
                                    }
                                );
                                resolve();
                            } else {

                                callback(
                                    null,
                                    {
                                        count: this.changes,
                                        message: `Row(s) affected: ${this.changes}`
                                    }
                                );
                                resolve();
                            }
                        });
                    }


                }

            } catch (err) {

                callback(err);
                resolve();

            }
        });
    },
    deleteProduct: async (dtb, sku, callback) => {
        // Testing Complete
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {


                if (sku === undefined) {
                    callback({
                        message: 'value is undefined'
                    });
                    resolve();
                } else if (typeof sku != 'string' && typeof sku != 'number') {
                    callback({
                        message: `sku must be string or number, received "${typeof sku}"`
                    });
                    resolve();

                } else {

                    dtb.run('DELETE FROM products WHERE sku = ?;', [sku], async function (err) {
                        if (err) {

                            callback(err);
                            resolve();

                        } else if (this.changes == 0) {

                            callback(
                                {
                                    message: `Row(s) affected: ${this.changes}`
                                },
                                {
                                    count: this.changes,
                                    message: `Row(s) affected: ${this.changes}`
                                }
                            );
                            resolve();

                        } else {

                            callback(
                                null,
                                {
                                    count: this.changes,
                                    message: `Row(s) affected: ${this.changes}`
                                }
                            );
                            resolve();

                        }
                    });

                }
            } catch (err) {

                callback(err);
                resolve();

            }
        });
    },
    allProducts: async (dtb, callback) => {
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {
                dtb.all('SELECT * FROM products;', [], (err, rows) => {
                    if (err) {
                        callback(err);
                        resolve();
                    } else {
                        callback(null, rows);
                        resolve();
                    }
                });
            } catch (err) {
                callback(err);
                resolve();
            }
        });
    },
    /*
            CRUD product functions - END
    */


    /*
            Cart Management functions - BEGIN
    */
    addToCart: async (dtb, args, callback) => {
        /* 
            args = {
                'sku':987654321,
                'qty':1,
                'cart':cart_obj
            }
        */
        return new Promise((resolve) => {
            try {

                if (args === undefined) {
                    callback({
                        message: 'args is undefined'
                    });
                    resolve();
                } else if (typeof args != 'object') {
                    callback({
                        message: `args must be object, received "${typeof args}"`
                    });
                    resolve();


                } else if (args.sku === undefined) {
                    callback({
                        message: 'sku is undefined'
                    });
                    resolve();
                } else if (typeof args.sku != 'string' && typeof args.sku != 'number') {
                    callback({
                        message: `args.sku must be string or number, received "${typeof args.sku}"`
                    });
                    resolve();


                } else if (args.qty === undefined) {
                    callback({
                        message: 'qty is undefined'
                    });
                    resolve();
                } else if (typeof args.qty != 'number') {
                    callback({
                        message: `qty must be number, received "${typeof args.qty}"`
                    });
                    resolve();


                } else if (args.cart === undefined) {
                    callback({
                        message: 'cart is undefined'
                    });
                    resolve();
                } else if (typeof args.cart != 'object' || !Array.isArray(args.cart)) {
                    callback({
                        message: `cart must be array object, received "${typeof args.cart}" (array = ${Array.isArray(args.cart)})`
                    });
                    resolve();


                } else {

                    let in_cart = false;
                    for (let i = 0; i < args.cart.length; i++) {
                        if (args.cart[i].sku == args.sku) {
                            in_cart = true;
                            args.cart[i].qty += args.qty;
                        }
                    }

                    if (in_cart) {
                        callback(null, args.cart);
                        resolve();

                    } else {
                        dtb.all(
                            'SELECT * FROM products WHERE sku = ?;',
                            [args.sku],
                            (err, rows) => {
                                if (err) {

                                    callback(err);
                                    resolve();

                                } else if (rows.length == 0) {

                                    callback({
                                        message: 'product not found'
                                    });
                                    resolve();

                                } else {

                                    args.cart.push({
                                        'sku': rows[0].sku,
                                        'name': rows[0].name,
                                        'price': rows[0].price,
                                        'qty': args.qty,

                                    });

                                    callback(null, args.cart);
                                    resolve();

                                }
                            }
                        );
                    }
                }
            } catch (err) {
                callback(err);
                resolve();
            }

        });
        // (err, cart)
    },
    removeFromCart: async (args, callback) => {
        /* 
            args = {
                'sku':987654321,
                'qty':1,
                'cart':req.session.cart
            }
        */
        return new Promise((resolve) => {
            try {

                if (args === undefined) {
                    callback({
                        message: 'args is undefined'
                    });
                    resolve();
                } else if (typeof args != 'object') {
                    callback({
                        message: `args must be object, received "${typeof args}"`
                    });
                    resolve();


                } else if (args.sku === undefined) {
                    callback({
                        message: 'sku is undefined'
                    });
                    resolve();
                } else if (typeof args.sku != 'string' && typeof args.sku != 'number') {
                    callback({
                        message: `args.sku must be string or number, received "${typeof args.sku}"`
                    });
                    resolve();


                } else if (args.qty === undefined) {
                    callback({
                        message: 'qty is undefined'
                    });
                    resolve();
                } else if (typeof args.qty != 'number') {
                    callback({
                        message: `qty must be number, received "${typeof args.qty}"`
                    });
                    resolve();


                } else if (args.cart === undefined) {
                    callback({
                        message: 'cart is undefined'
                    });
                    resolve();
                } else if (typeof args.cart != 'object' || !Array.isArray(args.cart)) {
                    callback({
                        message: `cart must be array object, received "${typeof args.cart}" (array = ${Array.isArray(args.cart)})`
                    });
                    resolve();


                } else {

                    let in_cart = false;
                    for (let i = 0; i < args.cart.length; i++) {
                        if (args.cart[i].sku == args.sku) {
                            in_cart = true;
                            args.cart[i].qty -= args.qty;
                            if (args.cart[i].qty == 0) {
                                args.cart.splice(i, 1);
                            }
                        }
                    }

                    if (!in_cart) {
                        callback({
                            'message': 'product not found within the cart'
                        });
                        resolve();

                    } else {
                        callback(null, args.cart);
                        resolve();

                    }
                }
            } catch (err) {
                callback(err);
                resolve();
            }

        });
    },
    emptyCart: async (cart, callback) => {

        return new Promise((resolve) => {
            try {

                if (cart === undefined) {
                    callback({
                        message: 'cart is undefined'
                    });
                    resolve();
                } else if (typeof cart != 'object' || !Array.isArray(cart)) {
                    callback({
                        message: `cart must be array object, received "${typeof cart}" (array = ${Array.isArray(cart)})`
                    });
                    resolve();
                } else {

                    let cart = [];

                    callback(null, cart);
                    resolve();
                }
            } catch (err) {
                callback(err);
                resolve();
            }
        });
    },
    checkoutCart: async (dtb, args, callback) => {
        /* 
            args = {
                'cart':req.session.cart
                'time':`${new Date}`,
                'user':req.session.email,
            }
        */
        return new Promise((resolve) => {
            try {

                if (args === undefined) {
                    callback({
                        message: 'args is undefined'
                    });
                    resolve();
                } else if (typeof args != 'object') {
                    callback({
                        message: `args must be object, received "${typeof args}"`
                    });
                    resolve();


                } else if (args.cart === undefined) {
                    callback({
                        message: 'cart is undefined'
                    });
                    resolve();
                } else if (typeof args.cart != 'object' || !Array.isArray(args.cart)) {
                    callback({
                        message: `cart must be array object, received "${typeof args.cart}" (array = ${Array.isArray(args.cart)})`
                    });
                    resolve();


                } else if (args.time === undefined) {
                    callback({
                        message: 'time is undefined'
                    });
                    resolve();
                } else if (typeof args.time != 'string') {
                    callback({
                        message: `time must be string, received "${typeof args.time}"`
                    });
                    resolve();


                } else if (args.user === undefined) {
                    callback({
                        message: 'user is undefined'
                    });
                    resolve();
                } else if (typeof args.user != 'string') {
                    callback({
                        message: `user must be string, received "${typeof args.user}"`
                    });
                    resolve();


                } else {

                    let total = 0;
                    for (let i = 0; i < args.cart.length; i++) {
                        total += (args.cart[i].price * args.cart[i].qty);
                    }

                    dtb.run('INSERT INTO receipts(total, cart, status, created_at, created_by) VALUES(?, ?, ?, ?, ?);', [
                        total,
                        JSON.stringify(args.cart),
                        'pending',
                        args.time,
                        args.user,
                    ], (err) => {
                        if (err) {

                            callback(err);
                            resolve();

                        } else {

                            let cart = [];

                            callback(null, cart);
                            resolve();

                        }
                    });
                }
            } catch (err) {
                callback(err);
                resolve();
            }

        });
    },
    /*
            Cart Management functions - END
    */


    /*
            Receipt Management functions - BEGIN
    */
    readReceipt: async (dtb, id, callback) => {
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {
                if (id === undefined) {
                    callback({
                        message: 'id is undefined'
                    });
                    resolve();
                } else if (typeof id != 'number') {
                    callback({
                        message: `id must be id, received "${typeof id}"`
                    });
                    resolve();
                } else {
                    dtb.all('SELECT * FROM receipts WHERE id = ?;', [id], (err, rows) => {
                        if (err) {
                            callback(err);
                            resolve();
                        } else {
                            callback(null, rows[0]);
                            resolve();
                        }
                    });
                }
            } catch (err) {
                callback(err);
                resolve();
            }
        });
    },
    confirmReceipt: async (dtb, args, callback) => {
        /* 
            args = {
                'id':1,
                'time':`${new Date}`,
                'user':req.session.email,
            }
        */
        return new Promise((resolve) => {
            try {

                if (args === undefined) {
                    callback({
                        message: 'args is undefined'
                    });
                    resolve();
                } else if (typeof args != 'object') {
                    callback({
                        message: `args must be object, received "${typeof args}"`
                    });
                    resolve();


                } else if (args.id === undefined) {
                    callback({
                        message: 'id is undefined'
                    });
                    resolve();
                } else if (typeof args.id != 'number' && typeof args.id != 'string') {
                    callback({
                        message: `id must be string or number, received "${typeof args.id}"`
                    });
                    resolve();


                } else if (args.time === undefined) {
                    callback({
                        message: 'time is undefined'
                    });
                    resolve();
                } else if (typeof args.time != 'string') {
                    callback({
                        message: `time must be string, received "${typeof args.time}"`
                    });
                    resolve();


                } else if (args.user === undefined) {
                    callback({
                        message: 'user is undefined'
                    });
                    resolve();
                } else if (typeof args.user != 'string') {
                    callback({
                        message: `user must be string, received "${typeof args.user}"`
                    });
                    resolve();


                } else {

                    dtb.run('UPDATE receipts SET status = ?, confirmed_at = ?, confirmed_by = ? WHERE id = ?;', ['confirmed', args.time, args.user, args.id], async function (err) {
                        if (err) {

                            callback(err);
                            resolve();
                        } else if (this.changes == 0) {

                            callback(
                                {
                                    message: `Row(s) affected: ${this.changes}`
                                },
                                {
                                    count: this.changes,
                                    message: `Row(s) affected: ${this.changes}`
                                }
                            );
                            resolve();
                        } else {

                            callback(
                                null,
                                {
                                    count: this.changes,
                                    message: `Row(s) affected: ${this.changes}`
                                }
                            );
                            resolve();
                        }
                    });

                }
            } catch (err) {
                callback(err);
                resolve();
            }

        });
    },
    rejectReceipt: async (dtb, args, callback) => {
        /* 
            args = {
                'id':1,
                'time':`${new Date}`,
                'user':req.session.email,
            }
        */
        return new Promise((resolve) => {
            try {

                if (args === undefined) {
                    callback({
                        message: 'args is undefined'
                    });
                    resolve();
                } else if (typeof args != 'object') {
                    callback({
                        message: `args must be object, received "${typeof args}"`
                    });
                    resolve();


                } else if (args.id === undefined) {
                    callback({
                        message: 'id is undefined'
                    });
                    resolve();
                } else if (typeof args.id != 'number' && typeof args.id != 'string') {
                    callback({
                        message: `id must be string or number, received "${typeof args.id}"`
                    });
                    resolve();


                } else if (args.time === undefined) {
                    callback({
                        message: 'time is undefined'
                    });
                    resolve();
                } else if (typeof args.time != 'string') {
                    callback({
                        message: `time must be string, received "${typeof args.time}"`
                    });
                    resolve();


                } else if (args.user === undefined) {
                    callback({
                        message: 'user is undefined'
                    });
                    resolve();
                } else if (typeof args.user != 'string') {
                    callback({
                        message: `user must be string, received "${typeof args.user}"`
                    });
                    resolve();


                } else {

                    dtb.run('UPDATE receipts SET status = ?, rejected_at = ?, rejected_by = ? WHERE id = ?;', ['rejected', args.time, args.user, args.id], async function (err) {
                        if (err) {

                            callback(err);
                            resolve();
                        } else if (this.changes == 0) {

                            callback(
                                {
                                    message: `Row(s) affected: ${this.changes}`
                                },
                                {
                                    count: this.changes,
                                    message: `Row(s) affected: ${this.changes}`
                                }
                            );
                            resolve();
                        } else {

                            callback(
                                null,
                                {
                                    count: this.changes,
                                    message: `Row(s) affected: ${this.changes}`
                                }
                            );
                            resolve();
                        }
                    });

                }
            } catch (err) {
                callback(err);
                resolve();
            }

        });
    },
    allReceipts: async (dtb, callback) => {
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {
                dtb.all('SELECT * FROM receipts;', [], (err, rows) => {
                    if (err) {
                        callback(err);
                        resolve();
                    } else {
                        callback(null, rows);
                        resolve();
                    }
                });
            } catch (err) {
                callback(err);
                resolve();
            }
        });
    },
    /*
            Receipt Management functions - END
    */


};
/*
    Public Functions - END
*/