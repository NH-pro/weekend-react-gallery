// Here we are importing the component 'GalleryListItem' that we will need when we render 'GalleryList'.
import GalleryListItem from './GalleryListItem';

// Here is the component with the two props we sent over to it from App.jsx.
// We use {}'s around the props for destructuring. AKA our 'galleryList' prop === {galleryList: galleryList},
//  so we can just use the {}'s to simplify it to just {galleryList}.
function GalleryList({galleryList, addLike}) {
    return (
        <>
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