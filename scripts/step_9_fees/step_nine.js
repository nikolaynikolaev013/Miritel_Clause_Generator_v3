function stepNine(userData){
    clearPage();


    let title = 'Оценка на таксите на форума и таксите на адвокатите';


    let descriptionP = `Правилата на ААА обикновено предвиждат административните такси да се поемат,
    както са направени, но че тези такси и обезщетението на арбитрите могат да бъдат разпределени от 
    арбитрите в решението. В допълнение, адвокатските хонорари се поемат от всяка от страните, тъй като 
    са направени, освен ако закон или друг орган разрешава на арбитъра (арбитрите) да оцени тези хонорари 
    за или срещу определена страна. Тези разпоредби обаче могат да бъдат изменени със съгласие на страните. 
    Таксите и разходите за арбитража, включително адвокатските възнаграждения, могат да бъдат посочени в 
    арбитражната клауза. Можете да изберете една от следните опции, занимаващи се с такси и разходи.`;
    

    //radio button 1
    let radio1Content = `Преобладаващата страна има право на присъждане на разумни адвокатски такси.`;
    let radio1 = createRadioButton(radio1Content, 'prevailing', 'fees');


    //radio button 2
    let radio2Content = `Съгласно Правилата за търговски арбитраж арбитрите ще имат правомощието 
    да разпределят разходите по арбитражния процес между страните, но ще имат правомощието да 
    разпределят адвокатските хонорари само ако даден закон им позволява да го направят.`;
    let radio2 = createRadioButton(radio2Content, 'second', 'fees');

    //radio button 3
    let radio3Content = `Арбитърът (арбитрите) присъжда на преобладаващата страна, ако има такава, 
    както е определено от арбитрите, всички техни разходи и такси. „Разходи и такси“ са всички 
    разумни разходи за арбитраж преди арбитраж, включително таксите на арбитража, административните
     такси, пътните разноски, разходите за собствени джобове като копиране и телефон, съдебни разходи,
      такси за свидетели и адвокатски хонорари.`;
    let radio3 = createRadioButton(radio3Content, 'third', 'fees');

    //radio button 4
    let radio4Content = `Всяка страна поема собствените си разходи и разходи и равен дял от арбитражните 
    и административните такси на арбитража.`;
    let radio4 = createRadioButton(radio4Content, 'fourth', 'fees');

    //radio button 5
    let radio5Content = `Арбитрите могат да определят как разходите и разходите по арбитража ще бъдат 
    разпределени между страните, но те не присъждат адвокатски хонорари.`;
    let radio5 = createRadioButton(radio5Content, 'fifth', 'fees');

    fillPage(title, [
        descriptionP, 'blank',
        radio1.outerHTML,
        radio2.outerHTML,
        radio3.outerHTML,
        radio4.outerHTML,
        radio5.outerHTML
    ]);


    
    let radioButtonsInputs = {
        prevailing: null,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
    }

    setValues(userData, 'fees', radioButtonsInputs);
}

function stepNineValidateAndGetData(){
    let data = {
        fees:null,
    }

    let radioButtonsInputs = {
        prevailing: null,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
    }

    
    return validateMiltipleInputRadios(data, radioButtonsInputs);
}