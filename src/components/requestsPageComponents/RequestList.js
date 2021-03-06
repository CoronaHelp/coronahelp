import React, {useState, useEffect} from 'react';
import axios from 'axios'
// import { v4 as uuid } from 'uuid'
import RequestPost from './RequestPost'
import {
  RequestContainer,
  // NewRequestButton,
} from './styledRequestComponents'
import NewRequest from './NewRequest'

function RequestList() {
  // let listOfPosts = [
  //   { id: uuid(), title: 'Need Diapers', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: true},

  //   { id: uuid(), title: 'Need Toilet Paper', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: false},

  //   { id: uuid(), title: 'Looking for milk', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'resolved', isUpdating: false},

  //   { id: uuid(), title: 'Looking for bread', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', status: 'pending', isUpdating: false},
    
  // ]


  const [ makingNewRequest, setMakingNewRequest ] = useState(false)
  const [dep, setDep]=useState(false)
  const [ postList, setPostList ] = useState([])


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
  useEffect(() => {
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    const getRequestList = async () => {
      await axios
      .get(`${ backendURL }/api/requests/all/90210/2`)
      .then(res=>{
        console.log(res)
        setPostList(res.data)
        setDep(false)
      })
      .catch(err=>console.log(err));
    };
    getRequestList();
  }, [dep, makingNewRequest]);

  return (
    
    <RequestContainer>
    
        <h1 style={{marginBottom: "60px"}}>Your Requests</h1>
        {/* { makingNewRequest ?  */}
        { <NewRequest dep={dep} setDep={setDep} postList={postList} setPostList={setPostList} setMakingNewRequest={setMakingNewRequest} postToEdit={postToEdit} setPostToEdit={setPostToEdit}

        // setMakingNewRequest={setMakingNewRequest} 
        /> }
        {/* : <div style={{width: "100%"}}><NewRequestButton style={{margin: "auto", marginTop: "50px"}} onClick={() => setMakingNewRequest(true)}>+</NewRequestButton></div>} */}
        <div>
            {postList.reverse().map(post => {
                return <RequestPost toggle={toggleItem} setDep={setDep} dep={dep} setPostList={setPostList} key= {post.id} post={post} setPostToEdit={setPostToEdit} isUpdating={postToEdit === post}/>

            }
            // <button onClick={() => setPostToEdit(member)}>Edit</button>
            )}
            

        </div>
    </RequestContainer>
    
  );
}

export default RequestList;