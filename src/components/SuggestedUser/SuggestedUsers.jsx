import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUser from "../../hooks/useGetSuggestedUser";

const SuggestedUsers = () => {
    const { isLoading, suggestedUsers } = useGetSuggestedUser();

    // optional: render loading skeleton
    if (isLoading) return null;

    return (
        <VStack py={8} px={6} gap={4}>
            {/* <SuggestedHeader /> */}

            {suggestedUsers.length !== 0 && (
                <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        People you may know
                    </Text>
                    <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                        See All
                    </Text>
                </Flex>
            )}

            {suggestedUsers.map((user) => (
                <SuggestedUser user={user} key={user.id} />
            ))}
        </VStack>
    );
};

export default SuggestedUsers;