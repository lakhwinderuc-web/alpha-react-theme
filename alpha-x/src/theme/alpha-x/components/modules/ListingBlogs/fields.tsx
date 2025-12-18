import { ModuleFields, BlogField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <BlogField name="blog" label="Blog" required={false} locked={false}  />
  </ModuleFields>
);
