


ProductFilter(null)
fetch('https://api.escuelajs.co/api/v1/categories/', {

    method: 'get',

}).then(res => res.json())


    .then(data => {

        for (let i = 0; i < 5; i++) {

            let category = document.querySelector('.category');
            let div = document.createElement('div');
            category.appendChild(div)
            div.className = 'category_div'

            let catname = document.createElement('h4');
            div.appendChild(catname)
            catname.innerText = data[i].name

            let brands = document.querySelector('.brands');
            let div2 = document.createElement('div')
            brands.appendChild(div2)
            div2.className = 'mybrands_container'

            let check = document.createElement('input')
            div2.appendChild(check)
            check.type = 'checkbox'
            check.className = 'check'

            let bardsname = document.createElement('h4')
            div2.appendChild(bardsname)
            bardsname.className = 'brands_name'
            bardsname.innerText = data[i].id




            div.addEventListener('click', function () {

                let productviwe = document.querySelector('.product_viwe');



                ProductFilter(data[i].id)


                while (productviwe.firstChild) {

                    productviwe.firstChild.remove()

                }
            })
        }



        let brandsprice = document.querySelector('.brands_price');

        let number = document.createElement('input')
        brandsprice.appendChild(number);
        number.type = 'number'
        number.className = 'number_filter'
        number.placeholder = '0'


        let brandsprice2 = document.querySelector('.brands_price2');

        let number2 = document.createElement('input')
        brandsprice2.appendChild(number2);
        number2.type = 'number'
        number2.className = 'number_filter2'
        number2.placeholder = '2499'







    })




function ProductFilter(id) {


    fetch('https://api.escuelajs.co/api/v1/products/', {

        method: 'get',

    }).then(res => res.json())

        .then(data => {


            for (let i = 0; i < 5; i++) {

                if (id == data[i].category.id || id == null) {

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


                    link.addEventListener('click', function () {

                        let id = data[i].id;
                        localStorage.setItem('id', id);

                        

                    })






                }
            }
        })
}