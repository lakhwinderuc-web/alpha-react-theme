import {
  ModuleFields,
  FieldGroup,
  RichTextField,
  RepeatedFieldGroup,
  TextField,
  BooleanField,
  ChoiceField,
  ColorField,
  ImageField,
  SpacingField,
  BackgroundImageField,
  NumberField,
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
    <FieldGroup name="headingGroup" label="Heading">
      <RichTextField
        name="heading"
        label="Heading"
        required={false}
        locked={false}
        default="<h1>About</h1> 
        <p>Finance Consulting is dedicated to helping individuals and businesses achieve their financial goals through expert consulting and comprehensive accounting services. Our team of seasoned professionals provides personalized solutions tailored to meet your unique needs, ensuring your financial success.</p>"
      />
    </FieldGroup>
    <FieldGroup name="counter" label="Counter">
      <RepeatedFieldGroup
        name="number_counter"
        label="Number Counter"
        occurrence={{
      min: 0,
      max: 500,
      default: 2,
    }}
        default={[
          {
    counter_number: "350",
    counter_sign: {
      show_hide_counter: true,
      sign_position_choice: "sign-text",
      add_sign: "+"
    },
    number_text: "<h4>Projects completed in last 5 years</h4>",
    number_color: { color: "#968465", opacity: 100 }
  },
             {
    counter_number: "350",
    counter_sign: {
      show_hide_counter: true,
      sign_position_choice: "sign-text",
      add_sign: "+"
    },
    number_text: "<h4>Projects completed in last 5 years</h4>",
    number_color: { color: "#968465", opacity: 100 }
  },
        ]}
      >
        <TextField name="counter_number" label="Number" default="350" />
        <FieldGroup name="counter_sign" label="Sign">
          <BooleanField
            name="show_hide_counter"
            label="Sign Show / Hide"
            display="toggle"
            default={true}
          />
          <ChoiceField
            name="sign_position_choice"
            label="Sign Position Choice"
            display="select"
            choices={[
              ["sign-text", "Sign / Text"],
              ["text-sign", "Text / Sign"],
            ]}
            default="sign-text"
          />
          <TextField
            name="add_sign"
            label="Add Sign"
            default="+"
            inlineHelpText="Add Sign Example + , $ , %"
            visibility={{
              controlling_field_path:
                "counter.number_counter.counter_sign.show_hide_counter",
              operator: "MATCHES_REGEX",
              controlling_value_regex: "true",
            }}
          />
        </FieldGroup>

          <RichTextField
            name="number_text"
            label="Number Text"
            default="<h4>Projects completed in last 5 years</h4>"
          />
          <ColorField
            name="number_color"
            label="Number Color"
            default={{
              color: "#968465",
              opacity: 100,
            }}
          />
      </RepeatedFieldGroup>
    </FieldGroup>

    <FieldGroup name="about_img" label="Image">
      <ImageField
        name="image_about"
        label="Image"
        resizable={true}
        responsive={true}
        showLoading={true}
        default={{
           size_type: "auto",
          src: "https://20979002.fs1.hubspotusercontent-na1.net/hubfs/20979002/picture%201.jpg",
          alt: "picture 1",
          loading: "lazy",
          width: 459,
          height: 567,
          max_width: 459,
          max_height: 567
        }
      }
      />
    </FieldGroup>


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

    </FieldGroup>
  </ModuleFields>
);
