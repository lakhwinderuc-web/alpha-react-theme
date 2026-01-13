import {
  ModuleFields,
  TextField,
  FieldGroup,
  RichTextField,
  BooleanField,
  FormField,
  SpacingField,
  ChoiceField,
  BackgroundImageField,
  ColorField,
  NumberField,
  GradientField,
  BorderField,
} from "@hubspot/cms-components/fields";

import backgroundImage from "../../../images/hero-banner-background.png";

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
    
    <FieldGroup name="title_content" label="Tittle / Content">
      <RichTextField
        name="add_content"
        label="Heading"
        default="<h3>Subscribe Newsletter & get latest update</h3>"
      />
    </FieldGroup>
    <BooleanField
      name="subscribe_form_enable"
      label="Subscribe Form Show/Hide"
      default={true}
    />
    <FieldGroup name="subscribe_form" label="Subscribe Form">
      <FormField
        id="0123456789"
        name="form"
        label="Form"
        required={false}
        locked={false}
        disableInlineFormEditing={true}
        supportAllWebinarTypes={true}
        embedVersions={["v2", "v4"]}
        default={{
          response_type: "inline",
          message: "Thanks for submitting the form.",
        }}
      />
      <RichTextField name="bottom_text" label="Bottom Text" />
    </FieldGroup>

    {/* style */}
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
            ["bg_color", "Background Color"],
          ]}
          default="bg_color"
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

        <FieldGroup
          name="bg_overlay"
          label="Overlay Color"
          visibility={{
            controlling_field_path: "style.background.background_type",
            operator: "EQUAL",
            controlling_value_regex: "bg_image",
          }}
        >
          <ColorField
            name="overlay_color"
            label="Overlay color"
            required={false}
            locked={false}
            default={{
              color: "#121212",
            }}
          />
          <NumberField
            name="opacity"
            label="Background Opacity (%)"
            required={false}
            locked={false}
            display="slider"
            min={0}
            max={100}
            step={1}
            suffix=""
            default={30}
            placeholder="50"
          />
        </FieldGroup>

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
      <FieldGroup name="form_style" label="Form Style">
        <ChoiceField
          name="theme_custom_style_choice"
          label="Theme / Custom Style Choice"
          choices={[
            ["theme", "Theme"],
            ["custom", "Custom"],
          ]}
          default="custom"
          display="radio"
        />
        {/* theme choice start */}

        {/* theme choice end */}

        {/* custom  choice starts */}
        <FieldGroup
          name="input_field_style"
          label="Input Field Style"
          visibility={{
            controlling_field_path:
              "style.form_style.theme_custom_style_choice",
            operator: "EQUAL",
            controlling_value_regex: "custom",
          }}
        >
          <NumberField
            name="form_border_radius"
            label="Border Radius Input/Button"
            display="slider"
            min={0}
            max={100}
            default={100}
          />
          <BorderField
            name="input_border_style"
            label="Input Border Style"
            default={{
              top: {
                width: { value: 1, units: "px" },
                style: "solid",
                color: "#333333",
                opacity: 100,
              },
              right: {
                width: { value: 1, units: "px" },
                style: "solid",
                color: "#333333",
                opacity: 100,
              },
              bottom: {
                width: { value: 1, units: "px" },
                style: "solid",
                color: "#333333",
                opacity: 100,
              },
              left: {
                width: { value: 1, units: "px" },
                style: "solid",
                color: "#333333",
                opacity: 100,
              },
            }}
          />
        </FieldGroup>

        <FieldGroup
          name="button_style"
          label="Button Style"
          visibility={{
            controlling_field_path:
              "style.form_style.theme_custom_style_choice",
            operator: "EQUAL",
            controlling_value_regex: "custom",
          }}
        >
          <ColorField
            name="button_text_color"
            label="Button Text Color"
            default={{ color: "#ffffff" }}
          />
          <BorderField name="button_border" label="Button Border" />
          <ColorField
            name="button_background_color"
            label="Button Background Color"
            default={{
              color: "#ff4800",
              opacity: 100,
            }}
          />
          <FieldGroup
            name="button_hover_style"
            label="Button Hover Style"
            visibility={{
              controlling_field_path:
                "style.form_style.theme_custom_style_choice",
              operator: "EQUAL",
              controlling_value_regex: "custom",
            }}
          >
            <ColorField
              name="button_text_color"
              label="Button Text Color"
              default={{
                 color: "#ffffff"
                 }}
            />
            <BorderField name="button_border" label="Button Border" />
            <ColorField
              name="button_background_color"
              label="Button Background Color"
              default={{
                color: "#e24000",
                opacity: 100,
              }}
            />
            <BooleanField
              name="submit_button_absolute_enable"
              label="Submit Button Absolute Show | Hide"
              display="toggle"
              default={true}
            />
          </FieldGroup>
  </FieldGroup>
          <FieldGroup name="form_max_width" label="Form Max Width">
            <NumberField
              name="max_width"
              label="Max-Width"
              display="slider"
              min={0}
              max={1920}
              default={600}
            />
          </FieldGroup>
          <FieldGroup
            name="submitted_message_style"
            label="Submitted Message Style"
            visibility={{
              controlling_field_path:
                "style.form_style.theme_custom_style_choice",
              operator: "EQUAL",
              controlling_value_regex: "custom",
            }}
          >
            <ColorField
              name="background_color"
              label="Background Color"
              default={{
                color: "#ffffff",
                opacity: 0,
              }}
            />
          </FieldGroup>
      
        {/* custom  choice ends */}
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
