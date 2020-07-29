import React from 'react';

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
    <form onSubmit={handleSubmit}>
      <ErrorsDisplay errors={errors} />
      {elements()}
      <div class="grid-100 pad-bottom">
        <button class="button" type="submit">{submitButtonText}</button>
        <button class="button button-secondary" onclick={handleCancel}>Cancel</button>
      </div>
    </form>
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