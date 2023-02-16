import { Flex } from "@chakra-ui/react";
import { Introduction } from "./components/Introduction";
import { Suggestions } from "./components/Suggestions";

export function App() {
	return (
		<Flex className="App" direction="column" justify="center" align="center">
			<Introduction />
			<Suggestions />
		</Flex>
	);
}
