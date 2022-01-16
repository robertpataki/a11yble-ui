import { useState, useRef, useEffect, MouseEvent, KeyboardEvent } from 'react';

import { Props, TabbedSectionProps } from './TabbedSections.type';
import {
  ComponentWrapper,
  Tab,
  TabList,
  TabPanel,
} from './TabbedSections.style';

export const TabbedSections = (props: Props) => {
  const {
    accessibleTitle,
    tabbedSections,
    id,
    className,
    style,
    'data-testid': dataTestID,
    selectedTabIndex = 0,
  } = props;

  const tabsRef = useRef<Array<HTMLAnchorElement>>([]);
  const sectionsRef = useRef<Array<HTMLElement>>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(selectedTabIndex);

  useEffect(() => {
    tabsRef?.current[selectedIndex].focus();
  }, [selectedIndex]);

  if (!tabbedSections.length) {
    return null;
  }

  const handleTabClick = (
    event: MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    event.preventDefault();
    setSelectedIndex(index);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLElement>) => {
    event.preventDefault();

    let newIndex = selectedIndex;
    let hasIndexChanged = false;

    switch (event.key) {
      case 'ArrowLeft':
        hasIndexChanged = true;
        newIndex =
          selectedIndex === 0 ? tabbedSections.length - 1 : selectedIndex - 1;
        break;
      case 'ArrowRight':
        hasIndexChanged = true;
        newIndex =
          selectedIndex === tabbedSections.length - 1 ? 0 : selectedIndex + 1;
        break;
      case 'ArrowDown':
        hasIndexChanged = false;
        sectionsRef?.current[selectedIndex].focus();
        break;
      case 'ArrowUp':
        hasIndexChanged = false;
        tabsRef?.current[selectedIndex].focus();
        break;
    }

    if (hasIndexChanged) {
      setSelectedIndex(newIndex);
    }
  };

  return (
    <ComponentWrapper {...{ id, className, style }} data-testid={dataTestID}>
      <TabList role='tablist' aria-label={accessibleTitle}>
        {tabbedSections.map(
          (tabbedSection: TabbedSectionProps, index: number) => {
            const { title } = tabbedSection;

            return (
              <li
                role='presentation'
                key={`${Math.round(Math.random() * 100000)}`}
              >
                <Tab
                  role='tab'
                  id={`${id}__tab-${index}`}
                  href={`#${id}__section-${index}`}
                  aria-selected={selectedIndex === index}
                  tabIndex={selectedIndex === index ? 0 : -1}
                  ref={(el: HTMLAnchorElement) => {
                    tabsRef.current[index] = el;
                  }}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                    handleTabClick(event, index)
                  }
                  onKeyUp={(event: KeyboardEvent<HTMLElement>) =>
                    handleKeyUp(event)
                  }
                >
                  {title}
                </Tab>
              </li>
            );
          }
        )}
      </TabList>

      {tabbedSections.map(
        (tabbedSection: TabbedSectionProps, index: number) => {
          const { children } = tabbedSection;
          return (
            <TabPanel
              key={`${Math.round(Math.random() * 100000)}`}
              id={`${id}__section-${index}`}
              aria-labelledby={`${id}__tab-${index}`}
              hidden={selectedIndex !== index}
              tabIndex={selectedIndex === index ? 0 : -1}
              ref={(el: HTMLElement) => {
                sectionsRef.current[index] = el;
              }}
              onKeyUp={(event: KeyboardEvent<HTMLElement>) =>
                handleKeyUp(event)
              }
            >
              {children}
            </TabPanel>
          );
        }
      )}
    </ComponentWrapper>
  );
};

export default TabbedSections;
