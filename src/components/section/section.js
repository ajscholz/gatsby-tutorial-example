import React from 'react'
import classes from './section.module.css'

const section = () => {
  return (
    <section>
      <div class="container">
        <div className="row">
          <div className="col">
            <h1 className={classes.title}>Hello World Section Title</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">hello</div>
          <div className="col-sm-4">hello</div>
          <div className="col-sm-4">hello</div>
        </div>
      </div>
    </section>
  )
}

export default section
