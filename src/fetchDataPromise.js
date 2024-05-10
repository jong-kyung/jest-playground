function fetchDataPromise(callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("peanut butter");
    }, 2000);
  });
}

export default fetchDataPromise;
