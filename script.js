// ===================================
// CONFIG
// ===================================

const EMAILJS_CONFIG = {
    publicKey: 'P7OTpnb-dY_kWM0fP',
    serviceId: 'service_vqqjvad',
    templateId: 'template_v27pgch'
};

// ===================================
// DATA LAYER
// ===================================

const profileData = {
    name: "Derick Juma",
    greeting: "Hi, I'm",
    role: "Dual-Stack Mobile Engineer",
    bio: "I architect and build scalable mobile applications using Flutter and Native Kotlin. I focus on clean architecture, robust backend integration, and delivering high-performance user experiences from the first line of code to Play Store deployment.",
    image: "profile.jpeg",
    contact: {
        email: "derekjude254@gmail.com",
        github: "https://github.com/jude-craft",
        linkedin: "https://linkedin.com/in/derickjuma",
        twitter: "https://x.com/Jude1110641"
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
        name: "X",
        url: "https://twitter.com/derickjuma",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/></svg>`
    },
    {
        name: "Email",
        url: `mailto:${profileData.contact.email}`,
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    }
];

const experienceData = [
    {
        company: "The Brand Company",
        role: "Flutter Developer",
        duration: "August 2025 — Present",
        bullets: [
            "Spearheading the modernization of the mobile application architecture and user interface.",
            "Successfully integrated the Paystack payment gateway to enable secure and efficient user transactions.",
            "Continuously optimizing app performance for speed and developing new features to support team collaboration."
        ]
    },
    {
        company: "Kilimo Afya Startup",
        role: "Full-Stack Mobile Engineer",
        duration: "December 2025 — March 2026",
        bullets: [
            "Engineered automated data scraping pipelines using Python and cron jobs to aggregate multi-source data into MongoDB.",
            "Developed robust Flask APIs to serve backend data efficiently.",
            "Designed and implemented intuitive, high-performance frontend interfaces using Flutter, integrating seamlessly with the custom backend."
        ]
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
        name: "PesaLens",
        description: "An automated, local-first expense tracking application designed to securely parse and log M-Pesa transactions. Currently managing closed testing for rollout.",
        technologies: ["Kotlin", "Jetpack Compose", "Android", "Room DB"],
        image: "screenshots/PesaLens.png",
        links: {
            github: null,
            demo: null
        }
    },
    {
        name: "AfyaSmart",
        description: "A medical AI assistant integrated directly with Google Gemini, designed to provide intelligent diagnostic support and user-friendly health insights.",
        technologies: ["Mobile Development", "Google Gemini API", "AI/ML"],
        image: "screenshots/AfyaSmart.jpeg",
        links: {
            github: "https://github.com/jude-craft/Unistay.git",
            demo: null
        }
    },
    {
        name: "ShopMate",
        description: "An inventory and sales management application built to help shopkeepers accurately maintain stock records, log daily sales, and actively track their profit margins.",
        technologies: ["Flutter", "Dart", "Database Management"],
        image: "screenshots/Shopmate.jpg",
        links: {
            github: "https://github.com/jude-craft/ShopMate.git",
            demo: null
        }
    },
    {
        name: "Unistay",
        description: "A customized housing recommendation platform for Meru University students. It serves predictions by fetching data from a PostgreSQL database, powered by XGBoost and Random Forest models trained on primary data.",
        technologies: ["Flutter", "PostgreSQL", "XGBoost", "Random Forest"],
        image: null,
        links: {
            github: "https://github.com/jude-craft/Unistay.git",
            demo: null
        }
    }
];

const educationData = [
    {
        degree: "Bachelor of Science in Data Science",
        institution: "Meru University of Science & Technology",
        period: "2024 — 2028",
        description: "Focusing on data analytics, machine learning, and robust software engineering practices. Actively bridging the gap between AI and mobile ecosystems.",
        achievements: [
            "Lead, Meru University Android Community",
            "Mentoring students in dual-stack mobile development using Kotlin, Jetpack Compose, and Flutter.",
            "Organizing and executing community technical workshops and networking events."
        ]
    }
];

const certificationsData = [
    {
        name: "ALX Freelancer Academy",
        issuer: "ALX Ventures",
        date: "March 2026",
        image: "certificates/117-freelancer-academy-4-week-certificate-derrick-juma.png",
        description: "Completed the intensive 4-week ALX Ventures Freelancer Academy program. Issued March 2026.",
        credentialUrl: null
    },
    {
        name: "ALX AI Career Essentials",
        issuer: "ALX",
        date: "May 2026",
        image: "certificates/AI-career%20essentials.png",
        description: "Graduated from the AI Career Essentials program, mastering the practical application of AI tools. Issued May 2026.",
        credentialUrl: "https://ehub.alxafrica.com/ob3/verify-certificate/8a44701d-1b73-47fb-90eb-6ec9f5469c7c"
    },
    {
        name: "Power Learn Project (PLP) Software Development",
        issuer: "Power Learn Project",
        date: "November 2025",
        image: "certificates/plp-certificate-1.png",
        description: "Completed a 16-week Software Development program covering Python, Web Tech, and Databases, with a core specialization in Mobile-Friendly PWAs using Dart and Flutter.",
        credentialUrl: null
    },
    {
        name: "Kaggle Python",
        issuer: "Kaggle",
        date: "May 2026",
        image: "certificates/Derrick%20Juma%20-%20Python.png",
        description: "Successfully completed the comprehensive Python programming course. Issued May 2026.",
        credentialUrl: null
    },
    {
        name: "Kaggle Intro to Programming",
        issuer: "Kaggle",
        date: "May 2026",
        image: "certificates/Derrick%20Juma%20-%20Intro%20to%20Programming.png",
        description: "Successfully completed the foundational programming course. Issued May 2026.",
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
            <a href="resume/Derick_Juma_Resume.pdf" download class="btn btn-secondary btn-download">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
            </a>
            <a href="#contact" class="btn btn-ghost">Contact Me</a>
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

function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline) return;

    timeline.innerHTML = experienceData.map(item => `
        <article class="experience-item">
            <span class="experience-period">${item.duration}</span>
            <h3 class="experience-role">${item.role}</h3>
            <p class="experience-company">${item.company}</p>
            ${item.bullets && item.bullets.length
            ? `<ul class="experience-bullets">
                    ${item.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>`
            : ''
        }
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

    grid.innerHTML = certificationsData.map((cert, index) => `
        <article class="cert-card">
            ${cert.image
            ? `<button type="button" class="cert-thumb" data-cert-index="${index}" aria-label="Open ${cert.name} certificate in viewer">
                    <img src="${cert.image}" alt="${cert.name} certificate" class="cert-image" loading="lazy">
                    <span class="cert-thumb-overlay" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                    </span>
                </button>`
            : `<div class="cert-icon" aria-hidden="true">${certIcon}</div>`
        }
            <div class="cert-body">
                <h3 class="cert-name">${cert.name}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                ${cert.description
            ? `<p class="cert-description">${cert.description}</p>`
            : ''
        }
            </div>
            <div class="cert-meta">
                <span class="cert-date">${cert.date}</span>
                <div class="cert-actions">
                    ${cert.credentialUrl
            ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-link">Verify →</a>`
            : ''
        }
                </div>
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
        { name: 'X', url: profileData.contact.twitter }
    ];

    directContact.innerHTML = contactLinks.map(link => `
        <li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.name}</a></li>
    `).join('');
}

