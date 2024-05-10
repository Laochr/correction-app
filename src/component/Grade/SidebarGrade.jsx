import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Grade1 from './Grade1';
import Grade2 from './Grade2';
import Grade3 from './Grade3';

import grade1Data from './data/grade1Data.json'
import grade2Data from './data/grade2Data.json'
import grade3Data from './data/grade3Data.json'


const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function SidebarPageGrade() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleMenuClick = (menuKey, exercise) => {
    setSelectedMenu(menuKey);
    setSelectedExercise(exercise);
  };

  return (
    <Layout style={{ maxHeight: '100vh' }}>
      <Sider width={380}  style={{ background: '#fff', position: 'fixed', overflowY: 'auto', height: '100vh' }}>
        <div className='logo'>
          <Link to='/correction-app/'>
            <img
              src='./assets/LogoKids.png'
              alt='Logo'
              style={{ width: '140px', marginLeft: '100px' }}
            />
          </Link>
        </div>
        <Menu
          mode='inline'
          selectedKeys={[selectedMenu]}
          style={{
            borderRight: 0,
          }}
        >
          <SubMenu
            key='content-grade1'
            icon={<MailOutlined />}
            title='Оценка речевого развития детей с общим недоразвитием речи 1 уровня'
          >
            <Menu className="submenu-items"> 
            {grade1Data.map(exercise => (
              <Menu.Item key={exercise.id} onClick={() => handleMenuClick('articulation', exercise)}>
                {exercise.exercise}
              </Menu.Item>
            ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-grade2'
            icon={<MailOutlined />}
            title='Оценка речевого развития детей с общим недоразвитием речи 2 уровня'
          >
            <Menu className="submenu-items"> 
            {grade2Data.map(exercise => (
              <Menu.Item key={exercise.id} onClick={() => handleMenuClick('breathing', exercise)}>
                {exercise.exercise}
              </Menu.Item>
            ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-grade3'
            icon={<MailOutlined />}
            title='Оценка речевого развития детей с общим недоразвитием речи 3 уровня'
          >
            <Menu className="submenu-items"> 
            {grade3Data.map(exercise => (
              <Menu.Item key={exercise.id} onClick={() => handleMenuClick('speechunderstanding', exercise)}>
                {exercise.exercise}
              </Menu.Item>
            ))}
            </Menu>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 300 }}>
        <Content style={{ background: '#fff', padding: 24, overflowY: 'auto', height: '95vh' }}>
          {!selectedMenu && (
            <div style={{ textAlign: 'center', paddingTop: '100px' }}>
              <h1>Выберите методику для оценки</h1>
            </div>
          )}
          {selectedMenu && !selectedExercise && (
            <div style={{ textAlign: 'center', paddingTop: '100px' }}>
              <h1>Выберите упражнение</h1>
            </div>
          )}
          {selectedExercise && (
            <div>
              {selectedMenu === 'articulation' && (
                <Grade1 exercise={selectedExercise} />
              )}
              {selectedMenu === 'breathing' && (
                <Grade2 exercise={selectedExercise} />
              )}
              {selectedMenu === 'speechunderstanding' && (
                <Grade3 exercise={selectedExercise} />
              )}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default SidebarPageGrade;
