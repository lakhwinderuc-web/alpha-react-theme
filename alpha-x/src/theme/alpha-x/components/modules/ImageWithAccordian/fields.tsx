import {
  FieldGroup,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
  TextField,
  ChoiceField,
  LinkField,
  BooleanField,
  ImageField,
  EmbedField,
  VideoField,
  BackgroundImageField,
  SpacingField,
  ColorField,
  NumberField,
  GradientField,

} from "@hubspot/cms-components/fields";

export const fields = (
  <ModuleFields>
    <FieldGroup name="customCss" label="Custom Class|Id">
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
    <FieldGroup name="heading_group" label="Heading / Content">
      <RichTextField
        name="heading_title"
        label="Heading Title"
        default="<h2>OUR MODEL</h2>"
      />
      <RichTextField
        name="heading_content"
        label="Heading / Content"
        default="<p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span></p>"
      />
    </FieldGroup>
    // Accordian/tabs
    <FieldGroup name="accordionGroup" label="Accordion">
      <RepeatedFieldGroup
        name="accordion"
        label="Accordion"
        occurrence={{ min: 1, default: 3 }}
        default={[
          {
            questionGroup: {
              question: "<h4>Why Alpha Alternatives?</h4>",
            },
            answerGroup: {
              answer:
                "<p>In-country knowledge and expertise: identifying investment opportunities.</p>",
            },
          },
          {
            questionGroup: {
              question: "<h4>Why Alpha Alternatives?</h4>",
            },
            answerGroup: {
              answer:
                "<p>In-country knowledge and expertise: identifying investment opportunities.</p>",
            },
          },
          {
            questionGroup: {
              question: "<h4>Why Alpha Alternatives?</h4>",
            },
            answerGroup: {
              answer:
                "<p>In-country knowledge and expertise: identifying investment opportunities.</p>",
            },
          },
        ]}
      >
        <FieldGroup name="questionGroup" label="Question">
          <RichTextField name="question" label="Question" />
        </FieldGroup>

        <FieldGroup name="answerGroup" label="Answer">
          <RichTextField name="answer" label="Answer" />
        </FieldGroup>
      </RepeatedFieldGroup>
    </FieldGroup>
    <FieldGroup name="buttonGroup" label="Button">
      <ChoiceField
        name="buttonChoice"
        label="Button Choice"
        required={false}
        locked={false}
        choices={[
          ["primary", "Primary"],
          ["secondary", "Secondary"],
          ["accent", "Accent"],
          ["tertiary", "Tertiary"],
        ]}
        default="primary"
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
       <TextField
        name="svgIcon"
        label="Svg Icon"
        default={
          `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            {" "}
            <g id="button-icon" transform="translate(-269 -2985)">
              {" "}
              <path
                id="Polygon_2"
                data-name="Polygon 2"
                d="M3,0,6,4H0Z"
                transform="translate(279 2995) rotate(180)"
                fill="#263a4f"
              />{" "}
              <g
                id="Ellipse_40"
                data-name="Ellipse 40"
                transform="translate(269 2985)"
                fill="none"
                stroke="#fff"
                stroke-width="1"
              >
                {" "}
                <circle cx="7" cy="7" r="7" stroke="none" />{" "}
                <circle cx="7" cy="7" r="6.5" fill="none" />{" "}
              </g>{" "}
            </g>{" "}
          </svg>`
        }
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
    <FieldGroup name="image_video" label="Image/Video">
      <ImageField
        name="image"
        label="Image"
        default={{
          src: "https://20979002.fs1.hubspotusercontent-na1.net/hubfs/20979002/Rectangle%202023.png",
          alt: "Rectangle 2023",
          width: 370,
          height: 376,
        }}
      />
     
      <ChoiceField
        name="video_type"
        label="Video Type"
        choices={[
          ["default", "Hubspot Video"],
          ["embedvideo", "Embed Video"],
        ]}
        default="default"
      />
      <EmbedField
        name="embed_field"
        label="Embed"
        required={false}
        locked={false}
        supportedSourceTypes={["oembed", "html"]}
        supportedOembedTypes={["photo", "video", "link", "rich"]}
        supportedMediaBridgeProviders={[]}
        resizable={true}
        visibility={{
          controlling_field: "image_video.video_type",
          controlling_value_regex: "embedvideo",
          operator: "EQUAL",
        }}
      />

      <VideoField
        name="videoplayer"
        label="Video"
        visibility={{
          controlling_field: "image_video.video_type",
          controlling_value_regex: "default",
          operator: "EQUAL",
        }}
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
