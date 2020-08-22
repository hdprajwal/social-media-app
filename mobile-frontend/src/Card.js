import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Card, Image, Button, Icon } from 'react-native-elements'

const DeviceWidth = Dimensions.get('window').width

export default function PostCard({ data }) {
	return (
		<View style={{ flex: 1, width: '100%', paddingTop: 5, alignItems: 'center' }}>
			<View style={{ backgroundColor: '#252B37', width: '100%', borderRadius: 5 }}>
				<View style={{ flexDirection: "row", padding: 10 }}>
					<View>
						<Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
							style={{ width: 40, height: 40, borderRadius: 20 }}
						/>
					</View>
					<View>
						<View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
							<Text style={{ color: 'white', paddingLeft: 10 }}>
								Funny
      </Text>
							<Text style={{ color: '#D6D9DB', paddingLeft: 10 }}>
								@UserName
      </Text>
							<Text style={{ color: '#ADB2B6', paddingLeft: 10, fontSize: 12 }}>
								2h
      </Text>
						</View>
						<View style={{ width: '98%' }}>
							<Text style={{ color: 'white', paddingLeft: 10, paddingRight: 10, fontSize: 14, flexWrap: 'wrap' }}>
								{data.title}
							</Text>
						</View>
					</View>
				</View>
				<View style={{ backgroundColor: '#fff', justifyContent: "center" }}>
					<Image source={{ uri: data.url }}
						style={{ width: DeviceWidth, height: 500 }}
					/>
				</View>
				<View style={{ flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
					<Icon
						name='thumb-up'
						type='material'
						color='#C8C8C8'
						size={24}
					/>
					<Icon
						name='thumb-down'
						type='material'
						color='#C8C8C8'
						size={24}
					/>
					<Icon
						name='chat'
						type='material'
						color='#C8C8C8'
						size={24}
					/>
					<Icon
						name='share'
						type='material'
						color='#C8C8C8'
						size={24}
					/>
					<Icon
						name='bookmark-border'
						type='material'
						color='#C8C8C8'
						size={24}
					/>
				</View>
			</View>
		</View>

	)
}