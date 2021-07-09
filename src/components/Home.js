import { useState, useEffect } from 'react'
import BlogList from './BlogList'

// next 16

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New website', body: 'lorem ipsum...', author: 'Safi', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Mario', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Safi', id: 1 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect run')
    }, [])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        </div>
     )
}
 
export default Home;