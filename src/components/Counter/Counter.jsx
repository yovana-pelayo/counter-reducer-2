import { useReducer } from 'react';
import { useEffect } from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

const initialCounter = { count: 0, currentColor: colors.yellow };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, currentColor: colors.yellow };
    case 'decrement':
      return { count: state.count - 1, currentColor: colors.red };
    case 'reset':
      return { count: (state.count = 0), currentColor: colors.yellow };
    case 'zero':
      return { count: state.count, currentColor: colors.yellow };
    case 'positive':
      return { count: state.count, currentColor: colors.green };
    case 'negative':
      return { count: state.count, currentColor: colors.red };
    default:
      throw new Error('Unable to process request. Try again sister.');
  }
}

// we are assigning the current color to be associated with teh number count. I would like to use this or see another example. since we are replacing our old state with the new one or current state we must pass in state.count. its not the count anymore.  its the new count.
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialCounter);

  useEffect(() => {
    if (state.count === 0) {
      dispatch({ type: 'zero' });
    }

    if (state.count > 0) {
      dispatch({ type: 'positive' });
    }

    if (state.count < 0) {
      dispatch({ type: 'negative' });
    }
  }, [state.count]);
  // state.count are the dependencies

  // we are calling dispatch and teh action would be zero if count equals zero. A better way or sayign that is that if the count is zero, we are calling dispatch, replacing the new state with the action or zero??

  // updated the return count on the header to state.count because we are only returning updated state

  // we added state to the objects that we are changing, the count and the current color. What is a better way to say this? Tired of sounding tipsy
  return (
    <main className={styles.main}>
      <h1 style={{ color: state.currentColor }}>{state.count}</h1>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'increment' })}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'decrement' })}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={() => dispatch({ type: 'reset' })}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
// onclick we are assigning the action of incrementing to the button. we are calling dispatch and the action is inside the type
