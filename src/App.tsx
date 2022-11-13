import "./App.css";
import "./shared/styles/buttons.scss";
import "./shared/styles/inputs.scss";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import FindIdPage from "./pages/FindIdPage";
import FindPwdPage from "./pages/FindPwdPage";
import OmokPage from "./pages/OmokPage";
import EndingPage from "./pages/EndingPage";
import UserPage from "./pages/UserPage";
import Footer from "./components/common/Footer";
import EndingContent from "./components/endingPage/EndingContent";
import GetItem from "./components/endingPage/GetItem";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/log-in"} element={<LogInPage />} />
          <Route path={"/sign-up"} element={<SignUpPage />} />
          <Route path={"/find-id"} element={<FindIdPage />} />
          <Route path={"/find-pwd"} element={<FindPwdPage />} />
          <Route path={"/omok/:roomId"} element={<OmokPage />} />
          <Route path={"/ending"} element={<EndingPage />}>
            <Route path={"win"} element={<EndingContent isWin={true} />} />
            <Route path={"lose"} element={<EndingContent isWin={false} />} />
            <Route path={"item"} element={<GetItem />} />
          </Route>
          <Route path={"/user"} element={<UserPage />} />
        </Routes>
        <Footer />
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
