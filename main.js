var audio = document.getElementById("audioPlayer"), loader = document.getElementById("preloader"); function settingtoggle() { document.getElementById("setting-container").classList.toggle("settingactivate"), document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"), document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow") } function playpause() { !1 == document.getElementById("switchforsound").checked ? audio.pause() : audio.play() } function visualmode() { document.body.classList.toggle("light-mode"), document.querySelectorAll(".needtobeinvert").forEach(function (e) { e.classList.toggle("invertapplied") }) } window.addEventListener("load", function () { loader.style.display = "none", document.querySelector(".hey").classList.add("popup") }); let emptyArea = document.getElementById("emptyarea"), mobileTogglemenu = document.getElementById("mobiletogglemenu"); function hamburgerMenu() { document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"), document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"), document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"), document.getElementById("burger-bar3").classList.toggle("hamburger-animation3") } function hidemenubyli() { document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"), document.getElementById("burger-bar1").classList.remove("hamburger-animation1"), document.getElementById("burger-bar2").classList.remove("hamburger-animation2"), document.getElementById("burger-bar3").classList.remove("hamburger-animation3") } const sections = document.querySelectorAll("section"), navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"), mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li"); window.addEventListener("scroll", () => { let e = ""; sections.forEach(t => { let o = t.offsetTop; t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id")) }), mobilenavLi.forEach(t => { t.classList.remove("activeThismobiletab"), t.classList.contains(e) && t.classList.add("activeThismobiletab") }), navLi.forEach(t => { t.classList.remove("activeThistab"), t.classList.contains(e) && t.classList.add("activeThistab") }) }), console.log("%c Designed and Developed by Jahanad ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"); let mybutton = document.getElementById("backtotopbutton"); function scrollFunction() { document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none" } function scrolltoTopfunction() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 } window.onscroll = function () { scrollFunction() }, document.addEventListener("contextmenu", function (e) { "IMG" === e.target.nodeName && e.preventDefault() }, !1); let Pupils = document.getElementsByClassName("footer-pupil"), pupilsArr = Array.from(Pupils), pupilStartPoint = -10, pupilRangeX = 20, pupilRangeY = 15, mouseXStartPoint = 0, mouseXEndPoint = window.innerWidth, currentXPosition = 0, fracXValue = 0, mouseYEndPoint = window.innerHeight, currentYPosition = 0, fracYValue = 0, mouseXRange = mouseXEndPoint - mouseXStartPoint; const mouseMove = e => { fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange, fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint; let t = pupilStartPoint + fracXValue * pupilRangeX, o = pupilStartPoint + fracYValue * pupilRangeY; pupilsArr.forEach(e => { e.style.transform = `translate(${t}px, ${o}px)` }) }, windowResize = e => { mouseXEndPoint = window.innerWidth, mouseYEndPoint = window.innerHeight, mouseXRange = mouseXEndPoint - mouseXStartPoint }; window.addEventListener("mousemove", mouseMove), window.addEventListener("resize", windowResize);

document.querySelectorAll('.project-box').forEach(box => {
    const btn = box.querySelector('.info-toggle-btn');
    const popup = box.querySelector('.project-detail-popup');
    const imageDiv = box.querySelector('.image-div');
    const closeBtn = box.querySelector('.popup-close-btn');

    let isPinned = false;

    const show = () => {
        popup.classList.add('show-popup');
        imageDiv.classList.add('popup-active');
    };

    const hide = () => {
        if (isPinned) return; // pinned state overrides hover-driven hide
        popup.classList.remove('show-popup');
        imageDiv.classList.remove('popup-active');
    };

    const forceHide = () => {
        popup.classList.remove('show-popup');
        imageDiv.classList.remove('popup-active');
    };

    btn.addEventListener('mouseenter', show);
    box.addEventListener('mouseleave', hide);

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        isPinned = !isPinned;
        btn.classList.toggle('pinned', isPinned);

        if (isPinned) {
            show();
        } else {
            // Unpinning always closes it now, even if still hovering
            forceHide();
        }
    });

    box._closePopup = () => {
        isPinned = false;
        btn.classList.remove('pinned');
        forceHide();
    };

    // NEW — close button click
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isPinned = false;
        btn.classList.remove('pinned');
        forceHide();
    });

});

// Click outside any card closes/unpins it
document.addEventListener('click', (e) => {
    if (!e.target.closest('.project-box')) {
        document.querySelectorAll('.project-box').forEach(box => box._closePopup?.());
    }
});

// Copy to clipboard
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.copy;
        navigator.clipboard.writeText(text).then(() => {
            const original = btn.textContent;
            btn.textContent = 'Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = original;
                btn.classList.remove('copied');
            }, 1500);
        });
    });
});



/* ================================================================
   EXPERIENCE CARD MOUSE INTERACTION
   ================================================================ */

const experienceCards =
    document.querySelectorAll("[data-tilt]");

experienceCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2.5;

        const rotateY =
            ((x - centerX) / centerX) * 2.5;

        card.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-4px)
        `;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(900px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
        `;

        card.style.setProperty(
            "--mouse-x",
            "50%"
        );

        card.style.setProperty(
            "--mouse-y",
            "50%"
        );

    });

});