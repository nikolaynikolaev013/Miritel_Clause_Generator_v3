function stepEight(userData){
    clearPage();


    let title = 'Продължителност на арбитражното производство';


    let descriptionP = `Известно е, че арбитражът AAA осигурява по-бърз метод за разрешаване на спорове, 
    но някои страни подчертават желанието си за ускорен резултат, като посочват период от време, в който 
    страните и арбитърът (арбитрите) трябва да приключат арбитража си. Когато се включват срокове за 
    приключване на арбитраж, е важно да се наложат реални срокове, тъй като неспазването на определените
     срокове може да застраши приложимостта на арбитражното решение. Това, което страните могат да считат
      за подходящи срокове, зависи от конкретните обстоятелства на сделката. Докато срокът от 60 дни за 
      приключване на арбитраж с иск от 10 000 долара е реалистичен, срокът от шест месеца може да бъде 
      много агресивен за фактически интензивен многомилионен спор. Примерен език е посочен по-долу.`;
    

    //radio button 1
    let radio1Content = `Оставете арбитражната клауза мълчалива по отношение на броя на арбитрите и 
    предвидете решението да бъде направено в съответствие с правилата и процедурите на ААА`;
    let radio1 = createRadioButton(radio1Content, 'silent', 'durationChoice');

    //radio button 2
    let radio2Input = createInputfield('duration', 'duration', 'Максимална продължителност', 'durationInput');
    let radio2Title = `Наградата се извършва в рамките на ${radio2Input.outerHTML} месеци от подаването
     на известието за намерение за арбитраж (искане), и арбитърът (арбитрите) се съгласява 
    да спазва този график, преди да приеме назначението. Този срок обаче може да бъде удължен от 
    арбитъра по основателна причина или по взаимно съгласие на страните.`;
    let radio2 = createRadioButton(radio2Title, 'customDuration', 'durationChoice');

    //radio button 3
    let radio3Content = `Времето е от съществено значение за всеки арбитраж съгласно настоящото 
    споразумение и арбитражните изслушвания се провеждат в рамките на 90 дни от подаването, а решенията, 
    постановени в рамките на 120 дни. Арбитър(и) се съгласяват с тези ограничения преди да приемат 
    назначението`;
    let radio3 = createRadioButton(radio3Content, 'ninetyDays', 'durationChoice');


    fillPage(title, [
        descriptionP, 'blank',
        radio1.outerHTML,
        radio2.outerHTML,
        radio3.outerHTML
    ]);


    
    let radioButtonsInputs = {
        silent: null,
        customDuration: ['duration'],
        ninetyDays: null,
    }

    setValues(userData, 'durationChoice', radioButtonsInputs);
}

function stepEightValidateAndGetData(){
    let data = {
        durationChoice:null,
    }

    let radioButtonsInputs = {
        silent: null,
        customDuration: ['duration'],
        ninetyDays: null,
    }

    
    return validateMiltipleInputRadios(data, radioButtonsInputs);
}