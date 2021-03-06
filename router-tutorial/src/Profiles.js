import React from "react";
import {Link, Route} from "react-router-dom";
import {Profile} from "./Profile";
import WithRouterSample from "./WithRouterSample";

export const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to={"/profiles/test1"}>테스트1</Link>
                </li>
                <li>
                    <Link to={"/profiles/test2"}>테스트2</Link>
                </li>
            </ul>
            <Route
                path={"/profiles"}
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route
                path="/profiles/:username"
                component={Profile}/>
        </div>
    )
}