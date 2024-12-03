const universities = [
    { name: "University of San Carlos (USC)", website: "https://www.usc.edu.ph", image: "assets/images/usc-logo.png", description: "A premier university offering a wide range of programs for aspiring students.", courses: ["Engineering", "Business", "Arts"] },
    { name: "University of Cebu (UC)", website: "https://www.uc.edu.ph", image: "assets/images/uc-logo.png", description: "A university known for its excellent education and commitment to student development.", courses: ["IT", "Business", "Law"] },
    { name: "University of San Jose-Recoletos (USJ-R)", website: "https://www.usjr.edu.ph", image: "assets/images/usjr-logo.png", description: "A private Catholic institution that offers a variety of undergraduate and graduate programs.", courses: ["Law", "Business", "Arts"] },
    { name: "Cebu Institute of Technology University (CIT-U)", website: "https://www.cit.edu", image: "assets/images/citu-logo.png", description: "A top institution for technical and engineering education in Cebu.", courses: ["Engineering", "IT", "Architecture"] },
    { name: "University of the Visayas (UV)", website: "https://www.uv.edu.ph", image: "assets/images/uv-logo.png", description: "UV is one of the leading universities in Cebu with a long history of academic excellence.", courses: ["Business", "Education", "Nursing"] },
    { name: "University of Southern Philippines Foundation (USPF)", website: "http://www.uspf.edu.ph", image: "assets/images/uspf-logo.png", description: "A foundation that provides quality higher education with a focus on technology and business.", courses: ["Engineering", "IT", "Business"] },
    { name: "Southwestern University (SWU PHINMA)", website: "https://www.swu.edu.ph", image: "assets/images/swu-logo.png", description: "SWU is known for its excellent health sciences programs, including nursing and pharmacy.", courses: ["Nursing", "Pharmacy", "Health Sciences"] },
    { name: "University of the Philippines Cebu (UP Cebu)", website: "https://www.up.edu.ph", image: "assets/images/up-cebu-logo.png", description: "A branch of UP, it offers world-class programs and is known for its innovative research.", courses: ["Engineering", "Arts", "Business"] },
    { name: "Cebu Normal University (CNU)", website: "https://www.cnu.edu.ph", image: "assets/images/cnu-logo.png", description: "CNU is a prominent university in Cebu, particularly known for its teacher education programs.", courses: ["Education", "Arts"] },
    { name: "Cebu Technological University (CTU)", website: "https://www.ctu.edu.ph", image: "assets/images/ctu-logo.png", description: "CTU provides a diverse selection of programs, focusing on technology, engineering, and agriculture.", courses: ["Engineering", "Agriculture", "Technology"] },
    { name: "Asian College of Technology (ACT)", website: "https://www.act.edu.ph", image: "assets/images/act-logo.png", description: "ACT offers quality vocational and degree programs in IT, business, and hospitality.", courses: ["IT", "Business", "Hospitality"] },
    { name: "STI College Cebu", website: "https://www.sti.edu", image: "assets/images/sti-logo.png", description: "STI provides cutting-edge education in technology, health, business, and hospitality.", courses: ["Health", "Business", "Technology"] }
];

const universityList = document.getElementById('university-list');
const searchBar = document.getElementById('search-bar');
const exploreBtn = document.getElementById('explore-btn');
const homeBtn = document.getElementById('home-btn');

// Function to create university cards
function createUniversityCards(universitiesToDisplay) {
    universityList.innerHTML = ''; 

    universitiesToDisplay.forEach(uni => {
        const card = document.createElement('div');
        card.className = 'university-card';
        card.innerHTML = `
            <img src="${uni.image}" alt="${uni.name}">
            <h2>${uni.name}</h2>
            <p>${uni.description}</p> 
            <a href="${uni.website}" target="_blank">Visit Website</a>
        `;
        universityList.appendChild(card);
    });
}

createUniversityCards(universities); 

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredUniversities = universities.filter(uni => {
        return uni.name.toLowerCase().includes(query) ||
               uni.courses.some(course => course.toLowerCase().includes(query));
    });
    createUniversityCards(filteredUniversities);
});

exploreBtn.addEventListener('click', () => {
    document.getElementById('page-2').scrollIntoView({ behavior: 'smooth' });
});

homeBtn.addEventListener('click', () => {
    document.getElementById('page-1').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0 && window.scrollY < window.innerHeight) {
        event.preventDefault(); 
        document.getElementById('page-2').scrollIntoView({ behavior: 'smooth' });
    } else if (event.deltaY < 0 && window.scrollY > 0) {
        event.preventDefault(); 
        document.getElementById('page-1').scrollIntoView({ behavior: 'smooth' });
    }
}, { passive: false });


const logos = [
    "assets/images/usc-logo.png",
    "assets/images/uc-logo.png",
    "assets/images/usjr-logo.png",
    "assets/images/citu-logo.png",
    "assets/images/uv-logo.png",
    "assets/images/uspf-logo.png",
    "assets/images/swu-logo.png",
    "assets/images/up-cebu-logo.png",
    "assets/images/cnu-logo.png",
    "assets/images/ctu-logo.png",
    "assets/images/act-logo.png",
    "assets/images/sti-logo.png"
];

const logoContainer = document.createElement('div');
logoContainer.classList.add('logo-container');
document.getElementById('page-1').prepend(logoContainer); 

let currentLogoIndex = 0;

function changeLogo() {
    const currentLogo = logoContainer.querySelector('.logo');
    if (currentLogo) {
        currentLogo.style.opacity = 0;
        setTimeout(() => {
            logoContainer.removeChild(currentLogo);
            showNextLogo(); 
        }, 500); 
    } else {
        showNextLogo();
    }
}

function showNextLogo() {
    const logoImg = document.createElement('img');
    logoImg.src = logos[currentLogoIndex];
    logoImg.alt = "University Logo";
    logoImg.classList.add('logo');
    logoImg.style.opacity = 0;

    logoContainer.appendChild(logoImg);

    setTimeout(() => {
        logoImg.style.opacity = 1; 
    }, 500); 

    currentLogoIndex = (currentLogoIndex + 1) % logos.length;
}

changeLogo(); 
setInterval(changeLogo, 3000);









