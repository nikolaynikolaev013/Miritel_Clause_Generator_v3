function stepThree(userData){
    clearPage();

    //Radio buttons
        //RadioButton1
        let title1 = `Оставете арбитражната клауза мълчалива по отношение на 
            броя на арбитрите и предвидете решението да бъде направено в съответствие 
            с правилата и процедурите на ААА`
        let radioButton1 = createRadioButton(title1, 'silent', 'howManyArbiters');

        //RadioButton2
        let title2 = `Исковете се разглеждат от един арбитър.`
        let radioButton2 = createRadioButton(title2, 'oneArbiter', 'howManyArbiters');

        //RadioButton3
        let title3 = `Исковете се разглеждат от комисия от трима арбитри.`
        let radioButton3 = createRadioButton(title3, 'threeArbiters', 'howManyArbiters');

        //RadioButton4
        let priceInput = createInputfield('amount', 'amount', 'стойност', 'priceInput');
        priceInput.disabled = true;

        let title4 = `Исковете се разглеждат от един арбитър, освен ако сумата на иска не надвишава ${priceInput.outerHTML}
        лева. Моля, въведете размера на иска, надвишаването на който ще доведе от разглеждане на спорът от комисия от трима арбитри.`
        let radioButton4 = createRadioButton(title4, 'money', 'howManyArbiters');


    let title = 'Брой арбитри';
    let description;

    if (userData.typeOfArgument === 'business') {
        description = 
        [
            `Съгласно Правилника АРБИТРАЖЕН СЪД ЗА РАЗРЕШАВАНЕ СПОРОВЕ ОТНОСНО ДОМЕЙНИ / АСРСОД / на Мирител, 
            Съдът заседава в състав от един или трима арбитри. Един арбитър се назначава при наличие на общо 
            съгласие на страните относно личността му измежду лицата, включени в списъка на арбитрите на АСРСОД. 
            Ако липсва общо съгласие, всяка от страните посочва по един арбитър от списъка, а посочените от 
            страните арбитри избират трети арбитър. В случай, че някоя от страните не посочи арбитър или двамата
            посочени арбитри не могат да изберат трети, Председателят на УС на АСРСОД определя едноличен арбитър,
            а в случай на посочени от страните арбитри определя трети арбитър. Определянето на арбитър от 
            председателя на УС се извършва на случаен принцип.`,
            'blank',
            `Въпреки това, независимо от процедурите по неизпълнение на AAA, страните 
            могат да се споразумеят в клаузата си да имат един арбитър или трима, независимо от спорната сума.
            Имайте предвид, че някои страни предпочитат да бъдат назначени трима арбитри по техните дела, защото 
            това им осигурява по-голямо ниво на комфорт по отношение на процеса на вземане на решения. 
            Назначаването на трима арбитри обаче увеличава цената на арбитража с повече от три пъти цената на 
            един арбитър. В допълнение, назначаването на трима арбитри може значително да увеличи времето, 
            необходимо за сключване на арбитраж. Поради тези причини ААА все повече препоръчва да бъде назначен
            единствен арбитър, дори за спорове с претенции, които обикновено иначе се изслушват от трима арбитри.`,
            'blank',
            [
                'radio', radioButton1.outerHTML, radioButton2.outerHTML,
                                     radioButton3.outerHTML, radioButton4.outerHTML
            ],
             'blank'
        ];


    }
    else if (userData.typeOfArgument === 'domain') {
        description = 
        [
            `<b>Съгласно Правилника АРБИТРАЖЕН СЪД ЗА РАЗРЕШАВАНЕ СПОРОВЕ ОТНОСНО ДОМЕЙНИ / 
			АСРСОД / на Мирител, Съдът заседава в състав от един или трима арбитри. Един арбитър се назначава 
			при наличие на общо съгласие на страните относно личността му измежду лицата, включени в списъка на 
			арбитрите на АСРСОД. Ако липсва общо съгласие, всяка от страните посочва по един арбитър от списъка, 
			а посочените от страните арбитри избират трети арбитър. В случай, че някоя от страните не посочи арбитър 
			или двамата посочени арбитри не могат да изберат трети, Председателят на УС на АСРСОД определя едноличен
			 арбитър, а в случай на посочени от страните арбитри определя трети арбитър. Определянето на арбитър от
			  председателя на УС се извършва на случаен принцип. </b>`,
            'blank',
            `<b>Имайте предвид, че някои страни предпочитат да бъдат назначени трима 
			арбитри по техните дела, защото това им осигурява по-голямо ниво на комфорт по отношение на 
			процеса на вземане на решения. Назначаването на трима арбитри обаче увеличава цената на арбитража 
			с повече от три пъти цената на един арбитър. В допълнение, назначаването на трима арбитри може 
			значително да увеличи времето, необходимо за сключване на арбитраж. Поради тези причини Мирител 
			все повече препоръчва да бъде назначен единствен арбитър, дори за спорове с претенции, които
             обикновено иначе се изслушват от трима арбитри.</b>`, 'blank',
            [
                'radio', radioButton1.outerHTML, radioButton2.outerHTML,
                                     radioButton3.outerHTML
            ],
             'blank'
        ];
    }


    fillPage(title, description);
    insertBlankSpace();


    if (userData.typeOfArgument === 'business') {
        enableOnClickEvent('money', ['amount']);
    }

    let radioButtons = {
        silent: null, 
        oneArbiter: null,
        threeArbiters: null,
        money: ['amount']
    }

    setValues(userData, 'howManyArbiters', radioButtons);

    // (function setValues(userData){
    //     let types = [
    //         'howManyArbiters'
    //     ]
        
    
    //     for (const type of types) {
    //         if (userData[type]) {
    //             if (userData[type] === 'money' && userData['typeOfArgument'] === 'business') {
    //                 document.querySelector(`#${userData[type]}`).checked = true;
    //                 let priceInput = document.querySelector(`#amount`);
    //                 priceInput.value = userData.amount;
    //                 priceInput.disabled = false;
    //                 priceInput.focus();
    //             }else if (userData[type] != 'money') {
    //                 document.querySelector(`#${userData[type]}`).checked = true;
    //             }
    //         }
    //     }
    // })(userData);

}

function stepThreeValidateAndGetData(){
    let data = {
        howManyArbiters:null
    }
    let radioButtons = {
        silent: null, 
        oneArbiter: null,
        threeArbiters: null,
        money: ['amount']
    }

    return validateMiltipleInputRadios(data, radioButtons);
}