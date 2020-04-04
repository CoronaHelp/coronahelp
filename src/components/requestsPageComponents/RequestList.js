import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import RequestPost from './RequestPost'
import { RequestContainer, NewRequestButton } from './styledRequestComponents'
import NewRequest from './NewRequest'

function RequestList() {
  let listOfPosts = [
    { id: uuid(), title: 'Need Diapers', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: true},

    { id: uuid(), title: 'Need Toilet Paper', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: false},

    { id: uuid(), title: 'Looking for milk', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'resolved', isUpdating: false},

    { id: uuid(), title: 'Looking for bread', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: false},
    
  ]

  // const [ makingNewRequest, setMakingNewRequest ] = useState(false)
  
  // const [newTitleText, setNewTitleText]=useState()
  // const [isEditingThis, setIsEdiditngThis]=useState(false)
    
  const [ postList, setPostList ] = useState(listOfPosts)

  const [ postToEdit, setPostToEdit ] = useState(null)
  
  // const editMember = () => {
  //   const newItem = teamList.map((member, index)=> {
  //     if (memberToEdit.id === member.id){
  //       member.name = formData.name
  //       member.email = formData.email
  //       member.role = formData.role
  //       return [member, index]
  //     }
  //   })

  //   let newList = [...teamList]
  //   newList[newItem[1]] = newItem[0]
  //   setTeamList(newList)
    
  //   setMemberToEdit(null)
  // }

  const toggleItem = clickedId => {
    const newTaskList = postList.map(item => {
      if (item.id === clickedId) {
        return { ...item, isUpdating: !item.isUpdating };
      } else {
        return item;
      }
    });
    setPostList(newTaskList);
  };

  return (
    
    <RequestContainer>
        <h1 style={{marginBottom: "60px"}}>Your Requests</h1>
        {/* { makingNewRequest ?  */}
        {<NewRequest postList={postList} setPostList={setPostList} postToEdit={postToEdit} setPostToEdit={setPostToEdit} 
        // setMakingNewRequest={setMakingNewRequest} 
        /> }
        {/* : <div style={{width: "100%"}}><NewRequestButton style={{margin: "auto", marginTop: "50px"}} onClick={() => setMakingNewRequest(true)}>+</NewRequestButton></div>} */}
        <div>
            {postList.reverse().map(post => {
                return <RequestPost toggle={toggleItem} key= {post.id} post={post} setPostToEdit={setPostToEdit} isUpdating={postToEdit === post}/>
            }
            // <button onClick={() => setPostToEdit(member)}>Edit</button>
            )}
            
        </div>
    </RequestContainer>
    
  );
}

export default RequestList;