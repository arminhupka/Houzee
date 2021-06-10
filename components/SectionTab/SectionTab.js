import styled from "styled-components";

const StyledTab = styled.div`
  padding: 2rem;
  display: flex;
  background: #fff;
`

const SectionTab = ({children}) => (
    <StyledTab>
        {children}
    </StyledTab>
)

export default SectionTab
