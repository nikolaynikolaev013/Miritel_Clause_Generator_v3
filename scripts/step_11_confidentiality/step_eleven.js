function stepEleven(userData){
    clearPage();


    let title = 'Поверителност';


    let descriptionP;
    
    if (userData.typeOfArgument === 'business') {
        descriptionP = `Докато Мирител и арбитрите се придържат към определени стандарти относно 
        неприкосновеността на личния живот или поверителността на изслушванията, страните може също да 
        пожелаят да си наложат ограничения относно това колко информация относно спора може да бъде разкрита 
        извън изслушването. Следният език може да помогне за тази цел.`;
    }else if (userData.typeOfArgument === 'domain') {
        descriptionP = `Докато Мирител и арбитрите се придържат към определени стандарти относно 
        неприкосновеността на личния живот или поверителността на изслушванията, страните може също да 
        пожелаят да си наложат ограничения относно това колко информация относно спора може да бъде разкрита
         извън изслушването.`;
    }
    
    

    //radio button 1
    let radio1Content = `Оставете арбитражната клауза мълчалива по отношение на поверителността.`;
    let radio1 = createRadioButton(radio1Content, 'first', 'confChoice');


    //radio button 2
    let radio2Content = `Освен ако това може да се изисква от закона, нито една от страните, нито арбитър не 
    може да разкрива съществуването, съдържанието или резултатите от какъвто и да е арбитраж по настоящото
     споразумение без предварителното писмено съгласие на двете страни.`;
    let radio2 = createRadioButton(radio2Content, 'second', 'confChoice');

    fillPage(title, [
        descriptionP, 'blank',
        radio1.outerHTML,
        radio2.outerHTML
    ]);


    
    let radioButtonsInputs = {
        first: null,
        second: null,
    }

    setValues(userData, 'confChoice', radioButtonsInputs);
}

function stepElevenValidateAndGetData(){
    let data = {
        confChoice:null,
    }

    let radioButtonsInputs = {
        first: null,
        second: null,
    }

    
    return validateMiltipleInputRadios(data, radioButtonsInputs);
}