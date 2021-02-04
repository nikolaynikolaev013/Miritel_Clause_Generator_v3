function stepTen(userData){
    clearPage();


    let title = 'Оценка на таксите на форума и таксите на адвокатите';


    let descriptionP = `Във вътрешни търговски дела не се изискват арбитри и не винаги пишат мотивирано
    становище, обясняващо присъждането им. Доколкото страните желаят такива становища, особено в големи,
     сложни случаи, те трябва да посочат това изискване в своята арбитражна клауза. Страните обаче трябва 
     да са наясно, че изискването на мотивирано становище може да увеличи разходите за арбитражния процес
      и може да изисква допълнително време за попълване.`;
    

    //radio button 1
    let radio1Content = `Оставете арбитражната клауза мълчалива относно формата на присъждане.`;
    let radio1 = createRadioButton(radio1Content, 'first', 'opinion');


    //radio button 2
    let radio2Content = `Решението на арбитрите се придружава от мотивирано становище.`;
    let radio2 = createRadioButton(radio2Content, 'second', 'opinion');

    fillPage(title, [
        descriptionP, 'blank',
        radio1.outerHTML,
        radio2.outerHTML
    ]);


    
    let radioButtonsInputs = {
        first: null,
        second: null,
    }

    setValues(userData, 'opinion', radioButtonsInputs);
}

function stepTenValidateAndGetData(){
    let data = {
        opinion:null,
    }

    let radioButtonsInputs = {
        first: null,
        second: null,
    }

    
    return validateMiltipleInputRadios(data, radioButtonsInputs);
}