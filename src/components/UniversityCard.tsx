import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

export function UniversityCard() {
	return (
		<Flex
			direction="column"
			w="38.4rem"
			h="32.3rem"
			border="1px solid #EAEAEA"
			borderRadius="1rem"
		>
			<Box w="100%" h="32.3rem" overflow="hidden">
				<Img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" />
			</Box>
			<Flex direction="column" h="100%" p="1.6rem" justify="space-between">
				<Heading as="h3" fontSize="2rem" fontWeight={700} color="#121214">
					Title
				</Heading>
				<Text fontSize="1.6rem" fontWeight={400} color="#000000bf">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint.
				</Text>
				<Flex gap="0.8rem">
					<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-7-catalog/2ead926aa93135bf69f858d47bdc08d1c1e80e8f/.github/magnifier.svg" />
					<Text fontSize="1.6rem" fontWeight={400} color="#000000bf">
						City
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
