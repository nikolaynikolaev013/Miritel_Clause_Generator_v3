window.addEventListener('load', ()=>{
    const constants = {
        backButton: document.querySelector('#back'),
        nextButton: document.querySelector('#next')
    }

    let userData = {
        step: 0,
    }
    
    userData = getCookie(userData);
    generateSidebar(userData);
    stepChooser();

    let sidebarUl = document.querySelector('.sidebar_ul');

    sidebarUl.parentElement.addEventListener('click', (e)=>{

        if (e.target === document.querySelector('.start_over_button')) {
            document.cookie = "data= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
            location.reload();
        }else if (!isNaN(e.target.id) 
                    && Number(e.target.id) !== Number(userData.step)
                    && !e.target.classList.contains('disabled')) {
            let data = {};
            data.step = Number(e.target.id);

            userData = setCookie(data, userData);
            updateSidebar(userData);
            stepChooser();
        }
    });

    constants.backButton.addEventListener('click', () => {
        if (userData.step > 0) {
            userData.step--;
            resetButtons(constants);

            setCookie(userData, null);
            updateSidebar(userData);
            stepChooser();
        }
    });

    constants.nextButton.addEventListener('click', ()=>{
        userData = getCookie(userData);
        resetButtons(constants);

        let data = null;

        

        switch (userData.step) {
            case 0:
                userData.step++;
                stepChooser();
                data = stepZeroGetData();
                break;
            case 1: 
                data = stepOneValidateAndGetData();
                if (!data.err) {
                    userData.step++;
                    stepChooser();
                }
                break;
            case 2:
                userData.step++;
                //there's not new data from that step
                stepChooser();
                break;
            case 3: 
                data = stepThreeValidateAndGetData();
                if (!data.err) {
                    userData.step++;
                    stepChooser();
                }
                break;
            case 4: 
                data = stepFourValidateAndGetData();
                userData.step++;
                stepChooser();
                break;
            case 5: 
                data = stepFiveValidateAndGetData();
                if (!data.err) {
                    userData.step++;
                    stepChooser();
                }
                break;
            case 6: 
                data = stepSixValidateAndGetData();
                if (!data.err) {
                    userData.step++;
                    stepChooser();
                }
                break;
            case 7: 
                data = stepSevenValidateAndGetData();
                userData.step++;
                stepChooser();
                break;
            case 8: 
                data = stepEightValidateAndGetData();
                if (!data.err) {
                    userData.step++;
                    stepChooser();
                }
                break;
            case 9: 
                data = stepNineValidateAndGetData();
                userData.step++;
                stepChooser();
                break;
            case 10: 
                data = stepTenValidateAndGetData();
                userData.step++;
                stepChooser();
                break;
            case 11: 
                data = stepElevenValidateAndGetData();
                userData.step++;
                stepChooser();
                break;
            case 12: 
                data = stepTwelveValidateAndGetData();
                userData.step++;
                stepChooser();
                break;
            case 13: 
                data = stepThirteenValidateAndGetData();
                userData.step++;
                stepChooser();
                break;
        }

        updateSidebar(userData);
        userData = setCookie(data, userData);
    });


    function stepChooser(){

        switch (userData.step) {
            case 0:
                stepZero(constants, userData);
                break;
            case 1:
                stepOne(constants, userData);
                break;
            case 2:
                stepTwo();
                constants.nextButton.textContent = 'Добавяне на опции';
                break;
            case 3:
                stepThree(userData);
                break;
            case 4:
                stepFour(userData);
                break;
            case 5:
                stepFive(userData);
                break;
            case 6:
                stepSix(userData);
                break;
            case 7:
                stepSeven(userData);
                break;
            case 8:
                stepEight(userData);
                break;
            case 9:
                stepNine(userData);
                break;
            case 10:
                stepTen(userData);
                break;
            case 11:
                stepEleven(userData);
                break;
            case 12:
                stepTwelve(userData);
                break;
            case 13:
                stepThirteen(userData);
                constants.nextButton.textContent = 'Приключи и виж новата си клауза!';
                break;
            default:
                console.log('err');
                break;
        }
    }

});