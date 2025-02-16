function changeBg(color) {
  document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById("theme-btn");
themeButton.addEventListener("click", () => {
  console.log(document.body.style.backgroundColor);
  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor == "white") {
    changeBg("black");
    themeButton.innerText = "Light Mode";
  } else {
    changeBg("white");
    themeButton.innerText = "Dark Mode";
  }
});
