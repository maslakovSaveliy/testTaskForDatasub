import { useForm } from "react-hook-form";
import React from "react";
import "./resources/style.css";
import mongoose from "mongoose";
const App = () => {
  mongoose.connect("mongodb://localhost/muggers-db");
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    console.log({ RequestId: String(Date.now()), Amount: data.amount });
    reset();
  };
  return (
    <>
      <form className="pay__form" onSubmit={handleSubmit(onSubmit)}>
        <span className="card__number">
          <div>{errors?.cardNumber && <p>Wrong Card Number</p>}</div>
          <label>Card Number:</label>
          <input
            {...register("cardNumber", {
              minLength: 16,
              maxLength: 16,
              required: true,
            })}
            type="number"
            placeholder="0000-0000-0000-0000"
          />
        </span>
        <span className="expiration">
          <div>
            {(errors?.expirationDateMonth || errors?.expirationDateYear) && (
              <p>Wrong Expiration Date</p>
            )}
          </div>
          <label>Expiration Date:</label>
          <span className="exp">
            <input
              {...register("expirationDateMonth", {
                min: 1,
                max: 12,
                maxLength: 2,
                required: true,
              })}
              type="number"
              placeholder="MM"
            />
            /
            <input
              {...register("expirationDateYear", {
                min: 1,
                max: 99,
                maxLength: 2,
                required: true,
              })}
              type="number"
              placeholder="YY"
            />
          </span>
        </span>
        <span className="cvv">
          <div>{errors?.cvv && <p>Wrong CVV</p>}</div>
          <label>CVV:</label>
          <input
            {...register("cvv", {
              minLength: 3,
              maxLength: 3,
              required: true,
            })}
            type="number"
            placeholder="123"
          />
        </span>
        <span className="amount">
          <div>{errors?.amount && <p>Wrong Amount</p>}</div>
          <label>Amount:</label>
          <input
            {...register("amount", {
              required: true,
            })}
            type="amount"
            placeholder="1000"
          />
        </span>
        <input
          className="submit"
          disabled={!isValid}
          value="Купить"
          type="submit"
        />
      </form>
    </>
  );
};
export default App;
