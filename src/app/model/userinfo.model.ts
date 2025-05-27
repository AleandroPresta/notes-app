export class UserInfo {
    private id: number;
    private first_name: string;
    private last_name: string;
    private profile_image_url: string;

    constructor(
        id: number,
        first_name: string,
        last_name: string,
        profile_image_url: string
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.profile_image_url = profile_image_url;
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

    getProfileImageUrl(): string {
        return this.profile_image_url;
    }
}
