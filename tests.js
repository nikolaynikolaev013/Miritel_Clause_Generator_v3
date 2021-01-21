(function radioButtonWithInputText(){
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


// <input type="radio" id="money" name="howManyArbiters" onclick="enableValueInput()"value="money" <?php echo ((isset($obj->numOfArbiters)) && $obj->numOfArbiters == 'money') ? 'checked' : ''?>>
// <label for="money">Исковете се разглеждат от един арбитър, освен ако сумата на иска 
// 	не надвишава
// 		<input type="text" id="amount" name="amount" class="priceInput" placeholder="стойност" value="<?php echo (isset($obj->value) && isset($obj->numOfArbiters) && $obj->numOfArbiters == 'money') ? $obj->value : ''?>" <?php echo (isset($obj->numOfArbiters) && $obj->numOfArbiters == 'money' ? "" : "disabled")?>>
// 		лева. Моля, въведете размера на иска, надвишаването на който ще доведе от разглеждане на спорът от комисия от трима арбитри.</label><br>
// <br>
            
    function createInputfield(id, name, placeholder, className, newValue){
        let newInput = document.createElement('input');
        newInput.id = id;
        newInput.name = name;
        newInput.classList.add(className);
        newInput.value = newValue;
        newInput.placeholder = placeholder;
        return newInput;
    };

    let input = createInputfield('amoundId', 'amountName', 'СтойностPlaceholder', null)
    title = `something ${input} after the input`;
    return insertRadioButton(title, 'id', 'name', true);
});

function cookiesTest(){
    let newData = {name:'Nikolay'};
    let oldData = {age:30}


    let prefix = 'name='
    let json = setCookie(newData, oldData).slice(prefix.length);

    function setCookie(newData, oldData){
        let mergedData = {
            ...oldData,
            ...newData
        }

        let json = JSON.stringify(mergedData);
        return `name=${json}`;
    }

    console.log(json);

    function getCookie(oldData, json){
        let cookie = json;
        let retreivedData = JSON.parse(cookie);

        let mergedData = {
            ...oldData,
            ...retreivedData
        }
        return mergedData;
    }

    let parsedData = getCookie(oldData, json);

    console.log(parsedData);
}

(function testForof(){
    availableOptions = 
        [
            "Добре дошли!", "Тип клауза", "Вашата клауза", "Брой арбитри", "Квалификация на арбитраж",
            "Поверителност"
        ];

        let str = '';

        for (const option of availableOptions) {
            str += option;
        }

        console.log(str);
})();