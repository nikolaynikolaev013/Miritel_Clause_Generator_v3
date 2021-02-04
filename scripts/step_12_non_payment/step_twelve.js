function stepTwelve(userData){
    clearPage();


    let title = 'Неплащане на арбитражни разходи';


    let descriptionP = `Търговските правила предоставят на страните определени средства за защита, 
        ако арбитражното обезщетение или административните такси не са платени изцяло от никоя от страните.
        Страните обаче могат да се договорят за определени последици (т.е. отказ), ако някоя от страните не 
        успее да плати своя дял от необходимите депозити за арбитражно обезщетение или административни такси,
        като включи следната опция.`;
    
    

    //radio button 1
    let radio1Content = `Оставете арбитражната клауза безмълвна по отношение на 
    неплащането на таксите на арбитражния форум.`;
    let radio1 = createRadioButton(radio1Content, 'first', 'nonPaymentChoice');


    //radio button 2
    let radio2Content = `Страните се споразумяват, че неспазването или отказът на страна да плати необходимия 
        си дял от депозитите за арбитражно обезщетение или административни такси представлява отказ от 
        тази страна за представяне на доказателства или кръстосан разпит на свидетел. В такъв случай от 
        другата страна се изисква да представи доказателства и правни доводи, каквито арбитърът (арбитрите) 
        може да изиска за постановяване на решение. Подобен отказ не позволява да се вземе решение за
        неизпълнение на задължението срещу неплатещата страна при липса на представени доказателства, 
        както е предвидено по-горе.`;
    let radio2 = createRadioButton(radio2Content, 'second', 'nonPaymentChoice');

    fillPage(title, [
        descriptionP, 'blank',
        radio1.outerHTML,
        radio2.outerHTML
    ]);


    
    let radioButtonsInputs = {
        first: null,
        second: null,
    }

    setValues(userData, 'nonPaymentChoice', radioButtonsInputs);
}

function stepTwelveValidateAndGetData(){
    let data = {
        nonPaymentChoice:null,
    }

    let radioButtonsInputs = {
        first: null,
        second: null,
    }

    
    return validateMiltipleInputRadios(data, radioButtonsInputs);
}