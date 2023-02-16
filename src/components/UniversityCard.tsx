import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

export function UniversityCard() {
	return (
		<Flex>
			<Img />
			<Heading as="h3">Title</Heading>
			<Text>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint.
			</Text>
			<Box>
				<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-7-catalog/2ead926aa93135bf69f858d47bdc08d1c1e80e8f/.github/magnifier.svg" />
				<Text>City</Text>
			</Box>
		</Flex>
	);
}
