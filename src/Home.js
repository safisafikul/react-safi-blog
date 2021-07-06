import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New website', body: 'lorem ipsum...', author: 'Safi', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Mario', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Safi', id: 1 }
    ])
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Safi')} title="Safi's Blogs!" />
        </div>
     );
}
 
export default Home;