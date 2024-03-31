export interface SingleDocument {
    [key: string]: any
}

export interface Documents {
    [key: string]: SingleDocument
}

class Cache {
    private docs: Documents;

    constructor() {
        this.docs = {}
    }

    create(document: string) {
        if (this.docs[document] == null) {
            this.docs[document] = {}
        }
    }

    set(document: string, key: string, value: any) {
        this.create(document);
        this.docs[document][key] = value
    }

    get(document: string, key: string): any | null {
        if (this.docs[document] != null) {
            return this.docs[document][key]
        } else {
            return null
        }
    }
}

// {
//     messages: {
//         data: [
//             {
//                 content: String,
//                 rank: 0,
//                 username: String
//             }
//         ]
//     }
// }

const cache = new Cache();
export default cache