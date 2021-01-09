import React from 'react';
import { Container } from 'semantic-ui-react';
import { AutoForm } from 'uniforms-semantic';
import { createSchemaBridge } from './_uniforms';
import { withRouter } from 'next/router';

function AutoFormPage({ router, request, schema }) {
  console.log({ request });

  function onSubmit(query) {
    router.push({ pathname: 'autoform', query });
  }

  return (
    <Container>
      <AutoForm
        schema={createSchemaBridge(schema)}
        model={request}
        onSubmit={onSubmit}
        showInlineError={true}
      />
    </Container>
  );
}
export default withRouter(AutoFormPage);

export async function getServerSideProps({ query }) {
  const schema = {
    title: 'Guest',
    type: 'object',
    properties: {
      firstName: { type: 'string', minLength: 1 },
      lastName: { type: 'string', minLength: 1 },
      workExperience: {
        description: 'Work experience in years',
        type: 'integer',
        minimum: 0,
        maximum: 100
      },
      zip: { type: 'string', pattern: '[0-9]{5}' },
      color: { type: 'string', enum: ['red', 'amber', 'green'] }
    },
    required: ['firstName', 'lastName']
  };
  const request = query;

  const props = {
    schema,
    request
  };
  return { props };
}
