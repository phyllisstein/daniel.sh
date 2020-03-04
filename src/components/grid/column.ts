import styled, { css } from 'styled-components'
import { Breakpoints } from 'styles/theme/responsive'
import R from 'ramda'
interface ColumnSpec {
  offset?: number
  span?: number
}

type ColumnProps = {
  [K in keyof Breakpoints]?: ColumnSpec | number
}

export const Column = styled.div<ColumnProps>`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr;

  ${ ({ theme }) => theme.responsive.greaterThan('md', css`
    grid-template-columns: repeat(8, 1fr);
  `) }

  ${ ({ theme }) => theme.responsive.greaterThan('lg', css`
    grid-template-columns: repeat(16, 1fr);
  `) }

  & > * {
    grid-column: 1 / -1;

    ${ ({ theme, ...props }) =>
      R.pipe(
        R.pick(['lg', 'max', 'md', 'sm', 'xlg']),
        R.mapObjIndexed((columnSpec, breakpoint) => {
          if (typeof columnSpec === 'number') {
            return theme.responsive.greaterThan(breakpoint, css`
              grid-column-start: 1;
              grid-column-end: span ${ columnSpec };
            `)
          }

          return theme.responsive.greaterThan(breakpoint, css`
            grid-column-start: ${ columnSpec.offset + 1 };
            grid-column-end: span ${ columnSpec.span };
          `)
        }),
        bp => [bp.sm, bp.md, bp.lg, bp.xlg, bp.max],
        R.filter(Boolean),
      )(props) as any }
  }
`
