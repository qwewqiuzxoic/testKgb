import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Gutter, FlexBox } from '../commonStyle';
import { modalCloase, modalOpen } from '../../redux/reducer/ModalReducer';
import { useEffect } from 'react';

const Row = styled.div`
    ${ Gutter('0 0 0 21px') };
    ${FlexBox()};
    align-items: center;
    background: ${(props) => props.theme.colors.white};
    height:50px;
    line-height: 50px;
    font-size:15px;
    font-weight:bold;
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
function DropDown({menuItem, i,clickMenu,total, totalV}) {
    const user = JSON.parse(localStorage.getItem('user'));       
    const [toggle,setToggle]=useState(false);
    const toggleDropdown = (i) =>{
        total(i);
        setToggle(!toggle);
    }
    const dispatch= useDispatch();
    const openModalWrite = (type) => {
        dispatch(modalOpen(type));
    }
    useEffect(() => {
        if(totalV !== i){
            setToggle(false);
        }
        return () => {
            
        }
    }, [totalV])
   
   
  return (
    <ul>
        <Row index={i}  onClick={(e) => toggleDropdown(i)}>
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
                        subMenu.name === "상조회" && user.brand === "KGB이사"
                        ?
                        null
                        :
                        subMenu.name === "건의함"? 
                        <span onClick={() =>openModalWrite(1)} >
                            <Li key={k}>{subMenu.name}</Li>
                        </span>
                        :user.brand !== "KGB이사" && subMenu.name ==="대리점실사체크리스트"?null
                        :
                        subMenu.name === "비리제보"? 
                        <span onClick={() =>openModalWrite(2)} >
                            <Li key={k}>{subMenu.name}</Li>
                        </span>
                        :subMenu.name === "담당자연결" ?
                        <a href={`tel:${user.brand_tel}`} >
                            <Li key={k}>{subMenu.name}</Li>
                        </a>
                        : subMenu.name === "홈페이지연결" ? 
                        <a href={user.homepage} target="_blank">
                            <Li key={k}>{subMenu.name}</Li>
                        </a>
                        :
                        <Link key={k} to={subMenu.link}  onClick={()=>clickMenu()} >
                            <Li >{subMenu.name}</Li>
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