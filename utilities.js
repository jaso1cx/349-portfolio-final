/*
    I have provided my current color palette and dark mode color palette. Using this and without editing any file, explain how I should go about adding the dark mode toggle to my javascript file so that clicking the button I have set in my HTML will be able to switch between both with a click.
*/
function dayAndNight() {
    document.documentElement.classList.toggle('dark-mode');
}

window.onload = function() {

    const siteFade = sal({
        threshold: 0.05,
        once: true
    })

    const switchMode = document.getElementById('switchClick');

    switchMode.addEventListener("click", (event) => {
        dayAndNight();
    });
};
