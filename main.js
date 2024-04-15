import zeroPadding from "./utils/zeroPadding.js";
import { getCountdown } from "/utils/date.js";

const DATE = new Date("05/11/2024");

const ORNE_PHONE_NUMBER = "543425179066";
const CONFIRM_ASSISTANCE_MESSAGE =
  "¡Hola! ¡Me encantaría asistir al baby shower de Alai! Estoy practicando ya mi técnica de cambio de pañales. ¡Nos vemos pronto!";
const GIFT_SUGGESTION_MESSAGE =
  "¡Hola a todos! Estoy buscando el regalo perfecto para Alai y me encantaría escuchar sus sugerencias. ¿Qué creen que sería más útil o especial para la llegada de nuestra pequeña mariposa?";

const $btnConfirmAssistance = document.querySelector("#btn-confirm-assistance");
const $btnGiftSuggestion = document.querySelector("#btn-gift-suggestion");

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

function setCountdown() {
  const intervalId = setInterval(() => {
    const countdown = getCountdown(DATE);

    if (!countdown) {
      document.getElementById("countdown-container").innerHTML =
        "El baby shower ya comenzó";
      clearInterval(intervalId);
      return;
    }

    document.getElementById("txt-days").innerHTML = zeroPadding(
      countdown.days,
      2
    );
    document.getElementById("txt-hours").innerHTML = zeroPadding(
      countdown.hours,
      2
    );
    document.getElementById("txt-minutes").innerHTML = zeroPadding(
      countdown.minutes,
      2
    );
    document.getElementById("txt-seconds").innerHTML = zeroPadding(
      countdown.seconds,
      2
    );
  }, 1000);
}

function init() {
  setCountdown();
}

document.addEventListener("DOMContentLoaded", init);
