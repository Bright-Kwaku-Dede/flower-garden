import { api } from "./client";

export const getFlowers = () => api.get("/flowers");
export const addFlower = (flower) => api.post("/flowers", flower);
export const updateFlower = (id, data) => api.put(`/flowers/${id}`, data);
export const deleteFlower = (id) => api.delete(`/flowers/${id}`);
