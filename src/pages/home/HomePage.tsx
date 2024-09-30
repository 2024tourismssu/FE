import Header from '@components/header/Header.tsx'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './styles/HomePage.module.scss'
import ActionCard from '@components/card/ActionCard.tsx'
import img1 from '@assets/images/home/top10/나루토1.jpg'
import img2 from '@assets/images/home/top10/러브밋치1.jpg'
import img3 from '@assets/images/home/top10/이강인1.jpg'
import img4 from '@assets/images/home/top10/최애의아이1.png'
import img5 from '@assets/images/home/top10/선데이플래닛.jpg'
import img6 from '@assets/images/home/top10/티빙1.jpg'
import img7 from '@assets/images/home/top10/디스이즈네버댓1.jpg'
import img8 from '@assets/images/home/top10/8.jpg'
import img9 from '@assets/images/home/top10/9.jpg'
import img10 from '@assets/images/home/top10/10.jpg'

const HomePage = () => {
   return (
      <Box>
         <Header />
         <Box className={styles.container}>
            <Typography variant={'h3'}>실시간 Top 10</Typography>
            <Typography className={styles.container__subContent}>SNS 데이터를 분석한 빅데이터 랭킹입니다.</Typography>
            <Box className={styles.container__mainContent}>
               <ActionCard
                  title={'Naruto 팝업'}
                  content={
                     '애니메이션 방영 20주년을 기념하며 나루토의 세계관을 그대로 재현한 전시회로 중요 명장면, 닌자 역사, 스토리보드, 캐릭터 아트, 영상 디스플레이, 디오라마 등 6가지의 테마 속 다양한 방법으로 큐레이팅 된 갤러리와 오직 이곳에서만 판매되는 다양한 오피셜 굿즈 컬렉션을 만나볼 수 있습니다.'
                  }
                  tags={['#나루토', '#나루토팝업', '#나루토전시회', '#나루토더갤리러', '#Naruto', '#hongdae']}
                  addr="서울 마포구 양화로 162 카카오프렌즈 홍대플래그십 스토어 B1/B2"
                  time="2024-09-27~2024-12-30 매일 10:00 - 21:00"
                  image={img1}
               />
               <ActionCard
                  title={'LUV yourself'}
                  content={
                     'LUV yourself, 스스로를 지키고 사랑하는 모습을 보여주는 패션 브랜드 #러브엠 과 향수 브랜드 #아뮈프레자일 이 만나 우리가 누구인지, 그리고 우리가 지키고자 하는 것들이 무엇인지 보여주기 위한 방법을 제안합니다. 🖤프로모션🖤 01. @luv.m_official / @amesfragile 팔로우+ 팝업 방문 스토리 or 게시물 인증하면 스페셜 디저트 증정 02. 러브엠 자사몰 신규 가입시 러브밋치 프래그런스 태그 증정 03. 러브밋치 인형🐈‍⬛ 키링 DIY 04. 나만의 커스텀 티셔츠 or 에코백 만들기'
                  }
                  tags={['#러브엠', '#러브밋치성수', '#러브밋치', '#성수팝업', '#성수데이트']}
                  addr="서울 성동구 아차산로 120 틸테이블 성수"
                  time="2024-09-21~2024-10-20 매일 11:00 - 19:00"
                  image={img2}
               />
               <ActionCard
                  title={'이강인 팝업스토어'}
                  content={
                     "서울시 마포구에 위치한 'KT 플라자 홍대애드샵플러스점'이 'KT 이강인 팬스토어'로 변신했습니다. 내부에는 AI로 학습된 이강인 선수가 고객의 이름을 호명하며 인사하는 '웰컴 메시지 키오스크'부터 이강인 선수의 락커룸, 일러스트 벽화, 유니폼 형태로 제작된 이벤트존까지 함께 만나볼 수 있는데요. 오픈을 기념해 이달 22일까지 주차별로 이강인 선수의 티셔츠 증정 이벤트도 진행 중입니다. 일별 50명 한정✅"
                  }
                  tags={['#이강인', '#이강인팝업', '#이강인팬스토어', '#kanginlee']}
                  addr="서울 마포구 양화로18길 3 KT플라자 홍대애드샵플러스점"
                  time="2024-09-04~2024-10-15"
                  image={img3}
               />
               <ActionCard
                  title={'최애의 아이 팝업'}
                  content={
                     "TVA 1기 오프닝 주제가 누적 조회수 5억 뷰를 기록한 화제의 애니메이션 '최애의 아이' 팝업스토어가 국내 최초 더현대서울에 찾아왔습니다. 이번 팝업 스토어에서만 만나볼 수 있는 한정판 굿즈를 비롯해 최애의 캐릭터와 함께 사진을 찍을 수 있는 포토부스, 구매 금액에 따라 주어지는 특전까지 다양하게 준비되어 있는데요. 뿐만 아니라 버추얼 탤런트 '홀로라이브' 팝업도 동시에 만날 수 있으니 서둘러 만나 보세요."
                  }
                  tags={['#최애의아이', '#최애의아이팝업', '#최애의아이팝업스토어', '#홀로라이브', '#홀로라이브팝업', '#애니플러스']}
                  addr="서울 영등포구 여의대로 108, 더현대 서울 B2F"
                  time="2024-09-26~2024-10-09 월-목 10:30 - 20:00, 금-일 10:30 - 20:30"
                  image={img4}
               />

               <ActionCard
                  title={'🌿[SUNDAYPLANET47 X THE HYUNDAI SEOUL]🌿'}
                  content={
                     ' 선데이플래닛47x더현대 서울 팝업스토어에 여러분을 초대합니다📍PROMOTION & EVENT -나만의 그린 핀버튼 만들기🟢 -화꾸(화분꾸미기) 토핑 뽑기 -식물 구매 시 토핑 가챠 이용 가능 -전 상품 10% 할인 -매일 달라지는 원데이특가와 타임특가!'
                  }
                  tags={['#선데이플래닛47팝업', '#식집사', '#식물', '#더현대팝업', '#신상팝업']}
                  addr="서울 영등포구 여의대로 108, 더현대 서울 5층"
                  time="2024-09-23~2024-10-06 월-목 10:30 - 20:00, 금-일 10:30 - 20:30"
                  image={img5}
               />
               <ActionCard
                  title={'tiving 팝업스토어'}
                  content={
                     '당신이 주인공이 되는 곳, TVING Highlights in Busan 팝업에 여러분을 초대합니다. 올 한 해 사랑받은 티빙의 콘텐츠, 그리고 더 큰 감동과 재미로 찾아올 기대작들을 티빙 팝업에서 만나보세요. ✅방문 방법 (1) 사전예약 완료 시 신청 날짜에 방문*사전예약 기간은 종료되었습니다. (2) 사전예약 없이 방문 시, 현장 상황에 따라 웨이팅 발생 가능'
                  }
                  tags={['#광고', '#티빙', '#TVING', '#티빙하이라이트', '#티빙하이라이트인부산', '#티빙해운대팝업', '#티빙부산팝업', '#티빙부국제팝업', '#노티드해운대', '#부산국제영화제']}
                  addr=""
                  time="2024-10-02~2024-10-05"
                  image={img6}
               />
               <ActionCard
                  title={'thisisneverthat® × Grateful Dead POP-UP'}
                  content={
                     '디스이즈네버댓과 미국의 전설적인 록밴드 그레이트풀 데드의 Fall/Winter 2024 협업 컬렉션. Dancing Bears, Steal Your Face, Skull & Roses 그리고 밴드의 상직적인 빈티지 아카이브 아트웍을 보다 다양한 아이템으로 선보입니다. 디스이즈네버댓만의 빈티지 무드로 풀어낸 thisisneverthat® × Grateful Dead 더현대 서울 팝업에 여러분을 초대합니다.'
                  }
                  tags={['#디스이즈네버댓', '#디스이즈네버댓팝업', '#그레이트풀데드', '#신상팝업']}
                  addr="서울 영등포구 여의대로 108, 더현대 서울 B2F"
                  time="2024-09-26~2024-10-02 월-목 10:30 - 20:00, 금-일 10:30 - 20:30"
                  image={img7}
               />
               <ActionCard
                  title={'이니스프리 팝업스토어'}
                  content={
                     "#광고이니스프리(@innisfreeofficial)가 성수동에 위치한 브랜드 플래그십 스토어 디아일 성수에서 '레티놀 꽈배기연구소'팝업을 진행합니다. ‘레티놀 꽈배기연구소’ 팝업은 레티놀X시카, 레티놀XPDRN의 시너지 효과를 미션을 해결하며 쉽고 재미있게 체험할 수 있도록 구성되어있는데요. 이니스프리 만의 레티놀과 효능 시너지 성분을 결합한 트러블 앰플인 ’No.1* 레티놀 시카 흔적 앰플'과 신제품 '레티놀 그린티 PDRN 스킨부스터 앰플'도 만날 수 있습니다. '모래낚시 게임'을 통해 앰플 체험분도 받아볼 수 있으니 서둘러 방문해 보세요"
                  }
                  tags={['#광고이니스프리', '#이니스프리', '#디아일성수', '#레티놀꽈배기연구소', '#INNISFREE', '#RetinolCicaAmpoule']}
                  image={img8}
               />

               <ActionCard
                  title={'시야주 팝업스토어'}
                  content={
                     '"#광고 어떤 것에 구애받지 않고 자신의 정체성을 자유롭게 표현하는 여성을 위한 디자인을 하는 시야쥬 (@siyazu_official) 팝업스토어가 찾아왔습니다. 클래식한 코트부터 미니멀한 니트까지 다양한 아이템들을 만나볼 수 있는데요. 이번 팝업에서는 온/오프라인 최저가 합리적인 가격으로 제공되며, 100% 당첨을 보장하는 다양한 프로모션도 준비되어 있으니 드뮤어한 가을을 보내고 싶다면 방문해 보세요. #SIYAZU #SIYAZUPopup #시야쥬 #시야쥬팝업 #신상팝업 #더현대팝업📌 진행 프로모션① 신상품 F/W 20% 고정 할인② 이월 가을, 겨울 상품 60~70% 세일존③ 구매 금액대별 사은품 증정 (컬러 랜덤 증정)④ 인스타그램 팔로우 이벤트📌 럭키드로우 이벤트· 입장 전 고객 참여 가능· 09/13(금) ~ 09/15(일) 3일간 진행· 럭키드로우 이벤트는 매일 새롭게 진행됩니다.(추가할인 포함 / F/W 신상품에 한함)· 1등 : 총 50% 할인 (1명)· 2등 : 총 35% 할인 (5명)· 3등 : 총 25% 할인 (전원)'
                  }
                  tags={['#광고', '#SIYAZU', '#SIYAZUPopup', '#시야쥬', '#시야쥬팝업', '#신상팝업', '#더현대팝업']}
                  image={img9}
               />
               <ActionCard
                  title={'누즈X이선 팝업스토어'}
                  content={
                     '#광고 익숙함 속 새로움이라는 누즈(@nuse.official)의 브랜드 아이텐티티를 두번째 이선, 몽상가 (@clementine.kim) 과 \u003C상상\u003E으로 풀어낸 체험 전시가 등장했습니다. 나무가 팔이 자라나는 꿈을 꾸는 재밌는 몽상을 하는 작가의 \u003C한 여름밤의 꿈\u003E을 오감으로 느낄 수 있는 곳인데요. 콜라보 굿즈와 누즈 전제품, 팝업 한정 스페셜 제품 출시까지! 다채롭고 힙한 포토존도 준비되어 있으니 서둘러 방문해 보세요. 단 이틀간 진행✅'
                  }
                  tags={['#광고', '#누즈', '#누즈팝업', '#이선', '#누즈X이선', '#팝업스토어', '#신상팝업']}
                  image={img10}
               />
            </Box>
         </Box>
      </Box>
   )
}

export default HomePage
