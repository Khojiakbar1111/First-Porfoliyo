// Domga kirish HTML 
// ma'lumotlarini olish
const karusel_s3 = document.querySelector('.karusel_s3')
const card1_s3 = document.querySelector('.card1_s3')
const card2_s3 = document.querySelector('.card2_s3')
const card3_s3 = document.querySelector('.card3_s3')
const s3_l = document.querySelector('.s3_l')
const s3_r = document.querySelector('.s3_r')
const cards1_s4 = document.querySelector('.cards1_s4')
const cards2_s4 = document.querySelector('.cards2_s4')
const cards3_s4 = document.querySelector('.cards3_s4');
let basket = document.querySelector('.basket');
let toggle = document.querySelector('#toggle');
let slider = document.querySelector('.slider');
let sliderImg = document.querySelector('.slider-img');
let sliderImg2 = document.querySelector('.slider-img2');
let sliderImg3 = document.querySelector('.slider-img3');
let sliderButton1 = document.querySelector('.slider-button1');
let sliderButton2 = document.querySelector('.slider-button2');
let p = document.querySelector('p');
let toast = document.querySelector('.toast');
let span = document.querySelector('span');

//// Domga kirish HTML 
// ma'lumotlarini olish end

// Data ob'ekt
const data_s4 = [
    {id: 12, img:"./img/krosovkalar/krosovka1.png", nom:"Polo", narx:499, chegirma:10,umumiySon:1},
    {id: 13, img:"./img/krosovkalar/krosovka2.png", nom:"Gucci", narx:599, chegirma:10,umumiySon:1},
    {id: 14, img:"./img/krosovkalar/krosovka3.png", nom:"Versache", narx:399, chegirma:10,umumiySon:1},
    {id: 15, img:"./img/krosovkalar/krosovka4.png", nom:"Balenciaga", narx:299, chegirma:10,umumiySon:1},
]


const data = [
    {id: 1, img:"./img/krosovkalar/krosovka1.png", nom:"Polo", narx:499, chegirma:10,umumiySon:1},
    {id: 2, img:"./img/krosovkalar/krosovka2.png", nom:"Gucci", narx:599, chegirma:10,umumiySon:1},
    {id: 3, img:"./img/krosovkalar/krosovka3.png", nom:"Versache", narx:399, chegirma:10,umumiySon:1},
    {id: 4, img:"./img/krosovkalar/krosovka4.png", nom:"Balenciaga", narx:299, chegirma:10,umumiySon:1},
    {id: 5, img:"./img/krosovkalar/krosovka5.png", nom:"Adidas", narx:199, chegirma:10,umumiySon:1},
    {id: 6, img:"./img/krosovkalar/krosovka6.png", nom:"Nike", narx:459, chegirma:10,umumiySon:1},
    {id: 7, img:"./img/krosovkalar/krosovka7.png", nom:"Loro Piana", narx:479, chegirma:10,umumiySon:1},
    {id: 8, img:"./img/krosovkalar/krosovka8.png", nom:"Massimo Dutti", narx:369, chegirma:10,umumiySon:1}
];
const data_s3 = [
    {id: 9, img:"./img/s3/img1.png"},
    {id: 10, img:"./img/s3/img1.png"},
    {id: 11, img:"./img/s3/img2.png"}
];

let data5 = [
    {id:16,image:'./image.tur/image 13 (1).png',tovarTuri:'Makasima'},
    {id:17,image:'./image.tur/image 14 (1).png',tovarTuri:'Krossovka'},
    {id:18,image:'./image.tur/image 15.png',tovarTuri:'Ishlov berilgan teri'},
    {id:19,image:'./image.tur/image 16.png',tovarTuri:'Klassik krossovka'},
]
// Data ob'ekt end

// Slider karusel
function moveKarusel1() {
    karusel_s3.style.transform = `translateX(-${son * 1920}px)`; 
}
function moveRight1() {
    son++;
    if (son > 2) {
        son = 0;
    }
    moveKarusel1();
    
}

function moveLeft1() {
    son--;
    if (son < 0) {
        son = 2;
    }
    moveKarusel1();
}

s3_l.addEventListener('click', moveLeft1)
s3_r.addEventListener('click', moveRight1)

// Slider karusel end

