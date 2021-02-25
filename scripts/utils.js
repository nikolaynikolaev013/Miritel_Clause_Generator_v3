
function fillPage(mainTitle, mainDescription){
    let title = document.querySelector('.big-title-text');
    let descriptionUl = document.querySelector('.description');

    if (mainTitle) {
        title.textContent = mainTitle;
    }

    for (let i = 0; i < mainDescription.length; i++) {
        
        if (typeof(mainDescription[i]) === 'object') {
            let newDescriptionUl = document.createElement('ul');

            let isRadio = false;

            if (mainDescription[i][0] === 'radio' ) {
                isRadio = true;
                mainDescription[i].shift();
            }

            for (let j = 0; j < mainDescription[i].length; j++) {
                let newDescriptionLi = document.createElement('li');
                if (isRadio) {
                    newDescriptionLi.classList.add('radio-item');
                }else{
                    newDescriptionLi.classList.add('sub-item');
                }
                newDescriptionLi.innerHTML = mainDescription[i][j];
                newDescriptionUl.appendChild(newDescriptionLi);
                descriptionUl.appendChild(newDescriptionUl)
            }

        }else if (mainDescription[i] === 'blank') {
            insertBlankSpace();
        }else{
            let newDescriptionLi = document.createElement('li');
            newDescriptionLi.classList.add('main-item');
            newDescriptionLi.innerHTML = mainDescription[i];
            descriptionUl.appendChild(newDescriptionLi)
        }
    }

    descriptionUl.classList.add('animate__animated');
    descriptionUl.classList.add('animate__backInDown');
    descriptionUl.classList.add('animate__faster');
}
function insertBlankSpace(multiplier = 1){
    for (let i = 0; i < multiplier; i++) {
        let descriptionUl = document.querySelector('.description');
        let newBr = document.createElement('br');
    
        descriptionUl.appendChild(newBr);
    }
}
function insertParagraph(content, pClass, id){
    let descriptionUl = document.querySelector('.description');

    let newP = document.createElement('p');
    newP.innerHTML = content;

    if (pClass) {
        newP.classList.add(pClass);
    }
    if (id) {
        newP.id = id;
    }

    descriptionUl.appendChild(newP)
    return newP;
}
function createRadioButton(title, id, name, checked){
    let newSpan = document.createElement('span');

    let newInput = document.createElement('input');
    newInput.type = 'radio';
    newInput.id = id;
    newInput.name = name; 
    newInput.checked = checked;

    newSpan.appendChild(newInput);

    let newLabel = document.createElement('label');
    newLabel.htmlFor = id;
    newLabel.innerHTML = title

    newSpan.appendChild(newLabel);

    newSpan.classList.add('radio-item');

    return newSpan;
}
function createInputfield(id, name, placeholder, className, newValue){
    let newInput = document.createElement('input');
    newInput.id = id;
    newInput.name = name;
    newInput.classList.add(className);
    newInput.value = newValue;
    newInput.placeholder = placeholder;
    return newInput;
}
function createLabel(htmlFor, content, id){
    let newLabel = document.createElement('label');
    newLabel.htmlFor = htmlFor;
    newLabel.innerHTML = content;
    if (id) {
        newLabel.id = id;
    }

    return newLabel;
}
function createParagraph(content, pClass, id){
    let newP = document.createElement('p');
    newP.innerHTML = content;

    if (pClass) {
        newP.classList.add(pClass);
    }
    if (id) {
        newP.id = id;
    }
    return newP;
}
function createSelectMenu(id, name, options){
    let selectEl = document.createElement('select');
    selectEl.id = id;
    selectEl.name = name;

    for (const option of options) {
        let optionEl = document.createElement('option');
        optionEl.innerHTML = option;
        optionEl.value = option;
        selectEl.appendChild(optionEl);
    }

    return selectEl;

    //<a class="arbitersLink" href="https://miritel.bg" target="_blank">Списък на всички арбитри</a>

}
function createA(title, aClass, href, target){
    let aEl = document.createElement('a');
    aEl.classList.add(aClass);
    aEl.href = href;
    aEl.target = target;
    aEl.innerHTML = title;
    return aEl;
}
function clearPage(){
    let descriptionUl = document.querySelector('.description');
    let title = document.querySelector('.big-title-text');

    let newDescriptionEl = document.createElement('ul');

    newDescriptionEl.classList.add('description');
    //cloning the descriptionUl element and removing the old one in order to remove all eventListeners
    descriptionUl.parentElement.insertBefore(newDescriptionEl, descriptionUl);
    descriptionUl.parentElement.removeChild(descriptionUl);
    title.textContent = '';

}
function resetButtons(constants){
    let nextButton = constants.nextButton;
    if (nextButton) {
        nextButton.textContent = 'Напред';
        nextButton.style.display = '';
    }
    
    let backButton = constants.backButton;
    if (backButton) {
        backButton.textContent = 'Назад';
        backButton.style.display = '';
    }

    let clausePreviewEl = document.querySelector('.clausePreviewDiv');
    if (clausePreviewEl) {
        clausePreviewEl.style.display = '';

        let mainContentEl = document.querySelector('.main-content');
        mainContentEl.appendChild(clausePreviewEl);
    }
}
function copyToClipboard() {
    let clause = document.getElementById("clausePreview");

    window.navigator.clipboard.writeText(clausePreview.innerText);

    document.getElementById('copy_button').style.backgroundColor= "green";
    document.getElementById('copy_button').innerHTML = "Клаузата беше копирана успешно.";

}

