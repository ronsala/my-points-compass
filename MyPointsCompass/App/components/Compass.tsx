import { Text } from "react-native";

export type CompassProps = {
	loc: string;
	head: string;
};

const Compass = (props: CompassProps) => {
	return (
		<>
			<Text>Location: {props.loc}</Text>
			<Text>Magnetic Heading: {props.head}</Text>
		</>
	);
};

export default Compass;
