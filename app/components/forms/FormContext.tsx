import React, { createContext, useContext } from 'react';
import { useForm, FormProvider as RHFProvider } from 'react-hook-form';

export const FormContext = createContext<any>(null);

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children, initialData = {} }) {
  const methods = useForm({
    defaultValues: initialData,
  });

  return (
    <RHFProvider {...methods}>
      {children}
    </RHFProvider>
  );
}