function setCookie(newData, oldData){
    let mergedData = {
        ...oldData,
        ...newData
    }
    let json = JSON.stringify(mergedData);
    
    document.cookie = `data=${json}`;

    return getCookie();

}

// function setValues(userData, inputs){
//     for (const type of Object.keys(inputs)) {
//         if (userData[type]) {

//             document.querySelector(`#${userData[type]}`).checked = true;
            
//             if (inputs[type]) {
//                 newSelectEl = document.querySelector(`#${inputs[type][0]}`);
//                 newSelectEl.disabled = true;

//                 if (inputs.hasOwnProperty(type)) {
//                     newSelectEl.value = userData[inputs[type][1]];
//                     newSelectEl.disabled = false;
//                 }
//             }
//         }
//     }
// };

function enableOnClickEvent(radioButtID, selectElIDs){
    let radio2 = document.querySelector(`#${radioButtID}`);

    radio2.parentElement.parentElement.parentElement.addEventListener('click', (e)=>{

        for (const input of selectElIDs) {
            newSelectEl = document.querySelector(`#${input}`);

            if (e.target === radio2 
                    || (radio2.checked)) {
                newSelectEl.disabled = false;
            }else{
                newSelectEl.disabled = true;
            }
        }
    });
}

// function validateSingleNumberInputOfARadioButton(data, radioValue, inputID){

//     let err = false;
//     let radio = document.getElementsByName(Object.keys(data)[0]);

//     for (const butt of radio) {
//         if (butt.checked) {
//             data[Object.keys(data)[0]] = butt.id;
//             break;
//         }
//     }

//     if (data[Object.keys(data)[0]] === `${radioValue}`) {
//         let moneyInput = document.querySelector(`#${inputID}`);

//         if (moneyInput.value && !isNaN(moneyInput.value) && Number(moneyInput.value) > 1) {
//             data[Object.keys(data)[1]] = moneyInput.value;
//         }else{
//             if (!document.querySelector('.error')) {
//                 insertParagraph('Моля, въведете валидна стойност или изберете друга опция преди да продължите.', 'error', 'error')
//             }
//             err = true;
//         }
//     }

//  data.err = err;

//  return data;
// }

function setValues(userData, cookieMainName, radioButtonsInputs){

    for (const type in radioButtonsInputs) {
        if (userData[cookieMainName] === type) {
            document.querySelector(`#${type}`).checked = true;
            

            if (radioButtonsInputs[type] != null) {
                for (const inputValue of radioButtonsInputs[type]) {
                    let inputEl = document.querySelector(`#${inputValue}`);
                    inputEl.value = userData[inputValue];
                }
            }
        }
    }
}

