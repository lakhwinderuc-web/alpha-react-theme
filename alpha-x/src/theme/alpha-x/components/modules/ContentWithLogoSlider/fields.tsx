import {
  FieldGroup,
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
  TextField,
  SpacingField,
  ChoiceField,
  BackgroundImageField,
  BooleanField,
  ColorField,
  NumberField,
  GradientField,
} from "@hubspot/cms-components/fields";
import slideLogo from "../../../images/slider-logo.webp";
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
    <FieldGroup name="headingGroup" label="Heading & Description">
      <RichTextField
        name="headingTitle"
        label="Title Heading"
        default="<h2>OUR CLIENTS KNOW</h2>"
      />
      <RichTextField
        name="headingTitlePara"
        label="Title & Para"
        default="<h2>&nbsp;</h2> 
        <p>We work with eligible high net worth clients interested in discovering more about growing and diversifying their portfolio of investments in alternative asset classes. We provide our clients with direct access to these specialist product providers and investment companies</p>"
      />
    </FieldGroup>
    {/* Slider Card (repeated group) */}
    <FieldGroup name="logoSlider" label="Logo Slider">
      <RepeatedFieldGroup
        name="logoGroup"
        label="Add Logo"
        occurrence={{ min: 4, default: 4 }}
        default={[
          {
            logo_slider: {
              logo_image: {
                size_type: "auto",
                src: slideLogo,
                alt: "Alpha Alternatives logo master-1",
                loading: "lazy",
              },
            },
          },
          {
            logo_slider: {
              logo_image: {
                size_type: "auto",
                src: slideLogo,
                alt: "Alpha Alternatives logo master-1",
                loading: "lazy",
              },
            },
          },
          {
            logo_slider: {
              logo_image: {
                size_type: "auto",
                src: slideLogo,
                alt: "Alpha Alternatives logo master-1",
                loading: "lazy",
              },
            },
          },
          {
            logo_slider: {
              logo_image: {
                size_type: "auto",
                src: slideLogo,
                alt: "Alpha Alternatives logo master-1",
                loading: "lazy",
              },
            },
          },
        ]}
      >
        <FieldGroup name="LogoSliderImage" label="Logo Slider">
          <ImageField
            name="logoImg"
            label="Image"
            resizable={true}
            responsive={true}
            required={false}
            default={{
              size_type: "auto",
              src: slideLogo,
              alt: "Alpha Alternatives logo master-1",
              loading: "lazy",
            }}
          />
        </FieldGroup>
      </RepeatedFieldGroup>
    </FieldGroup>
    {/* style */}
    <FieldGroup name="style" label="Style Tab" tab="STYLE">
      <FieldGroup name="sliderSettings" label="Slider Settings">
        <BooleanField
          name="sliderEnable"
          label="Enable/ Disable"
          required={false}
          locked={false}
          display="toggle"
          inlineHelpText="Slider Enable when toggled on"
          default={false}
        />
        <BooleanField
          name="autoPlay"
          label="Autoplay"
          default={false}
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
          default={500}
          min={500}
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
          default={3}
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
            src: "",
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
