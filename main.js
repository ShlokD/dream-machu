const form = document.querySelector("#contact-form");
const checkboxes = document.querySelectorAll("input[name=tour-type]");
const tourImage = document.querySelector("#tour-image")

const handleContactFormSubmit = (ev) => {
  ev.preventDefault();
  ev.target.reset();
  return false;
};

const handleTourChange = (ev) => {
  const id = ev.target.id;
  tourImage.src = `${id}.jpg`;
};

form.addEventListener("submit", handleContactFormSubmit);
checkboxes.forEach((cb) => cb.addEventListener("change", handleTourChange));
