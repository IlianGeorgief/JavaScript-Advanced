function visitedWebSites() {
    const aHrefs = document.querySelectorAll("a");

   Array.from(aHrefs).forEach(el => {
        let counter = 0;
        el.addEventListener("click", function () {
            counter++;
            el.nextElementSibling.textContent = `visited ${counter} times`;
        });
    });
}

function solve() {
    let sites = document.querySelectorAll('.link-1');
    Array.from(sites).forEach(site => {
        site.addEventListener(`click`, (ev) => {
            let paragraph = site.querySelector('p');
            let counter = paragraph.textContent.split(` `)[1];
            counter++;
            paragraph.innerHTML = `visited ${counter} times`;
        });
    });
}