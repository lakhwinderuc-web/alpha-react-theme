import { ModuleFields, TextField,FieldGroup } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <FieldGroup name="custom_id_class" label="Custom | Class & ID">
      <TextField
        name="class"
        label="Class"
        required={false}
        locked={false}
        default=""
      />

      <TextField
        name="custom_id"
        label="ID"
        required={false}
        locked={false}
        default=""
      />
    </FieldGroup>
  </ModuleFields>
);
