// ===== boyindaseoul - i18n & Interactions =====

const i18n = {
    ko: {
        'nav.about': '소개',
        'nav.trading': '트레이딩',
        'nav.platforms': '플랫폼',
        'nav.contact': '연락',
        'hero.badge': 'Copy Trading',
        'hero.title': '퀀트 트레이더<br><span class="gradient-text">boyindaseoul</span>',
        'hero.subtitle': '데이터 기반 퀀트 매매와 ICT 트레이딩으로<br>체계적인 투자를 제공합니다',
        'hero.cta': '카피트레이딩 시작',
        'about.label': 'ABOUT',
        'about.title': '트레이더 소개',
        'about.edu': '한양대학교 경영학 · 정보시스템학',
        'about.desc': '퀀트 매매와 ICT 트레이딩을 전문으로 합니다. 수학적 모델과 시장 구조 분석을 결합하여 일관된 트레이딩 시스템을 운용합니다.',
        'about.stat1': '거래소',
        'about.stat2': '모니터링',
        'about.stat3': '기반 전략',
        'about.card1.title': '퀀트 매매',
        'about.card1.desc': '알고리즘 기반 시스템 트레이딩',
        'about.card2.title': 'ICT 트레이딩',
        'about.card2.desc': '스마트 머니 컨셉 분석',
        'trading.label': 'TRADING STYLE',
        'trading.title': '트레이딩 스타일',
        'trading.quant.desc': '수학적 모델과 통계 분석을 활용한 시스템 트레이딩입니다. 백테스팅을 거친 전략으로 감정을 배제한 매매를 수행합니다.',
        'trading.quant.f1': '알고리즘 진입/청산',
        'trading.quant.f2': '멀티 타임프레임 분석',
        'trading.quant.f3': '리스크 관리 자동화',
        'trading.ict.desc': 'Inner Circle Trader 방법론을 활용한 프라이스 액션 분석입니다. 시장 구조와 유동성을 중심으로 스마트 머니의 흐름을 추적합니다.',
        'trading.ict.f1': '시장 구조 전환 포착',
        'trading.ict.f2': '오더블록 분석',
        'trading.ict.f3': '유동성 스윕 식별',
        'platforms.label': 'PLATFORMS',
        'platforms.title': '카피트레이딩 플랫폼',
        'platforms.desc': '아래 거래소에서 boyindaseoul을 검색하세요',
        'platforms.binance': '세계 최대 거래소',
        'platforms.bingx': '카피트레이딩 플랫폼',
        'platforms.okx': '글로벌 거래소',
        'platforms.active': '활성',
        'contact.label': 'CONTACT',
        'contact.title': '연락처',
        'footer.disclaimer': '투자에는 위험이 따릅니다. 과거 수익률이 미래 수익을 보장하지 않습니다.'
    },
    en: {
        'nav.about': 'About',
        'nav.trading': 'Trading',
        'nav.platforms': 'Platforms',
        'nav.contact': 'Contact',
        'hero.badge': 'Copy Trading',
        'hero.title': 'Quant Trader<br><span class="gradient-text">boyindaseoul</span>',
        'hero.subtitle': 'Systematic investing through data-driven quant strategies and ICT trading',
        'hero.cta': 'Start Copy Trading',
        'about.label': 'ABOUT',
        'about.title': 'About Me',
        'about.edu': 'Hanyang University - Business & Information Systems',
        'about.desc': 'Specializing in quantitative trading and ICT trading. Combining mathematical models with market structure analysis for consistent trading systems.',
        'about.stat1': 'Exchanges',
        'about.stat2': 'Monitoring',
        'about.stat3': 'Strategies',
        'about.card1.title': 'Quant Trading',
        'about.card1.desc': 'Algorithm-based systematic trading',
        'about.card2.title': 'ICT Trading',
        'about.card2.desc': 'Smart money concept analysis',
        'trading.label': 'TRADING STYLE',
        'trading.title': 'Trading Style',
        'trading.quant.desc': 'Systematic trading using mathematical models and statistical analysis. Backtested strategies for emotion-free execution.',
        'trading.quant.f1': 'Algorithm entry/exit',
        'trading.quant.f2': 'Multi-timeframe analysis',
        'trading.quant.f3': 'Automated risk management',
        'trading.ict.desc': 'Price action analysis using Inner Circle Trader methodology. Tracking smart money flows through market structure and liquidity.',
        'trading.ict.f1': 'Market structure shifts',
        'trading.ict.f2': 'Order block analysis',
        'trading.ict.f3': 'Liquidity sweep identification',
        'platforms.label': 'PLATFORMS',
        'platforms.title': 'Copy Trading Platforms',
        'platforms.desc': 'Search for boyindaseoul on these exchanges',
        'platforms.binance': 'World\'s Largest Exchange',
        'platforms.bingx': 'Copy Trading Platform',
        'platforms.okx': 'Global Exchange',
        'platforms.active': 'Active',
        'contact.label': 'CONTACT',
        'contact.title': 'Contact',
        'footer.disclaimer': 'Trading involves risk. Past performance does not guarantee future results.'
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang === 'ko' ? 'EN' : '한국어';
    }
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Set language
    setLanguage(currentLang);
    
    // Language toggle
    document.getElementById('langToggle')?.addEventListener('click', () => {
        setLanguage(currentLang === 'ko' ? 'en' : 'ko');
    });
    
    // Mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenu?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
