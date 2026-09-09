// ===========================
// AI Tools Database with Logo URLs
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
        logo: "🤖",
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
        logo: "🎨",
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
        logo: "💻",
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
        logo: "🖼️",
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
        logo: "✍️",
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
        logo: "🎬",
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
        logo: "🎥",
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
        logo: "🎙️",
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
        logo: "📝",
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
        logo: "✅",
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
        logo: "📢",
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
        logo: "🌐",
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
        logo: "🎨",
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
        logo: "🤖",
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
        logo: "📊",
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
        
        // Add logo - check if it's an emoji or URL
        const logoContainer = toolCard.querySelector('.tool-logo-container');
        
        if (tool.logo.match(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u)) {
            // It's an emoji - display as text
            const emojiDiv = document.createElement('div');
            emojiDiv.style.fontSize = '48px';
            emojiDiv.style.display = 'flex';
            emojiDiv.style.alignItems = 'center';
            emojiDiv.style.justifyContent = 'center';
            emojiDiv.style.height = '100%';
            emojiDiv.textContent = tool.logo;
            logoContainer.innerHTML = '';
            logoContainer.appendChild(emojiDiv);
        } else {
            // It's a URL
            const logoImg = toolCard.querySelector('.tool-logo');
            logoImg.src = tool.logo;
            logoImg.alt = `${tool.name} logo`;
        }
        
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
console.log(`%c${aiTools.length} AI tools with intelligent search ready to explore`, 'color: #8b5cf6; font-size: 14px;');
