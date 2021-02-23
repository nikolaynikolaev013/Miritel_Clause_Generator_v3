function stepOne(constants, userData){
    constants.backButton.style.display = 'inline-block';
    constants.nextButton.disabled = false;

    clearPage();

    //questinot1 Radio Buttons
    let question1radio1 = createRadioButton('Търговски арбитраж', 'business', 'typeOfArgument');
    let question1radio2 = createRadioButton('Арбитраж на спорове, свързани с .БГ домейни', 'domain', 'typeOfArgument');
    
    //question2 Radio Buttons
    let question2radio1 = createRadioButton('Настоящ спор', 'current', 'timeOfArgument');
    let question2radio2 = createRadioButton('Бъдещ спор', 'future', 'timeOfArgument');

    //question3 Radio Buttons
    let question3radio1 = createRadioButton('Арбитраж', 'arbitrage', 'procedureFormat');
    let question3radio2 = createRadioButton('Медиация', 'mediation', 'procedureFormat');
    let question3radio3 = createRadioButton('Медиация, и ако е необходимо арбитраж след това.', 'ma', 'procedureFormat');
    
    let title =  'Нека започваме!';

    let description = 
    [
        //question 1
        "Моля, определете естеството на спора:", 'blank', 
        ['radio', question1radio1.outerHTML, 
           question1radio2.outerHTML],
         'blank',

        //question 2
        "Спорът е:", 'blank', 
        ['radio', question2radio1.outerHTML, 
            question2radio2.outerHTML],
             'blank',

        //question 3
        "Форма на процедурата:", 'blank', ['radio', question3radio1.outerHTML, 
                                question3radio2.outerHTML,
                                 question3radio3.outerHTML]
                                 , 'blank'
    ];


    fillPage(title, description);


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
            radio[0].parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.classList.add('error');
            err = true;
        }else{
            radio[0].parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.classList.remove('error');;
        }
    }

    data.err = err;

    return data;
}