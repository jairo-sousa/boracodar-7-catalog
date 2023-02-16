import { Flex, Heading, Text } from "@chakra-ui/react";
import { SearchArea } from "../components/SearchArea";

export function Introduction() {
	return (
		<Flex
			w="100%"
			h="53.2rem"
			justify="center"
			align="center"
			direction="column"
			gap="4rem"
			backgroundColor="#F8F8FF"
		>
			<Flex direction="column" justify="center" align="center" gap="1.8rem">
				<Heading as="h2" fontSize="1.6rem" fontWeight={500} color="#E45858">
					FIND YOUR UNIVERSITY
				</Heading>
				<Heading
					as="h1"
					fontSize="4.8rem"
					display="flex"
					flexWrap="wrap"
					justifyContent="center"
					fontWeight={700}
					color="#121214"
					w="64.7rem"
				>
					<Text marginRight="1.6rem">Find the</Text>
					<Text color="#6246EA">best university </Text>
					<Text>for you</Text>
				</Heading>
			</Flex>
			<SearchArea />
		</Flex>
	);
}
