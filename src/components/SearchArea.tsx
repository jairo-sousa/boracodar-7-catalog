import { Button, Flex, Input } from "@chakra-ui/react";

export function SearchArea() {
	return (
		<Flex
			w="97.8rem"
			h="12.8rem"
			borderRadius="1rem"
			border="0.1rem solid #EAEAEA"
			backgroundColor="#FFFFFF"
			align="center"
			justify="center"
			gap="2.4rem"
		>
			<Input
				fontSize="1.6rem"
				fontWeight={400}
				backgroundColor="#F4F4FF"
				color="#7C7C8A"
				w="34.8rem"
				h="4.8rem"
				placeholder="search by name"
			></Input>
			<Input
				fontSize="1.6rem"
				fontWeight={400}
				backgroundColor="#F4F4FF"
				color="#7C7C8A"
				w="34.8rem"
				h="4.8rem"
				placeholder="select a city"
			></Input>
			<Button
				w="15.4rem"
				h="4.8rem"
				backgroundColor="#6246EA"
				color="#FFFFFF"
				fontSize="1.4rem"
				fontWeight={700}
			>
				SEARCH NOW
			</Button>
		</Flex>
	);
}
