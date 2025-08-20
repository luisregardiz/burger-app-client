const API_URL = import.meta.env.VITE_API_URL;

export const API_ROUTES = {
    BURGERS: `${API_URL}/burgers`,
    BURGER: `${API_URL}/burgers/:id`,
};
