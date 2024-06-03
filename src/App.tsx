import "./app.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {MainPage, UserInfoPage, UsersPage} from "./pages";
import {PlayLists} from "./pages/PlayLists";
import {PlayListsInfoPage} from "./pages/PlayListsInfoPage";

export function App() {
    return (
        <BrowserRouter>
            <div className="header">_</div>

            <div className="section">
                <nav className="navMenu">
                    <Link to={"/"}>Main</Link>
                    <Link to={"/users"}>Users</Link>
                    <Link to={"/playlists"}>Playlists</Link>
                </nav>

                <main className="content">
                    <Routes>
                        <Route path={'/'} element={<MainPage/>}/>
                        <Route path={'/users'} element={<UsersPage/>}/>
                        <Route path={'/playlists'} element={<PlayLists/>}/>
                        <Route path={'/users/:userId'} element={<UserInfoPage/>}/>
                        <Route path={'/playlists/:playlistId'} element={<PlayListsInfoPage/>}/>
                    </Routes>
                </main>
            </div>

            <div className="footer">
                <a href="https://skillbox.ru/code/">https://skillbox.ru/</a>
            </div>
        </BrowserRouter>
    );
}
