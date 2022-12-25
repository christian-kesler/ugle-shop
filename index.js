/*
================================================================
ugle-cart
----------------
functions overview

    createProduct           (dtb, args, callback(err))
    readProduct             (dtb, args, callback(err, data))
    updateProduct           (dtb, args, callback(err, changes))
    deleteProduct           (dtb, args, callback(err, changes))
    allProducts             (dtb, callback(err, data))

    addProductToCart        (dtb, args, callback(err, cart))
    removeProductFromCart   (dtb, args, callback(err, cart))
    deleteCart              (dtb, args, callback(err, cart))
    checkoutCart            (dtb, args, callback(err, cart))

    readReceipt             (dtb, args, callback(err, data))
    confirmReceipt          (dtb, args, callback(err, changes))
    rejectReceipt           (dtb, args, callback(err, changes))
    allReceipts             (dtb, callback(err, data))

----------------
function parameters
    dtb - variable representing sqlite database connection
    args - object containing varying information necessary for each function
        fields - string containing the database fields to write to
            "email, hash, created_at, created_by"
        params - the values to be written into the database
            email - variable
            password - variable
            salt - variable
        key - variable containing the field to index
            (id || email || created_at || created_by)
        value - variable containing the value to search for
            ${varies}
        cart - array object containing 

    callback - executed upon completion of the package function
        err - null if successful, object if function failed
            message - descriptive string of what went wrong, taken from sqlite when possible
        data/changes - object containing sqlite data, database changes, or relevant object data if successful, null if function failed
================================================================
*/




/*
    Import Statements - BEGIN
*/
// const sqlite3 = require(__dirname + '/../sqlite3')
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
                'cart' TEXT,
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

