import { styled } from "styled-components";

export const CategoryContainer = styled.div`
    .title {
        font-size: 38px;
        margin-bottom: 30px;
        text-align: center;
    }
    .body {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
        row-gap: 50px;
    }
`