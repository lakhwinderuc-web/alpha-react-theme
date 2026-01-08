import {
  ModuleFields,
  TextField,
  FieldGroup,
  ChoiceField,
  RichTextField,
  RepeatedFieldGroup,
  NumberField,
  BooleanField,
  SpacingField,
  BackgroundImageField,
  ColorField,
  GradientField,
  TextAlignmentField,
  BorderField,
} from "@hubspot/cms-components/fields";

import backgroundImage from "../../../images/hero-banner-background.png";
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
        name="add_content"
        label="Add Content"
        default="<h3>Our Achievements</h3>"
      />
    </FieldGroup>
    <FieldGroup name="content_repeater" label="Content Repeater">
      <RepeatedFieldGroup
        name="number_content"
        label="Number/Content"
        occurrence={{ min: 3, max: 10, default: 3 }}
        default={[
          {
        add_number:500,
        add_sign:"+",
        speed_duration:1000,
        add_content:'<p>Projects Completed</p>',
        last_text_wrap_new_line_toggle:false
          },
                   {
        add_number:300,
        add_sign:"+",
        speed_duration:1000,
        add_content:'<p>Projects Completed</p>',
        last_text_wrap_new_line_toggle:false
          },

                   {
        add_number:200,
        add_sign:"+",
        speed_duration:1000,
        add_content:'<p>Projects Completed</p>',
        last_text_wrap_new_line_toggle:false
          },

        ]}
      >
        <TextField name="add_symbol" label="Add Plus Symbol" default="" />
        <NumberField name="add_number" label="Add Number" default={500} />
        <TextField name="add_sign" label="Add Sign" default="+" />
        <NumberField
          name="speed_duration"
          label="Speed Duration"
          default={1000}
        />
        <RichTextField
          name="add_content"
          label="Add Content"
          default="<p>Projects Completed</p>"
        />
        <BooleanField
          name="last_text_wrap_new_line_toggle"
          label="Last Text Wrap New line Show/Hide"
          display="toggle"
          default={false}
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
      {/* start card per row */}
      <FieldGroup name="card_per_row" label="Card Per Row">
        <ChoiceField
          name="card_per_row_desktop"
          label="Card Per Row (Desktop)"
          choices={[
            ["1", "One"],
            ["2", "Two"],
            ["3", "Three"],
            ["4", "Four"],
            ["5", "Five"],
            ["6", "Six"],
            ["auto", "Auto"],
          ]}
          display="select"
          default="4"
        />

        <ChoiceField
          name="card_per_row_tablet"
          label="Card Per Row (Tablet)"
          choices={[
            ["1", "One"],
            ["2", "Two"],
            ["3", "Three"],
            ["4", "Four"],
            ["auto", "Auto"],
          ]}
          display="select"
          default="4"
        />

           <ChoiceField
          name="card_per_row_mobile"
          label="Card Per Row (Mobile)"
          choices={[
            ["1", "One"],
            ["2", "Two"],
            ["3", "Three"],
            ["auto", "Auto"],
          ]}
          display="select"
          default="2"
        />

        <ChoiceField
          name="card_per_row_small_screen"
          label="Card Per Row (Small-Screen)"
          choices={[
            ["1", "One"],
            ["2", "Two"],
            ["3", "Three"],
            ["auto", "Auto"],
          ]}
          display="select"
          default="1"
        />
      </FieldGroup>

{/* end cards per row  */}

      <FieldGroup name="card_style" label="Card Style">
<FieldGroup name="box_background_color" label="Box Background Color">
<ColorField name="background_color" label="Background Color" default={{
  color:"#ffff",
  opacity:100
}}/>
</FieldGroup>

{/* number color size alignment */}
<FieldGroup name="counter_number_color_size_alignment" label="Counter Number Color/ Font Size / Text Alignment">
<ColorField name="counter_number_color" label="Counter Number Color" default={{color:"#ef3b23" , opacity:100}}/>
<ChoiceField name="counter_heading_tag" label="Counter Heading Tag" choices={[
  ["h1","h1"],
  ["h2","h2"],
   ["h3","h3"],
  ["h4","h4"],
   ["h5","h5"],
  ["h6","h6"],
]}
  default="h3"/>
  <TextAlignmentField name="text_allignment" label="Text Alignment" default={{
    text_align:"CENTER"
  }}/>

  <BooleanField name="custom_font_show_hide" label="Counter Number Custom Font Size Show/Hide" default={true}/>
</FieldGroup>

{/* number alignment ends */}

{/* custom font size */}
<FieldGroup name="counter_number_font_size" label="Counter Number Font Size" visibility={{
  controlling_field_path: "style.card_style.counter_number_color_size_alignment.custom_font_show_hide",
            operator: "EQUAL",
            controlling_value_regex: "true",
}}>
<NumberField name="font_size_desktop" label="Font Size (For Desktop)" default={32}/>
<NumberField name="font_size_mobile" label="Font Size (For Mobile)" default={28}/>
</FieldGroup>

{/* custom font size ends */}

{/* start */}
<FieldGroup name="justify_content_type" label="Card Justify-Content Type">
<ChoiceField name="justify_content_choice" label="Justify-Content Choice" choices={[
  ["flex-start","Flex-Start"],
  ["space-around", "Space-Around"],
  ["center","Center"],
  ["space-between","Space-Between"],
  ["flex-end" , "Flex-end"]
]}
default="center"
/>
</FieldGroup>
{/* end */}

