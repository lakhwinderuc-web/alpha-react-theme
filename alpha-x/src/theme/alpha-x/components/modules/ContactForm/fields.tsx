import {
  ModuleFields,
  TextField,
  FieldGroup,
  ChoiceField,
  ImageField,
  FormField,
  RichTextField,
  RepeatedFieldGroup,
  IconField,
  LinkField,
  SpacingField,
  BackgroundImageField,
  BooleanField,
  GradientField,
  ColorField

} from "@hubspot/cms-components/fields";

import contactImage from "../../../images/contact-img.webp";
import iconImage from '../../../images/financial-advisor.png';
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
    <FieldGroup name="image_form_group" label="Image Form Group">
      <ChoiceField
        name="image_form_choice"
        label="Image/Form Choice"
        choices={[
          ["image", "Image"],
          ["form", "Form"],
        ]}
        default="image"
      />
      <ImageField
        name="image"
        label="Image"
        default={{
          src: contactImage,
          height: 417,
          width: 517,
          loading: "lazy",
        }}
        visibility={{
          controlling_field_path: "image_form_group.image_form_choice",
          operator: "EQUAL",
          controlling_value_regex: "image",
        }}
      />

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
        visibility={{
          controlling_field_path: "image_form_group.image_form_choice",
          operator: "EQUAL",
          controlling_value_regex: "form",
        }}
      />
    </FieldGroup>
    <FieldGroup name="add_heading" label="Add Heading">
      <RichTextField
        name="heading"
        label="Heading"
        default="<h2>Get in Touch with Us</h2> <p>Have questions or need help with our services? We’re here to help. Whether you’re looking for more information, need support, or want to discuss your project, our team is just a message away. Fill out the form and we’ll get back to you as soon as possible.</p>"
      />
    </FieldGroup>
    <FieldGroup name="contact_info" label="Contact Info">
      <RepeatedFieldGroup
        name="items"
        label="Items"
        occurrence={{ min: 1, default: 3, max: 20 }}
        default={[
      {
        icon_choice: "hubspot_icon",
        icon_field: {
          name: "phone",
          unicode: "f095",
          type: "SOLID",
        },
        heading: "<p><b>Phone Number</b><br>+91-1236789445</p>",
        link_field: {
          url: { type: "EXTERNAL", href: "tel:+911236789445" }
        }
      },
      {
        icon_choice: "hubspot_icon",
        icon_field: {
          name: "envelope",
          unicode: "f0e0",
          type: "SOLID",
        },
        heading: "<p><b>Email Us</b><br>hello@example.com</p>",
        link_field: {
          url: { type: "EXTERNAL", href: "mailto:hello@example.com" }
        }
      }
    ]}
      >
        <ChoiceField
          name="icon_choice"
          label="Icon Choice"
          choices={[
            ["hubspot_icon", "HubSpot Icon"],
            ["image", "Image"],
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
            controlling_field: "contact_info.items.icon_choice",
            operator: "EQUAL",
            controlling_value_regex: "hubspot_icon",
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
            controlling_field: "contact_info.items.icon_choice",
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
        <RichTextField name="heading" label="Heading" default="<p><b>Phone Number</b>
+91-1236789445</p>"/>
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
            ["bg_color", "Background Gradient"],
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
        <FieldGroup name="flex_direction_enable" label="Flex Direction Row Enable">
          <BooleanField name="direaction_enable" label="Enable" display="toggle" default={true}/>
        </FieldGroup>
<FieldGroup name="icon_style" label="Icon Style">
  <ColorField name="icon_color" label="Icon Color" default={{color:"#ff4800", opacity:100}}/>
  <ColorField name="background_color" label="Background Color" default={{color:"#ff4800" , opacity:15}}/>
</FieldGroup>
<FieldGroup name="icon_hover" label="Hover">
<ColorField name="icon_color" label="Icon Color" default={{color:"#fff", opacity:100}}/>
  <ColorField name="background_color" label="Background Color" default={{color:"#ff4800" , opacity:100}}/>
</FieldGroup>
        </FieldGroup>
  </ModuleFields>
);
