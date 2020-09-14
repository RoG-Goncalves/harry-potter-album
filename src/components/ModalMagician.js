import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ModalTransaction({ onClose, magician }) {
  // const [updatedTransaction, setUpdatedTransaction] = useState('')
  //--------------------------------------------
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })
  //----------------------------------------
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose(false)
    }
  }
  //----------------------------------------
  const handleCancelButton = () => {
    onClose(false)
  }
  //----------------------------------------
  const { image, name, wand, house, patronus } = magician
  return (
    <div>
      {/* <CSSTransition
        in={false}
        timeout={300}
        classNames="dialog"
      > */}
      <Modal
        closeTimeoutMS={500}
        isOpen={true}
        style={styles.flexRow}
      >
        <div style={house === 'Gryffindor' ? styles.houseContainerGryffindor : house === 'Ravenclaw' ? styles.houseContainerRavenclaw : house === 'Slytherin' ? styles.houseContainerSlytherin : styles.houseContainerHufflepuff}>
          <div style={styles.magician} className='z-depth-3'>
            <div>
              <img src={image} alt={name} style={styles.avatar} />
            </div>
            <div>
              <h1>{name}</h1>
              <h6>{house}</h6><br />
              <div style={{ marginBottom: '20px' }}>
                <h5>Varinha:</h5>
                <span><strong>Core: </strong>{wand.core}<br /></span>
                <span><strong>Tamanho:</strong> {wand.length} polegadas ({(wand.length * 2.54).toFixed(2)} centímetros)<br /></span>
                <span><strong>Tipo de Madeira:</strong> {wand.wood}<br /></span>
              </div>
              <div style={{ marginBottom: '20px' }} >
                <span><strong>Patrono:</strong> {patronus}</span>
              </div>
            </div>
            <button onClick={handleCancelButton} className={`waves-effect waves-light ${house === 'Gryffindor' ? '#b71c1c red darken-4' : house === 'Ravenclaw' ? '#1e88e5 blue darken-1' : house === 'Slytherin' ? '#26a69a teal lighten-1' : '#ffca28 amber lighten-1'} btn`}>Evanesco</button>
          </div>
        </div>
      </Modal>
    </div >
  )
}
const styles = {
  avatar: {
    height: 'auto',
    width: '200px'
  },
  houseContainerGryffindor: {
    padding: '10px',
    backgroundColor: '#ffc107'
  },
  houseContainerSlytherin: {
    padding: '10px',
    backgroundColor: '#212121'
  },
  houseContainerRavenclaw: {
    padding: '10px',
    backgroundColor: '#757575'
  },
  houseContainerHufflepuff: {
    padding: '10px',
    backgroundColor: '#212121'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'left',
    justifyContent: 'left',
    border: '1px solid lightgray',
    borderRadius: '5px',
    padding: '5px',
    overlay: { zIndex: 1000 },
  },
  magician: {
    margin: '10px',
    backgroundColor: 'white',
    padding: '10px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
  }
}

