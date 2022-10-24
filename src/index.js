const pwd = document.querySelector(".password");
const pwdConfirm = document.querySelector(".pass-conf");
const submitBtn = document.querySelector('button[type="button"]');

submitBtn.addEventListener("click", (e) => {
  if (pwd.value !== pwdConfirm.value) {
    pwd.classList.toggle("invalid");
    pwdConfirm.classList.toggle("invalid");
  }
  if (pwd.value === pwdConfirm.value) {
    pwd.classList.remove("invalid");
    pwdConfirm.classList.remove("invalid");
  }
});
