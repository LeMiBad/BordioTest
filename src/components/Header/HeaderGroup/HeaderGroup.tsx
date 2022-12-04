import React from "react"
import styled from "styled-components"


const StyledHeaderGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 40px;
`


const HeaderGroup: React.FC<{children: JSX.Element}> = ({children}) => {
    return <>
        <StyledHeaderGroup>
            {children}
        </StyledHeaderGroup>
    </>
}

export default HeaderGroup