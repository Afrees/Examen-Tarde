import Post from "../Pos/Post";

function Aplicaciones() {
  const publicaciones = [
    { id: 1, titulo: "Post 1", descripcion: "Descripción del post 1." },
    { id: 2, titulo: "Post 2", descripcion: "Descripción del post 2." },
    { id: 3, titulo: "Post 3", descripcion: "Descripción del post 3." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Publicaciones</h1>
      <div className="w-full max-w-md">
        {publicaciones.map((pub) => (
          <Post
            key={pub.id}
            titulo={pub.titulo}
            descripcion={pub.descripcion}
          />
        ))}
      </div>
    </div>
  );
}

export default Aplicaciones;
