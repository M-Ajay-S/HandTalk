import React from 'react'
import { styled } from 'styled-components'


const Wrapper = styled.section`
padding: 5rem 0;
    background-color: ${({ theme }) => theme.colors.black};
    
    color:${({ theme }) => theme.colors.white};
    footer{
        padding-top:2em;
    }
    .footer-about{
        font-size: 1.5rem;
        a{
            font-size: 1rem;
            text-decoration: none;
            color: aliceblue;
        }
    }


`

const Footer = () => {
    return (
        <Wrapper>
            <hr />
            <footer>
                <div className="footer-about">
                    @{new Date().getFullYear()} HandTalk.All Rights Reserved. <br />
                    <a href="https://www.flaticon.com/free-icons/finger" title="finger icons">Finger icons created by Freepik - Flaticon</a><br />
                    <a href="https://www.freepik.com/free-photo/deaf-women-communicating-through-sign-language_8969028.htm#query=sign%20language&position=6&from_view=keyword&track=ais">Image by Freepik</a>
                </div>
            </footer>
        </Wrapper>
    )
}

export default Footer