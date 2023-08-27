; (function () {
    // INICIO HEADER
    const burgerMenuBtn = document.querySelector("#burger-menu-btn");
    const menuMobile = document.querySelector("#menu-mobile");
    const header = document.querySelector("#header");
    const mainContent = document.querySelector("#main-content");
    const listaDeOpcoesMenu = menuMobile.querySelectorAll("a");
    const footer = document.querySelector("#footer");

    burgerMenuBtn.addEventListener("click", openCloseMenu);
    window.addEventListener("resize", resize);

    controlaMenuMobile(listaDeOpcoesMenu);

    function openCloseMenu() {
        if (menuMobile.style.display === "flex") {
            menuMobile.style.display = "none";
            mainContent.style.display = "block";
            footer.style.display = "flex";
            burgerMenuBtn.classList.remove("fa-xmark");
            burgerMenuBtn.classList.add("fa-bars");
        } else {
            menuMobile.style.display = "flex";
            mainContent.style.display = "none";
            footer.style.display = "none";
            burgerMenuBtn.classList.remove("fa-bars");
            burgerMenuBtn.classList.add("fa-xmark");
        }
    };

    function resize() {
        if (innerWidth >= 979) {
            menuMobile.style.display = "flex";
            mainContent.style.display = "block";
            footer.style.display = "flex";
            // header.style.backgroundColor = "white";
        } else {
            menuMobile.style.display = "none";
            mainContent.style.display = "block";
            footer.style.display = "flex";
            burgerMenuBtn.classList.remove("fa-xmark");
            burgerMenuBtn.classList.add("fa-bars");
            // header.style.backgroundColor = "#00000000";
        }
    };

    function controlaMenuMobile(opcoesMenu) {
        opcoesMenu.forEach(opcao => {
            opcao.addEventListener("click", function () {
                mainContent.style.display = "block";
                footer.style.display = "flex";
                if (innerWidth <= 979) {
                    openCloseMenu();
                };
            });
        });
    };
    // FIM HEADER


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
})();


(function () {
    // INICIO SLIDE
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
        console.log("clicado")
    }

    prevBtn.addEventListener("click", () => {
        plusSlides(-1)
    })

    nextBtn.addEventListener("click", () => {
        plusSlides(1)
    })


    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    // Auto Slide
    window.addEventListener("load", () => {

        slideIndex = 0;

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex - 1].style.display = "block";

            const timer = setTimeout(showSlides, 5000)

            const btns = document.querySelectorAll(".btns")
            btns.forEach(btn => {
                btn.addEventListener("click", () => {
                    clearTimeout(timer)
                })
            })
        }

        showSlides();

    })
    // FIM SLIDE


    // INICIO SEÇÃO DESTINOS

    const verMaisBtn = document.querySelector("#ver-mais-btn");
    const cartoesProjetos = Array.from(document.querySelectorAll("#show-hide"));

    verMaisBtn.addEventListener("click", function () {
        cartoesProjetos.forEach(cartao => {
            if (cartao.classList.contains("hide")) {
                cartao.classList.remove("hide");
                cartao.classList.add("show");
                verMaisBtn.innerText = "Mostrar menos";
            } else {
                cartao.classList.remove("show");
                cartao.classList.add("hide");
                verMaisBtn.innerText = "Mostrar mais";
            }
        })
    })

    // FIM SECAO DESTINOS
})();




