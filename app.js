// Kingdom Story Interactive Web Application Logic

import {
  coreValues,
  roadmapYears,
  departments,
  curriculumLessons,
  stores,
  pricePackages,
  faqList
} from './kingdomData.js';

// Application State
let activeDepartmentFilter = 'all';
let activeYearFilter = 0;
let searchQuery = '';
let activeDeptTab = 'preschool';
let isAudioPlaying = true;

// DOM Loaded Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCoreValues();
  renderRoadmap();
  renderDepartmentTabs();
  renderDepartmentDetail(activeDeptTab);
  renderLessons();
  renderStores();
  renderPackages();
  renderFAQ();
  setupScrollHandlers();
  setupMobileMenu();
});

// Toast Notification Helper
window.showToast = function (message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'glass-card border border-gold-500/40 p-4 rounded-2xl shadow-2xl text-slate-100 text-sm flex items-center gap-3 pointer-events-auto transition-all transform translate-y-4 opacity-0 max-w-sm';

  let icon = '<i class="fa-solid fa-circle-info text-gold-400 text-lg"></i>';
  if (type === 'success') icon = '<i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>';
  if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation text-amber-400 text-lg"></i>';

  toast.innerHTML = `
    ${icon}
    <span class="flex-1 font-medium">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white p-1">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

// 1. Render Core Values
function renderCoreValues() {
  const container = document.getElementById('core-values-container');
  if (!container) return;

  container.innerHTML = coreValues.map(item => `
    <div class="glass-card p-8 rounded-3xl border border-slate-700/60 hover:border-gold-500/40 transition-all group flex flex-col justify-between">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform">
            <div class="w-full h-full bg-navy-900 rounded-[14px] flex items-center justify-center text-gold-400 text-2xl">
              <i class="fa-solid fa-${item.icon}"></i>
            </div>
          </div>
          <span class="text-xs font-bold text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">${item.badge}</span>
        </div>

        <h3 class="text-xl font-bold text-slate-100 group-hover:text-gold-400 transition-colors">${item.title}</h3>
        <p class="text-xs font-bold text-slate-400 tracking-wider">${item.subtitle}</p>
        <p class="text-slate-300 text-sm leading-relaxed">${item.description}</p>
      </div>

      <div class="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span class="font-medium">고신총회 6차 교육과정</span>
        <i class="fa-solid fa-arrow-right-long text-gold-400 group-hover:translate-x-1 transition-transform"></i>
      </div>
    </div>
  `).join('');
}

// 2. Render 3-Year Roadmap
function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  if (!container) return;

  container.innerHTML = roadmapYears.map(year => `
    <div class="glass-card p-6 rounded-2xl border border-slate-700 space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-3 h-3 rounded-full ${year.color}"></div>
        <h4 class="font-bold text-slate-100">${year.year}</h4>
      </div>
      <div>
        <p class="text-sm font-bold text-gold-400">${year.theme}</p>
        <p class="text-xs text-slate-400 mt-1"><i class="fa-solid fa-book-bookmark text-slate-500 mr-1"></i>${year.books}</p>
      </div>
      <div class="space-y-2 pt-2 border-t border-slate-800">
        ${year.semesters.map(sem => `
          <div class="p-2.5 rounded-xl bg-navy-900/80 border border-slate-800 text-xs flex items-center justify-between">
            <span class="font-bold text-slate-300">${sem.name}</span>
            <span class="text-slate-400 text-right font-medium">${sem.title}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// 3. Render Department Tabs & Detail
function renderDepartmentTabs() {
  const container = document.getElementById('department-tab-nav');
  if (!container) return;

  container.innerHTML = departments.map(dept => `
    <button onclick="selectDepartmentTab('${dept.id}')" id="dept-showcase-${dept.id}" 
      class="dept-showcase-btn ${dept.id === activeDeptTab ? 'tab-active' : 'glass-card text-slate-300 hover:bg-slate-800'} px-5 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${dept.themeColor}"></span>
      <span>${dept.name}</span>
    </button>
  `).join('');
}

window.selectDepartmentTab = function (deptId) {
  activeDeptTab = deptId;
  renderDepartmentTabs();
  renderDepartmentDetail(deptId);
};

function renderDepartmentDetail(deptId) {
  const container = document.getElementById('department-detail-card');
  if (!container) return;

  const dept = departments.find(d => d.id === deptId) || departments[0];

  container.innerHTML = `
    <div class="grid lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">${dept.target}</span>
          <span class="text-xs font-semibold text-slate-400">부서 특징 안내</span>
        </div>

        <h3 class="text-3xl font-extrabold text-slate-100">${dept.name}</h3>
        <p class="text-lg font-bold text-gradient-gold">"${dept.slogan}"</p>
        <p class="text-slate-300 text-sm leading-relaxed">${dept.description}</p>

        <div class="space-y-3 pt-2">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-wide">핵심 교육 특징 & 스마트 자료</p>
          <div class="grid sm:grid-cols-2 gap-3">
            ${dept.features.map(feat => `
              <div class="flex items-center gap-2.5 p-3 rounded-xl glass-card-light text-xs text-slate-200">
                <i class="fa-solid fa-check text-gold-400"></i>
                <span>${feat}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 flex flex-wrap items-center gap-4">
          <button onclick="openSampleModal()" class="btn-gold px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
            <i class="fa-solid fa-download"></i>
            <span>${dept.name} 샘플 신청</span>
          </button>
          <button onclick="openChantModal()" class="btn-blue px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
            <i class="fa-solid fa-music"></i>
            <span>부서 챈트 미리듣기</span>
          </button>
        </div>
      </div>

      <div class="lg:col-span-5">
        <div class="glass-card p-6 rounded-2xl border border-slate-700/80 bg-navy-900/60 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <span class="text-sm font-bold text-slate-200">기본 제공 교재 패키지</span>
            <i class="fa-solid fa-box text-gold-400"></i>
          </div>
          <ul class="space-y-2.5 text-xs text-slate-300">
            ${dept.items.map(item => `
              <li class="flex items-center justify-between p-2 rounded-lg bg-slate-800/50">
                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-book-open text-sky-400 text-[10px]"></i>
                  ${item}
                </span>
                <span class="text-[10px] text-slate-400 font-mono">포함</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// 4. Render Curriculum Lessons & Filter
window.filterDepartment = function (dept) {
  activeDepartmentFilter = dept;
  updateDeptTabStyles();
  renderLessons();
};

window.filterYear = function (year) {
  activeYearFilter = parseInt(year);
  updateYearTabStyles();
  renderLessons();
};

window.handleCurriculumSearch = function () {
  const input = document.getElementById('curriculum-search');
  if (input) {
    searchQuery = input.value.trim().toLowerCase();
    renderLessons();
  }
};

function updateDeptTabStyles() {
  document.querySelectorAll('.dept-tab-btn').forEach(btn => {
    btn.classList.remove('tab-active');
    btn.classList.add('text-slate-400');
  });

  const activeBtn = document.getElementById(`dept-btn-${activeDepartmentFilter}`);
  if (activeBtn) {
    activeBtn.classList.add('tab-active');
    activeBtn.classList.remove('text-slate-400');
  }
}

function updateYearTabStyles() {
  document.querySelectorAll('.year-tab-btn').forEach(btn => {
    btn.className = 'year-tab-btn text-xs font-medium px-4 py-1.5 rounded-full glass-card text-slate-300 hover:bg-slate-800';
  });

  const activeBtn = document.getElementById(`year-btn-${activeYearFilter}`);
  if (activeBtn) {
    activeBtn.className = 'year-tab-btn text-xs font-bold px-4 py-1.5 rounded-full bg-gold-500 text-navy-900 shadow';
  }
}

function renderLessons() {
  const container = document.getElementById('lessons-grid-container');
  if (!container) return;

  const filtered = curriculumLessons.filter(lesson => {
    const matchDept = activeDepartmentFilter === 'all' || lesson.department === activeDepartmentFilter;
    const matchYear = activeYearFilter === 0 || lesson.year === activeYearFilter;
    const matchQuery = !searchQuery ||
      lesson.title.toLowerCase().includes(searchQuery) ||
      lesson.passage.toLowerCase().includes(searchQuery) ||
      lesson.summary.toLowerCase().includes(searchQuery) ||
      lesson.lessonNum.toLowerCase().includes(searchQuery);

    return matchDept && matchYear && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 glass-card rounded-3xl border border-slate-800 space-y-4">
        <i class="fa-solid fa-folder-open text-4xl text-slate-600"></i>
        <p class="text-slate-400 text-base">검색된 과별 커리큘럼 조건이 없습니다.</p>
        <button onclick="resetCurriculumFilters()" class="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold">필터 초기화</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(lesson => `
    <div class="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-gold-500/40 transition-all flex flex-col justify-between group">
      <div class="space-y-4">
        
        <div class="flex items-center justify-between">
          <span class="text-xs font-extrabold text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">${lesson.lessonNum}</span>
          <span class="text-xs font-semibold text-slate-400">${lesson.year}년차 ${lesson.semester}학기</span>
        </div>

        <div>
          <h4 class="text-lg font-bold text-slate-100 group-hover:text-gold-400 transition-colors">${lesson.title}</h4>
          <p class="text-xs font-medium text-sky-400 mt-1 flex items-center gap-1.5">
            <i class="fa-solid fa-book"></i>
            ${lesson.passage}
          </p>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed line-clamp-2">${lesson.summary}</p>

        <!-- Media tags -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${lesson.media.map(m => getMediaBadgeHTML(m)).join('')}
        </div>

      </div>

      <div class="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between">
        <button onclick="openLessonDetailModal(${lesson.id})" class="text-xs font-bold text-slate-300 hover:text-gold-400 flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-eye"></i>
          <span>상세보기</span>
        </button>

        <button onclick="openChantModal()" class="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-circle-play"></i>
          <span>챈트 시연</span>
        </button>
      </div>
    </div>
  `).join('');
}

function getMediaBadgeHTML(mediaType) {
  const map = {
    'PPT': '<span class="tag-ppt text-[10px] font-bold px-2 py-0.5 rounded">PPT</span>',
    'Chant': '<span class="tag-chant text-[10px] font-bold px-2 py-0.5 rounded">챈트</span>',
    'Video': '<span class="tag-video text-[10px] font-bold px-2 py-0.5 rounded">영상</span>',
    'Worksheet': '<span class="tag-worksheet text-[10px] font-bold px-2 py-0.5 rounded">워크북</span>',
    'Sticker': '<span class="tag-chant text-[10px] font-bold px-2 py-0.5 rounded">스티커</span>',
    '3D Map': '<span class="tag-video text-[10px] font-bold px-2 py-0.5 rounded">3D 지도</span>',
    'Discussion': '<span class="tag-worksheet text-[10px] font-bold px-2 py-0.5 rounded">토론</span>'
  };
  return map[mediaType] || `<span class="bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded">${mediaType}</span>`;
}

window.resetCurriculumFilters = function () {
  activeDepartmentFilter = 'all';
  activeYearFilter = 0;
  searchQuery = '';
  const input = document.getElementById('curriculum-search');
  if (input) input.value = '';
  updateDeptTabStyles();
  updateYearTabStyles();
  renderLessons();
};

// 5. Render Stores & Purchase Info
function renderStores() {
  const container = document.getElementById('stores-container');
  if (!container) return;

  container.innerHTML = stores.map(store => `
    <div class="glass-card p-8 rounded-3xl border border-slate-700 flex flex-col justify-between relative overflow-hidden group">
      ${store.recommended ? '<div class="absolute top-0 right-0 bg-gold-500 text-navy-900 text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl shadow">BEST CHOICE</div>' : ''}
      
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-store"></i>
          </div>
          <div>
            <h4 class="text-lg font-bold text-slate-100">${store.name}</h4>
            <span class="text-xs text-gold-400 font-semibold">${store.type}</span>
          </div>
        </div>

        <p class="text-slate-300 text-xs leading-relaxed">${store.description}</p>

        <div class="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
          <p class="flex items-center gap-2"><i class="fa-solid fa-phone text-gold-400"></i> ${store.phone}</p>
          <p class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-sky-400"></i> ${store.address}</p>
        </div>
      </div>

      <div class="pt-6 mt-6 border-t border-slate-800">
        <a href="${store.website}" target="_blank" class="btn-gold w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
          <span>구매 사이트 방문하기</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// 6. Render Price Packages
function renderPackages() {
  const container = document.getElementById('packages-container');
  if (!container) return;

  container.innerHTML = pricePackages.map(pkg => `
    <div class="glass-card p-6 rounded-2xl border ${pkg.popular ? 'border-gold-500 shadow-xl' : 'border-slate-800'} space-y-4 flex flex-col justify-between">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-400">${pkg.department}</span>
          ${pkg.popular ? '<span class="text-[10px] font-extrabold bg-gold-500 text-navy-900 px-2.5 py-0.5 rounded-full">인기 구성</span>' : ''}
        </div>

        <h4 class="text-lg font-bold text-slate-100">${pkg.title}</h4>

        <div class="flex items-baseline gap-2">
          <span class="text-2xl font-black text-gold-400">${pkg.price}</span>
          <span class="text-xs text-slate-500 line-through">${pkg.originalPrice}</span>
        </div>

        <ul class="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
          ${pkg.components.map(c => `
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-circle-check text-emerald-400 text-[10px]"></i>
              <span>${c}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4">
        <a href="https://edumall.kosined.org" target="_blank" class="btn-blue w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
          <span>주문하기</span>
        </a>
      </div>
    </div>
  `).join('');
}

// 7. Render FAQs
function renderFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = faqList.map((faq, index) => `
    <div class="glass-card rounded-2xl border border-slate-700/80 overflow-hidden">
      <button onclick="toggleFAQ(${index})" class="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-100 text-base hover:text-gold-400 transition-colors">
        <span class="flex items-center gap-3">
          <span class="text-gold-400 font-extrabold">Q.</span>
          ${faq.q}
        </span>
        <i id="faq-icon-${index}" class="fa-solid fa-chevron-down text-slate-400 transition-transform"></i>
      </button>
      <div id="faq-answer-${index}" class="hidden px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 pt-4">
        ${faq.a}
      </div>
    </div>
  `).join('');
}

window.toggleFAQ = function (index) {
  const ans = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (ans && icon) {
    const isHidden = ans.classList.contains('hidden');
    ans.classList.toggle('hidden');
    icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }
};

// Modals Handler Logic
window.openSampleModal = function () {
  toggleModal('sample-modal', true);
};

window.closeSampleModal = function () {
  toggleModal('sample-modal', false);
};

window.handleSampleSubmit = function (event) {
  event.preventDefault();
  closeSampleModal();
  showToast('교재 샘플 신청이 완료되었습니다! 확인 후 2-3일 내로 배송해 드립니다.', 'success');
};

window.openVideoModal = function () {
  toggleModal('video-modal', true);
};

window.closeVideoModal = function () {
  toggleModal('video-modal', false);
};

window.openChantModal = function () {
  toggleModal('chant-modal', true);
};

window.closeChantModal = function () {
  toggleModal('chant-modal', false);
};

window.toggleAudioPlay = function () {
  isAudioPlaying = !isAudioPlaying;
  const btn = document.getElementById('audio-play-btn');
  if (btn) {
    btn.innerHTML = isAudioPlaying ? '<i class="fa-solid fa-pause ml-0.5"></i>' : '<i class="fa-solid fa-play ml-1"></i>';
  }
  showToast(isAudioPlaying ? '챈트 음원이 재생됩니다.' : '음원이 일시정지되었습니다.');
};

window.openLessonDetailModal = function (lessonId) {
  const lesson = curriculumLessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const content = document.getElementById('lesson-detail-content');
  if (content) {
    content.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <span class="text-xs font-bold text-gold-400 px-3 py-1 rounded-full bg-gold-500/10">${lesson.lessonNum} (${lesson.year}년차 ${lesson.semester}학기)</span>
          <span class="text-xs text-slate-400">교사용 지침서 연동</span>
        </div>

        <h3 class="text-2xl font-bold text-slate-100">${lesson.title}</h3>
        
        <div class="p-4 rounded-xl bg-navy-900 border border-slate-800 space-y-2">
          <p class="text-xs font-bold text-sky-400"><i class="fa-solid fa-book-open mr-2"></i>성경 본문: ${lesson.passage}</p>
          <p class="text-xs font-semibold text-gold-300"><i class="fa-solid fa-quote-left mr-2"></i>암송 요절: ${lesson.keyVerse}</p>
        </div>

        <div class="space-y-2">
          <p class="text-xs font-bold text-slate-400 uppercase">과별 학습 목표 & 구원사 메시지</p>
          <p class="text-slate-300 text-sm leading-relaxed">${lesson.summary}</p>
        </div>

        <div class="pt-4 flex flex-wrap items-center gap-3">
          <button onclick="openChantModal(); closeLessonDetailModal();" class="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
            <i class="fa-solid fa-music"></i>
            <span>챈트 듣기</span>
          </button>
          <button onclick="openSampleModal(); closeLessonDetailModal();" class="btn-blue px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
            <i class="fa-solid fa-download"></i>
            <span>샘플 PDF 다운로드</span>
          </button>
        </div>
      </div>
    `;
  }
  toggleModal('lesson-detail-modal', true);
};

window.closeLessonDetailModal = function () {
  toggleModal('lesson-detail-modal', false);
};

window.openSearchModal = function () {
  const elem = document.getElementById('curriculum');
  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  const input = document.getElementById('curriculum-search');
  if (input) input.focus();
};

function toggleModal(modalId, show) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const content = modal.querySelector('.modal-content');

  if (show) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    if (content) {
      content.classList.remove('scale-95');
      content.classList.add('scale-100');
    }
  } else {
    modal.classList.add('opacity-0', 'pointer-events-none');
    if (content) {
      content.classList.remove('scale-100');
      content.classList.add('scale-95');
    }
  }
}

// Mobile Menu Controls
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

window.closeMobileMenu = function () {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.add('hidden');
};

// Scroll Handler & Back to Top
function setupScrollHandlers() {
  const header = document.getElementById('main-header');
  const backBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header?.classList.add('py-1', 'shadow-2xl');
      backBtn?.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      header?.classList.remove('py-1', 'shadow-2xl');
      backBtn?.classList.add('opacity-0', 'pointer-events-none');
    }
  });
}

window.scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
