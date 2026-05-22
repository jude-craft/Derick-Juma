// ===================================
// DATA LAYER
// ===================================

const profileData = {
    name: "Derick Juma",
    greeting: "Hi, I'm",
    role: "Mobile App Developer (Flutter & Kotlin)",
    bio: "Passionate mobile engineer crafting beautiful, high-performance applications for Android and iOS. I specialize in Flutter and Kotlin, building seamless user experiences that users love.",
    image: "profile.jpeg",
    contact: {
        email: "derekjude254@gmail.com",
        github: "https://github.com/jude-craft",
        linkedin: "https://linkedin.com/in/derickjuma",
        twitter: "https://twitter.com/derickjuma"
    }
};

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

const projectsData = [
    {
        name: "E-Commerce Mobile App",
        description: "A full-featured shopping app with product catalog, cart management, payment integration, and order tracking. Built with Flutter and Firebase.",
        technologies: ["Flutter", "Dart", "Firebase", "Stripe API"],
        image: null,
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

const educationData = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Nairobi",
        period: "2018 — 2022",
        description: "Focused on software engineering, mobile computing, and human–computer interaction. Final-year project on a cross-platform health-tracking app built with Flutter.",
        achievements: [
            "Graduated with First Class Honours",
            "Dean's List 2020 – 2022",
            "President, Mobile Developers Club"
        ]
    },
    {
        degree: "High School Diploma (KCSE)",
        institution: "Alliance High School",
        period: "2014 — 2017",
        description: "Specialized in Mathematics, Physics, and Computer Studies. Led the school's coding club and represented the school in regional STEM competitions."
    }
];

const certificationsData = [
    {
        name: "Associate Android Developer",
        issuer: "Google",
        date: "2024",
        credentialUrl: "https://developers.google.com/certification/associate-android-developer"
    },
    {
        name: "Flutter Development Bootcamp",
        issuer: "The App Brewery",
        date: "2023",
        credentialUrl: null
    },
    {
        name: "Firebase for Mobile Developers",
        issuer: "Google Cloud",
        date: "2023",
        credentialUrl: null
    },
    {
        name: "Kotlin for Android Developers",
        issuer: "JetBrains Academy",
        date: "2022",
        credentialUrl: null
    },
    {
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "2021",
        credentialUrl: null
    }
];

const certIcon = `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"></circle><path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5"></path></svg>`;

// ===================================
// RENDERING
// ===================================

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

    const profileImage = document.getElementById('profileImage');
    profileImage.src = profileData.image;
    profileImage.alt = `${profileData.name} — ${profileData.role}`;
}

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

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    projectsGrid.innerHTML = projectsData.map(project => `
        <article class="project-card">
            <div class="project-image-container">
                ${project.image
            ? `<img src="${project.image}" alt="${project.name}" class="project-image" loading="lazy">`
            : `<div class="project-placeholder" aria-hidden="true">${project.name.charAt(0)}</div>`
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
            ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="project-link">View Code →</a>`
            : ''
        }
                    ${project.links.demo
            ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo →</a>`
            : ''
        }
                </div>
            </div>
        </article>
    `).join('');
}

function renderEducation() {
    const timeline = document.getElementById('educationTimeline');

    timeline.innerHTML = educationData.map(item => `
        <article class="education-item">
            <span class="education-period">${item.period}</span>
            <h3 class="education-degree">${item.degree}</h3>
            <p class="education-institution">${item.institution}</p>
            <p class="education-description">${item.description}</p>
            ${item.achievements && item.achievements.length
            ? `<ul class="education-achievements">
                    ${item.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>`
            : ''
        }
        </article>
    `).join('');
}

function renderCertifications() {
    const grid = document.getElementById('certGrid');

    grid.innerHTML = certificationsData.map(cert => `
        <article class="cert-card">
            <div class="cert-icon" aria-hidden="true">${certIcon}</div>
            <div class="cert-body">
                <h3 class="cert-name">${cert.name}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
            </div>
            <div class="cert-meta">
                <span class="cert-date">${cert.date}</span>
                ${cert.credentialUrl
            ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-link">Verify →</a>`
            : ''
        }
            </div>
        </article>
    `).join('');
}

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
// THEME
// ===================================

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.body.setAttribute('data-theme', theme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ===================================
// NAV: scroll-spy + mobile menu
// ===================================

function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle('active', isActive);
                    if (isActive) link.setAttribute('aria-current', 'true');
                    else link.removeAttribute('aria-current');
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
}

function setupMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    const close = () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', close);
    });
}

function setupNavbarScrollShadow() {
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ===================================
// SCROLL TO TOP
// ===================================

function setupScrollToTop() {
    const btn = document.getElementById('scrollTop');
    const onScroll = () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    onScroll();
}

// ===================================
// SCROLL REVEAL
// ===================================

function setupScrollReveal() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.reveal');

    if (reduced) {
        targets.forEach(el => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    targets.forEach(el => observer.observe(el));
}

// ===================================
// CONTACT FORM
// ===================================

function showFormError(input, message) {
    input.classList.add('has-error');
    let hint = input.parentElement.querySelector('.form-error');
    if (!hint) {
        hint = document.createElement('p');
        hint.className = 'form-error';
        input.parentElement.appendChild(hint);
    }
    hint.textContent = message;
}

function clearFormError(input) {
    input.classList.remove('has-error');
    const hint = input.parentElement.querySelector('.form-error');
    if (hint) hint.remove();
}

function validateContactForm(name, email, message) {
    let valid = true;
    if (!name.value.trim()) {
        showFormError(name, 'Please enter your name.');
        valid = false;
    } else clearFormError(name);

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.value.trim())) {
        showFormError(email, 'Please enter a valid email address.');
        valid = false;
    } else clearFormError(email);

    if (message.value.trim().length < 10) {
        showFormError(message, 'Please write at least 10 characters.');
        valid = false;
    } else clearFormError(message);

    return valid;
}

function handleContactFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('contactEmail');
    const message = document.getElementById('message');
    const form = document.getElementById('contactForm');

    if (!validateContactForm(name, email, message)) return;

    const contactData = {
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim(),
        timestamp: new Date().toISOString(),
        source: 'portfolio-contact-form'
    };

    console.log('Contact Form Submission:', contactData);

    const contacts = JSON.parse(localStorage.getItem('contact-messages')) || [];
    contacts.push(contactData);
    localStorage.setItem('contact-messages', JSON.stringify(contacts));

    const existing = form.parentElement.querySelector('.form-success-message');
    if (existing) existing.remove();

    const successMessage = document.createElement('div');
    successMessage.className = 'form-success-message';
    successMessage.textContent = '✓ Message sent! I\'ll get back to you soon.';
    form.parentElement.insertBefore(successMessage, form.nextSibling);

    form.reset();

    setTimeout(() => successMessage.remove(), 5000);

    // TODO: Connect to backend email service (EmailJS / SendGrid / Firebase Functions / custom endpoint)
}

// ===================================
// INITIALIZATION
// ===================================

function initializeApp() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    initializeTheme();

    renderHero();
    renderSkills();
    renderProjects();
    renderEducation();
    renderCertifications();
    renderContact();
    renderSocialLinks();

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    setupScrollSpy();
    setupMobileMenu();
    setupNavbarScrollShadow();
    setupScrollToTop();
    setupScrollReveal();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
