function updateTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss");
  }

  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");
  }

  // Dubai
  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    let dubaiTime = moment().tz("Asia/Dubai");

    dubaiDateElement.innerHTML = dubaiTime.format("dddd, MMMM Do YYYY");
    dubaiTimeElement.innerHTML = dubaiTime.format("HH:mm:ss");
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
  }
}

updateTime();
setInterval(updateTime, 1000);
