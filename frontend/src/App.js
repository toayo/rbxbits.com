import Config from "./config/index";
import CupsGame from "./pages/cups/index"
import CoreMenu from "./components/Menu/CoreMenu";
import ChatCore from "./components/Chat/ChatCore";
import SidebarCore from "./components/Sidebar/SidebarCore";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import "./style/tw.css"
import "./style/master.css"
import "./style/font.css"

import "animate.css"

import RouletteGame from "./pages/roulette";
import TowersGame from "./pages/towers";
import MinesGame from "./pages/mines";
import EarnPage from "./pages/earn";
import HomePage from "./pages/home";
import CrashGame from "./pages/crash";
import PrisonersPage from "./pages/prisoner";

const messages = [
  {
    rank: 0,
    username: 'BOBBOB',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  },
  {
    rank: 0,
    username: 'BOBBOB',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  },
  {
    rank: 2,
    username: 'JUB0T',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    rank: 0,
    username: 'BOBBOB',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  },
  {
    rank: 1,
    username: 'ROBLOX',
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    rank: 0,
    username: 'BOBBOB',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  },
]

function App() {
  return (
    <div className={`overflow-y-hidden bg-dark w-full flex flex-wrap`}>
      <BrowserRouter>
        <section className="w-full flex flex-wrap" style={{
          height: "100vh",
        }}>
          <section className="w-full"
            style={{
              height: "10%"
            }}>
            <CoreMenu></CoreMenu>
          </section>

          <section className="w-full flex flex" style={{
            height: "90%"
          }}>
            <section
              className=""
              style={{
                width: `${Config.App.Info.SidebarSize}%`
              }}
            >
              <SidebarCore></SidebarCore>
            </section>

            <section
              className="bg-supreme h-full lg:w-[90%]"
              style={{
                width: `${100 - (Config.App.Info.SidebarSize + Config.App.Info.ChatSize)}%`
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/crash" element={<CrashGame />} />
                <Route path="/prisoner" element={<PrisonersPage />} />
                <Route path="/cups" element={<CupsGame />} />
                <Route path="/towers" element={<TowersGame />} />
                <Route path="/mines" element={<MinesGame />} />
                <Route path="/roulette" element={<RouletteGame />} />
                <Route path="/earn" element={<EarnPage />} />
                {/* Other routes go here */}
              </Routes>
            </section>

            <section
              className=""
              style={{
                width: `${Config.App.Info.ChatSize}%`
              }}
            >
              <ChatCore messages={messages || []}></ChatCore>
            </section>
          </section>
        </section>

      </BrowserRouter>
    </div >
  );
}

export default App;
