


let seeMore = localStorage.getItem('id');

function ProductDetal() {

    let data = fetch('https://api.escuelajs.co/api/v1/products/' + seeMore);
    return data;
};


async function Detals() {

    ProductDetal().then(Response => Response.json())
        .then(Response => {

            document.querySelector('.product_name').innerText = Response.title;
            document.querySelector('.product_price').innerText = 'Price: ' + Response.price + ' $';
            document.querySelector('.detals_img').src = Response.images;
            document.querySelector('.product_description').innerText = Response.description;
            document.querySelector('.product_update').innerText = Response.updatedAt;
            document.querySelector('.creation').innerText = Response.creationAt;

        }).catch(fale => {

            let error = document.querySelector('.error');

            error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
            $('.error').css('color', 'red');
            $('.loader').css('opacity', '0');

        });
};



let addbag = document.querySelector('.add_bag');

addbag.addEventListener('click', function () {

    addbag.innerText = 'დამატებულია';

    ProductDetal().then(Response => Response.json())
        .then(Response => {

            let cardItems = []; //json array//
            let NotExsist = true;

            if (localStorage.getItem("cart")) {

                cardItems = JSON.parse(localStorage.getItem("cart"));

            }
            for (let i = 0; i < cardItems.length; i++) {

                if (cardItems[i].id == Response.id) {

                    addbag.innerText = 'უკვე კალათშია';
                    NotExsist = false;

                }
            }
            if (NotExsist) {

                let item = { 'id': Response.id, 'ordercount': 1 };
                
                cardItems.push(item);
                localStorage.setItem("cart", JSON.stringify(cardItems));

            }
        })
});

Detals();



let btn = $('.det_btn');
let btn2 = $('.rev_btn');
let update = $('.product_update');
let creation = $('.creation');
let detbtn = $('.det_btn')
let revbtn = $('.rev_btn')

let s  = true;

$('.det_btn').click(function () { 

   if (s) {
    
    btn.css('border-bottom-color','white')
    btn2.css('border-bottom-color','#269DF2')
    creation.css('display', 'none')
    update.css('display', 'block')
    revbtn.css('background-color', '#BEBEBE')
    revbtn.css('color', '#ffffff')

   }else{

    
    detbtn.css('background-color', '#ffffff')
    detbtn.css('color', '#000000')

   }

  
    
   s = !s
});





let m = true

$('.rev_btn').click(function () { 

    if (m) {
    
        btn2.css('border-bottom-color','white')
        btn.css('border-bottom-color','#269DF2')
        creation.css('display', 'block')
        update.css('display', 'none')
        detbtn.css('background-color', '#BEBEBE')
        detbtn.css('color', '#ffffff')
    
       }else{
    
        
        revbtn.css('background-color', '#ffffff')
        revbtn.css('color', '#000000')
    
       }
        
       m = !m
    
});