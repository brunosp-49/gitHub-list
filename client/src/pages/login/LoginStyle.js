import styled from 'styled-components';
import {colors} from '../../assets/global/colors';

export const MainContainer = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
background-color: ${colors.backGroundLogin};
`
export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70vh;
width: 70vh;
background-color: ${colors.backGroundModal};
`
export const ContentContainer = styled.div`
display: grid;
width: 60%;
height: 80%;
grid-template-rows: 1fr 3fr;
grid-template-columns: 1fr;
#loginText{
    text-align: center;
    color: ${colors.fontGray};
    font-size: 2.7vw;
    font-weight: 600;
    margin: 0;
}
.forms{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
    color: ${colors.dark};
    p{
        font-size: 1.2vw;
        font-weight: 500;
        margin: 0;
    }
    input{
        border: 2px solid ${colors.dark};
        align-self:stretch;
        height: 2.5vw;
        font-size: 1.2vw;
        :focus{
            outline: none;
        }
    }
}
    button{
        justify-self: flex-end;
        align-self: flex-end;
        background-color: ${colors.dark};
        border: 0;
        width: 50%;
        height: 16%;
        color: ${colors.white};
        font-size: 1vw;
        font-weight: 600;
        cursor: pointer;
    }
    #inputs{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60%;
        justify-content: space-between;
    }
`
// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `