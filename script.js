/*const sidenav = document.querySelector(".sidenav");
const lightboxes = document.querySelectorAll(".materialboxed");
const parallaxes = document.querySelectorAll(".parallax");
const tabs = document.querySelector(".tabs");
const datepicker = document.querySelector(".datepicker");
const tooltips = document.querySelectorAll(".tooltipped");
const scrollspies = document.querySelectorAll(".scrollspy");

M.Sidenav.init(sidenav);
M.Materialbox.init(lightboxes);
M.Parallax.init(parallaxes);
M.Tabs.init(tabs);
M.Datepicker.init(datepicker, { disableWeekends: true });
M.Tooltip.init(tooltips);
M.ScrollSpy.init(scrollspies);
//# sourceURL=pen.js

document.write(new Date().getFullYear());*/

const overlapEls = document.querySelectorAll(".overlap") || [];
overlapEls.forEach((el) => {
  const chars = [...el.textContent];
  el.innerHTML = "";
  chars.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.setProperty("--index", index);
    el.append(span);
  });
});
