import React from 'react';
import styled from 'styled-components';
import { Gutter, FlexBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    &.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show .3s;
}
`
const ModalClose = styled.button`
    position:absolute;
    top:0;
    right:0;
    width:50px;
    height:50px;
    cursor: pointer;
    img{
        width: 18px;
        margin:0 auto;
    }
`
const Section = styled.div`
    position:absolute;
    width: 100%;
    height:90%;
    bottom:0;
    margin:0 auto;
    border-radius: 30px 30px 0 0;
    background-color: #fff;
    overflow: hidden;
    }
`
const Header = styled.div`
    position: relative;
    height:50px;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.l};
    border-bottom: 1px solid #DFE5EA;

`
const Contents = styled.div`
    ${Gutter()}
    margin-top:25px;
`

const Modal = ( props ) => {
    const { open, close, header } = props;
    return (
        <Wrapper className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <>
                <ModalClose className="close" onClick={close}>
                    <img src={process.env.PUBLIC_URL + `/images/btn_x.svg`}/>
                </ModalClose>
                <Section>
                    <Header>
                        {header}
                    </Header>
                    <Contents>
                        {props.children}
                    </Contents>
                </Section>
                </>
            ) : null }
        </Wrapper>
    );
}

export default Modal ;