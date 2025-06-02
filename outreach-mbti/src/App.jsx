import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Heart, Users, Target, Lightbulb } from 'lucide-react';

const OutreachMBTIApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const questions = [
    {
      id: 'Q1',
      text: '분위기만 괜찮으면 "나 요즘 예수님한테 꽂혔어"부터 얘기 나온다.',
      axis: '전달',
      options: [
        { text: '완전 내 스타일이야! 자연스럽게 얘기하는 편', value: 'D', score: 2 },
        { text: '그런 편이긴 한데, 상황 봐가면서', value: 'D', score: 1 },
        { text: '음... 좀 부담스러울 것 같은데', value: 'C', score: 1 },
        { text: '아니다. 차라리 들어주는 게 내 스타일', value: 'C', score: 2 }
      ]
    },
    {
      id: 'Q2',
      text: '말할 땐 요점부터! 빙빙 돌리는 거 답답해서 딱 정리해서 말하는 편이다.',
      axis: '전달',
      options: [
        { text: '맞아! 명확하게 말하는 게 최고', value: 'D', score: 2 },
        { text: '그런 편이긴 해', value: 'D', score: 1 },
        { text: '상황에 따라 다른 것 같은데', value: 'C', score: 1 },
        { text: '아니지, 천천히 들어주는 게 좋아', value: 'C', score: 2 }
      ]
    },
    {
      id: 'Q3',
      text: '누가 힘들어 보여도, 괜히 말 걸기보단 옆에 조용히 같이 있어주는 게 더 내 방식이다.',
      axis: '전달',
      options: [
        { text: '완전 공감! 말보다 함께 있어주기', value: 'C', score: 2 },
        { text: '그런 편인 것 같아', value: 'C', score: 1 },
        { text: '음, 경우에 따라 다르긴 한데', value: 'D', score: 1 },
        { text: '아니야, 뭔가 말해주고 싶어', value: 'D', score: 2 }
      ]
    },
    {
      id: 'Q4',
      text: '무슨 일이든 시작 전에 일단 계획표부터 그려야 마음이 좀 놓인다.',
      axis: '전략',
      options: [
        { text: '완전 맞아! 계획 없으면 불안해', value: 'S', score: 2 },
        { text: '그런 편이야', value: 'S', score: 1 },
        { text: '꼭 그렇지는 않은데', value: 'F', score: 1 },
        { text: '아니다. 즉흥이 더 재미있어', value: 'F', score: 2 }
      ]
    },
    {
      id: 'Q5',
      text: '"그냥 해보자~" 분위기면 속으로 살짝 멘붕 온다. 기준이 있어야 움직일 수 있다.',
      axis: '전략',
      options: [
        { text: '완전 공감... 기준이 있어야 해', value: 'S', score: 2 },
        { text: '그런 편이긴 해', value: 'S', score: 1 },
        { text: '상황에 따라 다른 것 같은데', value: 'F', score: 1 },
        { text: '아니야, 그냥 해보는 게 좋아', value: 'F', score: 2 }
      ]
    },
    {
      id: 'Q6',
      text: '계획은 참고용이지! 현장에선 유연함이 생명이지~',
      axis: '전략',
      options: [
        { text: '완전 맞아! 현장에서 바꾸는 게 최고', value: 'F', score: 2 },
        { text: '그런 편인 것 같아', value: 'F', score: 1 },
        { text: '음... 적당히?', value: 'S', score: 1 },
        { text: '아니다. 계획대로 하는 게 좋아', value: 'S', score: 2 }
      ]
    },
    {
      id: 'Q7',
      text: '아웃리치하면서 누군가 마음 열고 조금씩 변하는 걸 보면… 그게 제일 벅차다.',
      axis: '초점',
      options: [
        { text: '완전 공감! 한 사람의 변화가 최고야', value: 'I', score: 2 },
        { text: '그런 편이야', value: 'I', score: 1 },
        { text: '좋긴 한데, 더 큰 그림도 생각해', value: 'X', score: 1 },
        { text: '구조적 변화가 더 중요한 것 같아', value: 'X', score: 2 }
      ]
    },
    {
      id: 'Q8',
      text: '이 사역, 사람 몇 명보다 "동네 분위기" 바꾸면 대박 아닌가?',
      axis: '초점',
      options: [
        { text: '완전 맞아! 시스템 변화가 진짜야', value: 'X', score: 2 },
        { text: '그런 것 같기도 하고', value: 'X', score: 1 },
        { text: '둘 다 중요하긴 한데', value: 'I', score: 1 },
        { text: '아니야, 개인 변화가 우선이지', value: 'I', score: 2 }
      ]
    },
    {
      id: 'Q9',
      text: '개인 얘기보단, 팀 전체 분위기나 방향이 더 먼저 보인다.',
      axis: '초점',
      options: [
        { text: '맞아! 전체적인 그림이 먼저 보여', value: 'X', score: 2 },
        { text: '그런 편인 것 같아', value: 'X', score: 1 },
        { text: '개인도 중요하긴 해', value: 'I', score: 1 },
        { text: '아니야, 개인이 더 먼저 보여', value: 'I', score: 2 }
      ]
    },
    {
      id: 'Q10',
      text: '상황이 어수선하면 자동으로 "일단 내가 정리할게" 모드 된다.',
      axis: '실행',
      options: [
        { text: '완전 내 모습! 앞장서서 정리해', value: 'L', score: 2 },
        { text: '그런 편이야', value: 'L', score: 1 },
        { text: '상황 봐가면서', value: 'B', score: 1 },
        { text: '아니야, 도와주는 게 더 편해', value: 'B', score: 2 }
      ]
    },
    {
      id: 'Q11',
      text: '앞에 서는 것보단, 뒤에서 정리하고 도와주는 포지션이 더 편하다.',
      axis: '실행',
      options: [
        { text: '완전 맞아! 서포트가 최고야', value: 'B', score: 2 },
        { text: '그런 편이야', value: 'B', score: 1 },
        { text: '경우에 따라 다른데', value: 'L', score: 1 },
        { text: '아니야, 앞에서 이끄는 게 좋아', value: 'L', score: 2 }
      ]
    },
    {
      id: 'Q12',
      text: '중요한 일일수록 "내가 맡고 끝내야 속이 시원"하다.',
      axis: '실행',
      options: [
        { text: '완전 공감! 내가 해야 마음 편해', value: 'L', score: 2 },
        { text: '그런 편이긴 해', value: 'L', score: 1 },
        { text: '상황에 따라 다른 것 같은데', value: 'B', score: 1 },
        { text: '아니야, 함께 하는 게 좋아', value: 'B', score: 2 }
      ]
    }
  ];

  const results = {
    'DSIL': { 
      nickname: '작전 짜는 사자', 
      emoji: '🦁', 
      description: '작전 짜는 사자형인 당신은 한 걸음 앞서 철저한 계획을 세워 움직이는 전략가예요. 새로운 아웃리치 아이디어가 떠오르면 바로 노트에 적고, 목표를 향한 체계적인 로드맵을 그리는 것을 즐겨요.',
      strengths: [
        '철저한 계획 수립과 전략적 추진으로 팀을 안정감 있게 이끌어요',
        '분명한 비전 제시와 카리스마 있는 소통으로 팀원들에게 동기를 부여할 수 있어요',
        '각 팀원의 강점과 필요를 세심하게 살피며 개개인의 성장을 도울 줄 알아요'
      ],
      cautions: [
        '세운 계획에 없던 일이 생기면 당황하거나 스트레스를 받을 수 있으니 상황 변화에 대한 유연함을 길러보세요',
        '리더십이 강한 만큼 다른 사람들의 의견을 놓치고 독단적으로 보이지 않도록 주의가 필요해요'
      ],
      recommendedMinistry: [
        '새가족 또는 새신자 양육 담당',
        '아웃리치/단기선교 팀장',
        '제자훈련 교사/소그룹 리더'
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-w-2xl w-full mx-2 sm:mx-4">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">{result.emoji}</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{result.nickname}</h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2 sm:px-0">{result.description}</p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="font-semibold text-blue-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <Heart className="w-5 h-5 mr-2" />
                ✅ 강점
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="text-blue-700 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="font-semibold text-orange-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <Lightbulb className="w-5 h-5 mr-2" />
                ⚠️ 주의점
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {result.cautions.map((caution, index) => (
                  <li key={index} className="text-orange-700 text-xs sm:text-sm flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {caution}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="font-semibold text-green-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <Users className="w-5 h-5 mr-2" />
                🙌 추천 사역
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {result.recommendedMinistry.map((ministry, index) => (
                  <li key={index} className="text-green-700 text-xs sm:text-sm flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {ministry}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={resetTest}
            className="mt-6 sm:mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            다시 테스트하기
          </button>
        </div>
      </div>
    );
  }

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-w-lg w-full mx-2 sm:mx-4">
          <div className="text-center">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">⛪</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">아웃리치 성향 테스트</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              12개의 간단한 질문으로 당신의 아웃리치 성향을 알아보세요!<br/>
              4가지 축을 기반으로 16가지 유형 중 당신만의 스타일을 찾아드려요.
            </p>
            
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-1 sm:mb-2" />
                <h3 className="font-semibold text-blue-800 text-sm sm:text-base">전달 방식</h3>
                <p className="text-xs sm:text-sm text-blue-600">선포형 vs 동행형</p>
              </div>
              <div className="bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-1 sm:mb-2" />
                <h3 className="font-semibold text-green-800 text-sm sm:text-base">사역 전략</h3>
                <p className="text-xs sm:text-sm text-green-600">구조형 vs 유동형</p>
              </div>
              <div className="bg-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-1 sm:mb-2" />
                <h3 className="font-semibold text-purple-800 text-sm sm:text-base">사역 초점</h3>
                <p className="text-xs sm:text-sm text-purple-600">개인형 vs 구조형</p>
              </div>
              <div className="bg-orange-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
                <h3 className="font-semibold text-orange-800 text-sm sm:text-base">실행 방식</h3>
                <p className="text-xs sm:text-sm text-orange-600">리더형 vs 백업형</p>
              </div>
            </div>

            <button
              onClick={() => setShowIntro(false)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto text-sm sm:text-base"
            >
              테스트 시작하기
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-w-lg w-full mx-2 sm:mx-4">
        <div className="mb-4 sm:mb-6">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-xs sm:text-sm font-medium text-blue-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 leading-relaxed px-1 sm:px-0">
            {questions[currentQuestion].text}
          </h2>
          
          <div className="space-y-2 sm:space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-3 sm:p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg sm:rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-gray-800 text-sm sm:text-base">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-gray-500 hover:text-gray-700 flex items-center text-xs sm:text-sm"
          >
            ← 이전 질문으로
          </button>
        )}
      </div>
    </div>
  );
};

export default OutreachMBTIApp;
