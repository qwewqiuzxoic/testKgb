export const authInit = {
    user:{},
    loading:false,
    error:{}
}


export const boardInit = {
    boardList: [],
    loading: false,
    error: {}

}

export const boardDetailInit= {
    data: {},
    loading: false,
    error: {}
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