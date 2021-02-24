function generateClause(userData){
    let clause = '';

    if (userData.step > 1) {
        clause += clauseForStepOne();
    }
    //nothing for step 2
    if (userData.step > 3) {
        clause += clauseForStepThree();
    }
    if (userData.step > 4) {
        clause += clauseForStepFour();
    }
    if (userData.step > 5) {
        clause += clauseForStepFive();
    }
    if (userData.step > 6) {
        clause += clauseForStepSix();
    }
    if (userData.step > 7) {
        clause += clauseForStepSeven();
    }
    if (userData.step > 8) {
        clause += clauseForStepEight();
    }
    if (userData.step > 9) {
        clause += clauseForStepNine();
    }
    if (userData.step > 10) {
        clause += clauseForStepTen();
    }
    if (userData.step > 11) {
        clause += clauseForStepEleven();
    }
    if (userData.step > 12) {
        clause += clauseForStepTwelve();
    }
    if (userData.step > 13) {
        clause += clauseForStepThirteen();
    }

    let clausePreviewEl = document.querySelector('.clausePreview');
    clausePreviewEl.textContent = clause;

    function clauseForStepThirteen(){
        if (userData.appealChoice === 'first') {
            return `Такъв отказ не позволява да се постанови съдебно решение срещу неплащащата страна при липса на представени доказателства, както е предвидено по-горе.`;
        }else if (userData.appealChoice === 'second') {
            return `Такъв отказ не позволява да се постанови съдебно решение срещу неплащащата страна при липса на представени доказателства, както е предвидено по-горе.`;
        }else{
            return '';
        }
    }
    function clauseForStepTwelve(){
        // for -> userData.nonPaymentChoice === 'first' => return ``;
        if (userData.nonPaymentChoice === 'second') {
            return `Страните се споразумяват, че неизпълнението или отказът на страна да плати необходимия си 
            дял от депозитите за арбитражно обезщетение или административни такси представлява отказ от тази 
            страна за представяне на доказателства или кръстосан разпит на свидетел. В такъв случай от другата 
            страна се изисква да представи доказателства и правни аргументи, каквито арбитърът (арбитрите) 
            може да изиска за постановяване на решение.`;
        }else{
            return '';
        }
    }
    function clauseForStepEleven(){
        //for -> userData.confChoice === 'first') => return ``;
        if (userData.confChoice === 'second') {
            return `Освен ако това може да се изисква от закона, нито една от страните, нито арбитър не може 
            да разкрива съществуването, съдържанието или резултатите от какъвто и да е арбитраж по настоящото
             споразумение без предварителното писмено съгласие на двете страни.`;
        }else{
            return '';
        }
    }
    function clauseForStepTen(){
        //for -> userData.opinion === 'first') => return ``;
        if (userData.opinion === 'second') {
            return `Арбитрите могат да определят как разходите и разходите по арбитража ще бъдат разпределени 
            между страните, но те не присъждат адвокатски хонорари. Решението на арбитрите се придружава от 
            мотивирано становище.`;
        }else{
            return '';
        }
    }
    function clauseForStepNine(){
        //for -> userData.fees === 'prevailing')=> return ``;
        if (userData.fees === 'second') {
            return `Съгласно Правилата за търговски арбитраж.`;//TODO?
        }else if (userData.fees === 'third') {
            return `Арбитърът (арбитрите) ще присъди на преобладаващата страна, ако има такива, определени от 
            арбитрите, всички техни разходи и такси. „Разходи и такси“ означава всички разумни разходи за 
            арбитраж преди арбитражното решение, включително арбитражните такси, административните такси,
             пътните разходи, разходите за джобни, като копиране и телефон, съдебни разноски, такси за свидетели 
             и адвокатски хонорари.`;
        }else if (userData.fees === 'fourth') {
            return ``;//TODO
        }else if (userData.fees === 'fifth') {
            return ``;//TODO
        }else{
            return '';
        }
    }
    function clauseForStepEight(){
        //for -> userData.durationChoice === 'silent') => return ``;
        if (userData.durationChoice === 'customDuration') {
            return `Решението се извършва в рамките на ${userData.duration} ${userData.duration === '1' ? 'месец' : 'месеца'} от подаването на съобщението за намерение за 
            арбитраж (искане) и арбитърът (арбитрите) се съгласяват да спазват този график, преди да приемат назначението. Този срок обаче може да бъде удължен от арбитъра поради добра причина,`;
        }else if (userData.durationChoice === 'ninetyDays') {
            return `Времето е от съществено значение за всеки арбитраж по това споразумение и арбитражните
             изслушвания ще се проведат в рамките на 90 дни от подаването и присъдите, постановени в рамките
              на 120 дни. Арбитърът/ите се съгласяват с тези ограничения преди да приемат назначението.`;
        }else{
            return '';
        }
    }
    function clauseForStepSeven(){
        if (userData.documentsChoice === 'standard') {
            return `Изслушванията ще се проведат в съответствие със стандартните процедури от Правилата за търговски арбитраж, които предвиждат лично изслушване.`;
        }else if (userData.documentsChoice === 'basedOnSubmission') {
            return `Арбитражът ще се основава на подаването на документи и няма да има лично или устно изслушване.`;
        }else{
            return '';
        }
    }
    function clauseForStepSix(){
        //for -> userData.discovery === 'silent') => return '';
        if (userData.discovery === 'countryChoice') {
            return `Депозитите са ограничени до максимум ${userData.numOfDeposits} на страна и се провеждат в рамките на ${userData.numOfDays} дни след отправяне на искане. Допълнителни депозити могат да бъдат насрочени само с разрешение
            на арбитрите и с добра причина, посочена. Всяко отлагане е ограничено до максимум ${userData.numOfHours} часа.`;
        }else if (userData.discovery === 'sideToSide') {
            return `По писмено искане на другата страна всяка страна незабавно ще предостави на 
            другата копия на всички съответни документи. Не се допуска друго откритие.`;
        }else if (userData.discovery === 'last') {
            return `Ако спорът е по-малък от ${userData.lessThanAmount}, няма да има друго откритие освен обмен на документи.
             Ако спорът е над ${userData.moreТhan}, откриването се състои от не повече от ${userData.numOfDepositions} депозита от ${userData.number} или по-малко.`;
        }else{
            return '';
        }
    }
    function clauseForStepFive(){
        //for -> userData.governingLawChoice === 'silent') => return '';
        if (userData.governingLawChoice === 'country') {
            return `Арбитражът се урежда от законите на държавата ${userData.countryInput}.`;
        }else{
            return '';
        }
    }
    function clauseForStepFour(){
        //for -> userData.qualification === 'silent') => return '';
        if (userData.qualification === 'arbiter') {
            return `Арбитърът е ${userData.selectedArbiter}.`;
        }else{
            return '';
        }
    }

    function clauseForStepThree(){
        //for -> userData.howManyArbiters === 'silent') => return '';
        if (userData.howManyArbiters === 'oneArbiter') {
            return `Исковете се разглеждат от един арбитър.`;
        }else if (userData.howManyArbiters === 'threeArbiters') {
            return `Исковете се разглеждат от състав от трима арбитри.`;
        }else if (userData.howManyArbiters === 'money') {
            return `Исковете се разглеждат от един арбитър, освен ако искът надвишава ${userData.amount} лв.,
             като в този случай спорът се разглежда от комисия от трима арбитри.`;
        }else{
            return '';
        }
    }
    
    function clauseForStepOne(){
        //typeOfArgument
        if (userData.timeOfArgument === 'current' ) {
            if (userData.procedureFormat === 'arbitrage') {
                return `Ние, долуподписаните страни, се съгласяваме да предоставим на арбитраж, администриран от Мирител ЕООД съгласно нейните правила за търговски арбитраж, долуописаният спор.
                Освен това се съгласяваме, че решението на всеки компетентен съд може да бъде вписано при присъждането.`
            }else if (userData.procedureFormat === 'mediation') {
                return `Ние, долуподписаните страни, се съгласяваме да подложим на медиация, администрирана от
                 Мирител ЕООД съгласно нейните процедури за търговско посредничество, долуописаният спор.`
            }else if (userData.procedureFormat === 'ma') {
                return `Ние, долуподписаните страни, се съгласяваме да подложим на медиация, администрирана от
                 Американската арбитражна асоциация съгласно нейните процедури за търговско посредничество, долуописаният спор.
                Ако такъв спор не бъде разрешен чрез медиация, 
                ние се съгласяваме да се подложим на арбитраж, администриран от Мирител ЕООД съгласно нейните правила за търговски арбитраж. Освен това се съгласяваме, 
                че решението на всеки компетентен съд може да бъде вписано при присъждането.`
            }else{
                return '';
            }
        }else{
            if (userData.procedureFormat === 'arbitrage') {
                return `Всички противоречия или искове, произтичащи от или свързани с този договор, или 
                неговото нарушение, се уреждат с арбитраж, администриран от Мирител ЕООД в съответствие с нейните правила за търговски арбитраж и решение относно 
                присъдата, постановена от арбитъра (арбитрите) вписан във всеки съд, който е компетентен 
                за това.`
            }else if (userData.procedureFormat === 'mediation') {
                return `Ние, долуподписаните страни, се съгласяваме да подложим на медиация, администрирана от Мирител ЕООД съгласно нейните процедури за търговско посредничество, своя спор.`
            }else if (userData.procedureFormat === 'ma') {
                return `Ние, долуподписаните страни, се съгласяваме да подложим на медиация, администрирана от Мирител ЕООД съгласно нейните процедури за търговско посредничество, своя спор.
                Ако такъв спор не бъде разрешен чрез медиация, ние се съгласяваме 
                да се подложим на арбитраж, администриран от Мирител ЕООД съгласно нейните 
                правила за търговски арбитраж. Освен това се съгласяваме, че решението на всеки компетентен съд 
                може да бъде вписано при присъждането.`
        }else{
            return ''
        }
    }
}
}