if (!navigator.serviceWorker.controller) {
  navigator.serviceWorker.register(".././sw.js").then(function (reg) {
    console.log("Service worker has been registered for scope: " + reg.scope);
  });
}
