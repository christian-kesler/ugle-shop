async function initDatabase(dtb) {
    console.log('--> verifying database configuration. . . ');
    // await dtb.exec('DROP TABLE products')
    await dtb.exec(
        `CREATE TABLE IF NOT EXISTS products(
        'sku' VARCHAR(255) PRIMARY KEY UNIQUE,
        'name' VARCHAR(255),
        'price' VARCHAR(255),
        'description_short' VARCHAR(255),
        'description_long' TEXT,
        'image_alpha' TEXT,
        'image_beta' TEXT,
        'image_gamma' TEXT,
        'image_delta' TEXT,
        'created_at' DATETIME,
        'created_by' VARCHAR(255)
        );`
    );

    console.log('--> database configuration verified.');

}

async function functionBegin(func, dtb) {
    console.log('================================================================');
    await initDatabase(dtb);
    console.log(`-> ${func} has been initiated:`);
}
function functionEnd(func) {
    console.log(`-> ${func} is completed.`);
    console.log('================================================================');
}

module.exports = {

    createProduct: (dtb, fields) => {

        /* fields object
        
        var fields = {
            sku: "",
            name: "",
            price: "",
            description_short: "",
            description_long: "",
            image_alpha: "",
            image_beta: "",
            image_gamma: "",
            image_delta: "",
            created_at: "",
            created_by: "",
        }
        
        */
        return new Promise(async (resolve) => {

            functionBegin('createProduct', dtb);

            await dtb.run('INSERT INTO products(sku, name, price, description_short, description_long, image_alpha, image_beta, image_gamma, image_delta, created_at, created_by) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [
                fields.sku,
                fields.name,
                fields.price,
                fields.description_short,
                fields.description_long,
                fields.image_alpha,
                fields.image_beta,
                fields.image_gamma,
                fields.image_delta,
                fields.created_at,
                fields.created_by,
            ], (err) => {
                if (err) {
                    console.log(err.message);

                    functionEnd('createProduct');
                    resolve('createProduct-failed');
                } else {
                    functionEnd('createProduct');
                    resolve('createProduct-successful');
                }
            });
        });
    },

    deleteProduct: (dtb, sku) => {

        return new Promise(async (resolve) => {

            functionBegin('deleteProduct', dtb);

            await dtb.run(`DELETE FROM products WHERE sku = ${sku};`, [], (err) => {
                if (err) {
                    console.log(err.message);

                    functionEnd('deleteProduct');
                    resolve({
                        'redirect': 'deleteProduct-failed'
                    });
                } else {
                    functionEnd('deleteProduct');
                    resolve({
                        'redirect': 'deleteProduct-successful'
                    });
                }
            });
        });
    },

    findProductBySku: (dtb, sku) => {

        return new Promise(async (resolve) => {

            functionBegin('findProductBySku', dtb);

            await dtb.get(`SELECT * FROM products WHERE sku = '${sku}'`, [], (err, row) => {
                if (err) {
                    console.log(err.message);

                    functionEnd('findProductBySku');
                    resolve({
                        'redirect': 'findProductBySku-failed',
                        'data': null
                    });
                } else {
                    if (row.sku != undefined) {

                        functionEnd('findProductBySku');
                        resolve({
                            'redirect': 'findProductBySku-successful',
                            'data': row
                        });
                    } else {

                        functionEnd('findProductBySku');
                        resolve({
                            'redirect': 'findProductBySku-failed',
                            'data': null
                        });
                    }
                }
            });
        });
    },

    addToCart: (dtb, sku, quantity, cart) => {

        functionBegin('addToCart', dtb);

        return new Promise(async (resolve) => {

            var product = await this.findProductBySku(sku);

            if (product.data == null) {
                resolve(product);
            } else {
                var found = false;

                if (Array.isArray(cart)) {
                    cart.forEach((item) => {
                        if (item.sku == sku) {
                            found = true;
                            item.quantity == item.quantity + quantity;
                        }
                    });

                    if (found == true) {

                        functionEnd('addToCart');
                        resolve({
                            'redirect': 'addToCart-successful',
                            'data': cart,
                            'code': 'item-quantity-updated'
                        });
                    } else {
                        cart.push({
                            'sku': product.sku,
                            'name': product.name,
                            'price': product.price,
                            'quantity': quantity
                        });

                        functionEnd('addToCart');
                        resolve({
                            'redirect': 'addToCart-successful',
                            'data': cart,
                            'code': 'new-item-added'
                        });
                    }
                } else {
                    cart = [];

                    cart.push({
                        'sku': product.sku,
                        'name': product.name,
                        'price': product.price,
                        'quantity': quantity
                    });

                    functionEnd('addToCart');
                    resolve({
                        'redirect': 'addToCart-successful',
                        'data': cart,
                        'code': 'new-cart-created'
                    });
                }
            }

        });

    },

    listProducts: (dtb) => {

        return new Promise(async (resolve) => {

            await dtb.all('SELECT * FROM products', [], (err, rows) => {
                if (err) {
                    console.log(err.message);

                    functionEnd('listProducts');
                    resolve({
                        'redirect': 'listProducts-failed',
                        'data': null
                    });
                } else {
                    functionEnd('listProducts');
                    resolve({
                        'redirect': 'listProducts-successful',
                        'data': rows
                    });
                }
            });
        });
    },

};