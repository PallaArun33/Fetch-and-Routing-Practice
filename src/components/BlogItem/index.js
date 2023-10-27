// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, topic, title, author, avatarUrl, imageUrl} = blogItemDetails

  return (
    <Link className="card-link" to={`/blogs/${id}`}>
      <div className="item-container">
        <img src={imageUrl} alt={`title${id}`} className="image-style" />
        <div className="information-container">
          <p className="react-para">{topic}</p>
          <h1 className="title-heading">{title}</h1>
          <div className="profile-container">
            <img
              src={avatarUrl}
              alt={`avatar${id}`}
              className="profile-img-style"
            />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
