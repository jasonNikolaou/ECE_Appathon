const getImageName = (weatherID) => {
  if (weatherID >= 200 && weatherID < 300) { //thunderstorm
    return '11d';
  }
  if (weatherID >= 300 && weatherID < 400) { //drizzle
    return '09d';
  }
  if (weatherID >= 500 && weatherID <= 503) { //rain
    return '10d';
  }
  if (weatherID === 511) {
    return '13d';
  }
  if (weatherID >= 520 && weatherID <= 531) {
    return '09d';
  }
  if (weatherID >= 600 && weatherID < 700) { //snow
    return '13d';
  }
  if (weatherID >= 700 && weatherID < 800) { //atmoshere
    return '50d';
  }
  if (weatherID === 800) { //clear
    return '01d';
  }
  if (weatherID === 801) { //few clouds
    return '02d';
  }
  if (weatherID === 802) { //scattered clouds
    return '03d';
  }
  if (weatherID === 803) { //broken clouds
    return '04d';
  }
  if (weatherID === 804) { //overcast clouds
    return '04d';
  }
  console.log('weather id does not match any available icon...', weatherID);
  return '01d'; //we just return clear sky icon.
}

export default getImageName;
