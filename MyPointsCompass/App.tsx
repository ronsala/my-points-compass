import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function App() {
	const [location, setLocation] = useState({});
	const [heading, setHeading] = useState({});
	const [errorMsg, setErrorMsg] = useState("");

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);

			let heading = await Location.getHeadingAsync();
			setHeading(heading);
		})();
	}, []);

	let locationText = "Waiting..";
	if (errorMsg) {
		locationText = errorMsg;
	} else if (location) {
		locationText = JSON.stringify(location);
	}
	let headingText = "Waiting..";
	if (errorMsg) {
		headingText = errorMsg;
	} else if (heading) {
		headingText = JSON.stringify(heading);
	}

	return (
		<View style={styles.container}>
			<Text>My Points Compass</Text>
			<Text></Text>
			<Text>Location: {locationText}</Text>
			<Text>Heading: {headingText}</Text>
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
