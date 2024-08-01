import React, { FormEvent, useState } from "react";
import { Payment } from "../types/Payment";

type Props = {
  onSubmit: (newPayment: Payment) => void;
};

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [cash, setCash] = useState('');
  const [mono, setMono] = useState('');
  const [privat, setPrivat] = useState('');
  const [dollars, setDollars] = useState('');
  const [euros, setEuros] = useState('');
  const [leocard, setLeocard] = useState('');
  const [savings, setSavings] = useState('');
  const [date, setDate] = useState("");

  const handleCashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCash(e.target.value);
  };
  const handleMonoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMono(e.target.value);
  };
  const handlePrivatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivat(e.target.value);
  };
  const handleDollarsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDollars(e.target.value);
  };
  const handleEurosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEuros(e.target.value);
  };
  const handleLeocardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeocard(e.target.value);
  };
  const handleSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSavings(e.target.value);
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const reset = () => {
    setCash('');
    setMono('');
    setPrivat('');
    setDollars('');
    setEuros('');
    setLeocard('');
    setSavings('');
    setDate("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      cash: +cash,
      mono: +mono,
      privat: +privat,
      dollars: +dollars,
      euros: +euros,
      leocard: +leocard,
      savings: +savings,
      date: date,
    });
  };

  return (
    <form 
      className="form m-5 mb-5" 
      method="POST" 
      onReset={reset} 
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label className="label">Готівка</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="number"
            placeholder="Cash"
            value={cash}
            onChange={handleCashChange}
          />
          <span className="icon is-left">
            <i className="fa-solid fa-money-bill"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Mono</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="number"
            placeholder="Mono"
            value={mono}
            onChange={handleMonoChange}
          />
          <span className="icon is-left">
            <i className="fa-solid fa-money-check"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Приват</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="number"
            placeholder="Privat"
            value={privat}
            onChange={handlePrivatChange}
          />
          <span className="icon is-left">
            <i className="fa-solid fa-money-check"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Dollars</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="number"
            placeholder="Dollars"
            value={dollars}
            onChange={handleDollarsChange}
          />
          <span className="icon is-left">
            <i className="fa-solid fa-dollar-sign"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Euros</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="number"
            placeholder="Euros"
            value={euros}
            onChange={handleEurosChange}
          />
          <span className="icon is-left">
            <i className="fa-solid fa-euro-sign"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">LeoCard</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="number"
            placeholder="LeoCard"
            value={leocard}
            onChange={handleLeocardChange}
          />
          <span className="icon is-left">
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
        <label className="label">Savings</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="number"
            placeholder="Mono"
            value={savings}
            onChange={handleSavingsChange}
          />
          <span className="icon is-left">
            <i className="fas fa-piggy-bank"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Select a Date</label>
        <div className="control has-icons-left">
          <input
            className="input is-rounded custom-date-input"
            type="date"
            id="date-input"
            value={date}
            onChange={handleDateChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-calendar-alt"></i>
          </span>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
        <div className="control">
          <button onClick={reset} className="button is-link is-light">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};
