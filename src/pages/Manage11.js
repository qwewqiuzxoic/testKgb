import React, { useEffect, useState } from 'react';
import QuestionBox from '../components/Manage11/QuestionBox';
import Head from '../components/commonStyle/Head';
import Button from '../components/commonStyle/Button';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { now } from 'moment';
import TextArea from '../components/Manage11/mComponent/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { getSelfTestQuestion, getSelfTestResult, postSelfTest } from '../redux/thunkFn/selfTest.thunk';
import { Link, useHistory } from 'react-router-dom';
import Loading from '../components/commonStyle/Loading';

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
    justify-content: flex-end;
`
const BtnWrap = styled.div`
    width:49%;
    &.mgr{
        margin-right:2%;
    }
`


function Manage11({match}) {
    const sn = match.params.sn;
    const [data, setData] = useState({
        reslut:[5,5,5,5,5,
                5,5,5,5,5,
                5,5,5,5,5],
        page:1,
        questionCount:[],
        text:""
    })

    const increaseIndex = ()=>{
        if(data.questionCount.length<(data.page*3)&& sn ===undefined){
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
        if(sn!==undefined){
            return 
        }
        if(!data.questionCount.includes(index)){
            console.log(123123)
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
    const setText = (event) =>{
        setData({
            ...data,
            text:event.target.value
        })
    }
    const history = useHistory();
    const callback = ()=>{
        history.push('/Manage11_1_4');
    }
    const submitData = ()=>{
        dispatch(postSelfTest(data.reslut,data.text,callback))
    }
    const dispatch = useDispatch();
    const {list,loading} = useSelector(state=> sn!==undefined? state.selfTestGetResult:state.selfTestGetQuestion);
   useEffect(() => {
       if(sn !== undefined){
            dispatch(getSelfTestResult(sn,callback));
       }else{
            dispatch(getSelfTestQuestion());
       }
       return () => {
           
       }
   }, [])
  return (
    <Wrapper>
        <Head title="자가평가" subtit="KGB의 자가평가글입니다"/>
        <ContentArea>
            {loading && <Loading></Loading>}
            <Paging>진행률 : <PageNow>0{data.page}</PageNow><PageTotal>/05</PageTotal></Paging>
        {
            list.map((props, index)=>
                <QuestionBox key={index} page={data.page} pageIndex={Math.round((index+2)/3)} qIndex={index} title={props.title1} subTitle={props.title2} question={props.question} option={[props.answer1,props.answer2,props.answer3,props.answer4]}  
                optionValue={[props.answer1_p,props.answer2_p,props.answer3_p,props.answer4_p]}
                updateData={updateData} check={sn!==undefined?props.point : data.reslut[index]}
                disable={sn !== undefined?true:false}/>
                )
        }
        {data.page === 5? <TextArea setText={setText} text={data.text}/> : null}
        <BtnArea>
            {data.page === 1 ? null :<BtnWrap onClick={decreaseIndex} className="mgr"><Button bg="#F2F6F8" color='#404345' text='이전' h='40px' fs='12px' mgt='30px'/></BtnWrap>}
            {data.page === 5 ? null :<BtnWrap onClick={increaseIndex}><Button bg="#3397B9" color='#fff' text='다음' h='40px' fs='12px' mgt='30px'/></BtnWrap>}
            {data.page === 5 && sn === undefined?<BtnWrap onClick={submitData}><Button bg="#3397B9" color='#fff' text='제출하기' h='40px' fs='12px' mgt='30px'/></BtnWrap> :
             null}
        </BtnArea>
     </ContentArea>
    </Wrapper>
  );
}

export default Manage11;