import {
  ModuleFields,
  TextField,
  FieldGroup,
  RichTextField,
  RepeatedFieldGroup,
  LinkField,
  ChoiceField,
  IconField,
  ImageField,
  SpacingField,
  BackgroundImageField,
GradientField,
NumberField,
ColorField,
BooleanField
} from "@hubspot/cms-components/fields";
import iconImage from '../../../images/financial-advisor.png';
import backgroundImage from "../../../images/about-banner.png";


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
    <FieldGroup name="add_section_heading" label="Add Section Heading">
      <RichTextField
        name="heading"
        label="Heading"
        default="<h5>Contact</h5>"
      />
    </FieldGroup>
    <FieldGroup name="repeater_items" label="Repeater Items">
      <RepeatedFieldGroup
        name="add_items"
        label="Add Items"
        occurrence={{ min: 0, max: 3, default: 3 }}
        default={[
    {
      add_link: {
        url: {
          type: "EXTERNAL",
          href: "https://www.facebook.com/",
        },
        open_in_new_tab: true,
        no_follow: false,
      },
      add_icon_choice: "hubspot_icon",
      icon_field: {
        name: "facebook",
        type: "SOLID",
      },
      add_content: "facebook@example.com",
    },
    {
      add_link: {
        url: {
          type: "EXTERNAL",
          href: "https://www.instagram.com/",
        },
        open_in_new_tab: true,
        no_follow: false,
      },
      add_icon_choice: "hubspot_icon",
      icon_field: {
        name: "instagram",
        type: "SOLID",
      },
      add_content: "instagram@example.com",
    },
    {
      add_link: {
        url: {
          type: "EXTERNAL",
          href: "https://www.linkedin.com/",
        },
        open_in_new_tab: true,
        no_follow: false,
      },
      add_icon_choice: "hubspot_icon",
      icon_field: {
        name: "linkedin",
        type: "SOLID",
      },
      add_content: "linkedin@example.com",
    }
  ]}
      >
        <LinkField name="add_link" label="Add Link" 
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
            href: "https://www.facebook.com/",
          },
          open_in_new_tab: true,
          no_follow: false,
        }}/>
        <ChoiceField name="add_icon_choice" label="SVG Icon/Image Icon" choices={[
           ["hubspot_icon", "HubSpot Icon"],
            ["image", "Image"],
            ["svg_icon","SVG Icon"]
        ]}
         default="hubspot_icon"
        />
     <IconField
          name="icon_field"
          label="Icon"
          required={false}
          locked={false}
          iconSet="fontawesome-6.4.2"
          visibility={{
            controlling_field: "repeater_items.add_items.add_icon_choice",
            operator: "EQUAL",
            controlling_value_regex: "hubspot_icon",
          }}
        />

        <ImageField
          name="image_field"
          label="Image"
          visibility={{
            controlling_field: "repeater_items.add_items.add_icon_choice",
            operator: "EQUAL",
            controlling_value_regex: "image",
          }}
          default={{
            src: iconImage,
            alt: "image",
            loading: "lazy",
            width: 50,
            height: 45,
          }}
        />
         <TextField
                      name="svg_icon"
                      label="SVG Code"
                      default='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" aria-hidden="true"><g id="Alternate First Order1_layer"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 488.21C115.34 496.21 7.79 388.66 7.79 256S115.34 15.79 248 15.79 488.21 123.34 488.21 256 380.66 496.21 248 496.21zm0-459.92C126.66 36.29 28.29 134.66 28.29 256S126.66 475.71 248 475.71 467.71 377.34 467.71 256 369.34 36.29 248 36.29zm0 431.22c-116.81 0-211.51-94.69-211.51-211.51S131.19 44.49 248 44.49 459.51 139.19 459.51 256 364.81 467.51 248 467.51zm186.23-162.98a191.613 191.613 0 0 1-20.13 48.69l-74.13-35.88 61.48 54.82a193.515 193.515 0 0 1-37.2 37.29l-54.8-61.57 35.88 74.27a190.944 190.944 0 0 1-48.63 20.23l-27.29-78.47 4.79 82.93c-8.61 1.18-17.4 1.8-26.33 1.8s-17.72-.62-26.33-1.8l4.76-82.46-27.15 78.03a191.365 191.365 0 0 1-48.65-20.2l35.93-74.34-54.87 61.64a193.85 193.85 0 0 1-37.22-37.28l61.59-54.9-74.26 35.93a191.638 191.638 0 0 1-20.14-48.69l77.84-27.11-82.23 4.76c-1.16-8.57-1.78-17.32-1.78-26.21 0-9 .63-17.84 1.82-26.51l82.38 4.77-77.94-27.16a191.726 191.726 0 0 1 20.23-48.67l74.22 35.92-61.52-54.86a193.85 193.85 0 0 1 37.28-37.22l54.76 61.53-35.83-74.17a191.49 191.49 0 0 1 48.65-20.13l26.87 77.25-4.71-81.61c8.61-1.18 17.39-1.8 26.32-1.8s17.71.62 26.32 1.8l-4.74 82.16 27.05-77.76c17.27 4.5 33.6 11.35 48.63 20.17l-35.82 74.12 54.72-61.47a193.13 193.13 0 0 1 37.24 37.23l-61.45 54.77 74.12-35.86a191.515 191.515 0 0 1 20.2 48.65l-77.81 27.1 82.24-4.75c1.19 8.66 1.82 17.5 1.82 26.49 0 8.88-.61 17.63-1.78 26.19l-82.12-4.75 77.72 27.09z"></path></g></svg>'
                      visibility={{
                        controlling_field:
                          "repeater_items.add_items.add_icon_choice",
                        operator: "EQUAL",
                        controlling_value_regex: "svg_icon",
                      }}
                    />
                    <TextField name="add_content" label="Add Content" default="someone@example.com"/>
      </RepeatedFieldGroup>
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
        <FieldGroup name="icon_text_grid_alignment" label="Icon Text Grid Alignment Option">
