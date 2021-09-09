import { Avatar } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const data = [
    {
        'id':1,
        'img':'data:image/png;base64,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',
        'title': 'Austin Yates'
    },
    {
        'id':2,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png',
        'title': 'COVID-19 Information Center'
    },
    {
        'id':3,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png',
        'title': 'Friends'
    },
    {
        'id':4,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png',
        'title': 'Groups'
    },
    {
        'id':5,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png',
        'title': 'Marketplace'
    },
    {
        'id':6,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png',
        'title': 'Watch'
    },
    {
        'id':7,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png',
        'title': 'Events'
    },
    {
        'id':8,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png',
        'title': 'Memories'
    },
    {
        'id':9,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png',
        'title': 'Saved'
    },
    {
        'id':10,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png',
        'title': 'Pages'
    },
]

function LeftContainer() {
    return (
        <Container>
            <SubList>

                {
                    data.map((item) => (
                        <List>
                            <Avatar src={item.img}/>
                            <p>{item.title}</p>
                        </List>

                    ))
                }

                <List>
                    <ArrowDropDown />
                    <p>See More</p>
                </List>

                
            </SubList>
        </Container>
    )
}

export default LeftContainer

const Container = styled.div`
    flex: 0.25;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
        width: 8px;
      }

    :hover {
        transition: ease-in 0.4s;


        ::-webkit-scrollbar {
            display: flex;
            width: 8px;
          }
          
        
        ::-webkit-scrollbar-track {
            background: white;
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: rgb(136, 136, 136);
            border-radius: 10px;
          }
        
        ::-webkit-scrollbar-thumb:hover {
            background: rgb(126, 126, 126);
            border-radius: 10px;
          }
        
        ::-webkit-scrollbar-thumb:active {
            background: rgb(126, 126, 126);
            border-radius: 10px;
          }

    }

    @media(max-width: 1250px){
        display: none;
    }

    `
const SubList = styled.div`
    flex: 1;
    margin: 14px 10px;
`

const List = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    margin: 8px 0px;
    border-radius: 10px;
    cursor: pointer;

    p {
        margin-left: 14px;
    }

    :hover {
        background-color:  #68686880;
    }

    .MuiSvgIcon-root {
        padding: 6px;
        border-radius: 20px;
        background-color: #808080;
    }
`