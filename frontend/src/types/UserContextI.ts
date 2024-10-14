import {User} from "./index.ts";

export default interface UserContextI {
    state: User | null;
    actions: {
        setUser: (value: (((prevState: (User | null)) => (User | null)) | User | null)) => void;
        setName: (name: string) => void;
        setAvatar: (avatarUrl: string) => void;
        setEmail: (email: string) => void;
    };
}