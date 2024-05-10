import React from 'react'
import { Card, Typography } from 'antd'

const { Title, Paragraph, Text } = Typography

const Grade3 = ({ exercise }) => {
	// Проверка на наличие данных об упражнении
	if (!exercise) return null

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
								}}
							/>
						))}
					</div>
				) : (
					<img
						src={exercise.image}
						alt={exercise.title}
						style={{
							maxWidth: '90%',
							borderRadius: '10px',
							boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
						}}
					/>
				)}
			</div>
		</div>
	)
}

export default Grade3
