import {
  ModuleFields,
  TextField,
  FieldGroup,
  RichTextField,
  RepeatedFieldGroup,
  ImageField,
  ChoiceField,
  IconField,
  LinkField,
  SpacingField,
  BackgroundImageField,
  BooleanField,
  GradientField,
  NumberField,
  ColorField,
  BorderField

} from "@hubspot/cms-components/fields";

import profileImage1 from "../../../../images/PF-01.webp";
import profileImage2 from "../../../../images/PF-02.webp";
import profileImage3 from "../../../../images/PF-03.webp";
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
    <FieldGroup name="add_heading" label="Add Heading">
      <RichTextField
        name="heading"
        label="Heading"
        default="<h3>Our Helping Hand</h3> <p>Our Helping Hand is a compassionate initiative dedicated to providing support, care, and assistance to those in need.</p>"
      />
    </FieldGroup>
    <FieldGroup name="team_cards" label="Team Cards">
      <RepeatedFieldGroup
        name="items"
        label="Items"
        occurrence={{ min: 2, max: 10, default: 2 }}
       default={[
  {
    profile_image: {
      src: profileImage1
    },
    profile_name: "<h4>Alex Johnson</h4><p>CEO & Designer</p>",
    description:
      "<p>Alex drives our creative vision, blending design and strategy to build brands that inspire growth.</p>",

    social_links: [
      {
        add_icon_choice: "hubspot_icon",
        icon_field: {
          name: "facebook-f",
          type: "SOLID"
        },
        link_field: {
          url: {
            type: "EXTERNAL",
            href: "https://facebook.com"
          },
          open_in_new_tab: true,
          no_follow: false
        }
      },
      {
        add_icon_choice: "svg_icon",
        svg_icon:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
        link_field: {
          url: {
            type: "EXTERNAL",
            href: "https://facebook.com"
          },
          open_in_new_tab: true
        }
      }
    ]
  },
  {
    profile_image:{
      src:profileImage2
    },
    profile_name:"<h3>Alex Johnson</h3> <p></p>",
    description:'CEO & Designer',

    social_links:[
      {
     add_icon_choice:'svg_icon',
     svg_icon:'<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><g id="Facebook F3_layer"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></g></svg>',
     link_field: {
          url: {
            type: "EXTERNAL",
            href: "https://facebook.com"
          },
          open_in_new_tab: true
        }  
    }
    ]
  }
]}
      >
        <ImageField
          name="profile_image"
          label="Profile Image"
          default={{
            src: profileImage1,
          }}
        />
        <RichTextField
          name="profile_name"
          label="Profile Name"
          default="<h4>Alex Johnson</h4> <p>CEO & Designer</p>"
        />
        <RichTextField
          name="description"
          label="Description"
          default="<p>Alex drives our creative vision, blending design and strategy to build brands that inspire growth.</p>"
        />
        <RepeatedFieldGroup
          name="social_links"
          label="Social Links"
          occurrence={{ min: 2, max: 10, default: 2 }}
        >
          <ChoiceField
            name="add_icon_choice"
            label="SVG Icon/Image Icon"
            choices={[
              ["hubspot_icon", "HubSpot Icon"],
              ["svg_icon", "SVG Icon"],
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
              controlling_field: "team_cards.items.social_links.add_icon_choice",
              operator: "EQUAL",
              controlling_value_regex: "hubspot_icon",
            }}
          />
          <TextField
            name="svg_icon"
            label="SVG Code"
            default='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><g id="Facebook F3_layer"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></g></svg>'
            visibility={{
              controlling_field: "team_cards.items.social_links.add_icon_choice",
              operator: "EQUAL",
              controlling_value_regex: "svg_icon",
            }}
          />
          <LinkField
            name="link_field"
            label="URL Link"
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
            }}
          />
        </RepeatedFieldGroup>
      </RepeatedFieldGroup>
    </FieldGroup>
