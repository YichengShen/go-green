function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

const uniqueId = (prefix) => {
  // TODO use shortid
  let id = new Date().valueOf().toString(36);
  sleep(1); // wait for one millisecond
  return prefix ? prefix + id : id;
};

export default uniqueId;
