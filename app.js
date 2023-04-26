const searchBtn = document.querySelector("#search-btn");
const ipAddressInput = document.querySelector("#ip-address");
const mapSection = document.querySelector("#map-section");
const mapDiv = document.querySelector("#map");
const elResult = {
  ipAddresRes: document.querySelector("#ip-address-result"),
  locationRes: document.querySelector("#location-result"),
  timezoneRes: document.querySelector("#timezone-result"),
  ispRes: document.querySelector("#isp-result"),
};

searchBtn.addEventListener("click", () => {
  const ipAddress = ipAddressInput.value;

  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_I4mNaYbj9SWBUn2QYoLwrZas20BYq&ipAddress=${ipAddress}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { as, ip, isp, location } = data;

      elResult.ipAddresRes.innerHTML = ip;
      elResult.locationRes.innerHTML = location.region;
      elResult.timezoneRes.innerHTML = location.timezone;
      elResult.ispRes.innerHTML = isp;

      const mapUrl = `https://maps.google.com/maps?q=${location.lat},${location.lng}&t=k&z=13&output=embed`;

      mapDiv.innerHTML = `<iframe width="100%" height="450px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${mapUrl}"></iframe>`;
      mapSection.style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
