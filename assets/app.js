const translations = {
  ko: {
    documentTitle: "GGi-gik | 정차 후보 추천 MVP",
    metaDescription: "GGi-gik | 목적지 주변 정차 후보를 비교해 추천 위치를 제시하는 기능형 MVP",
    brandAria: "GGi-gik 홈",
    navAria: "주요 메뉴",
    videoAria: "GGi-gik 서비스 소개 영상",
    integrationImageAlt: "모바일 내비게이션 및 차량 IVI 연동 예시",
    apiExampleAria: "API 추천 결과 예시",

    navProblem: "문제",
    navSolution: "해결",
    navApi: "API",
    navUsecase: "적용 분야",
    navContact: "문의하기",

    heroTitle:
      '<span class="hero-line">차가 잠깐 서는 자리를,</span><em class="hero-line">똑똑하게 안내합니다.</em>',
    heroSubtitle: "정차 후보 추천 MVP",
    heroDescription:
      '끼긱은 목적지 주변의 정차 후보를 비교해<br class="desktop-break">차량 유형과 현장 조건에 맞는 추천 정차 위치를 제시하는 기능형 MVP입니다.',
    heroServiceButton: "서비스 알아보기",
    heroContactButton: "문의하기",

    problemTitle: "GGi-gik이 해결하는 문제",
    problem1Title: "목적지 주변 혼잡",
    problem1Text: "차량이 한 지점에 몰리면 승하차와 단기 정차가 동시에 혼선됩니다.",
    problem2Title: "정차 위치 판단의 공백",
    problem2Text: "내비게이션은 도착을 안내하지만 실제로 어디에 잠깐 설지는 운전자가 판단해야 합니다.",
    problem3Title: "현장별 위험 차이",
    problem3Text: "횡단보도, 도로 폭, 시야 등 주변 조건에 따라 정차 적합도는 달라집니다.",
    problem4Title: "정차 데이터의 비정형성",
    problem4Text: "후보 위치와 이용 조건이 구조화되지 않으면 같은 판단을 매번 반복하게 됩니다.",

    serviceTitle: "정차 추천 방식",
    service1Title: "정차 후보 구조화",
    service1Text: "목적지 주변의 정차 후보를 비교 가능한 데이터로 정리합니다.",
    service2Title: "후보 비교",
    service2Text: "안전성·보행거리·차량 유형 적합성을 기준으로 후보를 비교합니다.",
    service3Title: "추천 결과 제시",
    service3Text: "종합 점수가 가장 높은 후보와 대체 후보를 함께 제시합니다.",

    apiRequest: "REQUEST",
    apiResponse: "RESPONSE",
    apiRecommended: "추천 후보",
    apiAlternative: "대체 후보",

    usecaseTitle: "적용 분야",
    usecase1Title: "내비게이션 · 지도",
    usecase1Text: "도착 이후 실제 정차 지점까지 이어지는 라스트 100m 정보를 제공합니다.",
    usecase2Title: "차량 IVI · OEM",
    usecase2Text: "차량 화면에서 활용할 수 있는 정차 후보 추천 인터페이스로 확장할 수 있습니다.",
    usecase3Title: "모빌리티 플랫폼",
    usecase3Text: "택시·호출·배달·물류 서비스의 승하차 및 픽업 지점 추천에 활용할 수 있습니다.",
    usecase4Title: "시설 운영",
    usecase4Text: "시설 전면부의 정차 운영과 현장 판단을 지원하는 데이터 레이어로 활용할 수 있습니다.",

    contactTitle: "사업제휴 · PoC · 데이터 협력 문의",
    contactDescription: "GGi-gik MVP와 정차 후보 데이터 구조에 대해 문의해주세요."
  },

  en: {
    documentTitle: "GGi-gik | Curbside Stop Recommendation MVP",
    metaDescription: "GGi-gik | A functional MVP that compares curbside stop candidates and presents recommended stopping locations.",
    brandAria: "GGi-gik Home",
    navAria: "Main navigation",
    videoAria: "GGi-gik service introduction video",
    integrationImageAlt: "Mobile navigation and vehicle IVI integration examples",
    apiExampleAria: "API recommendation result example",

    navProblem: "Problem",
    navSolution: "Solution",
    navApi: "API",
    navUsecase: "Use Cases",
    navContact: "Contact",

    heroTitle:
      '<span class="hero-line">Better curbside stops,</span><em class="hero-line">guided intelligently.</em>',
    heroSubtitle: "Curbside Stop Recommendation MVP",
    heroDescription:
      'GGi-gik compares curbside stop candidates near a destination<br class="desktop-break">and presents recommended stopping locations based on vehicle type and site conditions.',
    heroServiceButton: "Explore the Service",
    heroContactButton: "Contact Us",

    problemTitle: "The Problem GGi-gik Solves",
    problem1Title: "Curbside Congestion",
    problem1Text: "When vehicles converge at one destination, short stops, pick-ups and drop-offs can quickly become disorganized.",
    problem2Title: "The Last-Meter Decision Gap",
    problem2Text: "Navigation can guide drivers to arrival, but the actual place to stop is still left to the driver.",
    problem3Title: "Site-Specific Risk",
    problem3Text: "Stopping suitability changes with crosswalks, road width, visibility and other local conditions.",
    problem4Title: "Unstructured Stop Data",
    problem4Text: "Without structured candidate locations and conditions, the same stopping decisions must be made repeatedly.",

    serviceTitle: "How the Recommendation Works",
    service1Title: "Structure Stop Candidates",
    service1Text: "Organize curbside stop candidates near a destination into comparable data.",
    service2Title: "Compare Candidates",
    service2Text: "Compare candidates using safety, walking distance and vehicle-type suitability.",
    service3Title: "Present the Recommendation",
    service3Text: "Present the highest-scoring candidate together with alternative candidates.",

    apiRequest: "REQUEST",
    apiResponse: "RESPONSE",
    apiRecommended: "Recommended",
    apiAlternative: "Alternative",

    usecaseTitle: "Use Cases",
    usecase1Title: "Navigation · Maps",
    usecase1Text: "Extend navigation beyond arrival with last-100-meter information for the actual stopping point.",
    usecase2Title: "Vehicle IVI · OEM",
    usecase2Text: "Extend the recommendation layer into in-vehicle interfaces for curbside stopping guidance.",
    usecase3Title: "Mobility Platforms",
    usecase3Text: "Apply the recommendation layer to pick-up and drop-off points for taxi, ride-hailing, delivery and logistics services.",
    usecase4Title: "Facility Operations",
    usecase4Text: "Use structured stop data to support curbside operations and on-site decision-making around facilities.",

    contactTitle: "Partnership · PoC · Data Collaboration",
    contactDescription: "Contact us to discuss the GGi-gik MVP and its curbside stop candidate data structure."
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.ko;
  document.documentElement.lang = language;
  document.title = dictionary.documentTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

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

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    const active = button.dataset.langBtn === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try {
    localStorage.setItem("ggigik-language", language);
  } catch (error) {
    console.warn("Language preference could not be saved.");
  }
}

function initializeLanguageSwitch() {
  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langBtn);
    });
  });

  let initialLanguage = "ko";

  try {
    const savedLanguage = localStorage.getItem("ggigik-language");
    if (savedLanguage === "ko" || savedLanguage === "en") {
      initialLanguage = savedLanguage;
    }
  } catch (error) {
    initialLanguage = "ko";
  }

  setLanguage(initialLanguage);
}

function initializeApiTabs() {
  const buttons = document.querySelectorAll(".tab");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });

      document.querySelectorAll(".code").forEach((element) => {
        element.classList.remove("active");
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      const target = document.getElementById(button.dataset.tab);
      if (target) {
        target.classList.add("active");
      }
    });
  });
}

function respectReducedMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("video[autoplay]").forEach((video) => {
      video.removeAttribute("autoplay");
      video.pause();
    });
  }
}

initializeLanguageSwitch();
initializeApiTabs();
respectReducedMotion();
