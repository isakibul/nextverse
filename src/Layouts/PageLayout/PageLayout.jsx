import { Flex, Box } from "@chakra-ui/react"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { useLocation } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const renderSidebar = pathname !== "/auth" && user;
    return (
        <Flex>
            {renderSidebar ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar />
                </Box>
            ) : null}

            <Box flex={1} width={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout