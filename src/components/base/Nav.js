import React , {useState} from 'react';
import styled from 'styled-components';
import { Gutter } from '../commonStyle';
import DropDown from './DropDown';

const Wrapper = styled.div`
    margin-top:30px;
    ${ Gutter() };
    
`
const menuItems = [
    {
        name: '대리점/팀 관리',
        subMenus: [
            {name: '작업일정(월별)', link:'/Team1/1'},
            {name: '방문견적 및 개인오더 입력', link:'/Team2_1'},
            {name: '우리팀 톡톡', link:'/board/1'}, 

            {name: '팀단체사진 등록', link:'/Team5'}, 
            {name: '지원요청/대기', link:'/Team6_1'}, 
            {name: '긴급연락망', link:'/Team7'}, 
            {name: '상조회', link:'/Team8_1/2'}, 
            {name: '권역 및 대표', link:'/Team9'}, 
            {name: '담당 외주업체 ', link:'/Team10'}
        ]
    },
    {
        name: '품질 관리', 
        subMenus: [
            {name: '칭찬글', link:'/board/2'}, 
            {name: '꾸중글', link:'/board/3'}, 
            {name: '미계약 해피콜', link:'/Manage2_1/2'}, 
            {name: '계약 해피콜', link:'/Manage2_1/1'}, 
            {name: 'A/S현황', link:'/Manage3_1'}, 
            {name: 'A/S처리노하우', link:'/board/8'}, 
            {name: '현장실사체크리스트', link:'/Manage5_1/1'}, 
            {name: '대리점실사체크리스트', link:'/Manage5_1/2'}, 
            {name: '자가평가', link:'/Manage11_1_4'}, 
            {name: '월평가(경고현황)', link:'/Team8_1/1'}, 
            {name: '브랜드평가 사진제출', link:'/Manage12'}
        ]
    },
    {
        name: '커뮤니티',
        subMenus: [
            {name: '공지사항', link:'/board/5'},
            {name: '자유게시판', link:'/board/4'},
            {name: '작업일정변경요청', link:'/board/10'},
            {name: '건의함', link:'/CommunityWrite'},
            {name: '비리제보', link:'/CommunityWrite'},
            {name: '쪽지', link:'/Msg'},
        ]
    },
    {
        name: '교육', 
        subMenus: [
            {name: '교육공지 / 이용안내', link:'/board/6'}, 
            {name: '교육일정 / 신청', link:'/Team1/2'}, 
            {name: '교육참석내역', link:'/Edu8_9'}, 
            {name: '교육자료실(일반 / 영상)', link:'/board/7'}, 
            {name: '이수대상 교육', link:'/manage13/2'}, 
            {name: '교육평가', link:'/NotPage'}, 
            {name: '실시간 화상교육', link:'/Manage9_1'}, 
            {name: '교육출결체크', link:'/Manage10_1'}, 
            {name: '교육설문', link:'/manage13/1'}, 
            {name: '매뉴얼 학습', link:'/Manage6'},
        ]
    },
    {
        name: '본사업무',
        subMenus: [
            {name: '청구서관리', link:'/Bill'}, 
            {name: '일반자료실', link:'/board/9'}, 
            {name: '자재주문', link:'/ProdLists'}, 
            {name: '장바구니', link:'/Cart'}, 
            {name: '자재주문내역', link:'/ProdOrder'}, 
            {name: '홈페이지연결', link:'/'}, 
            {name: '담당자연결', link:'/'}
        ]
    },
]



function Nav({clickMenu}) {
    const [isOpen, setOpen] = useState("");

    const toggleDropdown = (i) =>{
        setOpen(i)
    }
    
  return (
    <Wrapper>
        {menuItems.map(function(menuItem, i) {
            if (menuItem.subMenus != undefined) {
                return (
                    <DropDown key={i} menuItem={menuItem} clickMenu={clickMenu} i={i} total={toggleDropdown} totalV={isOpen}/>
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