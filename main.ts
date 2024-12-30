const refBtn = document.getElementById("btn") as HTMLButtonElement
const refPara = document.getElementById("references" ) as HTMLElement
const refPara2 = document.getElementById("references2") as HTMLElement;


refBtn.addEventListener("click", ()=> {

    if(refPara.style.display === "none"){
        refPara.style.display = 'block'
        refPara2.style.display = 'block';

    }else{
        refPara.style.display = 'none'
        refPara2.style.display = 'none';
    }
});



