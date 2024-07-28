import { css } from 'styled-components'

export const colorVariables = css`
  :root {
    --primary: #4fd1c4;
    --primary_100: #9ee3db;
    --primary_200: #4fd1c4;
    --primary_300: #00bcab;
    --primary_400: #00ac98;
    --primary_500: #009b85;
    --primary_600: #008e77;
    --primary_700: #007e67;
    --primary_800: #006e58;
    --primary_900: #00513b;

    --white: #f8f9fa;
    --gray: #718096;
    --black: #2d3748;
  }
`

export const colors = {
  primary: 'var(--primary)',
  primary_100: 'var(--primary_100)',
  primary_200: 'var(--primary_200)',
  primary_300: 'var(--primary_300)',
  primary_400: 'var(--primary_400)',
  primary_500: 'var(--primary_500)',
  primary_600: 'var(--primary_600)',
  primary_700: 'var(--primary_700)',
  primary_800: 'var(--primary_800)',
  primary_900: 'var(--primary_900)',

  white: 'var(--white)',
  gray: 'var(--gray)',
  black: 'var(--black)',
}
