import styled from 'styled-components'
import {colors} from '../../assets/global/colors';

export const MainContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1.2vw;
height: 11vh;
border: 1px solid ${colors.dark};
p{
    margin-left: 1.5vw;
    color: ${colors.fontGray};
    font-size: 3.5vh;
    font-weight: 600;
}
a{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.dark};
    border: 0;
    width: 8%;
    height: 50%;
    color: ${colors.white};
    font-size: 1.8vh;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
}
`
// export const MainContainer = styled.div`

// `
// export const MainContainer = styled.div`

// `
// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `