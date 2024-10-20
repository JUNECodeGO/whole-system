/** @format */
import { ConfigProvider } from "antd";
import AppRoutes from "./routes";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#52c41a",
        colorInfo: "#52c41a",
      },
      components: {
        Layout: {
          bodyBg: "#ffffff",
          siderBg: "#ffffff",
        },
      },
    }}
  >
    <AppRoutes />
  </ConfigProvider>
);
export default App;
