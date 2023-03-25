import { css } from 'styled-components';

export const typography = {
  fontFamily: css`
    font-family: 'Pretendard', 'Material Icons', -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  `,
  display_1: css`
    font-size: calc(var(--display-1-font-size) * 1px);
    line-height: calc(var(--display-1-line-height) * 1px);
    letter-spacing: calc(var(--display-1-letter-spacing) * 0.01em);
    font-weight: var(--display-1-font-weight);
  `,
  display_2: css`
    font-size: calc(var(--display-2-font-size) * 1px);
    line-height: calc(var(--display-2-line-height) * 1px);
    letter-spacing: calc(var(--display-2-letter-spacing) * 0.01em);
    font-weight: var(--display-2-font-weight);
  `,
  display_3: css`
    font-size: calc(var(--display-3-font-size) * 1px);
    line-height: calc(var(--display-3-line-height) * 1px);
    letter-spacing: calc(var(--display-3-letter-spacing) * 0.01em);
    font-weight: var(--display-3-font-weight);
  `,
  display_4: css`
    font-size: calc(var(--display-4-font-size) * 1px);
    line-height: calc(var(--display-4-line-height) * 1px);
    letter-spacing: calc(var(--display-4-letter-spacing) * 0.01em);
    font-weight: var(--display-4-font-weight);
  `,
  headline_strong: css`
    font-size: calc(var(--headline-strong-font-size) * 1px);
    line-height: calc(var(--headline-strong-line-height) * 1px);
    font-weight: var(--headline-strong-font-weight);
  `,
  headline: css`
    font-size: calc(var(--headline-font-size) * 1px);
    line-height: calc(var(--headline-line-height) * 1px);
    font-weight: var(--headline-font-weight);
  `,
  title_strong: css`
    font-size: calc(var(--title-strong-font-size) * 1px);
    line-height: calc(var(--title-strong-line-height) * 1px);
    font-weight: var(--title-strong-font-weight);
  `,
  title: css`
    font-size: calc(var(--title-font-size) * 1px);
    line-height: calc(var(--title-line-height) * 1px);
    font-weight: var(--title-font-weight);
  `,
  subtitle_strong: css`
    font-size: calc(var(--subtitle-strong-font-size) * 1px);
    line-height: calc(var(--subtitle-strong-line-height) * 1px);
    font-weight: var(--subtitle-strong-font-weight);
  `,
  subtitle: css`
    font-size: calc(var(--subtitle-font-size) * 1px);
    line-height: calc(var(--subtitle-line-height) * 1px);
    font-weight: var(--subtitle-font-weight);
  `,
  body_stronger: css`
    font-size: calc(var(--body-stronger-font-size) * 1px);
    line-height: calc(var(--body-stronger-line-height) * 1px);
    font-weight: var(--body-stronger-font-weight);
  `,
  body_strong: css`
    font-size: calc(var(--body-strong-font-size) * 1px);
    line-height: calc(var(--body-strong-line-height) * 1px);
    font-weight: var(--body-strong-font-weight);
  `,
  body: css`
    font-size: calc(var(--body-font-size) * 1px);
    line-height: calc(var(--body-line-height) * 1px);
    font-weight: var(--body-font-weight);
  `,
  button_m: css`
    font-size: calc(var(--button-m-font-size) * 1px);
    line-height: calc(var(--button-m-line-height) * 1px);
    font-weight: var(--button-m-font-weight);
  `,
  button_l: css`
    font-size: calc(var(--button-l-font-size) * 1px);
    line-height: calc(var(--button-l-line-height) * 1px);
    font-weight: var(--button-l-font-weight);
  `,
  caption_strong: css`
    font-size: calc(var(--caption-strong-font-size) * 1px);
    line-height: calc(var(--caption-strong-line-height) * 1px);
    font-weight: var(--caption-strong-font-weight);
  `,
  caption: css`
    font-size: calc(var(--caption-font-size) * 1px);
    line-height: calc(var(--caption-line-height) * 1px);
    font-weight: var(--caption-font-weight);
  `,
  textfield: css`
    font-size: calc(var(--textfield-font-size) * 1px);
    line-height: calc(var(--textfield-line-height) * 1px);
    font-weight: var(--textfield-font-weight);
  `,
  textfield_strong: css`
    font-size: calc(var(--textfield-strong-font-size) * 1px);
    line-height: calc(var(--textfield-strong-line-height) * 1px);
    font-weight: var(--textfield-strong-font-weight);
  `,
  link_m: css`
    font-size: calc(var(--link-m-font-size) * 1px);
    line-height: calc(var(--link-m-line-height) * 1px);
    font-weight: var(--link-m-font-weight);
  `,
  link_l: css`
    font-size: calc(var(--link-l-font-size) * 1px);
    line-height: calc(var(--link-l-line-height) * 1px);
    font-weight: var(--link-l-font-weight);
  `
};
