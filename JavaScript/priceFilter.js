

let PriceFilter = () => {




    let minValue = document.querySelector(".input_min");
    let maxValue = document.querySelector(".input_max");

    function validateRange(minPrice, maxPrice) {

        if (minPrice > maxPrice) {

            let tempValue = maxPrice;
            maxPrice = minPrice;
            minPrice = tempValue;

        }

        minValue.innerText = minPrice;
        maxValue.innerText = maxPrice;

    }


    let inputElements = document.querySelectorAll(".range_input input");

    for (const element of inputElements) {

        element.addEventListener("change", () => {
            let minPrice = parseInt(inputElements[0].value);
            let maxPrice = parseInt(inputElements[1].value);

            validateRange(minPrice, maxPrice);
            console.log(minPrice, maxPrice);

        });

        validateRange(inputElements[0].value, inputElements[1].value);

    };





    let rangeBtn = document.querySelector('.range_btn');

    rangeBtn.addEventListener('click', function () {

        fetch('https://api.escuelajs.co/api/v1/products/', {

            method: 'get',

        }).then(res => res.json())

            .then(data => {

                let productviwe = document.querySelector('.product_viwe');

                while (productviwe.firstChild) {

                    productviwe.firstChild.remove()

                }

                for (let i = 0; i < data.length; i++) {

                    if (maxValue.innerText > data[i].price && minValue.innerText < data[i].price) {

                        $('.filter_loader').css('display', 'none')

                        let productviwe = document.querySelector('.product_viwe')

                        let div = document.createElement('div')
                        productviwe.appendChild(div)
                        div.className = 'product_border'

                        let img = document.createElement('img');
                        div.appendChild(img);
                        img.src = data[i].images
                        img.className = 'viwe_img'


                        let title = document.createElement('h4')
                        div.appendChild(title)
                        title.innerText = data[i].title
                        title.className = 'viwe_title'


                        let addbag = document.createElement('div')
                        div.appendChild(addbag)
                        addbag.className = 'add_box'

                        let price = document.createElement('p')
                        addbag.appendChild(price)
                        price.innerText = data[i].price + ' GEL'
                        price.className = 'viwe_more_price'

                        let link = document.createElement('a')
                        addbag.appendChild(link)
                        link.innerText = 'კალათში დამატება'
                        link.className = 'seeMore_dtl_btn'


                    };
                };
            });
    });


}


PriceFilter();