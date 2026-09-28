/* Classic script: works even when the application module cannot be parsed. */
(function () {
  var ready = false;
  function shell() {
    return document.getElementById("startup");
  }
  function failed() {
    if (ready || !shell()) return;
    document.getElementById("startup-message").textContent =
      "The page could not finish loading. Check your connection and reload.";
    document.getElementById("startup-retry").hidden = false;
  }
  var timer = setTimeout(failed, 15000);
  window.addEventListener("noesis:ready", function () {
    ready = true;
    clearTimeout(timer);
    if (shell()) shell().hidden = true;
  });
  window.addEventListener("noesis:failed", function () {
    clearTimeout(timer);
    if (shell()) shell().hidden = true;
  });
  window.addEventListener("error", failed, true);
  document.addEventListener("DOMContentLoaded", function () {
    var retry = document.getElementById("startup-retry");
    if (retry)
      retry.addEventListener("click", function () {
        window.location.reload();
      });
  });
})();
