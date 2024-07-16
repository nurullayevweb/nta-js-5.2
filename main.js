var elJuftToq = document.querySelector(".js-juft-toq");
var elError = document.querySelector(".js-error");

function checkJuftToq(num) {
   if (num < 1) {
      return elError.textContent = "1 va 1 dan katta son kiriting!";
   }
   if (num % 2 == 0) {
      return elJuftToq.textContent = "Bu juft son oka"
   }
   else {
      return elJuftToq.textContent = "Bu toq son oka"
   }
}

var nmbr = Number(prompt("Juft-Toq o'yini uchun son kiriting"))
checkJuftToq(nmbr)