function PaymentMethodSelector({ method, setMethod }) {
  return (
    <fieldset>
      <legend>Método de pago</legend>
      <label>
        <input
          type="radio"
          name="method"
          value="card"
          checked={method === "card"}
          onChange={() => setMethod("card")}
        />{" "}
        Tarjeta
      </label>{" "}
      <label>
        <input
          type="radio"
          name="method"
          value="applepay"
          checked={method === "applepay"}
          onChange={() => setMethod("applepay")}
        />{" "}
        Apple Pay
      </label>
    </fieldset>
  );
}
export default PaymentMethodSelector;
