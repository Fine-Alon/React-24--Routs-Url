import "./PlayLists.css";
import {PLAYLISTS} from "../../data/playlists";
import {Link, useParams, useSearchParams} from "react-router-dom";
import {SyntheticEvent} from "react";

export function PlayLists() {
    let [searchParams, setSearchParams] = useSearchParams();
    const genreSearchParam = searchParams.get('genre') || ''
    const nameSearchParam = searchParams.get('name') || ''
    const handleSearchByGenre = (e: SyntheticEvent<HTMLInputElement>) => {
        setSearchParams({
            name: nameSearchParam,
            genre: e.target.value
        })
    }
    const handleSearchByName = (e) => {
        setSearchParams({
            name: e.target.value,
            genre: genreSearchParam
        })
    }

    const playLists = PLAYLISTS || null
    const filteredPlayList = playLists?.filter(({genre}) => genre !== 'Non Music')

    const filterByGenreAndName = filteredPlayList.filter((music) => {
        return music.genre.toLowerCase().includes(genreSearchParam.toLowerCase())
            && music.name.toLowerCase().includes(nameSearchParam.toLowerCase())
    })

    return (
        <div>
            <h1>PlayListsPage</h1>

            <div style={{marginBottom: '10px'}}>Input genre
                <input value={genreSearchParam} onChange={handleSearchByGenre} type="text"/></div>

            <div>Input name <input value={nameSearchParam} onChange={handleSearchByName} type="text"/></div>

            <ul>
                {filterByGenreAndName.map(({id, name}) => <li key={id}><Link to={'/playlists/' + id.toString()} key={id}>
                    {name}
                </Link></li>)}
            </ul>
        </div>
    );
}
