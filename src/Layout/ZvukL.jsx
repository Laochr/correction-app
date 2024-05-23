import React, { useState } from 'react';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

const ZvukL = ({ exercise }) => {
   const [fullscreenImage, setFullscreenImage] = useState(null);

   const handleImageClick = (imgSrc) => {
      setFullscreenImage(imgSrc);
   };

   const handleCloseFullscreenImage = () => {
      setFullscreenImage(null);
   };

   if (!exercise) return null;

   const images = Array.isArray(exercise.image) ? exercise.image : [exercise.image];

   // Splitting images into rows of four
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

         {/* Fullscreen Image */}
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

export default ZvukL;
