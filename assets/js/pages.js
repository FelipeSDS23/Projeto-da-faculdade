; (function () {
    // INICIO HEADER
    const burgerMenuBtn = document.querySelector("#burger-menu-btn");
    const menuMobile = document.querySelector("#menu-mobile");
    const header = document.querySelector("#header");
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
            // header.style.backgroundColor = "white";
        } else {
            menuMobile.style.display = "none";
            mainContent.style.display = "block";
            burgerMenuBtn.classList.remove("fa-xmark");
            burgerMenuBtn.classList.add("fa-bars");
            // header.style.backgroundColor = "#00000000";
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

    // INICIO COLOR MODE

    const chk = document.querySelector("#chk");

    chk.addEventListener("change", modoEscuro);
    window.addEventListener("load", armazenaModoNoLocal);

    function armazenaModoNoLocal() {
        let local = localStorage.getItem("modoSalvo");
        local = JSON.parse(local);
        if (!local) return;
        if (local.modo) {
            modoEscuro();
            chk.checked = true;
        }
    }

    let dark = false;

    function modoEscuro() {
        dark = !dark;
        const modoAtual = JSON.stringify({ modo: dark });
        localStorage.setItem("modoSalvo", modoAtual);

        const body = document.querySelector("body");
        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
    }
    // FIM COLOR MODE
})()