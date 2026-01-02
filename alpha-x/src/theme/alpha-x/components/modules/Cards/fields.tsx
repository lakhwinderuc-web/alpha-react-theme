import {
  ModuleFields,
  TextField,
  FieldGroup,
  RichTextField,
  RepeatedFieldGroup,
  ChoiceField,
  IconField,
  ImageField,
  SpacingField,
  BackgroundImageField,
  BooleanField,
  ColorField,
  NumberField,
  GradientField,
} from "@hubspot/cms-components/fields";
import iconImage from "../../../images/financial-advisor.png";
import backgroundImage from "../../../images/about-banner.png";

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

    <FieldGroup name="add_content" label="Add Content">
      <RichTextField
        name="heading_description"
        label="Heading/Description"
        default="<h1>What we offer</h1> 
        <p>We have combined the online learning and in-person instruction to create a richer IELTS training experience</p>"
      />
    </FieldGroup>
    <FieldGroup name="add_card" label="Add Card">
      <RepeatedFieldGroup
        name="card_repeater"
        label="Card Repeater"
        occurrence={{
          min: 0,
          max: 20,
          default: 3,
        }}
        default={[
          {
            icon_image_hubspot_icon: "hubspot",
            icon_field: {
              name: "accessible-icon",
              unicode: "f368",
              type: "REGULAR",
            },
            image_field: {
              src: iconImage,
              alt: "Card Image 1",
              loading: "lazy",
              width: 50,
              height: 45,
            },
            heading_description: `
         <h1>Convenient</h1><p>Candidates can start their preparation at the comfort of their home, and continue studying outside center’s office hours wherever they are</p>
        `,
          },
          {
            icon_image_hubspot_icon: "image",
            icon_field: {
              name: "accessible-icon",
              unicode: "f368",
              type: "REGULAR",
            },
            image_field: {
              src: iconImage,
              alt: "Card Image 2",
              loading: "lazy",
              width: 50,
              height: 45,
            },

            heading_description: `
          <h1>Convenient</h1><p>Candidates can start their preparation at the comfort of their home, and continue studying outside center’s office hours wherever they are</p>
        `,
          },
          {
            icon_image_hubspot_icon: "image",
            icon_field: {
              name: "accessible-icon",
              unicode: "f368",
              type: "REGULAR",
            },
            image_field: {
              src: iconImage,
              alt: "Card Image 3",
              loading: "lazy",
              width: 50,
              height: 45,
            },

            heading_description: `
   <h1>Convenient</h1>
   <p>Candidates can start their preparation at the comfort of their home, and continue studying outside center’s office hours wherever they are</p>
        `,
          },
        ]}
      >
        <ChoiceField
          name="icon_image_hubspot_icon"
          label="Icon Image/Hubspot Icon Choice"
          required={false}
          locked={false}
          multiple={false}
          display="select"
          choices={[
            ["hubspot", "Hubspot Icon"],
            ["image", "Icon Image"],
          ]}
          default="image"
        />
        <IconField
          name="icon_field"
          label="Icon"
          required={false}
          locked={false}
          iconSet="fontawesome-6.4.2"
          visibility={{
            controlling_field: "add_card.card_repeater.icon_image_hubspot_icon",
            operator: "EQUAL",
            controlling_value_regex: "hubspot",
          }}
          default={{
            name: "accessible-icon",
            unicode: "f368",
            type: "REGULAR",
          }}
        />
        <ImageField
          name="image_field"
          label="Image"
          visibility={{
            controlling_field: "add_card.card_repeater.icon_image_hubspot_icon",
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
        <RichTextField
          name="heading_description"
          label="Heading Description"
          default="<h1>Convenient</h1><p>Candidates can start their preparation at the comfort of their home, and continue studying outside center’s office hours wherever they are</p>"
        />
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
        <BooleanField
          name="overlay"
          label="Overlay Enable"
          required={false}
          locked={false}
          display="checkbox"
          inlineHelpText="Shows Overlay when toggled on"
          helpText=""
          default={false}
        />

        <FieldGroup
          name="bg_overlay"
          label="Overlay Color"
          visibility={{
            controlling_field_path: "style.background.overlay",
            operator: "EQUAL",
            controlling_value_regex: "true",
          }}
        >
          <ColorField
            name="overlay_color"
            label="Overlay color"
            required={false}
            locked={false}
            default={{
              color: "#000000",
              opacity: 100,
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
            suffix="%"
            default={50}
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
      <FieldGroup name="card_style" label="Card Style">
        <FieldGroup name="cards_per_row" label="Cards Per Row">
          <NumberField
            name="cards_per_row_desktop"
            label=" Cards Per Row Desktop"
            display="text"
            default={3}
          />
        </FieldGroup>
        <FieldGroup name="cards_inner_spacing" label="Cards Inner Spacing">
          <FieldGroup name="desktop_spacing" label="Desktop Spacing">
            <SpacingField
              name="desktop"
              label="Desktop"
              required={false}
              default={{
                padding: {
                  top: { value: 10, units: "px" },
                  bottom: { value: 10, units: "px" },
                  left: { value: 10, units: "px" },
                  right: { value: 10, units: "px" },
                },
              }}
            />
          </FieldGroup>
          <FieldGroup name="tablet_spacing" label="Tablet Spacing">
            <SpacingField
              name="tablet"
              label="Tablet"
              required={false}
              default={{
                padding: {
                  top: { value: 10, units: "px" },
                  bottom: { value: 10, units: "px" },
                  left: { value: 10, units: "px" },
                  right: { value: 10, units: "px" },
                },
              }}
            />
          </FieldGroup>
          <FieldGroup name="mobile_spacing" label="Mobile Spacing">
            <SpacingField
              name="mobile"
              label="Mobile"
              required={false}
              default={{
                padding: {
                  top: { value: 10, units: "px" },
                  bottom: { value: 10, units: "px" },
                  left: { value: 10, units: "px" },
                  right: { value: 10, units: "px" },
                },
              }}
            />
          </FieldGroup>
        </FieldGroup>
      </FieldGroup>
      <FieldGroup
        name="card_color_styling"
        label="Card Color/Dimension Styling"
      >
        <ColorField
          name="card_background_color"
          label="Card Background Color"
          default={{ color: "#ffff", opacity: 100 }}
        />
        <ColorField
          name="icon_background_color"
          label="Icon Background Color"
          default={{ color: "#544fff", opacity: 100 }}
        />
        <ColorField
          name="icon_color"
          label="Icon Color"
          default={{ color: "#0000", opacity: 100 }}
        />
        <NumberField
          name="card_background_size_desktop"
          label="Card Background Size"
          default={80}
        />
        <NumberField name="icon_size" label="Icon Size" default={40} />
      </FieldGroup>
      <FieldGroup name="flex_justify_style" label="Flex Justify Style">
        <ChoiceField
          name="flex_justify_content_choice"
          label="Flex Justify Content Choice"
          choices={[
            ["center", "Center"],
            ["flex-start", "Flex Start"],
            ["flex-end", "Flex End"],
          ]}
          default="center"
        />
      </FieldGroup>
      <FieldGroup name="card_hover_style" label="Card Hover Style">
        <BooleanField
          name="card_hover_style_show_hide"
          label="Card Hover Style Show/Hide"
          display="toggle"
          default={true}
        />
        <ColorField name="shadow_color" label="Shadow Color" 
        default={{color:"#544fff",
    opacity: 20,}}
        visibility={{
           controlling_field_path: "style.card_hover_style.card_hover_style_show_hide",
            operator: "EQUAL",
            controlling_value_regex: "true",
        }}/>
      </FieldGroup>
      <FieldGroup name="card_border_radius" label="Card Border Radius">
        <NumberField name="border_radius" label="Border Radius" default={10} />
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
