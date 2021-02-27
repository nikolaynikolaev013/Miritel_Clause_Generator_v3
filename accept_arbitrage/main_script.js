function getUrlData(){
    
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    let domain = urlParams.get('domain');
    let domainNumber = urlParams.get('domainNumber');
    let domainDate = urlParams.get('domainDate');

    let senderNames = urlParams.get('senderNames');
    let senderEGN = urlParams.get('senderEGN');
    let senderEmail = urlParams.get('senderEmail');

    let receiverNames = urlParams.get('receiverNames');
    let receiverEmail = urlParams.get('receiverEmail');
    let description = urlParams.get('description');
    let clauseText = urlParams.get('clause');
    
    let descriptionDiv = document.querySelector('#description');

    let informationDiv = document.createElement('div');
    if (domain) {
        let domainInfoStr = `Домейн: ${domain}<br>
                        Номер на заявката за регистрация: ${domainNumber}<br>
                        Дата на заявката за регистрация: ${domainDate}`;
        let domainInfoP = document.createElement('p');
        domainInfoP.innerHTML = domainInfoStr;
        informationDiv.appendChild(domainInfoP);
    }
    
    let EGNDetails = senderEGN ? `\tЕГН: ${senderEGN}<br>` : '';
    let senderInfoStr = `Име на заявител: ${senderNames}<br>
                        ${EGNDetails}
                        Имейл на заявител: ${senderEmail}`;
    let senderInfoP = document.createElement('p');
    senderInfoP.innerHTML = senderInfoStr;
    informationDiv.appendChild(senderInfoP);
    
    let receiverInfoStr = `Име на насрещна страна: ${receiverNames}<br>
                        Имейл на насрещна страна: ${receiverEmail}<br>
                        Описание на спора: ${description}<br><br>
                        <b>Арбитражна клауза:</b> ${clauseText}`;
    let receiverInfoP = document.createElement('p');
    receiverInfoP.innerHTML = receiverInfoStr;
    informationDiv.appendChild(receiverInfoP);
                        
    descriptionDiv.appendChild(informationDiv);

    let emailEGNDetails = senderEGN ? `&nbsp;ЕГН: ${senderEGN}<br>` : '';

    let acceptButton = document.querySelector('#acceptButton');

    let domainInfo = domain ? `Информация за домейна: <br>
    &nbsp;Домейн: ${domainName}<br>
    &nbsp;Номер на заявката за регистрация: ${registrationNumber}<br>
    &nbsp;Дата на заявката за регистрация: ${registrationDate}<br><br>` : '';

    acceptButton.addEventListener('click', ()=>{
            let senderEmailContent = 
        `Следният спор беше потвърден от насрещната страна:<br><br>
        ${domainInfo}
        Заявител: <br>
            &nbsp;Имена: ${senderNames}<br>
            ${emailEGNDetails}
            &nbsp;Имейл: ${senderEmail}<br>
        Насрещна страна:<br>
            &nbsp;Имена: ${receiverNames}<br>
            &nbsp;Имейл: ${receiverEmail}<br>
            &nbsp;Описание на спора: ${description}<br><br>
            <b>Арбитражна клауза:</b> ${clauseText}`;


        Email.send({
            SecureToken : "76bb458d-36ab-413b-aeb8-be7a575da621",
            To : `medarb@miritel.bg`,
            From : "medarb@miritel.bg",
            Subject : "Потвърден спор!",
            Body : senderEmailContent
        }).then(

        );

        Email.send({
            SecureToken : "76bb458d-36ab-413b-aeb8-be7a575da621",
            To : senderEmail,
            From : "medarb@miritel.bg",
            Subject : "Потвърден спор!",
            Body : senderEmailContent
        }).then(

        );

        Email.send({
            SecureToken : "76bb458d-36ab-413b-aeb8-be7a575da621",
            To : receiverEmail,
            From : "medarb@miritel.bg",
            Subject : "Потвърден спор!",
            Body : senderEmailContent
        }).then(

        );

        let thankYouTitle = document.querySelector('#thank-you-title');
        let sentEmailTitle = document.querySelector('#email-sent-title');

        thankYouTitle.style.display = 'block';
        sentEmailTitle.style.display = 'block';
        descriptionDiv.style.display = 'none';
        acceptButton.style.display = 'none';

        setTimeout(()=>{
            window.open('https://www.miritel.bg');
        }, 5000);
    });
};