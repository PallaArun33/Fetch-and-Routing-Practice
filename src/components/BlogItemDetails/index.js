// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetailsData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedBlogItem = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogDetailsData: updatedBlogItem, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogDetailsData} = this.state
    const {
      id,
      imageUrl,
      avatarUrl,
      author,
      title,
      topic,
      content,
    } = blogDetailsData

    return (
      <div className="item-details-container">
        <h1 className="title-heading">{title}</h1>
        <div className="profile-text">
          <img src={avatarUrl} alt={author} className="blog-img" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="item-image" />
        <p className="content-para">{content}</p>
        <p className="topic-para">{topic}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-item-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
