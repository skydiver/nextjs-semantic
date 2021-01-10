import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { AutoField, AutoForm, SubmitField } from 'uniforms-semantic';
import { createSchemaBridge } from '../libs/uniforms';
import { withRouter } from 'next/router';
import Registration from '../usecases/Registration';

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

export async function getServerSideProps({ query: request }) {
  const usecase = new Registration();
  const props = {
    request,
    response: await usecase.process(request),
    schema: usecase.getSchema(request)
  };
  return { props };
}
