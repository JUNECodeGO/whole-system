/** @format */

import Bread from "../../../components/Bread";
import CCard from "../../../components/CCard";

const ParceDetail = () => {
  return (
    <div className="parce-list">
      <Bread
        labels={[
          { title: "宗地档案管理", href: "/parce/list" },
          { title: "创建宗地" },
        ]}
      />
      <CCard>
        <div>基本信息</div>
        <div></div>
      </CCard>
      <CCard>
        <div>证书附件说明等</div>
        <div></div>
      </CCard>
    </div>
  );
};

export default ParceDetail;
