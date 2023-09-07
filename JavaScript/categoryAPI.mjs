
import { GetProduct } from "./productAPI.mjs";




let GetCategory = async () => {

    try {


        let categoryFetch = await fetch('https://api.escuelajs.co/api/v1/categories').then(_ => _.json())

        categoryFetch.forEach(el => {

            let ul = document.querySelector('ul');
            let li = document.createElement('li');
            ul.appendChild(li);
            li.id = el.name;
            li.className = 'product_category';
            let name = document.createElement('h4');
            li.appendChild(name);
            let img = document.createElement('img');
            li.appendChild(img);
            img.className = 'category_arrow';
            name.innerText = el.name;
            img.src = 'images/categoryarrow.svg';

            li.addEventListener('click', function () {

                let row = document.querySelector('.product');

                $('.loader').css('opacity', '1');

                while (row.firstChild) {
                    row.firstChild.remove();
                }

                console.log(GetProduct(el.id));
                GetProduct(el.id)

            });

        });




    } catch {

        let error = document.querySelector('.error');

        error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
        $('.error').css('color', 'red');
        $('.loader').css('opacity', '0');

    }

}




GetCategory();