import {
  ChoiceField,
  FieldGroup,
  ModuleFields,
  RichTextField,
  TextField,
  SpacingField,
  GradientField,
  BackgroundImageField,
  BooleanField
} from "@hubspot/cms-components/fields";

export const fields = (
  <ModuleFields>
   <FieldGroup name="customCss" label="Custom CSS">
           <TextField
        name="customClass"
        label="Custom Class"
        required={false}
        locked={false}
        default=""
      />


      <TextField
        name="customId"
        label="Custom ID"
        required={false}
        locked={false}
        default=""
      />
    </FieldGroup>
    <FieldGroup name="headingGroup" label="Heading">
      <RichTextField
        name="heading"
        label="Heading"
        required={false}
        locked={false}
        default="<h1>Welcome To Our Company</h1> <p>At our company, we are committed to missions and goals. such as innovative solutions</p>"
      />
    </FieldGroup>


    <FieldGroup name="buttonGroup" label="Button">
      <ChoiceField
        name="buttonChoice"
        label="Button Choice"
        required={false}
        locked={false}
        default="select"
        choices={[
          ["select", "Select an option"],
          ["primary", "Primary"],
          ["secondary", "Secondary"],
          ["simple", "Simple"],
          ["tertiary", "Tertiary"]
        ]}
      />


      <ChoiceField
        name="buttonSize"
        label="Button Size"
        required={false}
        locked={false}
        default="select"
        choices={[
          ["select", "Select an option"],
          ["small", "Small"],
          ["regular", "Regular"],
          ["large", "Large"],
        ]}
      />


      <TextField
        name="buttonText"
        label="Button Text"
        required={false}
        locked={false}
        default="Click Here"
      />
    </FieldGroup>


 <BooleanField
      name="button_enable"
      label="Button Enable"
      default={true}
      display="toggle"
    />


 {/* Styling */}

 <FieldGroup name="style" label="Style" tab="STYLE">

  {/* Section Spacing */}
<FieldGroup name='spacing' label='Spacing'>
 
    {/*  Desktop */}
<FieldGroup name='desktop' label='Desktop'>
<SpacingField
name="desktop_spacing"
label="Spacing"
required={false}
default={{
  padding: {
    top: { value: 100, units: "px" },
    bottom: { value: 100, units: "px" },
    left: { value: 20, units: "px" },
    right: { value: 20, units: "px" },
  },
  margin: {
          top: { value: 20, units: "px" },
          bottom: { value: 20, units: "px" },
        },
}}
/>
</FieldGroup>
    {/* end Desktop */}
   
    {/* Tablet */}
<FieldGroup name='tablet' label='Tablet'>
<SpacingField
name="tablet_spacing"
label="Spacing"
required={false}
default={{
  padding: {
    top: { value: 80, units: "px" },
    bottom: { value: 80, units: "px" },
    left: { value: 20, units: "px" },
    right: { value: 20, units: "px" },
  },
 margin: {
          top: { value: 20, units: "px" },
          bottom: { value: 20, units: "px" },
        },

}}
/>
 
</FieldGroup>
    {/* end  Tablet */}
 
    {/*  Mobile */}
<FieldGroup name='mobile' label='Mobile'>
<SpacingField
name="mobile_spacing"
label="Spacing"
required={false}
default={{
  padding: {
    top: { value: 80, units: "px" },
    bottom: { value: 80, units: "px" },
    left: { value: 20, units: "px" },
    right: { value: 20, units: "px" },
  },
  margin: {
          top: { value: 20, units: "px" },
          bottom: { value: 20, units: "px" },
        },
}}
/>
 
</FieldGroup>
    {/* end Mobile */}
 
 
</FieldGroup>
{/* end */}
 {/* BACKGROUND */}
      <FieldGroup name="background_field" label="Background">
        <ChoiceField
          name="background_type"
          label="Background Type"
          choices={[
            ['image', 'Image'],
            ['color', 'Color'],
          ]}
          default="color"
        />


      <GradientField
  name="gradient_field"
  label="Gradient"
  visibility={{
    controlling_field_path: 'style.background_field.background_type',
    operator: 'EQUAL',
    controlling_value_regex: 'color',
  }}
/>
        <BackgroundImageField
          name="background_image"
          label="Background Image"
          visibility={{
            controlling_field_path: 'style.background_field.background_type',
            operator: 'EQUAL',
            controlling_value_regex: 'image',
          }}/>
          </FieldGroup>
 </FieldGroup>

  </ModuleFields>
);
