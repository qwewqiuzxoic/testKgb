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
}
`
const ModalClose = styled.button`
    position:absolute;
    top:0;
    right:0;
    width:50px;
    height:50px;
    cursor: pointer;
    &.noBtn{
        display:none;
    }
    img{
        width: 18px;
        margin:0 auto;
    }
`
const Section = styled.div`
    position:absolute;
    width:calc(100% - 24px);
    height:calc(100% - 100px);
    top:50px;
    left:0;
    right:0;
    margin:0 auto;
    border-radius: 4px;
    background-color: ${(props) => props.bg ? props.bg : '#fff'};
    overflow-Y: scroll;
    }
`
const Header = styled.div`
    position: relative;
    padding: 15px 0;
    font-weight: bold;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.l};
    border-bottom: 1px solid #DFE5EA;
    background-color: #fff;

    span{
        display:block;
        margin-top:2px;
        ${ChangeFont(true, 200)};
        font-size: ${(props) => props.theme.fontSizes.m};
        color:#ACB6BC;
    }
`
const Contents = styled.div`
    ${Gutter()}
    margin-top:25px;
`

const PopUp = ( props ) => {
    const { open, close, btnX } = props;
    return (
        <Wrapper className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <> 
                <ModalClose className={ btnX ? '' : 'noBtn' } onClick={close}>
                    <img src={process.env.PUBLIC_URL + `/images/btn_x.svg`}/>
                </ModalClose>
                <Section>
                    {props.children}
                </Section>
                </>
            ) : null }
        </Wrapper>
    );
}

export default PopUp ;