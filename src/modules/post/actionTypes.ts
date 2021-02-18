enum ActionTypes {
  REQUEST_CREATE_POST = 'post/REQUEST_CREATE_POST',
  REQUEST_CREATE_POST_SUCCESS = 'post/REQUEST_CREATE_POST_SUCCESS',
  REQUEST_CREATE_POST_ERROR = 'post/REQUEST_CREATE_POST_ERROR',
  REQUEST_GET_ALL_POSTS = 'post/REQUEST_GET_ALL_POSTS',
  REQUEST_GET_ALL_POSTS_SUCCESS = 'post/REQUEST_GET_ALL_POSTS_SUCCESS',
  REQUEST_GET_ALL_POSTS_ERROR = 'post/REQUEST_GET_ALL_POSTS_ERROR',

  CHANGE_POST_TITLE = 'post/CHANGE_POST_TITLE',
  CHANGE_POST_CONTENT = 'post/CHANGE_POST_CONTENT',
  CHANGE_POST_TOPIC = 'post/CHANGE_POST_TOPIC',
  CHANGE_POST_ON_OFF = 'post/CHANGE_POST_ONOFF',
  CHANGE_POST_PARTICIPANT_COUNT_LIMIT = 'post/CHANGE_POST_PARTICIPANT_COUNT_LIMIT',
}

export default ActionTypes
