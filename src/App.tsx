import { MainMenu } from "./components/MainMenu";
import { Route, Routes } from "react-router-dom";
import { CompleteRecipe } from "./pages/CompleteRecipe";
import { HomePage } from "./pages/HomePage";
import "./index.css";
import { Profile } from "./pages/Profile";
import SearchPage from "./pages/SearchPage";
import { NotificationPage } from "./pages/NotificationPage";
import { connect } from "react-redux";

const App = (props: any) => {
  // console.log(props.store)

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage store={props.store} />} />
        <Route path="notification" element={<NotificationPage />} />
        <Route path="completeRecipe" element={<CompleteRecipe />} />
        <Route path="user" element={<Profile />} />
      </Routes>
      <MainMenu />
    </div>
  );
};

const mapStateToProps = (store: any) => {
  return {
    store: store,
  };
};

export default connect(mapStateToProps)(App);
