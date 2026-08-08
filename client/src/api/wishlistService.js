import API from "./axios";

export const getWishlist = async () => {
  const response = await API.get("/wishlist");
  return response.data;
};

export const addToWishlist = async (user, product) => {
  const response = await API.post("/wishlist", {
    user,
    product,
  });

  return response.data;
};

export const removeFromWishlist = async (id) => {
  const response = await API.delete(`/wishlist/${id}`);
  return response.data;
};