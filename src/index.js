import menuTpl from "./tempate-menu.hbs";
import menu from "./menu.json";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const bodyRef = document.querySelector("body");
const themeSwitchRef = document.querySelector("#theme-switch-toggle");
const menuRef = document.querySelector(".js-menu");
const isChecked = JSON.parse(localStorage.getItem("isChecked"));

themeSwitchRef.checked = isChecked;
addTheme(isChecked);

themeSwitchRef.addEventListener("change", changeTheme);

function changeTheme(evt) {
  const isChecked = evt.currentTarget.checked;
  if (!isChecked) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("isChecked", isChecked);
  } else {
    bodyRef.classList.add(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("isChecked", isChecked);
  }
}

function addTheme(evt) {
  if (evt) {
    bodyRef.classList.add(Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

menuRef.innerHTML = menuTpl(menu);
