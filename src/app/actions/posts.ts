import { createAction } from 'redux-actions';
// import api from 'app/services/api';
import { PostModel } from 'app/models/PostModel';

export namespace PostActions {
   export enum Type {
      FETCH_POSTS_START = 'FETCH_POSTS_START',
      FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
      FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
      NEW_POST = 'NEW_POSTS'
   }

   // export const fetchPostsStart = () => ({
   //    type: Type.FETCH_POSTS_START,
   //    payload: null
   // })
   export const fetchPostsStart = createAction(Type.FETCH_POSTS_START);

   // export const fetchPostsFinish = (responsePosts: any) => ({
   //    type: Type.FETCH_POSTS_FINISH,
   //    payload: responsePosts
   // })
   export const fetchPostsSuccess = createAction<PostModel[]>(Type.FETCH_POSTS_SUCCESS);
   export const fetchPostsFailure = createAction<any>(Type.FETCH_POSTS_FAILURE);

   const actionCreate = createAction<PostModel>(Type.NEW_POST);

   // export const fetchPosts = () => async (dispatch: any) => {
   //    console.log('fetchPosts');
   //    // const responsePosts = await api.getData();
   //    // dispatch(actionFetch(responsePosts));
   // }


   export const createPost = (post: PostModel) => async (dispatch: any) => {
      console.log('createPost');
      // const responsePost = await api.postData(post);
      // dispatch(actionCreate(responsePost));
   }
}
