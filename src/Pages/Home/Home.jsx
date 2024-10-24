import {useState} from "react";
import Blog from "./Blog";
import {newsMock} from "../../mocks/newsMock";


const Home = () => {
  const [blogs, setBlogs] = useState(newsMock);
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.source.id} />
      ))}
    </div>
  );
};

export default Home;
