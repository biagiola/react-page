import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
        render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map( post => {
                return (
                    <div className='post card' key={post.id}>
                        <div className='card-content'>
                            <Link to={ '/' + post.id }>
                                <span className='card-title'>{post.title}</span>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })                    
        ) : ( 
            <div className='center'>No posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">HOME</h4>
                { postList }
            </div>
        );
    }
}
//in the parameter we have access to the state of the redux store and attachted to the props
const mapStateToProps = (state) => {
    //this obj represents the differents properties  we want to attachted to the props
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);
//So when we connect to redux, he knows what data do you want to grab from redux (state.posts) and the property we want to create to apply that data to.