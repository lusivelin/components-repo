import { FC, PropsWithChildren, ReactElement, useState } from "react";
import { button } from "../Button/style";
import { tabContainer, tabContentAreaGroup, tabControlGroup } from "./style";
import { CSS } from "@stitches/core";

export type TabsProps = {
  active?: boolean;
  onChange?: (i: Tabs[0]) => void;
  tabs?: Tabs;
  uiProps?: {
    container?: CSS;
    content?: CSS;
    control?: CSS;
  };
};

export type Tabs = {
  id: number;
  name: string;
  content: ReactElement;
}[];

const Tabs: FC<PropsWithChildren<TabsProps>> = ({
  tabs,
  onChange,
  uiProps,
}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { container, content, control } = uiProps || {};

  return (
    <div className={tabContainer({ container })}>
      <div className={tabControlGroup({ control })}>
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

      <div className={tabContentAreaGroup({ content })}>
        {tabs?.map((tab, index) => (
          <article
            key={`tab-area-${index}`}
            className={index === currentTabIndex ? "tab-active" : "tab"}
          >
            {tab.content}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