function validateSingleInputOfAllRadioButtons(data, radioValue, inputID){

    let err = false;
    let radio = document.getElementsByName(Object.keys(data)[0]);

    for (const butt of radio) {
        if (butt.checked) {
            data[Object.keys(data)[0]] = butt.id;
            break;
        }
    }

    if (data[Object.keys(data)[0]] === `${radioValue}`) {
        let inputField = document.querySelector(`#${inputID}`);

        if (inputField.value) {
            data[inputID] = inputField.value;
        }else{
        if (!document.querySelector('.error')) {
            insertParagraph('Моля, въведете валидна стойност или изберете друга опция преди да продължите.', 'error', 'error')
        }
            err = true;
        }
    }
    else if (data[Object.keys(data)[0]] == undefined){
        err = true;
    }

    console.log(data[Object.keys(data)[0]]);
    data.err = err;

    return data;
}

function validateSingleRadioButton(data, radioValue){

    let err = true;
    let radio = document.querySelector(`#${radioValue}`);

    if (radio && radio.checked) {
        err = false;
        data[Object.keys(data)[0]] = radio.id;
        }
    data.err = err;

    return data;
}
function validateSingleInputOfOneRadioButton(data, radioValue, inputID, isNumber = false){

    let err = true;
    let radio = document.querySelector(`#${radioValue}`);

    if (radio && radio.checked) {
        err = false;
        data[Object.keys(data)[0]] = radio.id;

        
        if (data[Object.keys(data)[0]] && data[Object.keys(data)[0]] === `${radioValue}`) {
                let inputField = document.querySelector(`#${inputID}`);

                if (isNumber && inputField.value && !isNaN(inputField.value) && Number(inputField.value) >= 0) {
                    err = false;
                    data[inputID] = inputField.value;
                }
                else if (inputField.value) {
                    err = false;
                    data[inputID] = inputField.value;
                }else{
                    err = true;
                }
            }
        }
    data.err = err;

    return data;
}
function validateMiltipleInputRadios(data, radioButtons){

    let hasCheckedBtn = false;
    let err = true;

    for (const radio in radioButtons) {
        //checks if the radio button has any input fields
        if (radioButtons[radio] != null) {
            let radioButton = document.querySelector(`#${radio}`);
            if (radioButton && radioButton.checked) {
                hasCheckedBtn = true;

                for (const input of radioButtons[radio]) {
                    //returns data.err = false if the input is valid
                    let returnedData = validateSingleInputOfOneRadioButton(data, radio, input);
                    //TODO with numbers
                    err = returnedData.err;
                    if (err) {
                        continue;
                    }
                }
            }
        }
        //only radio button, whithout input fields in it
        else{
            let radioButton = document.querySelector(`#${radio}`);
            if (radioButton && radioButton.checked) {
                hasCheckedBtn = true;

                //returns data.err = false if the button is checked
                let returnedData = validateSingleRadioButton(data, radio);
                err = returnedData.err;
            }
        }

        if (!err) {
            break;
        }
    }

    if (err && hasCheckedBtn) {
        if (!document.querySelector('.error')) {
            insertParagraph('Моля, въведете валидна стойност или изберете друга опция преди да продължите.', 'error', 'error')
        }
    }else{
        err = false;
    }
    
    data.err = err;

    return data;
    // let radio = document.getElementsByName(Object.keys(data)[0]);

    // for (const butt of radio) {
    //     if (butt.checked) {
    //         data[Object.keys(data)[0]] = butt.id;
    //         break;
    //     }
    // }

    // if (data[Object.keys(data)[0]] === `${radioValue}`) {
    //     let inputField = document.querySelector(`#${inputID}`);

    //     if (inputField.value) {
    //         data[inputID] = inputField.value;
    //     }else{
    //     if (!document.querySelector('.error')) {
    //         insertParagraph('Моля, въведете валидна стойност или изберете друга опция преди да продължите.', 'error', 'error')
    //     }
    //         err = true;
    //     }
    // }
    // else if (data[Object.keys(data)[0]] == undefined){
    //     err = true;
    // }

    // console.log(data[Object.keys(data)[0]]);
    // data.err = err;

    // return data;
}

function getCookie(oldData){
    let cookie = document.cookie;
    let prefix = 'name=';
    let pureJson = cookie.slice(prefix.length);

    if (pureJson.length > 0) {
        let retreivedData = JSON.parse(pureJson);
        let mergedData = {
            ...oldData,
            ...retreivedData
        }
        return mergedData;
    }
    return oldData;
}
function clearCookie(){
    document.cookie = "data= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}