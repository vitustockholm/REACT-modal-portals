import React, { useState } from 'react';
import { HomePageWrapper } from './HomePage.style';
//Components
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

const HomePage = () => {
  //Hooks
  //--state
  const [isOpen, setIsOpen] = useState(false); //for modal

  //Custom functions
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HomePageWrapper>
        <section>
          <Button text='Open Modal' action={openModal} />
        </section>
      </HomePageWrapper>
      {isOpen && <Modal onClose={closeModal}>Hello from Modal</Modal>}
    </>
  );
};

export default HomePage;
