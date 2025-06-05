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
      description: '작전 짜는 사자형인 당신은 한 걸음 앞서 철저한 계획을 세워 움직이는 전략가예요. 새로운 아웃리치 아이디어가 떠오르면 바로 노트에 적고, 목표를 향한 체계적인 로드맵을 그리는 것을 즐겨요. 팀 모임에서는 자신감 있는 목소리로 방향을 제시하고 준비한 자료를 척척 공유하면서 모두를 이끌어가는 모습이 인상적이에요. 언제나 열정과 추진력이 넘쳐 주변 사람들에게 든든한 리더로 여겨져요.',
      '이 유형은 개인지향적 리더십을 갖고 있어서 팀의 각 멤버 한 사람 한 사람에게 관심을 기울여요. 당신은 단순히 전체 성과만 보는 게 아니라 한 영혼 한 영혼의 성장과 필요에 주목해요. 팀원이 힘들어하면 가장 먼저 알아차리고 곁에서 격려해주며, 각자의 강점을 살릴 수 있도록 임무를 배정하는 세심함도 있죠. 이러한 모습 덕분에 팀원들은 “우리 리더는 늘 내 상태를 챙겨준다”라며 고마워한대요.',
      '선언형답게 말과 표현력도 뛰어나서 복음이나 팀의 비전을 전할 때 힘 있고 분명하게 전달해요. 사람들 앞에서 이야기하는 것을 두려워하지 않고, 오히려 그 순간을 통해 모두의 마음을 하나로 모으는 재능이 있어요. 예를 들어 아웃리치 준비 모임에서 당신이 힘차게 비전을 선포하면, 조용하던 팀원들까지 “한번 해보자!” 하고 마음이 불타오르곤 해요. 이렇게 카리스마 있게 소통하는 모습은 사자의 우렁찬 포효처럼 팀에 활력을 불어넣어요.',
      '구조형 기질답게 체계적인 진행을 중요하게 생각하기에 팀 프로젝트에는 체크리스트와 일정표가 빠지지 않아요. 당신은 미리 필요한 준비물을 점검하고, 역할 분담을 명확히 해서 모두가 혼란 없이 움직이도록 도와줘요. 덕분에 아웃리치 현장에서 예기치 않은 상황이 생겨도 기본을 탄탄히 다진 팀은 쉽게 흔들리지 않죠. 당신의 치밀한 계획 덕분에 다른 사람들은 안심하고 사역에 몰두할 수 있는 거예요.',
      '이렇듯 DSIL형은 전략적 사고와 따뜻한 관심을 모두 겸비한 리더예요. 큰 그림을 그리면서도 각 개인과 동행하려는 모습은 하나님께서 주신 목양적 리더십의 한 단면이라고 볼 수 있어요. 당신이 세운 계획 위에서 팀원들이 안정감을 느끼고, 당신의 격려 속에서 개인적으로 성장한다면 그보다 아름다운 사역의 열매도 없을 거예요. 앞으로도 이 장점을 마음껏 발휘해 팀원들과 사역지에 선한 영향력을 끼치길 기대해요.',
      strengths: [
        '철저한 계획 수립과 전략적 추진으로 팀을 안정감 있게 이끌어요',
        '분명한 비전 제시와 카리스마 있는 소통으로 팀원들에게 동기를 부여할 수 있어요',
        '각 팀원의 강점과 필요를 세심하게 살피며 개개인의 성장을 도울 줄 알아요',
        '강한 책임감과 추진력으로 맡은 사명을 끝까지 완수해요.'
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
      description: '지혜로운 부엉이형인 당신은 언제나 조용하지만 빛나는 통찰력으로 팀을 든든하게 받쳐주는 숨은 공로자예요. 밤늦게까지도 자료를 찾아 공부하고, 한 번 맡은 일은 철저하게 준비해두는 성실함이 돋보여요. 회의 중에는 앞에 나서서 큰소리치기보다는, 필요한 순간에 꼭 맞는 조언이나 정보를 건네 주변을 깜짝 놀라게 하곤 해요. 겉으로 튀지는 않아도 그 깊이 있는 한 마디 말에 모두가 고개를 끄덕이는 신뢰받는 조력자예요.',
      '이 유형은 개인지향적 성향이 강해서 팀원 한 사람 한 사람과의 소통을 특히 중시해요. 당신은 단체 메시지보다는 개인적으로 다가가 조언하거나 격려하는 방식을 선호하죠. 예를 들어 새로 온 팀원이 어색해하면 살짝 다가가 말을 걸고, 어려움을 겪는 동역자가 있으면 조용히 커피 한 잔 건네며 위로를 전해요. 이렇게 동행하는 태도 덕분에 주변 사람들은 당신에게 마음을 터놓기 쉽고, 은근한 힘을 얻곤 해요.',
      '선언형 기질을 지니고 있지만 앞에 나서는 리더라기보다는 꼭 필요한 때에 진리를 일깨워주는 안내자 역할을 잘해요. 회의나 나눔 시간에 당신이 가끔 조용히 입을 열면 모두 경청하는 분위기가 될 정도로 말에 힘이 실려 있어요. 당신은 말할 가치가 있는 내용만 말하기 때문에 그 통찰이 더욱 돋보이고, 팀원들은 “역시 생각을 많이 해본 얘기야”라는 반응을 보이곤 해요. 언뜻 수수해 보이지만 울림 있는 소통 방식이 부엉이형의 매력이에요.',
      '구조형답게 체계와 원칙을 중요하게 여겨 맡은 일은 차질 없이 해내려고 애써요. 회의록 정리부터 자료 아카이브까지 꼼꼼히 챙기고, 스케줄이나 계획표를 깔끔하게 관리하는 모습에서 당신의 프로다운 면모가 드러나요. 앞에 나서지는 않아도 마음속에는 “이 방향대로만 가면 좋을 텐데...” 하고 팀의 진행을 걱정하기도 해요. 그래서 리더나 팀이 헤매는 듯할 때 슬쩍 방향을 잡아주는 조언을 건네며, 자연스럽게 팀의 나침반 역할을 하곤 해요.',
      'DSIB형인 당신은 눈에 띄지 않는 곳에서도 지혜와 성실로 팀을 세워주는 귀한 존재예요. 본인은 조연이라고 생각할지 몰라도, 당신의 조언과 정리 덕분에 사역이 한층 견고해져요. 사람을 향한 따뜻한 관심과 체계적인 지원으로 하나님께서 맡기신 영혼들을 든든하게 뒷받침하는 모습이 참 아름다워요. 앞으로도 그 지혜의 등불을 밝게 비추어서 많은 이들이 길을 찾는 데 도움을 주길 기대해요.',
      strengths: [
        '풍부한 지식과 통찰력으로 상황을 분석하고 의미 있는 조언을 해줄 수 있어요',
        '맡은 일에 대해 꼼꼼하게 준비하고 성실하게 임해 팀의 신뢰를 얻고 있어요',
        '개인에게 다정하게 다가가 공감해주는 태도로 주변 사람들에게 심리적 안정을 줘요',
        '말이 필요할 때만 핵심을 정확히 짚어 전달함으로써 조용하지만 큰 영향력을 발휘해요'
      ],
      cautions: [
        '필요한 말만 하다 보면 가끔 자신의 아이디어나 의견을 충분히 알리기 전에 넘어갈 때가 있으니 더 적극적으로 표현해보세요',
        '지나친 완벽주의로 계획 변경이나 변수에 스트레스를 받을 수 있어요. 때론 상황에 맞게 융통성 있게 대응하는 여유도 필요해요',
        '겸손한 성격 탓에 자신의 공로를 잘 드러내지 않아 일을 혼자 떠안고 지칠 수 있으니, 때로는 도움을 요청하는 것도 잊지 마세요',
        '남을 돌보느라 정작 자신의 영적 성장이나 쉼을 놓칠 위험이 있으니 자기 돌봄의 시간도 의도적으로 가져보세요'
      ],
      recommendedMinistry: [
        '양육팀 콘텐츠 제작/보조 교사: 뛰어난 준비성과 통찰력을 살려 새신자 교육 자료를 만들거나 소그룹 교사의 보조 역할을 잘 감당할 수 있어요.',
        '새가족 정착 멘토: 낯선 사람에게도 조용히 다가가 이야기를 들어주고 조언해주는 능력이 있어 새가족들이 편안히 정착하도록 돕기에 좋아요.',
        '행정/기획 서포트: 회의록 작성, 자료 정리 등 꼼꼼함이 요구되는 일을 맡으면 실수 없이 해내고, 팀이 체계적으로 움직일 수 있도록 뒤에서 지원할 수 있어요.'
      ]
    },
    'DSXL': { 
      nickname: '지휘하는 코끼리', 
      emoji: '🐘', 
      description: '지휘하는 코끼리형인 당신은 큰 덩치의 코끼리처럼 한 공동체를 이끄는 든든한 리더예요. 멀리까지 내다보는 통찰력과 풍부한 경험을 바탕으로 어디로 가야 할지 방향을 잡아 모두에게 제시해주는 모습이 인상적이에요. 새로운 사역을 계획할 때에도 전체 그림을 먼저 그리고 나서 각 단계별로 무엇이 필요한지 체계적으로 준비해요. 많은 사람들 앞에서도 당당하게 의견을 발표하고 설득력 있게 이끌기 때문에 자연스럽게 주변의 신뢰를 얻으며 팀의 선두에 서게 돼요.', 
      '이 유형은 구조지향적 성향이 강해서 개인보다는 팀이나 공동체 전체의 성장과 시스템에 관심이 많아요. 당신은 각자 따로 움직이는 것보다는 조직적인 팀워크를 중요하게 여기고, 모두가 같은 목표를 향해 질서 있게 나아갈 때 성취감을 느껴요. 그래서 사역을 할 때도 누구 한 사람 소외되거나 엇나가지 않도록 전체 인원을 아우르며 관리해요. 문제가 생기면 개인적 감정보다 원인을 분석하고 프로세스를 개선하는 데 집중하는 편이어서, 주변에서는 “우리 팀 컨트롤 타워”라는 말을 듣곤 해요.',
      '선언형답게 말이나 프레젠테이션을 통해 사람들을 이끄는 능력이 뛰어나요. 많은 사람 앞에서 비전을 제시하거나 계획을 설명할 때도 논리적이고 자신감 있게 말해 모두를 설득해요. 팀의 방향성이 흔들릴 때는 코끼리의 우렁찬 울림처럼 분명한 목소리로 “이쪽으로 갑시다!” 하고 외쳐주니, 팀원들이 안심하고 따라오게 되죠. 당신의 명확한 커뮤니케이션은 큰 조직에서도 소통 오류를 줄이고 모두를 한 마음으로 모으는 힘이 있어요.',
      '구조형 기질을 지니고 있어 모든 일을 체계적으로 추진하는 편이에요. 장기 플랜을 세우고, 예산부터 인력 배치까지 철저하게 챙기는 모습은 마치 코끼리가 기억력이 좋아 길을 잃지 않는다는 이야기처럼 안정감을 줘요. 동시에 원칙과 규정을 중시해서 팀이 규율을 지키며 움직이도록 잘 지도해요. 일을 할 때는 개인적인 친분이나 감정보다는 공정하고 효율적인 선택을 하고, 팀 전체의 성장에 방해가 되는 요소는 과감히 정리하는 결단력도 갖추고 있어요.',
      'DSXL형인 당신은 큰 비전을 실제 현실로 만들어가는 추진력이 뛰어난 리더예요. 하나님 나라를 위해 크고 담대한 계획을 세워 실행에 옮길 때, 많은 사람이 당신을 따라 힘을 모을 거예요. 당신의 조직 관리 능력과 명확한 비전 제시는 교회나 사역팀에 없어서는 안 될 동력이에요. 앞으로도 그 탁월한 리더십으로 공동체를 이끌고, 더 넓은 영향력을 펼쳐나가길 기대해요.',
      strengths: [
        '넓은 시야로 큰 그림을 그리고 전략적으로 팀의 목표와 방향을 제시할 수 있어요',
        '체계적인 기획력과 조직 관리 능력으로 복잡한 사역도 차질 없이 추진해요',
        '다수의 사람 앞에서도 논리적이고 확신 있게 소통하여 구성원들의 신뢰와 동의를 이끌어내요',
        '원칙을 지키며 공정하게 판단하고 필요할 때는 과감히 결정함으로써 조직 전체의 안정을 도모해요.'        
      ],
      cautions: [
        '큰 그림을 중시하다 보면 개인의 감정이나 작은 어려움들을 간과할 위험이 있어요. 구성원 각자의 목소리에도 귀 기울이는 여유를 가져보세요',
        '리더로서 강한 권한을 행사할 때 자칫 독단적으로 보일 수 있으니, 의사결정 전에 주변 의견을 묻고 공감을 표현하면 좋아요',
        '한 번 세운 계획이나 체계를 바꾸는 것을 어려워하는 경향이 있어 변화하는 상황에 유연하게 대응하려는 노력이 필요해요',
        '책임감이 강해 모든 짐을 혼자 지려다 지칠 수 있으므로, 때로는 업무를 위임하고 팀원들과 부담을 나누는 것도 중요해요'
      ],
      recommendedMinistry: [
        '청년부 임원/리더: 전체 청년 공동체를 섬기며 방향을 설정하고 조직을 이끌어가는 역할에 안성맞춤이에요. 큰 그림을 그리고 추진하는 능력으로 청년부를 활기차게 이끌 수 있어요',
        '단기선교/대형 아웃리치 총괄: 여러 사람을 조율하고 계획하는 데 능숙하므로 선교팀장이나 아웃리치 프로젝트 매니저로서 사역 전체를 성공적으로 이끌 수 있어요',
        '행정/기획 팀장: 행정적인 체계 수립과 예산, 일정 관리에 강점이 있어 교회의 행사 기획이나 운영위원회에서 리더십을 발휘하면 뛰어난 결과를 만들어낼 수 있어요'
      ]
    },
    'DSXB': { 
      nickname: '설계하는 비버', 
      emoji: '🦫', 
      description: '설계하는 비버형인 당신은 강가에 둑을 쌓는 비버처럼 묵묵히 공동체를 세워가는 든든한 설계자예요. 무대 앞에 서기보다는 뒤에서 체계를 잡고 기반을 다지는 역할을 즐기는 편이죠. 당신이 세심하게 준비한 계획과 자료 덕분에 겉으로 보기에는 자연스럽게 진행되는 사역 뒤에 얼마나 많은 노력과 생각이 깔려 있는지 아는 사람들은 감탄하곤 해요. 큰 소리는 내지 않아도 할 일은 착착 해내는 당신 덕분에 팀은 안정적으로 목표를 향해 나아가요.',
      '이 유형은 구조지향적으로 개인보다 공동체 전체의 효율과 질서를 중시해요. 팀이 굴러가는 시스템을 개선하고 뒷받침하는 데 열정을 느끼며, 보이지 않는 곳에서 엔진처럼 움직이죠. 예를 들어 봉사활동을 준비한다면 사람들이 모이기 전에 장소 섭외부터 필요한 물품 체크까지 빈틈없이 마쳐놓는 스타일이에요. 당신이 있으면 다른 이들은 세부 사항 걱정 없이 자기 맡은 일에 집중할 수 있어요. 당신 덕분에 모두가 한 방향으로 힘을 모으게 되는 거죠.',
      '선언형 기질을 가지고 있어 필요할 때는 의견을 분명하게 제시하고 소통을 주도하기도 해요. 다만 자기 공을 내세우기보다는 정보를 공유하고 절차를 명확히 알리는 데 초점을 맞춰요. 회의에서 진행 방법이나 일정 조율 이야기가 나오면, 조용히 준비해온 안을 설명해 모두의 동의를 이끌어내는 경우가 많아요. 이렇게 말로 팀의 운영 매뉴얼을 함께 만들어가며, 자연스럽게 실무를 총괄하는 위치에 있게 되기도 해요.',
      '구조형다운 당신은 일을 체계적으로 조직화하는 데 뛰어난 재능이 있어요. 프로젝트 초기 단계부터 실행 마무리까지 체크리스트를 만들어 따라가며, 문제가 생길 가능성을 미리 차단하는 예방 감각도 갖추고 있죠. 일정 관리나 예산 계산 같은 일도 꼼꼼하게 해내서, 팀 내에서는 “이 정도면 충분해? 더 필요한 거 없어?” 하고 모두에게 안심을 주는 존재예요. 튼튼한 댐을 쌓아 물길을 다스리는 비버처럼, 당신의 노력 덕분에 사역의 흐름이 원활하게 이어져요.',
      'DSXB형인 당신은 드러나지 않는 자리에서 사역의 기반을 든든히 하는 소중한 분이에요. 앞에 나서지는 않아도, 하나님께서는 그런 섬김을 통해 공동체를 건강하게 세워가고 계세요. 당신이 만드는 체계와 자료 하나하나는 나중에 큰 열매로 돌아와 모두에게 유익을 줄 거예요. 앞으로도 그 특별한 성실함과 지혜로 팀을 뒷받침하며, 하나님 나라의 집을 함께 지어가길 기대해요.',
      strengths: [
        '기획 단계부터 마무리까지 체계적으로 계획을 세우고 실행하여 사역을 안정적으로 진행시켜요',
        '세부사항까지 꼼꼼하게 챙기는 철저함으로 실수를 줄이고 팀원들의 신뢰를 얻고 있어요',
        '필요한 정보를 명확하게 공유하고 소통하여 모두가 같은 방향으로 움직이도록 해요',
        '드러나지 않는 곳에서도 성실하고 헌신적으로 섬겨 공동체의 든든한 버팀목이 되어줘요'
      ],
      cautions: [
        '본인이 세운 체계대로 일이 안 굴러가면 속으로 스트레스를 많이 받을 수 있으니, 예상 밖 상황에도 유연하게 대처하려고 해보세요',
        '다른 사람이 자신만큼 꼼꼼하지 못해도 이해하는 마음이 필요해요. 모든 일을 혼자 완벽하게 하려다 지칠 수 있답니다.',
        '공로를 드러내지 않는 성향 때문에 주변에서 당신의 어려움을 알아채지 못할 때가 있어요. 너무 힘들 땐 솔직하게 도움이나 이해를 구해보세요',
        '반복적이고 지루한 작업을 기피하는 경향이 있어요. 꼭 필요한 루틴 업무도 책임감을 갖고 해내려는 자세가 필요해요'
      ],
      recommendedMinistry: [
        '행정/운영 담당: 조직적이고 꼼꼼한 성향을 살려 교회의 재정, 예산 관리나 행사 기획 운영 등을 맡으면 체계적으로 일들을 진행할 수 있어요',
        '아웃리치 준비위원: 봉사나 아웃리치 행사 전반을 계획하고 물품, 일정 등을 미리 챙겨두는 역할에 적합해요. 다른 사람들이 현장 사역에 집중할 수 있게 돕는 숨은 공로자가 될 거예요',
        '멀티미디어/시스템 관리: 영상, 음향, IT 등 보이지 않는 곳에서 시스템을 구축하고 돌보는 일을 하면 당신의 세심함과 계획성이 크게 빛을 발할 거예요'
      ]
    },
    'DFIL': { 
      nickname: '순발력 있는 돌고래', 
      emoji: '🐬', 
      description: '순발력 있는 돌고래형인 당신은 밝은 에너지와 재치를 겸비한 리더예요. 예측 못한 상황에서도 물속을 유연하게 헤엄치는 돌고래처럼, 급변하는 사역 환경 속에서도 침착하게 방향을 잡아내요. 팀원들이 당황할 법한 돌발 상황에서도 “자, 이렇게 해보죠!” 하고 재치 있게 대안을 내놓는 모습에 모두가 안심하곤 해요. 언제나 긍정적인 분위기를 만들어주는 당신 덕분에 팀은 활기차고 유연하게 목표를 향해 나아가요.',
      '이 유형은 개인지향적 리더십을 발휘하여 팀원 한 사람 한 사람과 친밀하게 소통해요. 당신은 모든 사람의 이름과 취향을 금방 외우고, 각자에게 맞는 응원과 조언을 건네는 센스가 있어요. 예를 들어 아웃리치 현장에서 새로운 참가자가 긴장하고 있으면 살짝 다가가 농담 한마디로 웃게 만들며 금세 편안한 분위기를 만들어줘요. 이렇게 친근한 리더십 덕분에 팀원들은 마음을 열고 당신을 따르게 되고, 현장에서도 대상자들과 빠르게 교감할 수 있어요.',
      '선언형답게 입담과 표현력이 좋아서, 사람들 앞에서 분위기를 띄우거나 메시지를 전하는 데 능숙해요. 준비된 원고가 없어도 즉흥적으로 말하는 재주가 있고, 듣는 이들의 반응에 맞춰 유연하게 이야기를 풀어나가요. 때로는 계획에 없던 상황에서 마이크를 잡고도 유머와 진솔함을 섞어 모두의 마음을 사로잡죠. 돌고래 특유의 재기발랄함으로, 당신의 소통 능력은 언제나 청중과 팀원들에게 큰 힘을 줘요.',
      '유동형 성향 덕분에 새로운 시도와 변화를 두려워하지 않아요. 오히려 변화가 많은 환경에서 더 빛을 발하며, 남들이 엄두 못 내는 아이디어도 과감하게 실행에 옮겨요. 계획이 미흡해 보여도 일단 부딪쳐 보는 추진력 덕분에 사역 현장에서 예상치 못한 열매를 맺는 경우도 많아요. 늘 즉흥적으로 움직이는 것 같지만, 사실은 순간순간 주변을 살피고 최선을 선택하는 순간 판단력이 뛰어난 거예요.',
      'DFIL형인 당신은 팀의 분위기 메이커이자 돌파구를 만드는 리더예요. 하나님께서 주신 그 밝은 열정과 순발력으로 침체된 곳에 가도 새로운 활력을 불어넣을 수 있어요. 매사에 유연하면서도 사람을 아끼는 당신의 리더십은 주변에 큰 위로와 용기를 줘요. 앞으로도 그 기쁨의 에너지로 많은 사람들을 하나님께로 이끌고, 어디서든 귀한 변화를 만들어가길 기대해요.',
      strengths: [
        '예상치 못한 상황에서도 당황하지 않고 빠르게 대안을 찾아내는 뛰어난 순발력을 가졌어요',
        '늘 밝고 긍정적인 에너지로 주변 분위기를 북돋우며 팀 사기를 높여요',
        '말솜씨와 유머감각이 좋아 사람들의 마음을 사로잡고 자연스럽게 협력을 이끌어내요',
        '각 개인에게 친근하게 다가가 격려함으로써 팀원들과 대상자 모두에게 신뢰와 호감을 얻어요'
      ],
      cautions: [
        '즉흥적인 스타일로 움직이다 보면 세부 계획이 부족해 준비 미비로 어려움을 겪을 수 있으니, 기본적인 틀은 놓치지 않도록 해요',
        '지나치게 여러 아이디어를 동시에 시도하면 체력과 에너지가 소진될 수 있으니 우선순위를 정해 하나씩 완수하는 습관을 길러보세요',
        '변화에 능숙한 반면, 규칙이나 체계적인 관리에는 소홀해질 수 있어요. 팀원 중 구조를 세워주는 이와 균형을 맞추면 더 효과적이에요',
        '즐거운 분위기를 중시하다 보면 때론 필요한 권면이나 단호함을 놓칠 수 있으니, 사랑의 마음으로 원칙을 지켜야 할 땐 분명하게 전달하세요'
      ],
      recommendedMinistry: [
        '전도팀/노방전도 리더: 예상치 못한 상황에서도 유연하게 대처하고 사람들에게 먼저 다가가는 능력으로, 거리 전도나 아웃리치 현장에서 팀을 이끌기에 적합해요',
        '찬양 인도/예배팀 봉사: 풍부한 표현력과 열정적인 분위기 메이킹으로 예배 시간을 활기차게 이끌 수 있어요. 즉석에서 멘트를 하거나 회중과 소통하는 데도 강점이 있어요',
        '새가족 환영/친교 담당: 처음 오는 사람들과도 금세 친해지고 편안하게 해주는 친화력이 있어 새신자 환영팀이나 교제 모임 진행에 탁월한 역량을 발휘할 거예요'
      ]
    },
    'DFIB': { 
      nickname: '수다스러운 잉꼬', 
      emoji: '🦜', 
      description: '수다스러운 잉꼬형인 당신은 한 마디 한 마디로 주변에 웃음과 온기를 불어넣는 사랑스러운 소통꾼이에요. 팀에서 큰 역할을 맡지 않아도, 옆자리에서 건네는 농담 한마디로 분위기를 편하게 풀어주곤 하죠. 처음 만나는 사람에게도 금방 말을 걸고 친해지는 친화력이 뛰어나서 어디서든 금세 친구 같은 동역자가 돼요. 당신이 있는 자리에는 늘 웃음소리가 끊이질 않고, 모두가 마음을 열어 편안함을 느껴요.',
      '이 유형은 개인지향적 성향이 강해서 한 사람 한 사람과 주고받는 대화 속에서 사역의 보람을 찾아요. 당신은 대중 앞에 나서기보다는, 커피 한 잔을 앞에 두고 1대1로 진솔한 이야기를 나눌 때 힘이 나죠. 어려움에 처한 친구가 있다면 밤늦은 전화 통화로라도 지지와 위로를 아끼지 않고, 새로 온 청년이 있다면 먼저 다가가 말을 걸며 자연스럽게 어울려요. 이렇게 친밀한 교제를 통해 상대방의 마음을 열고, 보이지 않는 곳에서 사람들을 이어주는 다리가 되어줘요.',
      '선언형 기질을 지녔기에 말로 자신의 생각과 감정을 표현하는 데 스스럼이 없어요. 당신이 털어놓는 솔직한 경험담이나 유머 섞인 조언은 듣는 이들에게 큰 공감을 불러일으켜요. 격식 없이 편하게 이야기하면서도, 꼭 필요한 순간에는 신앙적인 통찰이나 복음의 메시지도 자연스럽게 전할 줄 알아요. 마치 잉꼬새가 지저귀듯 활기찬 대화의 재주로, 당신은 주변 사람들의 마음에 위로와 희망을 심어줘요.',
      '유동형 특성 덕분에 상황에 맞게 자기 역할을 유연하게 바꾸고 적응하는 능력이 있어요. 딱히 정해진 매뉴얼 없이도 눈치 빠르게 필요한 일을 찾아 움직이는 편이에요. 갑자기 준비되지 않은 일이 생겨도 당황하지 않고 “제가 해볼까요?” 하며 척척 도와나서니, 팀에서는 없어서는 안 될 윤활유 같은 존재예요. 틀에 얽매이지 않는 자유로운 스타일이라 함께 일하는 사람들에게 편안함을 주고, 새로운 시도에도 거부감이 없어요.',
      'DFIB형인 당신은 사람들의 마음을 따뜻하게 어루만지며, 어디서든 친근함으로 복음을 전하는 멋진 동역자예요. 무대 뒤편에서 조용히 한 영혼을 붙잡아주는 당신의 수고를 하나님도 기쁘게 보실 거예요. 사람들에게 다가가기를 두려워하지 않는 당신을 통해 많은 이들이 위로를 얻고 공동체에 자연스레 스며들도록 돕고 있어요. 앞으로도 그 살가운 매력과 섬김으로 주위에 사랑의 다리를 놓아주길 기대해요.',
      strengths: [
        '처음 보는 사람과도 금세 말문을 트고 친근하게 지낼 만큼 뛰어난 친화력과 소통 능력이 있어요',
        '상대방의 이야기를 잘 들어주고 공감하며 적절한 조언과 위로를 건네는 따뜻한 마음을 가졌어요',
        '격식 없이 솔직하게 경험을 나눌 수 있어서 주변 사람들이 편안함과 동질감을 느껴요',
        '상황에 따라 필요한 일을 재빠르게 찾아 돕는 유연함과 센스로 팀의 분위기를 부드럽게 만들어줘요'
      ],
      cautions: [
        '말로 분위기를 주도하다 보면 가끔 다른 사람의 말을 충분히 들어주지 못할 수 있으니 경청에도 신경 써보세요',
        '자유로운 성향 때문에 계획이나 시간 관리가 느슨해질 수 있어요. 중요한 약속과 일정은 메모해서 놓치지 않도록 주의하세요',
        '여러 사람의 고민을 들어주다 보면 정작 본인이 지칠 수 있으니, 때때로 거절하거나 휴식을 취하는 것도 필요해요',
        '친근함을 중시한 나머지 해야 할 충고나 지적을 미루지 않도록, 사랑의 마음으로 필요한 말도 용기 내어 전해보세요'
      ],
      recommendedMinistry: [
        '새가족 환영/친교팀: 처음 온 이들에게 말 걸고 어울리는 데 탁월해 새신자 환영 부서에서 분위기를 밝게 돋우고 친밀감을 형성해 줄 수 있어요',
        '상담/돌봄 사역 보조: 누군가의 이야기를 잘 들어주고 공감하는 능력이 있어, 고민이 있는 청년들과 1대1로 대화하며 마음을 나누는 돌봄 역할에 어울려요',
        '각종 행사 스태프(분위기 메이커): 수련회나 친목 행사에서 공식 진행자는 아니더라도 옆에서 농담도 하고 사람들을 챙기며 분위기를 살리는 역할을 자연스럽게 해낼 수 있어요'
      ]
    },
    'DFXL': { 
      nickname: '무리를 이끄는 늑대', 
      emoji: '🐺', 
      description: '무리를 이끄는 늑대형인 당신은 재빠른 판단과 팀원들과의 호흡으로 무리를 성공으로 이끄는 역동적인 리더예요. 변수가 많은 상황에서도 늑대 무리의 대장처럼 본능적인 상황 파악 능력으로 방향을 제시하고, 팀 전체를 민첩하게 움직이게 해요. 정해진 계획에 얽매이기보다 현장에서 느껴지는 대로 전략을 조정하며 이끄는 모습이 인상적이에요. 당신이 앞장서서 “이렇게 해보자!” 하고 외치면, 팀원들도 "좋아요, 해봐요!"하며 신나게 따라가는 화끈한 추진력이 발휘돼요.',
      '이 유형은 구조지향적 가치관을 지니고 있어 팀 전체의 목표 달성을 무엇보다 중요하게 생각해요. 동시에 유동형 리더십으로 방법은 유연하게 바꾸어가며 최적의 길을 찾아내요. 그래서 팀이 예상치 못한 문제를 만났을 때 매뉴얼에 얽매여 멈추기보다, 빠르게 플랜 B, C를 만들어 모두를 이끌어요. 전체 구성원이 각자의 역할을 잘할 수 있도록 상황에 따라 지휘 방법을 달리하며, 필요하다면 본인이 직접 발 벗고 나서서 분위기를 전환시키기도 해요.',
      '선언형답게 리더로서 의견을 분명히 밝히고 팀을 독려하는 데 거침이 없어요. 회의에서 활발하게 아이디어를 주고받으며 토론을 이끌고, 결정이 서면 특유의 열정적인 말투로 모두에게 동기를 부여해요. 카리스마 있게 앞에서 방향을 외치면서도 동시에 귀를 열어 두어, 좋은 의견이 나오면 바로 받아들이는 유연한 소통이 강점이에요. 그 덕분에 팀원들은 "우리 리더 덕에 마음껏 의견을 낼 수 있어 좋아"라고 느끼며 적극적으로 참여하게 돼요.',
      '유동형 기질 덕에 새로운 시도에도 겁이 없고 변화에 재빠르게 적응해요. 덕분에 정형화되지 않은 창의적인 사역 방식으로 공동체에 신선한 바람을 일으키곤 해요. 남들이 ‘글쎄, 될까?’ 하는 일도 "한번 해보죠!" 하며 팀을 이끌고 도전하여 예상 밖의 성과를 이루어내기도 해요. 이런 혁신적인 추진력은 조직에 활력을 불어넣지만, 방향 전환이 잦아 주변에서 따라오느라 가끔 숨 가빠할 때도 있으니 균형감을 잡는 것이 중요해요.',
      'DFXL형인 당신은 모험심과 팀워크 정신으로 뭉친 리더예요. 언제나 열린 사고로 공동체를 새로운 지평으로 이끌며, 그 과정에서 많은 사람들이 함께 성장하도록 도와요. 하나님께서 주신 담대함과 유연함을 겸비한 당신의 리더십은 특히 개척적인 사역에서 큰 빛을 발할 거예요. 앞으로도 그 대담한 팀 리드로서 공동체를 이끌고 뜻깊은 도전을 계속해나가길 기대해요.',
      strengths: [
        '변동이 많은 상황에서도 빠르게 상황을 파악하고 즉각적으로 대처 방안을 내놓아 팀을 이끌 수 있어요',
        '기존 틀에 얽매이지 않고 창의적인 방법을 시도하여 조직에 새로운 활력을 불어넣는 혁신성이 있어요',
        '열정적이고 카리스마 있는 리더십으로 팀원들의 사기를 북돋우고 적극적인 참여를 끌어내요',
        '다른 의견에도 귀 기울이고 좋은 아이디어는 바로 수용하는 유연함으로, 팀 내 협력과 소통을 원활하게 해요'
      ],
      cautions: [
        '잦은 방향 전환과 시도가 팀원들에게 혼란이나 피로감을 줄 수 있으니, 중요한 변화는 충분히 설명하고 속도를 조절하세요',
        '즉흥적으로 움직이다 보면 세밀한 계획이나 준비가 부족해질 수 있어요. 큰 그림 속에서도 디테일을 챙기는 균형을 잃지 않도록 주의해요',
        '새로운 도전을 즐기다 보니 한번에 너무 많은 일을 벌일 위험이 있어요. 팀의 역량과 자원을 고려하여 우선순위를 정하고 진행하면 더 좋아요',
        '전체 목표에 집중하느라 개개인의 부담이나 의견을 놓칠 수 있으니, 정기적으로 팀원들과 소통하며 애로사항을 살펴보는 것도 필요해요'
      ],
      recommendedMinistry: [
        '개척/비전 사역 리더: 새로운 사역이나 프로젝트를 시작하고 이끌어나가는 데 타고난 역량이 있어요. 변화에 빠르게 대처하며 팀을 이끌 수 있어 개척교회 지원이나 창의적 사역 기획에 안성맞춤이에요',
        '아웃리치/모험적 선교 팀장: 유연한 전략과 대담함으로 예측 불가한 선교 현장에서도 효과적으로 팀을 이끌 수 있어요. 즉흥적인 상황 판단과 추진력이 요구되는 해외 단기선교 등에서 돋보이는 리더십이에요',
        '창의행사/프로그램 기획자: 고정관념을 깨는 아이디어 뱅크로서 교회의 특별 행사나 청년 프로그램을 기획하면 참신하고 활기찬 결과를 만들어낼 수 있어요. 변화무쌍한 상황에서도 행사를 재미있고 원활하게 이끌어갈 거예요'
      ]
    },
    'DFXB': { 
      nickname: '재주 많은 원숭이', 
      emoji: '🐵', 
      description: '재주 많은 원숭이형인 당신은 팀에서 분위기를 띄우고 팔방미인처럼 여러 역할을 척척 해내는 다재다능한 존재예요. 상황이 바뀔 때마다 “제가 한 번 해볼게요!” 하며 이리저리 뛰어다니는 모습은 마치 나무 사이를 재빠르게 이동하는 원숭이처럼 경쾌하고 민첩해요. 한 가지 일만 고집하기보다는 팀에 필요한 일이라면 이것저것 도우며, 어디에 둬도 제 몫을 해내는 만능 해결사예요. 당신이 함께하면 팀은 유연하고 창의적으로 움직이고, 갑작스런 변수 앞에서도 금방 적응하곤 해요.',
      '이 유형은 구조지향적 사고로 팀 전체의 목표를 잘 이해하고 있지만, 유동형 성격 덕분에 그 목표에 다다르는 방법은 상황 따라 바꿀 줄 알아요. 리더의 지시에만 얽매여 있기보다 현장에서 느낀 아이디어를 적극 제안하고 실행하는 편이에요. 예를 들어 행사가 예상과 다르게 흘러갈 때, “그럼 플랜을 이렇게 바꿔볼까요?” 하고 대안을 내놓고 바로 몸을 움직여 상황을 수습해요. 틀에 박힌 방식을 답답해하는 대신 항상 더 나은 방법을 찾아보는 창의적 조력자인 셈이죠.',
      '선언형 기질이 있어서 생각나는 아이디어나 의견을 말로 잘 표현해요. 회의 때도 조용히 따라가기보다 손을 번쩍 들고 참신한 의견을 내거나 문제점을 짚어주는 경우가 많아요. 맡은 역할이 아니어도 팀의 성공을 위해 필요하면 이것저것 거들며, 아이디어뿐 아니라 직접 실행력으로 뒷받침해줘요. 당신의 이런 적극적인 팀 플레이 덕분에 주위 사람들은 “덕분에 우리 팀이 다 살아난다”라며 든든해해요.',
      '유동형답게 변화와 새 도전을 즐기는 편이라, 단조로운 반복보다는 매번 새로운 임무에서 에너지를 얻어요. 그래서 루틴한 행정보다는 현장에서 몸으로 뛰는 사역에서 실력이 발휘돼요. 여러 분야에 재능이 있어 각종 일에 금방 적응하지만, 동시에 한 가지에 집중력이 떨어질 수 있다는 점은 스스로 인지하고 있죠. 그럼에도 불구하고 팀에 급한 일이 생기면 “제가 해볼게요!” 하며 누구보다 먼저 나서주는 열혈 조력자예요.',
      'DFXB형인 당신은 변화무쌍한 사역 현장에서 빛나는 팀의 해결사예요. 정해진 자리 없이도 필요에 따라 어디에든 투입될 수 있는 유연함은 하나님께서 주신 귀한 선물이에요. 당신의 기발함과 헌신으로 많은 사역들이 예상치 못한 난관을 극복해 왔어요. 앞으로도 그 다재다능한 섬김으로 공동체에 활력을 불어넣으며 하나님께 영광 돌리길 기대해요.',
      strengths: [
        '상황에 따라 필요한 역할을 빠르게 파악하고 여러 가지 일을 동시에 소화해내는 다재다능함이 있어요',
        '즉흥적 아이디어와 창의적인 해결책을 많이 제시해 팀의 문제 해결과 발전에 기여해요',
        '적극적으로 발 벗고 나서서 동료들을 도와주고 분위기를 밝게 만드는 팀 플레이어예요',
        '변화에 민첩하게 대응하고 새로운 기술이나 임무도 금방 습득하여 팀의 빈틈을 메워주는 능력이 뛰어나요'
      ],
      cautions: [
        '동시에 여러 일에 손을 대다 보면 한 가지씩 마무리 짓는 데 소홀해질 수 있으니, 맡은 일은 우선순위를 정해 끝까지 완수하려고 해보세요',
        '본인의 재능을 믿고 준비 없이 즉흥적으로 움직이면 실수가 발생할 수 있어요. 기본적인 계획과 체크는 놓치지 않도록 주의하세요',
        '너무 앞서 나가서 도와주려다 보면 리더의 지시 체계를 혼란스럽게 할 수도 있으니, 자율성과 협조의 균형을 맞추세요',
        '반복적이고 지루한 작업을 기피하는 경향이 있어요. 꼭 필요한 루틴 업무도 책임감을 갖고 해내려는 자세가 필요해요'
      ],
      recommendedMinistry: [
        '단기선교/아웃리치 팀원: 변화 많고 예측 불가능한 선교 현장에서 기지와 적응력으로 팀을 돕는 데 제격이에요. 돌발 상황이 생겨도 다양한 임무를 맡아 해결하며 사역에 큰 힘이 될 거예요',
        '행사/캠프 스태프: 수련회나 행사 진행 중 생기는 자잘한 문제들을 즉석에서 처리하고 분위기를 띄우는 역할을 잘 감당할 수 있어요. 어디든 투입되어 빈틈을 메워주는 살림꾼으로 활약하게 될 거예요',
        '미디어/홍보팀: 창의적인 아이디어와 다재다능함을 살려 교회의 홍보 영상, 디자인, SNS 관리 등 여러 매체 작업에 폭넓게 기여할 수 있어요. 새로운 기술도 금방 익혀 유용하게 활용할 거예요'
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

    // 각 축별 비율 계산 (두 성향의 합이 100%가 되도록)
    const percentages = {
      delivery: {
        direct: Math.round((scores.D / (scores.D + scores.C)) * 100),
        companion: Math.round((scores.C / (scores.D + scores.C)) * 100)
      },
      strategy: {
        structured: Math.round((scores.S / (scores.S + scores.F)) * 100),
        flexible: Math.round((scores.F / (scores.S + scores.F)) * 100)
      },
      focus: {
        individual: Math.round((scores.I / (scores.I + scores.X)) * 100),
        structural: Math.round((scores.X / (scores.I + scores.X)) * 100)
      },
      execution: {
        leader: Math.round((scores.L / (scores.L + scores.B)) * 100),
        backup: Math.round((scores.B / (scores.L + scores.B)) * 100)
      }
    };

    const resultType = 
      (scores.D >= scores.C ? 'D' : 'C') +
      (scores.S >= scores.F ? 'S' : 'F') +
      (scores.I >= scores.X ? 'I' : 'X') +
      (scores.L >= scores.B ? 'L' : 'B');

    setResult({...results[resultType], percentages, code: resultType});
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
            <h1 className="text-2xl sm:text-4xl font-black text-gray-800 mb-2 tracking-tight">{result.nickname}</h1>
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full border border-indigo-200/50">
              <span className="text-lg sm:text-xl font-bold text-indigo-700">{result.code}</span>
            </div>
          </div>
          
          {/* 결과 카드들 */}
          <div className="space-y-4 sm:space-y-6">
            {/* 성향 분석 차트 */}
            <div className="bg-gradient-to-r from-slate-100/90 to-gray-100/90 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-4 sm:p-5">
              <h3 className="font-bold text-slate-700 mb-3 sm:mb-4 flex items-center text-sm sm:text-lg">
                <Target className="w-5 h-5 mr-3" />
                나의 성향 분석
              </h3>
              
              <div className="space-y-3">
                {/* 전달 방식 */}
                <div>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-center">
                      <span className="text-xs text-blue-600 font-medium">선포형(D)</span>
                      <div className="text-sm font-bold text-blue-700 mt-0.5">{result.percentages.delivery.direct}%</div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-full h-2 overflow-hidden border border-gray-200 shadow-inner">
                      <div className="flex w-full h-full">
                        <div 
                          className="bg-blue-500 h-2 transition-all duration-1000"
                          style={{ width: `${result.percentages.delivery.direct}%` }}
                        ></div>
                        <div 
                          className="bg-pink-400 h-2 transition-all duration-1000"
                          style={{ width: `${result.percentages.delivery.companion}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-20 text-center">
                      <span className="text-xs text-pink-500 font-medium">동행형(C)</span>
                      <div className="text-sm font-bold text-pink-600 mt-0.5">{result.percentages.delivery.companion}%</div>
                    </div>
                  </div>
                </div>

                {/* 사역 전략 */}
                <div>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-center">
                      <span className="text-xs text-green-600 font-medium">구조형(S)</span>
                      <div className="text-sm font-bold text-green-700 mt-0.5">{result.percentages.strategy.structured}%</div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-full h-2 overflow-hidden border border-gray-200 shadow-inner">
                      <div className="flex w-full h-full">
                        <div 
                          className="bg-green-500 h-2 transition-all duration-1000"
                          style={{ width: `${result.percentages.strategy.structured}%` }}
                        ></div>
                        <div 
                          className="bg-yellow-400 h-2 transition-all duration-1000"
                          style={{ width: `${result.percentages.strategy.flexible}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-20 text-center">
                      <span className="text-xs text-yellow-500 font-medium">유동형(F)</span>
                      <div className="text-sm font-bold text-yellow-600 mt-0.5">{result.percentages.strategy.flexible}%</div>
                    </div>
                  </div>
                </div>

                {/* 사역 초점 */}
                <div>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-center">
                      <span className="text-xs text-purple-600 font-medium">개인형(I)</span>
                      <div className="text-sm font-bold text-purple-700 mt-0.5">{result.percentages.focus.individual}%</div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-full h-2 overflow-hidden border border-gray-200 shadow-inner">
                      <div className="flex w-full h-full">
                        <div 
                          className="bg-purple-500 h-2 transition-all duration-1000"
                          style={{ width: `${result.percentages.focus.individual}%` }}
                        ></div>
                        <div 
                          className="bg-indigo-400 h-2 transition-all duration-1000"
                          style={{ width: `${result.percentages.focus.structural}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-20 text-center">
                      <span className="text-xs text-indigo-500 font-medium">구조형(X)</span>
                      <div className="text-sm font-bold text-indigo-600 mt-0.5">{result.percentages.focus.structural}%</div>
                    </div>
                  </div>
                </div>

                {/* 실행 방식 */}
                <div>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-center">
                      <span className="text-xs text-orange-600 font-medium">리더형(L)</span>
                      <div className="text-sm font-bold text-orange-700 mt-0.5">{result.percentages.execution.leader}%</div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-full h-2 overflow-hidden border border-gray-200 shadow-inner">
                      <div className="flex w-full h-full">
                        <div 
                          className="bg-orange-500 h-2 transition-all duration-1000"
                          style={{ width: `${result.percentages.execution.leader}%` }}
                        ></div>
                        <div 
                          className="bg-teal-400 h-2 transition-all duration-1000"
                          style={{ width: `${result.percentages.execution.backup}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-20 text-center">
                      <span className="text-xs text-teal-500 font-medium">백업형(B)</span>
                      <div className="text-sm font-bold text-teal-600 mt-0.5">{result.percentages.execution.backup}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
