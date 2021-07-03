import React from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer";
import styles from "./styles";

export default function Detail({ navigation }) {
	navigation.setOptions({
		headerTitle: "Nike",
	});

	return (
		<ScrollView style={styles.container}>
			<Image
				source={require("../../assets/detail.png")}
				style={styles.image}
				resizeMode="cover"
			/>

			<View>
				<View>
					<Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
				</View>
				<View opacity={0.4}>
					<Text style={[styles.title, { fontSize: 30 }]}>
						Nike Downshifter 10
					</Text>
				</View>

				<View style={styles.dotContainer}>
					<Dot color="#2379f4" />
					<Dot color="#fb6e53" />
					<Dot color="#ddd" />
					<Dot color="#000" />
				</View>

				<View style={{ flexDirection: "row", width: "100%" }}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<SizeButton bgColor="#17181a" color="#FFF">
							40
						</SizeButton>
						<SizeButton>37</SizeButton>
						<SizeButton>39</SizeButton>
						<SizeButton>42</SizeButton>
					</ScrollView>
				</View>

				<View style={styles.textContent}>
					<Text style={styles.textTitle}>Nike Downshifter 10</Text>
					<Text style={styles.textContent}>
						O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte
						atualizados, para garantir uma corrida estável e confortável. Esse
						tênis de corrida é confeccionado em material respirável, cabedal em
						couro sintético
					</Text>
					<Text style={styles.textList}>- Categoria: Amortecimento</Text>
					<Text style={styles.textList}>- Material: Mesh</Text>
				</View>

				<Button />

				<View style={styles.line} />

				<Footer />
			</View>
		</ScrollView>
	);
}
