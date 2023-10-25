import { styled } from "styled-components";

export const HeaderSearchBarStye = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #C3A488;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 20px;
    z-index: 5;

    .SearchForm {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 600px;
        background-color: #fff;
        border-radius: 3px;
        overflow: hidden;
    }

    .form{
        display: flex;
        align-items: center;
    }

    .button {
        border: none;
        outline: none;
        border-radius: 5px;
        background: #FFF;
        padding: 10px 40px;
        font-size: 16px;
        font-weight: 600;
        line-height: 100%;
        transition: all .3s;
        display: flex;
        margin-right: 10px;
        cursor: pointer;

        &:hover{
            background-color: #ad825c;
            color: #FFF;
        }
    }

    .input{
        outline: none;
        border: none;
        padding: 10px;
        font-size: 16px;
        font-weight: 600;
        line-height: 100%;
        border-radius: 5px;
    }

    .SearchForm-button:hover {
        opacity: 1;
    }

    .SearchForm-button-label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        clip-path: inset(50%);
        border: 0;
    }

    .SearchForm-input {
        display: inline-block;
        width: 100%;
        font: inherit;
        font-size: 20px;
        border: none;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
    }

    .SearchForm-input::placeholder {
        font: inherit;
        font-size: 18px;
    }
`