<ChoiceField name="align_items" label="Align Items" choices={[
  ["center","Center"],
  ["start","Start"],
  ["end","End"]
]}
default="center"
/>
        </FieldGroup>
        <FieldGroup name="icon_text_grid_per_row" label="Icon Text Grid Per Row">
<ChoiceField name="cards_per_row_ds" label="Card Per Row Desktop" choices={[
  ["one","One"],
  ["two","Two"],
  ["three","Three"]
]}
default="one"
/>
<ChoiceField name="cards_per_row_ts" label="Card Per Row Tablet" choices={[
  ["one","One"],
  ["two","Two"],
  ["three","Three"]
]}
default="one"
/>

<ChoiceField name="cards_per_row_ms" label="Card Per Row Mobile" choices={[
  ["one","One"],
  ["two","Two"],
  ["three","Three"]
]}
default="one"
/>

        </FieldGroup>
        <FieldGroup name="gap_between_icon_text_grid" label="Gap Between Icon Text Grid">
<NumberField name="gap_between_cards_desktop" label="Gap Between Cards Desktop" default={16}/>
<NumberField name="gap_between_cards_tablet" label="Gap Between Cards Tablet" default={16}/>
<NumberField name="gap_between_cards_mobile" label="Gap Between Cards Mobile" default={16}/>
        </FieldGroup>

        <FieldGroup name="icon_style" label="Icon Style">
<NumberField name="icon_background_size" label="Icon Background Size" default={35}/>
<ColorField name="background_color" label="Background Color" default={{color:"#425b76", opacity:0}}/>
<NumberField name="icon_size" label="Icon Size" default={22}/>
<ColorField name="icon_svg_color" label="Icon Svg Color" default={{color:"#ff4800"}}/>
       <BooleanField name="icon_text_flex_direction_column" label="Icon text flex Direction" display="toggle" default={false}/>
        </FieldGroup>
        </FieldGroup>

  </ModuleFields>
);
