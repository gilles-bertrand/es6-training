document.querySelector('.box').addEventListener('click', function() {
    let first = "opening";
    let second = "open";

    if (this.classList.contains('opening')) {
        // first = "open";
        // second = "opening";
        [second, first] = [first, second] //cf 16-destructuration
    }

    this.classList.toggle(first);
    setTimeout(() => {
        this.classList.toggle(second);
    }, 500);
});