// Kingdom Story Self-Contained Web Application Logic (100% Reliable Clicks & Modals)

// 1. Kingdom Story Curriculum Dataset
const coreValues = [
  {
    id: "unified",
    title: "가정과 교회의 통합 교육",
    subtitle: "One Text for Whole Family",
    icon: "users",
    description: "영유아부부터 장년부까지 전 교인이 매주 동일한 말씀 본문과 주제를 나눕니다. 주일 예배 후 온 가족이 가정에서 같은 말씀으로 신앙 대화를 이어갈 수 있습니다.",
    badge: "세대 통합",
    gradient: "from-amber-400 to-amber-600"
  },
  {
    id: "biblical",
    title: "성경 중심 3년 구원사",
    subtitle: "3-Year Salvation History Journey",
    icon: "book-open",
    description: "창세기부터 요한계시록까지 66권 전체를 하나님의 나라(Kingdom of God)와 예수 그리스도의 구원 역사 관점으로 체계적으로 탐구하는 3년(6학기) 성경 통독 체계입니다.",
    badge: "하나님 나라 관점",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "connected",
    title: "스마트 미디어 & 챈트 연계",
    subtitle: "Smart Media & Interactive Learning",
    icon: "play-circle",
    description: "각 과마다 고품질 챈트(Chant) 음원, 말씀 애니메이션, 시각자료 PPT, 멀티미디어 교서 지침서, 그리고 주간 가정통신문 스마트 앱이 다채롭게 제공됩니다.",
    badge: "스마트 교육",
    gradient: "from-emerald-500 to-teal-600"
  }
];

const roadmapYears = [
  {
    year: "1년차 (Year 1)",
    theme: "하나님 나라의 시작과 구원",
    books: "창세기 ~ 사무엘상·하",
    semesters: [
      { name: "1학기", title: "창조와 약속의 하나님 나라", scope: "창세기 ~ 출애굽기" },
      { name: "2학기", title: "약속의 땅과 하나님의 왕국", scope: "레위기 ~ 사무엘상하" }
    ],
    color: "bg-amber-500"
  },
  {
    year: "2년차 (Year 2)",
    theme: "하나님 나라의 다스림과 회복",
    books: "열왕기상·하 ~ 선지서",
    semesters: [
      { name: "1학기", title: "이스라엘 왕국과 선지자들의 경고", scope: "열왕기상하 ~ 시가서" },
      { name: "2학기", title: "포로기와 회복의 하나님 나라", scope: "이사야 ~ 말라기" }
    ],
    color: "bg-blue-600"
  },
  {
    year: "3년차 (Year 3)",
    theme: "하나님 나라의 완성과 교회",
    books: "마태복음 ~ 요한계시록",
    semesters: [
      { name: "1학기", title: "왕으로 오신 예수 그리스도", scope: "사복음서 ~ 사도행전" },
      { name: "2학기", title: "교회의 사명과 영원한 하나님 나라", scope: "서신서 ~ 요한계시록" }
    ],
    color: "bg-indigo-600"
  }
];

