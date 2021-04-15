import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;


export const Desk = () => {

    useHideMenu(false);
    const [ user ] = useState( getUsuarioStorage() );
    const { socket } = useContext( SocketContext );
    const [ ticket, setTicket ] = useState(null);
    const history = useHistory();

    const exit = () => {
        localStorage.removeItem('desk');
        localStorage.removeItem('agent');
        history.replace('/register');
    }

    const nextTicket = () => {
        socket.emit('work-next-ticket', user, (ticket) => {
            setTicket( ticket );
        });
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
                    <Text type="success"> { user.desk } </Text>
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

            {
                ( ticket )
                ?
                    (
                        <Row>
                            <Col>
                                <Text>You are attending ticket number: </Text>
                                <Text 
                                    style={{ fontSize: 30 }} 
                                    type="danger"
                                > 
                                { ticket.number }
                                </Text>
                            </Col>
                        </Row>
                    )
                :
                    (
                        <Row>
                            <Col>
                                <Text type="danger">No tickets have been assigned...</Text>
                            </Col>
                        </Row>
                    )
            }

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
