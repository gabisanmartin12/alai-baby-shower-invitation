import { getCountdown } from "/utils/date.js";

const DATE = new Date("05/11/2024");

const ORNE_PHONE_NUMBER = "543425179066";
const CONFIRM_ASSISTANCE_MESSAGE =
  "¡Hola! ¡Me encantaría asistir al baby shower de Alai! Estoy practicando ya mi técnica de cambio de pañales. ¡Nos vemos pronto!";
const GIFT_SUGGESTION_MESSAGE =
  "¡Hola a todos! Estoy buscando el regalo perfecto para Alai y me encantaría escuchar sus sugerencias. ¿Qué creen que sería más útil o especial para la llegada de nuestra pequeña mariposa?";

const $btnConfirmAssistance = document.querySelector("#btn-confirm-assistance");
const $btnGiftSuggestion = document.querySelector("#btn-gift-suggestion");
const $txtCountdown = document.querySelector("#txt-countdown");

$btnConfirmAssistance.addEventListener("click", () => {
  window.open(
    encodeURI(
      `https://wa.me/${ORNE_PHONE_NUMBER}/?text=${CONFIRM_ASSISTANCE_MESSAGE}`
    )
  );
});

$btnGiftSuggestion.addEventListener("click", () => {
  window.open(
    encodeURI(
      `https://wa.me/${ORNE_PHONE_NUMBER}/?text=${GIFT_SUGGESTION_MESSAGE}`
    )
  );
});

$txtCountdown.addEventListener("load", setCountdown);

function setCountdown() {
  const intervalId = setInterval(() => {
    const countdown = getCountdown(DATE);

    if (!countdown) {
      clearInterval(intervalId);
      $txtCountdown.innerHTML = "El baby shower ya comenzó";
      return;
    }

    const { days, hours, minutes, seconds } = countdown;
    $txtCountdown.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }, 1000);
}

setCountdown();
