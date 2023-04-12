let orderbtn = document.querySelector('.order_btn');

orderbtn.addEventListener('click', async function () {

    let carditem = JSON.parse(localStorage.getItem("cart"));
    let name = document.querySelector('.name');
    let number = document.querySelector('.number');
    let mail = document.querySelector('.mail');
    let address = document.querySelector('.address')

    let data = {
        'product': carditem,
        'name': name.value,
        'number': number.value,
        'mail': mail.value,
        'adress': address.value
    };

    console.log(data);

    fetch('https://reqbin.com/echo/post/json', {
        method: 'POST',
        headers: {
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))

});