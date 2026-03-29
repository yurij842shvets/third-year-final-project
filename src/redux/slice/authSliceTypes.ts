export type User = {
  name: string;
  email: string;
  password: string;
};

export type AuthState = {
  users: User[];
  currentUser: User | null;
  error: string | null
};

export const getUsers = (): User[] => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

export const getCurrentUser = (): User | null => {
  const data = localStorage.getItem("currentUser");
  return data ? JSON.parse(data) : null;
};