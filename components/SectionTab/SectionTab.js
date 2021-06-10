import styled from "styled-components";

const StyledTab = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  background: #fff;
  
  :last-child {
    margin-bottom: 0;
  }
`

const SectionTab = ({children}) => (
    <StyledTab>
        {children}
    </StyledTab>
)

export default SectionTab
