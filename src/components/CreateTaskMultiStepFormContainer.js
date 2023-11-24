import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from 'react';
   
  import { produce } from 'immer';
  import classNames from 'classnames';
   
  import { Tab } from '@headlessui/react';
  import { useForm, useFormState } from 'react-hook-form';
   
  import Heading from '~/core/ui/Heading';
  import Button from '~/core/ui/Button';
  import StepperItem from '~/core/ui/StepperItem';
  import TextField from '~/core/ui/TextField';
  import Label from '~/core/ui/Label';
   
  const FORM_STATE = {
    selectedIndex: 0,
    steps: {
      details: {
        valid: false,
        dirty: false,
        value: {
          name: '',
          dueDate: '',
        },
      },
      preferences: {
        valid: false,
        dirty: false,
        value: {
          receiveEmails: false,
          receiveNotifications: false,
        },
      },
    },
  };
   
  const FORM_STEPS = [
    {
      label: `Details`,
    },
    {
      label: `Preferences`,
    },
    {
      label: `Complete`,
    },
  ];
   
  const FormStateContext = createContext({
    form: FORM_STATE,
    setForm: (
      form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE)
    ) => {},
  });
   
  function CreateTaskMultiStepFormContainer() {
    const [form, setForm] = useState(FORM_STATE);
   
    return (
      <FormStateContext.Provider
        value={{
          form,
          setForm,
        }}
      >
        <CreateTaskMultiStepForm />
      </FormStateContext.Provider>
    );
  }
   
  const CreateTaskMultiStepForm = () => {
    const { form, setForm } = useContext(FormStateContext);
   
    const next = useCallback(() => {
      setForm(
        produce((form) => {
          form.selectedIndex += 1;
        })
      );
    }, [setForm]);
   
    const prev = useCallback(() => {
      setForm(
        produce((form) => {
          form.selectedIndex -= 1;
        })
      );
    }, [setForm]);
   
    const setSelectedIndex = useCallback(
      (index: number) => {
        setForm(
          produce((form) => {
            form.selectedIndex = index;
          })
        );
      },
      [setForm]
    );
   
    const selectedIndex = form.selectedIndex;
   
    return (
      <Tab.Group selectedIndex={selectedIndex}>
        <Tab.List className={'Stepper mb-6'}>
          {FORM_STEPS.map((step, index) => {
            const canSelectStep = Object.values(form.steps)
              .slice(0, index)
              .every((step) => step.valid && !step.dirty);
   
            return (
              <StepperItem
                key={index}
                className={classNames({
                  ['CompletedStep']: index < selectedIndex,
                  ['StepperStepActionable']: canSelectStep,
                })}
                step={index + 1}
                onSelect={() => {
                  if (canSelectStep) {
                    setSelectedIndex(index);
                  }
                }}
              >
                {step.label}
              </StepperItem>
            );
          })}
        </Tab.List>
   
        <Tab.Panels>
          <Tab.Panel>
            <div className={'flex w-full flex-col space-y-6'}>
              <div>
                <Heading type={3}>Details</Heading>
              </div>
   
              <DetailsForm onNext={next} />
            </div>
          </Tab.Panel>
   
          <Tab.Panel>
            <div className={'flex w-full flex-col space-y-6'}>
              <div>
                <Heading type={3}>Preferences</Heading>
              </div>
   
              <PreferencesForm onNext={next} onPrev={prev} />
            </div>
          </Tab.Panel>
   
          <Tab.Panel>
            <div className={'flex w-full flex-col space-y-6'}>
              <div>
                <Heading type={3}>Complete</Heading>
              </div>
   
              <pre>{JSON.stringify(form, null, 2)}</pre>
   
              <div className={'flex space-x-2'}>
                <Button>Proceed to your Dashboard</Button>
                <Button color={'transparent'} onClick={prev}>
                  Back
                </Button>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    );
  };
   
  function DetailsForm(
    props: React.PropsWithChildren<{
      onNext: () => void;
    }>
  ) {
    const { form, setForm } = useContext(FormStateContext);
   
    const { register, handleSubmit, control } = useForm({
      shouldUseNativeValidation: true,
      defaultValues: {
        name: form.steps.details.value.name,
        dueDate: form.steps.details.value.dueDate,
      },
    });
   
    const { isDirty } = useFormState({
      control,
    });
   
    const { ref: nameRef, ...nameControl } = register('name', { required: true });
   
    const { ref: dueDateRef, ...dueDateControl } = register('dueDate', {
      required: true,
    });
   
    useEffect(() => {
      setForm(
        produce((form) => {
          form.steps.details.dirty = isDirty;
        })
      );
    }, [isDirty, setForm]);
   
    return (
      <form
        onSubmit={handleSubmit((value) => {
          setForm(
            produce((formState) => {
              formState.steps.details = {
                value,
                valid: true,
                dirty: false,
              };
            })
          );
   
          props.onNext();
        })}
      >
        <div className={'flex flex-col space-y-4'}>
          <TextField.Label>
            Task Name
            <TextField.Input {...nameControl} innerRef={nameRef} />
          </TextField.Label>
   
          <TextField.Label>
            Due date
            <TextField.Input
              type={'date'}
              {...dueDateControl}
              innerRef={dueDateRef}
            />
          </TextField.Label>
   
          <Button>Next</Button>
        </div>
      </form>
    );
  }
   
  function PreferencesForm(
    props: React.PropsWithChildren<{
      onNext: () => void;
      onPrev: () => void;
    }>
  ) {
    const { form, setForm } = useContext(FormStateContext);
   
    const { register, handleSubmit, control } = useForm({
      shouldUseNativeValidation: true,
      defaultValues: form.steps.preferences.value,
    });
   
    const { isDirty } = useFormState({ control });
   
    const receiveEmailsControl = register('receiveEmails');
    const receiveNotificationsControl = register('receiveNotifications');
   
    useEffect(() => {
      setForm(
        produce((form) => {
          form.steps.preferences.dirty = isDirty;
        })
      );
    }, [isDirty, setForm]);
   
    return (
      <form
        onSubmit={handleSubmit((value) => {
          setForm(
            produce((state) => {
              state.steps.preferences = {
                valid: true,
                dirty: false,
                value,
              };
            })
          );
   
          props.onNext();
        })}
      >
        <div className={'flex w-full flex-col space-y-4'}>
          <Label className={'flex items-center space-x-4'}>
            <input
              type={'checkbox'}
              className={'Toggle'}
              {...receiveEmailsControl}
            />
   
            <span>Receive Emails</span>
          </Label>
   
          <Label className={'flex items-center space-x-4'}>
            <input
              type={'checkbox'}
              className={'Toggle'}
              {...receiveNotificationsControl}
            />
   
            <span>Receive Notifications</span>
          </Label>
   
          <div className={'flex space-x-2'}>
            <Button>Next</Button>
   
            <Button color={'transparent'} onClick={props.onPrev}>
              Back
            </Button>
          </div>
        </div>
      </form>
    );
  }
   
  export default CreateTaskMultiStepFormContainer;