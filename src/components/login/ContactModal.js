import React from 'react';
import styled from 'styled-components';
import ContactList from './ContactList'

import { Gutter, FlexBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`
    display: none;
    position: fixed;
    height:100%;
    bottom: 0;
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
    position: absolute;
    bottom: 340px;
    left: 0;
    right: 0;
    width:30px;
    height:30px;
    cursor: pointer;
    z-index: 1;
    background: #F3F6FB;
    border-radius: 10px;
    margin: 0 auto;
    img{
        width: 7px;
        height: auto;
        margin:0 auto;
    }
`
const Section = styled.div`
    position:absolute;
    width: 100%;
    bottom:0;
    margin:0 auto;
    border-radius: 30px 0 0 0;
    background-color: #fff;

`

const Contents = styled.div`
    ${Gutter()}
    ${FlexBox()}
    flex-wrap: wrap;
    margin-top:30px;
    &>div{
        width:49%;
        margin-bottom:35px;
    };
`

const contacts = [
    {
        team: 'KGB이사',
        name: '담당자',
        call: '01048624024',
    },
    {
        team: 'YES2404',
        name: '담당자',
        call: '01099713156',
    },
    {
        team: 'YES2424',
        name: '담당자',
        call: '01033453158',
    },
    {
        team: 'Ycap',
        name: '담당자',
        call: '01022683158',
    },
]
const ContactModal = ( props ) => {
    const {  close } = props;
    const open = typeof(props.open) ==="object" ?props.open.check: props.open
    return (
        <Wrapper className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <>
                <ModalClose className="close" onClick={close}>
                    <img src={process.env.PUBLIC_URL + `/images/ico_close.png`}/>
                </ModalClose>
                <Section>
                    <Contents>
                        {
                        contacts.map((item, i) => <ContactList nth={i+1} contact={item}></ContactList>)
                        }
                    </Contents>
                </Section>
                </>
            ) : null }
        </Wrapper>
    );
}

export default ContactModal ;