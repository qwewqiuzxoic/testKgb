import React, { useEffect, useState } from 'react';
import QuestionBox from '../components/Manage11/QuestionBox';
import Head from '../components/commonStyle/Head';
import Button from '../components/commonStyle/Button';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { now } from 'moment';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    ${Gutter()};
`;
const Paging = styled.div`
    ${ChangeFont(true)};   
    font-size:  ${(props) => props.theme.fontSizes.s};
    text-align: right;
    margin:16px 0 14px;
`
const PageNow = styled.span`
    font-size:  ${(props) => props.theme.fontSizes.m};
`
const PageTotal = styled.span`
    font-size:  ${(props) => props.theme.fontSizes.xs};
    color : #82898E;
`
const BtnArea = styled.div`
    ${FlexBox()}; 
`
const BtnWrap = styled.div`
    width:49%;
`
const list = [
    {
        index:1,
        title:"01. 실명제 준수여부",
        subTitle:"실명제 준수는 브랜드의 중요한 정책입니다.",
        question:"귀 팀은 팀원 모두 홈페이지에 사진을 등록하고 작업에 항상 참여하십니까?",
        option:[
            "팀원 전원이 홈페이지에 개인사진을 등록하고 모든작업에 항상 참여한다.",
            "팀원 일부가 홈페이지에 사진등록은 하지 않았지만 작업에는 항상 참여한다.",
            "특병한 경우 홈페이지 등록된 팀원이 작업에 참여하지 않을 때도 있다.",
            "홈페이지에 등록되지 않은 팀원이 작업에 참여하는 경우도 있다."
        ]
    },
    {
        index:1,
        title:"02. 유니폼 착용",
        subTitle:"유니폼 착용은 브랜드 이미지를 만드는 기본입니다.",
        question:"귀 팀은 작업자 전원이 유니폼을 항상 착용하십니까?",
        option:[
            "작업팀 전원이 항상 착용한다.",
            "작업자 일부만 착용한다.",
            "대부분 착용하지 않는다.",
            "가끔씩 착용한다."
        ]
    },
    {
        index:1,
        title:"03. 차량도색",
        subTitle:"규정에 맞는 CI, 청결하고 깔끔한 차량은 브랜드의 얼굴입니다.",
        question:"귀 팀은 차량관리기준에 맞게 차량을 유지하고 있다고 생각하십니까?",
        option:[
            "항상 깔끔한 상태를 유지하고 있다.",
            "가능한 관리기준에 맞게 유지하려고 노력한다.",
            "일부 녹이 나 있고 도색이 벗겨졌지만 문제로 보지 않는다.",
            "차량에 신경 쓰지 않는다."
        ]
    },
    {
        index:2,
        title:"04. 규정 자재 사용",
        subTitle:"청결한 자세, 용도별 박스사용은 고객만족을 높입니다.",
        question:"귀 팀은 자재청결과 용도별 박스 기준을 지키십니까?",
        option:[
            "철저하게 지킨다.",
            "가능하면 지키는 편이다.",
            "일부 섞여 있는 경우 무방하다고 본다.",
            "사용 가능 할 때까지 사용한다."
        ]
    },
    {
        index:2,
        title:"05. 고객과의 약속 준수",
        subTitle:"고객과 약속한 사항을 지키는 것은 서비스의 출발입니다.",
        question:"귀 팀은 방문견적, 작업시간, A/S처리 등 고객과 약속한 사항을 철저히 이행하십니까?",
        option:[
            "철저히 이행한다.",
            "약속사항을 지키는 편이다.",
            "팀 작업일정에 따라 이행하지 못할 때도 있다.",
            "고객불만이 발생하지 않으면 무시한다."
        ]
    },
    {
        index:2,
        title:"06. 표준요금 준수",
        subTitle:"표준요금 준수는 브랜드의 경쟁력을 높이고 고객이탈을 방지합니다",
        question:"귀 팀은 본사에서 정한 표준요금 기준을 준수하십니까?",
        option:[
            "홈페이지에 안내된 표준요금을 준수한다.",
            "특별한 경우가 아니면 준수하는 편이다.",
            "표군요금은 가이드 라인으로 참고할 뿐 서비스 내용에 따라 다르게 적용한다.",
            "고객에 따라 요금을 다르게 적용한다."
        ]
    },
    {
        index:3,
        title:"07. 물량기준 준수",
        subTitle:"물량기준을 준수하여 신속하게 마무리하는 이사작업은 고객을 기쁘게 합니다.",
        question:"귀 팀은 5t 물량을 준수하여 신속하게 이사작업을 마루리하고 있습니까?",
        option:[
            "5t 물량기준을 준수한다",
            "기본 5t 물량에 1t 정도의 추가물량 작업을 한다.",
            "고객의 요청이 있으면 물량제한 없이 작업을 한다",
            "5t 물량을 초과하는 고객을 선호한다"
        ]
    },
    {
        index:3,
        title:"08. 메뉴얼 이행",
        subTitle:"이사서비스 메뉴얼 준수는 서비스 품질을 보장합니다.",
        question:"귀 팀은 이사서비스 메뉴얼에 있는 절차와 내용을 파악하고 그대로 준수하고 있습니까?",
        option:[
            "현장에서 익힌 방식이 최고라고 생각한다.",
            "일일이 절차대로 진행하면 오히려 작업에 장애가 된다고 생각한다.",
            "메뉴얼대로 진행하여 서비스에 문제가 발생하지 않도록 한다.",
            "부분별로 메뉴얼을 준수한다."
        ]
    },
    {
        index:3,
        title:"09. 고객과의 소통",
        subTitle:"고객과의 소통은 서비스 만족도를 높여줍니다.",
        question:"귀 팀은 이사작업 전, 후 고객의 눈높이에 맞춰 잘 소통하십니까?",
        option:[
            "고객이 서비스 내용을 이해하지 못하면 무시한다.",
            "고객과 대화를 통해 서비스 내용을 충분히 인지하고 이해하도록 한다.",
            "고객이 서비스에 만족하는데 중점을 두고 소통이 필요 없다.",
            "계약대로 작업을 하고 요금을 받으면 되는데 불필요한 대화는 필요없다고 생각한다."
        ]
    },
    {
        index:4,
        title:"10. 사전 미팅 및 고지",
        subTitle:"고객과 작업전 사전미팅 및 주요사항 고지는 이사작업을 수월하게 하고 A/S를 줄입니다.",
        question:"귀 팅ㅁ은 작업전 고객과 미팅을 통해 작업내용을 정확한 이해화 중요물품에 대한 사전고지 등을 이행하고 있습니까?",
        option:[
            "반드시 이행한다",
            "가능하면 이행한다",
            "필요한 경우에만 이행한다.",
            "계약소 낸용에 포함돼 있으므로 중요하게 생각하지 않는다."
        ]
    },
    {
        index:4,
        title:"11. 보강작업",
        subTitle:"견고한 바닥, 엘레베이터 보강작업은 고객불만과 민원을 최소화합니다.",
        question:"귀 팀은 바닥 및 ㅁ엘레베이터 보강작업을 철저히 이행하고 있습니까?",
        option:[
            "모든 작업에서 철저히 이행한다.",
            "필요할 때만 이행한다.",
            "대충 깔아 놓고 작업을 진행한다.",
            "A/S가 발생하지 않게 작업을 하므로 신경쓰지 않는다."
        ]
    },
    {
        index:4,
        title:"12. 포장작업",
        subTitle:"철저한 포장은 작업중 파손과 분실을 예방하는 보호장치입니다.",
        question:"귀 팀은 모든 물품에 대한 포장을 철저히 하고 있습니까?",
        option:[
            "모든 이사물품을 철저히 포장한다",
            "가능하면 모든 물품을 포장하려고 노력하는 편이다.",
            "파손 될 만한 물품만 포장한다.",
            "포장하지 않아도 되는 물품은 그대로 운반한다."
        ]
    },
    {
        index:5,
        title:"13. 고객요구 응대",
        subTitle:"까다로운 고객을 만족시키는 서비스는 브랜드를 더욱 빛나게 합니다.",
        question:"귀 팀은 고객의 귀찮은 교구에도 웃는 얼굴로 응대하십니까?",
        option:[
            "팀에서 들어줄 수 있는 요구에는 성실하게 응대한다.",
            "고객이 반복적으로 요구할 때는 불편한 내색을 하는 편이다.",
            "계약 외 사항을 요구하면 안된다고 말하며 마무리 한다.",
            "이사작업 외 모든 사항은 전문가에게 의뢰하도록 한다."
        ]
    },
    {
        index:5,
        title:"14. 정리정돈",
        subTitle:"완벽한 정리정돈은 고객을 행복하게 하는 마지막 포인트입니다.",
        question:"귀 팀은 주택 구조에 맞게 배치하고 깔끔하게 정리정돈한 후 마무리하십니까?",
        option:[
            "어차피 고객 손이 한 번 더 가야하므로 불만이 없을 정도로 정리만 한다.",
            "물품이 위치할 장소에 제대로 이동외었는지 확인하고 문제가 없을 경우 기본적인 청소로 마무리한다.",
            "전문가답게 주택 구조에 맞는 위치를 제시하기 보다 고객이 요구하는 대로만 배치, 정리한 후 마무리한다.",
            "모든 물품이 정확히 놓였는지, 제대로 기능하는지, 깔끔하게 정리됐는지 고객과 함께 확인 후 마무리한다."
        ]
    },
    {
        index:5,
        title:"15. 현금영수증 발행",
        subTitle:"현금영수증 발행은 법적 의무이자 지켜야 할 기본 사항입니다.",
        question:"귀 팀은 모든 이사작업에 대한 현금영수증을 발행합니까?",
        option:[
            "작업 후 모든 고객에게 현금영수증을 발행한다.",
            "현금영수증을 원하는 고객에게만 발행한다.",
            "고객을 설득하여 발행하지 않는 경우가 많다.",
            "부가세를 부담히지 않으면 현금영수증을 발행하지 않는다."
        ]
    }
]


function Manage11() {
    const [data, setData] = useState({
        reslut:[0,0,0,0,0,
                0,0,0,0,0,
                0,0,0,0,0],
        page:1,
        questionCount:[]
    })

    const increaseIndex = ()=>{
        console.log('incled'+data);
        if(data.questionCount.length<(data.page*3)){
            alert("모든문항을 체크해주세요")
            return
        }
        setData({
            ...data,
            page:data.page+1
        });
    }
    const decreaseIndex = ()=>{
       
        setData({
            ...data,
            page:data.page-1
        });
    }
    const updateData = (index,result)=>{
        console.log(index, result)
        if(!data.questionCount.includes(index)){
            setData({
                ...data,
                questionCount:data.questionCount.push(index)
            })
        }
        setData({
            ...data,
            reslut:data.reslut.map((item, idx)=>{
                if(idx === index){
                    item=result
                }
                return item
            })
        })
    }
 
    const submitData = ()=>{
        console.log(data)
    }
  return (
    <Wrapper>
        <Head title="자가평가" subtit="KGB의 자가평가글입니다"/>
        <ContentArea>
            <Paging>진행률 : <PageNow>0{data.page}</PageNow><PageTotal>/05</PageTotal></Paging>
        {
            list.map((props, index)=>
                <QuestionBox key={index} page={data.page} pageIndex={props.index} qIndex={index} title={props.title} subTitle={props.subTitle} question={props.question} option={props.option}
                updateData={updateData}/>
                )
        }
        <BtnArea>
            {data.page === 1 ? null :<BtnWrap onClick={increaseIndex}><Button bg="#F2F6F8" color='#404345' text='이전' h='40px' fs='12px' mgt='30px'/></BtnWrap>}
            {data.page === 5 ? null :<BtnWrap onClick={increaseIndex}><Button bg="#3397B9" color='#fff' text='다음' h='40px' fs='12px' mgt='30px'/></BtnWrap>}
            {data.page === 5 ?<BtnWrap onClick={submitData}><Button bg="#3397B9" color='#fff' text='제출하기' h='40px' fs='12px' mgt='30px'/></BtnWrap> : null}
        </BtnArea>
     </ContentArea>
    </Wrapper>
  );
}

export default Manage11;