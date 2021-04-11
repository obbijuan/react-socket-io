import React from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const Desk = () => {

    const exit = () => {
        console.log('exit');
    }

    const nextTicket = () => {
        console.log('nextTicket');
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>Obbijuan</Title>
                    <Text>You're working on desk number: </Text>
                    <Text type="success">3</Text>
                </Col>
                <Col span={4} align="right">
                    <Button
                        shape="round"
                        type="danger"
                        onClick={ exit }
                    >
                        <CloseCircleOutlined />
                        Exit
                    </Button>
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col>
                    <Text>You are attending ticket number: </Text>
                    <Text 
                        style={{ fontSize: 30 }} 
                        type="danger"
                    > 
                    55
                    </Text>
                </Col>
            </Row>

            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        onClick={ nextTicket }
                        shape="round"
                        type="primary"
                    >
                        <RightOutlined />
                        Next
                    </Button>
                </Col>
            </Row>
        </>
    )
}
