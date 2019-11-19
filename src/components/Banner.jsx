import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100vw;
    height: 68px;
    display : flex;
    padding: 20px 58px;
    box-sizing:border-box;
`;

const Logo = styled.img`
    height:100%;
`;

const NavText = styled.ul`
    height:100%;
    margin: 0px 42px;
    display : flex;
    flex:1;
    align-items:center;
    color : white;
    list-style:none;
    
    `;
    
const NavTextItem = styled.li`
    margin: 0px 10px;
    font-size: 0.75em;
    font-weight:normal;
    color: #e5e5e5;

    &:active{
        font-weight:bold;
        color:#000;
    }

    &:hover{
        font-weight: normal;
        color: #b3b3b3;
    }

`;
    

const NavIcon = styled.ul`
    display:flex;
    list-style:none;

    height:100%;
`;

const NavIconItem = styled.li`
    width:fit-content;

    & > img{
        height:100%;
    }

`;

const Banner = props => {
    return (
    <Wrapper>
        <Logo src="https://cdn.worldvectorlogo.com/logos/netflix-2.svg" alt=""/>
        
        <NavText>
            <NavTextItem>홈</NavTextItem>
            <NavTextItem>TV 프로그램</NavTextItem>
            <NavTextItem>영화</NavTextItem>
            <NavTextItem>최신 등록 콘텐츠</NavTextItem>
            <NavTextItem>내가 찜한 콘텐츠</NavTextItem>
        </NavText>

        <NavIcon>
            <NavIconItem src="../../public/img/bell.svg"></NavIconItem>
            <NavIconItem></NavIconItem>
            <NavIconItem></NavIconItem>
            <NavIconItem></NavIconItem>
        </NavIcon>
    </Wrapper>
    )
}

export default Banner;