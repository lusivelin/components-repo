import { FC, PropsWithChildren, useState } from "react";
import { button } from "../Button/style";
import { tabContentArea, tabContentAreaGroup, tabControlGroup } from "./style";

export type TabsProps = {
  active?: boolean;
  onChange?: (i: Tabs[0]) => void;
  tabs?: Tabs;
};

export type TabProps = {
  active: boolean;
};

export type Tabs = {
  id: number;
  name: string;
}[];

const Tabs: FC<PropsWithChildren<TabsProps>> = ({ tabs, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <>
      <div className={tabControlGroup()}>
        {tabs?.map((tab, tabIndex) => (
          <button
            key={`tab-btn-${tabIndex}`}
            className={button({
              css: {
                background:
                  currentTabIndex != tabIndex ? "$ghost-white" : "$sky-blue",
                color:
                  currentTabIndex != tabIndex ? "$text-black" : "$text-white",
              },
            })}
            onClick={() => {
              setCurrentTabIndex(tabIndex);
              onChange?.(tab);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className={tabContentAreaGroup()}>
        {tabs?.map((tab, key) => (
          <Tab key={`tab-area-${key}`} active={key === currentTabIndex}>
            <h1>{tab.name}</h1>
          </Tab>
        ))}
      </div>
    </>
  );
};

const Tab: FC<PropsWithChildren<TabProps>> = ({ active, children }) => {
  return <div className={tabContentArea({ active })}>{children}</div>;
};

export default Tabs;
