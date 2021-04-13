import React from 'react';
import { Col, Row, Typography, List, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const data = [
    {
        ticketNo: 33,
        desk: 3,
        agent: 'Ismael Gonzales'
    },
    {
        ticketNo: 34,
        desk: 4,
        agent: 'Maria Gutierrez'
    },
    {
        ticketNo: 35,
        desk: 5,
        agent: 'Carlos Castro'
    },
    {
        ticketNo: 36,
        desk: 3,
        agent: 'Ignacio Herrera'
    },
    {
        ticketNo: 37,
        desk: 3,
        agent: 'Raul Jara'
    },
    {
        ticketNo: 38,
        desk: 2,
        agent: 'Antonia Gallardo'
    },
    {
        ticketNo: 39,
        desk: 5,
        agent: 'Victor Sanchez'
    },
];

export const Queue = () => {

    useHideMenu(true);

    return (
        <>
            <Title level={ 1 }>Serving the customer</Title>
            <Row>
                <Col span={ 12 }>
                    <List 
                        dataSource={ data.slice(0,3) }
                        renderItem={ item => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 14 }}
                                    actions={[
                                        <Tag color="volcano"> { item.agent } </Tag>,
                                        <Tag color="magenta"> Desk: { item.desk } </Tag>,
                                    ]}
                                >
                                    <Title level={ 2 }> No. { item.ticketNo  }</Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>


                <Col span={ 12 }>

                    <Divider> History </Divider>
                    <List 
                        dataSource={ data.slice(3) }
                        renderItem={ item => (
                            <List.Item>
                                <List.Item.Meta 
                                    title={ `Ticket No. ${ item.ticketNo }` }
                                    description={
                                        <>
                                            <Text type="secondary">On the desk: </Text>
                                            <Tag color="magenta"> { item.ticketNo } </Tag>
                                            <Text type="secondary"> Agent: </Text>
                                            <Tag color="volcano"> { item.agent } </Tag>
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
