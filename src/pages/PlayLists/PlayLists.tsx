import "./PlayLists.css";
import {PLAYLISTS} from "../../data/playlists";
import {Link} from "react-router-dom";

export function PlayLists() {

    const playLists = PLAYLISTS || null

    const filteredPlayList = playLists?.filter(({genre}) => genre !== 'Non Music')

    return (
        <div>
            <h1>PlayListsPage</h1>

            <div>
                {filteredPlayList.map(({id, name}) => <Link to={'/playlists/' + id.toString()} key={id}>
                    {name}
                </Link>)}
            </div>
        </div>
    );
}
