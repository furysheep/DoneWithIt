import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import colors from '../config/colors'
import { ListItem } from '../components/lists'

export default function ListingDetailsScreen({ route: { params } }) {
	return (
		<View style={styles.container}>
			<Image
				uri={params.images[0].url}
				tint='light'
				preview={{ uri: params.images[0].thumbnailUrl }}
				style={styles.image}></Image>
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{params.title}</Text>
				<Text style={styles.price}>{params.subTitle}</Text>
			</View>
			<ListItem
				title={params.owner.title}
				subTitle={params.owner.subTitle}
				image={params.owner.image}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	image: { height: 300, width: '100%' },
	detailsContainer: { marginLeft: 15, marginVertical: 20, marginBottom: 40 },
	title: { fontSize: 24, marginVertical: 10 },
	price: { color: colors.secondary, fontSize: 18, fontWeight: '500' }
})
