function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 3000);
}

export default fetchDataCallback;
