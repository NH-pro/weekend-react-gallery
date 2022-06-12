import GalleryListItem from './GalleryListItem';

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