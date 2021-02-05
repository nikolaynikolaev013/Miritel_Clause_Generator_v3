function stepFourteen(userData){
    clearPage();


    let title = 'Финализиране';

    let clauseText = document.querySelector('#clausePreview').textContent;
    let descriptionP = clauseText;
    
    let downloadButton = document.createElement('button');
    downloadButton.classList.add('button');
    downloadButton.id = 'downloadButton';
    downloadButton.textContent = 'Изтегляне на клаузата';


    fillPage(title, [
        descriptionP, 'blank', downloadButton.outerHTML
    ]);


    downloadButton = document.querySelector('#downloadButton');
    downloadButton.addEventListener('click', ()=>{
        let clauseText = document.querySelector('#clausePreview').textContent.trim();

        let blob = new Blob(
            [clauseText], {
                type: "text/plain;charset=utf-8"
            });

        saveAs(blob, 'clause.txt');
    })
}
