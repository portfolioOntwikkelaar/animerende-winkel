const tlLeave = gsap.timeline({
  defaults: {duration: 0.75, ease: "Power2.easeOut"},

});
const tlEnter = gsap.timeline({
  defaults: {duration: 0.75, ease: "Power2.easeOut"},

});

const leaveAnimation = (current, done) => {
  const product = current.querySelector('.image-container');
  const text = current.querySelector('.showcase-text');
  const circles = current.querySelectorAll('.circle');
  const arrow = current.querySelector('.showcase-arrow');
  return(
    tlLeave.fromTo(arrow, {opacity: 1, y:0}, {opacity: 0, y:50}),
    tlLeave.fromTo(product, {y:0, opacity:1}, { y:100, opacity: 0, onComplete: done}, "<"),
    tlLeave.fromTo(text, {y:0, opacity:1}, {opacity:0, y:100}, "<")
    // tlLeave.to(current, {zIndex: 1}, '<');

  )
};
barba.init({
  preventRunning: true,
  transitions: [
    {
      name: "default",
      leave(data){
        const done = this.async();
        let current = data.current.container;
        leaveAnimation(current, done)
        // gsap.fromTo(current, {opacity: 1}, {opacity: 0, duration: 1, onComplete: done})
      },
      enter(data){
        const done = this.async();
        let next = data.next.container;
        gsap.fromTo(next, {opacity: 0}, {opacity: 1, duration: 1, onComplete: done})
      }
    },
  ],
});