import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from '@ant-design/icons';


const AppCards = () => {
    return (
        <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Feedback"
            value={9100}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<LikeOutlined />}
        
          />
        </Card>
      </Col>
    </Row>
  </div>
    )
}

export default AppCards
