function stepFour(constants, userData){
    clearPage();

    let title = 'Квалификации на арбитрите';
    let description = 
    [
        `Когато подготвят списък на предложените арбитри за разглеждане от страните, ръководителите на 
        дела на AAA ще търсят в базата данни на AAA арбитри, които имат опит в предмета на спора и 
        които имат опит, подходящ за конкретния спор. Независимо от това, много страни намират за полезно
        да посочат дали арбитърът (ите) имат определен опит или опит. Моля, имайте предвид обаче, 
        че прекалено специфичните квалификации на арбитър, които се съдържат в арбитражната клауза, 
        могат значително да намалят броя на арбитрите, които са на разположение за назначаване в този 
        случай.`
    ]

    fillPage(title, description);

    insertBlankSpace();

    insertRadioButton('Оставете арбитражната клауза мълчалива по отношение на арбитражните квалификации, посочени в арбитражната клауза.',
        'silent', 'qualification');
    
    insertBlankSpace();

    insertParagraph(`Арбитражната клауза посочва, че арбитърът има определени минимални квалификации,
         опит или опит.`, 'arbiterDesc');

    let availableArbiters = 
    [
        'Радослав Данков',
        'Данков'
    ];
    let newSelectEl = createSelectMenu('selectedArbiter', 'selectedArbiter',availableArbiters);
    let newAEl = createA('Списък на всички арбитри', 'arbitersLink', 'https://miritel.bg', '_blank');

    let radioButtContent = `Арбитърът(ите) е: ${newSelectEl.outerHTML} ${newAEl.outerHTML}`;
    let radioButton = insertRadioButton(radioButtContent, 'arbiter', 'qualification');

    (function setValues(userData){
        let types = [
            'qualification'
        ]

        for (const type of types) {
            if (userData[type]) {

                document.querySelector(`#${userData[type]}`).checked = true;
                newSelectEl = document.querySelector(`#selectedArbiter`);
                
                if (userData[type] === 'arbiter') {
                    newSelectEl.value = userData.arbiter;
                }else{
                    newSelectEl.disabled = true;
                }
            }
        }
    })(userData);


    radioButton.parentElement.parentElement.addEventListener('click', (e)=>{
        newSelectEl = document.querySelector('#selectedArbiter');

        if (e.target === radioButton 
                || (radioButton.checked)) {
            newSelectEl.disabled = false;
        }else{
            newSelectEl.disabled = true;
        }
    });
}


function stepFourValidateAndGetData(){
    let data = {
        qualification:null,
        arbiter:null,
    }

    let radio = document.getElementsByName(Object.keys(data)[0]);

     for (const butt of radio) {
         if (butt.checked) {
             data[Object.keys(data)[0]] = butt.id;
             break;
         }
     }

    if (data[Object.keys(data)[0]] === "arbiter") {
        let selectArbiterOptionsEl = document.querySelector('#selectedArbiter');
        data[Object.keys(data)[1]] = selectArbiterOptionsEl.value;
        console.log(selectArbiterOptionsEl.value);
    }
 return data;

}