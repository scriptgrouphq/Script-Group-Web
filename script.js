// ====================== script.js - Final English Version ======================

function navigateTo(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
        target.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
}

// Mobile Menu Functions
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    hamburger.classList.add('active');
    hamburger.textContent = '✕';
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    hamburger.classList.remove('active');
    hamburger.textContent = '☰';
}

hamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
});

// ====================== Content Database (English Only) ======================
const contentDB = {
   home: `
    <section id="home" class="flex items-center min-h-screen">
        <div class="hero-text max-w-4xl">
            <span class="block mb-8 tracking-[6px] text-zinc-500 text-sm">EST. 2026</span>
            
            <h1 class="leading-none mb-12 text-[4.0rem] lg:text-[4.0rem] tracking-tighter">
                We Build Cross-Platform Products .<br>
            </h1>
            
            <p class="text-2xl text-zinc-400 mb-16 max-w-2xl">
                A solo-founded holding company creating cross-platform systems, 
                games, and tools that will define the next decade.
            </p>
            
            <div class="flex flex-wrap gap-6">
                <button onclick="navigateTo('projects')" 
                        class="px-12 py-7 bg-white text-black text-sm uppercase tracking-widest hover:bg-zinc-200 transition font-medium rounded-2xl">
                    Explore Our Projects
                </button>
                
                <button onclick="navigateTo('products')" 
                        class="px-12 py-7 border border-zinc-600 hover:border-white text-sm uppercase tracking-widest transition rounded-2xl">
                    Digital Products
                </button>
            </div>
        </div>
    </section>
`,

    projects: `
        <section id="projects" class="pt-32">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-5xl mb-20 tracking-tight">Our Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="project-card p-14 rounded-3xl">
                        <h3 class="text-4xl mb-4">VETO</h3>
                        <p class="text-zinc-400 text-lg">Mafia Social Deduction Game</p>
                        <div class="mt-20 text-xs uppercase tracking-[2px] text-emerald-400">Launching 2027</div>
                    </div>
                    <div class="project-card p-14 rounded-3xl">
                        <h3 class="text-4xl mb-4">ScriptAI</h3>
                        <p class="text-zinc-400 text-lg">AI Tool for the Art Society</p>
                        <div class="mt-20 text-xs uppercase tracking-[2px] text-emerald-400">Beta — Late 2026</div>
                    </div>
                    <div class="project-card p-14 rounded-3xl">
                        <h3 class="text-4xl mb-4">TradeOS</h3>
                        <p class="text-zinc-400 text-lg">Full Trading Operating System</p>
                        <div class="mt-20 text-xs uppercase tracking-[2px] text-amber-400">In Development</div>
                    </div>
                    <div class="project-card p-14 rounded-3xl">
                        <h3 class="text-4xl mb-4">WarX</h3>
                        <p class="text-zinc-400 text-lg">AAA Console & VR Game</p>
                        <div class="mt-20 text-xs uppercase tracking-[2px] text-red-400">2030+</div>
                    </div>
                </div>
            </div>
        </section>
    `,

    products: `
        <section id="products" class="pt-32">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-5xl mb-20 tracking-tight">Digital Products</h2>
                
                <!-- Product Layer 1 -->
                <div class="product-card p-12 md:p-16 rounded-3xl mb-12 flex flex-col md:flex-row gap-12 items-center">
                    <div class="w-full md:w-5/12">
                        <img src="Images/veto_icon.png" alt="VETO" class="w-full rounded-2xl shadow-2xl">
                    </div>
                    <div class="w-full md:w-7/12">
                        <h3 class="text-4xl mb-6">VETO</h3>
                        <p class="text-zinc-400 text-lg leading-relaxed mb-10">Mafia Social Deduction Game. Help people entertain and enjoy their time with each other. The game supports both offline and online modes.</p>
                        <div class="flex items-center gap-6">
                            <a href="#" class="px-10 py-5 bg-white text-black font-medium rounded-2xl hover:bg-zinc-200 transition">
                                Download Now
                            </a>
                            <span class="px-6 py-3 text-sm uppercase tracking-widest border border-emerald-500 text-emerald-400 rounded-2xl">Available</span>
                        </div>
                    </div>
                </div>

                <!-- Product Layer 2 -->
                <div class="product-card p-12 md:p-16 rounded-3xl flex flex-col md:flex-row gap-12 items-center">
                    <div class="w-full md:w-5/12">
                        <img src="Images/break_loop_icon.png" alt="BreakLoop" class="w-full rounded-2xl shadow-2xl">
                    </div>
                    <div class="w-full md:w-7/12">
                        <h3 class="text-4xl mb-6">BreakLoop</h3>
                        <p class="text-zinc-400 text-lg leading-relaxed mb-10">Advanced system that helps you permanently break bad habits from your life, built on psychology and technology.</p>
                        <div class="flex items-center gap-6">
                            <a href="#" class="px-10 py-5 border border-zinc-600 hover:border-white rounded-2xl transition">
                                Coming Soon
                            </a>
                            <span class="px-6 py-3 text-sm uppercase tracking-widest border border-amber-500 text-amber-400 rounded-2xl">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    about: `
        <section id="about" class="pt-32">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-5xl mb-16 tracking-tight">About Script Group HQ</h2>
                <div class="space-y-10 text-lg text-zinc-300 leading-relaxed">
                    <p>We began in 2026 as a one-person mission with big hope for the future.</p>
                    <p>Script Group is a holding company focused on building meaningful cross-platform experiences — from mobile games and productivity systems to AAA titles and beyond.</p>
                    <p class="mt-8 text-zinc-400">Our journey: Before 2030 • After 2030 • After 2035</p>
                </div>
            </div>
        </section>
    `,

    contact: `
        <section id="contact" class="pt-32">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-5xl mb-12 tracking-tight">Let's Build the Future Together</h2>
                <p class="text-2xl text-zinc-400 mb-16">Have an idea? Want to collaborate? Or just want to say hello?</p>
                <a href="https://x.com/_script_ai_" target="_blank" 
                   class="inline-flex items-center gap-6 text-2xl hover:text-white transition">
                    Follow our journey on X @_script_ai_ <span class="text-4xl">↗</span>
                </a>
                <p class="mt-20 text-zinc-500">hello@scriptgroup.com — coming soon</p>
            </div>
        </section>
    `
};

function renderContent() {
    const main = document.getElementById('content');
    main.innerHTML = 
        contentDB.home +
        contentDB.projects +
        contentDB.products +
        contentDB.about +
        contentDB.contact;

    // Show only Home at the beginning
    document.getElementById('home').style.display = 'flex';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('products').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

// Initialize the website
window.onload = () => {
    renderContent();

    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 80);
    });
};