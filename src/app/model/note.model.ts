export class Note {
    user_id?: number;
    title: string;
    content: string;
    id?: number;

    constructor(title: string, content: string, userId?: number) {
        this.title = title;
        this.content = content;
        this.user_id = userId;
    }
}
