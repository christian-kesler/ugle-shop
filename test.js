const ugle_shop = require('./index.js');
/* 
    The console output will begin with [X] EXPECTED if the behavior is expected and [ ] UNEXPECTED if the behavior is unexpected.
 
    If the package is functioning as it should, the entirety of the terminal output from this program will begin with [X].
*/
var err_count = 0;




(async () => {
    return new Promise((resolve) => {

        ugle_shop.initDtb('./test.db', (err, dtb) => {
            if (err) {
                console.log(`[ ] UNEXPECTED FAIL | new sqlite3.Database | ${err.message}`);
                err_count++;
                resolve(null);
            } else {
                console.log('[X] EXPECTED PASS | new sqlite3.Database');
                dtb.exec('DROP TABLE IF EXISTS products;');
                dtb.exec('DROP TABLE IF EXISTS receipts;');
                resolve(dtb);
            }
        });
    });
})().then(async (dtb) => {


    // global cart_arr array
    global.cart_arr = [];


    // args
    var createProduct_args = [
        // valid input
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 2468,
            'name': 'Poke a ball',
            'price': 99.99,
            'description_short': 'Something to help your monster sleep',
            'description_long': 'A cool ball to keep your monsters in.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        // strings
        {
            'params': 'bad string'
        },

        {

            'sku': '654321',
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': '599.99',
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },

        // integers
        {
            'params': 8
        },
        {

            'sku': 654321,
            'name': 8,
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 8,
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 8,
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': 8,
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': 8,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 8
        },
        // objects
        {
        },
        {

            'sku': {},
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': {},
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': {},
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': {},
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': {},
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': {},
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': {},
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': {}
        },

        // arrays
        {
            'params': []
        },
        {

            'sku': [],
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': [],
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': [],
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': [],
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': [],
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': [],
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': [],
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': []
        },

        // null
        {
            'params': null
        },
        {

            'sku': null,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': null,
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': null,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': null,
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': null,
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': null,
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': null,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': null
        },
        // undefined
        {
            'params': undefined
        },
        {

            'sku': undefined,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': undefined,
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': undefined,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': undefined,
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': undefined,
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': undefined,
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': undefined,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': undefined
        },
        // absent
        {
        },
        {

            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'created_at': `${new Date}`,
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_by': 'the ugle-shop testing script'
        },
        {

            'sku': 654321,
            'name': 'Super Potion',
            'price': 599.99,
            'description_short': 'Something to help your monster heal',
            'description_long': 'A powerful potion that can heal your monster up to 50 hit points.  Does not restore PP, does not cure status conditions, only restores hp.  ',
            'images': '["just pretend that this is a base64 image string","keep pretending on this one too"]',
            'created_at': `${new Date}`,
        },

    ];
    var readProduct_args = [
        // valid input
        654321,
        '654321',

        // strings

        // integers

        // objects
        {},

        // arrays
        [],
        // null
        null,

        // undefined
        undefined,

        // absent

    ];
    var updateProduct_args = [
        // valid input
        {
            'field': 'sku',
            'param': 123456,
            'value': 654321
        },
        {
            'field': 'name',
            'param': 'Hyper Potion',
            'value': '123456'
        },
        // strings

        // integers
        {
            'field': 8,
            'param': 123456,
            'value': 654321
        },

        // objects
        {
            'field': {},
            'param': 123456,
            'value': 654321
        },
        {
            'field': 'name',
            'param': {},
            'value': '654321'
        },
        {
            'field': 'sku',
            'param': 123456,
            'value': {}
        },

        // arrays
        {
            'field': [],
            'param': 123456,
            'value': 654321
        },
        {
            'field': 'name',
            'param': [],
            'value': '654321'
        },
        {
            'field': 'sku',
            'param': 123456,
            'value': []
        },

        // null
        {
            'field': null,
            'param': 123456,
            'value': 654321
        },
        {
            'field': 'name',
            'param': null,
            'value': '654321'
        },
        {
            'field': 'sku',
            'param': 123456,
            'value': null
        },

        // undefined
        {
            'field': undefined,
            'param': 123456,
            'value': 654321
        },
        {
            'field': 'name',
            'param': undefined,
            'value': '654321'
        },
        {
            'field': 'sku',
            'param': 123456,
            'value': undefined
        },

        // absent
        {
            'param': 123456,
            'value': 654321
        },
        {
            'field': 'name',
            'value': '654321'
        },
        {
            'field': 'sku',
            'param': 123456,
        },

    ];
    var deleteProduct_args = [
        // valid input
        123456,
        '2468',

        // strings

        // integers

        // objects
        {},

        // arrays
        [],
        // null
        null,

        // undefined
        undefined,

        // absent

    ];

    var addToCart_args = [
        // valid input
        {
            'sku': '2468',
            'qty': 8,
            'cart': cart_arr,
        },
        {
            'sku': 123456,
            'qty': 4,
            'cart': cart_arr,
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': cart_arr,
        },
        {
            'sku': 123456,
            'qty': 4,
            'cart': cart_arr,
        },

        // strings
        {
            'sku': '2468',
            'qty': '8',
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': 4,
            'cart': '[]',
        },

        // integers
        {
            'sku': '2468',
            'qty': 8,
            'cart': 8,
        },
        // floats
        {
            'sku': 6516.546,
            'qty': 8,
            'cart': cart_arr,
        },
        {
            'sku': '2468',
            'qty': 8.45,
            'cart': cart_arr,
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': 9841.58,
        },

        // objects
        {
            'sku': {},
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': {},
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': {},
        },

        // arrays
        {
            'sku': [],
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': [],
            'cart': [],
        },

        // null
        {
            'sku': null,
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': null,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': null,
        },

        // undefined
        {
            'sku': undefined,
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': undefined,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': undefined,
        },

        // absent
        {
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
        },

    ];
    var removeFromCart_args = [
        // valid input
        {
            'sku': '2468',
            'qty': 8,
            'cart': cart_arr,
        },
        {
            'sku': 123456,
            'qty': 4,
            'cart': cart_arr,
        },
        // strings
        {
            'sku': '2468',
            'qty': '8',
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': 4,
            'cart': '[]',
        },

        // integers
        {
            'sku': '2468',
            'qty': 8,
            'cart': 8,
        },

        // floats
        {
            'sku': 6516.546,
            'qty': 8,
            'cart': cart_arr,
        },
        {
            'sku': '2468',
            'qty': 8.45,
            'cart': cart_arr,
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': 9841.58,
        },

        // objects
        {
            'sku': {},
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': {},
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': {},
        },

        // arrays
        {
            'sku': [],
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': [],
            'cart': [],
        },

        // null
        {
            'sku': null,
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': null,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': null,
        },

        // undefined
        {
            'sku': undefined,
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': undefined,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': undefined,
        },

        // absent
        {
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
        },

    ];
    var setCartQty_args = [
        // valid input
        {
            'sku': '2468',
            'qty': 8,
            'cart': cart_arr,
        },
        {
            'sku': 123456,
            'qty': 4,
            'cart': cart_arr,
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': cart_arr,
        },
        {
            'sku': 123456,
            'qty': 4,
            'cart': cart_arr,
        },

        // strings
        {
            'sku': '2468',
            'qty': '8',
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': 4,
            'cart': '[]',
        },

        // integers
        {
            'sku': '2468',
            'qty': 8,
            'cart': 8,
        },

        // floats
        {
            'sku': 6516.546,
            'qty': 8,
            'cart': cart_arr,
        },
        {
            'sku': '2468',
            'qty': 8.45,
            'cart': cart_arr,
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': 9841.58,
        },

        // objects
        {
            'sku': {},
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': {},
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': {},
        },

        // arrays
        {
            'sku': [],
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': [],
            'cart': [],
        },

        // null
        {
            'sku': null,
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': null,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': null,
        },

        // undefined
        {
            'sku': undefined,
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'qty': undefined,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
            'cart': undefined,
        },

        // absent
        {
            'qty': 8,
            'cart': [],
        },
        {
            'sku': 123456,
            'cart': [],
        },
        {
            'sku': '2468',
            'qty': 8,
        },

    ];
    var emptyCart_args = [
        // valid input
        cart_arr,

        // strings
        'cart',

        // integers
        8,

        // objects
        {},

        // arrays

        // null
        null,

        // undefined
        undefined,

        // absent

    ];
    var checkoutCart_args = [
        // valid input
        {
            'cart': cart_arr,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },

        // strings
        {
            'cart': 'cart',
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },

        // integers
        {
            'cart': 8,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': 8,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': `${new Date}`,
            'user': 8,
        },

        // objects
        {
            'cart': {},
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': {},
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': `${new Date}`,
            'user': {},
        },

        // arrays
        {
            'cart': cart_arr,
            'time': [],
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': `${new Date}`,
            'user': [],
        },

        // null
        {
            'cart': null,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': null,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': `${new Date}`,
            'user': null,
        },

        // undefined
        {
            'cart': undefined,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': undefined,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': `${new Date}`,
            'user': undefined,
        },

        // absent
        {
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'user': 'uglesoft@gmail.com',
        },
        {
            'cart': cart_arr,
            'time': `${new Date}`,
        },

    ];

    var readReceipt_args = [
        // valid input
        1,
        '2',

        // strings

        // integers

        // objects
        {},

        // arrays
        [],
        // null
        null,

        // undefined
        undefined,

        // absent

    ];
    var confirmReceipt_args = [
        // valid input
        {
            'id': 1,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },

        // strings

        // integers
        {
            'id': 1,
            'time': 8,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': `${new Date}`,
            'user': 8,
        },

        // objects
        {
            'id': {},
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': {},
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': `${new Date}`,
            'user': {},
        },

        // arrays
        {
            'id': [],
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': [],
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': `${new Date}`,
            'user': [],
        },

        // null
        {
            'id': null,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': null,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': `${new Date}`,
            'user': null,
        },

        // undefined
        {
            'id': undefined,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': undefined,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': `${new Date}`,
            'user': undefined,
        },

        // absent
        {
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 1,
            'time': `${new Date}`,
        },

    ];
    var rejectReceipt_args = [
        // valid input
        {
            'id': 2,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },

        // strings

        // integers
        {
            'id': 2,
            'time': 8,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': `${new Date}`,
            'user': 8,
        },

        // objects
        {
            'id': {},
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': {},
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': `${new Date}`,
            'user': {},
        },

        // arrays
        {
            'id': [],
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': [],
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': `${new Date}`,
            'user': [],
        },

        // null
        {
            'id': null,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': null,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': `${new Date}`,
            'user': null,
        },

        // undefined
        {
            'id': undefined,
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': undefined,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': `${new Date}`,
            'user': undefined,
        },

        // absent
        {
            'time': `${new Date}`,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'user': 'uglesoft@gmail.com',
        },
        {
            'id': 2,
            'time': `${new Date}`,
        },

    ];

    // createProduct
    for (let i = 0; i < createProduct_args.length; i++) {
        await ugle_shop.createProduct(dtb, createProduct_args[i], (err) => {
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
    for (let i = 0; i < readProduct_args.length; i++) {
        await ugle_shop.readProduct(dtb, readProduct_args[i], (err) => {
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
    for (let i = 0; i < updateProduct_args.length; i++) {
        await ugle_shop.updateProduct(dtb, updateProduct_args[i], (err) => {
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


    // allProducts
    await ugle_shop.allProducts(dtb, (err, data) => {
        if (err) {
            console.log(`[ ] UNEXPECTED FAIL | allProducts | ${err.message}`);
            err_count++;
        } else {
            console.log('[X] EXPECTED PASS | allProducts');
            console.log(data);
        }

    });


    // addToCart
    for (let i = 0; i < addToCart_args.length; i++) {
        await ugle_shop.addToCart(dtb, addToCart_args[i], (err, cart) => {
            if (i <= 3) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | addToCart[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | addToCart[${i}] | ${JSON.stringify(cart)}`);
                    cart_arr = cart;
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | addToCart[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | addToCart[${i}] | ${JSON.stringify(cart)}`);
                    err_count++;
                    cart_arr = cart;
                }
            }
        });
    }


    // console.log(cart_arr);


    // removeFromCart
    for (let i = 0; i < removeFromCart_args.length; i++) {
        await ugle_shop.removeFromCart(removeFromCart_args[i], (err, cart) => {
            if (i <= 1) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | removeFromCart[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | removeFromCart[${i}] | ${JSON.stringify(cart)}`);
                    cart_arr = cart;
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | removeFromCart[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | removeFromCart[${i}] | ${JSON.stringify(cart)}`);
                    err_count++;
                    cart_arr = cart;
                }
            }
        });
    }


    // console.log(cart_arr);


    // setCartQty
    for (let i = 0; i < setCartQty_args.length; i++) {
        await ugle_shop.setCartQty(dtb, setCartQty_args[i], (err, cart) => {
            if (i <= 3) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | setCartQty[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | setCartQty[${i}] | ${JSON.stringify(cart)}`);
                    cart_arr = cart;
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | setCartQty[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | setCartQty[${i}] | ${JSON.stringify(cart)}`);
                    err_count++;
                    cart_arr = cart;
                }
            }
        });
    }


    console.log(cart_arr);


    // emptyCart
    for (let i = 0; i < emptyCart_args.length; i++) {
        await ugle_shop.emptyCart(emptyCart_args[i], (err, cart) => {
            if (i <= 0) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | emptyCart[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | emptyCart[${i}] | ${JSON.stringify(cart)}`);
                    cart_arr = cart;
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | emptyCart[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | emptyCart[${i}] | ${JSON.stringify(cart)}`);
                    err_count++;
                    cart_arr = cart;
                }
            }
        });
    }


    // console.log(cart_arr);


    // addToCart
    for (let i = 0; i < addToCart_args.length; i++) {
        await ugle_shop.addToCart(dtb, addToCart_args[i], (err, cart) => {
            if (i <= 3) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | addToCart[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | addToCart[${i}] | ${JSON.stringify(cart)}`);
                    cart_arr = cart;
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | addToCart[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | addToCart[${i}] | ${JSON.stringify(cart)}`);
                    err_count++;
                    cart_arr = cart;
                }
            }
        });
    }


    // console.log(cart_arr);


    // checkoutCart
    for (let i = 0; i < checkoutCart_args.length; i++) {
        await ugle_shop.checkoutCart(dtb, checkoutCart_args[i], (err, cart) => {
            if (i <= 0) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | checkoutCart[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | checkoutCart[${i}] | ${JSON.stringify(cart)}`);
                    cart_arr = cart;
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | checkoutCart[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | checkoutCart[${i}] | ${JSON.stringify(cart)}`);
                    err_count++;
                    cart_arr = cart;
                }
            }
        });
    }


    // console.log(cart_arr);


    // addToCart
    for (let i = 0; i < addToCart_args.length; i++) {
        await ugle_shop.addToCart(dtb, addToCart_args[i], (err, cart) => {
            if (i <= 3) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | addToCart[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | addToCart[${i}] | ${JSON.stringify(cart)}`);
                    cart_arr = cart;
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | addToCart[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | addToCart[${i}] | ${JSON.stringify(cart)}`);
                    err_count++;
                    cart_arr = cart;
                }
            }
        });
    }


    // console.log(cart_arr);


    // checkoutCart
    for (let i = 0; i < checkoutCart_args.length; i++) {
        await ugle_shop.checkoutCart(dtb, checkoutCart_args[i], (err, cart) => {
            if (i <= 0) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | checkoutCart[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | checkoutCart[${i}] | ${JSON.stringify(cart)}`);
                    cart_arr = cart;
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | checkoutCart[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | checkoutCart[${i}] | ${JSON.stringify(cart)}`);
                    err_count++;
                    cart_arr = cart;
                }
            }
        });
    }


    // allReceipts
    await ugle_shop.allReceipts(dtb, (err, data) => {
        if (err) {
            console.log(`[ ] UNEXPECTED FAIL | allReceipts | ${err.message}`);
            err_count++;
        } else {
            console.log('[X] EXPECTED PASS | allReceipts');
            console.log(data);
        }
    });


    // confirmReceipt
    for (let i = 0; i < confirmReceipt_args.length; i++) {
        await ugle_shop.confirmReceipt(dtb, confirmReceipt_args[i], (err) => {
            if (i <= 0) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | confirmReceipt[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | confirmReceipt[${i}]`);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | confirmReceipt[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | confirmReceipt[${i}]`);
                    err_count++;
                }
            }
        });
    }


    // rejectReceipt
    for (let i = 0; i < rejectReceipt_args.length; i++) {
        await ugle_shop.rejectReceipt(dtb, rejectReceipt_args[i], (err) => {
            if (i <= 0) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | rejectReceipt[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | rejectReceipt[${i}]`);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | rejectReceipt[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | rejectReceipt[${i}]`);
                    err_count++;
                }
            }
        });
    }


    // readReceipt
    for (let i = 0; i < readReceipt_args.length; i++) {
        await ugle_shop.readReceipt(dtb, readReceipt_args[i], (err, data) => {
            if (i <= 0) {
                if (err) {
                    console.log(`[ ] UNEXPECTED FAIL | readReceipt[${i}] | ${err.message}`);
                    err_count++;
                } else {
                    console.log(`[X] EXPECTED PASS | readReceipt[${i}]`);
                    console.log(data);
                }
            } else {
                if (err) {
                    console.log(`[X] EXPECTED FAIL | readReceipt[${i}] | ${err.message}`);
                } else {
                    console.log(`[ ] UNEXPECTED PASS | readReceipt[${i}]`);
                    console.log(data);
                    err_count++;
                }
            }
        });
    }


    // deleteProduct
    for (let i = 0; i < deleteProduct_args.length; i++) {
        await ugle_shop.deleteProduct(dtb, deleteProduct_args[i], (err) => {
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


    // allProducts
    await ugle_shop.allProducts(dtb, (err, data) => {
        if (err) {
            console.log(`[ ] UNEXPECTED FAIL | allProducts | ${err.message}`);
            err_count++;
        } else {
            console.log('[X] EXPECTED PASS | allProducts');
            console.log(data);
        }

    });




    console.log();
    console.log();
    console.log();
    console.log();
    console.log(`TEST COMPLETED: ${err_count} errors found`);
});