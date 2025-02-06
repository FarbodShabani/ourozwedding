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

const rsvpSubmit = async () => {
  const guestName = document.getElementById("first-last-name")?.value;
  const companionName = document.getElementById("companion-name")?.value;
  const songs = document.getElementById("song-name")?.value;
  const dietary = document.getElementById("dietary")?.value;
  const phone = document.getElementById("phone-number")?.value;
  const email = document.getElementById("Email")?.value;
  const responseMessage = document.getElementById("response-message");
  const attending = document.querySelector(
    'input[name="attending"]:checked'
  )?.value;



  if (!guestName || !attending) { 
    responseMessage.innerHTML = "";
    responseMessage.classList.remove("success");
    responseMessage.classList.add("error");
    responseMessage.innerHTML = "Please complete the form";
    return false;
  } else {

    responseMessage.innerHTML = "";
  const response = await axios.post("/rsvp", {
    guestName,
    companionName,
    songs,
    phone,
    email,
    dietary,
    attending,
  });


  if (response.data.success === true) {
    responseMessage.innerHTML = "";
    responseMessage.classList.remove("error");
    responseMessage.classList.add("success");
    responseMessage.innerHTML = response.data.message;
  } else {
    responseMessage.innerHTML = "";
    responseMessage.classList.remove("success");
    responseMessage.classList.add("error");
    responseMessage.innerHTML = response.data.message;
  }
}
};
