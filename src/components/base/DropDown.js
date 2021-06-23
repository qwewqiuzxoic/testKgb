import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Gutter, FlexBox } from '../commonStyle';
import { modalCloase, modalOpen } from '../../redux/reducer/ModalReducer';

const Row = styled.div`
    ${ Gutter('0 0 0 21px') };
    ${FlexBox()};
    align-items: center;
    background: ${(props) => props.theme.colors.white};
    height:50px;
    line-height: 50px;
    font-size:15px;
    border-radius: ${(props) => props.index === 0 ? '30px 0 0 0' : '0'};
    border-bottom: 1px solid #DFE5EA;
    cursor:pointer;

    img{
        width:10px;
        height:auto;
    }
`
const IconBox = styled.div`
    ${FlexBox('center')};
    align-items: center;
    width:50px;
    height:50px;
`
const DropdownList = styled.div`
    background: #FBFBFB;
    padding: ${(props) => props.toggle ? '8px 0' : ''};
`
const Li = styled.li`
    font-size:13px;
    ${ Gutter('8px 21px') };
    cursor:pointer;

`
function DropDown({menuItem, i,clickMenu}) {
    const [toggle,setToggle]=useState(false);
    const toggleDropdown = (e) =>{
        setToggle(!toggle)
    }
    const dispatch= useDispatch();
    const openModalWrite = (type) => {
        dispatch(modalOpen(type))
    }
  
  return (
    <ul>
        <Row index={i}  onClick={(e) => toggleDropdown(e)}>
            <span>{menuItem.name}</span>
            <IconBox>
                { toggle ? 
                <img src={process.env.PUBLIC_URL + '/images/ico_up.png'} alt="메뉴닫기"/> : 
                <img src={process.env.PUBLIC_URL + '/images/ico_down.png'} alt="메뉴열기"/> }
            </IconBox>
        </Row>
        <DropdownList toggle={toggle}>                 
            {menuItem.subMenus.map(function(subMenu, k) {
                if(toggle){
                    return (
                        subMenu.name =="건의함"? 
                        <span onClick={() =>openModalWrite(1)} >
                            <Li key={k}>{subMenu.name}</Li>
                        </span>
                        : subMenu.name =="비리제보"? 
                        <span onClick={() =>openModalWrite(2)} >
                            <Li key={k}>{subMenu.name}</Li>
                        </span>
                        :
                        <Link to={subMenu.link}  onClick={()=>clickMenu()} >
                            <Li key={k}>{subMenu.name}</Li>
                        </Link>
                    )
                }else{
                    return null;
                }
            })}
        </DropdownList>
    </ul>
  );
}

export default DropDown;