



export let GetProduct = async (id) => {


    try {

        let productFetch = await fetch('https://api.escuelajs.co/api/v1/products').then(_ => _.json());

        productFetch.forEach(el => {

            if (id == el.category.id || id == null) {


                $('.loader').css('opacity', '0');



                let row = document.querySelector('.product');
                let col = document.createElement('col');
                row.appendChild(col);
                col.className = 'product_detal';
                let img = document.createElement('img');
                col.appendChild(img);
                img.className = 'product_img';
                let name = document.createElement('h3');
                col.appendChild(name);
                let price = document.createElement('h4');
                col.appendChild(price);

                img.src = el.images;
                name.innerText = el.title;
                price.innerText = 'Price:  ' + el.price + '  $';

                col.addEventListener('click', function () {

                    let id = el.id;
                    localStorage.setItem('id', id);
                    window.location.href = 'detals.html';

                });




            }
        })






    } catch {

        let error = document.querySelector('.error');

        console.log("მონაცემები არ ჩაიტვირთა!!!");
        error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
        $('.error').css('color', 'red');
        $('.loader').css('opacity', '0');

    }


}



GetProduct(null);