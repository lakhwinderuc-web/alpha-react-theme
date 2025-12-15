import {
  FieldGroup,
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
  TextField,
  BooleanField,
  NumberField,
  SpacingField,
  ChoiceField,
  BackgroundImageField,
  ColorField,
  GradientField
} from "@hubspot/cms-components/fields";

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
    <FieldGroup name="backgroundImage" label="background Image">
      <ImageField
        name="bgImage"
        label="image"
        responsive={true}
        resizable={false}
        showLoading={false}
        default={{
          src: "https://4059529.fs1.hubspotusercontent-na1.net/hubfs/4059529/pexels-jane-doan-1024248-2.jpg",
          alt: "pexels-jane-doan-1024248-2",
          width: 1000,
          height: 676,
          max_width: 1000,
          max_height: 676,
          loading: "lazy",
          size_type: "auto",
        }}
      />
    </FieldGroup>
    <FieldGroup name="headingGroup" label="Heading / Content">
      <RichTextField
        name="topHeading"
        label="Heading"
        default='<h4 class="h2"><span style="color:#ffffff;">TESTIMONIAL</span></h4>'
      />
      <RepeatedFieldGroup
        name="testimonialField"
        label="Testimonial"
        occurrence={{ min: 1, default: 3 }}
        default={[
      {
        testimonialText:
          '<p><span style="color:#ffffff;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nunc, dictum eu pharetra et, consequat ut odio.</span></p>',
        authorName:
          '<p><span style="color:#ffffff;">__Lorem ipsum dolor</span> / <span style="color:#ffffff;">Lorem ipsum dolor sit</span></p>',
      },
      {
        testimonialText:
          '<p><span style="color:#ffffff;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nunc, dictum eu pharetra et, consequat ut odio.</span></p>',
        authorName:
          '<p><span style="color:#ffffff;">__Lorem ipsum dolor</span> / <span style="color:#ffffff;">Lorem ipsum dolor sit</span></p>',
      },
      {
        testimonialText:
          '<p><span style="color:#ffffff;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nunc, dictum eu pharetra et, consequat ut odio.</span></p>',
        authorName:
          '<p><span style="color:#ffffff;">__Lorem ipsum dolor</span> / <span style="color:#ffffff;">Lorem ipsum dolor sit</span></p>',
      },
      {
        testimonialText:
          '<p><span style="color:#ffffff;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nunc, dictum eu pharetra et, consequat ut odio.</span></p>',
        authorName:
          '<p><span style="color:#ffffff;">__Lorem ipsum dolor</span> / <span style="color:#ffffff;">Lorem ipsum dolor sit</span></p>',
      },
    ]}
      >
        <RichTextField name="testimonialText" label="Add Testimonial" />
        <RichTextField  name="authorName" label="Author Name"/>
      </RepeatedFieldGroup>
    </FieldGroup>

    <FieldGroup name="style" label="Style Tab" tab="STYLE">

     <FieldGroup name="sliderSettings" label="Slider Settings">
            <BooleanField
              name="sliderEnable"
              label="Enable/ Disable"
              required={false}
              locked={false}
              display="toggle"
              inlineHelpText="Slider Enable when toggled on"
              default={true}
            />
            <BooleanField
              name="autoPlay"
              label="Autoplay"
              default={true}
              display="toggle"
              visibility={{
                controlling_field_path: "style.sliderSettings.sliderEnable",
                operator: "EQUAL",
                controlling_value_regex: "true",
              }}
            />
              <NumberField
              name="autoPlaySpeed"
              label="Autoplay Speed"
              required={false}
              default={700}
              min={100}
              max={10000}
              visibility={{
                controlling_field_path: "style.sliderSettings.autoPlay",
                operator: "EQUAL",
                controlling_value_regex: "true",
              }}
            />
            <NumberField
              name="slidesToShow"
              label="Slides To Show"
              required={false}
              default={1}
              min={1}
              visibility={{
                controlling_field_path: "style.sliderSettings.sliderEnable",
                operator: "EQUAL",
                controlling_value_regex: "true",
              }}
            />
            <NumberField
              name="slidesToScroll"
              label="Slides To Scroll"
              required={false}
              default={1}
              min={1}
              visibility={{
                controlling_field_path: "style.sliderSettings.sliderEnable",
                operator: "EQUAL",
                controlling_value_regex: "true",
              }}
            />
          
            <BooleanField
              name="sliderDots"
              label="Enable/Disable Dots"
              default={true}
              visibility={{
                controlling_field_path: "style.sliderSettings.sliderEnable",
                operator: "EQUAL",
                controlling_value_regex: "true",
              }}
            />
             <BooleanField
              name="sliderArrows"
              label="Enable/Disable Arrows"
              default={true}
              visibility={{
                controlling_field_path: "style.sliderSettings.sliderEnable",
                operator: "EQUAL",
                controlling_value_regex: "true",
              }}
            />
          </FieldGroup>
          

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
    left: { value: 0, units: "px" },
    right: { value: 0, units: "px" },
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
    left: { value: 0, units: "px" },
    right: { value: 0, units: "px" },
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
    left: { value: 0, units: "px" },
    right: { value: 0, units: "px" },
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
        src: "",
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
