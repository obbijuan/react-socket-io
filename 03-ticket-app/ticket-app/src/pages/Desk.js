import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const { Title, Text } = Typography;


export const Desk = () => {

    useHideMenu(false);
    const [ user ] = useState( getUsuarioStorage() );
    const history = useHistory();

    const exit = () => {
        localStorage.removeItem('desk');
        localStorage.removeItem('agent');
        history.replace('/register');
    }

    const nextTicket = () => {
        console.log('nextTicket');
    }

    if ( !user.agent || !user.desk ) {
        return <Redirect to="/register" />
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{ user.agent }</Title>
                    <Text>You're working on desk number: </Text>
                    <Text type="success"> { user.desk} </Text>
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
