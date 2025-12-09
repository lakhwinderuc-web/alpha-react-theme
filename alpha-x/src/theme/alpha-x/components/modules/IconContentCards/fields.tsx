import { 
ModuleFields,
RepeatedFieldGroup, 
FieldGroup, 
TextAlignmentField,
ColorField,
BooleanField,
ImageField, 
RichTextField,
SpacingField,
ChoiceField,
NumberField,
GradientField,
BackgroundImageField, 
IconField
} from '@hubspot/cms-components/fields';

import backgroundImage from '../../../images/about-banner.png';
import iconImage from '../../../images/financial-advisor.png';
export const fields = (
<ModuleFields>
  {/* Tab Content */}
 
    <FieldGroup  name="main_heading" label="Main Heading" >
 <RichTextField
        name="heading"
        label="heading"
        default='<h2>Our Services</h2>'
      />
</FieldGroup>

  <FieldGroup name="cards_repeat" label="Card Repeat">
  <RepeatedFieldGroup
    name="items"
    label="Items"
    occurrence={{
      min: 0,
      max: 500,
      default: 3,
    }}
   default={[
  {
    image_field: {
      src: iconImage,
      alt: "Card Image 1",
      loading: "lazy",
      width: 50,
      height: 45,
    },
    heading_description: `
      <h2>Service One</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `,
  },
  {
    image_field: {
      src: iconImage,
      alt: "Card Image 2",
      loading: "lazy",
      width: 50,
      height: 45,
    },
    heading_description: `
      <h2>Service Two</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `,
  },
  {
    image_field: {
      src: iconImage,
      alt: "Card Image 3",
      loading: "lazy",
      width: 50,
      height: 45,
    },
    heading_description: `
      <h2>Service Three</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `,
  },
]}

  >
     <ImageField
    name="image_field"
    label="Image"
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
      default="<h1>Lorem ipsum dolor</h1><p>Lorem ipsum dolor sit amet...</p>"
    />

  </RepeatedFieldGroup>
</FieldGroup>

  

{/* end tab content */}

{/* style */}
<FieldGroup name='style' label='Style Tab' tab='STYLE'>


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
  }
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
  }
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
  }
}}
/>

</FieldGroup>
    {/* end Mobile */}

</FieldGroup>
{/* end */}


<FieldGroup name='background' label='Background'>
   <ChoiceField
      name="background_type"
      label="Background Type"
      required={false}
      locked={false}
      multiple={false}
      display="select"
      choices={[
        ["bg_image", "Background Image"],
        ["bg_color", "Background Color"]
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
        background_size: "COVER"
      }}
      visibility={{
            controlling_field_path: 'style.background.background_type',
            operator: 'EQUAL',
            controlling_value_regex: 'bg_image',
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

      <FieldGroup name='bg_overlay' label='Overlay Color'
     visibility={{
            controlling_field_path: 'style.background.overlay',
            operator: 'EQUAL',
            controlling_value_regex: 'true',
          }} >
  <ColorField
      name="overlay_color"
      label="Overlay color"
      required={false}
      locked={false}
      default={{
        color: "#000000",
        opacity: 100
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
          r: 255,
          g: 255,
          b: 255,
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
    controlling_field_path: "style.background.background_type",
    operator: "EQUAL",
    controlling_value_regex: "bg_color",
  }}
/>

</FieldGroup>

<FieldGroup name='cards_style' label='Cards Style'>
 <TextAlignmentField
      name="content_align"
      label="Content Alignment"
      required={false}
      default={{
        text_align: "CENTER",
      }}
    />

</FieldGroup>
</FieldGroup>

</ModuleFields>
);
