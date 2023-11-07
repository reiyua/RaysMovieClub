import { useState, useEffect, useContext } from 'react'
import { StorageContext } from '../contexts/StorageContext'
import { ref, getDownloadURL } from 'firebase/storage'
import Card from 'react-bootstrap/Card'

export function ItemImage ( props ) {
  const [image,setImage] = useState()

  const storage = useContext( StorageContext)

  useEffect( () => {
    if( props.source ) {
      const imgref = ref( storage, `book_covers/${props.source}`)
      getDownloadURL( imgref )
      .then( (url) => setImage(url) )
      .catch( err => console.log(err) )
    }
  }, [props.source] )

  if(!image) {
    const defstyle={
      backgroundColor: "#cccccc",
      aspectRatio: "4/3"
    }
    return (
      <div style={defstyle}>
      </div>
    )
  }
  else {
    return (
      <Card.Img variant='top' src={image} />
    )
  }
}