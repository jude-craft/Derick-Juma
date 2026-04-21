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
 * Social Media Links with SVG Icons
 */
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/jude-craft",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/derickjuma",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.047-8.842 0-9.769h3.554v1.38c.429-.663 1.198-1.606 2.915-1.606 2.131 0 3.731 1.391 3.731 4.384v5.611zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.955.771-1.706 1.96-1.706 1.188 0 1.914.751 1.938 1.706 0 .948-.75 1.706-1.983 1.706zm1.946 11.597H3.392V9.683h3.891v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>`
    },
    {
        name: "Twitter",
        url: "https://twitter.com/derickjuma",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.35 7-5 7-5s-1 3-7 7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
        name: "Email",
        url: `mailto:${profileData.contact.email}`,
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    }
];

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
 * Creates direct contact links
 */
function renderContact() {
    const directContact = document.getElementById('directContact');

    const contactLinks = [
        { name: 'Email Me', url: `mailto:${profileData.contact.email}` },
        { name: 'GitHub', url: profileData.contact.github },
        { name: 'LinkedIn', url: profileData.contact.linkedin },
        { name: 'Twitter', url: profileData.contact.twitter }
    ];

    directContact.innerHTML = contactLinks.map(link => `
        <li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.name}</a></li>
    `).join('');
}

/**
 * Render Social Links
 * Creates social media icon links in the footer
 */
function renderSocialLinks() {
    const socialLinksContainer = document.getElementById('socialLinks');

    socialLinksContainer.innerHTML = socialLinks.map(social => `
        <a href="${social.url}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="social-link" 
           title="${social.name}"
           aria-label="${social.name}">
            ${social.icon}
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
 * Handle Contact Form Submission
 * Captures contact information and prepares for backend integration
 */
function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('message').value;
    const form = document.getElementById('contactForm');
    
    // Create a data object for the contact message
    const contactData = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString(),
        source: 'portfolio-contact-form'
    };
    
    // Log the contact data (in production, send to backend)
    console.log('Contact Form Submission:', contactData);
    
    // Store locally (optional)
    const contacts = JSON.parse(localStorage.getItem('contact-messages')) || [];
    contacts.push(contactData);
    localStorage.setItem('contact-messages', JSON.stringify(contacts));
    
    // Show success feedback
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success-message';
    successMessage.textContent = '✓ Message sent! I\'ll get back to you soon.';
    form.parentElement.insertBefore(successMessage, form.nextSibling);
    
    // Reset form
    form.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
    
    // TODO: Connect to backend email service here
    // Example integration points:
    // - EmailJS
    // - SendGrid API
    // - Firebase Cloud Functions
    // - Custom backend endpoint (Node.js/Python)
}

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
    renderSocialLinks();

    // Set up event listeners
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }

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
