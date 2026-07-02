(function () {
  var progressBar = document.querySelector("[data-reading-progress]");
  var article = document.querySelector("[data-reading-article]");

  function updateReadingProgress() {
    if (!progressBar || !article) return;

    var rect = article.getBoundingClientRect();
    var articleTop = window.scrollY + rect.top;
    var scrollableDistance = article.scrollHeight - window.innerHeight;
    var currentPosition = window.scrollY - articleTop;
    var progress =
      scrollableDistance <= 0
        ? 1
        : Math.min(Math.max(currentPosition / scrollableDistance, 0), 1);

    progressBar.style.transform = "scaleX(" + progress + ")";
  }

  updateReadingProgress();
  window.addEventListener("scroll", updateReadingProgress, {
    passive: true,
  });
  window.addEventListener("resize", updateReadingProgress);
})();
