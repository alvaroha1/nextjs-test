const switchCase = (obj, defaultValue = "_default") => (value) => {
  return obj[value] || defaultValue;
}

const days = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday"
}

const getDay = switchCase(days);

console.log(getDay(0));
console.log(getDay(1));
console.log(getDay(3));
console.log(getDay(5));