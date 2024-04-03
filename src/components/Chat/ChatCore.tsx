import MessageBox, { UserRank } from "./MessageBox";

export interface MessageInterface {
    username: string,
    rank: UserRank,
    content: string
}

export async function getServerSideProps() {
    return {
        props: {
            messages: []
        }
    }
}

export default async function ChatCore({ messages }: any) {
    return (
        <div className="bg-red h-full w-full overflow-y-auto scroll-smooth space-y-3 border-l border-light p-3">
            {messages.map((msg: MessageInterface) => (
                <MessageBox key={(new Date().getTime() + Math.random()).toString()} {...msg}></MessageBox>
            ))}

            <section>
                <input type="text" className="focus:outline-none text-white shadow-sm bg-supreme rounded-lg text-light text-xs w-full py-4 items-center px-3" placeholder="Message..." />
                <h4 className="float-right text-relaxed text-xs py-1">
                    <span>~ </span>
                    <span>120</span>
                    <span>/</span>
                    <span>150</span>
                </h4>
            </section>
        </div>
    );
}
