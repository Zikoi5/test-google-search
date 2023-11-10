function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(args);
    }, wait);
  };
}

export default debounce;
