function encodeAndDecodeMessages() {
    const $divs = document.querySelectorAll('div#container main#main div');

    const $textareas = document.querySelectorAll('textarea');

    $textareas[0].nextElementSibling.addEventListener('click', encode);
    $textareas[1].nextElementSibling.addEventListener('click', decode);



    function encode(e) {
        const text = $textareas[0].value
            .split('').map((char) => {
                return String.fromCharCode((char.charCodeAt(0) + 1));
            })
            .join("");
        $textareas[0].value = "";
        $textareas[1].value = text;
    }

    function decode() {
        let text = $textareas[1].value;

        let decodeText = text.split('').map((char) => {
            return String.fromCharCode((char.charCodeAt(0) - 1));
        })
            .join("");
        $textareas[1].value = decodeText;
    }
}