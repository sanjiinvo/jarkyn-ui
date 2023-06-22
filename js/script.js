
let wpPost = document.querySelector('.whats-up-cont-box')
const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight
let currentRemontPocket = 2
let priceToserver = document.querySelector('#priceToServer')

let totalPrice = document.querySelector('#totalPrice')



let map = document.getElementsByTagName('iframe')
map[0].setAttribute('width','100%')
console.log(map);






function rengeNum() {
    let range = document.querySelector('#range').value
        let rangeVal = document.querySelector('#range-val')
            rangeVal.innerHTML=`${range} КВ/М` 
        return(range)
    }

let areaType = 'Новостройка'
 function areaTypeValue(newtype) {
    areaType = newtype
    console.log(typeof newtype);
 }



 function economPrice() {
    if(areaType=='Новостройка'){
        return 20000
    } if(areaType=='Вторичная'){
        return 16000
    }
 }

 function standartPrice() {
    if(areaType=='Новостройка'){
        return 24000
    } if(areaType=='Вторичная'){
        return 20000
    }
 }

 function confortPrice() {
    if(areaType=='Новостройка'){
        return 30000
    } if(areaType=='Вторичная'){
        return 26000
    }
 }
 function designPrice() {
    if(areaType=='Новостройка'){
        return 37000
    } if(areaType=='Вторичная'){
        return 32000
    }
 }



function yesdesignornow(){

    const havedsign = document.querySelectorAll('input[name="selfdesign"]')


    for(const f of havedsign){
        if(f.checked){
            // console.log(f.value);
            if(f.value == 'Yes'){
                return 0
            } else if(f.value=='No'){
                return 3000
            }
        }
    }
}




function finalPocketPrice (){
    if(currentRemontPocket==1){
        return economPrice()
    } if(currentRemontPocket==2){
        return standartPrice()
    } if(currentRemontPocket==3){
        return confortPrice()
    } if(currentRemontPocket==4){
        return designPrice()
    }
}



function consLog(){
    console.log(`areaType ${areaType}`);
    console.log(`rengnum ${rengeNum()}`);
    console.log(`finalpocket ${finalPocketPrice()}`);
    console.log(`totalcounterofprice ${totalCounterOfPrice()}`);
    console.log(`designyeno${yesdesignornow()}`);
}

function totalCounterOfPrice() {
    let totalInnetPrice = rengeNum() * (finalPocketPrice() + yesdesignornow())
    // console.log(totalCounterOfPrice);
    totalPrice.innerHTML=`Примерная стоимость ремонта(Без метриалов): от ${totalInnetPrice} тг`
    totalPrice.setAttribute('value',`${totalInnetPrice} тг`)
	    priceToserver.setAttribute('value', `${totalInnetPrice}`)

    return totalInnetPrice
}



function selectPocket(pocket) {
    let selectedTitle = document.querySelector('#selectedPocket')
    let econom = document.querySelector('#econom')
    let standart = document.querySelector('#standart')
    let comfort = document.querySelector('#comfort')
    let design = document.querySelector('#design')
    if(pocket==1){
        selectedTitle.innerHTML=`Выбран пакет: Эконом`
        selectedTitle.setAttribute('value','Эконом')
        econom.classList.add('picketPacket')
        standart.classList.remove('picketPacket')
        comfort.classList.remove('picketPacket')
        design.classList.remove('picketPacket')
        currentRemontPocket = 1
        
    } else if(pocket==2){
        selectedTitle.innerHTML=`Выбран пакет: Стандарт`
        selectedTitle.setAttribute('value','Стандарт')

        econom.classList.remove('picketPacket')
        standart.classList.add('picketPacket')
        comfort.classList.remove('picketPacket')
        design.classList.remove('picketPacket')
         currentRemontPocket = 2


    } else if(pocket==3){
        selectedTitle.innerHTML=`Выбран пакет: Комфорт`
        selectedTitle.setAttribute('value','Комфорт')

        econom.classList.remove('picketPacket')
        standart.classList.remove('picketPacket')
        comfort.classList.add('picketPacket')
        design.classList.remove('picketPacket')
        currentRemontPocket = 3


    } else if(pocket==4){
        selectedTitle.innerHTML=`Выбран пакет: Дизайн`
        selectedTitle.setAttribute('value','Дизайн')

        econom.classList.remove('picketPacket')
        standart.classList.remove('picketPacket')
        comfort.classList.remove('picketPacket')
        design.classList.add('picketPacket')
         currentRemontPocket = 4

    }
}

