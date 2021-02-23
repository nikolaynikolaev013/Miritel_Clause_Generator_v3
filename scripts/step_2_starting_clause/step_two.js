function stepTwo(constants, userData){
    clearPage();

    let title = `Клауза за стандартен арбитраж`;
    let description = 
    [
        `Стандартната арбитражна клауза Мирител често е най-добрият избор за улеснение при съставяне на 
        договори и договаряне. Като се позовава на правилата на Мирител, стандартната клауза предоставя пълен 
        набор от правила и процедури и елиминира необходимостта от изписване на всяка непредвидена ситуация и 
        процедурен въпрос. В комбинация с управлението на делата на Мирител стандартната арбитражна клауза 
        предоставя просто, изпитано във времето средство за разрешаване на спорове, което се оказа високоефективно 
        в стотици хиляди спорове.`,
        'blank',
        `За да използвате стандартната клауза на Мирител, без да гледате различни незадължителни разпоредби
         на клауза, моля, кликнете върху „Копирай клаузата“ по-долу.`,
         'blank',
        `За да се ръководите от подбор от незадължителни въпроси, които много страни решават в арбитражните 
        споразумения, включително местоположението на арбитража, приложимото законодателство, броя на арбитрите,
         които ще бъдат назначени и други, моля изберете бутона „Добавяне на опции“ по-долу.
          Много страни използват стандартната клауза на Мирител като своя клауза за "основа" и
           след това я променят, за да адресират допълнителните разпоредби, описани на следващите екрани.`,
           'blank', 'blank',
    ];

    fillPage(title, description);


    let clausePreviewEl = document.querySelector(".clausePreviewDiv");
    let descriptionEl = document.querySelector(".description");

    descriptionEl.appendChild(clausePreviewEl);

    

}

function validateAndSend(userData){

    let errorStatusText = document.querySelector('#errorStatusText');
    let sentStatusText = document.querySelector('#sent-status-text');

    let isBusiness = document.querySelector('#business').checked;

    let domainNameLabel = document.querySelector('#domainNameInputLabel');
    let domainNameEl = document.querySelector('#domainName');
    let domainName = domainNameEl?.value;

    let registrationNumberLabel = document.querySelector('#registrationNumberLabel');
    let registrationNumberEl = document.querySelector('#registrationNumber');
    let registrationNumber = registrationNumberEl?.value;

    let registrationDateEl =  document.querySelector('#registrationDateInput');
    let registrationDate = registrationDateEl?.value;

    let senderNamesLabel = document.querySelector('#senderFullNameLabel');
    let senderNamesEl = document.querySelector('#senderFullName');
    let senderNames = senderNamesEl?.value;

    let senderEGNLabel = document.querySelector('#senderEGNLabel');
    let senderEGNEl = document.querySelector('#senderEGN');
    let senderEGN = senderEGNEl?.value;

    let senderEmailLabel = document.querySelector('#senderEmailLabel');
    let senderEmailEl = document.querySelector('#senderEmail');
    let senderEmail = senderEmailEl?.value;

    let receiverNamesLabel = document.querySelector('#receiverFullNameLabel');
    let receiverNamesEl = document.querySelector('#receiverFullName');
    let receiverNames = receiverNamesEl?.value;

    let receiverReceiverLabel = document.querySelector('#receiverEmailLabel');
    let receiverEmailEl = document.querySelector('#receiverEmail');
    let receiverEmail = receiverEmailEl?.value;

    let problemDescLabel = document.querySelector('#descriptionElementLabel')
    let problemDescEl = document.querySelector('#descriptonElement');
    let problemDesc = problemDescEl?.value;

    let typeOfSolve = userData.procedureFormat === 'mediation' ? 'медиация' : userData.procedureFormat === 'arbitrage' ? 'арбитраж' : '';

    let err = false;
    let EGNRegex = /^\d{10}$/g;
    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    let domainRegex = /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,}\.?((xn--)?([a-z0-9\-.]{1,61}|[a-z0-9-]{1,30})\.?bg)$/;
    let registrationNumberRegex = /[0-9]{5,}/;

    if (!domainName && !domainName.match(domainRegex)) {
        err = true; domainNameLabel.classList.add('error');
    }else{
        err = false; domainNameLabel.classList.remove('error');
    }
    
    if (!registrationNumber.match(registrationNumberRegex)) {
        err = true;
        registrationNumberLabel.classList.add('error');
    }else{
        err = false;
        registrationNumberLabel.classList.remove('error');
    }

    if (!senderNames) {err = true; senderNamesLabel.classList.add("error");
    }else{ err = false; senderNamesLabel.classList.remove("error");
    }

    if (!isBusiness) {
        if (!senderEGN.match(EGNRegex)) {err = true; senderEGNLabel.classList.add('error');
        }else{err = false; senderEGNLabel.classList.remove('error');
        }
    }

    if (!senderEmail.match(emailRegex)){err = true; senderEmailLabel.classList.add('error');
    }else{err = false; senderEmailLabel.classList.remove('error');
    }

    if (!receiverNames) { err = true;receiverNamesLabel.classList.add('error');
    }else{err = false;receiverNamesLabel.classList.remove('error');
    }

    if (!receiverEmail.match(emailRegex)) {err = true; receiverReceiverLabel.classList.add('error');
    }else{err = false; receiverReceiverLabel.classList.remove('error');
    }

    if (!problemDesc) {err = true; problemDescLabel.classList.add('error');
    }else{err = false; problemDescLabel.classList.remove('error');
    }

    if (err) {
        errorStatusText.style.display = '';
        return;
    }else{
        errorStatusText.style.display = 'none';
    }

    Email.send({
        SecureToken : "76bb458d-36ab-413b-aeb8-be7a575da621",
        To : `${receiverEmail}`,
        From : "medarb@miritel.bg",
        Subject : "Потвърждение за разрешаване на спор",
        Body : `Здравейте, ${receiverNames}!<br><br>
        ${senderNames} желае да разрещи спор с Вас чрез ${typeOfSolve}. <br>
        Описание на спора: ${problemDesc}<br>
        Ако сте съгласни, моля потвърдете тук:`
    }).then(
    );

    let EGNDetails = !isBusiness ? `\tЕГН: ${senderEGN}<br>` : '';
    let radoEmailContent = 
    `Изпратена клауза за ${typeOfSolve}.<br><br>
    Информация за домейна: <br>
        &nbsp;Домейн: ${domainName}<br>
        &nbsp;Номер на заявката за регистрация: ${registrationNumber}<br>
        &nbsp;Дата на заявката за регистрация: ${registrationDate}<br><br>
    Заявител: <br>
        &nbsp;Имена: ${senderNames}<br>
        &nbsp;${EGNDetails}
        &nbsp;Имейл: ${senderEmail}<br>
    Насрещна страна:<br>
        &nbsp;Имена: ${receiverNames}<br>
        &nbsp;Имейл: ${receiverEmail}<br>
        &nbsp;Описание на спора: ${problemDesc}`;


    Email.send({
        SecureToken : "76bb458d-36ab-413b-aeb8-be7a575da621",
        To : `medarb@miritel.bg`,
        From : "medarb@miritel.bg",
        Subject : "Потвърждение за разрешаване на спор",
        Body : radoEmailContent
    }).then(
        sentStatusText.style.display = ''
    );

}

