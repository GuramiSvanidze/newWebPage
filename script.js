const tl = gsap.timeline({defaults: {
  ease: 'power1.out'} });

  tl.to(".text", { y: "0%", duration: 1.5});
  tl.fromTo(".text", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
  tl.fromTo(".forNam", {opacity: 0}, {opacity: 1, duration: 1}, "-=0.7");


 let objFrom = JSON.parse(localStorage.getItem('myStore'));
 let nameX = document.getElementById('local');

 nameX.innerText = objFrom[0].Name;

