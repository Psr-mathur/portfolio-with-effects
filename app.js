const boxContainer = document.querySelector(".boxcontainer");
const salutetextContainer = document.querySelector(".salutetextcontainer");
const saluteimgContainer = document.querySelector(".saluteimgcontainer");
const authorname = document.querySelector(".name");
const jobtitleContainer = document.querySelectorAll(".jobtitlecontainer");
const jobTitle = document.querySelectorAll(".jobtitle");
const projectsTitle = document.querySelector(".projectstitle");
// const projecTtitle = document.querySelector(".projecttitle");
const phone = document.querySelectorAll(".phone");
const laptop = document.querySelector(".laptop");

for (let i = 0; i < 365; i++) {
	const el = document.createElement("div");
	el.classList = "box";
	boxContainer.appendChild(el);
}

window.addEventListener("scroll", () => {
	let scr = window.scrollY;
	// console.log(scr);
	salutetextContainer.style.transform = `translateY(${scr * 2}px)`;
	saluteimgContainer.style.transform = `translate(${scr * -2}px,${
		scr * -1
	}px)`;
	authorname.style.transform = `translateX(calc(-100vh + ${scr}px))`;
	jobtitleContainer[0].style.backgroundPositionY = `${scr * 0.5}px`;
	jobtitleContainer[1].style.backgroundPositionY = `${scr * 0.5}px`;
	jobTitle[0].style.transform = `translateX(calc(200vh - ${scr}px))`;
	jobTitle[1].style.transform = `translateX(calc(-300vh + ${scr}px))`;
	projectsTitle.style.transform = `translateX(calc(400vh - ${scr}px))`;
	phone[0].style.transform = `translateX(calc(470vh - ${scr}px))`;
	laptop.style.transform = `translateX(calc(-610vh + ${scr}px))`;
	phone[1].style.transform = `translateX(calc(735vh - ${scr}px))`;
});
