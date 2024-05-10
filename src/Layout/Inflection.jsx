import React, { useState } from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Inflection = ({ exercise }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setFullscreenImage(imgSrc);
  };

  const handleCloseFullscreenImage = () => {
    setFullscreenImage(null);
  };

  if (!exercise) return null;

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

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center', // Центрирование изображений
        }}
      >
        {Array.isArray(exercise.image) ? (
          <div>
            {exercise.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${exercise.title}_${index}`}
                style={{
                  marginBottom: '10px',
                  maxWidth: '100%',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer', // Добавляем указатель при наведении для обозначения кликабельности
                }}
                onClick={() => handleImageClick(img)} // Добавляем обработчик клика для открытия на полный экран
              />
            ))}
          </div>
        ) : (
          <img
            src={exercise.image}
            alt={exercise.title}
            style={{
              maxWidth: '100%',
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer', // Добавляем указатель при наведении для обозначения кликабельности
            }}
            onClick={() => handleImageClick(exercise.image)} // Добавляем обработчик клика для открытия на полный экран
          />
        )}
      </div>

      {/* Изображение на полный экран */}
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
          onClick={handleCloseFullscreenImage} // Закрыть изображение на полный экран при клике на фон
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

export default Inflection;
