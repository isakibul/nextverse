import CreatePost from "./CreatePost";
import Home from "./Home";
import People from "./People";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = () => {
    return (
        <>
            <Home />
            <People />
            <Search />
            <CreatePost />
            <ProfileLink />
        </>
    );
};

export default SidebarItems;