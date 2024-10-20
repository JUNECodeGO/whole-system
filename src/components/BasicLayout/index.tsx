/** @format */

import { Layout, Menu, Button, Image } from "antd";
import { useCallback, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  GroupOutlined,
  ApartmentOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const { Header, Content, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "土地管理",
    key: "land",
    icon: <PieChartOutlined />,

    children: [
      {
        label: "土地资源分布",
        key: "sources",
      },
      {
        label: "土地利用现状分析",
        key: "data",
      },
      {
        label: "土地利用分类管理",
        key: "sort",
      },
    ],
  },
  {
    label: "宗地管理",
    key: "parce",
    icon: <GroupOutlined />,
    children: [
      {
        label: "宗地档案管理",
        key: "list",
      },
      {
        label: "宗地差值分析",
        key: "analyze",
      },
    ],
  },
  {
    label: "基地管理",
    key: "basic",
    icon: <ReconciliationOutlined />,
  },
  {
    label: "组织机构设置",
    key: "organization",
    icon: <ApartmentOutlined />,
  },
];

const BasicLayout = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const navigate = useNavigate();
  const handleLink = useCallback((props) => {
    const { keyPath } = props;
    navigate(`/${keyPath.reverse().join("/")}`);
  }, []);

  useEffect(() => {
    const paths = location.pathname.split("/");
    if (paths.length) {
      setSelectedKeys(paths);
    }
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左侧侧边栏 */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          borderRightWidth: "1px",
          borderRightColor: "rgba(5, 5, 5, 0.06)",
          borderRightStyle: "solid",
        }}
      >
        <div
          className="row"
          style={{
            height: "48px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={logo} preview={false} width={"85%"} />
        </div>

        <Menu
          theme="light"
          selectedKeys={selectedKeys}
          defaultOpenKeys={["land", "parce"]}
          mode="inline"
          items={items}
          style={{ border: "none" }}
          onClick={handleLink}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            height: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 48,
              height: 48,
            }}
          />
        </Header>

        <Content
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#fff",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
