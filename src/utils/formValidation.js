import { z } from 'zod';

export function generateValidationSchema(fields) {
  const schemaObject = {};

  fields.forEach((field) => {
    let fieldSchema = z.any();

    switch (field.type) {
      case 'email':
        fieldSchema = z.string().email(field.validation?.message || 'Invalid email address');
        break;
      case 'number':
        fieldSchema = z.number();
        if (field.validation?.min !== undefined) {
          fieldSchema = fieldSchema.min(field.validation.min);
        }
        if (field.validation?.max !== undefined) {
          fieldSchema = fieldSchema.max(field.validation.max);
        }
        break;
      case 'text':
      case 'textarea':
        fieldSchema = z.string();
        if (field.validation?.minLength !== undefined) {
          fieldSchema = fieldSchema.min(field.validation.minLength);
        }
        if (field.validation?.maxLength !== undefined) {
          fieldSchema = fieldSchema.max(field.validation.maxLength);
        }
        if (field.validation?.pattern) {
          fieldSchema = fieldSchema.regex(new RegExp(field.validation.pattern));
        }
        break;
      case 'checkbox':
        fieldSchema = z.boolean();
        break;
      default:
        fieldSchema = z.string();
    }

    if (field.required) {
      schemaObject[field.name] = fieldSchema;
    } else {
      schemaObject[field.name] = fieldSchema.optional();
    }
  });

  return z.object(schemaObject);
}