//Data ma'lumotlarni map iteration qilish
data_s3.map((item1)=>{
    card1_s3.innerHTML += `
    <img src="${item1.img}" alt="">
    `
    card2_s3.innerHTML += `
    <img src="${item1.img}" alt="">
    `

    card3_s3.innerHTML += `
    <img src="${item1.img}" alt="">
    
    
    
    `
});
//Data ma'lumotlarni map iteration qilish end

// Toggle
let count = 0;

toggle.addEventListener('click', function(){
    count++
    basket.classList.add('close')
    if(count === 2){
        basket.classList.remove('close')
        count = 0;
    }
});
// Toggle end

// button onclick bo'lganida 
// map qilingan ma'lumotlarni local storage ga joylash
let newData = JSON.parse(localStorage.getItem('basket')) ||[];
function addCart(index){
     newData.push(data[index])               
     localStorage.setItem('basket', JSON.stringify(newData));
    showToast()
};
// map qilingan ma'lumotlarni local storage ga joylash end

// Toastify function
function showToast() {
    Toastify({
        text: "Tovar basketga qo'shildi",
        duration: 1000,  // Xabarni ko'rsatish muddati (ms dan ko'p)
        open: true,
        gravity: "top",  // Xabarni joylashgan joyi (yuqori, pastki, chap, o'ng)
        position: "left",  // Xabarni joylashgan tomoni (yuqori, pastki, chap, o'ng)
        backgroundColor: "#2ecc71",  // Xabarning fon rangi
        stopOnFocus: true,  // Fokuslangan paytda xabarni to'xtatish
    }).showToast();
}
// Toastify function end

// Local storagedan ma'lumotlarni olish
let getData = JSON.parse(localStorage.getItem('basket')) || [];
// Local storagedan ma'lumotlarni olish

// Toastify function
// function toaster(){
//     setTimeout(() => {
//     toast.style.transform = 'translateX(0px)'
//     }, 90);
// };
// function toaster1(){
//     setTimeout(() => {
//     toast.style.transform = 'translateX(-300px)'
//     }, 1500);
// }
// Toastify function end

// Button onclick bo'lganda umumiySonni birga ko'paytiradigan function
function plus(id){
    getData.forEach((item)=>{
        if(item.id === id){
         item.umumiySon == item.umumiySon ++
         localStorage.setItem('basket',JSON.stringify(getData))
        }
    })
    location.reload()
};
// Button onclick bo'lganda umumiySonni birga ko'paytiradigan function end

// Button onclick bo'lganda umumiySonni birga ayiradigan function
function minus(id){
    getData.forEach((item)=>{
        if(item.id === id){
         if(item.umumiySon >1){
            item.umumiySon--;
         }else{
            item.umumiySon
         }
         localStorage.setItem('basket',JSON.stringify(getData))
        }
    })
    location.reload()
};
// Button onclick bo'lganda umumiySonni birga ayiradigan function end

// Local storagedan olingan ma'lumotlarni basketga joylash
// getData.map((modal) =>{
//     basket.innerHTML +=`
//     <div class ="modal">
//     <img src ="${modal.img}">
//     <p>${modal.nom}</p>
//     <span>${modal.narx} 000</span>
//     <h3>${modal.chegirma  * modal.umumiySon} 000</h3>
//     <div class ="plus-minus">
//      <button class ="plus" onclick ="plus(${modal.id})">+</button>
//      <span>${modal.umumiySon}</span>
//      <button class ="minus" onclick ="minus(${modal.id})">-</button>
//     </div>
//     <button class ="delete" onclick ="Deletee(${modal.id})"> <i class="fa-solid fa-trash-can"></i></button>
//     </div>
//     `
// });
// Local storagedan olingan ma'lumotlarni basketga joylash end

// Basketdagi ma'lumotalarni id bo'yicha o'chirish function
function Deletee(ochirish){
    let deleteData = getData.filter((item)=> item.id !== ochirish);
    localStorage.setItem("basket", JSON.stringify(deleteData));
    location.reload()
};
// Basketdagi ma'lumotalarni id bo'yicha o'chirish function end

// Yangi datani localga joylash va localdan olish
let cardsTobasket = [];

function addBasket(index){
   cardsTobasket.push(data_s4[index])
   localStorage.setItem('secondBasket',JSON.stringify(cardsTobasket));
   showToast()
};

