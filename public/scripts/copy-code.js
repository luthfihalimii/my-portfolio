document.addEventListener("click", async function (event) {
  var button = event.target && event.target.closest("[data-copy-code]");
  if (!button) return;

  var container = button.closest(".group");
  var code = container && container.querySelector("code");
  var text = code && code.textContent;
  if (!text || !navigator.clipboard) return;

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
    window.setTimeout(function () {
      button.textContent = "Copy";
    }, 1600);
  } catch (_) {}
});
