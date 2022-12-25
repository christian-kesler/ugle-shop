const ugle_cart = require('./index.js');
/* 
    The console output will begin with [X] EXPECTED if the behavior is expected and [ ] UNEXPECTED if the behavior is unexpected.
 
    If the package is functioning as it should, the entirety of the terminal output from this program will begin with [X].
*/




(async () => {
    return new Promise((resolve) => {

        ugle_cart.initDtb('./test.db', (err, dtb) => {
            if (err) {
                console.log(`[ ] UNEXPECTED FAIL | new sqlite3.Database | ${err.message}`);
                resolve(null);
            } else {
                console.log('[X] EXPECTED PASS | new sqlite3.Database');
                dtb.exec('DROP TABLE IF EXISTS products;');
                resolve(dtb);
            }
        })
    });
})().then(async (dtb) => {


    var args = [
        // valid strings
        {
            'params': {
                'sku': 987654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
    ];
    for (let i = 0; i < args.length; i++) {
        await ugle_cart.createProduct(dtb, args[i], (err) => {
            if (i <= 1) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | createProduct[${i}] | ${err.message}`);
                } else {
                    console.log(`[X] EXPECTED PASS | createProduct[${i}]`);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | createProduct[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | createProduct[${i}]`);
                }
            }
        });
    }


});