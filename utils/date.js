export const MILLISECONDS_TO_DAYS_FACTOR = 1000 * 60 * 60 * 24;
export const MILLISECONDS_TO_HOURS_FACTOR = MILLISECONDS_TO_DAYS_FACTOR / 24;
export const MILLISECONDS_TO_MINUTES_FACTOR = MILLISECONDS_TO_HOURS_FACTOR / 60;
export const MILLISECONDS_TO_SECONDS_FACTOR =
  MILLISECONDS_TO_MINUTES_FACTOR / 60;

export const getCountdown = (to) => {
  const now = Date.now();
  const targetTime = to.getTime();
  let timeToTarget = targetTime - now;

  if (timeToTarget < 0) return null;

  const days = Math.floor(timeToTarget / MILLISECONDS_TO_DAYS_FACTOR);
  timeToTarget %= MILLISECONDS_TO_DAYS_FACTOR;

  const hours = Math.floor(timeToTarget / MILLISECONDS_TO_HOURS_FACTOR);
  timeToTarget %= MILLISECONDS_TO_HOURS_FACTOR;

  const minutes = Math.floor(timeToTarget / MILLISECONDS_TO_MINUTES_FACTOR);
  timeToTarget %= MILLISECONDS_TO_MINUTES_FACTOR;

  const seconds = Math.floor(timeToTarget / MILLISECONDS_TO_SECONDS_FACTOR);
  timeToTarget %= MILLISECONDS_TO_SECONDS_FACTOR;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export const VARIABLE = "asdasd";
