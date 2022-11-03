import React from 'react';
import {Header} from "./components/common/Header";
import {Route, Routes} from "react-router-dom";
import {LogInPage} from "./pages/LogInPage";
import {SignUpPage} from "./pages/SignUpPage";
import {FindIdPage} from "./pages/FindIdPage";
import {FindPwdPage} from "./pages/FindPwdPage";
import {MainPage} from "./pages/MainPage";
import {OmokPage} from "./pages/OmokPage";
import {EndingPage} from "./pages/EndingPage";
import {UserPage} from "./pages/UserPage";
import {Footer} from "./components/common/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<LogInPage/>}/>
                <Route path={"/sign-up"} element={<SignUpPage/>}/>
                <Route path={"/find-id"} element={<FindIdPage/>}/>
                <Route path={"/find-pwd"} element={<FindPwdPage/>}/>
                <Route path={"/main"} element={<MainPage/>}/>
                <Route path={"/omok/:roomId"} element={<OmokPage/>}/>
                <Route path={"/ending"} element={<EndingPage/>}/>
                <Route path={"/user"} element={<UserPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
