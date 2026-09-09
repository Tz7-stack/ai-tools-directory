// ===========================
// AI Tools Database with SVG Logos
// ===========================

const aiTools = [
    {
        id: 1,
        name: "ChatGPT",
        category: "writing",
        description: "Advanced AI chatbot for writing, coding, analysis, and creative tasks.",
        features: ["Natural language processing", "Code generation", "Essay writing", "Research assistance"],
        pricing: "Free / $20/month",
        rating: 4.9,
        affiliate: "https://openai.com/chatgpt?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="chatgpt-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#10a37f;stop-opacity:1" /><stop offset="100%" style="stop-color:#1f9672;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#chatgpt-grad)"/><path d="M 50 20 Q 70 20 75 40 Q 80 50 75 60 Q 70 70 50 75 Q 30 70 25 60 Q 20 50 25 40 Q 30 20 50 20" fill="white"/><circle cx="50" cy="50" r="8" fill="#10a37f"/></svg>',
        tags: ["chatbot", "ai", "writing", "coding", "analysis", "openai"]
    },
    {
        id: 2,
        name: "Midjourney",
        category: "image",
        description: "Create stunning AI-generated images with detailed prompts and artistic styles.",
        features: ["High-quality images", "Multiple styles", "Remix feature", "Commercial use"],
        pricing: "$10-60/month",
        rating: 4.8,
        affiliate: "https://midjourney.com?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mid-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" /><stop offset="100%" style="stop-color:#6d28d9;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#mid-grad)"/><rect x="25" y="30" width="15" height="20" fill="white" rx="2"/><rect x="45" y="25" width="15" height="25" fill="white" rx="2"/><rect x="65" y="35" width="15" height="15" fill="white" rx="2"/><rect x="25" y="55" width="55" height="3" fill="white"/></svg>',
        tags: ["image", "generation", "art", "creative", "design", "ai-art"]
    },
    {
        id: 3,
        name: "GitHub Copilot",
        category: "code",
        description: "AI pair programmer that helps write code faster with autocomplete suggestions.",
        features: ["Code generation", "Bug fixing", "Test writing", "Multi-language support"],
        pricing: "$10/month or $100/year",
        rating: 4.7,
        affiliate: "https://github.com/features/copilot?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="github-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#24292e;stop-opacity:1" /><stop offset="100%" style="stop-color:#161b22;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#github-grad)"/><path d="M 50 25 C 60 25 68 33 68 43 C 68 50 63 56 56 58 C 55 58 54 57 54 56 V 52 C 54 51 55 50 56 50 C 61 50 65 46 65 40 C 65 34 61 30 55 30 C 50 30 46 33 45 37 C 45 37 44 38 43 38 C 42 38 42 37 42 37 C 43 32 47 27 50 25 Z M 40 45 C 38 45 37 47 37 49 C 37 51 38 53 40 53 C 42 53 43 51 43 49 C 43 47 42 45 40 45 Z M 60 45 C 58 45 57 47 57 49 C 57 51 58 53 60 53 C 62 53 63 51 63 49 C 63 47 62 45 60 45 Z" fill="white"/></svg>',
        tags: ["code", "programming", "developer", "github", "autocomplete", "coding-assistant"]
    },
    {
        id: 4,
        name: "DALL-E 3",
        category: "image",
        description: "Generate images from text descriptions with exceptional detail and accuracy.",
        features: ["Text-to-image", "Image editing", "Variation generation", "High resolution"],
        pricing: "Pay per use / $15/month",
        rating: 4.8,
        affiliate: "https://openai.com/dall-e-3?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="dalle-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" /><stop offset="100%" style="stop-color:#ee5a6f;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#dalle-grad)"/><rect x="20" y="20" width="60" height="60" fill="none" stroke="white" stroke-width="3" rx="4"/><circle cx="35" cy="35" r="6" fill="white"/><path d="M 20 70 L 45 45 L 65 65 L 80 50" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
        tags: ["image", "text-to-image", "generation", "openai", "creative", "art"]
    },
    {
        id: 5,
        name: "Jasper",
        category: "writing",
        description: "AI writing assistant for marketing copy, blog posts, and long-form content.",
        features: ["Content templates", "SEO optimization", "Brand voice", "Plagiarism checker"],
        pricing: "$39-125/month",
        rating: 4.6,
        affiliate: "https://www.jasper.ai?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="jasper-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" /><stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#jasper-grad)"/><rect x="30" y="25" width="8" height="50" fill="white" rx="2"/><rect x="42" y="30" width="8" height="45" fill="white" rx="2"/><rect x="54" y="20" width="8" height="55" fill="white" rx="2"/><rect x="66" y="35" width="8" height="40" fill="white" rx="2"/></svg>',
        tags: ["writing", "marketing", "content", "copywriting", "seo", "blog"]
    },
    {
        id: 6,
        name: "Synthesia",
        category: "video",
        description: "Create videos with AI avatars and text-to-speech in multiple languages.",
        features: ["AI avatars", "Text-to-speech", "Multiple languages", "Video templates"],
        pricing: "$25-225/month",
        rating: 4.7,
        affiliate: "https://www.synthesia.io?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="synth-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" /><stop offset="100%" style="stop-color:#be185d;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#synth-grad)"/><path d="M 30 40 L 50 30 L 70 40 L 70 65 Q 70 70 65 70 L 35 70 Q 30 70 30 65 Z" fill="white" stroke="white" stroke-width="1"/><circle cx="50" cy="50" r="6" fill="#ec4899"/></svg>',
        tags: ["video", "avatar", "text-to-speech", "tts", "video-generation", "animation"]
    },
    {
        id: 7,
        name: "Runway",
        category: "video",
        description: "AI-powered video editing and generation tools for creators.",
        features: ["Background removal", "Motion tracking", "Video generation", "Effects library"],
        pricing: "Free / $12-55/month",
        rating: 4.6,
        affiliate: "https://runwayml.com?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="runway-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f97316;stop-opacity:1" /><stop offset="100%" style="stop-color:#ea580c;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#runway-grad)"/><rect x="20" y="30" width="15" height="40" fill="white" rx="2"/><rect x="42" y="25" width="16" height="50" fill="white" rx="2"/><rect x="65" y="35" width="15" height="30" fill="white" rx="2"/></svg>',
        tags: ["video", "editing", "generation", "effects", "motion", "creative"]
    },
    {
        id: 8,
        name: "Murf",
        category: "voice",
        description: "AI voice generator for creating natural-sounding voiceovers.",
        features: ["500+ voices", "Multiple languages", "Real-time editing", "Emotion control"],
        pricing: "Free / $19-299/month",
        rating: 4.5,
        affiliate: "https://murf.ai?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="murf-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#14b8a6;stop-opacity:1" /><stop offset="100%" style="stop-color:#0d9488;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#murf-grad)"/><circle cx="50" cy="50" r="8" fill="white"/><path d="M 50 42 Q 58 42 58 50 Q 58 58 50 58" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M 50 38 Q 65 38 65 50 Q 65 62 50 62" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.6"/></svg>',
        tags: ["voice", "audio", "text-to-speech", "voiceover", "tts", "narration"]
    },
    {
        id: 9,
        name: "Notion AI",
        category: "productivity",
        description: "AI assistant integrated into Notion for writing, summarizing, and brainstorming.",
        features: ["Document generation", "Summarization", "Brainstorming", "Translation"],
        pricing: "$8-10/month (add-on)",
        rating: 4.5,
        affiliate: "https://notion.so?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="notion-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#000000;stop-opacity:1" /><stop offset="100%" style="stop-color:#333333;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#notion-grad)"/><g fill="white"><rect x="25" y="25" width="12" height="12" rx="1"/><rect x="40" y="25" width="12" height="12" rx="1"/><rect x="55" y="25" width="12" height="12" rx="1"/><rect x="25" y="42" width="12" height="12" rx="1"/><rect x="40" y="42" width="12" height="12" rx="1"/><rect x="55" y="42" width="12" height="12" rx="1"/><rect x="25" y="59" width="12" height="12" rx="1"/><rect x="40" y="59" width="12" height="12" rx="1"/><rect x="55" y="59" width="12" height="12" rx="1"/></g></svg>',
        tags: ["productivity", "notes", "organization", "writing", "brainstorming", "workspace"]
    },
    {
        id: 10,
        name: "Grammarly",
        category: "writing",
        description: "AI writing assistant that checks grammar, tone, and clarity in real-time.",
        features: ["Grammar checking", "Tone detection", "Plagiarism check", "Tone adjuster"],
        pricing: "Free / $12/month",
        rating: 4.7,
        affiliate: "https://www.grammarly.com?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grammarly-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#15803d;stop-opacity:1" /><stop offset="100%" style="stop-color:#166534;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#grammarly-grad)"/><path d="M 50 25 L 65 55 L 55 55 L 60 70 L 40 70 L 45 55 L 35 55 Z" fill="white"/></svg>',
        tags: ["writing", "grammar", "editing", "checker", "plagiarism", "proofreading"]
    },
    {
        id: 11,
        name: "Copy.ai",
        category: "writing",
        description: "AI copywriting tool for sales pages, ads, emails, and social media content.",
        features: ["Content templates", "Bulk generation", "Team collaboration", "API access"],
        pricing: "Free / $49+/month",
        rating: 4.5,
        affiliate: "https://www.copy.ai?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="copyai-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c084fc;stop-opacity:1" /><stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#copyai-grad)"/><rect x="25" y="30" width="25" height="30" fill="white" rx="2" stroke="white" stroke-width="1.5"/><rect x="50" y="40" width="25" height="30" fill="none" stroke="white" stroke-width="2" rx="2"/><path d="M 50 45 L 60 55 L 50 65" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        tags: ["copywriting", "marketing", "content", "social-media", "email", "sales"]
    },
    {
        id: 12,
        name: "Mixo",
        category: "productivity",
        description: "AI website builder for quickly launching landing pages and websites.",
        features: ["No-code builder", "AI content generation", "SEO tools", "CMS integration"],
        pricing: "Free / $99+/month",
        rating: 4.4,
        affiliate: "https://mixo.io?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mixo-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" /><stop offset="100%" style="stop-color:#0891b2;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#mixo-grad)"/><path d="M 30 50 Q 40 40 50 40 Q 60 40 70 50 Q 60 60 50 60 Q 40 60 30 50" fill="white" opacity="0.9"/><circle cx="50" cy="50" r="6" fill="#06b6d4"/></svg>',
        tags: ["website", "builder", "no-code", "landing-page", "seo", "cms"]
    },
    {
        id: 13,
        name: "Stable Diffusion",
        category: "image",
        description: "Open-source AI image generation model with amazing customization options.",
        features: ["Open-source", "Customizable", "Fast generation", "Free to use"],
        pricing: "Free",
        rating: 4.6,
        affiliate: "https://stablediffusionweb.com?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sd-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#a21caf;stop-opacity:1" /><stop offset="100%" style="stop-color:#7e22ce;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#sd-grad)"/><circle cx="40" cy="40" r="12" fill="white" opacity="0.8"/><circle cx="60" cy="40" r="12" fill="white" opacity="0.6"/><circle cx="50" cy="60" r="12" fill="white" opacity="0.7"/></svg>',
        tags: ["image", "generation", "open-source", "art", "free", "customizable"]
    },
    {
        id: 14,
        name: "Bard",
        category: "writing",
        description: "Google's conversational AI assistant for discussions and creative writing.",
        features: ["Conversation AI", "Code generation", "Translation", "Creative writing"],
        pricing: "Free (with Google account)",
        rating: 4.5,
        affiliate: "https://bard.google.com?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bard-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" /><stop offset="100%" style="stop-color:#d97706;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#bard-grad)"/><path d="M 50 30 Q 65 40 65 50 Q 65 65 50 70 Q 35 65 35 50 Q 35 40 50 30" fill="white"/><path d="M 45 45 L 55 45 M 45 55 L 55 55" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/></svg>',
        tags: ["chatbot", "conversation", "google", "writing", "translation", "ai"]
    },
    {
        id: 15,
        name: "Typeform",
        category: "analytics",
        description: "AI-enhanced survey and form builder for gathering customer insights.",
        features: ["Smart surveys", "Logic jumps", "Analysis AI", "Integration ready"],
        pricing: "Free / $25-83/month",
        rating: 4.6,
        affiliate: "https://www.typeform.com?ref=aitools",
        logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="typeform-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#262b3a;stop-opacity:1" /><stop offset="100%" style="stop-color:#1a1f2e;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#typeform-grad)"/><g fill="white"><circle cx="50" cy="35" r="4"/><line x1="50" y1="40" x2="50" y2="55" stroke="white" stroke-width="2"/><circle cx="38" cy="62" r="4"/><circle cx="62" cy="62" r="4"/><line x1="50" y1="55" x2="38" y2="62" stroke="white" stroke-width="2"/><line x1="50" y1="55" x2="62" y2="62" stroke="white" stroke-width="2"/></g></svg>',
        tags: ["survey", "form", "analytics", "data", "insights", "feedback"]
    }
];

