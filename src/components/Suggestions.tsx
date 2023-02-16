import { Box, Text, Flex, Heading } from "@chakra-ui/react";

import { UniversityCard } from "./UniversityCard";

export function Suggestions() {
	return (
		<Flex>
			<Flex>
				<Heading as="h2">Recommended universities</Heading>
				<Box>
					<Text>LIST</Text>
					<Text>MAP</Text>
				</Box>
			</Flex>
			<Flex>
				<UniversityCard />
			</Flex>
		</Flex>
	);
}
