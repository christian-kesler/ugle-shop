function addToCart(sku, qty_elid, status_elid) {
    try {
        qty = document.querySelector(qty_elid).value

        document.querySelector(status_elid).innerHTML = `<i class="fas fa-circle-notch fa-spin"></i>`


        // `            
        //     <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/MdSRZNm3XlZ7D7oH2q" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/looping-infinite-loop-cmdrkitten-MdSRZNm3XlZ7D7oH2q">via GIPHY</a></p>
        // `


        $.post(
            `http://localhost:3000/api/cart/add`,
            {
                'sku': sku,
                'qty': qty,
            },
            (res, code) => {
                if (res == 'post-successful') {

                    setTimeout(() => {

                        document.querySelector(status_elid).innerHTML = `<i class="fa-solid fa-check"></i>`

                        document.querySelector('#navbar-cart').classList.remove("disabled");
                    }, 1024);


                    setTimeout(() => {

                        document.querySelector(status_elid).innerHTML = `Add To Cart`

                    }, 4096);

                } else {
                    document.querySelector(status_elid).innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`
                    console.log(res)
                }
            }
        )
    } catch (err) {
        console.error(err)
    }

}


function loadImage(sku, img_elid) {
    try {
        document.querySelector(img_elid).src = "https://giphy.com/embed/MdSRZNm3XlZ7D7oH2q"

        var gif = `
            <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/MdSRZNm3XlZ7D7oH2q" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/looping-infinite-loop-cmdrkitten-MdSRZNm3XlZ7D7oH2q">via GIPHY</a></p>
        `

        $.get(
            `http://localhost:3000/api/product/image?sku=${sku}`,
            {},
            (res, code) => {
                if (res.err) {
                    console.log(`something went wrong loading the image, here's the error: ${res.err.message}`)
                } else {
                    document.querySelector(img_elid).src = `data:image/jpeg;base64, ${res.data}`
                }
            }
        )
    } catch (err) {
        console.error(err)
    }

}




function multiply(inputValue_elid, inputInner_elid, outputInner_elid) {
    try {
        a = document.querySelector(inputValue_elid).value
        b = document.querySelector(inputInner_elid).innerHTML

        var num = a * b
        var value = (Math.round(num * 100) / 100).toFixed(2);

        document.querySelector(outputInner_elid).innerHTML = value
    } catch (err) {
        console.error(err)
    }

}

function sum(input_class, output_elid) {
    try {
        var values = document.querySelectorAll(input_class)
        var total = 0

        values.forEach(value => {
            total += Number(value.innerHTML)
        })

        var value = (Math.round(total * 100) / 100).toFixed(2);

        document.querySelector(output_elid).innerHTML = value
    } catch (err) {
        console.error(err)
    }

}




function incrementCart(sku, qty_elid) {
    try {
        $.post(
            `http://localhost:3000/api/cart/add`,
            {
                'sku': sku,
                'qty': 1,
            },
            (res, code) => {
                if (res == 'post-successful') {
                    qty = document.querySelector(qty_elid).value
                    if (Number(qty) >= 0) {
                        document.querySelector(qty_elid).value = Number(qty) + 1
                    }
                    document.querySelector('#navbar-cart').classList.remove("disabled");


                    multiply(`#qty_${sku}`, `#indivPrice_${sku}`, `#summedPrice_${sku}`)
                    sum('.summedPrice', '#totalPrice')

                } else {
                    console.log(res)
                }
            }
        )
    } catch (err) {
        console.error(err)
    }

}

function decrementCart(sku, qty_elid) {
    try {
        $.post(
            `http://localhost:3000/api/cart/remove`,
            {
                'sku': sku,
                'qty': 1,
            },
            (res, code) => {
                if (res == 'post-successful') {
                    qty = document.querySelector(qty_elid).value
                    if (Number(qty) >= 0) {
                        document.querySelector(qty_elid).value = Number(qty) - 1
                    }
                    document.querySelector('#navbar-cart').classList.remove("disabled");

                    multiply(`#qty_${sku}`, `#indivPrice_${sku}`, `#summedPrice_${sku}`)
                    sum('.summedPrice', '#totalPrice')

                } else {
                    console.log(res)
                }
            }
        )
    } catch (err) {
        console.error(err)
    }

}

function setCartQty(sku, qty_elid, status_elid) {
    try {

        qty = document.querySelector(qty_elid).value

        document.querySelector(status_elid).innerHTML = `<i class="fas fa-circle-notch fa-spin"></i>`

        $.post(
            `http://localhost:3000/api/cart/set`,
            {
                'sku': sku,
                'qty': qty,
            },
            (res, code) => {
                if (res == 'post-successful') {

                    setTimeout(() => {

                        document.querySelector(status_elid).innerHTML = `<i class="fa-solid fa-check"></i>`

                    }, 128);

                } else {
                    document.querySelector(status_elid).innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`
                    console.log(res)
                }
            }
        )

    } catch (err) {
        console.error(err)
    }
}

