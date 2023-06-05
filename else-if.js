function vloggingCameraCost(price) {

if (price >= 200 && price <= 600) {
    return "Entry-level vlogging camera";
  } else if (price >= 600 && price <= 1500) {
    return "Mid-range vlogging camera";
  } else if (price >= 1500)
    {
    return "High-end/professional vlogging camera";
  }
}

console.log("You have a " + vloggingCameraCost(600));