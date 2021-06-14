
//로그인 초기상태
export const authInit = {
    user:{},
    loading:false,
    error:{}
}

//게시판 초기상태
export const boardInit = {
    boardList: [],
    loading: false,
    error: {}

}
//게시판 공지 초기상태
export const boardTopInit = {
    boardList: [],
    loading: false,
    error: {}

}
//게시판 상세보기 초기상태
export const boardDetailInit = {
    data: {},
    loading: false,
    error: {}
}

//게시판 등록 및 수정 초기상태
export const boardPostInit = {
    loading:false,
    result:"",
    error:{}
}

//일정관련
export const monthScInit = {
    data:[],
    loading: false,
    error:{}
}

//일정관련
export const dayScInit = {
    data:[],
    loading: false,
    error:{}
}

//작업일 변경요청 --> 지원 대기 요청 으로 수정
export const workingDayInit= {
    workingDayList:[],
    loading:false,
    error:{}
}
//작업일 변경요청 세부사항 -->지원 대기 요청 으로 수정
export const workingDayDetailInit= {
    data:[],
    loading:false,
    error:{}
}
//지원대기 요청 폼 
export const workingDayFormInit = {
    data : {
        biz_sn :"",                 //팀번호(로그인시쿠키값)
        gbn :"",                    //지원구분
        brand :"",                  //브랜드값
        manName :"",                //성명
        teamName :"",               //팀명
        code_ton :"",               //차량
        personNum :"",              //인원
        phone :"",                  //전화번호
        dayWork :"",                //이사일(YYYY-MM-DD)
        startArea :"",              //출발지
        arriveArea : "",            //도착지
        memo :"",                   //메모
        man_info_sn :"",            //개인번호(로그인시쿠키값)
        userid :"",                 //작성자아이디(로그인시쿠키값)
        username :"",               //작성자이름(로그인시쿠키값)
    },
    result:"",
    error:"",
    loading:false
}
//비리 건의하기 
export const suggestionInit = {
    loading:false,
    result:"",
    error:{}
}
export const orderIndividual = {
    data: {
        name: '',                                   //이름
        phone: '',                                  //폰번호
        call: '',                                   //전화번호
        moveForm: '',                               //이사 형태
        moveDate: '',                               //이사 날짜
        packingDate: '',                            //포장 날짜
        startingPoint: '',                          //출발지
        destination: '',                            //도착지
        distance: 0,                                //거리
        startOption:{                               //출발지 옵션
            option: [false,false,false,false],      //작업정보 옵션
            distance: 0,                            //이송거리
            floors: 0,                              //층수
            stairsFloors: 0,                        //계단층수
            price:0                                 //옵션 가격
        },
        desOption:{                                 //도착지 옵션
            option: [false,false,false,false],      //작업정보 옵션
            distance: 0,                            //이송거리
            floors: 0,                              //층수
            stairsFloors: 0,                        //계단층수
            price:0                                 //옵션 가격
        },
        optionPrice:[]
    },
    loading: false,
    error: {}
}