/*
 * New, Clean birthday-script.js
 * Uses a CSS class for a smooth fade-in effect.
 */

const ageContent = {
    1: {
        img: 'new.JPG',
        desc: 'Suleiman’s first photoshoot!'
    },
    2: {
        img: 'glasses.JPEG',
        desc: 'Rocking in black kurta and sunglasses and making everyone smile!'
    },
    3: {
        img: 'school.JPEG',
        desc: 'Suleiman’s first day at school!'
    },
    4: {
        img: 'kulfi.JPEG',
        desc: 'Suleiman enjoying homemade kulfi for the first time!'
    },
    5: {
        img: 'teddy.JPEG',
        desc: 'Suleiman’s obsession with Hoor apis teddy bears!'
    },
    6: {
        img: 'world.JPEG',
        desc: 'When we visited Boulevard World!'
    },
    7: {
        img: 'zoo.JPEG',
        desc: 'Suleiman visited the zoo!'
    }
};

function showAge(age) {
    const display = document.getElementById('age-display');
    const content = ageContent[age];
    
    // Animate out by removing the 'visible' class
    display.classList.remove('visible');

    // Wait for the fade-out transition to finish
    setTimeout(() => {
        // Update the content
        display.innerHTML = `
            <img src="${content.img}" alt="Age ${age}" class="age-img"/>
            <p class="age-desc">${content.desc}</p>
        `;
        // Animate in the new content
        display.classList.add('visible');
    }, 500); // This delay should match the CSS transition duration
}