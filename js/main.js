var section = document.getElementById("about");

var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");

var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("row");



var gallery = [{
    imgsrc: "image/images (1).jpeg",
    head1: "moto-tab-g70",
    head2: "Price:20999",
    para:"Ram:6GB",
    Storage:"Storage:128GB"
    
},

{
    imgsrc: "image/imges(2).jpeg",
    head1: "Lenovo Yoga Tab 11",
    head2: "Price:19999",
    para:"Ram:6GB",
    Storage:"Storage:128GB"
    
},
{
    imgsrc: "image/images(3).jpeg",
    head1: "TCL Tab 10s",
    head2: "Price:10079",
    para:"Ram:4GB",
    Storage:"Storage:128GB"
   
},
{
    imgsrc: "image/images(4).jpeg",
    head1: "Samsung Galaxy  S7 FE",
    head2: "Price:48999",
    para:"Ram:8GB",
    Storage:"Storage:128GB"
   }]
gallery.forEach(function (element) {

    var div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.classList.add("col");

    var div4 = document.createElement("div");
    div3.appendChild(div4);
    div4.classList.add("card");

    var imagediv = document.createElement("div");
    div4.appendChild(imagediv);
    imagediv.classList.add("imagediv");

    var image=document.createElement("img");
    image.classList.add("image");
    imagediv.appendChild(image);
    image.src = element.imgsrc;

    var div5 = document.createElement("div");
    div4.appendChild(div5);
    div5.classList.add("box");

    var icon =document.createElement("div");
     div5.appendChild(icon);
     icon.classList.add("icon");

    var heading = document.createElement("h3");
    div5.appendChild(heading);
    heading.innerHTML = element.head1;

    var para = document.createElement("p");
    div5.appendChild(para);
    para.innerHTML = element.head2;

    var para1 = document.createElement("p");
    div5.appendChild(para1);
    para1.innerHTML = element.para;

     var Storage =document.createElement("p");
     div5.appendChild(Storage);
     Storage.classList.add("box1");
     Storage.innerHTML =element.Storage;

     var btn =document.createElement("div");
     div5.appendChild(btn);
     btn.classList.add("box2");
     

     var button =document.createElement("a");
     imagediv.appendChild(button);
     button.classList.add("button_card");
     button.innerHTML="More detail";
     button.setAttribute("href","#");

     
     
})

var allBtn =document.querySelectorAll(".button_card");
allBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        this.parentNode.nextElementSibling.classList.add("view");
    })
})
var allicon =document.querySelectorAll(".icon");
allicon.forEach(function(ic){
   ic.addEventListener("click",function(){
        this.parentNode.classList.remove("view");
    })
})
