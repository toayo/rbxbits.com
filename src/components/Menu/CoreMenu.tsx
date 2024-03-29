import Config from "@/config"
import JoinNowButton from "../Buttons/JoinNow"

export default function CoreMenu() {

    return <header className="border-b border-light text-white flex justify-between items-center py-4 px-6">
        <a className="text-xl font-bold" href={`/`}>
            <span className="capitalize">
                {Config.App.Domain.Name}
            </span>
            <span className="text-first">
                {Config.App.Domain.TLD}
            </span>
        </a>

        <nav className="flex justify-center space-x-6 text-relaxed uppercase text-xs">
            <a href="#" className="hover:text-gray-400">Leaderboard</a>
            <a href="#" className="hover:text-gray-400">Terms of Use</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        </nav>

        <div className="flex flex-wrap items-center">
            <a className="text-white font-semibold px-8">Login</a>
            <JoinNowButton></JoinNowButton>
        </div>
    </header>
}