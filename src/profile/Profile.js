import React from 'react'

function Profile(props) {
    return (
        <div>

            {props.objectt.fullName}
            {props.objectt.bio}
            {props.objectt.profession}
            <br></br>
            <img src={props.children} alt="nathing"></img>


            <button onClick={()=>props.objectt.fct(props.objectt.fullName)}>Show Name</button>




        </div>
    )
}

export default Profile
