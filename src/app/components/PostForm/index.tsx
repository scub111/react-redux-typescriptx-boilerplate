import * as React from 'react'
import { PostModel } from 'app/models/PostModel';
import { connect } from 'react-redux';
import { PostActions } from 'app/actions/posts'
const createPostStart = PostActions.createPostStart;

export namespace PostForm {
   export interface Props {
      createPostStart?: Function;
   }
   export interface State {
      status?: string;
      post: PostModel;
   }

   // export interface State extends PostModel { }
}

class PostForm extends React.Component<PostForm.Props, PostForm.State> {
   constructor(props: PostForm.Props) {
      super(props);
      this.state = {
         status: '...',
         post: {
            title: '',
            body: ''
         }
      };

      // this.state = {
      //    title: '',
      //    body: ''
      // };
      // this.onChange = this.onChange.bind(this);
   }

   onChange(e: React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>) {
      const post = this.state.post;
      const newPost = { ...post, ...{ [e.target.name]: e.target.value } };
      const newState = { ...this.state, post: newPost };
      this.setState(newState);
      // this.setState({ [e.target.name]: e.target.value });
   }

   async onSubmit(e: React.FormEvent<EventTarget>) {
      e.preventDefault();
      const t0 = new Date();
      let newState = { ...this.state, status: 'Request...' };
      this.setState(newState);
      const { title, body } = this.state.post;
      const post = {
         title, body
      }
      if (this.props.createPostStart) {
         await this.props.createPostStart(post);
      }
      const diff = new Date().valueOf() - t0.valueOf();
      newState = { ...this.state, status: `Finished in ${diff} ms` };
      this.setState(newState);
   }

   render() {
      const { status, post } = this.state;
      const { title, body } = this.state.post;
      return (
         <div>
            <h1>Post form</h1>
            <form onSubmit={async e => await this.onSubmit(e)}>
               <div>
                  <label>Title: </label>
                  <br />
                  <input
                     type="text"
                     name="title"
                     value={title}
                     onChange={e => this.onChange(e)}
                  />
               </div>
               <br />
               <div>
                  <label>Body: </label>
                  <br />
                  <textarea
                     name="body"
                     value={body}
                     onChange={e => this.onChange(e)}
                  />
               </div>
               <br />
               <button type="submit">Submit</button>
               <div>{status}</div>
            </form>
         </div>
      )
   }
}

const mapStateToProps = (state: any) => ({
   posts: state.posts.items,
   newPost: state.posts.item
});

export default connect(mapStateToProps, { createPostStart })(PostForm);