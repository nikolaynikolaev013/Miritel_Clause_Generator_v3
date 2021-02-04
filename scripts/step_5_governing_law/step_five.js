function stepFive(userData){
    clearPage();

    let title = 'Приложимо право';

    let radio1Title = 'Оставете арбитражната клауза мълчалива по отношение на това кой закон ще урежда арбитражната процедура.';
    let radio1 = createRadioButton(radio1Title, 'silent', 'governingLawChoice');

    let radio2Input = createInputfield('countryInput', 'countryInput', 'държава', 'country');
    let radio2Title = `Арбитражът се ръководи от законите на държавата ${radio2Input.outerHTML}.`;
    let radio2 = createRadioButton(radio2Title, 'country', 'governingLawChoice');

    let description = 
    [
        '<b>Обичайно е страните да определят закона, който ще урежда арбитражния процес.</b>',
        'blank',
        radio1.outerHTML, 
        radio2.outerHTML
    ];

    fillPage(title, description);

    enableOnClickEvent('country', ['countryInput']);


    let radioButtonsInputs = {
        silent: null,
        country: ['countryInput'],
    }

    setValues(userData, 'governingLawChoice', radioButtonsInputs);

    // (function setValues(userData){
    //     let types = [
    //         'governingLawChoice'
    //     ]
    //     newSelectEl = document.querySelector(`#countryInput`);
    //     newSelectEl.disabled = true;

    //     for (const type of types) {
    //         if (userData[type]) {

    //             document.querySelector(`#${userData[type]}`).checked = true;
                
    //             if (userData[type] === 'country') {
    //                 newSelectEl.value = userData.country;
    //                 newSelectEl.disabled = false;
    //             }
    //         }
    //     }
    // })(userData);
}

function stepFiveValidateAndGetData(){
    let data = {
        governingLawChoice:null,
        country:null,
    }

    let radioButtonsInputs = {
        silent: null,
        country: ['countryInput'],
    }

    return validateMiltipleInputRadios(data, radioButtonsInputs);
}