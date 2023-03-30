   

let order = localStorage.getItem('id');

function Url(){
  
    let data = fetch('https://api.escuelajs.co/api/v1/products/' + order);
    return data;
};
async function Detals(){

    Url().then(Response => Response.json())
    .then(Response => { 

        document.querySelector('.order_name').innerText = Response.title;
        document.querySelector('.order_price').innerText =  Response.price + ' GEL';
        document.querySelector('.order_img').src = Response.images;
        
        
        let dlt = document.querySelector('.dlt');
        let orderbox = document.querySelector('.order_box')

        dlt.addEventListener('click',function(){
            
            orderbox.remove()  
           
        })
        
        
    }).catch(fale => {

        let error = document.querySelector('.error');
        
        error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
        $('.error').css('color','red');
        $('.loader').css('opacity','0');
        
    });
};

Detals();

  