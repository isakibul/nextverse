import { Flex, Box, Spinner } from "@chakra-ui/react"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useLocation } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const renderSidebar = pathname !== "/auth" && user;
    const renderNavbar = !user && pathname !== '/auth' && !loading;

    const checkUserAuthentication = !user && loading;
    if (checkUserAuthentication) return <PageLayoutSpinner />

    return (
        <Flex flexDir={renderNavbar ? "column" : "row"}>
            {renderSidebar ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar />
                </Box>
            ) : null}

            {renderNavbar ? < Navbar /> : null}
            <Box flex={1} width={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout

const PageLayoutSpinner = () => {
    return (
        <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
            <Spinner size='xl' />
        </Flex>
    );
};