import React from 'react';

/***** CLASS *****/
// class App extends React.Component {
//   state = {
//     clicked: false
//   }

//   handleClick = () => {
//     // The handler won't be called if the button
//     // is disabled, so if we got here, it's safe
//     // to trigger the click.
//     this.props.onClick();

//     // Ok, no more clicking
//     this.setState({ clicked: true });
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick} disabled={this.state.clicked}>
//         You can only click me once
//       </button>
//     );
//   }
// }

/***** FUNCTION *****/
// function App({ onClick }) {
//   const [clicked, setClicked] = React.useState(false);

//   const handleClick = () => {
//     onClick();

//     // Ok, no more clicking
//     setClicked(true);
//   };

//   return ( 
//     <button onClick={handleClick} disabled={clicked}>
//       You can click me once
//     </button>
//   );
// }


/********************************************************************/
// const App = () => {
//   const [counts, setCounts] = React.useState({
//     countA: 0,
//     countB: 0
//   });

//   const incA = () => (
//     setCounts(counts => ({
//       ...counts,
//       countA: counts.countA + 1
//     }))
//   );

//   const incB = () => (
//     setCounts(counts => ({
//       ...counts,
//       countB: counts.countB + 1
//     }))
//   );

//   const badIncA = () => (
//     setCounts(counts => ({
//       countA: counts.countA + 1
//     }))
//   );

//   return (
//     <>
//       <div>A: {counts.countA}</div>
//       <div>B: {counts.countB}</div>
//       <button onClick={incA}>Increment A</button>
//       <button onClick={incB}>Increment B</button>
//       <button onClick={badIncA}>Increment A Badly</button>
//     </>
//   );

// }

/*
1. Create a Room component with a “lightswitch” button and some text describing “The room is
lit” or “The room is dark”. Clicking the button should toggle the light on and off, and update
the text. Use the useState hook to store the lightswitch state.
*/
/*
const Room = () => {
  const [lightSwitch, setLightSwitch] = React.useState({
    isOn: false,
    text: 'Use the switch'
  });

  const handleSwitch = () => {
    if (lightSwitch.isOn == false) {
      console.log('FALSE', lightSwitch.isOn);
      setLightSwitch({isOn: true, text: 'The room is lit'})
    }

    if (lightSwitch.isOn == true) {
      console.log('TRUE', lightSwitch.isOn);
      setLightSwitch({isOn: false, text: 'The room is dark'})
    }

  }

  return (
    <div>
      <h1>{lightSwitch.text}</h1>
      <button onClick={handleSwitch}>Switch On/Off</button>
    </div>
  )

};
*/
/*****/

/*
2. Create a RandomList component that shows a button, and a list of random numbers. When
you click the button, add another random number to the list. Store the array of numbers with
useState. The initial state should be an empty array.
*/
/*
const RandomList = () => {
  const [numb, setNumb] = React.useState([]);

  const randomNumber = () => {
    const number = Math.floor(Math.random() * Math.floor(10));
    setNumb([...numb, number]);
    console.log(numb);
  }

  return (
    <div>
      <button onClick={randomNumber}>Click for a random number</button>
      <h1>List of random numbers: {numb}</h1>
    </div>
  );

}
*/
/*****/


/*
3. Create a component called AudioControls with 4 pieces of state: “volume”, “bass”, “mid,
and”treble”, each storing a value between 1 and 100.
Display each value along with a label and a pair of +/- buttons for increasing and decreasing the value.
*/
/*
const AudioControls = () => {
  const [controls, setControls] = React.useState({
    volume: 50,
    bass: 50,
    mid: 50,
    treble: 50
  });

  const decrease = (e) => {
    if (e.target.className === 'volume-down') {
      const volume = controls.volume - 1;
      setControls({...controls, volume});
    }
    if (e.target.className === 'bass-down') {
      const bass = controls.bass - 1;
      setControls({...controls, bass});
    }
    if (e.target.className === 'mid-down') {
      const mid = controls.mid - 1;
      setControls({...controls, mid});
    }
    if (e.target.className === 'treble-down') {
      const treble = controls.treble - 1;
      setControls({...controls, treble});
    }
  }

  const increase = (e) => {
    if (e.target.className === 'volume-up') {
      const volume = controls.volume + 1;
      setControls({...controls, volume});
    }
    if (e.target.className === 'bass-up') {
      const bass = controls.bass + 1;
      setControls({...controls, bass});
    }
    if (e.target.className === 'mid-up') {
      const mid = controls.mid + 1;
      setControls({...controls, mid});
    }
    if (e.target.className === 'treble-up') {
      const treble = controls.treble + 1;
      setControls({...controls, treble});
    }
  }

  console.log(controls);

  return (
    <div>
      <div><button onClick={decrease} className='volume-down'>-</button>Volume: {controls.volume}<button onClick={increase} className='volume-up'>+</button></div>
      <div><button onClick={decrease} className='bass-down'>-</button>Bass: {controls.bass}<button onClick={increase} className='bass-up'>+</button></div>
      <div><button onClick={decrease} className='mid-down'>-</button>Mid: {controls.mid}<button onClick={increase} className='mid-up'>+</button></div>
      <div><button onClick={decrease} className='treble-down'>-</button>Treble: {controls.treble}<button onClick={increase} className='treble-up'>+</button></div>
    </div>
  );

}
*/


/* CONTROLLED INPUTS */
/*
const InputExample = () => {
  const [text, setText] = React.useState('');
  const handleChange = event => {
    setText(event.target.value);
  };
  console.log(text);
  return ( 
    <input type="text" value={text} onChange={handleChange}/>
  );
}
*/

/* UNCONTROLLED INPUTS (Using ref) */ 
/*
const RefInput = () => {
  const input = React.useRef();
  const showValue = () => {
    console.log(`Input contains: ${input.current.value}`);
  };
  return (
    <div>
      <input type="text" ref={input} />{" "}
      <button onClick={showValue}>Alert the Value!</button>{" "}
    </div>
  );
};
*/

/*
1. Create an app with labelled, controlled text inputs for First Name and Last Name, and have it
display “Hello, {firstName} {lastName}!” in real time, as you type into the text boxes.
*/
/*
const Inputs = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const firstNameChange = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  }

  const lastNameChange = e => {
    console.log(e.target.value);
    setLastName(e.target.value);
  }

  return (
    <div>
      <h1>Hello {firstName} {lastName}</h1>
      <label htmlFor='firstname'>Firstname: </label>
      <input id='firstname' type='text' value={firstName} onChange={firstNameChange}/>
      <p/>
      <label htmlFor='lastname'>Lastname: </label>
      <input id='lastname' type='text' value={lastName} onChange={lastNameChange}/>
    </div>
  )
}
*/

/*
2. Create another version of the app from Exercise 1, with labelled text inputs for First Name
and Last Name, but make them uncontrolled inputs instead. Create refs to the inputs, and add a
Submit button that, when clicked, will update the display to reflect the values in the inputs.
*/

const Inputs = () => {
  const firstName = React.useRef();
  // const lastName = React.useRef();
  let name = 'nev';
  // console.log(name);
  const showInput = () => {
    name = firstName.current.value;
    // console.log(name);
    console.log(firstName.current.value);
    
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <label htmlFor='firstname'>Firstname: </label>
      <input id='firstname' type='text' ref={firstName} />
      <button onClick={showInput}>Click</button>
    </div>
  )

}

export default Inputs;
