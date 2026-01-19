const handleSubmit = (e) => {
  e.preventDefault();

  const user = {
    name,
    email,
    avatar: "https://i.pravatar.cc/150?img=5",
  };

  localStorage.setItem("user", JSON.stringify(user));

  const redirect = localStorage.getItem("redirectAfterLogin");

  alert("Registration successful!");

  if (typeof onNavigate === "function") {
    if (redirect) {
      localStorage.removeItem("redirectAfterLogin");
      onNavigate(redirect); // go back where user started
    } else {
      onNavigate("home"); // default
    }
  }
};
