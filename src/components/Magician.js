import React, { useState } from 'react'
import ModalMagician from './ModalMagician'
import css from './magician.module.css'

export default function Magician({ magician }) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMagicClick = () => {
    console.log(isModalOpen)
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  const { image, name, house, age } = magician;

  return (
    <div>
      <div className={css.container} onClick={handleMagicClick}>
        <img src={image} alt={name} className={css.image} />
        <div className={css.overlay}>
          <div className={css.text}>{name}</div>
        </div>
      </div>
      <div>{isModalOpen && <ModalMagician
        onClose={handleCloseModal}
        magician={magician} />}
      </div>
    </div>





    // <div className={css.magician}>
    //   <div onClick={handleMagicClick} >
    //     <div > <img src={image} alt={name} className={css.avatar} /> </div>
    //     < div style={{ marginLeft: '10px' }}><span> {name}</span></div>
    //   </div>
    // </div>
  )
}


