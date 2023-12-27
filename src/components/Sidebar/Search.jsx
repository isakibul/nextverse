import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import useSearchUser from "../../hooks/useSearchUser";
import { useRef } from "react";
import SuggestedUser from "../SuggestedUser/SuggestedUser";

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchRef = useRef(null);
    const { user, isLoading, getUserProfile, setUser } = useSearchUser();

    const handleSearchUser = (e) => {
        e.preventDefault();
        getUserProfile(searchRef.current.value);
    };

    return (
        <>
            <Tooltip
                hasArrow
                label={"Search"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Flex
                    alignItems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
                >
                    <FaSearch fontSize={25} />
                    <Box display={{ base: "none", md: "block" }}>Search</Box>
                </Flex>
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
                <ModalOverlay />
                <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
                    <ModalHeader>Search user</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSearchUser}>
                            <FormLabel>Username</FormLabel>
                            <InputGroup mb={4}>
                                <FormControl>
                                    <Input ref={searchRef} />
                                </FormControl>
                                <Flex>
                                    <Button type='submit' isLoading={isLoading}>
                                        Search
                                    </Button>
                                </Flex>
                            </InputGroup>
                        </form>
                        {user && <SuggestedUser user={user} setUser={setUser} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Search;