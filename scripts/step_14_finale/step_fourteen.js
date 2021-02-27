function stepFourteen(userData){
    clearPage();


    let title = 'Финализиране';

    let clauseText = document.querySelector('#clausePreview').textContent;
    let descriptionP = clauseText;
    
    let downloadButton = document.createElement('button');
    downloadButton.id = 'downloadButton';
    downloadButton.textContent = 'Изтегляне на клаузата';
    downloadButton.classList.add('animate__animated', 'animate__pulse', 'animate__slower', 'animate__infinite', 'button' );
    

    let buttonsContainer = document.querySelector('.container');
    buttonsContainer.appendChild(downloadButton);


    fillPage(title, [
        descriptionP, 'blank'
    ]);

    addClauseClass();

    downloadButton = document.querySelector('#downloadButton');
    downloadButton.addEventListener('click', ()=>{
        let clauseText = document.querySelector('#clausePreview').textContent.trim();

        let blob = new Blob(
            [clauseText], {
                type: "text/plain;charset=utf-8"
            });

        saveAs(blob, 'clause.txt');
    })

    function addClauseClass(){
        let clause = document.querySelector('li.main-item');
        clause.classList.add('final-clause');
    }
}