<FieldGroup name="style" label=" Card Style Tab" tab="STYLE">
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
<FieldGroup name="card_style" label="Card Style">
          <FieldGroup name="cards_spacing" label="Cards Spacing">
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
<FieldGroup name="cards_per_row" label="Cards Per Row ">
<ChoiceField name="cards_per_row_ds" label="Card Per Row Desktop" choices={[
  ["one","One"],
  ["two","Two"],
  ["three","Three"],
  ["four","Four"]
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
]}
default="one"
/>

</FieldGroup>

<FieldGroup name="gap_between_cards" label="Gap Between Cards">
<NumberField name="gap" label="Gap" default={24}/>
</FieldGroup>

<FieldGroup name="card_background_color" label="Background Color">
<ColorField name="background_color" label="Color" default={{color:"#fffff", opacity:100}}/>
</FieldGroup>
<FieldGroup name="card_border_box_shadow" label="Card Border/Box Shadow">
<BorderField
      id="styles.border"
      name="border"
      label="border"
      required={false}
      locked={false}
      allowCustomBorderSides={false}
      default={{
        top: {
          width: { value: 1, units: "px" },
          opacity: 100,
          style: "solid",
          color: "#ffffff",
        },
        bottom: {
          width: { value: 1, units: "px" },
          opacity: 100,
          style: "solid",
          color: "#ffffff",
        },
        left: null,
        right: null,
      }}
    />
    <NumberField name="card_border_radius" label="Card Border Radius" default={8}/>
    <BooleanField name="box_shadow_show_hide" label="Box shadow Show/hide" display="toggle" default={true}/>
<FieldGroup name="box_shadow" label="Box Shadow">

<ChoiceField name="shadowType" label="Shadow Type (Inset/Outset) Type" choices={[
  ["outset" ,"Outset"],
["inset" , "Inset"]
]}
default="inset"
/>
  <NumberField name="horizontal_offset" label="Horizontal Offset (X Offset)" display="slider" min={0} max={40} default={0}/>
        <NumberField name="vertical_offset" label="Vertical Offset (Y Offset)" display="slider" min={0} max={40} default={2}/>
        <NumberField name="blur_radius" label="Blur Radius" display="slider" min={0} max={40} default={6}/>
        <NumberField name="spread_radius" label="Spread Radius" display="slider" min={0} max={40} default={0}/>
<ColorField name="shadow_color" label="Shadow Color" default={{
  color:"#000",
  opacity:20
}}/>
</FieldGroup>
</FieldGroup>
<FieldGroup name="card_image_style" label="Card Image Style">
<NumberField name="image_radius" label="Image Radius" default={100}/>
<ChoiceField name="object_position_choice" label="Object Position Choice" choices={[
  ["top","Top"],
  ["center","Center"]
]}
default="top"
/>
<ChoiceField name="object_fit_choice" label="Object Fit Choice" choices={[
  ["cover","Cover"],
  ["contain","Contain"]
]}
default="cover"
/>
<NumberField name="height/width" label="Height/Width" display="slider" min={0} max={350} default={220}/>
</FieldGroup>
<FieldGroup name="social_icon_style" label="Social Icon Style">
<ColorField name="social_icon_color" label="Social Icon Color" default={{color:"#FFFFFF"}}/>
<ColorField name="social_icon_hover_color" label="Social Icon Hover Color" default={{color:"#ff4800", opacity:100}}/>
<NumberField name="social_icon_size" label="Social Icon Size" default={22}/>
<ColorField name="social_icon_background_color" label="Social Icon Background Color" default={{color:"#FF5E14",opacity:100}}/>
<ColorField name="social_icon_hover_background_color" label="Social Icon Hover Background Color" default={{color:"#FF5E14" , opacity:40}}/>
<NumberField name="social_icon_background_size" label="Social Icon Background Size" default={40}/>
</FieldGroup>
<FieldGroup name="card_content_alignment" label="Card Content Alignment">
<ChoiceField name="alignment" label="Alignment" choices={[
  ["left","Left"],
  ["center","Center"]

]}/>
</FieldGroup>
</FieldGroup>
<FieldGroup name="container_style" label="Container Style">

</FieldGroup>
        </FieldGroup>

  </ModuleFields>
);