const GITHUB_USERNAME = 'jude-craft';
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

const githubIcons = {
    repos: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    followers: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    following: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
    githubMark: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>`
};

function githubCardLoadingMarkup() {
    return `
        <div class="github-card-skeleton" aria-hidden="true">
            <div class="gh-skel-avatar"></div>
            <div class="gh-skel-lines">
                <div class="gh-skel-line gh-skel-line-lg"></div>
                <div class="gh-skel-line gh-skel-line-sm"></div>
                <div class="gh-skel-stats">
                    <div class="gh-skel-stat"></div>
                    <div class="gh-skel-stat"></div>
                    <div class="gh-skel-stat"></div>
                </div>
            </div>
        </div>
        <span class="sr-only">Loading GitHub profile…</span>
    `;
}

function githubCardSuccessMarkup(data) {
    const displayName = data.name || data.login;
    const formatCount = (n) => {
        if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
        return String(n);
    };

    return `
        <img class="gh-avatar" src="${data.avatar_url}" alt="" loading="lazy" referrerpolicy="no-referrer">
        <div class="gh-body">
            <div class="gh-header">
                <div class="gh-identity">
                    <p class="gh-name">${displayName}</p>
                    <p class="gh-login">@${data.login}</p>
                </div>
                <span class="gh-mark" aria-hidden="true">${githubIcons.githubMark}</span>
            </div>
            <div class="gh-stats" role="list">
                <span class="gh-stat" role="listitem" title="Public repositories">
                    ${githubIcons.repos}
                    <span class="gh-stat-value">${formatCount(data.public_repos)}</span>
                    <span class="gh-stat-label">Repos</span>
                </span>
                <span class="gh-stat" role="listitem" title="Followers">
                    ${githubIcons.followers}
                    <span class="gh-stat-value">${formatCount(data.followers)}</span>
                    <span class="gh-stat-label">Followers</span>
                </span>
                <span class="gh-stat" role="listitem" title="Following">
                    ${githubIcons.following}
                    <span class="gh-stat-value">${formatCount(data.following)}</span>
                    <span class="gh-stat-label">Following</span>
                </span>
            </div>
        </div>
    `;
}

function githubCardFallbackMarkup() {
    return `
        <span class="gh-fallback-icon" aria-hidden="true">${githubIcons.githubMark}</span>
        <div class="gh-body">
            <p class="gh-name">@${GITHUB_USERNAME}</p>
            <p class="gh-fallback-text">Live stats are unavailable right now — visit my profile on GitHub<span class="gh-fallback-arrow" aria-hidden="true">→</span></p>
        </div>
    `;
}

async function renderGithubCard() {
    const card = document.getElementById('githubCard');
    if (!card) return;

    card.classList.add('is-loading');
    card.classList.remove('is-ready', 'is-fallback');
    card.innerHTML = githubCardLoadingMarkup();

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            headers: { 'Accept': 'application/vnd.github+json' }
        });
        if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);
        const data = await response.json();

        card.innerHTML = githubCardSuccessMarkup(data);
        card.classList.remove('is-loading');
        card.classList.add('is-ready');
    } catch (err) {
        console.warn('GitHub profile fetch failed, showing fallback:', err);
        card.innerHTML = githubCardFallbackMarkup();
        card.classList.remove('is-loading');
        card.classList.add('is-fallback');
    }
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

function showFormStatus(form, type, text) {
    const existing = form.parentElement.querySelector('.form-status-message');
    if (existing) existing.remove();

    const el = document.createElement('div');
    el.className = `form-status-message form-status-${type}`;
    el.setAttribute('role', type === 'error' ? 'alert' : 'status');
    el.textContent = text;
    form.parentElement.insertBefore(el, form.nextSibling);

    if (type === 'success') {
        setTimeout(() => el.remove(), 6000);
    }
    return el;
}

async function handleContactFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('contactEmail');
    const message = document.getElementById('message');
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!validateContactForm(name, email, message)) return;

    if (typeof emailjs === 'undefined') {
        showFormStatus(form, 'error', 'Email service failed to load. Please try again or email me directly.');
        return;
    }

    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
            name: name.value.trim(),
            email: email.value.trim(),
            message: message.value.trim()
        });

        showFormStatus(form, 'success', '✓ Message sent! I\'ll get back to you soon.');
        form.reset();
    } catch (err) {
        console.error('EmailJS send failed:', err);
        showFormStatus(form, 'error', 'Could not send message. Please try again or email me directly.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
}

// ===================================
// CERTIFICATE LIGHTBOX
// ===================================

function setupCertLightbox() {
    const lightbox = document.getElementById('certLightbox');
    if (!lightbox) return;

    const image = lightbox.querySelector('.lightbox-image');
    const caption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const grid = document.getElementById('certGrid');
    let lastFocused = null;

    const open = (cert, triggerEl) => {
        lastFocused = triggerEl || document.activeElement;
        image.src = cert.image;
        image.alt = `${cert.name} certificate`;
        caption.textContent = `${cert.name} — ${cert.issuer}`;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
        closeBtn.focus();
    };

    const close = () => {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        image.src = '';
        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }
    };

    grid.addEventListener('click', (event) => {
        const trigger = event.target.closest('.cert-thumb');
        if (!trigger) return;
        const idx = Number(trigger.dataset.certIndex);
        const cert = certificationsData[idx];
        if (cert && cert.image) open(cert, trigger);
    });

    closeBtn.addEventListener('click', close);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) close();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.classList.contains('open')) close();
    });
}

// ===================================
// INITIALIZATION
// ===================================

function initializeApp() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    }

    initializeTheme();

    renderHero();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderCertifications();
    renderContact();
    renderGithubCard();
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
    setupCertLightbox();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
