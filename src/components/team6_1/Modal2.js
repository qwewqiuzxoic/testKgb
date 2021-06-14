import React from 'react';
import Modal from '../base/Modal';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';
import { useSelector } from 'react-redux';



const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    margin-bottom:15px;
    border-radius: 4px;
    ${Gutter('15px')};
    cursor: pointer;
`
const Row = styled.div`
    ${FlexBox()};
    align-items: center;
    margin-bottom:4px;
    
`

const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true, 200)};
`
const Section = styled.div`
    border-bottom : 1px solid #DFE5EA;
    padding-bottom:12px;
    margin-bottom:12px;
    &:last-child{
        border: 0 none;
    }
`
const ModalTit = styled.div`
  font-size :  13px;
  font-weight: bold;
  margin-bottom: 8px;
`;

function Modal2({modalOpen,closeModal}) {

    const {data,loading} = useSelector(state => state.workingDayDetailReducer)
    if(loading){
        return null;
    }else{
        return (
            <Modal open={ modalOpen } close={ closeModal } header="대기내용" subHeader="2020.01.01" bg="#FAFAFA">
            <Box>
                <Section>
                    <ModalTit>지원구분</ModalTit>
                    <Row>
                        <Dt>{data.code_worksupport}</Dt>
                        <Dd>{data.regdate}</Dd>
                    </Row>
                </Section>
                <Section>
                    <ModalTit>지원자</ModalTit>
                    <Row>
                        <Dt>[{data.code_brand}] {data.teamName}</Dt>
                        <Dd>{data.phone}</Dd>
                    </Row>
                </Section>
                <Section>
                    <ModalTit>지원내용</ModalTit>
                    <Row>
                        <Dt>이사날짜</Dt>
                        <Dd>{data.dayWork}</Dd>
                    </Row>
                    <Row>
                        <Dt>인원/차량</Dt>
                        <Dd>{data.personNum} / {data.code_ton}</Dd>
                    </Row>
                    <Row>
                        <Dt>이사지역</Dt>
                        <Dd>{data.arriveArea}</Dd>
                    </Row>
                </Section> 
                <Section>
                    <ModalTit>메모내용</ModalTit>
                    <p>지원대기입니다 지원대기입니다 지원대기입니다 지원대기입니다 지원대기입니다 지원대기입니다</p>
                </Section> 
            </Box>
        </Modal>    
          );
    }

}

export default Modal2;