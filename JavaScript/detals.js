


let seeMore = localStorage.getItem('id');
function URLp(){
    let data = fetch('https://api.escuelajs.co/api/v1/products/' + seeMore);
    return data;
};
async function detals(){
    URLp().then(Response => Response.json())
    .then(Response => {     
        document.querySelector('.product_name').innerText = Response.title;
        document.querySelector('.product_price').innerText = 'Price: ' + Response.price + ' $';
        document.querySelector('.detals_img').src = Response.images;
        document.querySelector('.product_description').innerText = Response.description;
    }).catch(fale => {
    let error = document.querySelector('.error');
    error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
    $('.error').css('color','red');
    $('.loader').css('opacity','0');
    
});
};

let addbag = document.querySelector('.add_bag')
addbag.addEventListener('click', function(){
    addbag.innerText = 'დამატებულია'
    URLp().then(Response => Response.json())
    .then(Response => { 
        localStorage.setItem("cart "  + Response.title ,  Response.id)
        
    })
});
detals();