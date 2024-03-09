export const isAuthorisedToDoTheActivity = (role: string) => {
    return role === 'admin' || role === 'receptionist';
};