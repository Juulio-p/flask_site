// The pupose of this file is to display the card for users / employees that are looking for work. A list of avaliable resumes displaying skills and jobs that they are looking for
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import classes from './Create_Employee_Post.module.css'; 

function Create_Employee_Post() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div className={classes.wrapper}>
        <div className={classes.inner}>

      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
       <TextInput
        mt="md"
        label="Job Desired"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: `${randomId()}@test.com`,
            })
          }
        >
          Set random values
        </Button>
      </Group>
      </div>

    </div>
  );
}
export default Create_Employee_Post; 
