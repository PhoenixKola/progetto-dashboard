import React from 'react'
import { useApiContext } from '../../contexts/ApiContext';
import "../../styles/UserPhotos.scss"

const UserPhotos: React.FC = () => {
    const { photos, loading, error } = useApiContext();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className='photos-header'>IMMAGINI DEGLI UTENTI</div>
            {photos.map((photo) => (
                <div className='photos-card' key={photo.id}>
                    <p>{photo.albumId}</p>
                    <p>{photo.title}</p>
                    <img src={photo.thumbnailUrl} alt="album" />
                </div>
            ))}
        </>
    )
}

export default UserPhotos