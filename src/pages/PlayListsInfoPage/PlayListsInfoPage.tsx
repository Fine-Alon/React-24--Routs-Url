import "./PlayListsInfoPage.css";
import {PLAYLISTS} from "../../data/playlists";
import {Link, useParams} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

export function PlayListsInfoPage() {
    let {playlistId} = useParams()

    const currentPlayList = PLAYLISTS[Number(playlistId)]

    if (!currentPlayList) {
        return (
            <div className="userInfoPage">
                <h2>UserInfoPage</h2>
                <div className="users">
                    <p>There no such play list with this ID</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>PlayListsInfoPage</h1>

            <h3>Genre: <Link to={"/playlists"}> {currentPlayList.genre}</Link></h3>

            <p>Name: {currentPlayList.name}</p>
            <div style={{borderBottom: '1px solid #ccc', margin: '10px 0'}}/>


            <ul>
                {currentPlayList.songs.map(song => <li key={uuidv4()}>
                    {song}</li>)}
            </ul>

        </div>
    );
}
