
function fillPage(mainTitle, mainDescription){
    let title = document.querySelector('.big-title-text');
    let descriptionUl = document.querySelector('.description');

    if (mainTitle) {
        title.textContent = mainTitle;
    }

    for (let i = 0; i < mainDescription.length; i++) {
        
        if (typeof(mainDescription[i]) === 'object') {
            let newDescriptionUl = document.createElement('ul');

            for (let j = 0; j < mainDescription[i].length; j++) {
                let newDescriptionLi = document.createElement('li');
                newDescriptionLi.classList.add('sub-item');
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
}

function insertRadioButton(title, id, name, checked){
    let descriptionUl = document.querySelector('.description');

    let newLi = document.createElement('li');

    let newInput = document.createElement('input');
    newInput.type = 'radio';
    newInput.id = id;
    newInput.name = name; 
    newInput.checked = checked;

    newLi.appendChild(newInput);

    let newLabel = document.createElement('label');
    newLabel.htmlFor = id;
    newLabel.innerHTML = title

    newLi.appendChild(newLabel);

    newLi.classList.add('main-item');
    
    descriptionUl.appendChild(newLi);

    return newInput;
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

function createInputfield(id, name, placeholder, className, newValue){
    let newInput = document.createElement('input');
    newInput.id = id;
    newInput.name = name;
    newInput.classList.add(className);
    newInput.value = newValue;
    newInput.placeholder = placeholder;
    return newInput;
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
    constants.nextButton.textContent = 'Напред';
    constants.backButton.textContent = 'Назад';
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