import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import RequestPost from './RequestPost'
import { RequestContainer } from './styledRequestComponents'

// const Something = ()=>{

//   console.log('I am somethin')
//   return(
//     <div>
//       <h2>This is something</h2>
//       </div>

//   )
// }

let listOfPosts = [
  { id: uuid(), title: 'Need Diapers', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: true},

  { id: uuid(), title: 'Need Toilet Paper', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: false},

  { id: uuid(), title: 'Looking for milk', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'resolved', isUpdating: false},

  { id: uuid(), title: 'Looking for bread', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: false},
  
]

function ExamplePage() {

    
  const [ postList, setPostList ] = useState(listOfPosts)

  const [ postToEdit, setPostToEdit ] = useState(null)
  const [editThisPost, setEditThisPost] = useState(false)
  


  return (
    
    <RequestContainer>
        <h1>Your Requests</h1>
        <div className="team">
            {postList.map(post => {
                return <RequestPost post={post} editThisPost={editThisPost} setEditThisPost={setEditThisPost} setPostToEdit={setPostToEdit} isUpdating={postToEdit === post}/>
            }
            // <button onClick={() => setPostToEdit(member)}>Edit</button>
            )}
            
            {/* {postList.map(post => (
              <>
            <p>{post.title}
           <span> <button onClick={changing}>Edit</button></span>
            </p>
            <button onClick={Something}> Test</button>

           {<Something/>} 
            </>

           
            ))} */}

            
        </div>
    </RequestContainer>
    
  );
}

export default ExamplePage;