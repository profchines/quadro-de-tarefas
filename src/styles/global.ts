import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #0067a3;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--background);
    }

    body, input-security, textarea, button {
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`
