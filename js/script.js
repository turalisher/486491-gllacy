var link = document.querySelector(".location__feedback__btn");
var popup = document.querySelector(".modal__feedback");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal__close");

var login = popup.querySelector("[name=user-name]");
var mail = popup.querySelector("[name=user-mail]");
var message = popup.querySelector("[name=user-message]")
var form = popup.querySelector(".modal__feedback-form");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal__overlay_show");
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal__overlay_show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("mail", mail.value);
    }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal__overlay_show");
    }
  }
});
