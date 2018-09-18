import { injectGlobal } from 'styled-components';

injectGlobal`
    html{
        font-family: Tahoma, Geneva, sans-serif;
        font-size: 12px;
    }

    body{
        margin: 0;
        position: relative;
        height: auto;
        min-height: 100% !important;
    }
`;
