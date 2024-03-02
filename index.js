let btn=document.querySelector('#generate')
let qrcode=document.querySelector('.qrcode')
let text = document.querySelector('#text');

btn.addEventListener('click',(e) => {
    e.preventDefault()


        let qr =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;

        qrcode.classList.add('active')
        qrcode.src = qr
})