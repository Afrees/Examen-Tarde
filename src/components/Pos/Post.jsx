import { useState } from "react";

function Post({ titulo, descripcion }) {
  const [likes, setLikes] = useState(0);

  const aumentarLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h2 className="text-xl font-bold mb-2">{titulo}</h2>
      <p className="mb-2">{descripcion}</p>
      <button
        onClick={aumentarLikes}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Like ({likes})
      </button>
    </div>
  );
}

export default Post;
