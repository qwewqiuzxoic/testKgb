import React from 'react';
import styled from 'styled-components';
import { Gutter, FlexBox, ChangeFont } from '../commonStyle';
import Button from '../commonStyle/Button';

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
const Section = styled.div`
    position:absolute;
    top:50%;
    left:0;
    right:0;
    transform: translateY(-50%);
    width: calc(100% - 24px);
    margin:0 auto;
    border-radius: 4px;
    background-color: #fff;
    padding:15px;

`
const Header = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.l};
    margin:4px 0;
`
const Contents = styled.div`
    text-align: center;
    color:#82898E;
    white-space: pre-wrap;
`
const BtnArea = styled.div`
    margin-top: -16px;
`

const ConfirmModal = ( props ) => {
    const {  close, title, text } = props;
    const open = typeof(props.open) ==="object" ? props.open.check: props.open
    return (
        <Wrapper className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <>
                <Section>
                    <Header>
                        {title}
                    </Header>
                    <Contents>
                        {text.split("<br/>").map((line) => {
                            return (
                                <span>
                                  {line}
                                  <br />
                                </span>
                              );
                            })}
                    </Contents>
                    <BtnArea>
                        <Button onclick={onsubmit} bg="#3397B9" color="#ffffff" text="확인" height="44px" fontSize="12px" mgt="30px"></Button>  
                    </BtnArea>   
                </Section>
                </>
            ) : null }

        </Wrapper>
    );
}

export default ConfirmModal ;