// ===========================
// DOM Elements
// ===========================

const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const toolTemplate = document.getElementById('toolTemplate');

let currentFilter = 'all';
let currentSearch = '';
let searchResults = [];

// ===========================
// Smart Search Function
// ===========================

function smartSearch(query) {
    if (!query.trim()) return aiTools;
    
    const q = query.toLowerCase();
    
    // Score each tool based on relevance
    const scored = aiTools.map(tool => {
        let score = 0;
        
        // Exact name match (highest priority)
        if (tool.name.toLowerCase() === q) score += 100;
        // Name starts with query
        else if (tool.name.toLowerCase().startsWith(q)) score += 80;
        // Name contains query
        else if (tool.name.toLowerCase().includes(q)) score += 60;
        
        // Description match
        if (tool.description.toLowerCase().includes(q)) score += 40;
        
        // Tag match
        if (tool.tags.some(tag => tag.includes(q))) score += 50;
        if (tool.tags.some(tag => tag === q)) score += 70;
        
        // Category match
        if (tool.category.includes(q)) score += 30;
        
        // Feature match
        if (tool.features.some(f => f.toLowerCase().includes(q))) score += 25;
        
        return { tool, score };
    });
    
    // Filter out zero scores and sort by score
    return scored
        .filter(s => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(s => s.tool);
}

// ===========================
// Render Tools
// ===========================

function renderTools(toolsToRender = aiTools) {
    toolsGrid.innerHTML = '';

    if (toolsToRender.length === 0) {
        toolsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">No tools found. Try a different search or filter.</p>';
        return;
    }

    toolsToRender.forEach(tool => {
        const toolCard = toolTemplate.content.cloneNode(true);
        
        // Add SVG logo
        const logoContainer = toolCard.querySelector('.tool-logo-container');
        logoContainer.innerHTML = tool.logo;
        
        toolCard.querySelector('.tool-name').textContent = tool.name;
        toolCard.querySelector('.tool-category').textContent = capitalizeCategory(tool.category);
        toolCard.querySelector('.tool-description').textContent = tool.description;
        toolCard.querySelector('.price').textContent = tool.pricing;
        toolCard.querySelector('.rating').textContent = tool.rating;
        
        const featuresList = toolCard.querySelector('.features-list');
        featuresList.innerHTML = '';
        tool.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        const affiliateLink = toolCard.querySelector('.affiliate-link');
        affiliateLink.href = tool.affiliate;
        affiliateLink.textContent = `Visit ${tool.name}`;
        
        const readMoreBtn = toolCard.querySelector('.read-more');
        readMoreBtn.addEventListener('click', () => {
            showReview(tool);
        });
        
        toolsGrid.appendChild(toolCard);
    });
}

// ===========================
// Filter & Search Functions
// ===========================

function capitalizeCategory(category) {
    const categories = {
        'writing': '✍️ Writing',
        'image': '🎨 Image Generation',
        'code': '💻 Code',
        'video': '🎬 Video',
        'voice': '🎙️ Voice & Audio',
        'productivity': '⚡ Productivity',
        'analytics': '📊 Analytics',
        'all': 'All'
    };
    return categories[category] || category;
}

function filterAndSearch() {
    let filtered = aiTools;

    // Apply smart search if there's a search query
    if (currentSearch.trim() !== '') {
        filtered = smartSearch(currentSearch);
    }
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(tool => tool.category === currentFilter);
    }

    renderTools(filtered);
}

