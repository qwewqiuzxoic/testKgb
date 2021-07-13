import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { Gutter, FlexBox } from '../../commonStyle';
import { useParams } from 'react-router';

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background: ${(props) => props.bg ? props.bg : props.theme.colors.primary};
    ${ FlexBox() };
`
const IconBack = styled.div`
    width:50px;
    height:50px;
    ${FlexBox('center')};
    cursor:pointer;
    img{
        display:inline-block;
        vertical-align: middle;
        width:8px;
        height:auto;
    }
`
const PageName = styled.div`
    height: 50px;
    line-height:50px;
    font-size: ${(props) => props.theme.fontSizes.l};
    font-weight:bold;
    color:#fff;
    img{
        width: 50px;
        height: auto;
    }
`
const IconMenu = styled.div`
    width:50px;
    height:50px;
    ${FlexBox('center')};
    cursor:pointer;
    img{
        display:inline-block;
        vertical-align: middle;
        width:20px;
        height:auto;
    }
`

function TopCom({clickMenu, bg}) {
    let history = useHistory();
    const url = window.location.pathname;
    const urlArr = url.split('/'); 
    const [title,setTitle] = useState("");

    function handleClick() {
        history.goBack();
      }
    useEffect(() => {
        if(urlArr[1] === "board"){
            if(urlArr[2]==="1"){
                setTitle("우리팀 톡톡");
            }else if(urlArr[2] === "2"){
                setTitle("칭찬하기");
            }else if(urlArr[2] === "3"){
                setTitle("꾸중하기");
            }else if(urlArr[2] === "4"){
                setTitle("자유게시판");
            }else if(urlArr[2] === "5"){
                setTitle("공지사항");
            }else if(urlArr[2] === "6"){
                setTitle("교육공지사항");
            }else if(urlArr[2] === "7"){
                setTitle("교육자료실");
            }else if(urlArr[2] === "8"){
                setTitle("A/S처리 노하우");
            }else if(urlArr[2] === "9"){
                setTitle("일반자료실");
            }else if(urlArr[2] === "10"){
                setTitle("작업일변경요청");
            }
        } else if(urlArr[1] === "Team1"){
            if(urlArr[2]==="1"){
                setTitle("작업일정")
            }else if(urlArr[2] === "2"){
                setTitle("교육일정")
            }
        }else if(urlArr[1] === "Team2_1"){
            setTitle("방문견적 및 개인오더 입력")
        }else if(urlArr[1] === "Team5"){
            setTitle("팀 단체사진")
        }else if(urlArr[1] === "Team7"){
            setTitle("긴급연락망")
        }else if(urlArr[1] === "Team9"){
            setTitle("권역 및 대표")
        }else if(urlArr[1] === "Team10"){
            setTitle("담당 외주업체")
        }else if(urlArr[1] === "Manage2_1"){
            if(urlArr[2]==="1"){
                setTitle("계약 해피콜")
            }else if(urlArr[2] === "2"){
                setTitle("미계약 해피콜")
            }
        }else if(urlArr[1] === "Manage3_1"){
            setTitle("A/S 현황")
        }else if(urlArr[1] === "Manage5_1"){
            if(urlArr[2]==="1"){
                setTitle("현장실사 체크")
            }else if(urlArr[2] === "2"){
                setTitle("대리점실사 체크")
            }
        }else if(urlArr[1] === "Manage11_1_4"){
            setTitle("자가평가")
        }else if(urlArr[1] === "Manage11"){
            setTitle("자가평가")
        }else if(urlArr[1] === "Team8_1"){
            setTitle("월평가")
        }else if(urlArr[1] === "Manage12"){
            setTitle("브랜드평가 사진제출")
        }else if(urlArr[1] === "Msg"){
            setTitle("쪽지")
        }else if(urlArr[1] === "manage13"){
            if(urlArr[2]==="1"){
                setTitle("교육설문")
            }else if(urlArr[2] === "2"){
                setTitle("이수대상교육")
            }
        }else if(urlArr[1] === "Manage9_1"){
            setTitle("실시간 화상교육")
        }else if(urlArr[1] === "Manage10_1"){
            setTitle("교육출결체크")
        }else if(urlArr[1] === "Manage6"){
            setTitle("메뉴얼 학습")
        }else if(urlArr[1] === "Bill"){
            setTitle("청구서 관리")
        }else if(urlArr[1] === "ProdLists"){
            setTitle("자재주문")
        }else if(urlArr[1] === "Manage3_1"){
            setTitle("")
        }else if(urlArr[1] === "Manage3_1"){
            setTitle("")
        }else if(urlArr[1] === "Manage3_1"){
            setTitle("")
        }
        
        return () => {
            
        }
    }, [])
  return (
    <Wrapper bg={bg}>
        <IconBack onClick={()=>handleClick()}>
            <img src={process.env.PUBLIC_URL + '/images/ico_back.svg'} alt="icon" />
        </IconBack>
        <PageName>
            {title}  
        </PageName>
        <IconMenu onClick={()=>clickMenu()}>
            <img src={process.env.PUBLIC_URL + '/images/ico_menu.svg'} alt="KGB" />
        </IconMenu>
    </Wrapper>
  );
}

export default TopCom;