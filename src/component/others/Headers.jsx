function Headers(props) {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    props.user("");
  };
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello <br />{" "}
          <span className="text-3xl font-semibold">{props.data.name}👋</span>
        </h1>
        <button
          className="bg-red-500 px-4 py-2 rounded cursor-pointer text-lg font-medium"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </>
  );
}

export default Headers;
