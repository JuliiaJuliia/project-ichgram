const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/auth/register", {
        email,
        username,
        password,
      });
      alert("✅ Регистрация успешна!");
      navigate("/login");
    } catch (err) {
      alert("❌ " + err.response?.data?.message || "Ошибка");
    }
  };
  