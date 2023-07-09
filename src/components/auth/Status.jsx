import { useState } from 'react';

export const useStatus = () => {
    const [LoggedIn, setLoggedIn] = useState(false);
    const [UserData, setUserData] = useState({ name: null, email: null, admin: false, password: null });

    return { LoggedIn, setLoggedIn, UserData, setUserData };
};
