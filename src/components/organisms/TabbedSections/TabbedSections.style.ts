import styled from 'styled-components/macro';

export const ComponentWrapper = styled.div`
  --tabsBackgroundColour: #000000;
  --tabColour: #ffffff;
  --activeTabColour: #0000ff;
  --tabBackgroundColour: #515151;
  --tabsShadowColour: rgba(0, 0, 0, 0.4);
  --activeTabBackgroundColour: #ffffff;
  --space: 2rem;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const TabPanel = styled.section`
  padding: var(--space);
`;

export const TabList = styled.ol`
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: var(--space) calc(var(--space) * 0.5) 0;
  list-style: none;
  background-color: var(--tabsBackgroundColour);

  li {
    display: flex;
    align-self: stretch;

    :not(:last-child) {
      margin-right: calc(var(--space) * 0.25);
    }
  }

  @media screen and (max-width: 52rem) {
    width: 100%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: auto;
  }
`;

export const Tab = styled.a`
  padding: calc(var(--space) * 0.5) var(--space);
  text-decoration: none;
  color: var(--tabColour);
  background-color: var(--tabBackgroundColour);
  border-top-left-radius: calc(var(--space) * 0.25);
  border-top-right-radius: calc(var(--space) * 0.25);

  &:not([aria-selected='true']) {
    box-shadow: inset 0 calc(var(--space) * -0.5) calc(var(--space) * 0.5)
      calc(var(--space) * -0.5) var(--tabsShadowColour);
  }

  &[aria-selected='true'] {
    color: var(--activeTabColour);
    background-color: var(--activeTabBackgroundColour);
  }
`;
