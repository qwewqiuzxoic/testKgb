import React, { useEffect } from 'react';
import Head from '../components/commonStyle/Head';
import EduBox from '../components/commonStyle/EduBox';
import Graph from '../components/Manage11_1_4/Graph';
import { FlexBox, Gutter } from '../components/commonStyle';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import FloatingBtn from '../components/commonStyle/FloatingBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getSelfTestList } from '../redux/thunkFn/selfTest.thunk';
import Loading from '../components/commonStyle/Loading';

const Wrapper = styled.div`
    background:#FAFAFA;
`;

const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-40px;
`;
const GraphWrap = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background: ${(props) => props.isRed? 'transparent linear-gradient(90deg, #FDB97C 0%, #EE4057 100%) 0% 0% no-repeat' : 'transparent linear-gradient(90deg, #77C190 0%, #4B57A1 100%) 0% 0% no-repeat' };
    ${FlexBox('center')};
    align-items: center;

`
function Manage11_1_4() {
    const dispatch = useDispatch();
    const {list, loading,btn_flag} = useSelector(state =>state.selfTestGetList)
    useEffect(() => {
        dispatch(getSelfTestList())
        return () => {           
        }
    }, [])
  return (
      <Wrapper>
            <Head title="자가평가" subtit="KGB의 자가평가글이 노출됩니다"/>
            {loading === true ? <Loading></Loading>:
                <ContentArea>
                    {list.map((item,i)=>{
                        return(
                            <Link to={`/Manage11/${item.sn}`}>
                            <EduBox title={item.manname} date={item.regdate}>
                                <GraphWrap isRed={i% 2 ===0 ? true:false}>
                                    <Graph value={item.pointtotal} size="54" strokewidth="2"></Graph>
                                </GraphWrap>
                            </EduBox>
                            </Link>
                        )
                    })}
                </ContentArea>
            }    
            {btn_flag === "N"? null:
            
            <Link to="/Manage11">
                <FloatingBtn bg="#009B90" icon="ico_add" />
            </Link>
            }
            

      </Wrapper>
  );
}

export default Manage11_1_4;