// ===========================
// Event Listeners
// ===========================

// Filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.category;
        filterAndSearch();
    });
});

// Search functionality with smart search
searchBtn.addEventListener('click', () => {
    currentSearch = searchInput.value;
    filterAndSearch();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        currentSearch = searchInput.value;
        filterAndSearch();
    }
});

// Real-time search with smart algorithm
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    filterAndSearch();
});

// ===========================
// Review Modal (Basic)
// ===========================

function showReview(tool) {
    const reviews = {
        1: `${tool.name} is a game-changer for anyone who needs writing, coding, or analysis assistance. The interface is intuitive and responses are incredibly helpful.`,
        2: `Midjourney produces stunning artwork. The level of detail is impressive, and the community is very active and helpful.`,
        3: `GitHub Copilot accelerates coding significantly. It understands context well and suggests relevant code snippets.`,
        4: `DALL-E 3 is one of the best image generators available. The quality is exceptional and instructions are followed precisely.`,
        5: `Jasper is perfect for marketing teams. The templates save time and the content quality is professional.`,
    };

    const reviewText = reviews[tool.id] || `${tool.name} is a great AI tool that delivers excellent results.`;
    alert(`Review: ${tool.name}\n\n${reviewText}\n\nRating: ${tool.rating}/5 ⭐`);
}

// ===========================
// Initialize
// ===========================

renderTools();

console.log('%c🤖 AI Tools Directory v1.5 - Smart Search Enabled', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log(`%c${aiTools.length} AI tools with custom SVG logos ready to explore`, 'color: #8b5cf6; font-size: 14px;');
