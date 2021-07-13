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
    img{
        width:21px;
        height:21px;
    }
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
                title:"이수대상교육",
                subtitle:"KGB의 이수대상교육입니다"       
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
                    <EduBox page={page} title={item.title} date={item.edu_date} time={item.proc}>
                        {/* {item.edu_time} */}
                        {/* {item.proc} */}
                        {/* {item.board_sn} */}
                        {/* {item.url ? item.url:item.movie} */}
                        {item.proc === "Y" ? <a href={item.url} target="_blank"><BlueBtn>설문</BlueBtn></a> :( item.proc === "N" || item.proc === "")  && !item.movie ?<BlueBtn>설문 종료</BlueBtn> : item.movie && item.proc === "" ?
                        <a target="_blank" href={item.movie}>
                        <BlueBtn><img src={process.env.PUBLIC_URL + '/images/ico_video.png'} alt="교육수강아이콘"/></BlueBtn>
                        </a>
                        :
                        <a target="_blank" href={item.movie}>
                        <BlueBtn><img src={process.env.PUBLIC_URL + '/images/ico_video.png'} alt="교육수강아이콘"/></BlueBtn>
                        </a>
                        }
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