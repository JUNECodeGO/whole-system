import React from "react";
import { Breadcrumb } from "antd";

interface Props {
  labels: { title: string; href?: string }[];
  showTitle?: boolean;
}
const Bread: React.FC = (props: Props) => {
  const { labels, showTitle } = props;

  return (
    <div>
      {showTitle && <h3>{labels[labels.length - 1].title}</h3>}
      <Breadcrumb
        separator={
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "2.5px",
              backgroundColor: "rgb(0,0,0)",
              opacity: "0.45",
              marginTop: "150%",
            }}
          />
        }
        items={[
          {
            title: "首页",
            href: "/land",
          },
        ].concat(labels)}
      />
    </div>
  );
};

export default Bread;
