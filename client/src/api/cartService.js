import API from "./axios";

export const getCart = async () => {
  const response = await API.get("/cart");
  return response.data;
};

export const addToCart = async (
  user,
  product,
  quantity
) => {
  const response = await API.post("/cart", {
    user,
    product,
    quantity,
  });

  return response.data;
};

export const updateCartQuantity = async (
  id,
  quantity
) => {
  const response = await API.put(
    `/cart/${id}`,
    {
      quantity,
    }
  );

  return response.data;
};

export const removeFromCart = async (id) => {
  const response = await API.delete(
    `/cart/${id}`
  );

  return response.data;
};