function showCalcPart2(){
    let kvRange = document.querySelector('#range')
    let errorType = document.querySelector('.error')
    if(kvRange.value<=0){
      errorType.innerHTML=`Не выбрана Квадратура`
    } else{
        let calc1Page = document.querySelector('.page1ofCalc')
        let calc2Page = document.querySelector('#page2ofmaincalc')
    calc1Page.classList.add('tohidecalc')
    calc2Page.classList.add('show2pageofcalc')
    errorType.innerHTML=``
    
    }



    // calc2Page.classList.add('show2pageofcalc')
}
function hide2page() {
    let calc2Page = document.querySelector('#page2ofmaincalc')
    calc2Page.classList.remove('show2pageofcalc')
    let calc1Page = document.querySelector('.page1ofCalc')
    calc1Page.classList.remove('tohidecalc')
    console.log(123);
}

function changePrice() {
    totalCounterOfPrice()
}

let mainSubmit = document.querySelector('#submit')

mainSubmit.addEventListener('click',(event)=>{
    let errorType = document.querySelector('.error')
    let sendingName = document.querySelector('#sendName')
    let sendingTel = document.querySelector('#sendTel')
    if(
        sendingName.value==``||sendingTel.value==``
    ){
        errorType.innerHTML=`Не заполнено поле "Имя" или "Номер"`
    event.preventDefault()

    }
})

// let header = document.querySelector('.header')
// window.addEventListener('scroll', function() {
//     header.classList.add('header-bg')
//   });

////////SVG LOGO
// $("img.img-svg").each(function () {
//     var $img = $(this);
//     var imgClass = $img.attr("class");
//     var imgURL = $img.attr("src");
//     $.get(imgURL, function (data) {
//         var $svg = $(data).find("svg");
//         if (typeof imgClass !== "undefined") {
//             $svg = $svg.attr("class", imgClass + " replaced-svg");
//         }
//         $svg = $svg.removeAttr("xmlns:a");
//         if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
//             $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
//         }
//         $img.replaceWith($svg);
//     }, "xml");
// });
let pocketBoxes = document.querySelectorAll('.pocket-container')
let pocketDeskList = document.querySelectorAll('.pocket-description')


// for(n of pocketBoxes){

//    n.addEventListener('mouseenter',()=>{
//     console.log(pocketDeskList);
//     for(i of pocketDeskList){
//         i.classList.add('show-pocket-desc')
//     }
//     console.log(123);
// })
// n.addEventListener('mouseleave',()=>{
//     console.log(pocketDeskList);
//     for(i of pocketDeskList){
//         i.classList.remove('show-pocket-desc')
//     }
//     console.log(123);
// }) 
// }
// if(windowInnerHeight<=1000){

//     for(h of pocketBoxes){
//         h.addEventListener('click',()=>{

//              for(j of pocketDeskList){
//          j.classList.toggle('show-pocket-desc')
//          console.log(`size<1000 on`);
//              }
//         })
//     }

// }

     for(h of pocketBoxes){
         h.addEventListener('click',()=>{
 
              for(j of pocketDeskList){
          j.classList.toggle('show-pocket-desc')
          console.log(`size<1000 on`);
              }
         })
     }
 
 



function backToMenu() {
let arrowRun = document.querySelector('.back-to-menu-icon')
arrowRun.classList.add('back-arrow-run')
   setTimeout(() => {
    arrowRun.classList.remove('back-arrow-run'),2000
   }, 2000);
   
   

}




function backToMenu() {
let arrowRun = document.querySelector('.back-to-menu-icon')
arrowRun.classList.add('back-arrow-run')
   setTimeout(() => {
    arrowRun.classList.remove('back-arrow-run'),2000
   }, 2000);
   
   

}

// Adaptivity
const menu = document.querySelector('.menu')
const menuButton = menu.querySelector('.MobMenuButton');
const mobMenu = menu.querySelector('.mob-menu')


    menuButton.addEventListener('click', () => {
    mobMenu.classList.toggle('show-mob-menu-animation');
  });


document.addEventListener('click', (event) => {
    const isMenuClick = menu.contains(event.target);
    if (!isMenuClick && mobMenu.classList.contains('show-mob-menu-animation')) {
      mobMenu.classList.remove('show-mob-menu-animation');
    }
  });
  let slogan = document.querySelector('.slogan-company')
  let mobMenuIcon = document.querySelector('.MobMenuButton')
  if(windowInnerWidth<=550){
    slogan.innerHTML=`«JarkynUI» - услуги ремонта квартир под ключ. Работаем по договору.`
    mobMenuIcon.innerHTML=`<i class="bi bi-list"></i>`
  }
  if(windowInnerWidth<=330){
    slogan.innerHTML=`«JarkynUI» - услуги ремонта квартир под ключ.`
    mobMenuIcon.innerHTML=`<i class="bi bi-list"></i>`
  }