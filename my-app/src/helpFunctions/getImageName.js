const getImageName = (weatherid) => {
  if (weatherDescription.includes('snow')) {
    return 'snow';
  }
  if (weatherDescription.includes('thunderstorm')) {
    return 'thunderstorm';
  }
  if (weatherDescription.includes('rain')) {
    return 'rain';
  }
  if (weatherDescription.includes('clouds')) {
    if (weatherDescription === 'few clouds') {
      return 'few-clouds';
    }
    else if (weatherDescription === 'scattered clouds') {
      return 'scattered-clouds';
    }
    else {
      return 'broken-clouds';
    }
  }

  if (weatherDescription.includes('storm')) {
    return ''
  }
}

export default getImageName;
