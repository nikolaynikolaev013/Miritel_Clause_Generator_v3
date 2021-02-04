function stepSix(userData){
    clearPage();

    let title = 'Откритие';

    let descriptionP1 = `Откриването е една от най-скъпите и отнемащи време части от арбитражния процес
         и често е желателно да се контролира сумата и обхвата на откриване чрез клауза в договора. 
         Освен това процесът може да бъде ограничен по споразумение на страните по всяко време до и 
         включително предварителното изслушване. Съгласно Правилата на AAA арбитрите са упълномощени
          да ръководят обмен на документи преди съдебното заседание и да вземат решения относно обхвата 
          и / или допълнителното разкриване, свързани с нуждите на делото.`;
    let descriptionP2 = `В някои случаи обаче страните могат да искат да предвидят по-подходяща програма 
    за откриване в арбитражната си клауза. Въпреки че търговските правила на AAA мълчат по темата за
     депозитите, процедурите на AAA за големи сложни дела (които се прилагат при спорове на стойност 
        500 000 долара или повече) предвиждат депозити по преценка на арбитъра в изключителни случаи, 
        когато са налице основателни причини.`;
    let descriptionP3 = `Следващите клаузи предоставят различни възможности за обхвата на откритието.`;

    //radio button 1
    let radio1Content = `Оставете арбитражната клауза мълчалива по отношение на въпросите, свързани с 
    откриването, в арбитражното споразумение и прилагайте разпоредбите по подразбиране на Правилата за 
    търговски арбитраж.`;
    let radio1 = createRadioButton(radio1Content, 'silent', 'discovery');

    //radio button 2
    let radio2Input1 = createInputfield('numOfDeposits', 'numOfDeposits', 'брой', 'option');
    let radio2Input2 = createInputfield('numOfDays', 'numOfDays', 'брой дни', 'option');
    let radio2Input3 = createInputfield('numOfHours', 'numOfHours', 'брой дни', 'option');
    let radio2Content = `Депозитите са ограничени до максимум ${radio2Input1.outerHTML}
    на партия и се провежда в рамките на ${radio2Input2.outerHTML} дни от отправяне на искане. 
    Допълнителни депозити могат да бъдат насрочени само с разрешение на арбитрите и за добра причина. 
    Всяко отлагане е ограничено до максимум ${radio2Input3.outerHTML} продължителност на часа.`
    let radio2 = createRadioButton(radio2Content, 'countryChoice', 'discovery')

    //radio button 3
    let radio3Content = `Всяка страна, при писмено искане на другата страна, незабавно ще предостави на 
    другата копия на всички съответни документи. Не се допуска друго откритие.`;
    let radio3 = createRadioButton(radio3Content, 'sideToSide', 'discovery');

    //radio button 4
    let radio4Input1 = createInputfield('lessThanAmount', 'lessThanAmount', 'стойност в лв.', 'option');
    let radio4Input2 = createInputfield('moreТhan', 'moreТhan', 'стойност в лв.', 'option');
    let radio4Input3 = createInputfield('numOfDepositions', 'numOfDepositions', 'брой депозити', 'option');
    let radio4Input4 = createInputfield('number', 'number', 'число', 'option');

    let radio4Content = `Ако спорът е по-малък от ${radio4Input1.outerHTML} няма да има друго откриване 
    освен размяната на документи. Ако спорът приключи ${radio4Input2.outerHTML} , откритието се състои от не повече от
    ${radio4Input3.outerHTML} депозити на ${radio4Input4.outerHTML} или по-малко.`;
    let radio4 = createRadioButton(radio4Content, 'last', 'discovery');


    fillPage(title, [
        descriptionP1, 'blank',
        descriptionP2, 'blank',
        descriptionP3, 'blank', 
                       'blank',
        radio1.outerHTML,
        radio2.outerHTML,
        radio3.outerHTML,
        radio4.outerHTML
    ]);


    enableOnClickEvent('countryChoice', ['numOfDeposits', 'numOfDays', 'numOfHours']);
    enableOnClickEvent('last', ['lessThanAmount', 'moreТhan', 'numOfDepositions', 'number']);

    let radioButtonsInputs = {
        silent: null,
        countryChoice: ['numOfDeposits', 'numOfDays', 'numOfHours'],
        sideToSide: null,
        last: ['lessThanAmount', 'moreТhan', 'numOfDepositions', 'number']
    }

    setValues(userData, 'discovery', radioButtonsInputs);
}

function stepSixValidateAndGetData(){
    let data = {
        discovery:null,
    }

    let radioButtonsInputs = {
        silent: null,
        countryChoice: ['numOfDeposits', 'numOfDays', 'numOfHours'],
        sideToSide: null,
        last: ['lessThanAmount', 'moreТhan', 'numOfDepositions', 'number']
    }

    
    return validateMiltipleInputRadios(data, radioButtonsInputs);
}