{/* start */}
<FieldGroup name="card_vertical_alignment_direction_spacing" label="Card Column Vertical Alignment / Direction / Spacing">
<ChoiceField name="align_items" label="Align-items" choices={[
  ["normal","Normal"],
  ["flex-start","Flex-Start"],
  ["center","Center"],
  ["flex-end","Flex-End"]
]}
default="normal"
/>
<ChoiceField name="flex_direction_choice" label="Flex Direction Choice" choices={[
  ["row","Row"],
  ["row-reverse","Row-Reverse"],
  ["column","Column"],
  ["column-reverse","Column-Reverse"]
]}
default="column"
/>

</FieldGroup>
{/* end */}

{/* start */}
<FieldGroup name="card_content_center_spacing" label="Card Content Center Spacing">
<NumberField name="desktop_spacing" label="Desktop Spacing" display="slider" min={0} max={50} default={20}/>
<NumberField name="mobile_spacing" label="Mobile Spacing" display="slider" min={0} max={50} default={20}/>

</FieldGroup>

{/* end */}


{/* border radius & shadow  start*/}
<FieldGroup name="border_radius_shadow" label="Border / Corner Radius / Box Shadow Edit">
<BorderField name="border_style" label="Border Style"/>
<NumberField name="box_radius" label="Box Radius" display="slider" min={0} max={100} default={30}/>
<BooleanField name="box_shadow_enable" label="Box Shadow Show/Hide" default={true}/>

<FieldGroup name="box_shadow" label="Box Shadow" visibility={{
    controlling_field_path: "style.card_style.border_radius_shadow.box_shadow_enable",
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
        <NumberField name="blur_radius" label="Blur Radius" display="slider" min={0} max={40} default={6}/>
        <NumberField name="spread_radius" label="Spread Radius" display="slider" min={0} max={40} default={0}/>
<ColorField name="shadow_color" label="Shadow Color" default={{
  color:"#000",
  opacity:20
}}/>
</FieldGroup>

</FieldGroup>

{/* border radius end */}

<FieldGroup name="box_column_row_spacing" label="Box Column & Row Sapcing">
  <NumberField name="add_spacing_desktop" label="Add Sapcing Desktop" display="slider" min={0} max={200} default={50}/>
<NumberField name="add_spacing_tab" label="Add Sapcing Tab" display="slider" min={0} max={50} default={40}/>
<NumberField name="add_spacing_mobile" label="Add Sapcing Mobile" display="slider" min={0} max={50} default={25} />
</FieldGroup>

<FieldGroup name="card_column_inside_spacing" label="Card Column Inside Spacing">
<FieldGroup name="card_spacing_inside_ds" label="Desktop">
    <SpacingField
            name="desktop_spacing"
            label="Spacing"
            required={false}
            default={{
              padding: {
                top: { value: 20, units: "px" },
                bottom: { value: 20, units: "px" },
                left: { value: 20, units: "px" },
                right: { value: 20, units: "px" },
              },
            }}
          />
</FieldGroup>
<FieldGroup name="card_spacing_inside_ts" label="Tablet">
  <SpacingField
            name="tablet_spacing"
            label="Spacing"
            required={false}
            default={{
              padding: {
                top: { value: 20, units: "px" },
                bottom: { value: 20, units: "px" },
                left: { value: 20, units: "px" },
                right: { value: 20, units: "px" },
              },
            }}
          />
</FieldGroup>
<FieldGroup  name="card_spacing_inside_ms" label="Mobile">
<SpacingField
            name="mobile_spacing"
            label="Spacing"
            required={false}
            default={{
              padding: {
                top: { value: 20, units: "px" },
                bottom: { value: 0, units: "px" },
                left: { value: 0, units: "px" },
                right: { value: 0, units: "px" },
              },
            }}
          />
</FieldGroup>

</FieldGroup>
<FieldGroup name="card_column_outside_spacing" label="Card Column Outside Spacing">
<FieldGroup name="card_spacing_outside_ds" label="Desktop">
    <SpacingField
            name="desktop_spacing"
            label="Spacing"
            required={false}
            default={{
              padding: {
                top: { value: 20, units: "px" },
                bottom: { value: 0, units: "px" },
                left: { value: 0, units: "px" },
                right: { value: 0, units: "px" },
              },
            }}
          />
</FieldGroup>
<FieldGroup name="card_spacing_outside_ts" label="Tablet">
  <SpacingField
            name="tablet_spacing"
            label="Spacing"
            required={false}
            default={{
              padding: {
                top: { value: 20, units: "px" },
                bottom: { value: 0, units: "px" },
                left: { value: 0, units: "px" },
                right: { value: 0, units: "px" },
              },
            }}
          />
</FieldGroup>
<FieldGroup  name="card_spacing_outside_ms" label="Mobile">
<SpacingField
            name="mobile_spacing"
            label="Spacing"
            required={false}
            default={{
              padding: {
                top: { value: 20, units: "px" },
                bottom: { value: 0, units: "px" },
                left: { value: 0, units: "px" },
                right: { value: 0, units: "px" },
              },
            }}
          />
</FieldGroup>

</FieldGroup>
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
