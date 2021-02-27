function setBurgerButton(){
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;

    let sidebar = document.querySelector('.sidebar');
    
    menuBtn.addEventListener('click', () => {
        if (window.innerWidth <= 740) {
            if(!menuOpen) {
                menuBtn.classList.add('open');
                menuOpen = true;

                sidebar.style.display = 'block';
                
                animateCSS('.sidebar', 'backInDown').then((message) => {
                    sidebar.style.display = 'block';
                });
            } else {
                menuBtn.classList.remove('open');
                menuOpen = false;
                animateCSS('.sidebar', 'backOutUp').then((message) => {
                    sidebar.style.display = 'none';
                });
            }
        }
    });
}