let getDataBasket = JSON.parse(localStorage.getItem('secondBasket')) ||[];
console.log(cardsTobasket);
// Yangi datani localga joylash

// Yangi datani map iteraiton qilish
data_s4.map((item_s4,index) => {
    cards1_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx} 000</b>
            <del>${item_s4.chegirma}%</del>
            <div class="btns_card_s2">
                <button class="buyButton" >Sotib olish</button>
                <button class="toBasket" onclick =(addBasket(${index}))>Savatga</button>
            </div>
        </div>
    `;
});
data_s4.map((item_s4) => {
    cards2_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx} 000</b>
            <span>${item_s4.chegirma}%</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data_s4.map((item_s4) => {
    cards3_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx} 000</b>
            <span>${item_s4.chegirma} 000</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
// Yangi datani map iteraiton qilish end

// Slider karusel2
const karusel_s4 = document.querySelector('.karusel_s4')
const leftBtnS4 = document.querySelector('.left_s4')
const rightBtnS4 = document.querySelector('.right_s4')


function moveKaruselS4() {
    karusel_s4.style.transform = `translateX(-${son * 1920}px)`; 
}

function moveRightS4() {
    son++;
    if (son > 2) {
        son = 0;
    }
    moveKaruselS4();
    
}

function moveLeftS4() {
    son--;
    if (son < 0) {
        son = 2;
    }
    moveKaruselS4();
}

leftBtnS4.addEventListener('click', moveLeftS4);
rightBtnS4.addEventListener('click', moveRightS4);
// Slider karusel2 end
// Birinchi Datani map iteration qilish
const cards1 = document.querySelector('.cards1');
const cards2 = document.querySelector('.cards2');
const cards3 = document.querySelector('.cards3');

data.map((item , index) => {
    cards1.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx} 000</b>
            <span>${item.chegirma}%</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button onclick =(addCart(${index})) class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data.map((item) => {
    cards2.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx} 000</b>
            <span>${item.chegirma}%</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data.map((item) => {
    cards3.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx} 000</b>
            <span>${item.chegirma} 000</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
// Birinchi Datani map iteration qilish end

// Slider karusel1
let son = 0;
const karusel = document.querySelector('.karusel');
const leftBtn = document.querySelector('.left_s2');
const rightBtn = document.querySelector('.right_s2');

function moveKarusel() {
    karusel.style.transform = `translateX(-${son * 1920}px)`; 
}

function moveRight() {
    son++;
    if (son > 2) {
        son = 0;
    }
    moveKarusel();
    
}

function moveLeft() {
    son--;
    if (son < 0) {
        son = 2;
    }
    moveKarusel();
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);
// Slider kaursel1 end
// 3-Datani map iteration qilish
data5.map((tovarTuri) =>{
    sliderImg.innerHTML +=`
    <div class ="card-img">
     <img src ="${tovarTuri.image}" alt ="">
     <p>${tovarTuri.tovarTuri}</p>
    </div>
    `
});
data5.map((tovarTuri) =>{
    sliderImg2.innerHTML +=`
    <div class ="card-img">
     <img src ="${tovarTuri.image}" alt ="">
     <p>${tovarTuri.tovarTuri}</p>
    </div>
    `
});
data5.map((tovarTuri) =>{
    sliderImg3.innerHTML +=`
    <div class ="card-img">
     <img src ="${tovarTuri.image}" alt ="">
     <p>${tovarTuri.tovarTuri}</p>
    </div>
    `
});
// 3-Datani map iteration qilish end

// Slider karusel3
function sliderMove(){
    slider.style.transform =`translateX(-${offset * 1442}px)`; 
}

offset = 0;

function sliderLeft(){
  offset ++;
  if(offset >2){
    offset = 0
  }
  sliderMove()
};
function sliderRight(){
    offset --;
    if(offset < 0){
        offset = 2
    }
    sliderMove()
};
sliderButton2.addEventListener('click',sliderRight)

sliderButton1.addEventListener('click',sliderLeft);
// Slider karusel3 end


// p.innerHTML = getData.length ? getData.length:0;


// span.innerHTML = getDataBasket.length ? getDataBasket.length:0

p.innerHTML = getData.length + getDataBasket.length

