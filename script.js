// ===================================
// DATA LAYER - Clean Architecture
// ===================================

/**
 * Profile Data Object
 * Contains all personal information for the portfolio
 */
const profileData = {
    name: "Derick Juma",
    greeting: "Hi, I'm",
    role: "Mobile App Developer (Flutter & Kotlin)",
    bio: "Passionate mobile engineer crafting beautiful, high-performance applications for Android and iOS. I specialize in Flutter and Kotlin, building seamless user experiences that users love.",
    image: "profile.jpeg", // Place your profile.png in the same directory as index.html
    contact: {
        email: "derick.juma@example.com",
        github: "https://github.com/jude-craft",
        linkedin: "https://linkedin.com/in/derickjuma",
        twitter: "https://twitter.com/derickjuma"
    }
};

/**
 * Skills Data Array
 * Grouped by categories: Mobile, Backend, Tools
 */
const skillsData = [
    {
        category: "Mobile Development",
        skills: [
            "Flutter",
            "Dart",
            "Kotlin",
            "Jetpack Compose",
            "Android SDK",
            "iOS Development",
            "Material Design",
            "State Management (Bloc, Provider, Riverpod)",
            "Firebase",
            "RESTful APIs"
        ]
    },
    {
        category: "Backend & Database",
        skills: [
            "Spring Boot",
            "Python",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "GraphQL",
            "Microservices"
        ]
    },
    {
        category: "Tools & Technologies",
        skills: [
            "Git & GitHub",
            "Docker",
            "CI/CD (GitHub Actions)",
            "Figma",
            "Postman",
            "VS Code",
            "Android Studio",
            "Agile/Scrum"
        ]
    }
];

/**
 * Projects Data Array
 * Each project should have: name, description, technologies, and optional links
 */
const projectsData = [
    {
        name: "E-Commerce Mobile App",
        description: "A full-featured shopping app with product catalog, cart management, payment integration, and order tracking. Built with Flutter and Firebase.",
        technologies: ["Flutter", "Dart", "Firebase", "Stripe API"],
        image: null, // Set to image path if you have screenshots
        links: {
            github: "https://github.com/derickjuma/ecommerce-app",
            demo: null
        }
    },
    {
        name: "Fitness Tracker",
        description: "Native Android fitness application with workout plans, calorie tracking, and progress analytics. Implemented using Kotlin and Jetpack Compose.",
        technologies: ["Kotlin", "Jetpack Compose", "Room DB", "Material 3"],
        image: null,
        links: {
            github: "https://github.com/derickjuma/fitness-tracker",
            demo: null
        }
    },
    {
        name: "Chat Application",
        description: "Real-time messaging app with end-to-end encryption, group chats, and media sharing. Cross-platform solution built with Flutter.",
        technologies: ["Flutter", "WebSocket", "Node.js", "MongoDB"],
        image: null,
        links: {
            github: "https://github.com/derickjuma/chat-app",
            demo: null
        }
    },
    {
        name: "Task Management App",
        description: "Productivity app for managing tasks, projects, and team collaboration. Features include task assignment, due dates, and notifications.",
        technologies: ["Flutter", "Spring Boot", "PostgreSQL", "FCM"],
        image: null,
        links: {
            github: "https://github.com/derickjuma/task-manager",
            demo: null
        }
    }
];

// ===================================
// LOGIC LAYER - Rendering Functions
// ===================================

/**
 * Render Hero Section
 * Dynamically creates the hero content based on profileData
 */
function renderHero() {
    const heroText = document.querySelector('.hero-text');

    heroText.innerHTML = `
        <p class="greeting">${profileData.greeting}</p>
        <h1>${profileData.name}</h1>
        <p class="role">${profileData.role}</p>
        <p class="bio">${profileData.bio}</p>
        <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="#contact" class="btn btn-secondary">Contact Me</a>
        </div>
    `;

    // Set profile image
    const profileImage = document.getElementById('profileImage');
    profileImage.src = profileData.image;
    profileImage.alt = `${profileData.name} - ${profileData.role}`;
}

/**
 * Render Skills Section
 * Creates skill category cards with chips
 */
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');

    skillsGrid.innerHTML = skillsData.map(category => `
        <div class="skill-category">
            <h3>${category.category}</h3>
            <div class="skill-chips">
                ${category.skills.map(skill => `
                    <span class="skill-chip">${skill}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/**
 * Render Projects Section
 * Creates project cards with 9:16 aspect ratio for mobile screenshots
 */
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    projectsGrid.innerHTML = projectsData.map((project, index) => `
        <div class="project-card">
            <div class="project-image-container">
                ${project.image
            ? `<img src="${project.image}" alt="${project.name}" class="project-image">`
            : `<div class="project-placeholder">${project.name.charAt(0)}</div>`
        }
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    ${project.links.github
            ? `<a href="${project.links.github}" target="_blank" class="project-link">
                            View Code →
                        </a>`
            : ''
        }
                    ${project.links.demo
            ? `<a href="${project.links.demo}" target="_blank" class="project-link">
                            Live Demo →
                        </a>`
            : ''
        }
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Render Contact Section
 * Creates contact link buttons
 */
function renderContact() {
    const contactLinks = document.getElementById('contactLinks');

    const contactButtons = [
        { name: 'Email', url: `mailto:${profileData.contact.email}` },
        { name: 'GitHub', url: profileData.contact.github },
        { name: 'LinkedIn', url: profileData.contact.linkedin },
        { name: 'Twitter', url: profileData.contact.twitter }
    ];

    contactLinks.innerHTML = contactButtons.map(button => `
        <a href="${button.url}" target="_blank" class="contact-link">
            ${button.name}
        </a>
    `).join('');
}

// ===================================
// THEME TOGGLE FUNCTIONALITY
// ===================================

/**
 * Initialize Theme
 * Sets the theme based on localStorage or system preference
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.body.setAttribute('data-theme', theme);
}

/**
 * Toggle Theme
 * Switches between dark and light mode
 */
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ===================================
// SMOOTH SCROLL & ACTIVE NAV LINK
// ===================================

/**
 * Update Active Navigation Link
 * Highlights the current section in the navbar
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// INITIALIZATION
// ===================================

/**
 * Initialize Application
 * Runs when DOM is fully loaded
 */
function initializeApp() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Initialize theme
    initializeTheme();

    // Render all sections
    renderHero();
    renderSkills();
    renderProjects();
    renderContact();

    // Set up event listeners
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Update active navigation links
    updateActiveNavLink();

    // Add scroll event for navbar background
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// ===================================
// EXPORT FOR TESTING (Optional)
// ===================================
// Uncomment if you need to test individual functions
// export { profileData, skillsData, projectsData, renderHero, renderSkills, renderProjects };