const departments = [
  {
    id: "preschool",
    name: "영유아유치부",
    target: "4세 ~ 7세 (미취학)",
    slogan: "놀이와 찬양으로 만나는 하나님 나라",
    description: "감각적인 스티커 공과, 신나는 율동 챈트, 입체 팝업북과 친근한 캐릭터를 통해 하나님이 세상을 만드시고 나를 사랑하신다는 진리를 오감으로 배웁니다.",
    color: "from-amber-400 to-amber-600",
    themeColor: "#F59E0B",
    bgPattern: "bg-amber-500/10",
    features: [
      "오감 체험 스티커 & 만들기 공과",
      "중독성 있는 애니메이션 챈트 영상",
      "부모와 함께하는 매일 말씀 스티커북",
      "선생님을 위한 상세 공과 시연 영상"
    ],
    items: ["학생용 복합 교재", "스티커 세트", "교사 지침서", "챈트 CD/USB", "가정통신문 파우치"]
  },
  {
    id: "elem1",
    name: "초등1부 (저학년)",
    target: "초등학교 1학년 ~ 3학년",
    slogan: "성경 이야기 속으로 들어가는 재미있는 탐험",
    description: "그림 지도, 입체 도면, 보드게임 형태의 공과 교재를 통해 성경의 역사를 입체적으로 익히고 구원사의 핵심 내용을 기초부터 단단하게 다집니다.",
    color: "from-sky-500 to-blue-600",
    themeColor: "#0284C7",
    bgPattern: "bg-sky-500/10",
    features: [
      "입체 지도 & 성경 연표 탐험북",
      "과별 성경 퀴즈 및 워크북 카드",
      "교사용 스토리텔링 PPT 및 시각자료",
      "가정 예배용 킹덤 메모리 카드"
    ],
    items: ["학생용 스토리 워크북", "만들기 활동 키트", "교사용 지침서", "멀티미디어 USB", "스마트 가정통신"]
  },
  {
    id: "elem2",
    name: "초등2부 (고학년)",
    target: "초등학교 4학년 ~ 6학년",
    slogan: "성경 66권의 구원사를 스스로 깊이 있게 탐구",
    description: "하나님 나라 관점의 질문과 성경 탐구 작업을 통해 교리를 이해하고, 세상 속에서 그리스도인답게 살아가는 실천적 성품과 말씀의 삶을 훈련합니다.",
    color: "from-indigo-600 to-purple-700",
    themeColor: "#4F46E5",
    bgPattern: "bg-indigo-500/10",
    features: [
      "스스로 질문하고 답하는 성경 탐구 노트",
      "삶의 적용 중심 소그룹 나누기 가이드",
      "핵심 요절 마인드맵 & 성경 인물 분석",
      "온라인 소통용 스마트 킹덤 앱 연동"
    ],
    items: ["학생용 교재 (상/하권)", "교사 리더십 지침서", "강의용 PPT 세트", "주간 묵상 노트"]
  },
  {
    id: "youth",
    name: "청소년부 (중고등부)",
    target: "중학교 1학년 ~ 고등학교 3학년",
    slogan: "세상의 가치관을 이기는 하나님 나라의 청소년",
    description: "창조-전락-구원-회복의 안경으로 세상을 바라보는 기독교 세계관 교육과 토론형 공과로 청소년들의 진로, 관계, 신앙 고민에 확실한 성경적 답을 제공합니다.",
    color: "from-emerald-600 to-teal-800",
    themeColor: "#059669",
    bgPattern: "bg-emerald-500/10",
    features: [
      "토론 및 소그룹 질문 카드 (디스커션)",
      "기독교 세계관 및 이슈 성경적 해답",
      "미디어 설교 프레젠테이션 템플릿",
      "청소년 맞춤 큐티(QT) 가이드"
    ],
    items: ["학생용 바이블 스터디 가이드", "교사용 디스커션 리더북", "디지털 자료집"]
  },
  {
    id: "adult",
    name: "대학·장년부",
    target: "대학생, 청년, 장년, 구목/순장",
    slogan: "온 세대가 함께 통독하고 나눈 깊은 묵상",
    description: "주일학교 자녀들과 동일한 본문으로 주일 설교와 구역/순모임을 진행하여, 교목과 가정에서 말씀의 통일성을 형성하고 전 교인이 하나님의 나라를 경험합니다.",
    color: "from-slate-700 to-slate-900",
    themeColor: "#334155",
    bgPattern: "bg-slate-500/10",
    features: [
      "구역/셀/순모임용 성경 교재",
      "자녀와 나눌 수 있는 가정 예배 가이드",
      "구원사 중심 성경 맥잡기 해설서",
      "설교자를 위한 성경 본문 분석 노트"
    ],
    items: ["장년용 성경 연구 교재", "구역장/셀리더 지침서", "가정예배서"]
  }
];

