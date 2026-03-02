import {
  ModuleFields,
  FieldGroup,
  TextField,
  RichTextField,
  SpacingField,
  ChoiceField,
  BackgroundImageField,
  BooleanField,
  GradientField,
  ColorField,
  NumberField
} from "@hubspot/cms-components/fields";

import backgroundImage from "../../../images/about-banner.png";

export const fields = (
<ModuleFields>
  <FieldGroup name="customCss" label="Custom Class | Id">
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
  <FieldGroup name="title_content" label="Content">
    <RichTextField name="title_content_text" label="Title" default="<h1>Latest Blog</h1> <p>this is Description For latest Paragraph</p>"/>
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

    <FieldGroup name="background" label="Background">
      <ChoiceField
        name="background_type"
        label="Background Type"
        required={false}
        locked={false}
        multiple={false}
        display="select"
        choices={[
          ["bg_image", "Background Image"],
          ["bg_color", "Background Gradient"],
        ]}
        default="bg_image"
      />
      <BackgroundImageField
        name="bg_image"
        label="Background image"
        required={false}
        default={{
          src: backgroundImage,
          background_position: "MIDDLE_CENTER",
          background_size: "COVER",
        }}
        visibility={{
          controlling_field_path: "style.background.background_type",
          operator: "EQUAL",
          controlling_value_regex: "bg_image",
        }}
      />
      

      <GradientField
        name="bg_gradient"
        label="Background gradient"
        helpText="Sets a gradient behind the content"
        required={false}
        default={{
          colors: [
            {
              color: {
                r: "255",
                g: "255",
                b: "255",
                a: 1,
              },
            },
            {
              color: {
                r: "255",
                g: "255",
                b: "255",
                a: 1,
              },
            },
          ],
          side_or_corner: {
            verticalSide: "BOTTOM",
            horizontalSide: null,
          },
        }}
        visibility={{
          controlling_field_path: "style.background.background_type",
          operator: "EQUAL",
          controlling_value_regex: "bg_color",
        }}
      />
    </FieldGroup>
  </FieldGroup>
</ModuleFields>
);