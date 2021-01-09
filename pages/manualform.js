import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { AutoField, AutoForm, SubmitField } from 'uniforms-semantic';
import { createSchemaBridge } from './_uniforms';
import { withRouter } from 'next/router';

function ManualFormPage({ router, request, schema }) {
  console.log({ request });

  function onSubmit(query) {
    router.push({ pathname: 'manualform', query });
  }

  return (
    <Container>
      <AutoForm
        schema={createSchemaBridge(schema)}
        model={request}
        onSubmit={onSubmit}
        showInlineError={true}>
        <h4>IT meeting guest questionnaire</h4>
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column>
              <AutoField name="firstName" />
            </Grid.Column>
            <Grid.Column>{schema.properties.lastName && <AutoField name="lastName" />}</Grid.Column>
          </Grid.Row>
        </Grid>
        <span>Do you want to share your work experience with us?</span>
        <AutoField name="workExperience" />
        <SubmitField />
      </AutoForm>
    </Container>
  );
}
export default withRouter(ManualFormPage);

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
