import {
    Button,
    Flex,
    Input,
    InputGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import Comment from "../Comment/Comment";
import usePostComment from "../../hooks/usePostComment";
import { useEffect, useRef } from "react";

const CommentsModal = ({ isOpen, onClose, post }) => {
    const { handlePostComment, isCommenting } = usePostComment();
    const commentRef = useRef(null);
    const commentsContainerRef = useRef(null);
    const handleSubmitComment = async (e) => {
        // do not refresh the page, prevent it
        e.preventDefault();
        await handlePostComment(post.id, commentRef.current.value);
        commentRef.current.value = "";
    };

    useEffect(() => {
        const scrollToBottom = () => {
            commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight;
        };
        if (isOpen) {
            setTimeout(() => {
                scrollToBottom();
            }, 100);
        }
    }, [isOpen, post.comments.length]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
            <ModalOverlay />
            <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
                <ModalHeader>Comments</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Flex
                        mb={4}
                        gap={4}
                        flexDir={"column"}
                        maxH={"250px"}
                        overflowY={"auto"}
                        ref={commentsContainerRef}
                    >
                        {post.comments.map((comment, idx) => (
                            <Comment key={idx} comment={comment} />
                        ))}
                    </Flex>
                    <form onSubmit={handleSubmitComment} style={{ marginTop: "2rem" }}>
                        <InputGroup>
                            <Input placeholder='Comment' size={"sm"} ref={commentRef} />
                            <Button type='submit' size={"sm"} isLoading={isCommenting}>
                                Post
                            </Button>
                        </InputGroup>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CommentsModal;