import Config from "@/config"
import JoinNowButton from "../Buttons/JoinNow"

export default function CoreMenu() {

    return <header className="border-b border-light text-white flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">
            <span className="capitalize">
                {Config.App.Domain.Name}
            </span>
            <span className="text-first">
                {Config.App.Domain.TLD}
            </span>
        </div>

        <nav className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
        </nav>

        <div className="flex flex-wrap">
            <a className="text-white font-semibold py-2 px-4 rounded mr-4">Login</a>
            <JoinNowButton></JoinNowButton>
        </div>
    </header>
}