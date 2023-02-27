import {
  FC,
  PropsWithChildren,
  ReactElement,
  createElement,
  useState,
} from "react";
import { tabContainer, tabContentAreaGroup, tabControlGroup } from "./style";
import { CSS } from "@stitches/core";
import { button } from "../Button/style";

export type TabsProps = {
  active?: boolean;
  onChange?: (i: Tabs[0], currentIndex: number) => void;
  tabs?: Tabs;
  uiProps?: {
    container?: CSS;
    content?: CSS;
    control?: CSS;
  };
};

export type Tabs = {
  id: number;
  name: ReactElement;
  content: ReactElement;
}[];

const Tabs: FC<PropsWithChildren<TabsProps>> = ({
  tabs,
  onChange,
  uiProps,
}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { container, content, control } = uiProps || {};

  const createControlComponent = (tab: Tabs[0], key: number) => {
    const component = tab.name;

    const result = createElement(component.type, {
      ...component.props,
      key: `tab-control-${key}`,
      className: [
        button({
          css: {
            background: currentTabIndex != key ? "$ghost-white" : "$sky-blue",
            color: currentTabIndex != key ? "$text-black" : "$text-white",
          },
        }),
        component.props.className,
      ].join(""),
      onClick() {
        setCurrentTabIndex(key);
        onChange?.(tab, currentTabIndex);
      },
    });
    return result;
  };

  return (
    <div className={tabContainer({ css: { ...container } })}>
      <div className={tabControlGroup({ css: { ...control } })}>
        {tabs?.map((tab, tabIndex) => createControlComponent(tab, tabIndex))}
      </div>

      <div className={tabContentAreaGroup({ css: { ...content } })}>
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
