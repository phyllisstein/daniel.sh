import { createGlobalStyle } from 'styled-components'

export const CustomBlock = createGlobalStyle`
  .custom-block {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    padding: 1.25rem;

    border: 1px solid #EEE;
    border-left-width: 0.25rem;
    border-radius: 0.25rem;
  }

  .custom-block + .custom-block {
    margin-top: -0.25rem;
  }

  .custom-block .custom-block-heading {
    margin-top: 0;
    margin-bottom: 0.25rem;

    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  .custom-block p:last-child {
    margin-bottom: 0;
  }

  .custom-block.danger {
    border-left-color: #D9534F;
  }

  .custom-block.danger .custom-block-heading {
    color: #D9534F;
  }

  .custom-block.info {
    border-left-color: #5BC0DE;
  }

  .custom-block.info .custom-block-heading {
    color: #5BC0DE;
  }

  .custom-block.warning {
    border-left-color: #F0AD4E;
  }

  .custom-block.warning .custom-block-heading {
    color: #F0AD4E;
  }
`
