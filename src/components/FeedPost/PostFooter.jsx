import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";



const PostFooter = ({ username, isProfilePage }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }
    return (
        <>
            <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
                <Box onClick={handleLike} cursor={"pointer"} fontSize={30}>
                    {!liked ? <AiOutlineLike /> : <AiFillLike />}
                </Box>
                <Box cursor={"pointer"} fontSize={22} mt={2}>
                    <FaRegCommentAlt />
                </Box>
            </Flex>

            {!isProfilePage && (
                <>
                    <Text fontWeight={600} fontSize={"sm"}>
                        {likes} like
                    </Text>
                    <Text fontSize={"sm"} fontWeight={700}>
                        {username} {" "}
                        <Text as='span' fontWeight={400}>
                            Felling good
                        </Text>
                    </Text>
                    <Text fontSize={"sm"} color={"gray"}>
                        View all 1000 comments
                    </Text>
                </>
            )}

            <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
                <InputGroup>
                    <Input variant={"flushed"} placeholder="Add a comment" fontSize={14} />
                    <InputRightElement>
                        <Button
                            fontSize={14}
                            fontWeight={600}
                            color={"blue.500"}
                            cursor={"pointer"}
                            bg={"transparent"}
                            _hover={{
                                color: "white",
                            }}
                        >
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </>
    )
}

export default PostFooter