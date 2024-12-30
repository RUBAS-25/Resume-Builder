"use strict";
const refBtn = document.getElementById("btn");
const refPara = document.getElementById("references");
const refPara2 = document.getElementById("references2");
refBtn.addEventListener("click", () => {
    if (refPara.style.display === "none") {
        refPara.style.display = 'block';
        refPara2.style.display = 'block';
    }
    else {
        refPara.style.display = 'none';
        refPara2.style.display = 'none';
    }
});
