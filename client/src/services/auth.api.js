// MOCK auth API — replace with real API later

export const loginUser = async ({ email, password }) => {
  console.log("Mock login:", email, password);

  // fake delay (optional, helps UI testing)
  await new Promise((res) => setTimeout(res, 500));

  return {
    id: "u123",
    name: "Demo User",
    email,
  };
};

export const registerUser = async ({ name, email, password }) => {
  console.log("Mock register:", name, email);

  await new Promise((res) => setTimeout(res, 500));

  return {
    id: "u124",
    name,
    email,
  };
};

export const logoutUser = async () => {
  console.log("Mock logout");
  return true;
};
