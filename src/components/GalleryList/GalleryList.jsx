// Here we are importing the component 'GalleryListItem' that we will need when we render 'GalleryList'.
import GalleryListItem from './GalleryListItem';

// Here is the component with the two props we sent over to it from App.jsx.
// We use {}'s around the props for destructuring. AKA our 'galleryList' prop === {galleryList: galleryList},
//  so we can just use the {}'s to simplify it to just {galleryList}.
function GalleryList({galleryList, addLike}) {
    return (
        <>
            {/* - So here, we want to .map through our 'galleryList' array and call each item 'frogItem'.
                - Each 'frogItem' is going to render its own 'GalleryListItem' component.
                - When we render this new component, we are also gonna send some more data over to it
                    in the form of a couple of props. */}
            {galleryList.map((frogItem) => (
                <GalleryListItem
                    key={frogItem.id}
                    frogItem={frogItem}
                    addLike={addLike}
                />
            ))}
        </>
    );
};
export default GalleryList;