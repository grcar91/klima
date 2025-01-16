document.addEventListener("DOMContentLoaded", () => {
    const headTitle = document.querySelector("header h1");
    const phoneNumber = document.getElementById("phone");
    const languageIcons = document.querySelectorAll(".language-icon");
    const welcomeText = document.getElementById("welcome-text");
    const servicesTitle = document.querySelector("#storitve h2");
    const servicesList = document.querySelectorAll("#storitve ul li");
    const button1 = document.getElementById("buttonstoritve");
    const button2 = document.getElementById("buttonzakaj");
    const whyTitle = document.querySelector("#zakaj h2");
    const whyText = document.querySelectorAll("#zakaj p");
    const buttons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll("main section");

    // Ustvari vizualni učinek miške
    const effect = document.createElement("div");
    effect.classList.add("mouse-effect");
    document.body.appendChild(effect);

    // Navigacija med sekcijami
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active")); // Odstrani aktivno stanje
            button.classList.add("active");

            // Skrij vse sekcije
            sections.forEach(section => section.classList.remove("active"));

            // Prikaži izbrano sekcijo
            const page = button.getAttribute("data-page");
            const activeSection = document.getElementById(page);
            if (activeSection) activeSection.classList.add("active");
        });
    });

    // Premikanje miške z optimizacijo
    let mouseMoved = false;
    document.addEventListener("mousemove", (e) => {
        mouseMoved = true;
        effect.style.left = `${e.pageX}px`;
        effect.style.top = `${e.pageY}px`;
    });
    setInterval(() => {
        if (mouseMoved) {
            mouseMoved = false;
        }
    }, 16); // Približno 60 FPS

    // Prevod besedila
    const translations = {
        sl: {
            headTitle: "ČISTA KLIMA, ČISTI ZRAK",
            phoneNumber: "📞 051 264565 631",
            welcomeText: "Dobrodošli na naši spletni strani!",
            button1:"Storitve",
            button2:"Zakaj očistiti klimo?", 
            servicesTitle: "Naše storitve",
            whyTitle : "Zakaj očistiti klimo?",
            whyText: [
                "1. Zdravje in kakovost zraka<br>Odstranjevanje alergenov in mikrobov: Klimatske naprave lahko sčasoma nabirajo prah, cvetni prah, plesen in bakterije.",
                "2. Učinkovitost naprave<br>Boljše hlajenje in gretje: Zamašeni filtri otežujejo pretok zraka.",
                "3. Dolga življenjska doba naprave<br>Preprečevanje poškodb in dragega popravila.",
                "Za strokovno čiščenje in vzdrževanje nas kontaktirajte. Z veseljem vam pomagamo!"
            ],
            servicesList: [
                "Redno čiščenje klim",
                "Globinsko čiščenje klim",
                "Preventivni pregledi",
                "Popravila klimatskih naprav"
            ],
        },
        en: {
            headTitle: "CLEAN AIR CONDITION, CLEAN AIR",
            phoneNumber: "📞 0038651 266545 631",
            welcomeText: "Welcome to our website!",
            button1:"Services",
            button2:"Why cleaning AC?", 
            servicesTitle: "Naše storitve",
            servicesTitle: "Our Services",
            whyTitle: "Why to clean the air conditioner?",
            whyText: [
                "1. Health and air quality<br>Removing allergens and microbes: Air conditioners can collect dust and bacteria.",
                "2. Device efficiency<br>Better cooling and heating: Blocked filters reduce airflow efficiency.",
                "3. Longer device lifespan<br>Prevent damage and expensive repairs.",
                "For professional cleaning and maintenance, contact us. We are happy to help you!"
            ],
            servicesList: [
                "Regular air conditioner cleaning",
                "Deep air conditioner cleaning",
                "Preventive inspections",
                "Air conditioner repairs"
            ],
        },
        de: {
            headTitle: "SAUBERE KLIMA, SAUBERE LUFT",
            phoneNumber: "📞 0038651 546265 631",
            welcomeText: "Willkommen auf unserer Webseite!",
            button1:"Dienstleistungen",
            button2:"Warum reinigen?",
            servicesTitle: "Unsere Dienstleistungen",
            whyTitle: "Warum die Klimaanlage reinigen?",
            whyText: [
                "1. Gesundheit und Luftqualität<br>Allergene und Mikroben entfernen: Klimaanlagen können Staub und Bakterien ansammeln.",
                "2. Geräteeffizienz<br>Bessere Kühlung und Heizung: Verstopfte Filter verringern die Effizienz.",
                "3. Längere Lebensdauer<br>Schäden und teure Reparaturen vermeiden.",
                "Für professionelle Reinigung und Wartung kontaktieren Sie uns. Wir helfen Ihnen gerne!"
            ],
            servicesList: [
                "Regelmäßige Klimaanlagenreinigung",
                "Tiefenreinigung von Klimaanlagen",
                "Vorbeugende Inspektionen",
                "Reparaturen von Klimaanlagen"
            ],
        }
    };

    // Funkcija za menjavo jezika
    const updateLanguage = (lang) => {
        const translation = translations[lang];
        if (!translation) return;

        headTitle.textContent = translation.headTitle;
        phoneNumber.textContent = translation.phoneNumber;
        if (welcomeText) welcomeText.textContent = translation.welcomeText;
        if (servicesTitle) servicesTitle.textContent = translation.servicesTitle;
        if (whyTitle) whyTitle.textContent = translation.whyTitle;
        if (button1) button1.textContent = translation.button1;
        if (button2) button2.textContent = translation.button2;

        if (whyText) {
            whyText.forEach((item, index) => {
                item.innerHTML = translation.whyText[index] || "";
            });
        }

        servicesList.forEach((item, index) => {
            item.textContent = translation.servicesList[index] || item.textContent;
        });

        // Posodobi aktivno ikono
        languageIcons.forEach(icon => {
            icon.classList.remove("active");
            if (icon.getAttribute("data-lang") === lang) {
                icon.classList.add("active");
            }
        });
    };

    // Nastavi začetni jezik iz localStorage ali privzeto na "sl"
    const savedLanguage = localStorage.getItem("language");
    const defaultLanguage = "sl";
    updateLanguage(savedLanguage || defaultLanguage);

    // Dodaj dogodke za jezikovne ikone
    languageIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const selectedLanguage = icon.getAttribute("data-lang");
            updateLanguage(selectedLanguage);
            localStorage.setItem("language", selectedLanguage);
        });
    });
});
