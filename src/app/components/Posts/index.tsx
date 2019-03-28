import * as React from 'react';

export namespace Posts {
   export interface Props {
   }

   export interface PostModel {
      body: string;
      id: number;
      title: string;
      userId: number;
   }

   export interface State {
      posts?: PostModel[];
   }
}

export default class Posts extends React.Component<Posts.Props, Posts.State> {
   constructor(props: Posts.Props) {
      super(props);
      this.state = {
         posts: []
      };
   }

   componentWillMount() {
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //    .then(res => res.json())
      //    // .then(data => console.log(data));
      //    .then(data => this.setState({ posts: data }));
   }

   renderPosts = () => {
      return this.state.posts && this.state.posts.length > 0 ?
         this.state.posts.map(post => (<div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
         </div>))
         : '';
   }

   render() {
      return (
         <div>
            <h1>Posts</h1>
            {this.renderPosts()}
         </div>
      );
   }
}