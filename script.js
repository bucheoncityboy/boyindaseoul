/**
 * boyindaseoul - Copy Trading Homepage
 * Interactive JavaScript with i18n support
 */

// ========================================
// Internationalization (i18n)
// ========================================
const translations = {
    ko: {
        // Navigation
        'nav.about': '소개',
        'nav.trading': '트레이딩',
        'nav.platforms': '플랫폼',
        'nav.features': '특징',
        'nav.contact': '연락처',
        
        // Hero
        'hero.badge': '카피트레이딩 서비스',
        'hero.title': '프로페셔널 암호화폐<br><span class="highlight">카피트레이딩</span>',
        'hero.desc': '바이낸스, 빙엑스, OKX에서 자동으로 내 거래를 따라하세요. 투명한 성과, 전문적인 리스크 관리.',
        'hero.cta': '시작하기',
        'hero.learn': '더 알아보기',
        'hero.stat1': '플랫폼',
        'hero.stat2': '모니터링',
        'hero.stat3': '리스크 관리',
        
        // About
        'about.title': '소개',
        'about.education': '한양대학교 (서울) 경영학 · 정보시스템학',
        'about.desc': '퀀트 매매와 ICT 트레이딩을 전문으로 하는 암호화폐 트레이더입니다. 체계적인 접근 방식과 엄격한 리스크 관리를 통해 다양한 거래소에서 투명한 카피트레이딩 서비스를 제공합니다.',
        'about.item1': '퀀트 매매 & ICT 트레이딩 전문',
        'about.item2': '리스크 관리 우선',
        'about.item3': '투명한 실시간 성과 추적',
        'about.item4': '다중 거래소 지원',
        'about.card1.title': '퀀트 매매',
        'about.card1.desc': '데이터 기반 전략',
        'about.card2.title': 'ICT 트레이딩',
        'about.card2.desc': '스마트 머니 컨셉',
        'about.card3.title': '안전',
        'about.card3.desc': '전문적 리스크 통제',
        
        // Trading
        'trading.title': '트레이딩 스타일',
        'trading.quant.title': '퀀트 매매 (Quantitative Trading)',
        'trading.quant.desc': '수학적 모델과 통계적 분석을 기반으로 한 체계적인 트레이딩. 감정을 배제하고 데이터에 기반한 의사결정으로 일관된 수익을 추구합니다.',
        'trading.quant.f1': '알고리즘 기반 진입/청산',
        'trading.quant.f2': '백테스팅 검증 전략',
        'trading.quant.f3': '멀티 타임프레임 분석',
        'trading.ict.title': 'ICT 트레이딩',
        'trading.ict.desc': 'Inner Circle Trader 컨셉을 활용한 프라이스 액션 트레이딩. 시장 구조, 유동성, 오더 블록을 분석하여 스마트 머니의 흐름을 따라갑니다.',
        'trading.ict.f1': '시장 구조 분석',
        'trading.ict.f2': '유동성 스윕 포착',
        'trading.ict.f3': '오더 블록 식별',
        
        // Platforms
        'platforms.title': '이용 가능한 플랫폼',
        'platforms.desc': '원하는 거래소에서 내 거래를 카피하세요',
        'platforms.binance': '세계 최대 암호화폐 거래소',
        'platforms.bingx': '선도적인 카피트레이딩 플랫폼',
        'platforms.okx': '글로벌 암호화폐 거래소',
        'platforms.active': '활성',
        'platforms.cta.title': '시작할 준비 되셨나요?',
        'platforms.cta.desc': '플랫폼을 선택하고 <strong>boyindaseoul</strong>을 검색하여 카피트레이딩을 시작하세요.',
        
        // Features
        'features.title': '왜 카피트레이딩인가요?',
        'features.f1.title': '패시브 인컴',
        'features.f1.desc': '전문 트레이더가 대신 작업합니다. 24/7 시장 모니터링 불필요.',
        'features.f2.title': '완전한 통제',
        'features.f2.desc': '투자 금액을 직접 결정하세요. 언제든지 원클릭으로 중단 가능.',
        'features.f3.title': '투명성',
        'features.f3.desc': '모든 거래가 공개됩니다. 거래소에서 실시간 성과 추적 가능.',
        'features.f4.title': '낮은 진입 장벽',
        'features.f4.desc': '최소 투자금으로 시작 가능. 대부분의 플랫폼에서 최소 요구사항 없음.',
        
        // Contact
        'contact.title': '연락처',
        'contact.desc': '질문이 있으신가요? 언제든지 연락주세요.',
        
        // Footer
        'footer.tagline': '프로페셔널 카피트레이딩',
        'footer.disclaimer': '트레이딩은 위험을 수반합니다. 과거의 성과가 미래의 결과를 보장하지 않습니다.'
    },
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.trading': 'Trading',
        'nav.platforms': 'Platforms',
        'nav.features': 'Features',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.badge': 'Copy Trading Service',
        'hero.title': 'Professional Crypto<br><span class="highlight">Copy Trading</span>',
        'hero.desc': 'Follow my trades automatically on Binance, BingX, and OKX. Transparent performance, professional risk management.',
        'hero.cta': 'Start Copying',
        'hero.learn': 'Learn More',
        'hero.stat1': 'Platforms',
        'hero.stat2': 'Monitoring',
        'hero.stat3': 'Risk Management',
        
        // About
        'about.title': 'About Me',
        'about.education': 'Hanyang University (Seoul) Business Administration · Information Systems',
        'about.desc': 'I\'m a professional crypto trader specializing in quantitative trading and ICT trading. With a systematic approach and strict risk management, I offer transparent copy trading services across multiple exchanges.',
        'about.item1': 'Quantitative & ICT Trading Specialist',
        'about.item2': 'Risk Management First',
        'about.item3': 'Transparent Real-time Performance Tracking',
        'about.item4': 'Multi-Exchange Support',
        'about.card1.title': 'Quant Trading',
        'about.card1.desc': 'Data-driven strategies',
        'about.card2.title': 'ICT Trading',
        'about.card2.desc': 'Smart Money Concept',
        'about.card3.title': 'Safe',
        'about.card3.desc': 'Professional risk control',
        
        // Trading
        'trading.title': 'Trading Style',
        'trading.quant.title': 'Quantitative Trading',
        'trading.quant.desc': 'Systematic trading based on mathematical models and statistical analysis. Pursuing consistent returns through emotion-free, data-driven decision making.',
        'trading.quant.f1': 'Algorithm-based entry/exit',
        'trading.quant.f2': 'Backtested strategies',
        'trading.quant.f3': 'Multi-timeframe analysis',
        'trading.ict.title': 'ICT Trading',
        'trading.ict.desc': 'Price action trading using Inner Circle Trader concepts. Analyzing market structure, liquidity, and order blocks to follow smart money flows.',
        'trading.ict.f1': 'Market structure analysis',
        'trading.ict.f2': 'Liquidity sweep detection',
        'trading.ict.f3': 'Order block identification',
        
        // Platforms
        'platforms.title': 'Available Platforms',
        'platforms.desc': 'Copy my trades on your preferred exchange',
        'platforms.binance': 'World\'s largest crypto exchange',
        'platforms.bingx': 'Leading copy trading platform',
        'platforms.okx': 'Global crypto exchange',
        'platforms.active': 'Active',
        'platforms.cta.title': 'Ready to Start?',
        'platforms.cta.desc': 'Choose your platform and search for <strong>boyindaseoul</strong> to start copy trading.',
        
        // Features
        'features.title': 'Why Copy Trade?',
        'features.f1.title': 'Passive Income',
        'features.f1.desc': 'Let professional traders work for you. No need to monitor markets 24/7.',
        'features.f2.title': 'Full Control',
        'features.f2.desc': 'You decide how much to invest. Stop copying anytime with one click.',
        'features.f3.title': 'Transparent',
        'features.f3.desc': 'All trades are visible. Track performance in real-time on the exchange.',
        'features.f4.title': 'Low Barrier',
        'features.f4.desc': 'Start with minimal investment. No minimum requirements on most platforms.',
        
        // Contact
        'contact.title': 'Get in Touch',
        'contact.desc': 'Have questions? Feel free to reach out.',
        
        // Footer
        'footer.tagline': 'Professional Copy Trading',
        'footer.disclaimer': 'Trading involves risk. Past performance does not guarantee future results.'
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);
    
    // Language switch buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animateElements = document.querySelectorAll(
        '.platform-card, .feature-card, .highlight-card, .stat-card, .trading-card'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Active Navigation Highlight
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNav = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                    navLink.style.color = '#c9d1d9';
                } else {
                    navLink.classList.remove('active');
                    navLink.style.color = '';
                }
            }
        });
    };

    window.addEventListener('scroll', highlightNav);

    // ========================================
    // Platform Card Click
    // ========================================
    const platformCards = document.querySelectorAll('.platform-card');
    
    platformCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });

    // ========================================
    // Console Easter Egg
    // ========================================
    console.log('%c boyindaseoul ', 'background: linear-gradient(135deg, #3fb950, #58a6ff); color: white; font-size: 24px; padding: 10px 20px; border-radius: 8px;');
    console.log('%c Professional Copy Trading ', 'color: #8b949e; font-size: 14px;');
});
