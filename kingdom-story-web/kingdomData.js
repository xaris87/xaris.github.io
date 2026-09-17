// 고신 총회교육원 킹덤 스토리 (Kingdom Story) 데이터

export const coreValues = [
  {
    id: "unified",
    title: "가정과 교회의 통합 교육",
    subtitle: "One Text for Whole Family",
    icon: "users",
    description: "영유아부부터 장년부까지 전 교인이 매주 동일한 말씀 본문과 주제를 나눕니다. 주일 예배 후 온 가족이 가정에서 같은 말씀으로 신앙 대화를 이어갈 수 있습니다.",
    badge: "세대 통합",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "biblical",
    title: "성경 중심 3년 구원사",
    subtitle: "3-Year Salvation History Journey",
    icon: "book-open",
    description: "창세기부터 요한계시록까지 66권 전체를 하나님의 나라(Kingdom of God)와 예수 그리스도의 구원 역사 관점으로 체계적으로 탐구하는 3년(6학기) 성경 통독 체계입니다.",
    badge: "하나님 나라 관점",
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    id: "connected",
    title: "스마트 미디어 & 챈트 연계",
    subtitle: "Smart Media & Interactive Learning",
    icon: "play-circle",
    description: "각 과마다 고품질 챈트(Chant) 음원, 말씀 애니메이션, 시각자료 PPT, 멀티미디어 교서 지침서, 그리고 주간 가정통신문 스마트 앱이 다채롭게 제공됩니다.",
    badge: "스마트 교육",
    gradient: "from-emerald-500 to-teal-700"
  }
];

export const roadmapYears = [
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

export const departments = [
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

export const curriculumLessons = [
  // 1년차 1학기
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
    media: ["PPT", "Chant", "Video", "Worksheet"],
    samplePdf: "sample_lesson_01.pdf"
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
    media: ["PPT", "Chant", "Worksheet"],
    samplePdf: "sample_lesson_02.pdf"
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
    media: ["PPT", "Chant", "Video", "Worksheet"],
    samplePdf: "sample_lesson_03.pdf"
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
    media: ["PPT", "Chant", "Video", "Worksheet"],
    samplePdf: "sample_lesson_04.pdf"
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
    media: ["Chant", "Video", "Sticker"],
    samplePdf: "sample_preschool_01.pdf"
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
    media: ["Chant", "Video", "Craft"],
    samplePdf: "sample_preschool_02.pdf"
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
    media: ["PPT", "3D Map", "Worksheet"],
    samplePdf: "sample_elem2_25.pdf"
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
    media: ["PPT", "Discussion", "Video"],
    samplePdf: "sample_youth_01.pdf"
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
    media: ["PPT", "Chant", "Video", "Worksheet"],
    samplePdf: "sample_lesson_year3_01.pdf"
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
    media: ["PPT", "Chant", "Video", "Worksheet"],
    samplePdf: "sample_lesson_year3_48.pdf"
  }
];

export const stores = [
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

export const pricePackages = [
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

export const faqList = [
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
