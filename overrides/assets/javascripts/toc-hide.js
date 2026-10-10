// Sets .no-toc on <html> for recipe pages. Instant navigation swaps page
// content without a reload, so re-check whenever the DOM changes.
(function () {
    var pattern = /\/recipes\//;
    function sync() {
        document.documentElement.classList.toggle(
            "no-toc",
            pattern.test(window.location.pathname)
        );
    }
    sync();
    new MutationObserver(sync).observe(document.body, {
        childList: true,
        subtree: true,
    });
    window.addEventListener("popstate", sync);
})();
