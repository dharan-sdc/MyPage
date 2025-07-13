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
        id: '1',
        title: 'CKS: Certified Kubernetes Security Specialist',
        description: 'Earners of this designation are accomplished Kubernetes practitioners (as evidenced by holding the CKA credential). Earners demonstrated the requisite abilities to secure container-based applications and Kubernetes platforms during build, deployment and runtime, and are qualified to perform these tasks in a professional setting.',
        image: '/lovable-uploads/81794f72-ea98-46db-9d28-45716233087f.png',
        issuer: 'Cloud Native Computing Foundation',
        category: 'Kubernetes',
        earnedDate: '2024'
    },
    {
        id: '2',
        title: 'Microsoft Azure Fundamentals',
        description: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop&crop=center',
        issuer: 'Microsoft',
        category: 'Cloud',
        earnedDate: '2023'
    },
    {
        id: '3',
        title: 'AWS Solutions Architect',
        description: 'Earners of this certification have a comprehensive understanding of AWS services and technologies with experience in designing distributed systems on AWS.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop&crop=center',
        issuer: 'Amazon Web Services',
        category: 'Cloud',
        earnedDate: '2023'
    },
    {
        id: '4',
        title: 'GitHub Actions',
        description: 'Demonstrated proficiency in implementing CI/CD workflows using GitHub Actions, including advanced automation and deployment strategies.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop&crop=center',
        issuer: 'GitHub',
        category: 'DevOps',
        earnedDate: '2024'
    },
    {
        id: '5',
        title: 'Docker Certified Associate',
        description: 'Validated skills in containerization technologies, Docker fundamentals, and container orchestration practices.',
        image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=center',
        issuer: 'Docker',
        category: 'Containerization',
        earnedDate: '2023'
    },
    {
        id: '6',
        title: 'Terraform Associate',
        description: 'Demonstrated knowledge of Infrastructure as Code (IaC) concepts and hands-on experience with Terraform.',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop&crop=center',
        issuer: 'HashiCorp',
        category: 'Infrastructure',
        earnedDate: '2024'
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