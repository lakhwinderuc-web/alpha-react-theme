import {
  ModuleFields,
  TextField,
  FieldGroup,
  RichTextField,
  RepeatedFieldGroup,
  ChoiceField,
  ImageField,
  IconField,
  SpacingField,
  BackgroundImageField,
  BooleanField,
  ColorField,
  NumberField,
  GradientField,
} from "@hubspot/cms-components/fields";

import dataAnalysis from "../../../images/data analysis.png";
import cloudComputing from "../../../images/cloud-computing-1.webp";
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
    <FieldGroup name="main_heading" label="Main Heading">
      <RichTextField
        name="heading"
        label="Heading"
        default="<h2>We Follow a Structured Development Process</h2>"
      />
    </FieldGroup>

    <FieldGroup name="tab_content" label="Tab Content">
      <RepeatedFieldGroup
        name="tab_data"
        label="Tab Data"
        occurrence={{ min: 2, max: 10, default: 2 }}
        default={[
          {
            tab_name: "Analysis",
              icon_image_title: {
                image_icon_choice: "image",
                image_icon: {
                  src: dataAnalysis,
                  alt: "dataAnalysis",
                  height: 60,
                  width: 60,
                  loading: "lazy",
                },
                description:
                  "<h2>Process Efficiency Analysis</h2><p>We help organizations enhance their digital presence through custom software solutions, creative design, quality assurance, and consulting services. Our design process allows you to plan, test, and refine your ideas before full development.</p>",
                side_image: {
                  src: cloudComputing,
                  alt: "cloud-computing",
                  height: 100,
                  width: 100,
                  loading: "lazy",
                },
              },
          
          },
           {
          
            tab_name: "Cloud Computing",
              icon_image_title: {
                image_icon_choice: "svg_icon",
                svg_code: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" aria-hidden="true"><g id="Alternate First Order1_layer"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 488.21C115.34 496.21 7.79 388.66 7.79 256S115.34 15.79 248 15.79 488.21 123.34 488.21 256 380.66 496.21 248 496.21zm0-459.92C126.66 36.29 28.29 134.66 28.29 256S126.66 475.71 248 475.71 467.71 377.34 467.71 256 369.34 36.29 248 36.29zm0 431.22c-116.81 0-211.51-94.69-211.51-211.51S131.19 44.49 248 44.49 459.51 139.19 459.51 256 364.81 467.51 248 467.51zm186.23-162.98a191.613 191.613 0 0 1-20.13 48.69l-74.13-35.88 61.48 54.82a193.515 193.515 0 0 1-37.2 37.29l-54.8-61.57 35.88 74.27a190.944 190.944 0 0 1-48.63 20.23l-27.29-78.47 4.79 82.93c-8.61 1.18-17.4 1.8-26.33 1.8s-17.72-.62-26.33-1.8l4.76-82.46-27.15 78.03a191.365 191.365 0 0 1-48.65-20.2l35.93-74.34-54.87 61.64a193.85 193.85 0 0 1-37.22-37.28l61.59-54.9-74.26 35.93a191.638 191.638 0 0 1-20.14-48.69l77.84-27.11-82.23 4.76c-1.16-8.57-1.78-17.32-1.78-26.21 0-9 .63-17.84 1.82-26.51l82.38 4.77-77.94-27.16a191.726 191.726 0 0 1 20.23-48.67l74.22 35.92-61.52-54.86a193.85 193.85 0 0 1 37.28-37.22l54.76 61.53-35.83-74.17a191.49 191.49 0 0 1 48.65-20.13l26.87 77.25-4.71-81.61c8.61-1.18 17.39-1.8 26.32-1.8s17.71.62 26.32 1.8l-4.74 82.16 27.05-77.76c17.27 4.5 33.6 11.35 48.63 20.17l-35.82 74.12 54.72-61.47a193.13 193.13 0 0 1 37.24 37.23l-61.45 54.77 74.12-35.86a191.515 191.515 0 0 1 20.2 48.65l-77.81 27.1 82.24-4.75c1.19 8.66 1.82 17.5 1.82 26.49 0 8.88-.61 17.63-1.78 26.19l-82.12-4.75 77.72 27.09z"></path></g></svg>',
                description:
                  "<h2>Process Efficiency Analysis</h2><p>We help organizations enhance their digital presence through custom software solutions, creative design, quality assurance, and consulting services. Our design process allows you to plan, test, and refine your ideas before full development.</p>",
                side_image: {
                  src: cloudComputing,
                  alt: "cloud-computing",
                  loading: "lazy",
                },
              },
            
          }
        ]}
      >
        <TextField name="tab_name" label="Tab Name" default="Analysis" />
          <FieldGroup name="icon_image_title" label="Icon / Image / Title">
            <ChoiceField
              name="image_icon_choice"
              label="Image / Icon Choice"
              choices={[
                ["image", "Image"],
                ["hubspot_icon", "Hubspot Icon"],
                ["svg_icon", "SVG Icon"],
              ]}
              default="image"
            />
            <ImageField
              name="image_icon"
              label="Image"
              default={{
                src: dataAnalysis,
                width: 64,
                height: 64,
                loading: "lazy",
                alt: "data-analysis",
              }}
              visibility={{
                controlling_field:
                  "tab_content.tab_data.icon_image_title.image_icon_choice",
                operator: "EQUAL",
                controlling_value_regex: "image",
              }}
            />

            <IconField
              name="icon_field"
              label="Icon"
              required={false}
              locked={false}
              iconSet="fontawesome-6.4.2"
              visibility={{
                controlling_field:
                  "tab_content.tab_data.icon_image_title.image_icon_choice",
                operator: "EQUAL",
                controlling_value_regex: "hubspot_icon",
              }}
              default={{
                name: "accessible-icon",
                unicode: "f368",
                type: "REGULAR",
              }}
            />

            <TextField
              name="svg_code"
              label="SVG Code"
              default='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" aria-hidden="true"><g id="Alternate First Order1_layer"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 488.21C115.34 496.21 7.79 388.66 7.79 256S115.34 15.79 248 15.79 488.21 123.34 488.21 256 380.66 496.21 248 496.21zm0-459.92C126.66 36.29 28.29 134.66 28.29 256S126.66 475.71 248 475.71 467.71 377.34 467.71 256 369.34 36.29 248 36.29zm0 431.22c-116.81 0-211.51-94.69-211.51-211.51S131.19 44.49 248 44.49 459.51 139.19 459.51 256 364.81 467.51 248 467.51zm186.23-162.98a191.613 191.613 0 0 1-20.13 48.69l-74.13-35.88 61.48 54.82a193.515 193.515 0 0 1-37.2 37.29l-54.8-61.57 35.88 74.27a190.944 190.944 0 0 1-48.63 20.23l-27.29-78.47 4.79 82.93c-8.61 1.18-17.4 1.8-26.33 1.8s-17.72-.62-26.33-1.8l4.76-82.46-27.15 78.03a191.365 191.365 0 0 1-48.65-20.2l35.93-74.34-54.87 61.64a193.85 193.85 0 0 1-37.22-37.28l61.59-54.9-74.26 35.93a191.638 191.638 0 0 1-20.14-48.69l77.84-27.11-82.23 4.76c-1.16-8.57-1.78-17.32-1.78-26.21 0-9 .63-17.84 1.82-26.51l82.38 4.77-77.94-27.16a191.726 191.726 0 0 1 20.23-48.67l74.22 35.92-61.52-54.86a193.85 193.85 0 0 1 37.28-37.22l54.76 61.53-35.83-74.17a191.49 191.49 0 0 1 48.65-20.13l26.87 77.25-4.71-81.61c8.61-1.18 17.39-1.8 26.32-1.8s17.71.62 26.32 1.8l-4.74 82.16 27.05-77.76c17.27 4.5 33.6 11.35 48.63 20.17l-35.82 74.12 54.72-61.47a193.13 193.13 0 0 1 37.24 37.23l-61.45 54.77 74.12-35.86a191.515 191.515 0 0 1 20.2 48.65l-77.81 27.1 82.24-4.75c1.19 8.66 1.82 17.5 1.82 26.49 0 8.88-.61 17.63-1.78 26.19l-82.12-4.75 77.72 27.09z"></path></g></svg>'
              visibility={{
                controlling_field:
                  "tab_content.tab_data.icon_image_title.image_icon_choice",
                operator: "EQUAL",
                controlling_value_regex: "svg_icon",
              }}
            />
            <RichTextField
              name="description"
              label="Description"
              default="<h2>Process Efficiency Analysis</h2><p>We help organizations enhance their digital presence through custom software solutions, creative design, quality assurance, and consulting services. Our design process allows you to plan, test, and refine your ideas before full development.</p>"
            />

            <ImageField
              name="side_image"
              label="Image"
              default={{
                src: cloudComputing,
                alt: "cloud-computing",
               
                loading: "lazy",
              }}
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

      <FieldGroup name="maximum_content_width" label="Maximum Content Width">
        <BooleanField name="show_hide_width" label="Show/Hide" default={true} />
        <NumberField
          name="max_width"
          label="Max-Width"
          display="slider"
          min={0}
          max={1920}
          default={900}
        />
        <NumberField
          name="padding_left_right"
          label="Padding Left Right"
          display="slider"
          min={0}
          max={100}
          default={16}
        />
      </FieldGroup>

      <FieldGroup name="tab_color" label="Tab Color">
        <FieldGroup name="default_style" label="Default Style">
          <ColorField
            name="text_color"
            label="Text Color"
            default={{
              color: "#333333",
            }}
          />

          <ColorField
            name="background_color"
            label="Background Color"
            default={{
              color: "#f5f5f5",
              opacity: 100,
            }}
          />
        </FieldGroup>
        <FieldGroup name="active_style" label="Active Style">
          <ColorField
            name="active_text_color"
            label="Text Color"
            default={{
              color: "#ff4800",
            }}
          />

          <ColorField
            name="active_background_color"
            label="Background Color"
            default={{
              color: "#c76b3d",
              opacity: 100,
            }}
          />
        </FieldGroup>
      </FieldGroup>
      <FieldGroup name="svg_icon_style" label="Svg Icon Style">
        <ColorField
          name="svg_icon_color"
          label="Svg Color"
          default={{
            color: "#000000",
          }}
        />
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
