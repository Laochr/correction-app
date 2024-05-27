import React, { useState } from 'react';
import { Card, Typography, Button, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Sani = ({ exercise }) => {
  const [itemsInSleigh, setItemsInSleigh] = useState([]);
  const [exerciseStarted, setExerciseStarted] = useState(false);

  const handleDragStart = (e, item, type) => {
    e.dataTransfer.setData('item', JSON.stringify({ item, type }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { item, type } = JSON.parse(e.dataTransfer.getData('item'));
    const sleighRect = e.target.getBoundingClientRect();
    const itemWidth = 100;
    const itemHeight = 100;

    const offsetX = e.clientX - sleighRect.left - itemWidth / 2;
    const offsetY = e.clientY - sleighRect.top - itemHeight / 2;

    if (type === 'item') {
      setItemsInSleigh([...itemsInSleigh, { src: item, x: offsetX, y: offsetY }]);
    } else {
      setItemsInSleigh(itemsInSleigh.filter(i => i.src !== item.src));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeItemFromSleigh = (itemToRemove) => {
    setItemsInSleigh(itemsInSleigh.filter(item => item.src !== itemToRemove.src));
  };

  if (!exercise) return null;

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 800,
        margin: '0 auto',
        minHeight: '100vh',
        paddingTop: '20px',
      }}
    >
      {!exerciseStarted && (
        <>
          <Card
            style={{
              width: '100%',
              marginBottom: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              zIndex: 1,
              background: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <div style={{ padding: '5px' }}>
                    <Title
                       level={3}
                       style={{
                          marginBottom: '20px',
                          color: '#1890ff',
                          textAlign: 'center',
                       }}
                    >
                       {exercise.exercise}
                    </Title>
                    <Paragraph style={{ marginBottom: '20px', textAlign: 'center' }}>
                       <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
                          Цель:
                       </Text>{' '}
                       {exercise.tit}
                    </Paragraph>
                    {/* <Paragraph style={{ marginBottom: '20px', textAlign: 'center' }}>
                       <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
                          Описание:
                       </Text>{' '}
                       {exercise.description}
                    </Paragraph> */}
            </div>
          </Card>
          <div
            style={{
              width: '100%',
              height: '500px',
              marginBottom: '20px',
              position: 'relative',
            }}
          >
            <img
              src={exercise.background}
              alt="Background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <Button type="primary" onClick={() => setExerciseStarted(true)}>
            Начать
          </Button>
        </>
      )}

      {exerciseStarted && (
        <>
          <Card
            style={{
              width: '100%',
              marginBottom: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              zIndex: 1,
              background: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <div style={{ padding: '5px' }}>
             
              <Title
            level={3}
            style={{
              marginBottom: '20px',
              color: '#1890ff',
              textAlign: 'center',
            }}
          >
            {exercise.exercise}
          </Title>
          <Paragraph style={{ marginBottom: '20px', textAlign: 'center' }}>
            <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
              Цель:
            </Text>{' '}
            {exercise.tit}
          </Paragraph>
              {/* <Paragraph style={{ marginBottom: '20px', textAlign: 'center' }}>
                 <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
                    Описание:
                 </Text>{' '}
                 {exercise.description}
              </Paragraph> */}
            </div>
          </Card>

          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              marginBottom: '20px',
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {!exerciseStarted && (
              <img
                src={exercise.background}
                alt="Background"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                }}
              />
            )}
            <img
              src={exercise.sleigh}
              alt="Sleigh"
              style={{
                width: '400px',
                height: '400px',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            {itemsInSleigh.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={`Item ${index}`}
                draggable
                onDragStart={(e) => handleDragStart(e, item, 'sleighItem')}
                onDoubleClick={() => removeItemFromSleigh(item)}
                style={{
                  position: 'absolute',
                  top: '186.287px',
                  left: '329px',
                  maxHeight: '100px',
                  maxWidth: '100px',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {exercise.items.map((item, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, item, 'item')}
                style={{
                  width: '100px',
                  height: '100px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={item}
                  alt={`Item ${index + 1}`}
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ZvukG = ({ exercise }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setFullscreenImage(imgSrc);
  };

  const handleCloseFullscreenImage = () => {
    setFullscreenImage(null);
  };

  if (!exercise) return null;

  const images = Array.isArray(exercise.image) ? exercise.image : [exercise.image];

  const rows = [];
  for (let i = 0; i < images.length; i += 4) {
    rows.push(images.slice(i, i + 4));
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      <Card
        style={{
          width: '100%',
          marginBottom: '20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <div style={{ padding: '5px' }}>
        
          <Title
            level={3}
            style={{
              marginBottom: '20px',
              color: '#1890ff',
              textAlign: 'center',
            }}
          >
            {exercise.exercise}
          </Title>
          <Paragraph style={{ marginBottom: '20px', textAlign: 'center' }}>
            <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
              Цель:
            </Text>{' '}
            {exercise.tit}
          </Paragraph>
              {/* <Paragraph style={{ marginBottom: '20px', textAlign: 'center' }}>
                 <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
                    Описание:
                 </Text>{' '}
                 {exercise.description}
              </Paragraph> */}
        </div>
      </Card>

      {rows.map((row, index) => (
        <Row key={index} gutter={[16, 16]} justify="center">
          {row.map((img, imgIndex) => (
            <Col key={imgIndex}>
              <img
                src={img}
                alt={`${exercise.title}_${index}_${imgIndex}`}
                style={{
                  marginBottom: '10px',
                  maxWidth: '100%',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                }}
                onClick={() => handleImageClick(img)}
              />
            </Col>
          ))}
        </Row>
      ))}

      {fullscreenImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleCloseFullscreenImage}
        >
          <img
            src={fullscreenImage}
            alt="fullscreen"
            style={{ maxHeight: '90%', maxWidth: '90%', borderRadius: '10px' }}
          />
        </div>
      )}
    </div>
  );
};

const ExercisePage = ({ exercise }) => {
  return exercise.id === 2 ? <Sani exercise={exercise} /> : <ZvukG exercise={exercise} />;
};

export default ExercisePage;
