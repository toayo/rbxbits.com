export const BAD_WORDS = [
    "fuck",
    "bitch",
    "dick",
    "nigger",
    "ass",
    "retard",
    "nigga"
];

const FILTER_CHAR = "*";

class ClientChatFilter {
    process(raw) {
        let cleaned = raw;

        for (let x = 0; x < BAD_WORDS.length; x++) {
            const word = BAD_WORDS[x];
            const regex = new RegExp(word, 'gi');
            cleaned = cleaned.replace(regex, FILTER_CHAR.repeat(word.length));
        }

        return cleaned;
    }
}

const ChatFilter = new ClientChatFilter();
export default ChatFilter;
