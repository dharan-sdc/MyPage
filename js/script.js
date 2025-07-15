// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Badge data
const badges = [
    {

        "id": "1",
        "title": "MongoDB Associate Developer",
        "description": "This certification validates the holder’s ability to effectively integrate and use MongoDB within applications. Earners demonstrate hands-on experience in performing essential operational tasks and applying best practices to manage, query, and optimize MongoDB databases in real-world scenarios.",
        "image": "https://images.credly.com/size/160x160/images/650ebdbe-d526-4b47-b186-c1ab516b5a7c/image.png",
        "issuer": "Issued by MongoDB",
        "category": "Databases",
        "earnedDate": "2025"


    },
    {
        id: '2',
        title: 'GitHub Foundations',
        description: 'Passing the GitHub Foundations certification exam validates subject matter expertise by measuring entry-level skills with GitHub basics like repositories, commits, branching, markdowns, and project management.',
        image: 'https://images.credly.com/size/160x160/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
        issuer: 'Issued by Github',
        category: 'DevOps',
        earnedDate: '2025'
    },
    {
        "id": "3",
        "title": "Postman API Fundamentals",
        "description": "This certification demonstrates foundational knowledge of APIs and Postman. Earners understand core concepts such as sending requests, using environment variables, creating test scripts, managing collections, and collaborating on API workflows within the Postman platform.",
        "image": "https://images.credly.com/size/160x160/images/26dbd779-e071-43ff-9b0e-510352de89af/assertion-CdZ2DY0IQ9aWUkVcDgmNyg_cached_image_20250713-28-2zn3kd.png",
        "issuer": "Postman",
        "category": "APIs",
        "earnedDate": "2025"
    },
    {
        "id": "4",
        "title": "Oracle Java Foundations",
        "description": "This certification demonstrates foundational knowledge of Java programming. Earners understand core concepts such as data types, loops, conditionals, object-oriented principles, and basic Java syntax. It validates entry-level proficiency in writing and debugging Java applications.",
        "image": "image/ilqttmvv.png",
        "issuer": "Oracle",
        "category": "Programming",
        "earnedDate": "2025"
    },
    {
        "id": "5",
        "title": "IBM Data Foundations",
        "description": "This certification validates foundational knowledge of data concepts and IBM data solutions. Earners demonstrate an understanding of data types, data governance, data integration, and basic data analytics, along with familiarity with IBM tools and platforms for managing and analyzing data.",
        "image": "https://images.credly.com/size/160x160/images/edaf0f19-2df0-4759-8871-7b1b44687f53/image.png",
        "issuer": "IBM",
        "category": "Data",
        "earnedDate": "2025"
    },
    {
        "id": "6",
        "title": "Introduction to Data Science",
        "description": "This certification confirms the earner has successfully completed Cisco's Introduction to Data Science course. It demonstrates foundational understanding of key concepts in Data Analytics, Data Engineering, Data Science, and AI/ML job roles. Earners also gain insights into career pathways across various data-focused disciplines.",
        "image": "https://images.credly.com/size/160x160/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
        "issuer": "Cisco",
        "category": "Data Science",
        "earnedDate": "2025"
    },
    {
        "id": "7",
        "title": "Java Data Structures & Algorithms",
        "description": "This course completion certifies that the learner has gained practical understanding of core data structures and algorithms in Java. Topics covered include arrays, linked lists, stacks, queues, trees, graphs, searching, sorting, and time complexity analysis.",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-ee31abc7-a330-4262-bbcb-c5d26c926de3.jpg?v=1739683801000",
        "issuer": "Udemy",
        "category": "Programming",
        "earnedDate": "2025"
    }, {
        "id": "8",
        "title": "Build a Backend REST API with Node.js",
        "description": "This course certifies that the learner has built a fully functional RESTful API using Node.js, Express, and MongoDB. It covers backend development fundamentals including routing, middleware, authentication, CRUD operations, and deployment.",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-f8251abe-dbd1-4e78-8fd0-46dc2fd849b8.jpg?v=1736065261000",
        "issuer": "Udemy",
        "category": "Web Development",
        "earnedDate": "2025"
    }


];

// DOM elements
const badgeGrid = document.getElementById('badgeGrid');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const modalBadgeImage = document.getElementById('modalBadgeImage');
const modalTitle = document.getElementById('modalTitle');
const modalIssuer = document.getElementById('modalIssuer');
const modalDescription = document.getElementById('modalDescription');
const modalCategory = document.getElementById('modalCategory');
const modalEarnedDate = document.getElementById('modalEarnedDate');
const earnedDateRow = document.getElementById('earnedDateRow');

// Create badge elements
function createBadgeElement(badge) {
    const badgeElement = document.createElement('div');
    badgeElement.className = 'badge-item';
    badgeElement.onclick = () => openModal(badge);

    badgeElement.innerHTML = `
        <img src="${badge.image}" alt="${badge.title}" class="badge-img">
    `;

    return badgeElement;
}

// Populate badges
function populateBadges() {
    badges.forEach(badge => {
        const badgeElement = createBadgeElement(badge);
        badgeGrid.appendChild(badgeElement);
    });
}

// Open modal with badge data
function openModal(badge) {
    modalBadgeImage.src = badge.image;
    modalBadgeImage.alt = badge.title;
    modalTitle.textContent = badge.title;
    modalIssuer.textContent = badge.issuer;
    modalDescription.textContent = badge.description;
    modalCategory.textContent = badge.category;

    if (badge.earnedDate) {
        modalEarnedDate.textContent = badge.earnedDate;
        earnedDateRow.style.display = 'flex';
    } else {
        earnedDateRow.style.display = 'none';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    populateBadges();
});