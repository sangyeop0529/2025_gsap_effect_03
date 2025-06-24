$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});

gsap.registerPlugin(ScrollTrigger);

let scrollTween; // 전역 변수로 선언

ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function () {
    let list = gsap.utils.toArray(".work ul li");
    scrollTween = gsap.to(list, {
      xPercent: -100 * (list.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".work",
        pin: true,
        scrub: 1,
        start: "center center",
        end: "300%",
      },
    });

    gsap.utils.toArray(".imgBox").forEach((imgBox) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgBox,
            containerAnimation: scrollTween,
            start: "center right",
            end: "center center",
            scrub: true,
            // markers: true,
          },
        })
        .to(
          imgBox,
          {
            clipPath: "inset(0%)",
            ease: "none",
          },
          0
        );
    });

    gsap.utils.toArray(".imgBox").forEach((imgBox) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgBox,
            containerAnimation: scrollTween,
            start: "center center",
            end: "center left",
            scrub: true,
            // markers: true,
          },
        })
        .to(
          imgBox,
          {
            clipPath: "inset(30%)",
            ease: "none",
          },
          0
        );
    });

    gsap.utils.toArray(".work ul li .textBox").forEach((textBox) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: "center 70%",
            end: "center 40%",
            scrub: true,
            // markers: true,
          },
        })
        .to(
          textBox,
          {
            opacity: 1,
            x: -100,
          },
          0
        );
    });

    gsap.utils.toArray(".work ul li .textBox").forEach((textBox) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: "center center",
            end: "center left",
            scrub: true,
            // markers: true,
          },
        })
        .to(
          textBox,
          {
            opacity: 0,
          },
          0
        );
    });

    gsap.utils.toArray(".num").forEach((text) => {
      let num = text.getAttribute("data-text");
      let counter = document.querySelector(".counter .now");

      ScrollTrigger.create({
        trigger: text,
        start: "0% center",
        end: "100% center",
        scrub: true,
        containerAnimation: scrollTween,
        onEnter: (self) => (counter.innerText = num),
        onEnterBack: (self) => (counter.innerText = num),
        // markers: true,
      });
    });
  },
});
