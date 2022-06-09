import styled from 'styled-components'
import { colors } from '../../assets/global/colors'

export const MainContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 25%;
border-bottom: 1px solid ${colors.dark};
padding: 0 1.5vw;
button{
    max-width: 3.5vh;
    max-height: 3.5vh;
}
`
export const Info = styled.a`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 50%;
width: 85%;
text-decoration: none;
p{
    margin: 0;
}
#user{
    align-self: flex-start;
    font-size: 2.5vh;
    color: ${colors.gray2};
}
#repo{
    align-self: flex-start;
    font-size: 3vh;
    color: ${colors.fontGray};
}
`

// export const MainContainer = styled.div`

// `