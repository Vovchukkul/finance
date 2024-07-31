import React from 'react';

export const Form = () => {
  return (
    <div className='form m-5'>
      <div className="field">
        <label className="label">Готівка</label>
        <div className="control has-icons-left">
          <input className="input" type="number" placeholder="Cash" />
          <span className='icon is-left'>
            <i className="fa-solid fa-money-bill"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Mono</label>
        <div className="control has-icons-left">
          <input className="input" type="number" placeholder="Cash" />
          <span className='icon is-left'>
            <i className="fa-solid fa-money-check"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Приват</label>
        <div className="control has-icons-left">
          <input className="input" type="number" placeholder="Cash" />
          <span className='icon is-left'>
            <i className="fa-solid fa-money-check"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Dollars</label>
        <div className="control has-icons-left">
          <input className="input" type="number" placeholder="Cash" />
          <span className='icon is-left'>
            <i className="fa-solid fa-dollar-sign"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Euros</label>
        <div className="control has-icons-left">
          <input className="input" type="number" placeholder="Cash" />
          <span className='icon is-left'>
            <i className="fa-solid fa-euro-sign"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">LeoCard</label>
        <div className="control has-icons-left">
          <input className="input" type="number" placeholder="Cash" />
          <span className='icon is-left'>
            <i className="fa-solid fa-bus"></i>
          </span>
        </div>
      </div>

      {/* <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right" />
          <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        <p className="help is-success">This username is available</p>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div> */}

      <div className="field">
        <label className="label">Загальні відомості</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div className="field">
          <label className="label">Select a Date</label>
          <div className="control has-icons-left">
              <input className="input is-rounded custom-date-input" type="date" id="date-input" />
              <span className="icon is-small is-left">
                  <i className="fas fa-calendar-alt"></i>
              </span>
          </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
}