function generateFormRadioButtons(userData){

    let descriptionEl = document.querySelector(".description");

    let sendTheClauseTitle = document.createElement('h2');
    sendTheClauseTitle.textContent = "Изпращане на клаузата по имейл";
    descriptionEl.appendChild(sendTheClauseTitle);
            
    //radio buttons
    let radioButtonsDiv = document.createElement('div');
    radioButtonsDiv.classList.add("formRadioButtons");

    let personRadioButt = createRadioButton('Частно лице', 'person', 'personOrBusiness');
    let businessRadioButt = createRadioButton('Юридическо лице', 'business', 'personOrBusiness');
    radioButtonsDiv.appendChild(personRadioButt);
    radioButtonsDiv.appendChild(businessRadioButt);

    descriptionEl.appendChild(radioButtonsDiv);


    radioButtonsDiv.addEventListener('click', (e)=>{
        if (e.target.id === 'person') {
            generateForm(userData, descriptionEl, 'person')
        }else if (e.target.id === 'business') {
            generateForm(userData, descriptionEl, 'business');
        }
    });
}

function generateForm(userData, descriptionEl, type){

    let oldFormEl = document.querySelector('.form');
    if (oldFormEl) {
        descriptionEl.removeChild(oldFormEl);
    }

    let formDiv = document.createElement('div');
    formDiv.classList.add('form');

    let domainInfoDiv = createDomainInfoDiv();
    formDiv.appendChild(domainInfoDiv);

    let senderDiv = createSenderDiv(type);
    formDiv.appendChild(senderDiv);

    let receiverDiv = createReceiverDiv();
    formDiv.appendChild(receiverDiv);

    let sentStatusText = document.createElement('h4');
    sentStatusText.textContent = 'Имейлът беше изпратен успешно!';
    sentStatusText.classList.add('sent-status-text');
    sentStatusText.id = 'sent-status-text';
    sentStatusText.style.display = 'none';
    formDiv.appendChild(sentStatusText);

    let errorStatusText = document.createElement('h4');
    errorStatusText.textContent = 'Моля въведете валидни стойности в полетата с червено.'
    errorStatusText.classList.add('error');
    errorStatusText.id = 'errorStatusText';
    errorStatusText.style.display = 'none';
    formDiv.appendChild(errorStatusText);

    formDiv.appendChild(document.createElement('br'));
    let sendButton = document.createElement('button');
    sendButton.textContent = "Изпрати!";
    sendButton.classList.add('button');
    sendButton.id = 'send-email-button';
    formDiv.appendChild(sendButton);
    descriptionEl.appendChild(formDiv);

    sendButton.addEventListener('click', (e)=>{
        if (e.target.id === 'send-email-button') {
            validateAndSend(userData);
        }
    });
}

