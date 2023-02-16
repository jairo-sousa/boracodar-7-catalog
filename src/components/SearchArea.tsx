import { Button, Flex, Img, Input } from "@chakra-ui/react";

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
			<Flex
				backgroundColor="#F4F4FF"
				w="34.8rem"
				h="4.8rem"
				align="center"
				px="1.4rem"
			>
				<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-7-catalog/2ead926aa93135bf69f858d47bdc08d1c1e80e8f/.github/magnifier.svg"></Img>
				<Input
					borderRadius="0.5rem"
					fontSize="1.6rem"
					fontWeight={400}
					color="#7C7C8A"
					placeholder="search by name"
					border="none"
				></Input>
			</Flex>
			<Flex
				backgroundColor="#F4F4FF"
				w="34.8rem"
				h="4.8rem"
				align="center"
				px="1.4rem"
			>
				<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-7-catalog/2ead926aa93135bf69f858d47bdc08d1c1e80e8f/.github/location.svg"></Img>

				<Input
					borderRadius="0.5rem"
					fontSize="1.6rem"
					fontWeight={400}
					color="#7C7C8A"
					border="none"
					placeholder="select a city"
				></Input>
				<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-7-catalog/2ead926aa93135bf69f858d47bdc08d1c1e80e8f/.github/arrow.svg"></Img>
			</Flex>

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
