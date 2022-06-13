// Here we are importing the component 'GalleryListItem' that we will need when we render 'GalleryList'.
import GalleryListItem from './GalleryListItem';

// Here is the component with the two props we sent over to it from App.jsx.
// We use {}'s around the props for destructuring. AKA our 'galleryList' prop === {galleryList: galleryList},
//  so we can just use the {}'s to simplify it to just {galleryList}.
function GalleryList({galleryList, addLike}) {
    return (
        <>
            {/* - So here, we want to use .map() on our 'galleryList' to give us a new array and call each item 'frogItem'.
                - Each 'frogItem' is going to render its own 'GalleryListItem' component.
                - When we render this new component, we are also gonna send some more data over to it
                    in the form of a couple of props.
                - First prop, is a key with a unique # id that helps React keep track of specific component instances.
                - Second prop, is a singular item from the galleryList array. It is in the form of an object,
                    these can be seen in 'gallery.data.js'.
                - Third prop, is our 'addLike' function from App.js that we use in our PUT request.
                - So now we head on over to the 'GalleryListItem' compontent and see what it renders. */}
            {galleryList.map((frogItem) => ( // <-- You can use () or {} here. {} if you're returning.
                <GalleryListItem             // In  this case, we are going to return in this other component.
                    key={frogItem.id}
                    frogItem={frogItem}
                    addLike={addLike}
                />
            ))}
        </>
    );
};
export default GalleryList;