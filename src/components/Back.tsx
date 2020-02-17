import React from 'react';
import { withRouter } from 'react-router-dom';

function Back({ history }) {
  return <div onClick={() => history.goBack()}>Back</div>;
}

export default withRouter(Back);
