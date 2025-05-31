import { useNavigate } from "react-router-dom";

function Logout({ onLogout }: { onLogout: () => void }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
      Logout
    </button>
  );
}
export default Logout;