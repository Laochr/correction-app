
import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button } from 'antd'
import {
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, theme } from 'antd'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const MainPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
            <Layout style={{maxHeight: '100vh'}}>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        height: '20%',
                        display: 'flex',
                        justifyContent: 'space-between', // Adjusted to space between items
                        alignItems: 'center',
                        paddingLeft: '20px', // Added padding to the left
                        paddingRight: '20px', // Added padding to the right
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to='/correction-app'>
                            <img
                                src='./assets/LogoKids.png'
                                alt='Logo'
                                style={{
                                    maxWidth: '80px', // Adjust the maximum width of the logo
                                    height: 'auto', // Ensure the height adjusts proportionally
                                }}
                            />
                        </Link>
                        <div style={{ marginLeft: '530px' }}>
                            <Title level={2} style={{ margin: 0 }}>
                                Речевое развитие
                            </Title>
                        </div>
                    </div>
                </Header>

                <Content
                    style={{
                        position: 'relative',
				
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            padding: 24,
                            minHeight: '80vh',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Link to='/correction-app/correction'>
                            <Button
                                type='default'
                                shape='rectangle'
                                icon={<UserOutlined />}
                                size='large'
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '20%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '200px',
                                    height: '100px',
                                }}
                            >
                                Коррекция
                            </Button>
                        </Link>
                        <Link to='/correction-app/grade'>
                            <Button
                                type='default'
                                shape='rectangle'
                                icon={<VideoCameraOutlined />}
                                size='large'
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '20%',
                                    transform: 'translate(50%, -50%)',
                                    width: '200px',
                                    height: '100px',
                                }}
                            >
                                Оценка
                            </Button>
                        </Link>
                        <img
                            src='./assets/6490281.jpg'
                            alt='Фон'
                            style={{
                                width: '40%',
                            }}
                        />
                    </div>
                </Content>

                <Footer
                    style={{
                        textAlign: 'center',
                        background: colorBgContainer,
                    }}
                >
                    Разработано студентами группы ДФ-20: Абдрахманова, Никоненко, Соболева
                </Footer>
            </Layout>
    );
};
export default MainPage;



