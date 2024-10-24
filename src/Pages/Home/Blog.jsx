const Blog = ({ blog }) => {
  return (
    <>
      <h1>{blog.source.id}</h1>
      <h1>{blog.author}</h1>
      <h1>{blog.title}</h1>
      <h1>{blog.description}</h1>
      <h1>{blog.urlToImage}</h1>
      <h1>{blog.publishedAt}</h1>
    </>
  );
};

export default Blog;
