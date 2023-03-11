let imgs = document.querySelectorAll('.imgs img');
let buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        imgs.forEach(img => {
            if(button.innerHTML  == img.getAttribute('sitefilter')){
                img.classList.remove('display-none');
            } else if(button.innerHTML == 'All'){
                img.classList.remove('display-none');
            } else{
                img.classList.add('display-none');
            }
        });
    })
})
