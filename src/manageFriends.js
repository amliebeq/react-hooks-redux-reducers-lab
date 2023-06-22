export function manageFriends(state = {friends: []}, action) {
  console.log(state.friends)
  console.log(action.payload)
  switch (action.type) {
    default:
      return state
    case 'friends/add':
      return {friends: [...state.friends, action.payload]}
    case 'friends/remove':
      return {friends: [...state.friends.filter((friend) => friend.id !== action.payload)]}          
  }  
}
