const navbarHamburger = document.getElementsByClassName("navbar-toggler")[0];
const pages = document.querySelectorAll(".content-container");
const collapseNavbar = document.getElementById("collapse-navbar");
const gatheringPage = document.getElementById("gathering-page");
const bluePoint = document.getElementById("bpr");
const jahanResturant = document.getElementById("jr");
const locationsContainer = document.getElementById("locations");
const bpfimage = document.getElementsByClassName("first-image")[0];
const bpsimage = document.getElementsByClassName("second-image")[0];
const bptimage = document.getElementsByClassName("third-image")[0];
const bpfoimage = document.getElementsByClassName("fourth-image")[0];
const bpfiimage = document.getElementsByClassName("fifth-image")[0];
const bpsiimage = document.getElementsByClassName("sixth-image")[0];
const rsvpForm = document.getElementById("rsvp-form");
const bpbackground = document.getElementsByClassName(
  "places-background-image-opacity"
)[0];
const brpbackground = document.getElementsByClassName(
  "resturant-places-background-image-opacity"
)[0];


let collapse = true;

navbarHamburger.addEventListener("click", () => {
  if (collapse) {
    collapseNavbar?.classList?.add("show");
  } else {
    collapseNavbar?.classList?.remove("show");
  }

  collapse = !collapse;
});

bluePoint.addEventListener("touchstart", () => {
  bpfimage?.classList?.add("first-image-hover");
  bpsimage?.classList?.add("second-image-hover");
  bptimage?.classList?.add("third-image-hover");
  bpfoimage?.classList?.remove("first-image-hover");
  bpfiimage?.classList?.remove("second-image-hover");
  bpsiimage?.classList?.remove("third-image-hover");
});

bluePoint.addEventListener("touchmove", () => {
  bpfimage?.classList?.add("first-image-hover");
  bpsimage?.classList?.add("second-image-hover");
  bptimage?.classList?.add("third-image-hover");
  bpfoimage?.classList?.remove("first-image-hover");
  bpfiimage?.classList?.remove("second-image-hover");
  bpsiimage?.classList?.remove("third-image-hover");
});

jahanResturant.addEventListener("touchstart", () => {
  bpfoimage?.classList?.add("first-image-hover");
  bpfiimage?.classList?.add("second-image-hover");
  bpsiimage?.classList?.add("third-image-hover");
  bpfimage?.classList?.remove("first-image-hover");
  bpsimage?.classList?.remove("second-image-hover");
  bptimage?.classList?.remove("third-image-hover");
});

jahanResturant.addEventListener("touchmove", () => {
  bpfoimage?.classList?.add("first-image-hover");
  bpfiimage?.classList?.add("second-image-hover");
  bpsiimage?.classList?.add("third-image-hover");
  bpfimage?.classList?.remove("first-image-hover");
  bpsimage?.classList?.remove("second-image-hover");
  bptimage?.classList?.remove("third-image-hover");
});

