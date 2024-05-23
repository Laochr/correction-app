import React, { useState } from 'react';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Sani = ({ exercise }) => {
   const [itemsInSleigh, setItemsInSleigh] = useState([]);

   const handleDragStart = (e, item, type) => {
      e.dataTransfer.setData('item', JSON.stringify({ item, type }));
   };

   const handleDrop = (e) => {
      e.preventDefault();
      const { item, type } = JSON.parse(e.dataTransfer.getData('item'));
      const offsetX = e.clientX - e.target.getBoundingClientRect().left;
      const offsetY = e.clientY - e.target.getBoundingClientRect().top;

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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 800,
            margin: '0 auto',
            backgroundSize: 'cover',
            minHeight: '100vh',
            paddingTop: '20px',
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
                     marginBottom: '0px',
                     color: '#1890ff',
                     textAlign: 'center',
                  }}
               >
                  {exercise.tit}
               </Title>
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
               position: 'relative',
               width: '100%',
               height: '500px',
               marginBottom: '20px',
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
         >
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
                     top: item.y,
                     left: item.x,
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
      </div>
   );
};



export default Sani;
