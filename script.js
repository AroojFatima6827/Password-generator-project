const slider = document.getElementById("length");

slider.addEventListener("input", function () {
  let percent = (this.value / this.max) * 100;
  this.style.background = `linear-gradient(to right,rgb(110, 228, 110) ${percent}%, #222 ${percent}%)`;
});
