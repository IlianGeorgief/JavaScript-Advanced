function createArticle() {
    let inputTitle = (document.getElementById("createTitle"));
    let inputTextArea = (document.getElementById("createContent"));
    let sectionArticleList = document.getElementById("articles");
    let button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", (e) => {
        if (inputTitle.value !== '' && inputTextArea.value !== '') {

            sectionArticleList.innerHTML += `<h3>${inputTitle.value}</h3>`;
            sectionArticleList.innerHTML += `<p>${inputTextArea.value}</p>`;


        }
        inputTitle.value = '';
        inputTextArea.value = '';
      
console.log(inputTitle);
console.log(inputTextArea);
    })
}