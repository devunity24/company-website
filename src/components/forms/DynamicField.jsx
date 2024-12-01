import { useFormContext } from 'react-hook-form';
import { clsx } from 'clsx';

export function DynamicField({ field }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const baseInputClasses = clsx(
    'w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    errors[field.name]
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300'
  );

  const renderField = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            {...register(field.name)}
            id={field.name}
            placeholder={field.placeholder}
            className={`${baseInputClasses} min-h-[100px]`}
            defaultValue={field.defaultValue}
          />
        );

      case 'select':
        return (
          <select
            {...register(field.name)}
            id={field.name}
            className={baseInputClasses}
            defaultValue={field.defaultValue}
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <input
            {...register(field.name)}
            type="checkbox"
            id={field.name}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            defaultChecked={field.defaultValue}
          />
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  {...register(field.name)}
                  type="radio"
                  id={`${field.name}-${option.value}`}
                  value={option.value}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  defaultChecked={field.defaultValue === option.value}
                />
                <label
                  htmlFor={`${field.name}-${option.value}`}
                  className="ml-2 block text-sm text-gray-700"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <input
            {...register(field.name)}
            type={field.type}
            id={field.name}
            placeholder={field.placeholder}
            className={baseInputClasses}
            defaultValue={field.defaultValue}
          />
        );
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
        {field.name}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderField()}
      {errors[field.name] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[field.name]?.message}
        </p>
      )}
    </div>
  );
}