import React from "react";

const data = {
    test1: {
        name: '테스트1',
        description: '리엑트 테스트1'
    },
    test2: {
        name: '테스트2',
        description: '리엑트 테스트2'
    }
}

export const Profile = ({match}) => {
    const {username} = match.params
    const profile = data[username]
    if (!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}