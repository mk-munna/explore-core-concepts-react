import { useEffect, useState } from "react"

export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setFriends(data))
        
    },[])
    return (
        <div>
            <h3>Friends : {friends.length} </h3>
            <div>
                {friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <h3>
                                {friend.name}
                                
                            </h3>
                            <p>{friend.email}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}