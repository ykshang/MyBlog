function hotDownloadManifest(requestTimeout) {
  // eslint-disable-line no-unused-vars
  requestTimeout = requestTimeout || 10000;
  return new Promise(function (resolve, reject) {
    if (typeof XMLHttpRequest === "undefined")
      return reject(new Error("No browser support"));
    try {
      var request = new XMLHttpRequest();
      var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
      request.open("GET", requestPath, true);
      request.timeout = requestTimeout;
      request.send(null);
    } catch (err) {
      return reject(err);
    }
    request.onreadystatechange = function () {
      if (request.readyState !== 4)
        return;
      if (request.status === 0) {
        // timeout
        reject(new Error("Manifest request to " + requestPath + " timed out."));
      } else if (request.status === 404) {
        // no update available
        resolve();
      } else if (request.status !== 200 && request.status !== 304) {
        // other failure
        reject(new Error("Manifest request to " + requestPath + " failed."));
      } else {
        // success
        try {
          var update = JSON.parse(request.responseText);
        } catch (e) {
          reject(e);
          return;
        }
        resolve(update);
      }
    };
  });
}
