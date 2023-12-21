import { Container, Flex, Box } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPost/FeedPosts"
import SuggestedUsers from "../../components/SuggestedUser/SuggestedUsers"

const HomePage = () => {
    return (
        <Container maxW={"container.lg"} mt={"4"}>
            <Flex gap={20}>
                <Box flex={2}>
                    <FeedPosts />
                </Box>
                <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"} >
                    <SuggestedUsers />
                </Box>
            </Flex>
        </Container>
    )
}

export default HomePage