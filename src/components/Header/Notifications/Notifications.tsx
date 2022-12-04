import styled from "styled-components"

interface INotifications {
    value?: number
}

const StyledNotificationsWrapper = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        position: absolute;
        background-color: #F21247;
        padding: 5px;
        color: white;
        border-radius: 4px;
        font-size: 10px;
        right: -14px;
        top: -10px;
        min-width: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


const Notifications: React.FC<INotifications> = ({value}) => {
    return <StyledNotificationsWrapper>
        <svg width="25" height="25" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 20.5C10.1193 20.5008 10.7235 20.3086 11.2285 19.9502C11.7335 19.5917 12.1143 19.0849 12.318 18.5H6.682C6.88566 19.0849 7.26648 19.5917 7.77151 19.9502C8.27654 20.3086 8.8807 20.5008 9.5 20.5V20.5ZM16.5 13.086V8.5C16.4973 6.96831 15.9927 5.47971 15.0635 4.26207C14.1343 3.04443 12.8317 2.16486 11.355 1.758C11.2059 1.38809 10.9496 1.0712 10.6191 0.848043C10.2885 0.624884 9.89882 0.505646 9.5 0.505646C9.10118 0.505646 8.71146 0.624884 8.38091 0.848043C8.05037 1.0712 7.79409 1.38809 7.645 1.758C6.16842 2.16501 4.86587 3.04462 3.93668 4.26223C3.00749 5.47983 2.50286 6.96835 2.5 8.5V13.086L0.793 14.793C0.605451 14.9805 0.500057 15.2348 0.5 15.5V16.5C0.5 16.7652 0.605357 17.0196 0.792893 17.2071C0.98043 17.3946 1.23478 17.5 1.5 17.5H17.5C17.7652 17.5 18.0196 17.3946 18.2071 17.2071C18.3946 17.0196 18.5 16.7652 18.5 16.5V15.5C18.4999 15.2348 18.3946 14.9805 18.207 14.793L16.5 13.086Z" stroke="#8C939F"/>
        </svg>
        {
            value? <div>{(value > 99) ? '99+' : `${value}`}</div> : <></> 
        }
    </StyledNotificationsWrapper>
}

export default Notifications