function validSku(input) {
    try {
        if (!containsQuotes(input) && input.length >= 8 && input.length <= 16) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
function containsQuotes(field) {
    try {
        if (
            field.includes('\'') ||
            field.includes('"') ||
            field.includes('`') ||
            field.includes('\'') ||
            field.includes('"') ||
            field.includes('`') ||
            field.includes('\'') ||
            field.includes('"') ||
            field.includes('`')
        ) {
            // console.log('input contains quotes')
            return true;
        } else {
            return false;
        }
    } catch (err) {
        // console.log(err.message)
        return true;
    }
}
function allValuesAreStrings(input) {

    if (typeof input === 'object' && input !== null) {
        if (Object.keys(input).length === 0) {
            return false;
        } else {
            for (const key of Object.keys(input)) {
                if (!allValuesAreStrings(input[key])) {
                    return false;
                }
            }
        }
    } else if (typeof input !== 'string' || input == null || typeof input == 'undefined') {
        return false;
    }

    return true;
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
                        callback(err)
                        resolve();
                    } else {
                        callback(null, dtb)
                        resolve();
                    }
                });

            } catch (err) {
                callback(err)
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

                // verifying argument structure
                if (args.params === undefined) {
                    callback({
                        message: 'params is undefined'
                    });
                    resolve();
                } else if (typeof args.params != 'object') {
                    callback({
                        message: `params must be object, received ${typeof args.params}`
                    });
                    resolve();


                } else if (args.params.sku === undefined) {
                    callback({
                        message: 'params.sku is undefined'
                    });
                    resolve();
                } else if (args.params.name === undefined) {
                    callback({
                        message: 'params.name is undefined'
                    });
                    resolve();
                } else if (args.params.price === undefined) {
                    callback({
                        message: 'params.price is undefined'
                    });
                    resolve();
                } else if (args.params.description_short === undefined) {
                    callback({
                        message: 'params.description_short is undefined'
                    });
                    resolve();
                } else if (args.params.description_long === undefined) {
                    callback({
                        message: 'params.description_long is undefined'
                    });
                    resolve();
                } else if (args.params.images === undefined) {
                    callback({
                        message: 'params.images is undefined'
                    });
                    resolve();
                } else if (args.params.created_at === undefined) {
                    callback({
                        message: 'params.created_at is undefined'
                    });
                    resolve();
                } else if (args.params.created_by === undefined) {
                    callback({
                        message: 'params.created_by is undefined'
                    });
                    resolve();
                    // type validation


                } else if (typeof args.params.sku != 'number') {
                    callback({
                        message: `params.sku must be number, received ${typeof args.params.sku}`
                    });
                    resolve();
                } else if (typeof args.params.name != 'string') {
                    callback({
                        message: `params.name must be string, received ${typeof args.params.name}`
                    });
                    resolve();
                } else if (typeof args.params.price != 'number') {
                    callback({
                        message: `params.price must be number, received ${typeof args.params.price}`
                    });
                    resolve();
                } else if (typeof args.params.description_short != 'string') {
                    callback({
                        message: `params.description_short must be string, received ${typeof args.params.description_short}`
                    });
                    resolve();
                } else if (typeof args.params.description_long != 'string') {
                    callback({
                        message: `params.description_long must be string, received ${typeof args.params.description_long}`
                    });
                    resolve();
                } else if (typeof args.params.images != 'string') {
                    callback({
                        message: `params.images must be string, received ${typeof args.params.images}`
                    });
                    resolve();
                } else if (typeof args.params.created_at != 'string') {
                    callback({
                        message: `params.created_at must be string, received ${typeof args.params.created_at}`
                    });
                    resolve();
                } else if (typeof args.params.created_by != 'string') {
                    callback({
                        message: `params.created_by must be string, received ${typeof args.params.created_by}`
                    });
                    resolve();
                } else {

                    dtb.run(`INSERT INTO products(sku, name, price, description_short, description_long, images, created_at, created_by) VALUES(?, ?, ?, ?, ?, ?, ?, ?);`, [
                        args.params.sku,
                        args.params.name,
                        args.params.price,
                        args.params.description_short,
                        args.params.description_long,
                        JSON.stringify(args.params.images),
                        args.params.created_at,
                        args.params.created_by,
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
    readProduct: async (dtb, args, callback) => {
        // TODO testing
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {

                tryCreateTables(dtb);

                if (args.fields === undefined) {
                    callback({
                        message: 'fields is undefined'
                    });
                    resolve();
                } else if (typeof args.fields != 'string') {
                    callback({
                        message: `fields must be string, received ${typeof args.fields}`
                    });
                    resolve();
                } else if (args.key === undefined) {
                    callback({
                        message: 'key is undefined'
                    });
                    resolve();
                } else if (typeof args.key != 'string') {
                    callback({
                        message: `key must be string, received ${typeof args.key}`
                    });
                    resolve();
                } else if (args.value === undefined) {
                    callback({
                        message: 'value is undefined'
                    });
                    resolve();
                } else if (typeof args.value != 'string' && typeof args.value != 'number') {
                    callback({
                        message: `value must be string, received ${typeof args.value}`
                    });
                    resolve();

                } else {

                    dtb.all(
                        `SELECT ${args.fields} FROM products WHERE ${args.key} = ?;`,
                        [args.value],
                        (err, rows) => {
                            if (err) {

                                callback({
                                    message: err.message
                                });
                                resolve();

                            } else if (rows.length == 0) {

                                callback({
                                    message: 'entry not found'
                                });
                                resolve();

                            } else {

                                callback(null, rows);
                                resolve();

                            }
                        }
                    );

                }
            } catch (err) {

                callback({
                    message: 'CATCH ERROR ' + err.message
                });
                resolve();

            }
        });
    },
    updateProduct: async (dtb, args, callback) => {
        // TODO testing
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {

                if (!allValuesAreStrings(args)) {

                    callback({
                        message: 'non-string values detected'
                    });
                    resolve();

                } else if (args.field === undefined ||
                    args.params === undefined ||
                    args.params.data === undefined ||
                    args.key === undefined ||
                    args.value === undefined
                ) {

                    callback({
                        message: 'missing args'
                    });
                    resolve();

                } else {

                    dtb.run(`UPDATE products SET ${args.field} = ? WHERE ${args.key} = ?;`, [args.params.data, args.value], async function (err) {
                        if (err) {

                            callback({
                                message: err.message,
                            });
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

                callback({
                    message: err.message
                });
                resolve();

            }
        });
    },
    deleteProduct: async (dtb, args, callback) => {
        // TODO testing
        await tryCreateTables(dtb);

        return new Promise((resolve) => {
            try {
                if (!allValuesAreStrings(args)) {

                    callback({
                        message: 'non-string values detected'
                    });
                    resolve();

                } else if (
                    args.key === undefined ||
                    args.value === undefined
                ) {

                    callback({
                        message: 'missing args'
                    });
                    resolve();

                } else {

                    dtb.run(`DELETE FROM products WHERE ${args.key} = ?;`, [args.value], async function (err) {
                        if (err) {

                            callback({
                                message: err.message,
                            });
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

                callback({
                    message: err.message
                });
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
    addProductToCart: async (dtb, args, callback) => {
        return new Promise((resolve) => {
            try {

                if (
                    args == undefined ||
                    args.product == undefined ||
                    args.product.sku == undefined ||
                    args.product.name == undefined ||
                    args.product.price == undefined ||
                    args.cart == undefined
                ) {

                } else {
                    // add to cart


                }
            } catch (err) {
                callback(err)
                resolve()
            }

        })
        // (err, cart)
    },
    removeProductFromCart: async (dtb, args, callback) => {
        // (err, cart)
    },
    deleteCart: async (dtb, args, callback) => {
        // (err, cart)
    },
    checkoutCart: async (dtb, args, callback) => {
        // (err, cart)
    },
    /*
            Cart Management functions - END
    */
    /*
        functionName: async (dtb, args, callback) => { } - END
    */


    /*
        functionName: async (dtb, callback) => { } - BEGIN
    */
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
        functionName: async (dtb, callback) => { }- END
    */
};
/*
    Public Functions - END
*/