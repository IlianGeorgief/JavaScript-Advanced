function toggle() {
    const $divs = document.querySelectorAll("div > div");
    const $button = $divs[0].querySelector('span.button');

    if ($button.textContent === "More") {
        $button.textContent = "Less";
        $divs[1].style.display = "block";
    } else {
        $button.textContent = "More";
        $divs[1].style.display = 'none';
    }
}