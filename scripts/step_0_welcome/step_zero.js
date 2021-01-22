function stepZero(constants, userData){
    clearPage();

    let radioButtonLabel = `<b>Съгласен съм и приемам условията за използване на 
    генератора на Miritel.bg, описани <a class='link' href="https://miritel.bg">ТУК</a></b>`;

    let agreementRadioButton = createRadioButton(radioButtonLabel, 'agreement', 'policy', userData.agreement);

    let title = 'Добре дошли!';
    let description = 
    [
        `Инструментът на Miritel за създаване на арбитражни клаузи
     е предназначен да помогне на хората и организациите да разработят 
    ясни и ефективни споразумения за арбитраж и медиация. Моля, следвайте следните стъпки:`,
        //inner UL items
        [
            `Изберете типа клауза`,
            `Персонализирайте клаузата според вашите нужди`,
            `Клауза за преглед и запазване`,
        ],
        'blank', agreementRadioButton.outerHTML,
    ];

    fillPage(title, description);

    constants.backButton.style.display = 'none';

    if (!userData.agreement) {
        constants.nextButton.disabled = true;
    }

    agreementRadioButton = document.querySelector('#agreement');

    (function setValues(userData){
        if (userData['agreement']) {
            document.querySelector(`#agreement`).checked = true;
        }
    })(userData);

    agreementRadioButton.addEventListener('click', ()=>{
        constants.nextButton.disabled = false;
    });
}

function stepZeroGetData(){
    let data = {
        agreement:true,
    }

    return data;
}