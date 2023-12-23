// Get information from main HTML
let basketData = JSON.parse(localStorage.getItem('basket')) || [];
console.log(basketData);
let newBasketData = JSON.parse(localStorage.getItem('secondBasket')) ||[];
console.log(newBasketData);
let narxi = document.querySelector('.narxi');
let chegirma1 = document.querySelector('.chegirma1');
let dostavka = document.querySelector('.dostavka');
let jami = document.querySelector('.jami');
let tasdiqlash = document.querySelector('.tasdiqlash')
let allProduct = document.querySelector('#allProduct')
// Get information from main HTML end

// Making the update funciton
// and data mapping
let productAll = document.querySelector('.productAll')
function basketBaza(){
  productAll.innerHTML = ''
basketData.map((item) =>{
    // const sonn = item.narxi
    productAll.innerHTML +=`
    <div class ="basket">
     <img src ="${item.img}" alt ="">
     <p>${item.nom}</p>
     <div class ="buttons">
      <button class ="minus" onclick ="minus(${item.id})"><i class="fa-solid fa-minus"></i></button>
      <span>${item.umumiySon}</span>
      <button class ="plus" onclick ="plus(${item.id})">+</button>
     </div>
     <h1>${item.narx * item.umumiySon} 000</h1>
      <button class ="Delete" onclick ="Deletee(${item.id})"><i class="fa-solid fa-xmark"></i></button>
    </div>
    `
});
    newBasketData.map((item1) =>{
        productAll.innerHTML +=`
        <div class ="basket">
         <img src ="${item1.img}" alt ="">
         <p>${item1.nom}</p>
         <div class ="buttons">
          <button class ="minus" onclick ="minus1(${item1.id})"><i class="fa-solid fa-minus"></i></button>
          <span>${item1.umumiySon}</span>
          <button class ="plus" onclick ="plus1(${item1.id})">+</button>
         </div>
         <h1>${item1.narx * item1.umumiySon} 000</h1>
          <button class ="Delete" onclick ="deletee(${item1.id})"><i class="fa-solid fa-xmark"></i></button>
        </div>
        `
    });
};

basketBaza();
// Making the update function
// and data mapping

dostavka = 15000;
// Umumiy narxlarni hisoblash
let umumiyNarxx = 0;
basketData.forEach((item) =>{
    umumiyNarxx += item.narx * item.umumiySon 
});
newBasketData.forEach((item) =>{
    umumiyNarxx += item.narx * item.umumiySon
});
narxi.innerHTML = umumiyNarxx + ` 000 so'm`;

// Umumiy narxlarni hisoblash end
let totalDiscount = 0; // 
let totalWithDiscountAndDelivery = 0; 
basketData.forEach((item) => {
    // umumiyNarxx += item.chegirma * item.umumiySon;
        totalDiscount += (item.narx - item.narx / 100 * item.chegirma)
        // totalDiscount += (item.chegirma / 100) * item.umumiySon; 
});

newBasketData.forEach((item1) => {
    // umumiyNarxx += item1.chegirma * item1.umumiySon;
    totalDiscount += (item1.narx - item1.narx / 100 * item1.chegirma)
});

totalWithDiscountAndDelivery =  totalDiscount

jami.innerHTML = totalWithDiscountAndDelivery + `00 so'm`; 

// button bosilganda datani lengthni hisoblash
tasdiqlash.addEventListener('click' ,function(){
   allProduct.innerHTML = basketData.length + newBasketData.length
})
// button bosilganda datani lengthni hisoblash end

// Plus function
function plus(id){
    basketData.forEach((item)=>{
        if(item.id === id){
         item.umumiySon == item.umumiySon ++
         localStorage.setItem('basket',JSON.stringify(basketData));
       }
    })
    basketBaza()
};
// Plus function end

// Minus funciton
function minus(id){
    basketData.forEach((item)=>{
        if(item.id === id){
         if(item.umumiySon >1){
            item.umumiySon--;
         }else{
            item.umumiySon
         }
         localStorage.setItem('basket',JSON.stringify(basketData));
        }
    })
    basketBaza()
};
// Minus funciton end

// Plus function 
function plus1(id){
    newBasketData.forEach((item1)=>{
        if(item1.id === id){
         item1.umumiySon == item1.umumiySon ++
         localStorage.setItem('secondBasket',JSON.stringify(newBasketData))
        }
    })
    basketBaza()
};
// Plus function end

// Minus funciton 
function minus1(id){
    newBasketData.forEach((item1)=>{
        if(item1.id === id){
         if(item1.umumiySon >1){
            item1.umumiySon--;
         }else{
            item1.umumiySon
         }
         localStorage.setItem('secondBasket',JSON.stringify(newBasketData))
        }
    })
    basketBaza()
};
// Minus funciton end

// Delete function
function Deletee(ochirish){
    let deleteData = basketData.filter((item)=> item.id !== ochirish);
    localStorage.setItem("basket", JSON.stringify(deleteData));
    location.reload()
};

function deletee(toDelete){
    let newDelete = newBasketData.filter((item1)=> item1.id !== toDelete);
    localStorage.setItem("secondBasket", JSON.stringify(newDelete));
    location.reload()
};

// Delete function