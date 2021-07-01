import React, { useEffect, useState } from 'react';
import Head from '../components/commonStyle/Head';
import EduBox from '../components/commonStyle/EduBox';
import { FlexBox, Gutter } from '../components/commonStyle';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getEduSurveyList } from '../redux/thunkFn/eduAttend.thunk';
import Loading from '../components/commonStyle/Loading';

const Wrapper = styled.div`
    background:#FAFAFA;
`;

const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-40px;
    p{
        font-size:${(props)=>props.theme.fontSizes.s};
        margin: 26px 0 17px;
        font-weight:bold;
    }
`;
const BlueBtn = styled.div`
    width:45px;
    height:45px;
    border-radius:15px;
    background:#3397B9;
    ${FlexBox('center')};
    align-items: center;
    color:#ffffff;
`;
function Manage13({match}) {
    const page = match.params.page;
    const [title,setTitle] = useState({
        title:"",
        subtitle:""
    })
 
    const dispatch = useDispatch();
    const {list,loading} = useSelector(state=>state.eduSurveyListReducer);
    useEffect(() => {
        if(page === "1"){
            setTitle({
                title:"교육설문",
                subtitle:"KGB의 교육설문입니다"       
            })
        } else if ( page === "2"){
            setTitle({
                title:"교육이수",
                subtitle:"KGB의 교육이수입니다"       
            })
        }
        dispatch(getEduSurveyList(page));
        return () => {
            
        }
    }, [])
   
  return (
      <Wrapper>
            <Head title={title.title} subtit={title.subtitle}/>
            <ContentArea>
                {
                    list && list.map((item,index) => 
                    <EduBox title={item.title} date={item.edu_date}>
                        {item.edu_time}
                        {item.proc}
                        {item.board_sn}
                        {item.url ? item.url:item.movie}
                        {item.proc === "Y" ? <BlueBtn>설문</BlueBtn> :( item.proc === "N" || item.proc === "")  && !item.movie ?<BlueBtn>설문 종료</BlueBtn> : item.movie && item.proc === "" ?<BlueBtn>0</BlueBtn>:<BlueBtn>{item.proc}</BlueBtn>}
                    </EduBox>
                    )
                }
            </ContentArea>
            {
                loading && <Loading></Loading>
            }
      </Wrapper>
  );
}

export default Manage13;