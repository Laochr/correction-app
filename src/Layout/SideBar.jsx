import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard'; // Импортируйте нужные компоненты
import BreathingExerciseCard from './BreathingExerciseCard';
import SpeechUnderstandingExerciseCard from './SpeechUnderstandingExerciseCard';
import SubAndVerbDict from './SubAndVerbDicti';
import Inflection from './Inflection';
import Rechevoe from './Rechevoe';
import Slovoobraz from './Obraz';
import Svyz from './Svyz';

import exercisesData from './data/articulationExercisesData.json';
import breathingExercisesData from './data/breathingExercisesData.json';
import SpeechUnderstandingExercisesData from './data/SpeechUnderstandingExercise.json';
import SubAndVerbDictiData from './data/SubAndVerbDictiData.json';
import InflectionData from './data/InflectionData.json';
import RechevoeData from './data/RechevoeData.json';
import slovoobrazData from './data/slovoobrazData.json';
import svyzData from './data/svyzData.json';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function SidebarPage() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleMenuClick = (menuKey, exercise) => {
    setSelectedMenu(menuKey);
    setSelectedExercise(exercise);
  };

  return (
    <Layout style={{ maxHeight: '100vh' }}>
      <Sider width={320} style={{ background: '#fff', position: 'fixed', overflowY: 'auto', height: '100vh' }}>
        <div className='logo'>
          <Link to='/correction-app/'>
            <img
              src='./assets/LogoKids.png'
              alt='Logo'
              style={{ width: '140px', marginLeft: '60px' }}
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
            key="content-articulation"
            icon={<MailOutlined />}
            title="Артикуляционная гимнастика"
          >
            <Menu className="submenu-items"> {/* Добавляем класс для скроллинга */}
              {exercisesData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('articulation', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-breathing'
            icon={<MailOutlined />}
            title='Дыхательная гимнастика'
          >
            <Menu className="submenu-items"> 
              {breathingExercisesData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('breathing', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-speechunderstanding'
            icon={<MailOutlined />}
            title='Понимание речи'
          >
            <Menu className="submenu-items"> 
              {SpeechUnderstandingExercisesData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('speechunderstanding', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-Rechevoe'
            icon={<MailOutlined />}
            title='Развитие фонематического слуха и восприятия'
          >
            <Menu className="submenu-items"> 
              {RechevoeData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('Rechevoe', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-SubAndVerbDicti'
            icon={<MailOutlined />}
            title='Предметно-глагольный словарь'
          >
            <Menu className="submenu-items"> 
              {SubAndVerbDictiData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('SubAndVerbDict', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-Inflection'
            icon={<MailOutlined />}
            title='Словоизменение'
          >
            <Menu className="submenu-items"> 
              {InflectionData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('Inflection', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-slovoobraz'
            icon={<MailOutlined />}
            title='Словообразование'
          >
            <Menu className="submenu-items"> 
              {slovoobrazData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('slovoobraz', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key='content-svyz'
            icon={<MailOutlined />}
            title='Связная речь'
          >
            <Menu className="submenu-items"> 
              {svyzData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('svyz', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
          </SubMenu>
          <SubMenu
            key="content-zvukoproiz"
            icon={<MailOutlined />}
            title="Звукопроизношение"
          >
           <SubMenu key="submenu1" title="Свистящие">
            <SubMenu key="submenu1_1" title="Звук С">
            <Menu className="submenu-items"> 
              {svyzData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('ZvukC', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
            </SubMenu>
            <SubMenu key="submenu1_2" title="Звук З">
            <Menu className="submenu-items"> 
              {svyzData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('svyz', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
            </SubMenu>
          </SubMenu>
            <SubMenu key="submenu2" title="Шипящие">
            <SubMenu key="submenu1_1" title="Звук Ш">
            <Menu className="submenu-items"> 
              {svyzData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('ZvukC', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
            </SubMenu>
            <SubMenu key="submenu1_2" title="Звук Ж">
            <Menu className="submenu-items"> 
              {svyzData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('svyz', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
            </SubMenu>
            </SubMenu>
            <SubMenu key="submenu3" title="Соноры">
            <SubMenu key="submenu1_1" title="Звук Л">
            <Menu className="submenu-items"> 
              {svyzData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('ZvukC', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
            </SubMenu>
            <SubMenu key="submenu1_2" title="Звук Р">
            <Menu className="submenu-items"> 
              {svyzData.map(exercise => (
                <Menu.Item key={exercise.id} onClick={() => handleMenuClick('svyz', exercise)}>
                  {exercise.exercise}
                </Menu.Item>
              ))}
            </Menu>
            </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 300 }}>
        <Content style={{ background: '#fff', padding: 24, overflowY: 'auto', height: '95vh' }}>
          {!selectedMenu && (
            <div style={{ textAlign: 'center', paddingTop: '100px' }}>
              <h1>Выберите блок для коррекции</h1>
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
                <ExerciseCard exercise={selectedExercise} />
              )}
              {selectedMenu === 'breathing' && (
                <BreathingExerciseCard exercise={selectedExercise} />
              )}
              {selectedMenu === 'speechunderstanding' && (
                <SpeechUnderstandingExerciseCard exercise={selectedExercise} />
              )}
              {selectedMenu === 'SubAndVerbDict' && (
                <SubAndVerbDict exercise={selectedExercise} />
              )}
              {selectedMenu === 'Inflection' && (
                <Inflection exercise={selectedExercise} />
              )}
              {selectedMenu === 'Rechevoe' && (
                <Rechevoe exercise={selectedExercise} />
              )}
              {selectedMenu === 'slovoobraz' && (
                <Slovoobraz exercise={selectedExercise} />
              )}
              {selectedMenu === 'svyz' && (
                <Svyz exercise={selectedExercise} />
              )}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default SidebarPage;
