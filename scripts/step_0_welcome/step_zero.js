function stepZero(constants, userData){
    clearPage();

    let title = 'Добре дошли!';
    let description = 
    [
        `Инструментът на Miritel за създаване на арбитражни клаузи
     е предназначен да помогне на хората и организациите да разработят 
    ясни и ефективни споразумения за арбитраж и медиация. Моля, следвайте следните стъпки:`,
        [
            `Изберете типа клауза`,
            `Персонализирайте клаузата според вашите нужди`,
            `Клауза за преглед и запазване`,
        ]
    ];

    fillPage(title, description);
    constants.backButton.style.display = 'none';
    if (!userData.agreement) {
        constants.nextButton.disabled = true;
    }

    insertBlankSpace(3);

    let radioButtonLabel = `<b>Съгласен съм и приемам условията за използване на 
    генератора на www.Miritel.bg, описани <a href="https://miritel.bg">ТУК</a></b>`;

    let radioButton = insertRadioButton(radioButtonLabel, 'agreement', 'policy', userData.agreement);
    
    radioButton.addEventListener('click', ()=>{
        constants.nextButton.disabled = false;
    });
}

function stepZeroGetData(){
    let data = {
        agreement:true,
    }

    return data;
}