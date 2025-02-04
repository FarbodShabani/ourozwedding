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

locationsContainer.addEventListener("touchstart", () => {
  bpfimage?.classList?.remove("first-image-hover");
  bpsimage?.classList?.remove("second-image-hover");
  bptimage?.classList?.remove("third-image-hover");
  bpfoimage?.classList?.remove("first-image-hover");
  bpfiimage?.classList?.remove("second-image-hover");
  bpsiimage?.classList?.remove("third-image-hover");
});

locationsContainer.addEventListener("touchmove", () => {
  bpfimage?.classList?.remove("first-image-hover");
  bpsimage?.classList?.remove("second-image-hover");
  bptimage?.classList?.remove("third-image-hover");
  bpfoimage?.classList?.remove("first-image-hover");
  bpfiimage?.classList?.remove("second-image-hover");
  bpsiimage?.classList?.remove("third-image-hover");
});

const mouseHoverIn = (left) => {
  if (left) {
    bpfimage?.classList?.add("first-image-hover");
    bpsimage?.classList?.add("second-image-hover");
    bptimage?.classList?.add("third-image-hover");
  } else {
    bpfoimage?.classList?.add("first-image-hover");
    bpfiimage?.classList?.add("second-image-hover");
    bpsiimage?.classList?.add("third-image-hover");
  }
};

const mouseHoverOut = (left) => {
  if (left) {
    bpfimage?.classList?.remove("first-image-hover");
    bpsimage?.classList?.remove("second-image-hover");
    bptimage?.classList?.remove("third-image-hover");
  } else {
    bpfoimage?.classList?.remove("first-image-hover");
    bpfiimage?.classList?.remove("second-image-hover");
    bpsiimage?.classList?.remove("third-image-hover");
  }
};
const mouseHoverInImage = (left) => {
  if (left) {
    bpfimage?.classList?.add("first-image-hover");
    bpsimage?.classList?.add("second-image-hover");
    bptimage?.classList?.add("third-image-hover");
    bpbackground?.classList?.add("places-background-image-opacity-hover");
  } else {
    bpfoimage?.classList?.add("first-image-hover");
    bpfiimage?.classList?.add("second-image-hover");
    bpsiimage?.classList?.add("third-image-hover");
    brpbackground?.classList?.add("places-background-image-opacity-hover");
  }
};

const mouseHoverOutImage = (left) => {
  if (left) {
    bpfimage?.classList?.remove("first-image-hover");
    bpsimage?.classList?.remove("second-image-hover");
    bptimage?.classList?.remove("third-image-hover");
    bpbackground?.classList?.remove("places-background-image-opacity-hover");
  } else {
    bpfoimage?.classList?.remove("first-image-hover");
    bpfiimage?.classList?.remove("second-image-hover");
    bpsiimage?.classList?.remove("third-image-hover");
    brpbackground?.classList?.remove("places-background-image-opacity-hover");
  }
};

const placeClick = (left) => {
  if (left) {
    window.open(
      "https://www.google.com/maps/place/14+Blues+Point+Rd,+McMahons+Point+NSW+2060/@-33.8487491,151.2029857,17.76z/data=!4m6!3m5!1s0x6b12ae58debd354d:0x16ed68f19c0b6029!8m2!3d-33.8492008!4d151.2032198!16s%2Fg%2F11c24xsq_d?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  } else {
    window.open(
      "https://www.google.com/maps/place/Persian+BBQ+house+%2FJahan+Restaurant/@-33.8307932,151.1243409,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12a59a31f17d57:0x4cd9c0942434be6a!8m2!3d-33.8307932!4d151.1269212!16s%2Fg%2F11v0g63b9x?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  }
};
