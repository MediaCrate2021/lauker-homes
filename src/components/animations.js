import { css } from "styled-components"

const fadeIn = css`
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

const raiseIn = css`
  @-webkit-keyframes raiseIn {
    0% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes raiseIn {
    0% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const dropOut = css`
  @-webkit-keyframes dropOut {
    0% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes dropOut {
    0% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const zoomIn = css`
  @-webkit-keyframes zoomIn {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    to {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @keyframes zoomIn {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    to {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`

const textAnimationStyles = css`
  > h3 {
    opacity: 0;
    ${fadeIn}
    ${raiseIn}
    -webkit-animation: fadeIn 0.7s ease-in 0.3s forwards,
    raiseIn 0.7s ease-in .3s forwards;
    animation: fadeIn 0.7s ease-in 0.3s forwards,
      raiseIn 0.7s ease-in 0.3s forwards;
  }

  > h1,
  > h2 {
    opacity: 0;
    ${fadeIn}
    ${raiseIn}
    -webkit-animation: fadeIn 0.7s ease-in 0.3s forwards,
      raiseIn 0.7s ease-in .3s forwards;
    animation: fadeIn 0.7s ease-in 0.3s forwards,
      raiseIn 0.7s ease-in 0.3s forwards;
  }

  > h4 {
    opacity: 0;
    ${fadeIn}
    ${raiseIn}
    -webkit-animation: fadeIn 0.7s ease-in 0.7s forwards,
      raiseIn 0.7s ease-in 0.7s forwards;
    animation: fadeIn 0.7s ease-in 0.7s forwards,
      raiseIn 0.7s ease-in 0.7s forwards;
  }

  > p {
    opacity: 0;
    ${fadeIn}
    ${raiseIn}
    -webkit-animation: fadeIn 0.7s ease-in 1s forwards,
      raiseIn 0.7s ease-in 1s forwards;
    animation: fadeIn 0.7s ease-in 1s forwards, raiseIn 0.7s ease-in 1s forwards;
  }
`

export { fadeIn, raiseIn, zoomIn, dropOut, textAnimationStyles }
