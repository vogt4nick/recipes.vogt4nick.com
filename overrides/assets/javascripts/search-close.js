// Zensical only closes the search dialog on navigation by clicking the
// #__search checkbox, which is a no-op when the dialog was opened without it
// (mobile), so the modal stays up. Send its own Ctrl+K toggle after the page
// changes if the dialog is still open.
(function () {
    var last = location.pathname;
    function dialog() {
        for (var el of document.body.children) {
            var d = el.shadowRoot && el.shadowRoot.querySelector("dialog[open]");
            if (d) return d;
        }
    }
    new MutationObserver(function () {
        if (location.pathname === last) return;
        last = location.pathname;
        setTimeout(function () {
            if (dialog())
                document.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true })
                );
        }, 300);
    }).observe(document.body, { childList: true, subtree: true });
})();
