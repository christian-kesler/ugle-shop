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
        // valid input
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        // strings
        {
            'params': 'bad string'
        },

        {
            'params': {
                'sku': '654321',
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': '599.99',
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },

        // integers
        {
            'params': 8
        },
        {
            'params': {
                'sku': 654321,
                'name': 8,
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 8,
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 8,
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': 8,
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': 8,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 8
            }
        },
        // objects
        {
            'params': {}
        },
        {
            'params': {
                'sku': {},
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': {},
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': {},
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': {},
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': {},
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': {},
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': {},
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': {}
            }
        },

        // arrays
        {
            'params': []
        },
        {
            'params': {
                'sku': [],
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': [],
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': [],
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': [],
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': [],
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': [],
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': [],
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': []
            }
        },

        // null
        {
            'params': null
        },
        {
            'params': {
                'sku': null,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': null,
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': null,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': null,
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': null,
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': null,
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': null,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': null
            }
        },
        // undefined
        {
            'params': undefined
        },
        {
            'params': {
                'sku': undefined,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': undefined,
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': undefined,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': undefined,
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': undefined,
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': undefined,
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': undefined,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': undefined
            }
        },
        // absent
        {
        },
        {
            'params': {
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
            }
        },

    ];
    for (let i = 0; i < args.length; i++) {
        await ugle_cart.createProduct(dtb, args[i], (err) => {
            if (i <= 0) {
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




    var args = [
        // valid input
        {
            'fields': 'sku, name, price',
            'key': 'sku',
            'value': 654321
        },
        {
            'fields': 'sku, name, price',
            'key': 'name',
            'value': 'Super Potion'
        },
        // strings
        {
            'fields': 'sku, name, price',
            'key': 'sku',
            'value': '654321'
        },

        {
            'params': {
                'sku': '654321',
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': '599.99',
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },

        // integers
        {
            'params': 8
        },
        {
            'params': {
                'sku': 654321,
                'name': 8,
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 8,
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 8,
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': 8,
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': 8,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 8
            }
        },
        // objects
        {
            'params': {}
        },
        {
            'params': {
                'sku': {},
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': {},
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': {},
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': {},
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': {},
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': {},
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': {},
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': {}
            }
        },

        // arrays
        {
            'params': []
        },
        {
            'params': {
                'sku': [],
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': [],
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': [],
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': [],
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': [],
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': [],
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': [],
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': []
            }
        },

        // null
        {
            'params': null
        },
        {
            'params': {
                'sku': null,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': null,
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': null,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': null,
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': null,
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': null,
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': null,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': null
            }
        },
        // undefined
        {
            'params': undefined
        },
        {
            'params': {
                'sku': undefined,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': undefined,
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': undefined,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': undefined,
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': undefined,
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': undefined,
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': undefined,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': undefined
            }
        },
        // absent
        {
        },
        {
            'params': {
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your pokemon heal',
                'description_long': 'A powerful potion that can heal your pokemon up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
            }
        },

    ];
    for (let i = 0; i < args.length; i++) {
        await ugle_cart.readProduct(dtb, args[i], (err) => {
            if (i <= 0) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | readProduct[${i}] | ${err.message}`);
                } else {
                    console.log(`[X] EXPECTED PASS | readProduct[${i}]`);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | readProduct[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | readProduct[${i}]`);
                }
            }
        });
    }

    ugle_cart.allProducts(dtb, (err, data) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log(data)
        }
    })


});