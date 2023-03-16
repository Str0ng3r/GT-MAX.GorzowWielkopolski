'use strict'
const firstBtn = document.querySelector('#firstbtn');
const secBtn = document.querySelector('#secondtbtn')
const thriBtn = document.querySelector('#thirdbtn')
const forBtn = document.querySelector('#forbtn')
const imgPho = document.querySelector('#swipephoto')
const listUs = document.querySelector('.list-uslug')

const bgHamul = document.querySelector('.uslug-list-hamulce')
const bgSilnik = document.querySelector('.uslug-list-silnik')
const bgKomp = document.querySelector('.uslug-list-komp')
const bgBlah = document.querySelector('.uslug-list-blaharstvo')
const bgPranie = document.querySelector('.uslug-list-pranie')
const bgZawi = document.querySelector('.uslug-list-zawi')
const buttonMenu = document.querySelector('#button-menu')
const menuMobile = document.querySelector('.menu-mobile')

buttonMenu.addEventListener('click',() => {
    menuMobile.classList.toggle('menu-mobile-open');
})

firstBtn.addEventListener('click',() => {
    imgPho.src = './images/right-block.jpeg'
    firstBtn.style.backgroundColor = '#180EF3'
    firstBtn.style.marginTop = '5px'
    secBtn.style.marginTop = '0px'
    secBtn.style.backgroundColor = '#212121'
    thriBtn.style.backgroundColor = '#212121'
    forBtn.style.backgroundColor = '#212121'
})


secBtn.addEventListener('click',() => {
    imgPho.src = './images/avtoservis-header.jpg'
    secBtn.style.marginTop = '5px'
    firstBtn.style.marginTop = '0px'
    secBtn.style.backgroundColor = '#180EF3'
    firstBtn.style.backgroundColor = '#212121'
    thriBtn.style.backgroundColor = '#212121'
    forBtn.style.backgroundColor = '#212121'
})

const boxBgContact = document.querySelector('.bg-box-white')
const buttonContacts = document.querySelector('.header__button-right')

buttonContacts.addEventListener('click',() => {
    boxBgContact.classList.toggle('hidden-class')
})

boxBgContact.addEventListener('click',() => {
    boxBgContact.classList.toggle('hidden-class');
})

listUs.addEventListener('click',(event) => {
    if(event.target.nodeName === 'BUTTON'){
    console.log(event.target.dataset.number)
}
if(event.target.dataset.number === '1'){
    bgSilnik.classList.toggle('nonhidden')
bgSilnik.addEventListener('click',(event)=> {
    if(event.target.nodeName === 'BUTTON'){
        bgSilnik.classList.remove('nonhidden')
    }
})
}
if(event.target.dataset.number === '2'){
    bgBlah.classList.toggle('nonhidden')
    bgBlah.addEventListener('click',(event)=> {
        if(event.target.nodeName === 'BUTTON'){
            bgBlah.classList.remove('nonhidden')
        }
    })
}
if(event.target.dataset.number === '3'){
    bgKomp.classList.toggle('nonhidden')
    bgKomp.addEventListener('click',(event)=> {
        if(event.target.nodeName === 'BUTTON'){
            bgKomp.classList.remove('nonhidden')
        }
    })
}
if(event.target.dataset.number === '4'){
    bgHamul.classList.toggle('nonhidden')
    bgHamul.addEventListener('click',(event)=> {
        if(event.target.nodeName === 'BUTTON'){
            bgHamul.classList.remove('nonhidden')
        }
    })
}
if(event.target.dataset.number === '5'){
    bgPranie.classList.toggle('nonhidden')
    bgPranie.addEventListener('click',(event)=> {
        if(event.target.nodeName === 'BUTTON'){
            bgPranie.classList.remove('nonhidden')
        }
    })
}
if(event.target.dataset.number === '6'){
    bgZawi.classList.toggle('nonhidden')
    bgZawi.addEventListener('click',(event)=> {
        if(event.target.nodeName === 'BUTTON'){
            bgZawi.classList.remove('nonhidden')
        }
    })
}
});



