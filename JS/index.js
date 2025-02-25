//? <!----------------------------------------------- < Preloader & Progressbar> ----------------------------------------------->
let loader = document.getElementById("loader")
let brandbg = document.getElementById("brandbg");
brandbg.innerHTML = `<span class="spinner-grow text-primary" role="status"></span>
Kuldeep`;
let gitloadercal = document.getElementById("gitcalendar");
window.addEventListener("load", function () {
  brandbg.innerHTML = `< Premlata/>`;
  GitHubCalendar(".calendar", "premlataaa", { responsive: true });
});

function TopButtonFunction() {
  if (!topbutton) return;
  if (document.documentElement.scrollTop > 60) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}
let topbutton = document.getElementById("topbutton");
topbutton.addEventListener("click", () => (document.documentElement.scrollTop = 0));

const filled = document.querySelector(".filled");
function update() {
  filled.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
  requestAnimationFrame(update);
}

update();
//? <!----------------------------------------------- < Scroll slide animations> ----------------------------------------------->
let ScreenSize = window.innerWidth
window.onresize = () => {
  ScreenSize = window.innerWidth
  console.log(ScreenSize);
}

let aboutroll = document.getElementById("Aboutroll");
let projectroll = document.getElementById("projectHead");
window.addEventListener("scroll", () => {
  TopButtonFunction();
  let value = window.scrollY;
  if (ScreenSize <= 1400) value += 300
  aboutroll.style.transform = `translateX(${(value - 2350) / 3}px)`;
  projectroll.style.transform = `translateX(${(-value + 2700) / 3}px)`;
});

//? <!----------------------------------------------- < Resume> ----------------------------------------------->

// function resume() {
//   window.open("https://drive.google.com/file/d/1lJQefDDZ_hiPDPrVke_aQHva-pXdtfmI/view?usp=sharing", "_blank")
// }
// brandbg.addEventListener("click", (e) => {
//   console.log(e);
// });

function resume() {
  const fileURL = "https://drive.google.com/uc?export=download&id=1lJQefDDZ_hiPDPrVke_aQHva-pXdtfmI"; // Direct download link

  const link = document.createElement("a");
  link.href = fileURL;
  link.download = "Premlata-Resume.pdf"; // File name when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById("resume").addEventListener("click", resume);