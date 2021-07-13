import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { Gutter, FlexBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`

`
const Title = styled.div`
    position:relative;
    ${ChangeFont(true)};
    text-align: center;
    &:before{
        position:absolute;
        top:8px; 
        left:0;
        content:'';
        background: #DFE5EA;
        width:calc(50% - 50px);
        height:1px;
    }
    &:after{
        position:absolute;
        top:8px; 
        right:0;
        content:'';
        background: #DFE5EA;
        width:calc(50% - 50px);
        height:1px;
    }
`
const CallArea = styled.div`
    ${FlexBox('left')}
    margin-top: 5px;
`
const IconBox = styled.div`
    ${FlexBox('center')}
    img{
        width:30px;
        height:30px;
        margin:10px;
    }

`
const Number = styled.div`
`

function SnsLinks({name, num, color,user}) {
    const [brand,setBrand] = useState(user.brand);
    const [url,setUrl] = useState([]);
    useEffect(() => {
        if(brand === "KGB포장이사서비스"){
            setUrl(["https://www.facebook.com/Kgb%ED%8F%AC%EC%9E%A5%EC%9D%B4%EC%82%AC-388811408150653/?form=MY01SV&OCID=MY01SV","https://www.instagram.com/kgbstory/?form=MY01SV&OCID=MY01SV"]);
        } else if(brand === "YES2404"){
            setUrl(["https://www.facebook.com/%EC%98%88%EC%8A%A42404-162594137582358/?form=MY01SV&OCID=MY01SV","https://www.instagram.com/yes2404story/?form=MY01SV&OCID=MY01SV"]);
        } else if(brand === "이사이사"){
            setUrl(["https://www.facebook.com/KGByes2424/","https://www.instagram.com/yes2424story/?form=MY01SV&OCID=MY01SV"]);
        } else {
            setUrl(["",""]);
        }
        return () => {
            
        }
    }, [brand])

    
  return (
    <Wrapper>
        <Title>KGB SNS</Title>
        <IconBox color={color}>
           
            <a href={url[0]} target='_blank'>
            <img src={process.env.PUBLIC_URL + '/images/sns_f.svg'} alt="facebook" />
            </a>
            <a href={url[1]} target='_blank'>
            <img src={process.env.PUBLIC_URL + '/images/sns_i.svg'} alt="instagram" />
            </a>
            <a href='https://www.youtube.com/channel/UCw7zP79swg32thGgyyOnD3w' target='_blank'>
            <img src={process.env.PUBLIC_URL + '/images/sns_y.svg'} alt="youtube" />
            </a>
        </IconBox>
    </Wrapper>
  );
}

export default SnsLinks;