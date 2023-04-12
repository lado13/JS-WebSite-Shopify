
Getprodact(null);

fetch('https://api.escuelajs.co/api/v1/categories/', {

    method: 'get',

}).then(res => res.json())


    .then(data => {

        for (let i = 0; i < data.length; i++) {

            let ul = document.querySelector('ul');
            let li = document.createElement('li');
            ul.appendChild(li);
            li.id = data[i].name;
            li.className = 'product_category';
            let name = document.createElement('h4');
            li.appendChild(name);
            let img = document.createElement('img');
            li.appendChild(img);
            img.className = 'category_arrow';
            name.innerText = data[i].name;
            img.src = 'images/categoryarrow.svg';

            li.addEventListener('click', function () {

                let row = document.querySelector('.product');

                $('.loader').css('opacity', '1');

                while (row.firstChild) {

                    row.firstChild.remove()

                }

                Getprodact(data[i].id)

            });
        };

    }).catch(fale => {

        let error = document.querySelector('.error');

        error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
        $('.error').css('color', 'red');
        $('.loader').css('opacity', '0');

    });




function Getprodact(id) {



    fetch('https://api.escuelajs.co/api/v1/products/', {

        method: 'get',

    }).then(res => res.json())
        .then(data => {


            for (let i = 0; i < data.length; i++) {

                $('.loader').css('opacity', '0');

                if (id == data[i].category.id || id == null) {

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

                    img.src = data[i].images
                    name.innerText = data[i].title
                    price.innerText = 'Price:  ' + data[i].price + '  $'

                    col.addEventListener('click', function () {

                        let id = data[i].id;
                        localStorage.setItem('id', id);
                        window.location.href = 'detals.html';

                    });
                };
            };



        }).catch(fale => {

            let error = document.querySelector('.error');

            error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
            $('.error').css('color', 'red');
            $('.loader').css('opacity', '0');

        });
};





let categoryul = $('.category_ul');

let s = true;

$('.category_logo').click(function () {

    if (s) {

        categoryul.css('display', 'block')

    } else {

        categoryul.css('display', 'none')
    }

    s = !s
});