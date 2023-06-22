const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight

window.onload = function(){
    if(windowInnerWidth<=490){
        let orgTitle = document.getElementById('company-slogan')
        console.log(orgTitle);
            console.log(123);
        orgTitle.innerHTML=`«JarkynUI» - услуги ремонта квартир под ключ.Работаем по договору.`
        }
}


