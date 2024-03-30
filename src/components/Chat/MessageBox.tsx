import { Roboto_Slab } from "next/font/google"

export enum UserRank {
    USER = 0,
    SPECIAL = 1,
    OWNER = 2,
}

const RankColor = {
    0: "text-[#FFDC98]",
    1: "text-[#64C7FF]",
    2: "text-[#C598FF]",
}

interface Props {
    username: string,
    content: string
    rank: UserRank,
}

const roboto = Roboto_Slab({
    subsets: ["latin"]
})

export default function MessageBox(props: Props) {
    return <div className="rounded-br-xl rounded-tr-xl rounded-tl-xl bg-light p-4">
        <div className="flex flex-wrap space-x-3">
            <div className="w-12 h-12 bg-dark rounded-md"></div>
            <div>
                <h3 className="text-white">
                    {props.username}
                </h3>
                <p className={`${RankColor[props.rank as keyof typeof RankColor]} text-[9px] font-semibold`}>
                    {UserRank[props.rank]}
                </p>
            </div>
        </div>

        <div className={`text-gray-300 break-word mt-2 text-[12px] ${roboto.className}`}>
            {props.content}
        </div>
    </div >
}