import { Form, Field } from 'react-final-form';
import './DataEntry.css';
import './DataVisualization.css';
import './Report.css';


const onSubmit = values => {
  
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

export default MyForm;