const curriculumLessons = [
  {
    id: 1,
    year: 1,
    semester: 1,
    department: "elem1",
    lessonNum: "01과",
    title: "하나님이 세상을 창조하셨어요",
    passage: "창세기 1:1-31",
    keyVerse: "태초에 하나님이 천지를 창조하시니라 (창 1:1)",
    summary: "온 우주 만물과 사람을 사랑으로 창조하신 하나님의 위대하심과 아름다운 세상을 다스리시는 하나님 나라의 시작을 배웁니다.",
    media: ["PPT", "Chant", "Video", "Worksheet"]
  },
  {
    id: 2,
    year: 1,
    semester: 1,
    department: "elem1",
    lessonNum: "02과",
    title: "하나님의 약속을 받은 아브라함",
    passage: "창세기 12:1-9",
    keyVerse: "내가 너로 큰 민족을 이루고 네게 복을 주어 네 이름을 창대하게 하리니 (창 12:2)",
    summary: "순종함으로 고향을 떠나 하나님 나라의 민족을 이루시는 약속을 믿고 걸어간 아브라함의 믿음을 탐구합니다.",
    media: ["PPT", "Chant", "Worksheet"]
  },
  {
    id: 3,
    year: 1,
    semester: 1,
    department: "elem1",
    lessonNum: "03과",
    title: "꿈을 이루시는 신실하신 하나님",
    passage: "창세기 37:1-11, 45:1-8",
    keyVerse: "하나님이 큰 구원으로 당신들의 생명을 구하고 (창 45:7)",
    summary: "고난 속에서도 요셉을 통해 이스라엘 민족을 구원하시고 하나님의 거대한 구원 계획을 이뤄가시는 손길을 배웁니다.",
    media: ["PPT", "Chant", "Video", "Worksheet"]
  },
  {
    id: 4,
    year: 1,
    semester: 1,
    department: "elem1",
    lessonNum: "04과",
    title: "출애굽과 홍해의 기적",
    passage: "출애굽기 14:15-31",
    keyVerse: "여호와께서 너희를 위하여 싸우시리니 너희는 가만히 있을지니라 (출 14:14)",
    summary: "모세를 통해 백성들을 애굽의 종 됨에서 구원하시고 자유를 주시는 구원자 하나님의 강력한 능력을 배웁니다.",
    media: ["PPT", "Chant", "Video", "Worksheet"]
  },
  {
    id: 5,
    year: 1,
    semester: 1,
    department: "preschool",
    lessonNum: "01과",
    title: "예쁜 세상을 짠! 만드셨어요",
    passage: "창세기 1:1",
    keyVerse: "하나님이 만드셨어요 (창 1:1)",
    summary: "해, 달, 별, 꽃과 동물, 그리고 나를 예쁘게 만드신 만물의 왕이신 하나님께 감사 찬양을 드려요.",
    media: ["Chant", "Video", "Sticker"]
  },
  {
    id: 6,
    year: 1,
    semester: 1,
    department: "preschool",
    lessonNum: "02과",
    title: "하나님 말씀에 쫑끗 순종해요",
    passage: "창세기 12:1-4",
    keyVerse: "아브람이 여호와의 말씀을 따라갔고 (창 12:4)",
    summary: "하나님께서 가라고 하신 땅으로 말씀 따라 씩씩하게 걸어간 아브라함 할아버지 이야기를 들어요.",
    media: ["Chant", "Video", "Worksheet"]
  },
  {
    id: 7,
    year: 1,
    semester: 2,
    department: "elem2",
    lessonNum: "25과",
    title: "성막과 하나님의 영광",
    passage: "출애굽기 40:17-38",
    keyVerse: "여호와의 영광이 성막에 충만함이었더라 (출 40:34)",
    summary: "이스라엘 백성 한가운데 거하시며 다스리시는 하나님 임재의 상징인 성막의 구조와 의미를 파헤칩니다.",
    media: ["PPT", "3D Map", "Worksheet"]
  },
  {
    id: 8,
    year: 2,
    semester: 1,
    department: "youth",
    lessonNum: "01과",
    title: "솔로몬의 성전과 기도의 삶",
    passage: "열왕기상 8:22-53",
    keyVerse: "여호와여 주의 종의 기도와 간구를 돌아보시며 (왕상 8:28)",
    summary: "외형적인 성전 건립을 넘어 온 마음을 쏟아 하나님과의 친밀한 언약 관계를 세우는 청소년의 영성을 다룹니다.",
    media: ["PPT", "Discussion", "Video"]
  },
  {
    id: 9,
    year: 3,
    semester: 1,
    department: "elem1",
    lessonNum: "01과",
    title: "왕이신 예수님이 오셨어요",
    passage: "마태복음 1:18-25",
    keyVerse: "그 이름을 예수라 하라 이는 그가 자기 백성을 그들의 죄에서 구원할 자이심이라 (마 1:21)",
    summary: "약속대로 하나님 나라의 참된 왕으로 이 땅에 아기 예수님으로 임하신 성육신의 은혜를 찬양합니다.",
    media: ["PPT", "Chant", "Video", "Worksheet"]
  },
  {
    id: 10,
    year: 3,
    semester: 2,
    department: "elem2",
    lessonNum: "48과",
    title: "새 하늘과 새 땅, 영원한 킹덤",
    passage: "요한계시록 21:1-7",
    keyVerse: "내가 만물을 새롭게 하노라 (계 21:5)",
    summary: "눈물과 슬픔이 없고 하나님의 영광으로 가득 찬 완벽한 하나님 나라의 승리와 소망을 선포합니다.",
    media: ["PPT", "Chant", "Video", "Worksheet"]
  }
];

