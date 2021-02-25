function generateSidebar(userData){
    setBurgerButton();
    let sidebarEl = document.querySelector('.sidebar');

    let startOverButtonDiv = document.createElement('div');
    startOverButtonDiv.classList.add('start_over_button_container');

    let startOverButtonEl = document.createElement('button');
    startOverButtonEl.classList.add('start_over_button');
    startOverButtonEl.classList.add('button');
    startOverButtonEl.type = 'submit';
    startOverButtonEl.name = 'clear_cookies';

    let iEl = document.createElement('i');
    iEl.classList.add('fas');
    iEl.classList.add('fa-chevron-left');

    startOverButtonEl.innerHTML = `${iEl.outerHTML} Започни отначало!`;
    startOverButtonDiv.appendChild(startOverButtonEl);

    let h2El = document.createElement('h2');
    h2El.id = 'navi';
    h2El.innerHTML = 'Навигация';

    sidebarEl.appendChild(startOverButtonDiv);
    sidebarEl.appendChild(h2El);

    updateSidebar(userData);
}

function updateSidebar(userData){
    let availableOptions = [];
    
    if (userData.step <= 2) {
        availableOptions = 
        [
            "Добре дошли!",
            "Тип клауза",
            "Примерна клауза"
        ];
    }else if (userData.typeOfArgument === "business") {
        availableOptions = 
        [
            "Добре дошли!", "Тип клауза", "Вашата клауза", "Брой арбитри", "Квалификации на арбитраж",
            "Приложимо право", "Откритие", "Документи само за изслушване", "Продължителност на арбитражното производство",
            "Оценка на форумните такси и адвокатските такси",
            "Становище, придружаващо наградата", "Поверителност", "Неплащане на арбитражни разходи",
            "Обжалване", "Финал"
        ];
    }else if (userData.typeOfArgument === "domain") {
        availableOptions = 
        [
            "Добре дошли!", "Тип клауза", "Вашата клауза", "Брой арбитри", "Квалификации на арбитраж",
            "", "", "", "","", "", "Поверителност", "",
            "", "Финал"
        ];
    }

    let oldUl = document.querySelector('.sidebar_ul');

    if (oldUl) {
        oldUl.parentElement.removeChild(oldUl);
    }

    let newUl = document.createElement('ul');
    newUl.classList.add('sidebar_ul');

    let counter = 0;
    for (const option of availableOptions) {

        if (option === "") {
            counter++;
            continue;
        }

        let newLiEl = document.createElement('li');
        let newIEl = document.createElement('i');

        newIEl.classList.add('far');
        newIEl.classList.add('fa-arrow-alt-circle-right');
        
        newLiEl.innerHTML = `${newIEl.outerHTML} ${option}`;

        //setting the class for current item page
        if (counter === userData.step) {
            newLiEl.classList.add('curr-item');
        }else{
            //setting the exception disabled button if type of argument on step 2 is not choosen yet
            if (userData.step === 0 && !userData.typeOfArgument
                || (counter === 2 && !userData.typeOfArgument)) {
                newLiEl.classList.add('disabled');
            }else{
                newLiEl.classList.add('enabled');  
            }
        }


        newLiEl.id = counter;
        newUl.appendChild(newLiEl);
        counter++;
    }

    let navigationH2El = document.querySelector('#navi');

    navigationH2El.parentElement.insertBefore(newUl, navigationH2El.nextSibling);

}