export default (value, digits) => {
  const stringValue = value.toString();
  if (stringValue.length >= digits) return stringValue;

  let result = "";
  for (let i = digits - 1; i >= 0; i--) result += stringValue[i] ?? "0";
  return result;
};
