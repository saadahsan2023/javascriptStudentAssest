function updateCLock() {
  const clock = document.getElementById("clock");
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  clock.textContent = `${hours}:${minutes}:${seconds} `;
}

setInterval(updateCLock, 1000);
// 1s = 1000ms

updateCLock()