const stores = [
  {
    name: "고신총회몰 (공식 쇼핑몰)",
    type: "공식 지정몰",
    description: "대한예수교장로회 총회교육원 직영 쇼핑몰로, 킹덤스토리 전체 공과 및 최신 교사 지침서, 세트 할인을 가장 빠르게 만날 수 있습니다.",
    phone: "02-592-0981",
    address: "서울특별시 서초구 효령로 324 고신총회회관",
    website: "https://edumall.kosined.org",
    badge: "공식 최저가",
    recommended: true
  },
  {
    name: "복있는사람들 출판국",
    type: "총회 출판국",
    description: "고신 교단 공식 출판 기구로 단체 구매, 교회 대량 주문 및 교재 수량 맞춤 상담 서비스를 제공합니다.",
    phone: "02-592-0982",
    address: "전국 교단 출판 지점 배송 지원",
    website: "http://www.kosinbook.org",
    badge: "교회 대량 주문",
    recommended: false
  },
  {
    name: "전국 기독교 서점",
    type: "오프라인 지정 서점",
    description: "서울, 부산, 대구, 광주, 대전 등 전국 주요 도시의 기독교 서점에서 킹덤스토리 실물 교재를 직접 확인하고 구매하실 수 있습니다.",
    phone: "지역별 서점 문의",
    address: "전국 기독교 서점 연합",
    website: "https://www.kosined.org",
    badge: "현장 구매",
    recommended: false
  }
];

const pricePackages = [
  {
    title: "영유아유치부 1년 세트",
    department: "영유아유치부",
    price: "45,000원",
    originalPrice: "52,000원",
    components: [
      "학생용 복합 교재 2권 (1, 2학기)",
      "빅 스티커북 & 팝업 만들기 세트",
      "교사용 지도서 (PPT & 음원 QR 포함)",
      "가정통신 스티커 파우치 1개"
    ],
    popular: false
  },
  {
    title: "초등부 (1부/2부) 완전 패키지",
    department: "초등 1~6학년",
    price: "48,000원",
    originalPrice: "56,000원",
    components: [
      "학생용 스토리 워크북 2권 (1, 2학기)",
      "입체 지도 & 보드게임 교구키트",
      "교사 리더십 지침서 1권",
      "멀티미디어 USB (설교PPT, 챈트, 영상)"
    ],
    popular: true
  },
  {
    title: "청소년부 & 리더 세트",
    department: "중고등부",
    price: "38,000원",
    originalPrice: "44,000원",
    components: [
      "학생용 바이블 스터디북 2권",
      "교사용 토론 리더 가이드",
      "디지털 고화질 미디어 템플릿 다운로드권"
    ],
    popular: false
  }
];

