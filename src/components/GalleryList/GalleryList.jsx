import GalleryListItem from './GalleryListItem';

function GalleryList({galleryList}) {
    return (
        <>
            {galleryList.map((frogItem) => (
                <GalleryListItem
                    key={frogItem.id}
                    frogItem={frogItem}
                />
            ))}
        </>
    );
};
export default GalleryList;