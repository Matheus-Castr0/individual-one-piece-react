import useTitlePage from "../../../hooks/useTitlePage"
import Header from "../../Header";
import Sidebar from "../../Sidebar";

export default function Main() {
    useTitlePage("One Piece - Home");

    return(
        <>
            <Header direction="row" position="end">
                <Sidebar />
            </Header>
        </>
    )
}