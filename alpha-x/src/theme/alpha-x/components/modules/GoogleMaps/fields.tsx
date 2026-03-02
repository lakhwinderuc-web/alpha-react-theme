import {
  ModuleFields,
  TextField,
  FieldGroup,
  RichTextField,
  SpacingField
} from "@hubspot/cms-components/fields";

export const fields = (
  <ModuleFields>
    <FieldGroup name="custom_css" label="Custom - Class | ID">
      <TextField
        name="customClass"
        label="Custom Class"
        required={false}
        locked={false}
        default=""
      />
      <TextField
        name="custom_id"
        label="Custom ID"
        required={false}
        locked={false}
        default=""
      />
    </FieldGroup>
    <FieldGroup name="add_map" label="Add Map">
      <RichTextField
        name="google_map"
        label="Google Map"
        default='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6550717187847!2d76.22517467473477!3d30.699979587216337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101129acebe57b%3A0x605147aec78a6fba!2sUnique%20Coderz!5e0!3m2!1sen!2sin!4v1771669769724!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      />
    </FieldGroup>

      <FieldGroup name="style" label="Style Tab" tab="STYLE">
          {/* Section Spacing */}
          <FieldGroup name="spacing" label="Spacing">
            {/*  Desktop */}
            <FieldGroup name="desktop" label="Desktop">
              <SpacingField
                name="desktop_spacing"
                label="Spacing"
                required={false}
                default={{
                  padding: {
                    top: { value: 100, units: "px" },
                    bottom: { value: 100, units: "px" },
                    left: { value: 0, units: "px" },
                    right: { value: 0, units: "px" },
                  },
                }}
              />
            </FieldGroup>
            {/* end Desktop */}
    
            {/* Tablet */}
            <FieldGroup name="tablet" label="Tablet">
              <SpacingField
                name="tablet_spacing"
                label="Spacing"
                required={false}
                default={{
                  padding: {
                    top: { value: 80, units: "px" },
                    bottom: { value: 80, units: "px" },
                    left: { value: 0, units: "px" },
                    right: { value: 0, units: "px" },
                  },
                }}
              />
            </FieldGroup>
            {/* end  Tablet */}
    
            {/*  Mobile */}
            <FieldGroup name="mobile" label="Mobile">
              <SpacingField
                name="mobile_spacing"
                label="Spacing"
                required={false}
                default={{
                  padding: {
                    top: { value: 80, units: "px" },
                    bottom: { value: 80, units: "px" },
                    left: { value: 0, units: "px" },
                    right: { value: 0, units: "px" },
                  },
                }}
              />
            </FieldGroup>
            {/* end Mobile */}
          </FieldGroup>
          {/* end */}
          </FieldGroup>
  </ModuleFields>
);
