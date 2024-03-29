import { useState, useEffect } from "react";
import * as Location from "expo-location";
import Compass from "../components/Compass";

export default function CompassContainer() {
	interface LocationOptionsObject {
		enableHighAccuracy: boolean;
		timeInterval: number;
		distanceInterval: number;
	}

	interface HeadingObject {
		accuracy: number;
		magHeading: number;
		trueHeading: number;
	}

	const [positionOptions, setPositionOptions] = useState<LocationOptionsObject>(
		{
			enableHighAccuracy: true,
			timeInterval: 10000,
			distanceInterval: 100,
		}
	);

	const [location, setLocation] = useState<Location.LocationObject>({
		coords: {
			latitude: 0,
			longitude: 0,
			altitude: 0,
			accuracy: 0,
			altitudeAccuracy: 0,
			heading: 0,
			speed: 0,
		},
		timestamp: 0,
	});

	const [heading, setHeading] = useState<HeadingObject>({
		accuracy: 3,
		magHeading: 0,
		trueHeading: 0,
	});

	const [errorMsg, setErrorMsg] = useState("");

	const updateHeading = (headingObject: HeadingObject) => {
		setHeading(headingObject);
	};

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			Location.watchPositionAsync(
				positionOptions,
				(location: Location.LocationObject) => {
					setLocation(location);
				}
			);
			Location.watchHeadingAsync(updateHeading);
		})();
	}, []);

	let locationText = "Waiting..";
	if (errorMsg) {
		locationText = errorMsg;
	} else if (location) {
		locationText = `Lat: ${location.coords.latitude.toFixed(3)}, 
    Long: ${location.coords.longitude.toFixed(3)}`;
	}
	let headingText = "Waiting..";
	if (errorMsg) {
		headingText = errorMsg;
	} else if (heading) {
		headingText = heading.magHeading.toFixed();
	}

	const props = {
		loc: locationText,
		head: headingText,
	};

	return <Compass {...props} />;
}
