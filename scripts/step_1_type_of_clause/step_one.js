function stepOne(constants, userData){
    constants.backButton.style.display = 'inline-block';
    constants.nextButton.disabled = false;

    clearPage();

    let title =  'Нека започваме!';

    //q1
    fillPage(title, ["Моля, определете естеството на спора:"]);
    insertBlankSpace();
    insertRadioButton('Търговски арбитраж', 'business', 'typeOfArgument');
    insertRadioButton('Арбитраж на спорове, свързани с .БГ домейни', 'domain', 'typeOfArgument');

    insertBlankSpace(2);

    //q2
    fillPage(null, ["Спорът е:"]);
    insertBlankSpace();
    insertRadioButton('Настоящ спор', 'current', 'timeOfArgument');
    insertRadioButton('Бъдещ спор', 'future', 'timeOfArgument');

    insertBlankSpace(2);

    //q2
    fillPage(null, ["Форма на процедурата:"]);
    insertBlankSpace();
    insertRadioButton('Арбитраж', 'arbitrage', 'procedureFormat');
    insertRadioButton('Медиация', 'mediation', 'procedureFormat');
    insertRadioButton('Медиация, и ако е необходимо арбитраж след това.', 'ma', 'procedureFormat');

    (function setValues(userData){
        let types = [
            'typeOfArgument',
            'timeOfArgument',
            'procedureFormat'
        ]
        

        for (const type of types) {
            if (userData[type]) {
                document.querySelector(`#${userData[type]}`).checked = true;
            }
        }
    })(userData);
}


function stepOneValidateAndGetData(){
    let data = {
        typeOfArgument:null,
        timeOfArgument:null,
        procedureFormat:null,
 }

    let err = false;

    for (const el in data) {
        let radio = document.getElementsByName(el);

        for (const butt of radio) {
            if (butt.checked) {
                data[el] = butt.id;
                break;
            }
        }

        if (!data[el]) {
            radio[0].parentElement.previousElementSibling.previousElementSibling.classList.add('error');
            err = true;
        }else{
            radio[0].parentElement.previousElementSibling.previousElementSibling.classList.remove('error');
        }
    }

    data.err = err;

    return data;
}