import { useState } from "react"
import styled from "styled-components"


interface IInput {
    dark?: boolean
    placeholder?: string
}

const StyledInput = styled.input<IInput>`
    background-color: ${props => props.dark? '#2D4071' : '#F5F8FA'};
    border-radius: ${props => props.dark? '4px' : '50px'};
    border: 0;
    width: 100%;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: ${props => props.dark? 'white' : 'black'};
    ::placeholder {
        color: #8C939F;
    }
`

const Input: React.FC<IInput> = (props) => {
    const [value, setValue] = useState('')

    return <StyledInput value={value} onChange={e => setValue(e.currentTarget.value)} {...props}/>
} 

export default Input