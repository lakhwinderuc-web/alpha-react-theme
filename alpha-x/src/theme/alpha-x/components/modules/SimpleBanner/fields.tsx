import {
  ChoiceField,
  FieldGroup,
  ModuleFields,
  RichTextField,
  TextField,
  SpacingField,
  GradientField,
  BackgroundImageField,
  BooleanField,
  LinkField,
} from "@hubspot/cms-components/fields";

import mainBanner from "../../../images/main_banner.webp";

export const fields = (
  <ModuleFields>
    <FieldGroup name="customCss" label="Custom Id/Class">
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
        default="<h1>Welcome to Finance Consulting</h1> <p>Your trusted partner in achieving financial success with expert consulting and comprehensive accounting services tailored to your needs.</p>"
      />
    </FieldGroup>

    <FieldGroup name="buttonGroup" label="Button">
      <ChoiceField
        name="buttonChoice"
        label="Button Choice"
        required={false}
        locked={false}
        display="select"
        choices={[
          ["primary", "Primary"],
          ["secondary", "Secondary"],
          ["accent", "Accent"],
          ["tertiary", "Tertiary"],
        ]}
      />

      <BooleanField
        name="buttonEnable"
        label="Button Enable"
        default={true}
        display="toggle"
      />
      <TextField
        name="buttonText"
        label="Button Text"
        required={false}
        locked={false}
        default="Click Here"
        visibility={{
          controlling_field_path: "buttonGroup.buttonEnable",
          operator: "MATCHES_REGEX",
          controlling_value_regex: "true",
        }}
      />
      <LinkField
        name="link_field"
        label="Button Link"
        supportedTypes={[
          "EXTERNAL",
          "CONTENT",
          "FILE",
          "EMAIL_ADDRESS",
          "BLOG",
          "CALL_TO_ACTION",
          "PHONE_NUMBER",
          "WHATSAPP_NUMBER",
          "PAYMENT",
        ]}
        showAdvancedRelOptions={true}
        default={{
          url: {
            content_id: null,
            type: "EXTERNAL",
            href: "https://accounts.google.com/",
          },
          open_in_new_tab: false,
          no_follow: false,
        }}
      />
    </FieldGroup>

    {/* Styling */}

    <FieldGroup name="style" label="Style" tab="STYLE">
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
        <FieldGroup name="tablet" label="Tablet">
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
        <FieldGroup name="mobile" label="Mobile">
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
            ["image", "Image"],
            ["color", "Color"],
          ]}
          default="image"
        />

        <GradientField
          name="gradient_field"
          label="Gradient"
            default={{
        colors: [
          {
            color: {
              r: 0,
              g: 0,
              b: 0,
              a: 1,
            },
          },
          {
            color: {
              r: 255,
              g: 255,
              b: 255,
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
            controlling_field_path: "style.background_field.background_type",
            operator: "EQUAL",
            controlling_value_regex: "color",
          }}
        />
        <BackgroundImageField
          name="background_image"
          label="Background Image"
          default={{
            src: mainBanner,
          }}
          visibility={{
            controlling_field_path: "style.background_field.background_type",
            operator: "EQUAL",
            controlling_value_regex: "image",
          }}
        />
      </FieldGroup>

      {/* {button-Style} */}
    </FieldGroup>
  </ModuleFields>
);
