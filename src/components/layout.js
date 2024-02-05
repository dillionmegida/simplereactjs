import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-image: radial-gradient(
    color-mix(in srgb, var(--react), var(--primary) 90%) 1px,
    var(--primary) 1px
  );
  background-size: 10px 10px;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <div>
        <main>{children}</main>
      </div>
    </Wrapper>
  )
}

export default Layout
