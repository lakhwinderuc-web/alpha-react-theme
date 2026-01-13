import {
  ModuleFields,
  TextField,
  FieldGroup,
  RichTextField,
  RepeatedFieldGroup,
  SpacingField,
  ChoiceField,
  BackgroundImageField,
  BooleanField,
  ColorField,
  NumberField,
  GradientField,
  BorderField

} from "@hubspot/cms-components/fields";

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

    <FieldGroup name="add_heading" label="Add Heading">
      <RichTextField name="heading" label="Heading" default="<h2>Frequently Asked Questions</h2> <p>Here are answers to some common questions. If you have more inquiries, feel free to contact us!</p>" />
    </FieldGroup>
    <FieldGroup name="faq_repeater" label="Faq Edit">
      <RepeatedFieldGroup
        name="faq"
        label="FAQ"
        occurrence={{ min: 1, default: 3, max: 20 }}
        default={[
          {
            questionGroup: {
              question: "<h4>What industries do you serve?</h4>",
            },
            answerGroup: {
              answer:
                "<p>We work with businesses across healthcare, finance, retail, manufacturing, education, and professional services, delivering industry-specific IT solutions.</p>",
            },
          },
          {
            questionGroup: {
              question: "<h4>What industries do you serve?</h4>",
            },
            answerGroup: {
              answer:
                "<p>We work with businesses across healthcare, finance, retail, manufacturing, education, and professional services, delivering industry-specific IT solutions.</p>",
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
<BooleanField name="show_hide_width" label="Show/Hide" default={true}/>
<NumberField name="max_width" label="Max-Width" display="slider" min={0} max={1920} default={900}/>
<NumberField name="padding_left_right" label="Padding Left Right" display="slider" min={0} max={100} default={16}/>
      </FieldGroup>

      <FieldGroup name="faq_style" label="FAQ Style">
<FieldGroup name="faq_list_bg" label="Faq List Background Color">
<ColorField name="faq_bg_color" label="Background Color" default={{color:"#faf9fb", opacity:100}}/>
</FieldGroup>

<FieldGroup name="border_radius_group" label="Border / Radius">
<BorderField name="border" label="Border" />
<BorderField name="active_border" label="Active Border"/>
<NumberField name="border_radius" label="Border Radius" display="slider" min={0} max={100} default={8}/>
</FieldGroup>

<FieldGroup name="icon_types_style" label="Icon Types & Style">
<ChoiceField name="icon_types" label="Icon Types" choices={[
  ["plus_minus","Plus ↔ Minus"],
  ["arrow_down_up","Arrow Down ↔ Arrow Up"],
    ["arrow_right_arrow_down","Arrow Right ↔ Arrow Down"],
    ["plus_circle_minus_circle","Plus Circle ↔ Minus Circle"],
    ["caret_down_up","Caret Down ↔ Caret Up"]
]}
default="arrow_down_up"
/>

<NumberField name="icon_size" label="Icon Size" display="slider" min={0} max={50} default={25}/>
<NumberField name="icon_bold" label="Icon Boldness" display="slider" min={0} max={5} default={2}/>
<ColorField name="icon_color" label="Icon Color" default={{color:"#151367"}}/>
<ColorField name="icon_color_hover_active" label="Icon Color Hover / Active" default={{color:"#ef3b23"}}/>
<BooleanField name="icon_bg_style_enable" label="Icon Background style Show/Hide" default={false}/>
<FieldGroup name="icon_background_style" label="Icon background Style" visibility={{
   controlling_field_path: "style.faq_style.icon_types_style.icon_bg_style_enable",
            operator: "EQUAL",
            controlling_value_regex: "true",
}}>
<ColorField name="background_color" label="Background Color" default={{
  color:"#69A84F",
  opacity:100
}}/>

<ColorField name="active_color" label="Active Color" default={{
  color:"#69A84F",
  opacity:100
}}/>
</FieldGroup>

</FieldGroup>

<FieldGroup name="hover_active" label="Hover / Active">
<ColorField name="background_color" label="Background Color" default={{
  color:"#faf9fb",
  opacity:100
}}/>

<ColorField name="question_text_color" label="Question Text Color" default={{
  color:"#69A84F",
}}/>
</FieldGroup>

<FieldGroup name="box_shadow_edit" label="Box Shadow Edit">
<BooleanField name="box_shadow_enable" label="Box Shadow Show/Hide" default={true}/>
<FieldGroup name="box_shadow" label="Box Shadow" visibility={{
   controlling_field_path: "style.faq_style.box_shadow_edit.box_shadow_enable",
            operator: "EQUAL",
            controlling_value_regex: "true",
}}>
  
<ChoiceField name="shadowType" label="Shadow Type (Inset/Outset) Type" choices={[
  ["outset" ,"Outset"],
["inset" , "Inset"]
]}
default="inset"
/>
  <NumberField name="horizontal_offset" label="Horizontal Offset (X Offset)" display="slider" min={0} max={40} default={0}/>
        <NumberField name="vertical_offset" label="Vertical Offset (Y Offset)" display="slider" min={0} max={40} default={2}/>
        <NumberField name="blur_radius" label="Blur Radius" display="slider" min={-40} max={40} default={5}/>
        <NumberField name="spread_radius" label="Spread Radius" display="slider" min={-40} max={40} default={0}/>
<ColorField name="shadow_color" label="Shadow Color" default={{
  color:"#000",
  opacity:10
}}/>
</FieldGroup>
</FieldGroup>

<FieldGroup name="faq_items_spacing" label="Faq Items Spacing">
 {/*  Desktop */}
        <FieldGroup name="desktop" label="Desktop">
          <SpacingField
            name="desktop_spacing"
            label="Spacing"
            required={false}
            default={{
              padding: {
                top: { value: 20, units: "px" },
                bottom: { value: 20, units: "px" },
                left: { value: 0, units: "px" },
                right: { value: 0, units: "px" },
              },
            }}
          />
        </FieldGroup>
        {/* end Desktop */}
          {/*  Mobile */}
        <FieldGroup name="mobile" label="Mobile">
          <SpacingField
            name="mobile_spacing"
            label="Spacing"
            required={false}
            default={{
              padding: {
                top: { value: 10, units: "px" },
                bottom: { value: 10, units: "px" },
                left: { value: 0, units: "px" },
                right: { value: 0, units: "px" },
              },
            }}
          />
        </FieldGroup>
        {/* end Mobile */}
</FieldGroup>
<BooleanField name="two_column_layout_enable" label="Two Column Layout Show Hide" default={true}/>
<FieldGroup name="two_column_faq_setting" label="Two Colum Faq setting" visibility={{
   controlling_field_path: "style.faq_style.two_column_layout_enable",
            operator: "EQUAL",
            controlling_value_regex: "true",
}}>
<NumberField name="faq_item_column_number" label="Faq Items Left column Show Number" default={3}/>
<NumberField name="column_center_spacing" label="Column Center Spacing" display="slider" min={0} max={100} default={30}/>
</FieldGroup>
</FieldGroup>
      </FieldGroup>
  </ModuleFields>
);
