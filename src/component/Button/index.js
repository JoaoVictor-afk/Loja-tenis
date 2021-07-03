import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Button() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.btnContainer}>
				<Text style={styles.title}>COMPRAR</Text>
			</TouchableOpacity>
		</View>
	);
}
