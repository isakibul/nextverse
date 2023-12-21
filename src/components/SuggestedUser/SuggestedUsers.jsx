import { VStack, Box, Flex, Text } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
    return (
        <VStack mt={4} py={2} px={6} gap={4}>
            {/* <SuggestedHeader /> */}

            <Flex alignItems={"center"} justifyContent={"space-between"} width={"full"}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    People you may know
                </Text>
                <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                    See All
                </Text>
            </Flex>

            <SuggestedUser name="abhinav" connects={232} avatar="/profilepic.png" />
            <SuggestedUser name="alyx" connects={542} avatar="/img1.png" />
            <SuggestedUser name="johnson" connects={643} avatar="/img2.png" />
            <SuggestedUser name="johnson" connects={643} avatar="/img3.png" />
            <SuggestedUser name="alyx" connects={542} avatar="/img4.png" />

        </VStack>
    )
}

export default SuggestedUsers