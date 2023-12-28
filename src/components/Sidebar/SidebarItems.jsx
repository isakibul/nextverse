import CreatePost from "./CreatePost";
import Home from "./Home";
import Peoples from "./Peoples";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = () => {
    return (
        <>
            <Home />
            <Peoples />
            <Search />
            <CreatePost />
            <ProfileLink />
        </>
    );
};

export default SidebarItems;