import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Heart, Users, Target, Lightbulb, Sparkles } from 'lucide-react';

const OutreachMBTIApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

   const questions = [
    {
      id: 'Q1',
      text: '누군가가 신앙 얘기를 꺼내면, 너는?',
      axis: '전달',
      options: [
        { text: '“나 요즘 이런 생각했어” 하고 먼저 얘기 꺼냄', value: 'D', score: 3 },
        { text: '분위기 좋으면 내 얘기도 자연스럽게 함', value: 'D', score: 2 },
        { text: '이야기를 들으면서 표정과 리액션으로 반응함', value: 'C', score: 2 },
        { text: '조용히 들어주면서 마음으로 공감하는 편', value: 'C', score: 3 }
      ]
    },
    {
      id: 'Q2',
      text: '분위기가 어색할 때 어떻게 해?',
      axis: '전달',
      options: [
        { text: '어색한 분위기 못 참아서 먼저 말 걸고 리액션 담당해', value: 'D', score: 3 },
        { text: '살짝 농담을 던져보며 어색함을 풀려 함', value: 'D', score: 2 },
        { text: '눈치가 빨라서 일단 분위기를 살펴', value: 'C', score: 2 },
        { text: '자연스럽게 분위기가 풀어지기를 기다리는 편', value: 'C', score: 3 }
      ]
    },
    {
      id: 'Q3',
      text: '평소에 말할 때 어떤 스타일이야?',
      axis: '전달',
      options: [
        { text: '차근차근 공감하며 상대방의 마음을 열어보는 스타일이지', value: 'C', score: 3 },
        { text: '상대방의 감정과 분위기를 신경쓰는 편', value: 'C', score: 2 },
        { text: '중요한 포인트를 잘 정리하여 상대방에게 말하려고 해', value: 'D', score: 2 },
        { text: '핵심 중심으로 요점을 이야기하는 편이야', value: 'D', score: 3 }
      ]
    },
    {
      id: 'Q4',
      text: '새로운 일을 하게 됐어. 너의 반응은?',
      axis: '전략',
      options: [
        { text: '바로 일정과 리스트를 짜는 타입', value: 'S', score: 3 },
        { text: '큰 틀은 잡고 움직여야지', value: 'S', score: 2 },
        { text: '일단 시작하고 나서 방향을 잡아가자', value: 'F', score: 2 },
        { text: '상황에 맞게 유연하게 대처하는 것이 효율적이야', value: 'F', score: 3 }
      ]
    },
    {
      id: 'Q5',
      text: '예상치 못한 상황이 터졌을 때, 너는?',
      axis: '전략',
      options: [
        { text: '오히려 흥미진진해 즉흥적으로 대응 가능', value: 'F', score: 3 },
        { text: '상황에 맞게 유연하게 변경하자', value: 'F', score: 2 },
        { text: '얼른 정리해서 다시 가자', value: 'S', score: 2 },
        { text: '당황스럽지만 원래 계획대로 갈 수 있어', value: 'S', score: 3 }
      ]
    },
    {
      id: 'Q6',
      text: '모임의 저녁 메뉴를 정해야 할 때 어떻게 해?',
      axis: '전략',
      options: [
        { text: '메뉴 후보와 각각의 가격, 모임 인원들의 취향을 고려해', value: 'S', score: 3 },
        { text: '모임에 적절한 메뉴 몇 개를 추려서 따져봐', value: 'S', score: 2 },
        { text: '떠오르는 메뉴 몇 개 중 분위기 봐서 정해', value: 'F', score: 2 },
        { text: '끌리는 메뉴가 있으면 그걸로 딱 결정', value: 'F', score: 3 }
      ]
    },
     {
      id: 'Q7',
      text: '아웃리치 중에 뭐가 제일 먼저 눈에 들어와?',
      axis: '초점',
      options: [
        { text: '이곳이 현재 어떤 상황에 처해있는지', value: 'X', score: 3 },
        { text: '이곳 사람들이 어떻게 지내는지', value: 'X', score: 2 },
        { text: '이곳 사람들 중에 누구의 표정이 굳어있는지', value: 'I', score: 2 },
        { text: '이곳 어느 아이의 ', value: 'I', score: 3 }
      ]
    },
    {
      id: 'Q8',
      text: '아웃리치 중에 가장 오래 기억에 남는 장면이 무엇일 것 같아?',
      axis: '초점',
      options: [
        { text: '말 없던 친구가 작은 목소리로 “기도해볼래요” 하는 순간', value: 'I', score: 3 },
        { text: '조심스럽게 마음을 열고 속 이야기를 시작하는 표정', value: 'I', score: 2 },
        { text: '아웃리치팀이 큰 은혜를 받고서 환하게 ', value: 'X', score: 2 },
        { text: '누구도 기대하지 않았던 변화가 마을 전체에서 퍼졌던 순간', value: 'X', score: 3 }
      ]
    },
    {
      id: 'Q9',
      text: '넌 왜 아웃리치를 해? 뭐가 제일 중요해?',
      axis: '초점',
      options: [
        { text: '마을이 새로운 방식으로 돌아가기 시작할 때', value: 'X', score: 3 },
        { text: '사역지 분위기가 환하게 바뀐 느낌이 들 때', value: 'X', score: 2 },
        { text: '마음을 열고 먼저 다가오는 사람을 볼 때', value: 'I', score: 2 },
        { text: '한 친구가 스스로 뭔가를 시도할 때', value: 'I', score: 3 }
      ]
    },
    {
      id: 'Q10',
      text: '상황이 어수선하면 자동으로 "일단 내가 정리할게" 모드 된다.',
      axis: '실행',
      options: [
        { text: '완전 내 모습! 앞장서서 정리해', value: 'L', score: 3 },
        { text: '그런 편이야', value: 'L', score: 2 },
        { text: '상황 봐가면서', value: 'B', score: 2 },
        { text: '아니야, 도와주는 게 더 편해', value: 'B', score: 3 }
      ]
    },
    {
      id: 'Q11',
      text: '앞에 서는 것보단, 뒤에서 정리하고 도와주는 포지션이 더 편하다.',
      axis: '실행',
      options: [
        { text: '완전 맞아! 서포트가 최고야', value: 'B', score: 3 },
        { text: '그런 편이야', value: 'B', score: 2 },
        { text: '경우에 따라 다른데', value: 'L', score: 2 },
        { text: '아니야, 앞에서 이끄는 게 좋아', value: 'L', score: 3 }
      ]
    },
    {
      id: 'Q12',
      text: '중요한 일일수록 "내가 맡고 끝내야 속이 시원"하다.',
      axis: '실행',
      options: [
        { text: '완전 공감! 내가 해야 마음 편해', value: 'L', score: 3 },
        { text: '그런 편이긴 해', value: 'L', score: 2 },
        { text: '상황에 따라 다른 것 같은데', value: 'B', score: 2 },
        { text: '아니야, 함께 하는 게 좋아', value: 'B', score: 3 }
      ]
    }
  ];
  
  const results = {
    'DSIL': { 
      nickname: '작전 짜는 사자', 
      emoji: '🦁', 
      description: '작전 짜는 사자형인 당신은 한 걸음 앞서 철저한 계획을 세워 움직이는 전략가예요. 새로운 아웃리치 아이디어가 떠오르면 바로 노트에 적고, 목표를 향한 체계적인 로드맵을 그리는 것을 즐겨요. 팀 모임에서는 자신감 있는 목소리로 방향을 제시하고 준비한 자료를 척척 공유하면서 모두를 이끌어가는 모습이 인상적이에요. 언제나 열정과 추진력이 넘쳐 주변 사람들에게 든든한 리더로 여겨져요. 이 유형은 개인지향적 리더십을 갖고 있어서 팀의 각 멤버 한 사람 한 사람에게 관심을 기울여요. 당신은 단순히 전체 성과만 보는 게 아니라 한 영혼 한 영혼의 성장과 필요에 주목해요. 팀원이 힘들어하면 가장 먼저 알아차리고 곁에서 격려해주며, 각자의 강점을 살릴 수 있도록 임무를 배정하는 세심함도 있죠. 이러한 모습 덕분에 팀원들은 “우리 리더는 늘 내 상태를 챙겨준다”라며 고마워한대요. 선언형답게 말과 표현력도 뛰어나서 복음이나 팀의 비전을 전할 때 힘 있고 분명하게 전달해요. 사람들 앞에서 이야기하는 것을 두려워하지 않고, 오히려 그 순간을 통해 모두의 마음을 하나로 모으는 재능이 있어요. 예를 들어 아웃리치 준비 모임에서 당신이 힘차게 비전을 선포하면, 조용하던 팀원들까지 “한번 해보자!” 하고 마음이 불타오르곤 해요. 이렇게 카리스마 있게 소통하는 모습은 사자의 우렁찬 포효처럼 팀에 활력을 불어넣어요. 구조형 기질답게 체계적인 진행을 중요하게 생각하기에 팀 프로젝트에는 체크리스트와 일정표가 빠지지 않아요. 당신은 미리 필요한 준비물을 점검하고, 역할 분담을 명확히 해서 모두가 혼란 없이 움직이도록 도와줘요. 덕분에 아웃리치 현장에서 예기치 않은 상황이 생겨도 기본을 탄탄히 다진 팀은 쉽게 흔들리지 않죠. 당신의 치밀한 계획 덕분에 다른 사람들은 안심하고 사역에 몰두할 수 있는 거예요. 이렇듯 DSIL형은 전략적 사고와 따뜻한 관심을 모두 겸비한 리더예요. 큰 그림을 그리면서도 각 개인과 동행하려는 모습은 하나님께서 주신 목양적 리더십의 한 단면이라고 볼 수 있어요. 당신이 세운 계획 위에서 팀원들이 안정감을 느끼고, 당신의 격려 속에서 개인적으로 성장한다면 그보다 아름다운 사역의 열매도 없을 거예요. 앞으로도 이 장점을 마음껏 발휘해 팀원들과 사역지에 선한 영향력을 끼치길 기대해요. ',
      strengths: [
        '철저한 계획 수립과 전략적 추진으로 팀을 안정감 있게 이끌어요',
        '분명한 비전 제시와 카리스마 있는 소통으로 팀원들에게 동기를 부여할 수 있어요',
        '각 팀원의 강점과 필요를 세심하게 살피며 개개인의 성장을 도울 줄 알아요',
        '강한 책임감과 추진력으로 맡은 사명을 끝까지 완수해요.',
      ],
      cautions: [
        '세운 계획에 없던 일이 생기면 당황하거나 스트레스를 받을 수 있으니 상황 변화에 대한 유연함을 길러보세요',
        '리더십이 강한 만큼 다른 사람들의 의견을 놓치고 독단적으로 보이지 않도록 주의가 필요해요',
        '모든 팀원을 일일이 챙기려다 보면 정작 자신의 한계를 넘어서 지칠 수 있으니 균형을 잃지 않는 게 중요해요.',
        '개인에게 집중하는 사이 팀 전체의 그림이나 시스템 개선을 간과하지 않도록, 가끔 한 발 물러서서 점검해보세요.'
      ],
      recommendedMinistry: [
        '새가족 또는 새신자 양육 담당: 체계적인 계획 아래 새로 온 사람 한 명 한 명을 챙겨주고 신앙 성장을 도울 수 있어요.',
        '아웃리치/단기선교 팀장: 철저한 준비와 카리스마 있는 리더십으로 팀을 이끌며, 현장에서도 침착하게 대응해 사역을 성공적으로 이끌 수 있어요.',
        '제자훈련 교사/소그룹 리더: 말로 비전을 잘 전하고 개인별 맞춤 돌봄을 할 수 있는 강점을 살려 성경공부 모임이나 멘토링 그룹을 이끌기에 적합해요.'
      ]
    },
    'DSIB': { 
      nickname: '지혜로운 부엉이', 
      emoji: '🦉', 
      description: '지혜로운 부엉이형인 당신은 언제나 조용하지만 빛나는 통찰력으로 팀을 든든하게 받쳐주는 숨은 공로자예요.',
      strengths: [
        '풍부한 지식과 통찰력으로 상황을 분석하고 의미 있는 조언을 해줄 수 있어요',
        '맡은 일에 대해 꼼꼼하게 준비하고 성실하게 임해 팀의 신뢰를 얻고 있어요'
      ],
      cautions: [
        '필요한 말만 하다 보면 가끔 자신의 아이디어나 의견을 충분히 알리기 전에 넘어갈 때가 있으니 더 적극적으로 표현해보세요'
      ],
      recommendedMinistry: [
        '양육팀 콘텐츠 제작/보조 교사',
        '새가족 정착 멘토',
        '행정/기획 서포트'
      ]
    },
    'DSXL': { 
      nickname: '지휘하는 코끼리', 
      emoji: '🐘', 
      description: '지휘하는 코끼리형인 당신은 큰 덩치의 코끼리처럼 한 공동체를 이끄는 든든한 리더예요.',
      strengths: [
        '넓은 시야로 큰 그림을 그리고 전략적으로 팀의 목표와 방향을 제시할 수 있어요',
        '체계적인 기획력과 조직 관리 능력으로 복잡한 사역도 차질 없이 추진해요'
      ],
      cautions: [
        '큰 그림을 중시하다 보면 개인의 감정이나 작은 어려움들을 간과할 위험이 있어요'
      ],
      recommendedMinistry: [
        '청년부 임원/리더',
        '단기선교/대형 아웃리치 총괄',
        '행정/기획 팀장'
      ]
    },
    'DSXB': { 
      nickname: '설계하는 비버', 
      emoji: '🦫', 
      description: '설계하는 비버형인 당신은 강가에 둑을 쌓는 비버처럼 묵묵히 공동체를 세워가는 든든한 설계자예요.',
      strengths: [
        '기획 단계부터 마무리까지 체계적으로 계획을 세우고 실행하여 사역을 안정적으로 진행시켜요',
        '세부사항까지 꼼꼼하게 챙기는 철저함으로 실수를 줄이고 팀원들의 신뢰를 얻고 있어요'
      ],
      cautions: [
        '본인이 세운 체계대로 일이 안 굴러가면 속으로 스트레스를 많이 받을 수 있으니, 예상 밖 상황에도 유연하게 대처하려고 해보세요'
      ],
      recommendedMinistry: [
        '행정/운영 담당',
        '아웃리치 준비위원',
        '멀티미디어/시스템 관리'
      ]
    },
    'DFIL': { 
      nickname: '순발력 있는 돌고래', 
      emoji: '🐬', 
      description: '순발력 있는 돌고래형인 당신은 밝은 에너지와 재치를 겸비한 리더예요.',
      strengths: [
        '예상치 못한 상황에서도 당황하지 않고 빠르게 대안을 찾아내는 뛰어난 순발력을 가졌어요',
        '늘 밝고 긍정적인 에너지로 주변 분위기를 북돋우며 팀 사기를 높여요'
      ],
      cautions: [
        '즉흥적인 스타일로 움직이다 보면 세부 계획이 부족해 준비 미비로 어려움을 겪을 수 있으니, 기본적인 틀은 놓치지 않도록 해요'
      ],
      recommendedMinistry: [
        '전도팀/노방전도 리더',
        '찬양 인도/예배팀 봉사',
        '새가족 환영/친교 담당'
      ]
    },
    'DFIB': { 
      nickname: '수다스러운 잉꼬', 
      emoji: '🦜', 
      description: '수다스러운 잉꼬형인 당신은 한 마디 한 마디로 주변에 웃음과 온기를 불어넣는 사랑스러운 소통꾼이에요.',
      strengths: [
        '처음 보는 사람과도 금세 말문을 트고 친근하게 지낼 만큼 뛰어난 친화력과 소통 능력이 있어요',
        '상대방의 이야기를 잘 들어주고 공감하며 적절한 조언과 위로를 건네는 따뜻한 마음을 가졌어요'
      ],
      cautions: [
        '말로 분위기를 주도하다 보면 가끔 다른 사람의 말을 충분히 들어주지 못할 수 있으니 경청에도 신경 써보세요'
      ],
      recommendedMinistry: [
        '새가족 환영/친교팀',
        '상담/돌봄 사역 보조',
        '각종 행사 스태프(분위기 메이커)'
      ]
    },
    'DFXL': { 
      nickname: '무리 이끄는 늑대', 
      emoji: '🐺', 
      description: '무리 이끄는 늑대형인 당신은 재빠른 판단과 팀원들과의 호흡으로 무리를 성공으로 이끄는 역동적인 리더예요.',
      strengths: [
        '변동이 많은 상황에서도 빠르게 상황을 파악하고 즉각적으로 대처 방안을 내놓아 팀을 이끌 수 있어요',
        '기존 틀에 얽매이지 않고 창의적인 방법을 시도하여 조직에 새로운 활력을 불어넣는 혁신성이 있어요'
      ],
      cautions: [
        '잦은 방향 전환과 시도가 팀원들에게 혼란이나 피로감을 줄 수 있으니, 중요한 변화는 충분히 설명하고 속도를 조절하세요'
      ],
      recommendedMinistry: [
        '개척/비전 사역 리더',
        '아웃리치/모험적 선교 팀장',
        '창의행사/프로그램 기획자'
      ]
    },
    'DFXB': { 
      nickname: '재주 많은 원숭이', 
      emoji: '🐵', 
      description: '재주 많은 원숭이형인 당신은 팀에서 분위기를 띄우고 팔방미인처럼 여러 역할을 척척 해내는 다재다능한 존재예요.',
      strengths: [
        '상황에 따라 필요한 역할을 빠르게 파악하고 여러 가지 일을 동시에 소화해내는 다재다능함이 있어요',
        '즉흥적 아이디어와 창의적인 해결책을 많이 제시해 팀의 문제 해결과 발전에 기여해요'
      ],
      cautions: [
        '동시에 여러 일에 손을 대다 보면 한 가지씩 마무리 짓는 데 소홀해질 수 있으니, 맡은 일은 우선순위를 정해 끝까지 완수하려고 해보세요'
      ],
      recommendedMinistry: [
        '단기선교/아웃리치 팀원',
        '행사/캠프 스태프',
        '미디어/홍보팀'
      ]
    },
    'CSIL': { 
      nickname: '보살피는 곰', 
      emoji: '🐻', 
      description: '보살피는 곰형인 당신은 묵직한 신뢰감과 따뜻한 돌봄으로 팀을 이끄는 포근한 리더예요.',
      strengths: [
        '팀원 개개인의 상태와 필요를 세심히 살피고 챙기는 따뜻한 돌봄 리더십이 있어요',
        '규칙과 계획을 충실히 세우고 지켜 팀에 안정감을 주며 신뢰를 얻어요'
      ],
      cautions: [
        '팀원을 아끼는 마음에 때로는 지나치게 보호적으로 될 수 있어요'
      ],
      recommendedMinistry: [
        '소그룹(셀) 리더/순장',
        '양육/멘토링 담당',
        '기도모임/중보기도 인도'
      ]
    },
    'CSIB': { 
      nickname: '헌신적인 펭귄', 
      emoji: '🐧', 
      description: '헌신적인 펭귄형인 당신은 남들이 보지 않는 곳에서도 묵묵히 사랑으로 섬기는 든든한 지원자예요.',
      strengths: [
        '맡은 일과 약속을 끝까지 지키는 강한 책임감과 성실함으로 팀의 신뢰를 받고 있어요',
        '티 나지 않는 곳에서도 꾸준히 봉사하며, 어려운 일도 마다하지 않는 헌신적인 태도를 지녔어요'
      ],
      cautions: [
        '자기 희생적으로 일하다 보면 지칠 때까지 참고 버티기 쉬워요. 힘들 땐 주변에 솔직하게 말하고 적절한 휴식을 취하세요'
      ],
      recommendedMinistry: [
        '새가족 정착 도우미',
        '양육/제자훈련 보조 스태프',
        '교회 행정/관리 위원'
      ]
    },
    'CSXL': { 
      nickname: '양 떼 모는 양치기개', 
      emoji: '🐕', 
      description: '양 떼 모는 양치기개형인 당신은 팀의 가장 앞이든 뒤든 어디에서나 함께 뛰며 모두를 한 방향으로 이끄는 현장형 리더예요.',
      strengths: [
        '솔선수범하여 현장에서 직접 팀을 이끌기에 구성원들이 큰 신뢰와 동기를 얻어요',
        '역할 분담과 일정 관리를 체계적으로 해내어 팀이 효율적으로 움직일 수 있도록 해요'
      ],
      cautions: [
        '모든 일을 직접 함께하다 보면 자칫 세세한 것까지 관여하여 과도한 개입으로 보일 수 있으니, 팀원들이 자립적으로 할 부분은 믿고 맡겨보세요'
      ],
      recommendedMinistry: [
        '봉사팀/구제팀 팀장',
        '행사 운영 리더',
        '예배/모임 운영 총괄'
      ]
    },
    'CSXB': { 
      nickname: '부지런한 꿀벌', 
      emoji: '🐝', 
      description: '부지런한 꿀벌형인 당신은 공동체를 위해 쉼 없이 움직이는 성실한 일꾼이에요.',
      strengths: [
        '맡은 일을 끝까지 책임지고 해내는 근면함과 성실함으로 팀에 큰 신뢰를 주어요',
        '규칙과 지침을 성실히 따르고, 체계적으로 업무를 처리하여 실수 없이 효율적으로 일해요'
      ],
      cautions: [
        '남들을 돕느라 과로하면서도 티를 내지 않아, 본인이 번아웃에 가까워질 때까지 주변에서 모를 수 있어요'
      ],
      recommendedMinistry: [
        '예배 준비/정리 봉사',
        '행정/지원 스태프',
        '주방/시설 관리 봉사'
      ]
    },
    'CFIL': { 
      nickname: '새끼를 돌보는 오리', 
      emoji: '🦆', 
      description: '새끼를 돌보는 오리형인 당신은 한 걸음 한 걸음 아이들을 따라다니는 오리 엄마처럼, 구성원들의 곁을 지키며 이끄는 유연한 리더예요.',
      strengths: [
        '팀원들과 친근하게 소통하며 편안한 분위기를 만들어, 구성원들이 마음을 열고 적극 참여하도록 이끌어요',
        '각 사람의 개성과 상황에 맞춰 지도 방법을 유연하게 바꿀 수 있어, 개별 맞춤형 돌봄과 격려를 제공해요'
      ],
      cautions: [
        '친구 같은 리더십은 장점이지만, 필요할 때는 어려운 결정이나 단호한 지시도 내려야 해요'
      ],
      recommendedMinistry: [
        '청년 소모임/셀 리더',
        '새신자 돌봄/멘토링',
        '행사/레크리에이션 진행'
      ]
    },
    'CFIB': { 
      nickname: '충성스러운 강아지', 
      emoji: '🐶', 
      description: '충성스러운 강아지형인 당신은 언제나 가까이에서 든든하게 함께해주는 다정한 동역자예요.',
      strengths: [
        '매사에 변함없이 성실하고 충직해 주변 사람들에게 깊은 신뢰감을 주어요',
        '상대가 필요로 하는 것을 재빨리 파악해 먼저 도와주는 세심한 배려심이 있어요'
      ],
      cautions: [
        '남을 돕느라 정작 자신의 업무나 건강을 소홀히 하지 않도록 주의하세요'
      ],
      recommendedMinistry: [
        '새가족 환영/친교팀',
        '심방/돌봄 사역 보조',
        '봉사팀 일반 멤버'
      ]
    },
    'CFXL': { 
      nickname: '앞장서는 기러기', 
      emoji: '🪿', 
      description: '앞장서는 기러기형인 당신은 필요할 때 맨 앞에 서지만, 평소에는 모두와 어울려 비행하는 유연한 리더예요.',
      strengths: [
        '팀원들과 역할을 나누고 주도권을 공유함으로써 모든 구성원이 주인의식을 갖고 참여하도록 이끌어요',
        '계획과 전략을 상황에 맞게 유연하게 조정하여 변화에 신속히 대응하고, 팀 전체의 회복력을 높여요'
      ],
      cautions: [
        '모두의 의견을 듣다 보면 결정이 늦어질 수 있어요'
      ],
      recommendedMinistry: [
        '프로젝트/이벤트 총괄 리더',
        '청년부 코디네이터/임원',
        '창의사역 팀장'
      ]
    },
    'CFXB': { 
      nickname: '짐을 나르는 낙타', 
      emoji: '🐪', 
      description: '짐을 나르는 낙타형인 당신은 거친 사막에서도 꾸준히 짐을 지고 나아가는 낙타처럼, 어떤 상황에서도 묵묵히 팀의 짐을 나르며 함께 걸어가는 든든한 동역자예요.',
      strengths: [
        '어려운 환경에서도 쉽게 지치지 않는 강인함과 인내심으로 팀을 끝까지 뒷받침해요',
        '상황 변화에 민첩하게 적응해 그때그때 필요한 일을 찾아내어 처리하는 실질적인 문제 해결 능력이 뛰어나요'
      ],
      cautions: [
        '혼자 너무 많은 짐을 떠안다가 번아웃에 이를 수 있어요'
      ],
      recommendedMinistry: [
        '구호/재난 봉사팀',
        '해외 선교팀 서포터',
        '교회 시설/물품 관리 봉사'
      ]
    }
  };

  const handleAnswer = (option) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: option };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const scores = { D: 0, C: 0, S: 0, F: 0, I: 0, X: 0, L: 0, B: 0 };
    
    Object.values(finalAnswers).forEach(answer => {
      scores[answer.value] += answer.score;
    });

    const resultType = 
      (scores.D >= scores.C ? 'D' : 'C') +
      (scores.S >= scores.F ? 'S' : 'F') +
      (scores.I >= scores.X ? 'I' : 'X') +
      (scores.L >= scores.B ? 'L' : 'B');

    setResult(results[resultType]);
    setShowResult(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResult(false);
    setShowIntro(true);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center p-1 sm:p-4 relative overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-4 sm:p-8 max-w-2xl w-full mx-1 sm:mx-4 relative shadow-2xl">
          {/* 결과 헤더 */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-7xl sm:text-9xl mb-4 sm:mb-6 animate-bounce">{result.emoji}</div>
            <h1 className="text-2xl sm:text-4xl font-black text-gray-800 mb-3 tracking-tight">{result.nickname}</h1>
          </div>
          
          {/* 결과 카드들 */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-rose-100/90 to-pink-100/90 backdrop-blur-sm border border-rose-200/50 rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-rose-600 mb-3 sm:mb-4 flex items-center text-sm sm:text-lg">
                <Heart className="w-5 h-5 mr-3" />
                나의 아웃리치 성향
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{result.description}</p>
            </div>

            <div className="bg-gradient-to-r from-emerald-100/90 to-teal-100/90 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-emerald-600 mb-3 sm:mb-4 flex items-center text-sm sm:text-lg">
                <Sparkles className="w-5 h-5 mr-3" />
                강점 & 재능
              </h3>
              <div className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{strength}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100/90 to-yellow-100/90 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-amber-600 mb-3 sm:mb-4 flex items-center text-sm sm:text-lg">
                <Lightbulb className="w-5 h-5 mr-3" />
                성장 포인트
              </h3>
              <div className="space-y-2">
                {result.cautions.map((caution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{caution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-100/90 to-purple-100/90 backdrop-blur-sm border border-violet-200/50 rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-violet-600 mb-3 sm:mb-4 flex items-center text-sm sm:text-lg">
                <Users className="w-5 h-5 mr-3" />
                추천 사역
              </h3>
              <div className="space-y-2">
                {result.recommendedMinistry.map((ministry, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{ministry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={resetTest}
            className="mt-5 sm:mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm sm:text-base border border-white/30"
          >
            <RotateCcw className="w-5 h-5 mr-3" />
            다시 테스트하기
          </button>
        </div>
      </div>
    );
  }

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center p-1 sm:p-4 relative overflow-hidden">
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-4 sm:p-8 max-w-lg w-full mx-1 sm:mx-4 relative shadow-2xl">
          <div className="text-center">
            <div className="text-5xl sm:text-7xl mb-4 sm:mb-6 animate-bounce">✨</div>
            <h1 className="text-2xl sm:text-4xl font-black text-gray-800 mb-3 sm:mb-4 tracking-tight">
              아웃리치 성향
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                테스트
              </span>
            </h1>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-2 sm:px-0 font-medium">
              12개의 질문으로 당신만의 사역 스타일을 발견하고,<br/>
              16가지 개성 넘치는 캐릭터 중 당신의 모습을 찾아보세요!
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-gradient-to-br from-blue-100/90 to-cyan-100/90 backdrop-blur-sm border border-blue-200/50 rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-blue-700 text-xs sm:text-sm">전달 방식</h3>
                <p className="text-blue-500 text-xs">선포형 vs 동행형</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-100/90 to-teal-100/90 backdrop-blur-sm border border-emerald-200/50 rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-bold text-emerald-700 text-xs sm:text-sm">사역 전략</h3>
                <p className="text-emerald-500 text-xs">구조형 vs 유동형</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100/90 to-violet-100/90 backdrop-blur-sm border border-purple-200/50 rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-purple-700 text-xs sm:text-sm">사역 초점</h3>
                <p className="text-purple-500 text-xs">개인형 vs 구조형</p>
              </div>
              <div className="bg-gradient-to-br from-amber-100/90 to-yellow-100/90 backdrop-blur-sm border border-amber-200/50 rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="font-bold text-amber-700 text-xs sm:text-sm">실행 방식</h3>
                <p className="text-amber-500 text-xs">리더형 vs 백업형</p>
              </div>
            </div>

            <button
              onClick={() => setShowIntro(false)}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto text-sm sm:text-base border border-white/30"
            >
              테스트 시작하기
              <ChevronRight className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center p-1 sm:p-4 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-4 sm:p-8 max-w-lg w-full mx-1 sm:mx-4 relative shadow-2xl">
        {/* 진행률 표시 */}
        <div className="mb-4 sm:mb-6">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-bold text-gray-600">
              {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-xs sm:text-sm font-bold text-purple-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700 ease-out relative"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* 질문 */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 leading-relaxed">
            {questions[currentQuestion].text}
          </h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-3 sm:p-4 text-left bg-white/60 hover:bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-purple-300 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <span className="text-gray-700 group-hover:text-gray-800 text-sm sm:text-base font-medium">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 이전 버튼 */}
        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-gray-500 hover:text-gray-700 flex items-center text-xs sm:text-sm font-medium transition-colors"
          >
            ← 이전 질문으로
          </button>
        )}
      </div>
    </div>
  );
};

export default OutreachMBTIApp;
