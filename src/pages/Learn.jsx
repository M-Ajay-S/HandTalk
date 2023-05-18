import React from 'react'
import Card from '../components/Card'
import { useGlobalContext } from '../../context'
import { styled } from 'styled-components'


const Wrapper = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.black};
.title{
    color: white;
    text-align: center;
    font-size: 4rem;
    margin-bottom:3em;
}
`

const Learn = () => {
    const { letters } = useGlobalContext()
    // console.log(letters);

    return (
        <Wrapper>
            <div className="title">
                Finger Spelling Dictionary
            </div>
            <div className="container grid grid-three-column">
                {letters.map((letter) => {
                    return <Card key={letter} letter={letter} />
                })}




            </div>

        </Wrapper>
    )
}

export default Learn