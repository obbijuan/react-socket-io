import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CreateTicket = () => {

    useHideMenu(true);

    const newTicket = () => {
        console.log('newTicket');
    }

    return (
        <>
            <Row>
                <Col span={ 14 } offset={ 4 } align="center">
                    <Title level={ 3 }>
                        Press the button for a new ticket
                    </Title>

                    <Button
                        type="primary"
                        shape="round"
                        icon={ <DownloadOutlined /> }
                        size="large"
                        onClick={ newTicket }
                    >
                        New Ticket

                    </Button>
                </Col>
            </Row>

            <Row style={{ marginTop: 100 }}>
                <Col span={ 14 } offset={ 4 } align="center">
                    <Text level={ 2 }>
                        Your Number
                    </Text>
                    <br />
                    <Text type="success" style={{ fontSize: 55 }}>
                        55
                    </Text>
                </Col>
            </Row>
        </>
    )
}
