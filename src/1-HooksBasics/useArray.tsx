import { useState } from 'react';
import { cloneDeep } from 'lodash';

export function App() {
  const { array, pushElement, removeElement, clearArray } = useArray([1, 2, 3]);
  const [inputValue, setInputValue] = useState("");

  const addInputValue = () => {
    const intValue = parseInt(inputValue);
    if (!Number.isNaN(intValue)) {
      pushElement(intValue);
    }
  };

  return (
    <>
      <div data-testid="array">[{array.join(", ")}]</div>
      <div>
        <input
          data-testid="input"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addInputValue}>Add</button>
      </div>
      <div>
        <button disabled={!array.length} onClick={() => removeElement(0)}>
          Remove first
        </button>
        <button
          disabled={!array.length}
          onClick={() => removeElement(array.length - 1)}
        >
          Remove last
        </button>
        <button disabled={!array.length} onClick={() => clearArray()}>
          Clear array
        </button>
      </div>
    </>
  );
}


type UseArray<T> = {
  array: T[];
  pushElement: (elem: T) => void;
  removeElement: (index: number) => void;
  clearArray: () => void;
}

function useArray<T>(initialValue: T[]): UseArray<T> {
  const [array, setArray] = useState<T[]>(initialValue);

  const pushElement = (elem: T) => {
    const copy = cloneDeep(array);
    copy.push(elem)
    setArray(copy)
  };

  const removeElement = (index: number) => {
    const copy = cloneDeep(array);
    if (index < copy.length) {
      copy.splice(index, 1);
    }
    setArray(copy);
  }

  const clearArray = () => setArray([]);

  return {
    array,
    pushElement,
    removeElement,
    clearArray,
  }
}
