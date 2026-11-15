// Sets .no-toc on <html> for recipe pages. document$ is the theme's page-load
// stream; it also fires after instant navigation swaps the page.
document$.subscribe(function () {
    document.documentElement.classList.toggle(
        "no-toc",
        /\/recipes\//.test(window.location.pathname)
    );
});