function createDomainInfoDiv(){
    let domainInfoDiv = document.createElement('div');
    domainInfoDiv.classList.add('domainInfoDiv');

    let titleEl = document.createElement('h3');
    titleEl.textContent = 'Информация за домейна';
    domainInfoDiv.appendChild(titleEl);

    let domainNameLabel = createLabel('domainName', 'Домейн: ', 'domainNameInputLabel');
    let domainNameInput = createInputfield('domainName', 'domainName', '', 'domainNameInput', '');
    domainInfoDiv.appendChild(domainNameLabel);
    domainInfoDiv.appendChild(domainNameInput);

    let registrationNumberLabel = createLabel('registrationNumber', 'Номер на заявката за регистрация: ', 'registrationNumberLabel');
    let registrationNumberInput = createInputfield('registrationNumber', 'registrationNumber', '', 'registrationNumberInput', '');
    domainInfoDiv.appendChild(registrationNumberLabel);
    domainInfoDiv.appendChild(registrationNumberInput);

    //get current date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    currentDate = yyyy + '-' + mm + '-' + dd;

    let registrationDateLabel = createLabel('registrationDateInput', 'Дата на заявката за регистрация: ', 'registrationDateInputLabel');
    let registrationDateInput = document.createElement('input');
    registrationDateInput.type = 'date';
    registrationDateInput.id = 'registrationDateInput';
    registrationDateInput.name = 'registrationDateInput';
    registrationDateInput.classList.add('registrationDateInput');
    registrationDateInput.setAttribute('max', currentDate);
    registrationDateInput.value = currentDate;

    domainInfoDiv.appendChild(registrationDateLabel);
    domainInfoDiv.appendChild(registrationDateInput);

    return domainInfoDiv;
}
function createSenderDiv(type){

    //sender details
    let senderDiv = document.createElement('div');
    senderDiv.classList.add('senderDiv');

    let titleEl = document.createElement('h3');
    titleEl.textContent = 'Заявител';
    senderDiv.appendChild(titleEl);

    
    let senderFullNameLabel = createLabel('senderFullName', 'Три имена: ', 'senderFullNameLabel');
    let senderFullName = createInputfield('senderFullName', 'senderFullName', '', 'senderFullNameInput', '');
    senderDiv.appendChild(senderFullNameLabel);
    senderDiv.appendChild(senderFullName);

    if (type === 'person') {

        let senderEGNLabel = createLabel('senderEGN', 'ЕГН: ', 'senderEGNLabel');
        let senderEGN = createInputfield('senderEGN', 'senderEGN', '', 'senderEGNInput', '');
        senderDiv.appendChild(senderEGNLabel);
        senderDiv.appendChild(senderEGN);
    
    }
    
    let senderEmailLabel = createLabel('senderEmail', 'Email: ', 'senderEmailLabel');
    let senderEmail = createInputfield('senderEmail', 'senderEmail', '', 'senderEmailInput', '');
    senderDiv.appendChild(senderEmailLabel);
    senderDiv.appendChild(senderEmail);

    return senderDiv;
}
function createReceiverDiv(){

    //sender details
    let receiverDiv = document.createElement('div');
    receiverDiv.classList.add('receiverDiv');

    let titleEl = document.createElement('h3');
    titleEl.textContent = 'Насрещна страна';
    receiverDiv.appendChild(titleEl);
    
    let receiverFullNameLabel = createLabel('receiverFullName', 'Три имена: ', 'receiverFullNameLabel');
    let receiverFullName = createInputfield('receiverFullName', 'receiverFullName', '', 'receiverFullNameInput', '');
    receiverDiv.appendChild(receiverFullNameLabel);
    receiverDiv.appendChild(receiverFullName);
    
    let receiverEmailLabel = createLabel('receiverEmail', 'Email: ', 'receiverEmailLabel');
    let receiverEmail = createInputfield('receiverEmail', 'receiverEmail', '', 'receiverEmailInput', '');
    receiverDiv.appendChild(receiverEmailLabel);
    receiverDiv.appendChild(receiverEmail);

    let descriptionElementLabel = createLabel('descriptonElement', 'Описание на спора: ', 'descriptionElementLabel');
    let descriptonElement = document.createElement('textarea');
    descriptonElement.type = 'text';
    descriptonElement.name = 'descriptonElement';
    descriptonElement.id = 'descriptonElement';
    receiverDiv.appendChild(descriptionElementLabel);
    receiverDiv.appendChild(descriptonElement);

    return receiverDiv;
}