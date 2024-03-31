import { Kodchasan, Roboto_Slab } from "next/font/google"
import { MessageInterface } from "./ChatCore"

export enum UserRank {
    USER = 0,
    SPECIAL = 1,
    OWNER = 2,
}

const kodchasan = Kodchasan({
    subsets: ["latin"],
    weight: ["200", "300", "500", "700"],
})

const RankColor = {
    0: "text-[#FFDC98]",
    1: "text-[#64C7FF]",
    2: "text-[#C598FF]",
}

interface Props extends MessageInterface {
}

const roboto = Roboto_Slab({
    subsets: ["latin"]
})

export default function MessageBox(props: Props) {
    return <div className="rounded-br-xl rounded-tr-xl rounded-tl-xl bg-light p-4">
        <div className="flex flex-wrap space-x-3">
            <div className="w-10 h-10 bg-dark rounded-full"></div>
            <div>
                <h3 className="text-white text-[14px]">
                    {props.username}
                </h3>
                <p className={`${RankColor[props.rank as keyof typeof RankColor]} text-[9px] font-semibold`}>
                    {UserRank[props.rank]}
                </p>
            </div>
        </div>

        <div className={`text-gray-300 break-word mt-2 text-[13px] ${kodchasan.className}`}>
            {props.content}
        </div>
    </div >
}