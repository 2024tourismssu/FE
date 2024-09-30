import Header from '@components/header/Header.tsx'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './styles/HomePage.module.scss'
import cafe1 from '@assets/images/cafe1.jpg'
import ActionCard from '@components/card/ActionCard.tsx'
import img1 from '@assets/images/home/top10/1.jpg'
import img2 from '@assets/images/home/top10/2.jpg'
import img3 from '@assets/images/home/top10/3.jpg'
import img4 from '@assets/images/home/top10/4.png'
import img5 from '@assets/images/home/top10/5.jpg'
import img6 from '@assets/images/home/top10/6.jpg'
import img7 from '@assets/images/home/top10/7.jpg'
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
                  title={'골때녀 팝업'}
                  content={'Goal 때리게 재밌는 팝업스토어가 더현대서울에 상륙합니다.'}
                  tags={['#광고', '#폴햄', '#폴햄x골때리는그녀들', '#골때리는그녀들', '#골때녀', '#신상팝업']}
                  image={img1}
               />
               <ActionCard
                  title={'GO! ASTROBOY GO!'}
                  content={
                     'GO! ASTROBOY GO! 아톰 탄생 70주년 기념 팝업스토어가 찾아왔습니다. 입구에서부터 거대한 아톰 피규어와 아톰의 실제 신발까지 함께 만나볼 수 있는데요. 오직 팝업스토어에서만 구매할 수 있는 한정 굿즈 상품과 인기 식음료 (F&B)브랜드와 협업해 선보이는 아톰 간식을 비롯해 다양한 작품, 공간이 준비되어 있으니 현장에서 함께 즐겨 보세요.'
                  }
                  tags={['#아톰', '#아톰팝업', '#아톰팝업스토어', '#서울팝업', '#신상팝업', '#atom', '#아톰70주년']}
                  image={img2}
               />
               <ActionCard
                  title={'데이식스 팝업스토어'}
                  content={
                     '예매 오픈과 동시에 모든 예약이 바로 마감되었을 정도로 엄청난 주목을 받고있는 데이식스가 팝업스토어로 팬들을 만납니다. 9집 미니앨범 발매 기념으로 이번 팝업은 4명의 멤버를 캐릭터화한 데니멀즈 DENEMALZ 콘셉트로 꾸며졌는데요. 인형, 키링, 파우치, 리유저블백, 티셔츠 등 다양한 굿즈들도 한자리에서 만나볼 수 있고, 멤버들의 흔적이 담긴 포토존까지 만날 수 있습니다.'
                  }
                  tags={['#마이데이', '#Day6', '#데이식스', '#여의도데이트', '#데니멀즈', '#성진', '#YoungK', '#원필', '#도운', '#DENEMALZ']}
                  image={img3}
               />
               <ActionCard
                  title={'오래오래 함께가게 by 카카오페이'}
                  content={
                     '"#광고 카카오페이와 함께 일하는 재단의 소상공인 상생 프로젝트 오래오래 함께가게의 팝업스토어가 서울숲에 찾아왔습니다. 소상공인과 소비자를 연결하는 물류 허브콘셉트로 꾸며졌는데요. 엄청난 크기의 죠르디 포토 존부터 1&2차에서 볼 수 없었던 상품들까지! 68개 브랜드 참여로 아주 다채롭게 구성되어 있습니다. 간단한 이벤트만 참여해도 카카오 프렌즈 부채와 춘식이 풍선까지 받을 수 있으니 서둘러 방문해 보세요.'
                  }
                  tags={[
                     '#카카오페이',
                     '#kakaopay',
                     '#카카오페이앱',
                     '#카카오페이APP',
                     '#함께일하는재단',
                     '#팝업스토어',
                     '#서울숲팝업',
                     '#오래오래함께가게',
                     '#죠르디',
                     '#카카오프렌즈',
                     '#굿즈',
                     '#춘식이',
                     '#럭키드로우',
                     '#럭키박스',
                     '#춘식이풍선',
                  ]}
                  image={img4}
               />
               <ActionCard
                  title={'브레빌(Breville) 팝업스토어'}
                  content={
                     "우수한 기술력과 감각적인 디자인이 돋보이는 커피 머신, 오븐, 토스터, 블렌더 등을 선보이는 90년 역사와 전통을 가진 프리미엄 주방가전 브랜드 '브레빌(Breville)’의 팝업스토어가 찾아왔습니다. '브레빌 앳 홈'(Breville at home)의 콘셉트로 브레빌만의 라이프 스타일을 체험할 수 있는데요. 팝업 현장에서는 브레빌의 인기 제품인 '브레빌 바리스타 익스프레스 임프레스'의 블랙 색상을 선발매 합니다."
                  }
                  tags={['#브레빌', '#브레빌앳홈', '#브레빌팝업', '#Breville']}
                  image={img5}
               />
               <ActionCard
                  title={'스타벅스 팝업스토어'}
                  content={
                     ' 프리미엄 스틱커피 하나로모든 곳이 스세권!⠀종로 하이커 그라운드 앞에서9월 2일부터 9월 4일까지 3일간 운영되는스타벅스 앳홈 오프라인 이벤트✨⠀스타벅스 아메리카노 맛 그대로간편하게 즐길 수 있는스타벅스Ⓡ 프리미엄 스틱 커피도 마시고⠀이벤트 존에서 원하는 스세권 방문하면100% 당첨되는 룰렛 이벤트까지 참여 가능!⠀스타벅스Ⓡ 프리미엄 스틱커피부터스타벅스 굿즈까지 모두 놓치지 마세요💚'
                  }
                  tags={['#광고스타벅스']}
                  image={img6}
               />
               <ActionCard
                  title={'KBO 공식 스토어'}
                  content={
                     '야구를 좋아한다면 꼭 방문해야 하는 곳, KBO 공식 스토어 1호점이 탄생했습니다. 쉽게 접해볼 수 없었던 선수들의 라커룸을 재현해 놓은 포토존부터 직접 피칭 게임을 즐길 수 있는데요. 한화, LG, 롯데, NC, KT, 삼성 팀의 유니폼부터 응원 용품, 굿즈까지 다채롭게 만날 수 있습니다.✅KIA 타이거즈, 두산 베어스, SSG 랜더스, 키움 히어로즈 4개 구단은 현재 협의중'
                  }
                  tags={['#KIA', '#삼성', '#LG', '#두산', '#KT', '#SSG', '#한화', '#롯데', '#NC', '#키움', '#야구덕후', '#야구팬', '#최강야구']}
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
