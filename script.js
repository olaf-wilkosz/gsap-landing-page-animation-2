let textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

gsap.timeline().from('.title .letter', 4, {
	y: 100,
	opacity: 0,
	ease: Expo.easeOut,
	stagger: 0.1,
	delay: 4.8,
});

gsap.to('.box', 2.4, {
	y: '-100%',
	ease: Expo.easeInOut,
	delay: 1,
});

gsap.from('img', 4, {
	scale: '2',
	ease: Expo.easeInOut,
	delay: 0,
});

gsap.to('.wrapper-img', 2.4, {
	width: '400',
	height: '500',
	ease: Expo.easeInOut,
	delay: 3.6,
});

gsap.from('.img', 0.4, {
	opacity: 0,
	ease: Expo.easeInOut,
	delay: 3.4,
});

gsap.to('.left', 2, {
	x: '-300',
	rotation: -10,
	ease: Expo.easeInOut,
	delay: 3.8,
});

gsap.to('.right', 2, {
	x: '300',
	rotation: 10,
	ease: Expo.easeInOut,
	delay: 3.8,
});

gsap.from('.menu > div, .hero-container > div', 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: 4.2,
	stagger: 0.1,
});
