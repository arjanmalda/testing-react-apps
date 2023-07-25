// http://localhost:3000/spinner

import * as React from 'react'

function Spinner() {
  return (
    <div className="lds-ripple" aria-label="loading...">
      hello
      <div />
      <div />
    </div>
  )
}

export default Spinner
