function stepSeven(userData){
    clearPage();


    let title = 'Документи само за изслушване';


    let descriptionP = `Страните могат да се споразумеят да се откажат от устно изслушване и да определят 
    въпроса си въз основа на писмено становище. Подаването на документи обикновено включва изложение на 
    факти, писмени аргументи, заедно с документи или доказателства, свързани с арбитража. Обикновено изслушванията 
    само с документи могат да спестят значителни количества време и пари, но те също така са по-често използвани 
    за искове с по-малка стойност в долари`;
    

    //radio button 1
    let radio1Content = `Изслушванията ще се провеждат в съответствие със стандартните процедури на 
    Правилата за търговския арбитраж, които предвиждат изслушванията на лицата.`;
    let radio1 = createRadioButton(radio1Content, 'standard', 'documentsChoice');

    //radio button 2
    let radio2Content = `Арбитражът ще се основава на подаване на документи и
     няма да има лично или устно изслушване.`;
    let radio2 = createRadioButton(radio2Content, 'basedOnSubmission', 'documentsChoice');


    fillPage(title, [
        descriptionP, 'blank',
        radio1.outerHTML,
        radio2.outerHTML,
    ]);

    let radioButtonsInputs = {
        standard: null,
        basedOnSubmission: null,
    }

    setValues(userData, 'documentsChoice', radioButtonsInputs);
}

function stepSevenValidateAndGetData(){
    let data = {
        documentsChoice:null,
    }

    let radioButtonsInputs = {
        standard: null,
        basedOnSubmission: null,
    }

    
    return validateMiltipleInputRadios(data, radioButtonsInputs);
}