const faqList = [
  {
    q: "킹덤 스토리 커리큘럼의 교체 주기는 어떻게 되나요?",
    a: "킹덤 스토리는 3년(6학기) 주기 순환 교육과정입니다. 3년 동안 성경 66권을 통독하며, 3년이 지나면 새로운 연차별 업데이트 자료와 함께 다시 1년차로 통합 순환됩니다."
  },
  {
    q: "영유아부와 초등부의 본문이 정말 동일한가요?",
    a: "네! 킹덤 스토리는 온 세대가 같은 본문으로 은혜를 나누는 '통합 본문 시스템'을 채택하고 있습니다. 주일에 아이들과 부모님이 같은 성경 이야기를 배우기 때문에 가정예배로 바로 연결됩니다."
  },
  {
    q: "교사용 PPT나 챈트 음원은 어디서 다운로드받나요?",
    a: "교재 구매 시 포함된 QR 코드 또는 고신총회교육원 자료실(kosined.org) 회원가입 후 교사 인증을 거치면 고화질 PPT, 챈트 MP3, 설교 애니메이션을 자유롭게 다운로드하실 수 있습니다."
  },
  {
    q: "무료 교재 샘플이나 시연 영상을 받아볼 수 있나요?",
    a: "홈페이지 상단의 '무료 샘플 신청' 버튼을 통해 교회명과 주소를 남겨주시면, 최신 학기 샘플 과 교재 1권과 챈트 DVD/자료집을 무료로 택배 발송해 드립니다."
  }
];

// Application State
let activeDepartmentFilter = 'all';
let activeYearFilter = 0;
let searchQuery = '';
let activeDeptTab = 'preschool';
let isAudioPlaying = true;

