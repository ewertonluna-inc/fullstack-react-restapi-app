import React from 'react';

/*
  This component will serve as a template for other components that render a form.
  It uses a prop named 'elements' to render desired elements inside a form.
*/
export default (props) => {
  const {
    errors,
    submit,
    cancel,
    elements,
    submitButtonText
  } = props

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <div>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={handleSubmit}>
        {elements()}
        <div className="grid-100 pad-bottom">
          <button className="button" type="submit">{submitButtonText}</button>
          <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length > 0) {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {errors.map( (err, index) => <li key={index.toString()}>{err}</li> )}
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}