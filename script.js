function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

const status = document.getElementById("status");
const output = document.getElementById("distance");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat1 = pos.coords.latitude;
      const lon1 = pos.coords.longitude;

      status.innerText = "Location captured ❤️";

      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const lat2 = data.latitude;
        const lon2 = data.longitude;

        const dist = calculateDistance(lat1, lon1, lat2, lon2);

        output.innerText = `${dist.toFixed(2)} km away 💔`;

      } catch (err) {
        status.innerText = "API error 😢";
        console.error(err);
      }
    },
    () => {
      status.innerText = "Location permission denied 🚫";
    }
  );
} else {
  status.innerText = "Geolocation not supported";
}
