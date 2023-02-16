import { Text, Flex, Heading } from "@chakra-ui/react";

import { UniversityCard } from "./UniversityCard";
import { universities } from "../utils/universities";

export function Suggestions() {
	return (
		<Flex
			w="121.6rem"
			direction="column"
			justify="center"
			align="center"
			py="10rem"
			gap="4rem"
		>
			<Flex justify="space-between" width="100%">
				<Heading as="h2" fontSize="3.2rem" color="#121214" fontWeight={700}>
					Recommended universities
				</Heading>
				<Flex
					justify="center"
					align="center"
					border="1px solid #EAEAEA"
					borderRadius="0.6rem"
					p="0.8rem"
				>
					<Text
						borderRadius="0.5rem"
						fontSize="1.4rem"
						fontWeight={700}
						p="0.4rem 2.4rem"
						backgroundColor="#6246EA"
						color="#FFFFFF"
					>
						LIST
					</Text>
					<Text
						borderRadius="0.5rem"
						fontSize="1.4rem"
						fontWeight={700}
						p="0.4rem 2.4rem"
					>
						MAP
					</Text>
				</Flex>
			</Flex>

			<Flex gap="3.2rem" wrap="wrap">
				{universities.map((university, i) => {
					return (
						<UniversityCard
							key={`${university} - ${i}`}
							university={university.university}
							img={university.img}
							state={university.state}
						/>
					);
				})}
			</Flex>
		</Flex>
	);
}
