function scroll(){
  gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
scroll();

var main =document.querySelector(".main")
var csr =document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
  gsap.to(".cursor", {
    x:dets.x+20,
    y:dets.y+20,
    ease:"step out",
    duration:1
  });
})
gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
  
})

var tl =gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top 27%%",
    end:"top 0",
    scrub:2
  }
})
tl.to(".page1 h1", {
  x:-200,
},"anim");
tl.to(".page1 h2",{
  x:300,
},"anim")

tl.to(".page1 video",{
  width:"80%",
},"anim")
var tl2 =gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -117%%",
    end:"top -120%",
    scrub:2
  }
})
tl2.to(".main",{
  backgroundColor:"#fff"
})
var tl3 =gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -300%%",
    end:"top -320%",
    scrub:2
  }
})
tl3.to(".main",{
  backgroundColor:"rgb(15,13,13)"
})
var boxes = document.querySelectorAll(".box")
boxes.forEach((e)=>{
  e.addEventListener(("mouseenter"),()=>{
    var att =e.getAttribute("data-image")
    csr.style.width = "15vw"
    csr.style.height ="12vw"
    csr.style.borderRadius ="0"
    csr.style.backgroundImage =`url(${att})`

  })
  e.addEventListener(("mouseleave"),()=>{
    e.style.backgroundColor ="transparent"
    csr.style.width = "1vw"
    csr.style.height ="1vw"
    csr.style.borderRadius ="50%"
    csr.style.backgroundImage =`none`
  })

}) 

