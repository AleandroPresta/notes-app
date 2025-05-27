export class UserInfo {
    private id: number;
    private first_name: string;
    private last_name: string;

    constructor(id: number, first_name: string, last_name: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    getId(): number {
        return this.id;
    }

    getFirstName(): string {
        return this.first_name;
    }

    getLastName(): string {
        return this.last_name;
    }
}
