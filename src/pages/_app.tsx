import type { Metadata } from "next";
import { Kodchasan, Poppins, Roboto_Slab } from "next/font/google";

import "./globals.css"
import Config from "@/config";
import CoreMenu from "@/components/Menu/CoreMenu";
import SidebarCore from "@/components/Sidebar/SidebarCore";
import ChatCore from "@/components/Chat/ChatCore";

const kodchasan = Kodchasan({
    subsets: ["latin"],
    weight: ["200", "300", "500", "700"],
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "500", "700"],
})

export default function RootLayout({
    Component, pageProps,
}: any) {
    return (
        <div className={`${poppins.className} overflow-y-hidden bg-dark w-full flex flex-wrap`}>
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
                        className=""
                        style={{
                            width: `${100 - (Config.App.Info.SidebarSize + Config.App.Info.ChatSize)}%`
                        }}
                    >
                        <Component {...pageProps} />
                    </section>

                    <section
                        className=""
                        style={{
                            width: `${Config.App.Info.ChatSize}%`
                        }}
                    >
                        <ChatCore ></ChatCore>
                    </section>
                </section>
            </section>
        </div>
    );
}
