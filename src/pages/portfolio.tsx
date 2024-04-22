import Link from 'next/link'
import styled from 'styled-components'

const Page = styled.section`
  display: flex;
`

export default function Portfolio() {
  return (
    <Page>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link href='/portfolio/paywall'>
            Paywall
          </Link>
        </li>
        <li>
          <Link href='/portfolio/maps'>
            Maps
          </Link>
        </li>
      </ul>
    </Page>
  )
}
