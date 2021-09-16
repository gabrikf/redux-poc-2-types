import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { current } from '../features/counter/counterSlices'

const Counter = () => {
  const count = useSelector((state) => state.titles.module)
  const dispatch = useDispatch()


  return (
    <div>

      <div>
          {count.map(ct => (
            <button
            aria-label="Increment value"
            onClick={() => dispatch(current(ct))}
            >
            {ct.name}
        </button>
       ))}
      </div>
    </div>
  )
}
export default Counter
