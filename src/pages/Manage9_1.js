import React, { useEffect, useState } from 'react';
import Head from '../components/commonStyle/Head';
import EduBox from '../components/commonStyle/EduBox';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { totalListThunk } from '../redux/thunkFn/total.thunk';

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
const Guide = styled.div`
    position:relative;
    background:url(${process.env.PUBLIC_URL + '/images/img_edu.jpg'}) no-repeat center;
    background-size: cover;
    min-height:160px;
    border-radius: 4px;
    &:after{
        position:absolute;
        content:'';
        top:0;
        left:0;
        right:0;
        width:100%;
        height:100%;
        background: rgba(0,0,0,.8);
        border-radius: 4px;
    }
`;

const Text = styled.div`
    position:absolute;
    top:50%;
    left:0;
    right:0;
    transform: translateY(-50%);
    text-align: center;
    color:#fff;
    z-index:1;
    line-height: 1.8;
    font-size:${(props)=>props.theme.fontSizes.s};
    span{
        color:${(props)=>props.theme.colors.secondary};
    }
`;
const TextS = styled.div`
        font-size:${(props)=>props.theme.fontSizes.xs};
`;
const BlueBtn = styled.div`
    width:45px;
    height:45px;
    border-radius:15px;
    background:#3397B9;
    ${FlexBox('center')};
    align-items: center;
    img{
        width:21px;
        height:21px;
    }
`;
function Manage9_1() {
    const listRes = useSelector(state => state.totalListReducer);
    const dispatch = useDispatch();
    const [page,setPage] = useState({
        page:1,
        pageSize:5
    });
   useEffect(() => {
        dispatch(totalListThunk("realtime_list",page));
       return () => {
       }
   }, [])
  return (
      <Wrapper>
            <Head title="실시간 화상교육" subtit="KGB의 실시간화상교육입니다"/>
            <ContentArea>
                <Guide>   
                    <Text>실시간 화상교육은 가맹점사업자의 교육을 본사 방문없이<br/>화상으로 진행되는 프로그램입니다.<br/>또한, 실시간 화상교육을 진행하기 위해서는 사전 가맹점사업자<br/>본인 모바일폰에 <span>“ZOOM”</span> 어플 설치가 필요합니다.<br/>
                        <TextS>(안드로이드는 구글플레이, IOS는 앱스토어에서 <span>“ZOOM”</span> 검색 후<br/>
                        설치 가능합니다)</TextS>
                    </Text>
                </Guide>
                <p>아래의 교육일정 중 수강하시고자 하시는 해당된 교육의<br/>우측 아이콘을 클릭하여 주시기 바랍니다.</p>
                {listRes.list && listRes.list.map((item,index) => 
                    <EduBox title={item.title} date={item.edu_edate} date2={item.edu_sdate}>
                        <BlueBtn>
                            <img src={process.env.PUBLIC_URL + '/images/ico_video.png'} alt="교육수강아이콘"/>
                        </BlueBtn>
                    </EduBox>
                )}
                
               
               
            </ContentArea>
      </Wrapper>
      
  );
}

export default Manage9_1;