const ugle_cart = require('./index.js');
/* 
    The console output will begin with [X] EXPECTED if the behavior is expected and [ ] UNEXPECTED if the behavior is unexpected.
 
    If the package is functioning as it should, the entirety of the terminal output from this program will begin with [X].
*/
var err_count = 0;




(async () => {
    return new Promise((resolve) => {

        ugle_cart.initDtb('./test.db', (err, dtb) => {
            if (err) {
                console.log(`[ ] UNEXPECTED FAIL | new sqlite3.Database | ${err.message}`);
                err_count++;
                resolve(null);
            } else {
                console.log('[X] EXPECTED PASS | new sqlite3.Database');
                dtb.exec('DROP TABLE IF EXISTS products;');
                resolve(dtb);
            }
        })
    });
})().then(async (dtb) => {

    // createProduct
    var args = [
        // valid input
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 2468,
                'name': 'Poke a ball',
                'price': 99.99,
                'description_short': 'Something to help your monster sleep',
                'description_long': 'A cool ball to keep your monsters in.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'price': 599.99,
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
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
                'description_short': 'Something to help your monster heal',
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
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'created_at': `${new Date}`,
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_by': 'the ugle-cart testing script'
            }
        },
        {
            'params': {
                'sku': 654321,
                'name': 'Super Potion',
                'price': 599.99,
                'description_short': 'Something to help your monster heal',
                'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
                'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
                'created_at': `${new Date}`,
            }
        },

    ];
    for (let i = 0; i < args.length; i++) {
        await ugle_cart.createProduct(dtb, args[i], (err) => {
            if (i <= 1) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | createProduct[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | createProduct[${i}]`);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | createProduct[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | createProduct[${i}]`);
                    err_count++;
                }
            }
        });
    }



    // readProduct
    var args = [
        // valid input
        {
            'fields': 'sku, name, price',
            'key': 'sku',
            'value': 654321
        },
        {
            'fields': 'sku, name, price',
            'key': 'sku',
            'value': '654321'
        },

        // strings
        {
            'fields': 'sku OR 1=1',
            'key': 'sku',
            'value': '654321'
        },
        {
            'fields': 'sku, name, price',
            'key': 'sku OR 1=1',
            'value': '654321'
        },

        // integers
        {
            'fields': 8,
            'key': 'sku',
            'value': 654321
        },
        {
            'fields': 'sku, name, price',
            'key': 8,
            'value': 'Super Potion'
        },

        // objects
        {
            'fields': {},
            'key': 'sku',
            'value': 654321
        },
        {
            'fields': 'sku, name, price',
            'key': {},
            'value': 'Super Potion'
        },
        {
            'fields': 'sku, name, price',
            'key': 'sku',
            'value': {}
        },

        // arrays
        {
            'fields': [],
            'key': 'sku',
            'value': 654321
        },
        {
            'fields': 'sku, name, price',
            'key': [],
            'value': 'Super Potion'
        },
        {
            'fields': 'sku, name, price',
            'key': 'sku',
            'value': []
        },

        // null
        {
            'fields': null,
            'key': 'sku',
            'value': 654321
        },
        {
            'fields': 'sku, name, price',
            'key': null,
            'value': 'Super Potion'
        },
        {
            'fields': 'sku, name, price',
            'key': 'sku',
            'value': null
        },

        // undefined
        {
            'fields': undefined,
            'key': 'sku',
            'value': 654321
        },
        {
            'fields': 'sku, name, price',
            'key': undefined,
            'value': 'Super Potion'
        },
        {
            'fields': 'sku, name, price',
            'key': 'sku',
            'value': undefined
        },

        // absent
        {

            'key': 'sku',
            'value': 654321
        },
        {
            'fields': 'sku, name, price',

            'value': 'Super Potion'
        },
        {
            'fields': 'sku, name, price',
            'key': 'sku',

        },

    ];
    for (let i = 0; i < args.length; i++) {
        await ugle_cart.readProduct(dtb, args[i], (err) => {
            if (i <= 1) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | readProduct[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | readProduct[${i}]`);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | readProduct[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | readProduct[${i}]`);
                    err_count++;
                }
            }
        });
    }



    // updateProduct
    var args = [
        // valid input
        {
            'field': 'sku',
            'param': 123456,
            'key': 'sku',
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'Hyper Potion',
            'key': 'name',
            'value': 'Super Potion'
        },
        // strings

        // integers
        {
            'field': 8,
            'param': 123456,
            'key': 'sku',
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'Hyper Potion',
            'key': 8,
            'value': 'Super Potion'
        },

        // objects
        {
            'field': {},
            'param': 123456,
            'key': 'sku',
            'value': 654321
        },
        {
            'field': 'name',
            'param': {},
            'key': 'name',
            'value': 'Super Potion'
        },
        {
            'field': 'sku',
            'param': 123456,
            'key': {},
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'Hyper Potion',
            'key': 'name',
            'value': {}
        },

        // arrays
        {
            'field': [],
            'param': 123456,
            'key': 'sku',
            'value': 654321
        },
        {
            'field': 'name',
            'param': [],
            'key': 'name',
            'value': 'Super Potion'
        },
        {
            'field': 'sku',
            'param': 123456,
            'key': [],
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'Hyper Potion',
            'key': 'name',
            'value': []
        },

        // null
        {
            'field': null,
            'param': 123456,
            'key': 'sku',
            'value': 654321
        },
        {
            'field': 'name',
            'param': null,
            'key': 'name',
            'value': 'Super Potion'
        },
        {
            'field': 'sku',
            'param': 123456,
            'key': null,
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'Hyper Potion',
            'key': 'name',
            'value': null
        },

        // undefined
        {
            'field': undefined,
            'param': 123456,
            'key': 'sku',
            'value': 654321
        },
        {
            'field': 'name',
            'param': undefined,
            'key': 'name',
            'value': 'Super Potion'
        },
        {
            'field': 'sku',
            'param': 123456,
            'key': undefined,
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'Hyper Potion',
            'key': 'name',
            'value': undefined
        },

        // absent
        {
            'param': 123456,
            'key': 'sku',
            'value': 654321
        },
        {
            'field': 'name',
            'key': 'name',
            'value': 'Super Potion'
        },
        {
            'field': 'sku',
            'param': 123456,
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'Hyper Potion',
            'key': 'name',
        },

        // SQL injection
        {
            'field': 'sku',
            'param': 123456,
            'key': 'sku OR 1=1',
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'receipts.products Hyper Potion',
            'key': 'name',
            'value': 'Super Potion'
        },

    ];
    for (let i = 0; i < args.length; i++) {
        await ugle_cart.updateProduct(dtb, args[i], (err) => {
            if (i <= 1) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | updateProduct[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | updateProduct[${i}]`);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | updateProduct[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | updateProduct[${i}]`);
                    err_count++;
                }
            }
        });
    }



    // addProductToCart
    var args = [
        // valid input
        {
            'key': 'sku',
            'value': 123456,
            'quantity': 8,
            'cart': [],
        },
        {
            'key': 'name',
            'value': 'Poke a ball',
            'quantity': 8,
            'cart': [],
        },
        // strings

        // integers

        // objects

        // arrays

        // null

        // undefined

        // absent

    ]
    for (let i = 0; i < args.length; i++) {
        await ugle_cart.addProductToCart(dtb, args[i], (err, cart) => {
            if (i <= 1) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | addProductToCart[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | addProductToCart[${i}]`);
                    console.log(cart)
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | addProductToCart[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | addProductToCart[${i}]`);
                    err_count++;
                }
            }
        });
    }



    // deleteProduct
    var args = [
        // valid input
        {
            'key': 'sku',
            'value': 123456
        },
        {
            'key': 'name',
            'value': 'Poke a ball'
        },
        // strings

        // integers
        {
            'key': 8,
            'value': 654321
        },

        // objects
        {
            'key': {},
            'value': 654321
        },
        {
            'key': 'name',
            'value': {}
        },

        // arrays
        {
            'key': [],
            'value': 654321
        },
        {
            'key': 'name',
            'value': []
        },

        // null
        {
            'key': null,
            'value': 654321
        },
        {
            'key': 'name',
            'value': null
        },

        // undefined
        {
            'key': undefined,
            'value': 654321
        },
        {
            'key': 'name',
            'value': undefined
        },

        // absent
        {
            'value': 654321
        },
        {
            'key': 'name',
        },

    ];
    for (let i = 0; i < args.length; i++) {
        await ugle_cart.deleteProduct(dtb, args[i], (err) => {
            if (i <= 1) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | deleteProduct[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | deleteProduct[${i}]`);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | deleteProduct[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | deleteProduct[${i}]`);
                    err_count++;
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


    console.log();
    console.log();
    console.log();
    console.log();
    console.log(`TEST COMPLETED: ${err_count} errors found`);
});