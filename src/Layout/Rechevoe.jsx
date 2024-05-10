import React, { useState } from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { Howl } from 'howler';

const { Title, Paragraph, Text } = Typography;

const Rechevoe = ({ exercise }) => {
  const handleImageClick = (imgSrc, soundSrc, e) => {
    e.preventDefault(); // Prevent default zoom behavior
    playSound(soundSrc);
  };

  const playSound = (soundSrc) => {
    const sound = new Howl({
      src: [soundSrc],
    });
    sound.play();
  };

  if (!exercise) return null;

  const images = Array.isArray(exercise.image) ? exercise.image : [exercise.image];
  const numColumns =
  exercise.id === 'exercise1' || exercise.id === 'exercise2' ? 2 :
  exercise.id === 'exercise3' ? 2 :
  exercise.id === 'exercise4' || exercise.id === 'exercise5' || exercise.id === 'exercise6' ? 'flex' :
  1;

// Determine the width of images based on the number of columns
const imageWidth =
  numColumns === 2 ? '50%' :
  numColumns === 3 ? '50%' :
  numColumns === 'flex' ? 'auto' :
  'auto';

// Determine the image display style based on the number of columns
const imageDisplayStyle =
  numColumns === 'flex' ? {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', // Центрирование изображений
  } :
  {};
  
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
        <div style={{ padding: '20px' }}>
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
            {exercise.description}
          </Paragraph>
        </div>
      </Card>

      {/* Render images in rows */}
      <Row gutter={[16, 16]} justify="center">
        {images.map((img, imgIndex) => (
          <Col key={imgIndex} span={24 / numColumns} style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={img.src}
              alt={`${exercise.title}_${imgIndex}`}
              style={{
                marginBottom: '10px',
                maxWidth: '100%',
                width: exercise.id === 'exercise2' ? '600px' : (exercise.id === 'exercise6' ? '500px' : (exercise.id === 'exercise4' || exercise.id === 'exercise5' ? '400px' : imageWidth)),
                height: exercise.id === 'exercise2' || exercise.id === 'exercise6' ? 'auto' : (exercise.id === 'exercise4' || exercise.id === 'exercise5' ? 'auto' : '300px'),
              }}
              onClick={(e) => handleImageClick(img.src, img.soundSrc, e)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Rechevoe;
