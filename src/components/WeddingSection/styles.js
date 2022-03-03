import { css } from '@emotion/core';
import Background from '../../assets/images/bg-wedding.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 70vh;
  color: #fff !important;

  .bismillah {
    color: #fff !important;
    font-size: 16px !important;
    font-family: sans-serif;
  }

  .sub-title {
    color: #fff !important;
    font-size: 16px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400 !important;

    @media screen and (max-width: 400px) {
      font-size: 15px !important;
    }
  }

  .text__live {
    text-align: center;
    margin-top: 24px;
  }

  .main-font {
    margin-top: 12px;

    @media screen and (max-width: 400px) {
      line-height: 1;
      margin-bottom: 8px;
    }
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s ease infinite;
  margin-top: -8px;
  border: none;

  .img__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500px;
    border-radius: 24px;
    background: #f14e95;
    padding: 8px 16px;
  }

  i {
    margin-right: 4px;
  }

  img {
    max-width: 28px;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;


export const styWrapperCount = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: rgba(241, 78, 149, 0.8);
  margin: 8px;
  border-radius: 50%;
  position: relative;
  animation: pulse 1s ease infinite;
  color: #fff;

  h3 {
    font-size: 30px;
    color: #fff;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    width: 75px;
    height: 75px;
    margin: 4px;
    font-size: 12px;

    h3 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 16px;
    }

    span {
      font-size: 10px;
    }
  }
`;