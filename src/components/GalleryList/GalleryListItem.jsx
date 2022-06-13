// Importing useState because we need to keep track of the
//  changes that are made when we click on a frog element. 
import { useState } from 'react';
import './GalleryListItem.css'

// Here is the component with the two props we sent over from 'GalleryList.jsx'.
// Again, we are using {}'s to destructure our props to simplify them without typing their prefixes.
function GalleryListItem({frogItem, addLike}) {

    // Here we are using useState to keep track of the true/false status that we are giving
    //  our rendered element below. It is going to be a toggle effect, so we're using a boolean here.
    // We use it here because it doesn't need to persist. It only matters here.
    const [status, setStatus] = useState(true);

    // In our first div, we could have added our 'onClick' functionality
    //  onClick ={() => setStatus(!status)}
    // Just less to type out too.
    return (
        <> 
            <div key={frogItem.id} className="frog_box"> 
                {/* Ternary operator for conditional rendering */}
                {status ?
                    <img onClick={() => setStatus(false)} className="frog_pic" src={frogItem.path}/>
                    :
                    <p className="frog_description" onClick={() => setStatus(true)}> {frogItem.description}</p>
                }
                {/* - Here is our "likes" button.
                    - When clicked, run the 'addLike' function with the id argument in App.jsx */}
                <button onClick= {() => addLike(frogItem.id)}>Like</button>
                <p>{frogItem.likes} people like this!</p>
            </div>
        </>
    );
};
export default GalleryListItem;