const navItems = document.querySelectorAll(".nav-link");
const weatherInfo = document.getElementById("weather-info");
const searchInput = document.getElementById("searchInput");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    this.classList.add("active");
  });
});
searchInput.addEventListener("input", function () {
  getForecast(searchInput.value);
});

async function getLocation() {
  let userIp;
  await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      userIp = data.ip;
    })
    .catch((error) => {
      console.error("Error fetching IP:", error);
    });
  let result = await fetch(`http://ip-api.com/json/${userIp}`);
  let response = await result.json();
  getForecast(response.city);
}
getLocation();

async function getForecast(city) {
  let result = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3ba4054ceb9b4d82a25194943242206&q=${city}&days=3`
  );
  let response = await result.json();
  let currDate = response.location.localtime;
  let _currDate = new Date(currDate);
  let dayDate = _currDate.getDate();
  let dayIndex = _currDate.getDay();
  let monthIndex = _currDate.getMonth();
  console.log(response.current.condition.icon);
  displayData(response, dayIndex, monthIndex, dayDate);
}

let getDayName = (index) => {
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  // console.log(dayNames[index])
  return dayNames[index];
};
let getMonthName = (index) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[index];
};

function displayData(data, dIndex, mIndex, day) {
  let Box = `<div class="day-weather text-white col-md-4 d-flex flex-column justify-content-between">
                <div class="item-1 d-flex justify-content-between">
                    <h3 class="ms-2 fs-5 my-auto">${getDayName(dIndex)}</h3>
                    <h3 class="me-2 fs-5 my-auto">${
                      day + getMonthName(mIndex)
                    }</h3>
                </div>
                <div class="item-2 text-center">
                    <h3 class="h1">${data.location.name}</h3>
                    <h4>${data.current.temp_c} C</h4>
                    <img style="width:50px; height:50px" src="https:${
                      data.current.condition.icon
                    }" alt="weather image">
                    <h4 id="currentDesc">${data.current.condition.text}</h4>
                </div>
                <div class="item-3 d-flex justify-content-around">
                    <h5 class="my-auto"><i class="fa-solid fa-wind"></i> ${
                      data.current.wind_kph
                    } km/h</h5>
                    <h5 class="my-auto"><i class="fa-regular fa-compass"></i> ${
                      data.current.wind_dir
                    }</h5>
                    <h5 class="my-auto"><i class="fa-solid fa-droplet"></i> ${
                      data.current.humidity
                    }%</h5>
                </div>
            </div>
            <div class="day-weather text-white col-md-4 d-flex flex-column justify-content-between">
                <div class="item-1 d-flex justify-content-between">
                    <h3 class="ms-2 fs-5 my-auto">${getDayName(dIndex + 1)}</h3>
                    <h3 class="me-2 fs-5 my-auto">${
                      day + 1 + getMonthName(mIndex)
                    }</h3>
                </div>
                <div class="item-2 text-center">
                    <h3 class="h3">${
                      data.forecast.forecastday[1].day.maxtemp_c
                    } C</h3>
                    <h5>${data.forecast.forecastday[1].day.mintemp_c} C</h5>
                    <img style="width:50px; height:50px" src="https:${
                      data.forecast.forecastday[1].day.condition.icon
                    }" alt="weather image">
                    <h4 id="currentDesc">${
                      data.forecast.forecastday[1].day.condition.text
                    }</h4>
                </div>
                <div class="item-3 d-flex justify-content-around">
                    <h5 class="my-auto"><i class="fa-solid fa-wind"></i> ${
                      data.forecast.forecastday[1].day.maxwind_kph
                    } km/h</h5>
                    <h5 class="my-auto"><i class="fa-solid fa-droplet"></i> ${
                      data.forecast.forecastday[1].day.avghumidity
                    }%</h5>
                </div>
            </div>
            <div class="day-weather text-white col-md-4 d-flex flex-column justify-content-between">
                <div class="item-1 d-flex justify-content-between">
                    <h3 class="ms-2 fs-5 my-auto">${getDayName(dIndex + 2)}</h3>
                    <h3 class="me-2 fs-5 my-auto">${
                      day + 2 + getMonthName(mIndex)
                    }</h3>
                </div>
                <div class="item-2 text-center">
                    <h3 class="h3">${
                      data.forecast.forecastday[2].day.maxtemp_c
                    } C</h3>
                    <h5>${data.forecast.forecastday[2].day.mintemp_c} C</h5>
                    <img style="width:50px; height:50px" src="https:${
                      data.forecast.forecastday[2].day.condition.icon
                    }" alt="weather image">
                    <h4 id="currentDesc">${
                      data.forecast.forecastday[2].day.condition.text
                    }</h4>
                </div>
                <div class="item-3 d-flex justify-content-around">
                    <h5 class="my-auto"><i class="fa-solid fa-wind"></i> ${
                      data.forecast.forecastday[2].day.maxwind_kph
                    } km/h</h5>
                    <h5 class="my-auto"><i class="fa-solid fa-droplet"></i> ${
                      data.forecast.forecastday[2].day.avghumidity
                    }%</h5>
                </div>
            </div>`;
  weatherInfo.innerHTML = Box;
}
