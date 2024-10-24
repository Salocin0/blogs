import "./Blog.css";
const Blog = ({ blog }) => {
  return (
    <div className="contenedor">
      <div className="imagenContenedor">
        <img src={blog.urlToImage} alt={blog.description} className="imagen" />
      </div>
      <div className="datos">
        <h2 className="titulo">{blog.title}</h2>
        <div className="subDatos">
          <h6 className="autor">{blog.author}</h6>
          <h6 className="fecha">{new Date(blog.publishedAt).toLocaleString("es")}</h6>
        </div>
        <p className="descripcion">{blog.description}</p>
      </div>
    </div>
  );
};

export default Blog;
