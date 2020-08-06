import { css } from 'styled-components';

export const colors = {
  primary1: 'rgb(1,65,86)',
  primary2: 'rgb(0,130,151)',
  primary3: 'rgb(99,181,192)',
  primary4: 'rgb(180,224,225)',
  primary5: 'rgba(218,240,240,0.5)',
  primary6: 'rgba(105,182,213,1)',
  black: 'rgb(0,0,0)',
  dark1: 'rgb(41,42,43)',
  dark2: 'rgb(116,119,127)',
  dark3: 'rgba(42,44,47,1)',
  dark4: '#222324',
  grey1: 'rgb(159,163,170)',
  grey2: 'rgb(180,183,190)',
  grey3: 'rgb(234,237,239)',
  grey4: 'rgba(206,210,217)',
  grey5: 'rgba(151,151,151,0.15)',
  grey6: 'rgba(97,101,110,1)',
  grey7: 'rgb(248, 249, 250)',
  grey8: 'rgb(234, 237, 239)',
  grey9: 'rgb(242, 244, 246)',
  grey10: 'rgb(59,63,70)',
  white1: 'rgb(255,255,255)',
  white2: 'rgb(248,289,259)',
  white3: 'rgb(239,239,239)',
  danger1: 'rgb(235,87,87)',
  danger2: 'rgb(235,22,22)',
  danger3: 'rgb(227,22,43)',
  danger4: 'rgb(255,227,224,0.4)',
  success: 'rgb(39,174,96)',
  warn1: 'rgb(234,115,19)',
  blue1: 'rgba(38,112,169,1)',
  lightBlue: '#EDF8F8',
  lightBlue2: '#B4E0E1',
  lightBlue3: 'rgb(99,181,192)',
  green: 'rgba(36,135,75)',
  green2: 'rgba(48,156,90,1)',
  red1: 'rgba(166,21,11,1)',
  orange1: 'rgba(238,133,43,1)',
};

const scrollBar = css`
  ::-webkit-scrollbar-track {
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${props =>
      props.color ? `${props.color}` : `${colors.grey5}`};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.grey2};
  }
`;

export const verticalScrollBar = css`
  ${scrollBar}::-webkit-scrollbar {
    width: ${props => (props.scrollWidth ? `${props.scrollWidth}px` : '10px')};
  }
`;

export const horizontalScrollBar = css`
  ${scrollBar}::-webkit-scrollbar {
    height: ${props =>
      props.scrollHeight ? `${props.scrollHeight}px` : '10px'};
  }
`;

export default {
  colors,
  h1: '1.5rem',
  h2: '1.25em',
  h3: '1.2rem',
  h4: '1.15rem',
  h5: '1.1rem',
  h6: '1.05rem',
  subtitle1: '1rem',
  subtitle2: '0.875rem',
  subtitile3: '0.6875rem',
  p1: '1rem',
  p2: '0.875rem',
  span1: '0.875rem',
  span2: '0.75rem',
  button1: '1rem',
  button2: '0.75rem',
  button3: '1.25rem',
  button4: '3.75rem',
  button5: '9.375rem',
  button6: '15rem',
  marginSmall: {
    marginTop: '8px',
    marginBottom: '4px',
  },
  marginNormal: {
    marginTop: '16px',
    marginBottom: '8px',
  },
  marginLarge: {
    marginTop: '32px',
    marginBottom: '16px',
  },
  paddingLarge: '16px',
  paddingNormal: '12px',
  paddingSmall: '8px',
  paddingButton: '7px 25px',
  paddingButtonSmall: '7px 5px',
  bodySetup: {
    width: '900px',
    margin: '0 auto',
  },
  verticalScrollBar,
  horizontalScrollBar,
};
