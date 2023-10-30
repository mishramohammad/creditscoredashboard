import { Form, Field } from 'react-final-form';

const onSubmit = values => {
  // You can send the form values to your backend here
};

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Income</label>
          <Field
            name="income"
            component="input"
            type="number"
            placeholder="Income"
          />
        </div>
        <div>
          <label>Credit History</label>
          <Field
            name="creditHistory"
            component="input"
            type="number"
            placeholder="Credit History"
          />
        </div>
        <div>
          <label>Outstanding Debt</label>
          <Field
            name="outstandingDebt"
            component="input"
            type="number"
            placeholder="Outstanding Debt"
          />
        </div>
        <button type="submit" disabled={submitting || pristine}>
          Submit
        </button>
      </form>
    )}
  />
);
