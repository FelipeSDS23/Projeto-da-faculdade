; (function () {
    // INICIO HEADER
    const burgerMenuBtn = document.querySelector("#burger-menu-btn");
    const menuMobile = document.querySelector("#menu-mobile");
    const mainContent = document.querySelector("#main-content");
    const listaDeOpcoesMenu = menuMobile.querySelectorAll("a");

    burgerMenuBtn.addEventListener("click", openCloseMenu);
    window.addEventListener("resize", resize);

    controlaMenuMobile(listaDeOpcoesMenu);

    function openCloseMenu() {
        if (menuMobile.style.display === "flex") {
            menuMobile.style.display = "none";
            mainContent.style.display = "block";
            burgerMenuBtn.classList.remove("fa-xmark");
            burgerMenuBtn.classList.add("fa-bars");
        } else {
            menuMobile.style.display = "flex";
            mainContent.style.display = "none";
            burgerMenuBtn.classList.remove("fa-bars");
            burgerMenuBtn.classList.add("fa-xmark");
        }
    };

    function resize() {
        if (innerWidth >= 979) {
            menuMobile.style.display = "flex";
            mainContent.style.display = "block";
        } else {
            menuMobile.style.display = "none";
            mainContent.style.display = "block";
            burgerMenuBtn.classList.remove("fa-xmark");
            burgerMenuBtn.classList.add("fa-bars");
        }
    };

    function controlaMenuMobile(opcoesMenu) {
        opcoesMenu.forEach(opcao => {
            opcao.addEventListener("click", function () {
                mainContent.style.display = "block";
                if (innerWidth <= 979) {
                    openCloseMenu();
                };
            });
        });
    };
    // FIM HEADER
})()