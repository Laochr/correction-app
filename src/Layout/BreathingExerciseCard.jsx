import React from 'react'
import { Card, Typography } from 'antd'

const { Title, Paragraph, Text } = Typography

const BreathingExerciseCard = ({ exercise }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				maxWidth: 800,
				margin: '0 auto',
			}}
		>
			<Card
				style={{
					flex: 1,
					boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
					borderRadius: '10px',
					marginRight: '20px',
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
					<Paragraph>
						<Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
							Описание:
						</Text>{' '}
						{exercise.description}
					</Paragraph>
				</div>
			</Card>

			<div
				style={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: '20px',
				}}
			>
				<button
					style={{ border: 'none', background: 'none', cursor: 'pointer' }}
				>
					<img
						src={exercise.image}
						alt={exercise.title}
						style={{
							maxWidth: '125%',
							borderRadius: '10px',
							boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
						}}
					/>
				</button>
			</div>
		</div>
	)
}

export default BreathingExerciseCard
