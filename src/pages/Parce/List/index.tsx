/** @format */

import { Link, useNavigate } from "react-router-dom";

import { ForwardOutlined } from "@ant-design/icons";
import "./index.css";
import {
  Button,
  Divider,
  Input,
  Space,
  Statistic,
  Table,
  TableProps,
} from "antd";
import Bread from "../../../components/Bread";
import CCard from "../../../components/CCard";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const ParceList = () => {
  const navigate = useNavigate();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const handleCreate = () => {
    navigate("/parce/create");
  };
  return (
    <div className="parce-list">
      <Bread labels={[{ title: "宗地档案管理" }]} />
      <div className="parce-list-header row between">
        <div>
          <div style={{ fontSize: "20px" }}>宗地管理</div>
          <div>
            <Link to="/land/sources">查看地图</Link>
            <ForwardOutlined />
          </div>
        </div>

        <Space split={<Divider type="vertical" />}>
          <Statistic
            title="宗地数量"
            value={112893}
            valueStyle={{ color: "#ffffff" }}
          />
          <Statistic
            title="调查平法米"
            value={112893}
            valueStyle={{ color: "#ffffff" }}
          />
          <Statistic
            title="实际平方米"
            value={112893}
            valueStyle={{ color: "#ffffff" }}
          />
        </Space>
      </div>
      <CCard>
        <div
          className="row between"
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
          }}
        >
          <div>
            <Space>
              <span>关键词</span>
              <Input placeholder="请输入关键词" />
            </Space>
            <Space>
              <span>关键词</span>
              <Input placeholder="请输入关键词" />
            </Space>
          </div>

          <Space>
            <Button>重置</Button>
            <Button type="primary">搜索</Button>
          </Space>
        </div>
        <div style={{ padding: "12px 16px" }}>
          <div className="row between" style={{ marginBottom: "12px" }}>
            查询结果：
            <Button type="primary" onClick={handleCreate}>
              添加宗地
            </Button>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </CCard>
    </div>
  );
};

export default ParceList;
