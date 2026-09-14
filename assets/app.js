const translations = {
  ko: {
    documentTitle: "GGi-gik | 최적 정차구역 추천 MVP",
    metaDescription: "GGi-gik | 목적지 주변 정차 후보를 비교해 차량 유형과 조건에 맞는 추천 위치를 제시하는 기능형 MVP",
    brandAria: "GGi-gik 홈",
    navAria: "주요 메뉴",
    videoAria: "GGi-gik 서비스 소개 영상",
    navProblem: "문제",
    navSolution: "솔루션",
    navApi: "API",
    navUsecase: "적용 분야",
    navContact: "문의하기",
    heroTitle: '차가 잠깐 서는 자리를,<br><em>똑똑하게 안내합니다.</em>',
    heroSubtitle: "최적 정차구역 추천 MVP",
    heroDescription: '끼긱은 목적지 주변의 정차 후보를 비교해 차량 유형과 현장 조건에 맞는 <span>추천 정차 위치를 제시하는 기능형 MVP입니다.</span>',
    heroServiceButton: "서비스 알아보기",
    heroContactButton: "문의하기",
    problemTitle: "끼긱이 해결하는 문제",
    problemLead: "목적지에 다 와도, 어디에 잠깐 서야 할지는 여전히 운전자 판단에 남아 있습니다.",
    problem1Title: "혼잡",
    problem1Text: "목적지 주변에 차량이 몰리면 승하차와 정차가 동시에 혼선됩니다.",
    problem2Title: "정차 판단 부재",
    problem2Text: "내비게이션은 도착까지 안내하지만 실제 정차 위치 선택은 운전자 판단에 남습니다.",
    problem3Title: "안전 리스크",
    problem3Text: "도로 구조와 보행 접근성에 따라 정차 후보의 위험도는 달라질 수 있습니다.",
    problem4Title: "데이터 미구조화",
    problem4Text: "목적지 주변 정차 후보 정보가 일관된 데이터 형태로 제공되지 않는 경우가 많습니다.",
    serviceTitle: "정차 후보 추천 솔루션",
    serviceLead: "목적지 주변 후보를 비교해 추천 결과를 제시합니다.",
    service1Title: "정차 후보 데이터 구조화",
    service1Text: "목적지 주변 후보 위치와 속성을 데이터로 정리합니다.",
    service2Title: "위험도·접근성 비교",
    service2Text: "안전성, 보행거리, 차량 적합도를 기준으로 후보를 비교합니다.",
    service3Title: "추천 정차 후보 제시",
    service3Text: "종합 점수가 가장 높은 후보와 대체 후보를 제시합니다.",
    apiLead: "연동 구조를 설명하기 위한 예시 응답입니다.",
    apiSummary: "현재 공개 예시는 프로토타입 구조를 보여주기 위한 샘플입니다. 실제 상용 환경에서는 검증된 데이터와 운영 조건에 맞춘 연동이 필요합니다.",
    apiRecommended: "추천 후보",
    apiAlternative: "대체 후보",
    usecaseTitle: "적용 분야",
    usecaseLead: "정차 판단이 필요한 다양한 모빌리티 환경에 적용할 수 있습니다.",
    usecase1Title: "내비게이션 · 지도",
    usecase1Text: "도착 이후 실제 정차 위치까지 이어지는 라스트 100m 추천 인터페이스로 확장할 수 있습니다.",
    usecase2Title: "차량 IVI / OEM",
    usecase2Text: "차량 내 화면에서 활용할 수 있는 정차 후보 추천 레이어로 연동할 수 있습니다.",
    usecase3Title: "모빌리티 플랫폼",
    usecase3Text: "택시·호출·배달·물류 서비스의 픽업 및 드롭오프 후보 추천에 활용할 수 있습니다.",
    usecase4Title: "시설 운영",
    usecase4Text: "병원·상업시설 등 목적지 전면부의 정차 운영 판단을 지원하는 데이터 레이어로 확장할 수 있습니다.",
    contactTitle: "사업제휴 · PoC · 데이터 협력 문의"
  },
  en: {
    documentTitle: "GGi-gik | Curbside Stop Recommendation MVP",
    metaDescription: "GGi-gik is a functional MVP that compares curbside stop candidates and recommends suitable stopping locations by vehicle type and site conditions.",
    brandAria: "GGi-gik Home",
    navAria: "Main navigation",
    videoAria: "GGi-gik service introduction video",
    navProblem: "Problem",
    navSolution: "Solution",
    navApi: "API",
    navUsecase: "Use Cases",
    navContact: "Contact",
    heroTitle: 'Better curbside stops,<br><em>guided intelligently.</em>',
    heroSubtitle: "Curbside Stop Recommendation MVP",
    heroDescription: 'GGi-gik compares curbside stop candidates near a destination and presents <span>recommended stopping locations based on vehicle type and site conditions.</span>',
    heroServiceButton: "Explore the Service",
    heroContactButton: "Contact Us",
    problemTitle: "The Problem GGi-gik Solves",
    problemLead: "Even after reaching a destination, drivers are often left to decide where they can briefly stop.",
    problem1Title: "Curbside Congestion",
    problem1Text: "When vehicles converge around a destination, stopping, pick-up and drop-off activities can become disorganized.",
    problem2Title: "Last-Meter Uncertainty",
    problem2Text: "Navigation systems guide drivers to the destination, but choosing the actual stopping point is still left to the driver.",
    problem3Title: "Safety Risk",
    problem3Text: "Candidate risk can vary depending on road layout, pedestrian access and surrounding conditions.",
    problem4Title: "Unstructured Stop Data",
    problem4Text: "Curbside candidate information around destinations is often not available in a consistent structured format.",
    serviceTitle: "Curbside Stop Recommendation",
    serviceLead: "Compare nearby candidates and present a recommended result.",
    service1Title: "Structured Stop Candidate Data",
    service1Text: "Candidate locations and attributes around a destination are organized into structured data.",
    service2Title: "Risk & Accessibility Comparison",
    service2Text: "Candidates are compared using safety, walking distance and vehicle compatibility factors.",
    service3Title: "Recommended Stop Candidate",
    service3Text: "The highest-scoring candidate and alternatives are presented as recommendation results.",
    apiLead: "Example response illustrating the intended integration structure.",
    apiSummary: "The public example uses prototype data to demonstrate the structure. Commercial deployment requires validated data and configuration appropriate to the operating environment.",
    apiRecommended: "Recommended",
    apiAlternative: "Alternative",
    usecaseTitle: "Use Cases",
    usecaseLead: "Applicable to mobility environments that require curbside stopping decisions.",
    usecase1Title: "Navigation · Maps",
    usecase1Text: "Extend navigation beyond arrival with a last-100-meter recommendation interface for the actual stopping point.",
    usecase2Title: "Vehicle IVI / OEM",
    usecase2Text: "Can be integrated as a curbside recommendation layer within in-vehicle interfaces.",
    usecase3Title: "Mobility Platforms",
    usecase3Text: "Applicable to pick-up and drop-off recommendations for taxi, ride-hailing, delivery and logistics services.",
    usecase4Title: "Facility Operations",
    usecase4Text: "Can be extended as a data layer supporting curbside operational decisions around hospitals and commercial facilities.",
    contactTitle: "Partnership · PoC · Data Collaboration"
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.ko;
  document.documentElement.lang = language;
  document.title = dictionary.documentTitle;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    const active = button.dataset.langBtn === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try { localStorage.setItem("ggigik-language", language); } catch (_) {}
}

document.querySelectorAll("[data-lang-btn]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langBtn));
});

document.querySelectorAll('.tab').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((el) => el.classList.remove('active'));
    document.querySelectorAll('.code').forEach((el) => el.classList.remove('active'));
    button.classList.add('active');
    const panel = document.getElementById(button.dataset.tab);
    if (panel) panel.classList.add('active');
  });
});

let initialLanguage = "ko";
try {
  const saved = localStorage.getItem("ggigik-language");
  if (saved === "ko" || saved === "en") initialLanguage = saved;
} catch (_) {}
setLanguage(initialLanguage);

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('video[autoplay]').forEach((video) => {
    video.removeAttribute('autoplay');
    video.pause();
  });
}
