// Understand GSAP js
// console.log('Miii')



// setInterval(() => {
    // gsap.to("#box", {
    //     x:700,
    //     y:30,
    //     duration:2,
    //     delay:1,
    //     rotate:67,
    //     repeat:-1,
    //     yoyo:true,
        
    // });
    // gsap.from("#box", {
        
    //     x:700,
    //     y:30,
    //     duration:2,
    //     delay:1,
    //     repeat: -1,
    //     yoyo:true,
    // })

// }, 1000)

//        Understand GSAP -------------2.0)


gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"page1",
        scoller:"body",
        pin:true,
        start: "top 0",
        end: "top -200%",
        scrub:2,
        
    }

})

