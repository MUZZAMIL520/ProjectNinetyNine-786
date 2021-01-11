import React, { Component } from "react";
import Menu from "./Components/Menu/Menu";
import CustomLayout from "./Components/Layout/index";
import {
  HashRouter,
  Route,
  Switch,
  Router as BrowserRouter,
} from "react-router-dom";
import SurahList from "./Components/Quran/SurahList/SurahList";
import SurahDetail from "./Components/Quran/SurahDetail/SurahDetail";
import VerseDetail from "./Components/Quran/VerseDetail/VerseDetail";
import HadithHome from "./Components/Hadith/HadithHome/HadithHome";
import Chapters from "./Components/Hadith/chapters/Chapters";
import HadithList from "./Components/Hadith/HadithList/HadithList";
import NewRoutes from "./Components/NewRoutes";
import Login from "./Components/AdminPanel/Login/Login";
import UpdateNaat from "./Components/AdminPanel/UpdateNaat/UpdateNaat";
import NaatData from "./Components/AdminPanel/UpdateNaat/NaatData";
import AddNaat from "./Components/AdminPanel/AddNaat/AddNaat";
import DataManage from "./Components/AdminPanel/Home/DataManage";
import Umrah from "./Components/Umrah/Umrah"
import Supplication from "./Components/Supplications/Supplications"
import Prayer from "./Components/Prayer/Prayer"
//import UnderConstruction from "./Components/underConstruction";
import "antd/dist/antd.css";
import Zakaat from "./Components/Zakaat/Zakaat";
import ZakaatForm from "./Components/Zakaat/ZakaatForm";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/surahlist/:surahId/:ayahId"
          component={VerseDetail}
        ></Route>
        <Route path="/surahlist/:surahId" component={SurahDetail} />
        <Route path="/surahlist" component={SurahList} />
        <Route path="/naats" component={NewRoutes}></Route>
        <Route
          path="/hadithchapter/:chapterNumber"
          component={HadithList}
        ></Route>

        {/* <Route path="/underConstruction" component={UnderConstruction}></Route> */}
        <Route path="/hadithchapter" component={Chapters}></Route>
        <Route path="/hadith" component={HadithHome}></Route>

        <Route path="/addNaat" component={AddNaat} />
        <Route path="/naatData" component={NaatData} />
        <Route path="/updateNaat/:naatId" component={UpdateNaat} />
        <Route path="/dataManage" component={DataManage} />

        <Route path="/zakaat" component={Zakaat} />
        <Route path="/umrah" component={Umrah} />
        <Route path="/supplication" component={Supplication} />
        <Route path="/prayer" component={Prayer} />
        <Route path="/zakaatForm" component={ZakaatForm} />

        <Route exact path="/admin" component={Login} />
        <Route exact path="/" component={Menu}></Route>
      </Switch>
    );
  }
}
