if (!navigator.serviceWorker.controller) {
  navigator.serviceWorker.register("https://raw.githubusercontent.com/Llewellyn500/portfolio/main/sw.js").then(function (reg) {
    console.log("Service worker has been registered for scope: " + reg.scope);
  });
}
