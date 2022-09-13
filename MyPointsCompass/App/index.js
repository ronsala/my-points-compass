// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CompassContainer from "./containers/CompassContainer";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>My Points Compass</Text>
			<Text></Text>
			<CompassContainer />

			{/* <StatusBar hidden={false} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
