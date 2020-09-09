import styled from "styled-components";

// nao funcionou

export const Msg = styled.p.attrs(props =>({
    class: props.className 
    }))`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 50px;
    cursor: pointer;
    border-radius: 10px;

    &.default{
        color:#999999;
        border: dashed 2px #999999;
    }

    &.sucess{
        color:#1f3bdf;
        border: dashed 2px #1f3bdf;
    }

    &.err{
        color: #e57878;
        border: dashed 2px #e57878;
    }
`

export const msgSucess = styled.p`
    align-items: center;
    width: 500px;
    height: 50px;
    cursor: pointer;
    border-radius: 10px;
    color:#1f3bdf;
    border: dashed 2px #1f3bdf;
`;

export const msgErr = styled.p`
    color: #e57878;
    border: dashed 2px #e57878;
`;

export const MsgDefault = styled.p`
    
    color:#999999;
    border: dashed 2px #999999;
`;
