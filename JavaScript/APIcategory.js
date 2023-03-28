


fetch('https://api.escuelajs.co/api/v1/categories/',{

    method:'get',

}).then(res => res.json())
.then(data =>{

    for (let i = 0; i < data.length; i++) {

        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        ul.appendChild(li);
        li.id = data[i].name;
        li.className = 'product_category';
        let name  = document.createElement('h4');
        li.appendChild(name);
        let img = document.createElement('img');
        li.appendChild(img);
        img.className = 'category_arrow';
        name.innerText = data[i].name;
        img.src = 'images/categoryarrow.svg';
        

    };
}).catch(fale => {
    let error = document.querySelector('.error');
    error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
    $('.error').css('color','red');
    $('.loader').css('opacity','0');
    
});