import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { 
    Home, OndemandVideo, Store, SupervisedUserCircleOutlined, 
    ViewQuiltOutlined, Apps, Telegram, Notifications, ArrowDropDown,
    Menu 
    } from '@material-ui/icons'
import { Avatar, makeStyles } from '@material-ui/core';

function Navbar() {

    const [active, setActive] = useState("Home");

    const useStyles = makeStyles((theme) => ({
        medium: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
        },
    }));
      
    const classes = useStyles(); 
      
    return (
        <Header>
            <LeftButton>
                <FbLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/1200px-Facebook_Logo_(2019).png"/>
                <SearchArea>
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text" />
                </SearchArea>
            </LeftButton>
            
            <MiddleButton>
                <Icon className={active === "Home"?("active"):('default')}>
                    <Home/>
                </Icon>
                <Icon className={active === "Video"?("active"):('default')}>
                    <OndemandVideo />
                </Icon>
                <Icon className={active === "MarketPlace"?("active"):('default')}>
                    <Store />
                </Icon>
                <Icon className={active === "Groups"?("active"):('default')}>
                    <SupervisedUserCircleOutlined />
                </Icon>
                <Icon className={active === "Gaming"?("active"):('default')}>
                    <ViewQuiltOutlined />
                </Icon>
                <MenuIcon>
                    <Icon className="default">
                        <Menu />
                    </Icon>
                </MenuIcon> 
            </MiddleButton> 

            <RightButton>
                <AccountDetail>
                    <Avatar src="data:image/png;base64,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" className={classes.medium}/>
                    <p>Austin Yates</p>
                </AccountDetail>
                <OtherIcons>
                    <Apps />
                    <Telegram /> 
                    <Notifications />
                    <ArrowDropDown /> 
                </OtherIcons>
            </RightButton>
        </Header>
    )
}

export default Navbar

const Header = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #242526;
    color: white;
    padding: 0px 16px;
    align-items: center;
    border-bottom: 1px solid gray;
`

const LeftButton = styled.div`
    display: flex;
    align-items: center;
`

const FbLogo = styled.img`
    width: 40px;
    // height: 40px;
`

const SearchArea = styled.div`
    margin-left: 6px;
    display: flex;
    flex: 1;
    background-color: #3a3b3c;
    padding: 8px;
    border-radius: 20px;

    .MuiSvgIcon-root {
        margin: 0px 3px;
        color: gray;
    }

    input {
        font-size: 16px;
        color: white;
        // margin-right:10px;
        background-color: inherit;
        outline-width: 0;
        border: none;
    }

    @media(max-width: 1200px) {
        input{
            display: none;
        }

        .MuiSvgIcon-root {
            margin: 0px 0px;
        }
    }
`

const MiddleButton = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;


    .MuiSvgIcon-root {
        padding: 10px 38px;
        font-size: 30px;
        margin: 0px 3px;
        margin-top: 4px;
        cursor: pointer;
        border-radius: 10px;
    }

    .active {
        color: #2d88ff;
        border-bottom: 3px solid #2d88ff;
    }

    .default .MuiSvgIcon-root:hover {
        background-color: #68686880;
    }

    @media(max-width: 1200px) {
        .MuiSvgIcon-root {
            padding: 10px 2vw; 
            margin: 4px;
            font-size: 26px;

        }
    }

    @media(max-width: 650px) {
        padding: 4px 0px;
        justify-content: flex-start;

        // margin: 28px 0px;
        // // margin-top: 4px;

        .MuiSvgIcon-root {
            display: none;
        }
    }
`

const MenuIcon = styled.div`
    display: none;
    @media(max-width: 800px){
        display: flex;
    }

    @media(max-width: 650px){
        .MuiSvgIcon-root{
            display: flex;
        }
    }
`

const Icon = styled.div`

`

const RightButton = styled.div`
    display: flex;
    align-items: center;
`

const AccountDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 6px;
    border-radius: 20px;
    cursor: pointer;
    
    .MuiAvatar-root {
    }

    p {
        margin-left: 8px;
        margin-right: 8px;
        font-weight: bold;
    }

    :hover {
        background-color: #68686880; 
    }

    @media(max-width: 1200px) {
        display: none;
    }

`

const OtherIcons = styled.div`
    display: flex;
    flex-direction: row;

    .MuiSvgIcon-root {
        cursor: pointer;
        font-size: 22px;
        padding: 10px;
        margin: 4px;
        background-color: #68686880; 
        border-radius: 40px;
    }

    @media(max-width: 1200px){
        .MuiSvgIcon-root {
            font-size: 18px;
        }
    }
`
