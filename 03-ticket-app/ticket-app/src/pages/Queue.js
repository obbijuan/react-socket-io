import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Typography, List, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;


export const Queue = () => {

    useHideMenu(true);

    const { socket } = useContext( SocketContext );
    const [ tickets, setTickets ] = useState([]);

    useEffect(() => {
        
        socket.on('assigned-ticket', ( assigned ) => {
            setTickets( assigned );
        })

        return () => {
            socket.off('assigned-ticket');
        }
    }, [ socket ])

    return (
        <>
            <Title level={ 1 }>Serving the customer</Title>
            <Row>
                <Col span={ 12 }>
                    <List 
                        dataSource={ tickets.slice(0,3) }
                        renderItem={ ticket => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 14 }}
                                    actions={[
                                        <Tag color="volcano"> { ticket.agent } </Tag>,
                                        <Tag color="magenta"> Desk: { ticket.desk } </Tag>,
                                    ]}
                                >
                                    <Title level={ 2 }> No. { ticket.number  }</Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>


                <Col span={ 12 }>

                    <Divider> History </Divider>
                    <List 
                        dataSource={ tickets.slice(3) }
                        renderItem={ ticket => (
                            <List.Item>
                                <List.Item.Meta 
                                    title={ `Ticket No. ${ ticket.number }` }
                                    description={
                                        <>
                                            <Text type="secondary">On the desk: </Text>
                                            <Tag color="magenta"> { ticket.number } </Tag>
                                            <Text type="secondary"> Agent: </Text>
                                            <Tag color="volcano"> { ticket.agent } </Tag>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    
                    />

                </Col>
            </Row>
        </>
    )
}
