import React, { useEffect } from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter} from '../components/commonStyle';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getEduManual } from '../redux/thunkFn/eduAttend.thunk';

const Wrapper = styled.div`
    background:#FAFAFA;
    padding-bottom:60px;
    min-height:100vh;
`;

const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-40px;
`;
const Box = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    min-height: 296px;
    ${FlexBox('center')};
    align-items:center;
    img{
        width:92px;
        height:auto;
    }
`
function Manage6() {
    const dispatch = useDispatch();
    const {docurl} = useSelector(state=>state.eduManualReducer);
    useEffect(() => {
        dispatch(getEduManual());
        return () => {
        }
    }, [])
    
  return (
      <Wrapper>
            <Head title="매뉴얼 학습" subtit="매뉴얼 학습입니다"/>
            <ContentArea>
                <a href={docurl} target="_blank">
                    <Box>
                        <img src={process.env.PUBLIC_URL + '/images/img_manual.png'} alt="매뉴얼학습"/>
                    </Box>
                </a>
            </ContentArea>
      </Wrapper>
      
  );
}

export default Manage6;