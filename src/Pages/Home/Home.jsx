import {useState} from "react";
import Blog from "./Blog";
import {newsMock} from "../../mocks/newsMock";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState(newsMock);
  console.log(blogs);
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.source.id} />
      ))}
    </div>
  );
};

export default Home;
