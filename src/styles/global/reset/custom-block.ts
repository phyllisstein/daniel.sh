import { createGlobalStyle } from 'styled-components'

export const CustomBlock = createGlobalStyle`
  .custom-block {
    border: 1px solid #eee;
    border-left-width: 0.25rem;
    border-radius: 0.25rem;
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
    padding: 1.25rem;
  }

  .custom-block + .custom-block {
    margin-top: -0.25rem;
  }

  .custom-block .custom-block-heading {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.25rem;
    margin-top: 0;
  }

  .custom-block p:last-child {
    margin-bottom: 0;
  }

  .custom-block.danger {
    border-left-color: #d9534f;
  }

  .custom-block.danger .custom-block-heading {
    color: #d9534f;
  }

  .custom-block.info {
    border-left-color: #5bc0de;
  }

  .custom-block.info .custom-block-heading {
    color: #5bc0de;
  }

  .custom-block.warning {
    border-left-color: #f0ad4e;
  }

  .custom-block.warning .custom-block-heading {
    color: #f0ad4e;
  }
`
