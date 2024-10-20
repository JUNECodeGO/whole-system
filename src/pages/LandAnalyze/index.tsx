/** @format */

import { Input, Progress, Space, Statistic, Table, TableProps } from "antd";
import Bread from "../../components/Bread";
import "./index.css";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const LandAnalyze = () => {
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
  return (
    <div className="data-page">
      <Bread labels={[{ title: "土地利用现状分析" }]} showTitle />

      <Space>
        <div>
          <div>宗地归属</div>
          <Input />
        </div>
        <div>
          <div>宗地归属</div>
          <Input />
        </div>
      </Space>

      <div className="row">
        <div className="top-left">
          <div className="top row between">
            <div className="row between">
              <Progress type="circle" percent={75} />
              <Statistic title="调查平法米" value={112893} />
            </div>
            <div className="row between">
              <Progress type="circle" percent={75} />
              <Statistic title="调查平法米" value={112893} />
            </div>
            <div className="row between">
              <Progress type="circle" percent={75} />
              <Statistic title="调查平法米" value={112893} />
            </div>
          </div>

          <div className="top" style={{ marginTop: "8px" }}>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
        <div>
          <div>123</div>
        </div>
      </div>
    </div>
  );
};

export default LandAnalyze;
