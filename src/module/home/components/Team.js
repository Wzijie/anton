import React from 'react';
import { Row, Col, Card, Button, Tag } from 'antd';

const tagColor = ['pink', 'orange','green','cyan','blue','purple'];

const Team = ({ team }) => {
  return (
    <div className='team'>
      <Row gutter={24}>
        {
          team.map((teamItem) => {
            let { crossArea, title, descript } = teamItem;
            return (
              <Col span={6} key={crossArea}>
                <Card className='team-item' title={title} extra={<Tag color={tagColor[crossArea]}>跨{crossArea}</Tag>}>
                  <div className='team-content'>
                    <p className='description'>{descript}</p>
                    <div className='operation'>
                      <span className='operation__span'>{1} / 20</span>
                      <Button type='primary'>加入</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })
        }
      </Row>
    </div>
  );
}

export default Team;
