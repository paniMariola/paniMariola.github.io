/* skrypt poniżej to mój skrypt z:
https://github.com/itxtedit/itxtedit.github.io/blob/main/script.js
*/

const themeToggle = document.querySelector('#theme-toggle');


onload = setTheme();


function setTheme() {
  if (!localStorage.getItem("themeSetting")) {
    localStorage.setItem("themeSetting", "light");
  }
  const theme = localStorage.getItem("themeSetting");
  if (theme=="light") {
  document.querySelector("body").classList.remove("dark");
  themeToggle.innerHTML = 'GO DARK';
    themeToggle.addEventListener("click", change);
  } else if (theme=="dark") {
    document.querySelector("body").classList.add("dark");
    themeToggle.innerHTML = 'GO LIGHT';
    themeToggle.addEventListener("click", change);
  }
}

function change() {
  dark = localStorage.getItem("themeSetting");
  if (dark=="light") {
    localStorage.themeSetting = "dark";
    themeToggle.innerHTML = "GO LIGHT";
    setTheme();
  } else if (dark=="dark") {
   localStorage.themeSetting = "light";
    themeToggle.innerHTML = "GO DARK";
    setTheme();
  }
}



themeToggle.addEventListener("click", change);




