function createDomEl() {

    const $elments = {
        askQuestionTextArea: document.querySelector('#inputSection textarea'),
        userNameInpitField: document.querySelector('#inputSection div input[type="username"]'),
        askQuestionBtn: document.querySelector('#inputSection div button'),
        pendingQestionsDiv: document.querySelector('#pendingQestions'),
        openQuestionsDiv: document.querySelector('#openQuestions')
    };

    $elments.askQuestionBtn.addEventListener('click', askQuestion);


    function askQuestion() {
        const question = $elments.askQuestionTextArea.value;
        const givenUserName = $elments.userNameInpitField.value;
        const username = givenUserName !== "" ? givenUserName : 'Anonymous';


        let pendingQestionDiv = createHTMLElement('div', 'pendingQuestion');
        let usernameImage = createHTMLElement(
            'img',
            null, null,
            [{ k: 'src', v: './images/user.png' }, { k: 'width', v: 32 }, { k: 'height', v: 32 }]
        );
        let usernameSpan = createHTMLElement('span', null, username);
        let questionP = createHTMLElement('p', null, question);
        let actionsDiv = createHTMLElement('div', 'action',);
        let archiveBtn = createHTMLElement('button', 'archive', 'Archive', null, { name: 'click', func: archiveQuestion });
        let openBtn = createHTMLElement('button', 'open', 'Open', null, { name: 'click', func: openQuestion });

        actionsDiv = appendChildrenToParent([archiveBtn, openBtn], actionsDiv);
        pendingQestionDiv = appendChildrenToParent([usernameImage, usernameSpan, questionP, actionsDiv], pendingQestionDiv);

        $elments.pendingQestionsDiv.appendChild(pendingQestionDiv);
    }


    function archiveQuestion(e) {
        const questionDiv = e.target.parentNode.parentNode;
        parent.remove();
    }

    function openQuestion(e) {
        const questionDiv = e.target.parentNode.parentNode;
        questionDiv.classList = "openQuestion";
        let actionsDiv = questionDiv.querySelector('div.actions');
        actionsDiv.innerHTML = "";
        const replyBtn = createHTMLElement('button', 'reply', 'Reply', null, { name: 'click', func: replyToQuestion });
        actionsDiv = appendChildrenToParent([replyBtn], actionsDiv);

        let replySectionDiv = createHTMLElement('div', 'replySection', null, [{ k: 'style', v: 'display: none;' }]);
        let replyInput = createHTMLElement('input', 'replyInput', null, [{ k: 'type', v: 'text' }, { k: ' placeholder', v: 'Reply to this question here...' }]);
        let sendAnswerBtn = createHTMLElement('button', 'replyBuutton', 'Send', null, { name: 'click', func: addAnswer });
        let answerOl = createHTMLElement('ol', 'reply', null, [{ k: 'type', v: '1' }]);

        replySectionDiv = appendChildrenToParent([replyInput, sendAnswerBtn, answerOl], replySectionDiv);

        questionDiv.appendChild(replySectionDiv);
        $elments.openQuestionsDiv.appendChild(questionDiv);
    }

    function addAnswer() {
        const parent = this.parentNode;
        const answerInput = parent.querySelector('input').value;

        let answerLi = createHTMLElement('li', null, answerInput);

        parent.querySelector('ol').appendChild(answerLi);
    }

    function replyToQuestion(e) {
        let button = e.target;
        let replySectionDiv = this.parentNode.parentNode.querySelector('.replySection');

        if (button.textContent === "Reply") {
            replySectionDiv.style.display = "block";
            button.textContent = "Back";
        } else {
            replySectionDiv.style.display = "none";
            button.textContent = "Reply";
        }
    }

    function createHTMLElement(tagName, className, textContent, attributes, event) {
        let element = document.createElement(tagName);

        if (className) {
            element.classList.add(className);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        if (attributes) {
            attributes.forEach((a) => element.setAttribute(a.k, a.v));
        }

        if (event) {
            element.addEventListener(event.name, event.func);
        }

        return element;
    }

    function appendChildrenToParent(children, parent) {
        children.forEach((c) => parent.appendChild(c));
        return parent;
    }

}