import Config from "./config/index";
import CupsGame from "./pages/cups/index"
import CoreMenu from "./components/Menu/CoreMenu";
import ChatCore from "./components/Chat/ChatCore";
import SidebarCore from "./components/Sidebar/SidebarCore";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import "./style/tw.css"
import "./style/font.css"
import "./style/master.css"
import TowersGame from "./pages/towers";
import MinesGame from "./pages/mines";

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
                <Route path="/mines" element={<MinesGame />} />
                <Route path="/cups" element={<CupsGame />} />
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
