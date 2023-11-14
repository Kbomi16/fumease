let data = [
  {
    id: 'ba1',
    f_name: '블랑쉬 오 드 퍼퓸',
    f_price: 260000,
    f_scent: '순수하고 심플하면서도 개성이 강한 향.',
    f_note: '화이트 로즈, 바이올렛, 블론드 우드'
  },
  {
    id: 'ba2',
    f_name: '발 다프리크 오 드 퍼퓸',
    f_price: 260000,
    f_scent: '따뜻하고 로맨틱한 베티버 향.',
    f_note: '베르가못, 바이올렛, 블랙 앰버'
  },
  {
    id: 'ba3',
    f_name: '라 튤립 오 드 퍼퓸 ',
    f_price: 260000,
    f_scent: '한 계절에 처음 맺는 꽃 봉오리처럼 활기넘치고 매력적이고 낙천적인 느낌의 향.',
    f_note: '루바브, 튤립, 블론드 우드'
  },
  {
    id: 'ba4',
    f_name: '집시 워터 오 드 퍼퓸',
    f_price: 260000,
    f_scent: '신화적 열정에 바탕을 둔 집시의 삶을 미화한 향.',
    f_note: '베르가못, 인센스, 앰버'
  },
  {
    id: 'ba5',
    f_name: '모하비 고스트 오 드 퍼퓸',
    f_price: 260000,
    f_scent: '자메이칸 네스베리의 신선한 향과 샌달우드, 목련등의 향.',
    f_note: '자메이칸 네스베리, 샌달우드, 시더우드'
  },
  {
    id: 'ba6',
    f_name: '슈퍼 시더 오 드 퍼퓸',
    f_price: 260000,
    f_scent: '시더우드의 강력하면서 모던함을 표현한 향',
    f_note: '로즈페탈, 버지니아 시더우드, 실크 머스크'
  },
  {
    id: 'ba7',
    f_name: '인플로레센스 오 드 퍼퓸',
    f_price: 260000,
    f_scent: '봄의 시작을 축복하기 위해, 봄이 그 절정에 달했을 때 만개하는 꽃의 향.',
    f_note: '장미 잎, 매그놀리아, 후레쉬 재스민'
  },
  {
    id: 'ba8',
    f_name: '로즈오브노맨즈랜드 오 드 퍼퓸',
    f_price: 260000,
    f_scent: '터키쉬 로즈페탈과 핑크페퍼콘의 부드러우면서 스파클링한 느낌으로 시작하여 가장 시크한 장미향을 구현',
    f_note: '터키쉬 로즈페탈, 로즈 앱솔루트, 시트러스'
  },
  {
    id: 'ba9',
    f_name: '아코드 우드 오 드 퍼퓸',
    f_price: 260000,
    f_scent: '스파이스로 덮인 파우더리 머스크와 함께 후레쉬한 레더 아코드와 블론드 우드에서 만들낸 복잡하면서도 매혹적인 향',
    f_note: '블랙베리, 레더 아코드, 파우더리 머스크'
  },
  {
    id: 'd1',
    f_name: '로 데 헤스페리데스\n오드 뜨왈렛',
    f_price: 228000,
    f_scent: '스파이시한 향으로 강화된 시트러스 과일이 우아한 생기를 더해주는 향',
    f_note: '비터 오렌지, 레몬, 페퍼민트, 임모르뗄'
  },
  {
    id: 'd3',
    f_name: '도손\n오 드 향수',
    f_price: 228000,
    f_scent: '어둠 속에서 하얀 꽃이 피어나는 황혼의 시간을 연상시키는 향을 지닌 튜베로즈, 자스민과 오렌지 꽃향',
    f_note: '튜베로즈, 오렌지 블라썸, 자스민, 앰버우드'
  },
  {
    id: 'd4',
    f_name: '오듀엘\n오 드 향수',
    f_price: 228000,
    f_scent: '바닐라의 달콤하고 빛나는 창포향과 스모키한 시프리올 향과 결합된 강렬한 스파이시한 향.',
    f_note: '바닐라, 핑크페퍼콘, 사이프리올, 인센스'
  },
  {
    id: 'd5',
    f_name: '오 드 민테\n오 드 향수',
    f_price: 228000,
    f_scent: '제라늄의 생동감 넘치는 꽃향기와 파출리의 깊이있는 향.',
    f_note: '파출리, 제라늄, 민트, 로즈옥사이드'
  },
  {
    id: 'd6',
    f_name: '제라늄 오도라타\n오드 뜨왈렛',
    f_price: 196000,
    f_scent: '사일리지가 아닌 단추 구멍에서 흔히 볼 수 있는 꽃, 감귤류와 향신료로 남성 피부 강화',
    f_note: '제라늄, 카다몬, 통카빈, 베티버'
  },
  {
    id: 'd7',
    f_name: '로 데 헤스페리데스\n오드 뜨왈렛',
    f_price: 196000,
    f_scent: '스파이시한 향으로 강화된 시트러스 과일이 우아한 생기를 더해주는 그린 스파클링 향.',
    f_note: '비터 오렌지, 레몬, 페퍼민트, 임모르뗄'
  },
  {
    id: 'd8',
    f_name: '로 드 네롤리\n오드 뜨왈렛',
    f_price: 196000,
    f_scent: '꽃가루와 녹색 잎의 향기로, 생기 넘치는 과수원 전체의 향.',
    f_note: '네롤리, 베르가못, 오렌지블라썸, 비즈왁스'
  },
  {
    id: 'd9',
    f_name: '볼류트\n오 드 향수',
    f_price: 228000,
    f_scent: '은은한 담배 향, 파우더리한 메이크업 향.',
    f_note: '허니, 오포포낙스, 시나몬, 아이리스 어코드'
  },
  {
    id: 'di1',
    f_name: '미스 디올\n블루밍 부케 오 드 뚜왈렛',
    f_price: 96000,
    f_scent: '부드럽고 상쾌한 느낌을 선사하며, 은은한 스파이시함이 감도는 플로럴 과 포근함',
    f_note: '베르가못 에센스, \n다마스크 로즈 에센스, 화이트 머스크'
  },
  {
    id: 'di2',
    f_name: '쟈도르 퍼퓸 도 오 드 퍼퓸',
    f_price: 115000,
    f_scent: '상쾌하고 화창하며 부드러운 향',
    f_note: '쟈스민, 백목련'
  },
  {
    id: 'di3',
    f_name: '디올리비에라 오 드 퍼퓸',
    f_price: 205000,
    f_scent: '여름 감성을 불러일으키면서도 어느 시즌에나 잘 어울리는 밝고 상쾌하며 매혹적인 향.',
    f_note: '프루티 플로럴, 피그, 로즈 노트'
  },
  {
    id: 'di4',
    f_name: '쟈도르 로르',
    f_price: 115000,
    f_scent: '순수하고, 마음을 사로잡는 즉각적인 매력의 관능미',
    f_note: '오렌지 블라썸, 자스민 그랜디플로럼, 센티폴리아 로즈 앱솔루트'
  },
  {
    id: 'di5',
    f_name: '소바쥬\n오 드 퍼퓸',
    f_price: 138000,
    f_scent: '상쾌한 과일향으로, 강렬하고 고급진 향.',
    f_note: '칼라브리아산 베르가못, 파푸아뉴기니산 바닐라 앱솔루트'
  },
  {
    id: 'di6',
    f_name: '디올 옴므\n오 드 뚜왈렛',
    f_price: 120000,
    f_scent: '가공되지 않은 우드와 다채로운 부드러움으로 관능적인 남성성 향.',
    f_note: '아틀라스 시더, 패츌리 하트, 베티버'
  },
  {
    id: 'di7',
    f_name: '라 콜렉시옹 프리베 크리스챤 디올\n그리 디올 오 드 퍼퓸',
    f_price: 205000,
    f_scent: '모던함을 더한 대담하고 우아한 신비로운 시프레 향',
    f_note: '플로럴, 우디, 시프레'
  },
  {
    id: 'di8',
    f_name: '소바쥬\n오 드 뚜왈렛',
    f_price: 122000,
    f_scent: '상쾌하며 진정한 남성의 향.',
    f_note: '레지오 칼라브리아산 베르가못, 앰브록산'
  },
  {
    id: 'j1',
    f_name: '라임 바질 앤 만다린 코롱',
    f_price: 220000,
    f_scent: '카리브해의 산들바람을 맞은 라임에서 영감을 얻은 시그니처 시트러스 향',
    f_note: '만다린, 바질, 앰버우드'
  },
  {
    id: 'j2',
    f_name: '포머그래니트 누와 코롱',
    f_price: 220000,
    f_scent: '불가사의한 저녁의 관능적인 매력에서 영감을 얻은, 과일 느낌을 가미한 우디 향',
    f_note: '포머그래니트, 카사블랑카 백합, 과이액목'
  },
  {
    id: 'j3',
    f_name: '잉글리쉬 페어 앤 프리지아 코롱',
    f_price: 220000,
    f_scent: '화이트 프리지아 부케향, 배의 신선함, 호박, 파출리, 우디향',
    f_note: '킹 윌리엄 페어, 프리지아, 파출리'
  },
  {
    id: 'j4',
    f_name: '피오니 앤 블러쉬 스웨이드 코롱',
    f_price: 220000,
    f_scent: '작약에 더해진 붉은 사과의 향기로운 과즙과 순수한 자스민, 장미 그리고 카네이션, 블러쉬 스웨이드의 부드러운 관능미',
    f_note: '빨간 사과, 피오니, 스웨이드'
  },
  {
    id: 'j5',
    f_name: '우드 세이지 앤 씨 솔트 코롱',
    f_price: 220000,
    f_scent: '신선한 바다 공기와 투박한 자연의 향기, 세이지의 우디한 흙 내음',
    f_note: '암브레트 씨, 씨 쏠트, 세이지'
  },
  {
    id: 'j6',
    f_name: '블랙베리 앤 베이 코롱',
    f_price: 220000,
    f_scent: '블랙베리 과즙으로, 매력적이고 생기 넘치는 상쾌한 느낌의 향',
    f_note: '블랙베리, 월계수 잎, 시더우드'
  },
  {
    id: 'j7',
    f_name: '허니서클 앤 다바나 코롱',
    f_price: 220000,
    f_scent: '다바나의 아로마 향에 로즈 향이 가미되고, 모스의 우디함을 더해 주어 햇살을 담아 따뜻해진 향. 선명하고 화사한 행복감을 표현하는 향',
    f_note: '다바나, 잉글리쉬 허니서클, 모스'
  },
  {
    id: 'j8',
    f_name: '미모사 앤 카다멈 코롱',
    f_price: 220000,
    f_scent: '골드빛 미모사의 달콤한 향과 카다멈의 스파이시함,  다마스크 로즈와 파우더리한 헬리토오프 아래 크리미한 통카와 부드러운 샌달우드 향',
    f_note: '카다멈, 미모사, 통카 빈'
  },
  {
    id: 'j9',
    f_name: '레드 로즈 코롱',
    f_price: 220000,
    f_scent: '일곱가지 장미가 조합된 관능적인 향으로, 으깬 바이올렛 잎과 레몬이 조합되어 신선한 부케향',
    f_note: '레몬, 레드 로즈 어코드, 벌집'
  },
  {
    id: 'n1',
    f_name: 'OPEN ARMS',
    f_price: 158000,
    f_scent: '비터오렌지의 달콤 쌉싸름하며 잔잔한 네롤리 향을 품은 시원한 우디 향',
    f_note: '비터오렌지, 페티그레인, 네롤리, 전나무'
  },
  {
    id: 'n2',
    f_name: 'NEROLI DREAM',
    f_price: 158000,
    f_scent: '상쾌하고 부드러운 네롤리와 오렌지 블러썸, 은방울꽃 향',
    f_note: '네롤리, 오렌지 블러썸, 뮤게, 머스크'
  },
  {
    id: 'n3',
    f_name: 'SIMPLE GARDEN',
    f_price: 158000,
    f_scent: '톡 쏘는 라임의 청량함과 베르가못의 우아함, 시더우드의 차분한 향',
    f_note: '베르가못, 라임, 클라리세이지, 시더우드'
  },
  {
    id: 'n4',
    f_name: 'GENTLE NIGHT',
    f_price: 158000,
    f_scent: '달콤한 스웨이드와 차분한 시더우드, 바닐라와 머스크가 어우러진 포근함과 중성적인 향',
    f_note: '무화과, 화이트 티 , 스웨이드, 시더우드'
  },
  {
    id: 'n5',
    f_name: 'SANTAL CREAM',
    f_price: 158000,
    f_scent: '베티버와 샌달우드, 신선한 무화과와 카다멈의 향',
    f_note: '샌달우드, 베티버, 무화과, 카다멈'
  },
  {
    id: 'n6',
    f_name: 'GAIAC FLOWER',
    f_price: 158000,
    f_scent: '스모키하게 변주되는 오리엔털 플로럴의 순수함과 관능적인 향',
    f_note: '와일드 로즈, 가이악우드, 앰버, 바닐라'
  },
  {
    id: 'n7',
    f_name: 'FORGET ME NOT',
    f_price: 158000,
    f_scent: '핑크 페퍼, 앰버, 그린 노트가 빚어낸 청량하고 신비로운 시트러스 향',
    f_note: '바질, 그린, 핑크 페퍼, 앰버'
  },
  {
    id: 'n8',
    f_name: 'FOR REST',
    f_price: 158000,
    f_scent: '히노키와 유자, 넛멕과 프랑킨센스가 완성하는 섬세하고 모던한 휴식의 향',
    f_note: '히노키, 프랑킨센스, 유자, 터키쉬 로즈'
  },
  {
    id: 'n9',
    f_name: 'IN THE SHOWER',
    f_price: 158000,
    f_scent: '패출리의 녹진함과 비터오렌지, 캄파리 어코드의 경쾌함이 어우러진 향',
    f_note: '가이악우드, 패출리, 비터 오렌지, 캄파리'
  },
  {
    id: 'san1',
    f_name: '프리지아 오드코롱',
    f_price: 145000,
    f_scent: '싱그럽고 깨끗한 프리지아 어코드와 바이올렛, 센티폴리아 로즈가 섬세함을 더해주고 아이리스와 머스크가 파우더리 어코드를 더해주는 향',
    f_note: '프리지아 어코드, 바이올렛, 아이리스'
  },
  {
    id: 'san2',
    f_name: '로사 가데니아 오드코롱',
    f_price: 145000,
    f_scent: '놀라움, 매혹, 부드러운 꽃의 향',
    f_note: '베르가못, 가데니아, 샌달우드'
  },
  {
    id: 'san3',
    f_name: '엔젤 디 피렌체 오드코롱',
    f_price: 145000,
    f_scent: '복숭아와 오렌지의 달콤한 향과 바닐라의 우아함이 어우러진 향\n',
    f_note: '복숭아, 브랙 커런트, 샌달우드'
  },
  {
    id: 'san4',
    f_name: '멜로그라노 오드코롱',
    f_price: 145000,
    f_scent: '석류 나무의 풍요와 번영의 의미를 표현하여 따뜻한 환대의 감각을 깨워 주는 향',
    f_note: '베르가못, 장미, 오크 모스'
  },
  {
    id: 'san5',
    f_name: '매그놀리아 오드퍼퓸',
    f_price: 234000,
    f_scent: '매그놀리아 화이트 플라워의 매혹과 화려함, 무게감을 더한 황홀한 향',
    f_note: '화이트 로즈, 태산목, 앰버'
  },
  {
    id: 'san6',
    f_name: '로사 노벨라 오드코롱',
    f_price: 145000,
    f_scent: '시트러스한 은은한 장미와 화이트 플라워 향과 어우러지며, 오레가노와 페퍼, 그린 허브 노트의 향',
    f_note: '레몬, 캐비지 로즈, 파출리'
  },
  {
    id: 'san7',
    f_name: '알바 디 서울 오드코롱',
    f_price: 145000,
    f_scent: '새벽 숲을 거닐 듯 소나무의 그리너리와 우디한 향',
    f_note: '베르가못, 바이올렛 잎, 파출리'
  },
  {
    id: 'san8',
    f_name: '타바코 토스카노 오드코롱',
    f_price: 145000,
    f_scent: '우디 오리엔탈 노트가 스모키 바닐라 노트와 섞여 신비롭고 부드러운 향',
    f_note: '베르가못, 자작나무, 시더우드'
  },
  {
    id: 'san9',
    f_name: '비자리아 오드퍼퓸',
    f_price: 234000,
    f_scent: '쌉쌀함과 새콤, 달콤한 향기가 신선한 과즙처럼 터지고, 비자리아 열매의 독보적인 시트러스 향',
    f_note: '비자리아, 오렌지 블라썸, 시더우드'
  },
  {
    id: 't1',
    f_name: '퍼퓸 카모',
    f_price: 139000,
    f_scent: '진득한 카모마일, 부드러운 나무결, 머스크 향',
    f_note: 'Top: Clary sage, Chamomile\nMiddle: Water, Cypriol\nBase: Amber, Musk, Blond wood'
  },
  {
    id: 't2',
    f_name: '퍼퓸 버가샌달',
    f_price: 139000,
    f_scent: '지중해의 베르가못, 쌉싸래한 청귤, 샌달우드',
    f_note: 'Top: Bergamot, Lime, Cardamom\nMiddle: Cypriol, Cedar Atlas, Cucumber\nBase: Amyris, Sandalwood, Leather'
  },
  {
    id: 't3',
    f_name: '퍼퓸 쏘,선셋',
    f_price: 139000,
    f_scent: '따뜻한 공기, 오렌지 껍질, 머스크',
    f_note: 'Top: Orange, Carrot Seed, Pimento Berry\nMiddle: Tonka Bean\nBase: Musk, Vanilla, Patchouli, Sandalwood, Vetiver'
  },
  {
    id: 't4',
    f_name: '퍼퓸 바이링거',
    f_price: 129000,
    f_scent: '마시멜로, 오렌지 블라섬, 타바코',
    f_note: 'Top: Marshmallow, Orange Blossom\nMiddle: Tobacco, Tonka Bean\nBase: Musk'
  },
  {
    id: 't5',
    f_name: '퍼퓸 스웨이드페어',
    f_price: 139000,
    f_scent: '시원한 배, 스웨이드, 쌉쌀한 갈바넘',
    f_note: 'Top: Pear, Whisky, Galbanum\nMiddle: Suede\nBase: Tonka Bean, Amber, Musk, Cypriol'
  },
  {
    id: 't6',
    f_name: '퍼퓸 화이트다즐링',
    f_price: 129000,
    f_scent: '화이트 샴페인, 다즐링 티, 크리미한 머스크',
    f_note: 'Top: White Champagne\nMiddle: Black Tea, Peach\nBase: Musk, Sandalwood'
  },
  {
    id: 't7',
    f_name: '퍼퓸 헤이스텍스',
    f_price: 139000,
    f_scent: '건초더미, 짙은 향의 럼, 패츌리',
    f_note: 'Top: Pink Pepper, Juniper\nMiddle: Heliotrope, Cyclamen, White Rose\nBase: Rum, Tonka Bean, Patchouli, Amber'
  },
  {
    id: 't8',
    f_name: '퍼퓸 언노운오드',
    f_price: 139000,
    f_scent: '라즈베리 시럽을 한 방울 떨어뜨린 듯한 달콤함과 묵직한 침향나무에서 오는 잔향의 젖은 흙과 그을린 나무냄새',
    f_note: 'Top: Eucalyptus, Lavender\nMiddle: Raspberry Syrup, Leather\nBase: Oud(Agarwood), Patchouli, Amber'
  },
  {
    id: 't9',
    f_name: '퍼퓸 프렌치니들',
    f_price: 129000,
    f_scent: '우디 스파이시, 피어나는 안개, 진한 녹음',
    f_note: 'Top: Pink Pepper, Elemi\nMiddle: Olibanum, Iris, Cypriol\nBase: Cedarwood, Hinoki, Pine French Needle'
  }
];
export default data;