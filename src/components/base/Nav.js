import React , {useState} from 'react';
import styled from 'styled-components';
import { Gutter, FlexBox } from '../commonStyle';
import DropDown from './DropDown';

const Wrapper = styled.div`
    margin-top:30px;
    ${ Gutter() };
    
`
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
    ${ Gutter('8px 0') };

`
const Li = styled.li`
    font-size:13px;
    ${ Gutter('8px 21px') };
    cursor:pointer;

`
const menuItems = [
    {
        name: '작업/대리점 관리',
        subMenus: [
            {name: '작업일정(월별)', link:'/Team1'},
            {name: '방문견적 및 개인오더 입력', link:'/Team3_1'},
            {name: '우리팀 톡톡', link:'/board/2'}, 

            {name: '팀단체사진 등록', link:'/Team5'}, 
            {name: '지원요청/대기', link:'/Team6_1'}, 
            {name: '긴급연락망', link:'/Team7'}, 
            {name: '상조회', link:'/Team8_1'}, 
            {name: '권역 및 대표', link:'/Team9'}, 
            {name: '담당 외주업체 ', link:'/'}
        ]
    },
    {
        name: '품질 관리', 
        subMenus: [
            {name: '칭찬글', link:'/board/3'}, 
            {name: '꾸중글', link:'/board/4'}, 
            {name: '미계약 해피콜', link:'/Manage2_1'}, 
            {name: '계약 해피콜', link:'/'}, 
            {name: 'A/S현황', link:'/Manage3_1'}, 
            {name: 'A/S처리노하우', link:'/'}, 
            {name: '현장실사체크리스트', link:'/Manage5_1'}, 
            {name: '대리점실사체크리스트', link:'/'}, 
            {name: '자가평가', link:'/Manage11'}, 
            {name: '월평가(경고현황)', link:'/'}, 
            {name: '브랜드평가 사진제출', link:'/Manage12'}
        ]
    },
    {
        name: '커뮤니티',
        subMenus: [
            {name: '공지사항', link:'/board/5'},
            {name: '자유게시판', link:'/board/1'},
            {name: '작업일정변경요청', link:'/team6_1'},
            {name: '건의함', link:'/CommunityWrite'},
            {name: '비리제보', link:'/CommunityWrite'},
            {name: '쪽지', link:'/'},
        ]
    },
    {
        name: '교육', 
        subMenus: [
            {name: '교육공지 / 이용안내', link:'/'}, 
            {name: '교육일정 / 신청', link:'/'}, 
            {name: '교육참석내역', link:'/'}, 
            {name: '교육자료실(일반 / 영상)', link:'/'}, 
            {name: '이수대상 교육', link:'/'}, 
            {name: '교육평가', link:'/'}, 
            {name: '실시간 화상교육', link:'/Manage9_1'}, 
            {name: '교육출결체크', link:'/Manage10_1'}, 
            {name: '교육설문', link:'/manage13'}, 
            {name: '매뉴얼 학습', link:'/Manage6'}, 
            {name: '', link:'/'}
        ]
    },
    {
        name: '본사업무',
        subMenus: [
            {name: '청구서관리', link:'/'}, 
            {name: '일반자료실', link:'/'}, 
            {name: '자재주문', link:'/'}, 
            {name: '자재주문내역', link:'/'}, 
            {name: '홈페이지연결', link:'/'}, 
            {name: '담당자연결', link:'/'}
        ]
    },
]



function Nav({clickMenu}) {
    //const [isOpen, setOpen] = useState(false);
    const toggleDropdown = (e) =>{
        console.log(e)
    }
  return (
    <Wrapper>
        {menuItems.map(function(menuItem, i) {
            if (menuItem.subMenus != undefined) {
                return (
                    <DropDown key={i} menuItem={menuItem} clickMenu={clickMenu} i={i}/>
                    // <ul key={i}>
                    //     <Row index={i} onClick={(e) => toggleDropdown(e)}>
                    //         <span>{menuItem.name}</span>
                    //         <IconBox>
                    //             <img src={process.env.PUBLIC_URL + '/images/ico_down.png'} alt="메뉴열기"/>
                    //         </IconBox>
                    //     </Row>
                    //     <DropdownList>                 
                    //     {menuItem.subMenus.map(function(subMenu, i) {
                    //             return <Li key={i}>{subMenu.name}</Li>
                    //         })}
                    //     </DropdownList>
                    // </ul>
                )
            } else {
                return (
                    <ul key={i}>{menuItem.name}</ul>
                )
            }
        })}
    </Wrapper>
  );
}

export default Nav;