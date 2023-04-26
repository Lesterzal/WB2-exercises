let currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour < 6) {
  console.log("Good night!");
} else if (currentHour >= 6 && currentHour < 12) {
  console.log("Good morning!");
} else if (currentHour >= 12 && currentHour < 18) {
  console.log("Good afternoon!");
}