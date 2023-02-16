import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

type UCardProps = {
	university: string;
	state: string;
	img: string;
};

export function UniversityCard(props: UCardProps) {
	return (
		<Flex
			direction="column"
			w="38.4rem"
			h="fit-content"
			border="1px solid #EAEAEA"
			borderRadius="1rem"
		>
			<Box w="100%" h="15.3rem" overflow="hidden">
				<Img src={props.img} />
			</Box>
			<Flex
				direction="column"
				h="fit-content"
				p="1.6rem"
				justify="space-between"
				gap="1.6rem"
			>
				<Heading as="h3" fontSize="2rem" fontWeight={700} color="#121214">
					{props.university}
				</Heading>
				<Text fontSize="1.6rem" fontWeight={400} color="#000000bf">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint.
				</Text>
				<Flex gap="0.8rem">
					<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-7-catalog/2ead926aa93135bf69f858d47bdc08d1c1e80e8f/.github/magnifier.svg" />
					<Text fontSize="1.6rem" fontWeight={400} color="#000000bf">
						{props.state}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
