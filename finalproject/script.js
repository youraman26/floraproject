function FullnavOC(){
    document.querySelector("#menu").addEventListener("click", function(){
        document.querySelector("#fullnav").style.left = "0%"
    })
    document.querySelector("#cross").addEventListener("click", function(){
        document.querySelector("#fullnav").style.left = "-100%"
    })
}
FullnavOC()

function ImageWorks(){
    var imgs = ["https://images.unsplash.com/photo-1596238276574-b3e8d40fbafb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            "https://images.unsplash.com/photo-1617630970394-444d52c44483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            "https://images.unsplash.com/photo-1616948459963-9dae32f6a4dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
]


var elem = document.querySelectorAll(".link")
     
elem.forEach(function(elm){
    elm.addEventListener("mousemove", function(dets){
        this.children[1].style.opacity = "1"
        this.children[1].style.transform = `translate(${dets.clientX - 150}px, -${dets.clientY/4}px)  rotate(${dets.clientX - 50}deg)`
        document.querySelector("#images").style.backgroundImage = `url(${imgs[elm.dataset.index]})`
        
        })
    elm.addEventListener("mouseout", function(dets){
        this.children[1].style.opacity = "0"
    })
})
}
ImageWorks()

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
})


// var slide = document.querySelectorAll(".slideelem")

// var width = document.querySelector("#slider").style.width = slide[0].getBoundingClientRect().width*slide.length + slide[0].getBoundingClientRect().left*(slide.length+1) + "px"

// var currentPos = document.querySelector("#slider").getBoundingClientRect().left

// document.querySelector("#sliderparent").addEventListener("scroll", function(){
//     var newPos = document.querySelector("#slider").getBoundingClientRect().left
//     var diff = newPos - currentPos;
//     var speed = Math.floor(diff*.3);
//     currentPos = newPos;
//     slide.forEach(function(parent){
//         parent.style.transform = `skewX(${speed}deg)`
//     })
// })



var slide = document.querySelectorAll(".slideelem")

var width = document.querySelector("#slider").style.width = slide[0].getBoundingClientRect().width*slide.lenght + slide[0].getBoundingClientRect().left*(slide.lenght+1) + "px"

var currentPos =  document.querySelector("#slider").getBoundingClientRect().left

document.querySelector("#sliderparent").addEventListener("scroll", function(){
    var newPos = document.querySelector("#slider").getBoundingClientRect().left

    var diff = newPos - currentPos

    var speed = diff*.45;

    currentPos = newPos

    slide.forEach(function(parent){
        parent.style.transform = `skewX(${speed}deg)`
    })
})
