import styled from 'styled-components'
import {colors} from '../../assets/global/colors';

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 88.5vh;
background-color: ${colors.backGroundModal};
input{
    width: 70%;
    height: 2.8vw;
    font-size: 2.3vh;
    :focus{
        outline: none;
    }
}
button{
    background-color: ${colors.dark};
    border: 0;
    width: 14vh;
    height: 4.5vh;
    color: ${colors.white};
    font-size: 1.7vh;
    font-weight: 600;
    cursor: pointer;
}
p{
    color: ${colors.fontGray};
    font-size: 3.5vh;
    font-weight: 600;
    margin: -7vh 0;
}
    #firstForm{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 60%;
    }
    #secoundForm{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 70%;
        margin-top: -4vh;
    }
`
export const CardContainer = styled.div`
    height: 50vh;
    width: 43vh;
    background-color: ${colors.white};
    border: 1px solid ${colors.dark};
    overflow: auto;
    overflow-x: hidden;
`
// export const MainContainer = styled.div`

// `
// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `