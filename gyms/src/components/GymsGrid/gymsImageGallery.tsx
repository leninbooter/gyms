import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function GymsImageGallery(props) {
    return (
        <ImageList
            variant="quilted"
            cols={4}
            rowsHeight={100}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const itemData = [
    {
      img: 'https://www.dreamfit.es/assetsup/imagescentros/centro_05_01.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://www.dreamfit.es/assetsup/imagescentros/centro_05_03.jpg',
      title: 'Burger',
    },
    {
      img: 'https://www.dreamfit.es/assetsup/imagescentros/centro_05_04.jpg',
      title: 'Camera',
    },
    {
      img: 'https://www.dreamfit.es/assetsup/imagescentros/centro_05_05.jpg',
      title: 'Coffee',
      cols: 2,
    },
  ];

export default GymsImageGallery;