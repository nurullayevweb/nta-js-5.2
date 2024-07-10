var elJuftToq = document.querySelector(".js-juft-toq");
var elError = document.querySelector(".js-error");
var nmbr=Number(prompt("Juft-Toq o'yini uchun son kiriting"))

if (nmbr<1){
   elError.textContent = "1 va 1 dan katta son kiriting!";
}else if (nmbr % 2 ==0){
   elJuftToq.textContent= "Bu juft son oka"
}else{
   elJuftToq.textContent= "Bu toq son oka"
}