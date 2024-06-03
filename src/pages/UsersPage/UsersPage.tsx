import {ChangeEvent, useEffect, useState} from "react";
import {USERS} from "../../data";
import "./UsersPage.css";
import {Link, useSearchParams} from "react-router-dom";

export function UsersPage() {
    let [searchParams, setSearchParams] = useSearchParams();

    const [searchName, setSearchName] = useState<string>
    (searchParams.get("searchName") || '');

    useEffect(() => {
        setSearchName(searchParams.get("searchName")||'')
    }, [searchParams.get("searchName")]);

    // or u can cut down the code and use
    // const searchName = searchParams.get("searchName") || ''
    // that is all, that way u dont need useEffect

    const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target;
        setSearchParams({
            'searchName': value.toLowerCase()
        });
    };

    const filteredUsers = USERS.filter(({fullName}) =>
        fullName.toLowerCase().includes(searchName)
    );

    return (
        <div className="usersPage">
            <h2>UsersPage</h2>

            <div className="users">
                <label>
                    введите имя{" "}
                    <input type="text" value={searchName} onChange={handleSearchName}/>
                </label>

                {filteredUsers.map(({id, fullName}) => (
                    <Link to={`/users/${id}`} key={id}>
                        {fullName}
                    </Link>
                ))}
            </div>
        </div>
    );
}