// Ensure Global Scope Function Binding Immediately
window.showToast = function (message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-white border border-amber-300 p-4 rounded-2xl shadow-2xl text-slate-900 text-sm flex items-center gap-3 pointer-events-auto transition-all transform translate-y-4 opacity-0 max-w-sm z-50';

  let icon = '<i class="fa-solid fa-circle-info text-amber-500 text-lg"></i>';
  if (type === 'success') icon = '<i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>';
  if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation text-amber-600 text-lg"></i>';

  toast.innerHTML = `
    ${icon}
    <span class="flex-1 font-semibold">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-800 p-1">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

// Modals Handlers
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
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <span class="text-xs font-bold text-amber-800 px-3 py-1 rounded-full bg-amber-100 border border-amber-200">${lesson.lessonNum} (${lesson.year}년차 ${lesson.semester}학기)</span>
          <span class="text-xs text-slate-500 font-semibold">교사용 지침서 연동</span>
        </div>

        <h3 class="text-2xl font-bold text-slate-900">${lesson.title}</h3>
        
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <p class="text-xs font-bold text-blue-700"><i class="fa-solid fa-book-open mr-2"></i>성경 본문: ${lesson.passage}</p>
          <p class="text-xs font-bold text-amber-700"><i class="fa-solid fa-quote-left mr-2"></i>암송 요절: ${lesson.keyVerse}</p>
        </div>

        <div class="space-y-2">
          <p class="text-xs font-bold text-slate-500 uppercase">과별 학습 목표 & 구원사 메시지</p>
          <p class="text-slate-700 text-sm leading-relaxed font-medium">${lesson.summary}</p>
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

window.selectDepartmentTab = function (deptId) {
  activeDeptTab = deptId;
  renderDepartmentTabs();
  renderDepartmentDetail(deptId);
};

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

window.toggleFAQ = function (index) {
  const ans = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (ans && icon) {
    const isHidden = ans.classList.contains('hidden');
    ans.classList.toggle('hidden');
    icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }
};

window.closeMobileMenu = function () {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.add('hidden');
};

window.scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

// Render Core Values
function renderCoreValues() {
  const container = document.getElementById('core-values-container');
  if (!container) return;

  container.innerHTML = coreValues.map(item => `
    <div class="glass-card p-8 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all group flex flex-col justify-between shadow-md hover:shadow-xl">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} p-0.5 shadow-md group-hover:scale-110 transition-transform">
            <div class="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-amber-600 text-2xl">
              <i class="fa-solid fa-${item.icon}"></i>
            </div>
          </div>
          <span class="text-xs font-extrabold text-amber-800 px-3 py-1 rounded-full bg-amber-100 border border-amber-200">${item.badge}</span>
        </div>

        <h3 class="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">${item.title}</h3>
        <p class="text-xs font-extrabold text-amber-700 tracking-wider">${item.subtitle}</p>
        <p class="text-slate-600 text-sm leading-relaxed">${item.description}</p>
      </div>

      <div class="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>고신총회 6차 교육과정</span>
        <i class="fa-solid fa-arrow-right-long text-amber-600 group-hover:translate-x-1 transition-transform"></i>
      </div>
    </div>
  `).join('');
}

// Render 3-Year Roadmap
function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  if (!container) return;

  container.innerHTML = roadmapYears.map(year => `
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
      <div class="flex items-center gap-3">
        <div class="w-3 h-3 rounded-full ${year.color}"></div>
        <h4 class="font-bold text-slate-900">${year.year}</h4>
      </div>
      <div>
        <p class="text-sm font-bold text-amber-700">${year.theme}</p>
        <p class="text-xs text-slate-500 mt-1"><i class="fa-solid fa-book-bookmark text-slate-400 mr-1"></i>${year.books}</p>
      </div>
      <div class="space-y-2 pt-2 border-t border-slate-200">
        ${year.semesters.map(sem => `
          <div class="p-2.5 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between shadow-xs">
            <span class="font-bold text-slate-900">${sem.name}</span>
            <span class="text-slate-600 text-right font-medium">${sem.title}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render Department Tabs & Detail
function renderDepartmentTabs() {
  const container = document.getElementById('department-tab-nav');
  if (!container) return;

  container.innerHTML = departments.map(dept => `
    <button onclick="selectDepartmentTab('${dept.id}')" id="dept-showcase-${dept.id}" 
      class="dept-showcase-btn ${dept.id === activeDeptTab ? 'tab-active' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'} px-5 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-xs">
      <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${dept.themeColor}"></span>
      <span>${dept.name}</span>
    </button>
  `).join('');
}

function renderDepartmentDetail(deptId) {
  const container = document.getElementById('department-detail-card');
  if (!container) return;

  const dept = departments.find(d => d.id === deptId) || departments[0];

  container.innerHTML = `
    <div class="grid lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-xs font-extrabold text-amber-800 px-3 py-1 rounded-full bg-amber-100 border border-amber-200">${dept.target}</span>
          <span class="text-xs font-semibold text-slate-500">부서 특징 안내</span>
        </div>

        <h3 class="text-3xl font-extrabold text-slate-900">${dept.name}</h3>
        <p class="text-lg font-bold text-amber-700">"${dept.slogan}"</p>
        <p class="text-slate-600 text-sm leading-relaxed">${dept.description}</p>

        <div class="space-y-3 pt-2">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">핵심 교육 특징 & 스마트 자료</p>
          <div class="grid sm:grid-cols-2 gap-3">
            ${dept.features.map(feat => `
              <div class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                <i class="fa-solid fa-check text-amber-600 font-black"></i>
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
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
          <div class="flex items-center justify-between border-b border-slate-200 pb-3">
            <span class="text-sm font-bold text-slate-900">기본 제공 교재 패키지</span>
            <i class="fa-solid fa-box text-amber-600"></i>
          </div>
          <ul class="space-y-2.5 text-xs text-slate-700 font-medium">
            ${dept.items.map(item => `
              <li class="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200">
                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-book-open text-blue-600 text-[10px]"></i>
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

function updateDeptTabStyles() {
  document.querySelectorAll('.dept-tab-btn').forEach(btn => {
    btn.classList.remove('tab-active');
    btn.classList.add('text-slate-600');
  });

  const activeBtn = document.getElementById(`dept-btn-${activeDepartmentFilter}`);
  if (activeBtn) {
    activeBtn.classList.add('tab-active');
    activeBtn.classList.remove('text-slate-600');
  }
}

function updateYearTabStyles() {
  document.querySelectorAll('.year-tab-btn').forEach(btn => {
    btn.className = 'year-tab-btn text-xs font-semibold px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200';
  });

  const activeBtn = document.getElementById(`year-btn-${activeYearFilter}`);
  if (activeBtn) {
    activeBtn.className = 'year-tab-btn text-xs font-bold px-4 py-1.5 rounded-full bg-amber-500 text-white shadow';
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
      <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-4 shadow-sm">
        <i class="fa-solid fa-folder-open text-4xl text-slate-400"></i>
        <p class="text-slate-600 text-base font-medium">검색된 과별 커리큘럼 조건이 없습니다.</p>
        <button onclick="resetCurriculumFilters()" class="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold">필터 초기화</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(lesson => `
    <div class="glass-card p-6 rounded-2xl border border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg">
      <div class="space-y-4">
        
        <div class="flex items-center justify-between">
          <span class="text-xs font-black text-amber-700 px-3 py-1 rounded-full bg-amber-100 border border-amber-200">${lesson.lessonNum}</span>
          <span class="text-xs font-semibold text-slate-500">${lesson.year}년차 ${lesson.semester}학기</span>
        </div>

        <div>
          <h4 class="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">${lesson.title}</h4>
          <p class="text-xs font-bold text-blue-700 mt-1 flex items-center gap-1.5">
            <i class="fa-solid fa-book"></i>
            ${lesson.passage}
          </p>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed line-clamp-2 font-medium">${lesson.summary}</p>

        <!-- Media tags -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${lesson.media.map(m => getMediaBadgeHTML(m)).join('')}
        </div>

      </div>

      <div class="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
        <button onclick="openLessonDetailModal(${lesson.id})" class="text-xs font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-eye text-amber-600"></i>
          <span>상세보기</span>
        </button>

        <button onclick="openChantModal()" class="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-circle-play text-amber-500"></i>
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
  return map[mediaType] || `<span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">${mediaType}</span>`;
}

// Render Stores
function renderStores() {
  const container = document.getElementById('stores-container');
  if (!container) return;

  container.innerHTML = stores.map(store => `
    <div class="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col justify-between relative overflow-hidden group shadow-md hover:shadow-xl hover:border-amber-400 transition-all">
      ${store.recommended ? '<div class="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl shadow">BEST CHOICE</div>' : ''}
      
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-store"></i>
          </div>
          <div>
            <h4 class="text-lg font-bold text-slate-900">${store.name}</h4>
            <span class="text-xs text-amber-700 font-bold">${store.type}</span>
          </div>
        </div>

        <p class="text-slate-600 text-xs leading-relaxed font-medium">${store.description}</p>

        <div class="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-500">
          <p class="flex items-center gap-2"><i class="fa-solid fa-phone text-amber-600"></i> ${store.phone}</p>
          <p class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-blue-600"></i> ${store.address}</p>
        </div>
      </div>

      <div class="pt-6 mt-6 border-t border-slate-200">
        <a href="${store.website}" target="_blank" class="btn-gold w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
          <span>구매 사이트 방문하기</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// Render Packages
function renderPackages() {
  const container = document.getElementById('packages-container');
  if (!container) return;

  container.innerHTML = pricePackages.map(pkg => `
    <div class="bg-white p-6 rounded-2xl border ${pkg.popular ? 'border-amber-500 shadow-xl' : 'border-slate-200 shadow-sm'} space-y-4 flex flex-col justify-between">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-500">${pkg.department}</span>
          ${pkg.popular ? '<span class="text-[10px] font-black bg-amber-500 text-white px-2.5 py-0.5 rounded-full">인기 구성</span>' : ''}
        </div>

        <h4 class="text-lg font-bold text-slate-900">${pkg.title}</h4>

        <div class="flex items-baseline gap-2">
          <span class="text-2xl font-black text-amber-600">${pkg.price}</span>
          <span class="text-xs text-slate-400 line-through">${pkg.originalPrice}</span>
        </div>

        <ul class="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
          ${pkg.components.map(c => `
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-circle-check text-emerald-600 text-[10px]"></i>
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

// Render FAQs
function renderFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = faqList.map((faq, index) => `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <button onclick="toggleFAQ(${index})" class="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base hover:text-amber-600 transition-colors">
        <span class="flex items-center gap-3">
          <span class="text-amber-600 font-black">Q.</span>
          ${faq.q}
        </span>
        <i id="faq-icon-${index}" class="fa-solid fa-chevron-down text-slate-400 transition-transform"></i>
      </button>
      <div id="faq-answer-${index}" class="hidden px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 font-medium">
        ${faq.a}
      </div>
    </div>
  `).join('');
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

// Scroll Handler & Back to Top
function setupScrollHandlers() {
  const header = document.getElementById('main-header');
  const backBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header?.classList.add('py-1', 'shadow-md');
      backBtn?.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      header?.classList.remove('py-1', 'shadow-md');
      backBtn?.classList.add('opacity-0', 'pointer-events-none');
    }
  });
}

// Initialize Application
function initApp() {
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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
