import React from 'react'
import { styled } from 'styled-components'


const Wrapper = styled.section`
    max-width: 30em;
    display: flex;
    flex-direction: column;
    background-color: #ebb032;
    border:2px solid #ffffff; 
                   border-radius:10px;
    overflow: hidden;
        img{

                    /* border:2px solid #fff;  */
                    /* box-shadow: 10px 10px 5px #ebb032;  */
                   /* border-radius:25px; */
        }

    h2{
            margin: 0 auto;
    }

`



const Card = ({ letter }) => {
    return (
        <Wrapper>

            <img src={`/images/letters/${letter}.png`} />
            <h2>{letter}</h2>
        </Wrapper>
    )
}

export default Card