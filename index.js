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

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
  }

  // Auckland
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTime = moment().tz("Asia/Tokyo");

    aucklandDateElement.innerHTML = aucklandTime.format("dddd, MMMM Do YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format("HH:mm:ss");
  }
}

updateTime();
setInterval(updateTime, 1000);
