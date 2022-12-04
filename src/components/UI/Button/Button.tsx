import styled from "styled-components"

interface IButton {
    children: string 
    func: Function
}

const StyledButton = styled.button`
    min-width: 105.5px;
    padding: 10px 20px;
    border-radius: 50px;
    background-color: #0094FF;
    color: #ffffff;
    font-size: 14px;
    border: 0;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: #169eff;
    }
`


const Button: React.FC<IButton> = ({children, func}) => {

    const buttonHandler = () => func()

    return <>
        <StyledButton onClick={buttonHandler}>{children}</StyledButton>
    </>
}

export default Button