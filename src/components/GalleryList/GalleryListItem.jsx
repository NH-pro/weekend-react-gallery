// Importing useState because we need to keep track of the
//  changes that are made when we click on a frog element. 
import { useState } from 'react';
import './GalleryListItem.css'

// Here is the component with the two props we sent over from 'GalleryList.jsx'.
// Again, we are using {}'s to destructure our props to simplify them without typing their prefixes.
function GalleryListItem({frogItem, addLike}) {

    // Here we are using useState to keep track of the true/false status that we are giving
    //  our rendered element below. It is going to be a toggle effect, so we're using a boolean here.
    const [status, setStatus] = useState(false);

    // In our return below, we have a "like" button that when clicked, adds a "like" count.
    // Here we are defining what happens when that button is clicked.
    // Right now, the click event does logs the specfic id of the element and then executes
    //  the 'addLike' function.
    // The 'addLike' function is located in our App.jsx BECAUSE 
    const likeBtn = () => {
        console.log(`--- In addLike ---`, frogItem.id);
        addLike(frogItem.id);
    };    

    return (
        <>
            <div key={frogItem.id} className="frog_box">
                {status ?
                    <p className="frog_description" onClick={() => setStatus(false)}> {frogItem.description}</p>
                    :
                    <img onClick={() => setStatus(true)} className="frog_pic" src={frogItem.path}/>
                }
                <button onClick={likeBtn}>Like</button>
                <p>{frogItem.likes} people like this!</p>
            </div>
        </>
    );
};
export default GalleryListItem;