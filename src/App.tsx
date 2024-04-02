import { useState } from 'react';
import './App.css';
import Tour from 'reactour';

const App = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);

  const openTour = () => {
    setIsTourOpen(true);
  }

  const closeTour = () => {
    setIsTourOpen(false);
  }

  const steps = [
    {
      selector: '#tour-1',
      content: 'This is the first step.',
      // position: 'bottom',
      style: {
        backgroundColor: '#bada55',
      },
    },
    {
      selector: '#tour-2',
      content: 'This is the second step.',
      // position: 'right',
    },
    {
      selector: '#tour-3',
      content: <div>Lorem ipsum <button>Go to another step 5</button></div>,
      // position: 'top',
    },
  ];

  return (
    <>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        accentColor='#18171f'
        badgeContent={(curr, tot) => `${curr} of ${tot}`}
        // disableKeyboardNavigation={['esc']}
        lastStepNextButton={<button>Finish</button>}
      />
      <button onClick={openTour}>Start Tour</button>
    </>
  );
}

export default App;