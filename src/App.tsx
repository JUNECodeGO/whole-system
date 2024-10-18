/** @format */
import {ConfigProvider} from 'antd';
import routes from './routes';
import BasicLayout from './components/BasicLayout';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#a0d911',
        colorInfo: '#a0d911',
      },
      components: {
        Layout: {
          bodyBg: '#ffffff',
          siderBg: '#ffffff',
        },
      },
    }}>
    <BasicLayout>{routes}</BasicLayout>
  </ConfigProvider>
);
export default App;
