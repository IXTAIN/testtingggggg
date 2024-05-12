const BarBtn = document.querySelector('#BarBtn');
const XBtn = document.querySelector('#XBtn');
const DropDownLinks = document.querySelector('#DropDownLinks');
const DropDownContainer = document.querySelector('#DropDownContainer');

BarBtn.onclick = function(){    
    XBtn.classList.toggle("active");
    BarBtn.classList.toggle("inactive");
    DropDownLinks.classList.add("active");
}

XBtn.onclick = function(){    
    XBtn.classList.toggle("active");
    BarBtn.classList.toggle("inactive");
    DropDownLinks.classList.remove("active");
}

