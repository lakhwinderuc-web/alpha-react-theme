import {
  ModuleFields,
  TextField,
  FieldGroup,
  ChoiceField,
  RichTextField,
  RepeatedFieldGroup,
  ImageField,
  SpacingField,
  BackgroundImageField,
  BooleanField,
  ColorField,
  NumberField,
  GradientField,
  LinkField
} from "@hubspot/cms-components/fields";

import backgroundImage from "../../../images/hero-banner-background.png";
import clientImg from "../../../images/client-image.webp";
import quoteImg from "../../../images/quote.png";

export const fields = (
  <ModuleFields>
    <FieldGroup name="customCss" label="Custom | Class & ID">
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

    <ChoiceField
      name="layout_choice"
      label="Layout Choice"
      choices={[
        ["layout-one", "Layout One"],
        ["layout-two", "Layout Two"],
      ]}
      default="layout-two"
    />
    <FieldGroup name="heading_content" label="Heading/Content">
      <RichTextField
        name="heading"
        label="Add Heading"
        default="<h1>Client Success Stories</h1>"
      />
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

      <TextField
        name="buttonText"
        label="Button Text"
        required={false}
        locked={false}
        default="Click Here"
        
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

    <FieldGroup name="testimonial_content" label="Testimonial Content">
      <RepeatedFieldGroup
        name="testimonial_inner"
        label="Testimonial Inner"
        occurrence={{ min: 3, default: 3, max: 30 }}
        default={[
          {
            add_quote: {
              quote_image_choice: "svg_code",
              svg_code:
                '<svg class="svg-icon" width="54" height="54" aria-hidden="true" role="img" focusable="false" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><path fill-rule="evenodd" fill="rgb(220, 220, 220)" d="M53.520,35.836 C52.008,41.228 47.039,44.996 41.434,44.996 C41.415,44.996 41.397,44.996 41.378,44.995 C36.836,44.818 33.306,43.048 30.887,39.732 C26.563,33.807 27.078,24.392 28.832,18.129 C31.823,7.456 38.909,0.001 46.065,0.001 C46.509,0.001 46.958,0.032 47.398,0.092 C47.802,0.147 48.164,0.375 48.388,0.716 C48.613,1.058 48.678,1.479 48.568,1.872 L47.266,6.523 C47.115,7.060 46.662,7.458 46.110,7.540 C40.149,8.424 37.157,16.278 35.911,20.830 C37.203,20.273 38.869,19.817 40.867,19.817 C42.160,19.817 43.489,20.010 44.819,20.393 C48.060,21.324 50.741,23.426 52.369,26.312 C54.014,29.229 54.423,32.610 53.520,35.836 ZM13.900,44.996 C13.882,44.996 13.863,44.995 13.845,44.994 C9.302,44.818 5.772,43.047 3.353,39.732 C-0.971,33.807 -0.456,24.392 1.299,18.129 C4.290,7.456 11.376,0.001 18.532,0.001 C18.976,0.001 19.424,0.032 19.864,0.092 C20.269,0.147 20.630,0.375 20.855,0.716 C21.080,1.058 21.145,1.479 21.035,1.872 L19.732,6.523 C19.582,7.060 19.129,7.458 18.577,7.540 C12.616,8.424 9.623,16.278 8.378,20.830 C9.670,20.273 11.336,19.817 13.333,19.817 C14.627,19.817 15.956,20.010 17.286,20.393 C20.527,21.324 23.208,23.426 24.836,26.312 C26.481,29.229 26.890,32.610 25.986,35.835 C24.475,41.228 19.505,44.996 13.900,44.996 Z"></path></svg>',
            },
            testimonial_content: {
              testimonial_desc:
                "<p>At [Charity Name], we believe in the power of community and the impact of kindness. Your donations have enabled countless individuals to overcome challenges and create better futures for themselves and their families.</p>",
            },
            client_section: {
              client_name: "Russ D'Argento",
              client_role: "Founder & CEO",
              client_image: {
                src: clientImg,
                alt: "Client Image",
              },
              client_rating:"3"
            },
          },
          {
            add_quote: {
              quote_image_choice: "image",
              quote_image: {
                src: quoteImg,
                height: 80,
                width: 80,
              },
            },
            testimonial_content: {
              testimonial_desc:
                "<p>At [Charity Name], we believe in the power of community and the impact of kindness. Your donations have enabled countless individuals to overcome challenges and create better futures for themselves and their families.</p>",
            },
            client_section: {
              client_name: "Ajit Kumar",
              client_role: "Founder & CEO",
              client_image: {
                src: clientImg,
                alt: "Client Image",
              },
            },
          },
          {
            add_quote: {
              quote_image_choice: "svg_code",
              svg_code:
                '<svg class="svg-icon" width="54" height="54" aria-hidden="true" role="img" focusable="false" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><path fill-rule="evenodd" fill="rgb(220, 220, 220)" d="M53.520,35.836 C52.008,41.228 47.039,44.996 41.434,44.996 C41.415,44.996 41.397,44.996 41.378,44.995 C36.836,44.818 33.306,43.048 30.887,39.732 C26.563,33.807 27.078,24.392 28.832,18.129 C31.823,7.456 38.909,0.001 46.065,0.001 C46.509,0.001 46.958,0.032 47.398,0.092 C47.802,0.147 48.164,0.375 48.388,0.716 C48.613,1.058 48.678,1.479 48.568,1.872 L47.266,6.523 C47.115,7.060 46.662,7.458 46.110,7.540 C40.149,8.424 37.157,16.278 35.911,20.830 C37.203,20.273 38.869,19.817 40.867,19.817 C42.160,19.817 43.489,20.010 44.819,20.393 C48.060,21.324 50.741,23.426 52.369,26.312 C54.014,29.229 54.423,32.610 53.520,35.836 ZM13.900,44.996 C13.882,44.996 13.863,44.995 13.845,44.994 C9.302,44.818 5.772,43.047 3.353,39.732 C-0.971,33.807 -0.456,24.392 1.299,18.129 C4.290,7.456 11.376,0.001 18.532,0.001 C18.976,0.001 19.424,0.032 19.864,0.092 C20.269,0.147 20.630,0.375 20.855,0.716 C21.080,1.058 21.145,1.479 21.035,1.872 L19.732,6.523 C19.582,7.060 19.129,7.458 18.577,7.540 C12.616,8.424 9.623,16.278 8.378,20.830 C9.670,20.273 11.336,19.817 13.333,19.817 C14.627,19.817 15.956,20.010 17.286,20.393 C20.527,21.324 23.208,23.426 24.836,26.312 C26.481,29.229 26.890,32.610 25.986,35.835 C24.475,41.228 19.505,44.996 13.900,44.996 Z"></path></svg>',
            },
            testimonial_content: {
              testimonial_desc:
                "<p>At [Charity Name], we believe in the power of community and the impact of kindness. Your donations have enabled countless individuals to overcome challenges and create better futures for themselves and their families.</p>",
            },
            client_section: {
              client_name: "Jay Singh",
              client_role: "Founder & CEO",
              client_image: {
                src: clientImg,
                alt: "Client Image",
              },
            },
          },
        ]}
      >
        <FieldGroup name="add_quote" label="Add Quote Image">
          <ChoiceField
            name="quote_image_choice"
            label="Quote Image Choice"
            choices={[
              ["svg_code", "Svg Code"],
              ["image", "Image"],
            ]}
            default="svg_code"
          />
          <TextField
            name="svg_code"
            label="Svg Code"
            default='<svg class="svg-icon" width="54" height="54" aria-hidden="true" role="img" focusable="false" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><path fill-rule="evenodd" fill="rgb(220, 220, 220)" d="M53.520,35.836 C52.008,41.228 47.039,44.996 41.434,44.996 C41.415,44.996 41.397,44.996 41.378,44.995 C36.836,44.818 33.306,43.048 30.887,39.732 C26.563,33.807 27.078,24.392 28.832,18.129 C31.823,7.456 38.909,0.001 46.065,0.001 C46.509,0.001 46.958,0.032 47.398,0.092 C47.802,0.147 48.164,0.375 48.388,0.716 C48.613,1.058 48.678,1.479 48.568,1.872 L47.266,6.523 C47.115,7.060 46.662,7.458 46.110,7.540 C40.149,8.424 37.157,16.278 35.911,20.830 C37.203,20.273 38.869,19.817 40.867,19.817 C42.160,19.817 43.489,20.010 44.819,20.393 C48.060,21.324 50.741,23.426 52.369,26.312 C54.014,29.229 54.423,32.610 53.520,35.836 ZM13.900,44.996 C13.882,44.996 13.863,44.995 13.845,44.994 C9.302,44.818 5.772,43.047 3.353,39.732 C-0.971,33.807 -0.456,24.392 1.299,18.129 C4.290,7.456 11.376,0.001 18.532,0.001 C18.976,0.001 19.424,0.032 19.864,0.092 C20.269,0.147 20.630,0.375 20.855,0.716 C21.080,1.058 21.145,1.479 21.035,1.872 L19.732,6.523 C19.582,7.060 19.129,7.458 18.577,7.540 C12.616,8.424 9.623,16.278 8.378,20.830 C9.670,20.273 11.336,19.817 13.333,19.817 C14.627,19.817 15.956,20.010 17.286,20.393 C20.527,21.324 23.208,23.426 24.836,26.312 C26.481,29.229 26.890,32.610 25.986,35.835 C24.475,41.228 19.505,44.996 13.900,44.996 Z"></path></svg>'
            visibility={{
              controlling_field:
                "testimonial_content.testimonial_inner.add_quote.quote_image_choice",
              operator: "EQUAL",
              controlling_value_regex: "svg_code",
            }}
          />
          <ImageField
            name="quote_image"
            label="Image"
            visibility={{
              controlling_field:
                "testimonial_content.testimonial_inner.add_quote.quote_image_choice",
              operator: "EQUAL",
              controlling_value_regex: "image",
            }}
          />
        </FieldGroup>
        <FieldGroup name="testimonial_content" label="Testimonial Content">
          <RichTextField
            name="testimonial_desc"
            label="Testimonial Desc"
            default="<p>At [Charity Name], we believe in the power of community and the impact of kindness. Your donations have enabled countless individuals to overcome challenges and create better futures for themselves and their families.</p>"
          />
        </FieldGroup>
        <FieldGroup name="client_section" label="Client Section">
          <TextField
            name="client_name"
            label="Client Name"
            default="Russ D'Argento"
          />
          <TextField
            name="client_role"
            label="Client Role"
            default="Founder & CEO"
          />
          <ImageField
            name="client_image"
            label="Client Image"
            default={{
              src: clientImg,
              alt: "Client Image",
            }}
          />
          <ChoiceField name="reviews" label="Star Reviews ✨" choices={[
            ["1","1"],
            ["2","2"],
            ["3", "3"],
            ["4","4"],
            ["5","5"]
          ]}
          default={5}
          />
        </FieldGroup>
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
      <BooleanField
        name="slider_enable"
        label="Slider Enable"
        display="toggle"
        default={true}
      />
      <FieldGroup
        name="slider_style"
        label="Slider Style"
        visibility={{
          controlling_field_path: "style.slider_enable",
          operator: "EQUAL",
          controlling_value_regex: "true",
        }}
      >
        <BooleanField
          name="autoplay_enable"
          label="Autoplay"
          display="toggle"
          default={false}
        />
        <NumberField
          name="autoplay_speed"
          label="Speed"
          display="slider"
          min={3000}
          max={10000}
          default={5000}
          visibility={{
            controlling_field_path: "style.slider_style.autoplay_enable",
            operator: "EQUAL",
            controlling_value_regex: "true",
          }}
        />

        <FieldGroup name="slider_desktop" label="Desktop">
          <BooleanField
            name="dots_enable"
            label="Dots"
            display="toggle"
            default={true}
          />
          <BooleanField
            name="arrows_enable"
            label="Arrows"
            display="toggle"
            default={true}
          />
          <NumberField
            name="slide_to_show"
            label="Slide to Show"
            display="slider"
            min={1}
            max={10}
            default={1}
          />
          <NumberField
            name="slide_to_scroll"
            label="Slide to Scroll"
            display="slider"
            min={1}
            max={10}
            default={1}
          />
        </FieldGroup>

        <FieldGroup name="slider_tablet" label="Tablet">
          <BooleanField
            name="dots_enable"
            label="Dots"
            display="toggle"
            default={true}
          />
          <BooleanField
            name="arrows_enable"
            label="Arrows"
            display="toggle"
            default={true}
          />
          <NumberField
            name="slide_to_show"
            label="Slide to Show"
            display="slider"
            min={1}
            max={10}
            default={1}
          />
          <NumberField
            name="slide_to_scroll"
            label="Slide to Scroll"
            display="slider"
            min={1}
            max={10}
            default={1}
          />
        </FieldGroup>

        <FieldGroup name="slider_mobile" label="Mobile">
          <BooleanField
            name="dots_enable"
            label="Dots"
            display="toggle"
            default={true}
          />
          <BooleanField
            name="arrows_enable"
            label="Arrows"
            display="toggle"
            default={true}
          />
          <NumberField
            name="slide_to_show"
            label="Slide to Show"
            display="slider"
            min={1}
            max={10}
            default={1}
          />
          <NumberField
            name="slide_to_scroll"
            label="Slide to Scroll"
            display="slider"
            min={1}
            max={10}
            default={1}
          />
        </FieldGroup>

        <FieldGroup name="dot_styling" label="Dot Styling">
          <ColorField
            name="dot_color"
            label="Color"
            default={{ color: "#333333", opacity: 100 }}
          />
        </FieldGroup>

        <FieldGroup name="arrow_styling" label="Arrow Styling">
          <ColorField
            name="icon_color"
            label="Color"
            default={{ color: "#fff", opacity: 100 }}
          />
          <ColorField
            name="icon_bg_color"
            label="Background Color"
            default={{ color: "#c76b3d", opacity: 100 }}
          />
          <FieldGroup name="arrow_hover" label="Hover">
            <ColorField
              name="icon_color_hover"
              label="Color"
              default={{ color: "#fff", opacity: 100 }}
            />
            <ColorField
              name="icon_bg_color_hover"
              label="Background Color"
              default={{ color: "#e24000", opacity: 100 }}
            />
          </FieldGroup>
        </FieldGroup>
      </FieldGroup>
      <FieldGroup
        name="testimonial_content_style"
        label="Testimonial Content Style"
      >
        <ChoiceField
          name="testimonial_content_alignment"
          label="Testimonial Content Alignment"
          choices={[
            ["left", "Left"],
            ["right", "Right"],
            ["center", "Center"],
          ]}
          default="center"
        />
        <NumberField
          name="testimonial_content_width"
          label="Testimonial Content Width"
          default={1000}
        />
        <NumberField
          name="client_image_size"
          label="Client Image Size"
          default={85}
        />
      </FieldGroup>
      <FieldGroup name="quote_style" label="Quote Style">
        <ColorField
          name="quote_color"
          label="Color"
          default={{ color: "#dcdcdc", opacity: 100 }}
        />
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
