


function DetalsProductColl(id) {

    let data = fetch('https://api.escuelajs.co/api/v1/products/' + id);

    return data;

};




let carditem = JSON.parse(localStorage.getItem("card"));



async function Detals() {

    carditem.forEach(el => {


        DetalsProductColl(el.id).then(Response => Response.json())

            .then(Response => {

                let head_row = document.querySelector('.head_row');


                let col = document.createElement('col');
                head_row.appendChild(col);
                col.className = 'order_col';

                let img = document.createElement('img');
                col.appendChild(img);
                img.className = 'order_img';
                img.src = Response.images;

                let name = document.createElement('h3');
                col.appendChild(name);
                name.className = 'order_name';
                name.innerText = Response.title;

                let duble = document.createElement('div');
                col.appendChild(duble);
                duble.className = 'order_duble';

                let dubleimg2 = document.createElement('img');
                duble.appendChild(dubleimg2);
                dubleimg2.src = 'images/-.svg';
                dubleimg2.className = 'minus';

                let text = document.createElement('p');
                duble.appendChild(text);
                text.innerText = el.ordercount;
                text.className = 'order_count';


                let dubleimg = document.createElement('img');
                duble.appendChild(dubleimg);
                dubleimg.src = 'images/+.svg';
                dubleimg.className = 'pluse';


                dubleimg2.addEventListener('click', function () {

                    if (el.ordercount > 1) {

                        el.ordercount--;
                        localStorage.setItem('card', JSON.stringify(carditem));
                        text.innerText = el.ordercount;

                    }

                })


                dubleimg.addEventListener("click", function () {

                    el.ordercount++;
                    localStorage.setItem("card", JSON.stringify(carditem));
                    text.innerText = el.ordercount;

                })


                let price = document.createElement('h4');
                col.appendChild(price);
                price.className = 'order_price';
                price.innerText = Response.price + '  $';

                let dlt = document.createElement('img');
                col.appendChild(dlt);
                dlt.src = 'images/dlt.svg';
                dlt.className = 'order_dlt';

                dlt.addEventListener('click', function () {

                    col.remove();
                    carditem.splice(el, 1);
                    localStorage.setItem("card", JSON.stringify(carditem));

                })


            }).catch(fale => {

                let error = document.querySelector('.error');

                error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
                $('.error').css('color', 'red');
                $('.loader').css('opacity', '0');

            });

    });


};

Detals();





let CartBoxQuantity = () => {

    let quantity = document.querySelector('.quantity');
    let count = 0




    for (let i = 0; i < carditem.length; i++) {

        count++;
        quantity.innerHTML = count;


    }


}

CartBoxQuantity();