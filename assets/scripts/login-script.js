/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 
 /*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

//menetapkan nilai email dan pass
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

//menambah fungsi tombbol
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

 /*fungsi input email pass*/
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

 //decission kalau email and pass sesuai maka bisa login
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
   /*kalau  nda sesuai ya muncvul popoup*/
  } else {
    showPopUp();
  }
});
