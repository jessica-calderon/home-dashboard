import React from 'react';

const ImageWidget: React.FC = () => {
// TODO: add spiderman pics
    const placeholderImage = 'https://placehold.co/400x300?text=Hello+World';

    return (
        <div className="bg-indigo-800 text-white p-4 rounded shadow flex justify-center items-center">
            <img src={placeholderImage} alt="Placeholder" className="rounded" />
        </div>
    );
};

export default ImageWidget;
