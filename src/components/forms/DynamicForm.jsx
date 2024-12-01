import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateValidationSchema } from '../../utils/formValidation.js';
import { DynamicField } from './DynamicField.jsx';

export function DynamicForm({ config, onSubmit }) {
  const validationSchema = generateValidationSchema(config.fields);
  
  const methods = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: Object.fromEntries(
      config.fields.map((field) => [field.name, field.defaultValue])
    ),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        {config.fields.map((field) => (
          <DynamicField key={field.name} field={field} />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          {config.submitLabel || 'Submit'}
        </button>
      </form>
    </FormProvider>
  );
}