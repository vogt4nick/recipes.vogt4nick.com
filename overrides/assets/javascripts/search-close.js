// Zensical only closes the search dialog on navigation by clicking the
// #__search checkbox, which is a no-op when the dialog was opened without it
// (mobile), so the modal stays up. Send its own Ctrl+K toggle after each page
// load if the dialog is still open.
document$.subscribe(function () {
    setTimeout(function () {
        for (var el of document.body.children) {
            if (el.shadowRoot && el.shadowRoot.querySelector("dialog[open]")) {
                document.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true })
                );
                return;
            }
        }
    }, 300);
});
