import React from 'react';
import {
    Box,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    Tooltip,
    useDisclosure,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FaUserFriends } from 'react-icons/fa';
import useGetSuggestedUser from '../../hooks/useGetSuggestedUser';
import SuggestedUser from '../SuggestedUser/SuggestedUsers';

const Peoples = () => {
    const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure();
    const { suggestedUsers } = useGetSuggestedUser();

    const isMobile = useBreakpointValue({ base: false, md: true });

    if (isMobile) {
        return null;
    }

    return (
        <>
            <Tooltip
                hasArrow
                label={'Notifications'}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: 'block', md: 'none' }}
            >
                <Flex
                    alignItems='center'
                    gap={4}
                    _hover={{ bg: 'whiteAlpha.400' }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: 'full' }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    onClick={onOpen}
                >
                    <FaUserFriends fontSize={20} />
                    <Box display={{ base: 'none', md: 'block' }}>Peoples</Box>
                </Flex>
            </Tooltip>

            <Modal isOpen={isModalOpen} onClose={onClose} motionPreset='slideInLeft'>
                <ModalOverlay />
                <ModalContent bg={'black'} border={'1px solid gray'} maxW={'400px'}>
                    <ModalCloseButton mt={suggestedUsers.length > 0 ? 2 : 0} />
                    <ModalBody pb={6}>
                        <Box>
                            {suggestedUsers.length > 0 ? (
                                <Box>
                                    {
                                        suggestedUsers.map((user) => (
                                            <SuggestedUser user={user} key={user.id} />
                                        ))
                                    }
                                </Box>
                            ) : (
                                <Text>You have no user suggestions.</Text>
                            )}
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Peoples;
