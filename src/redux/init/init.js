
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
    error: {},
    title:""

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
export const boardPostFormInit = {
    data:{
        mode:"",
        code_brand:"",
        code_board:"",
        board_cate:" ",
        title:"",
        biz_sn:"",
        password:"",
        email:"",
        contents:"",
        userid:"",
        username:"",
        man_info_sn:""
    },
    loading:false,
    result:"",
    error:{}
}
export const boardPostFormModifyInit = {
    modify:{
        "sn":"",
        "title":"",
        "password":"",
        "email":"",
        "contents":""
    },
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

//자가평가 리스트 
export const selfTestInit = {
    result:"",
    loading:false,
    error:"",
    btn_flag:"",
    list:[]
}
//자가평가 상세페이지 결과
export const selfTestResultInit = {
    result:"",
    loading:false,
    error:"",
    content:"",
    list:[]
}
//자가평가 질문지 받아오기
export const selfTestQuestionInit={
    result:"",
    loading:false,
    error:"",
    list:[]
}
//자가평가 결과 보내기
export const selfTestPostInit= {
    result:"",
    message:"",
    loading:false,
    error:""
}


//실사체크 리스트
export const pictureCheckInit = {
    result:"",
    loading:false,
    error:"",
    list:[]
}
//실사체크 상세보기
export const pictureCheckDetailInit = {
    loading:false,
    error:"",
    data:{}
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


