/*
import React from 'react';
import './Spacepost.css';
import PropTypes from 'prop-types';
import { Image as ImageNative } from 'react-native';

export default function Spacepost({camera, id, photo, earthdate}) {
    return <div className="post">
        <div className='photo-title'>
           {camera} {id}
        </div>

        <img 
            src = {photo}
            alt= 'there should be something here'
        />

        <div className='earth-date'>
            {earthdate}
        </div>

    </div>;
}

Spacepost.propTypes = {
    camera: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    photo: ImageNative.propTypes.source.isRequired, 
    earthdate: PropTypes.string.isRequired,
  };

*/