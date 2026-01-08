import {
  ModuleFields,
  FieldGroup,
  TextField,
  BooleanField,
  RichTextField,
  ChoiceField,
  BlogField,
  LinkField,
  IconField,
  NumberField,
  SpacingField,
BackgroundImageField,
ColorField,
GradientField,
AlignmentField,
BorderField,
TagField,

} from "@hubspot/cms-components/fields";

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
      <RichTextField
        name="title_heading"
        label="Main Title heading"
        default=""
      />
    </FieldGroup>
    <FieldGroup
      name="first_post_heading"
      label="First Post Heading"
      visibility={{
        controlling_field: "first_post_show_hide",
        operator: "EQUAL",
        controlling_value_regex: "true",
      }}
    >
      <RichTextField
        name="first_post_title"
        label="First Post Title"
        default="<h3>Our latest post</h3>"
      />
    </FieldGroup>
    <BooleanField
      name="first_post_show_hide"
      label="First Full Width Post Show/Hide"
      display="toggle"
      default={true}
    />

    <ChoiceField
      name="recent_post_tag_recent_post_choice"
      label="Recent Post / Tag Recent Post / blog Listing Choice"
      choices={[
        ["tag_related", "Tag Related"],
        ["blog_recent", "Blog Recent"],
        ["listing_page", "Listing Page"],
      ]}
      display="select"
      default="blog_recent"
    />
    <FieldGroup name="blog_listing_heading" label="Blog Listing Heading">
      <RichTextField
        name="blog_heading"
        label="Heading"
        default="<h3>More Posts </h3>"
      />
    </FieldGroup>

    <BlogField name="select_blog" label="Select Blog" default={1234567890} />
    <TagField name="select_tag" label="Select Tag" tagValue="SLUG" default={null}
    visibility={{
            controlling_field: "recent_post_tag_recent_post_choice",
        operator: "EQUAL",
        controlling_value_regex: "tag_related",
    }}
    />
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
        default="Read Article"
      />
      <BooleanField
      name="icon_enable"
      label="Add Button Icon"
      display="toggle"
      default={false}
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

      <FieldGroup name="add_icon" label="Add Icon">
        <ChoiceField
          name="btnIcon"
          label="Button Icon Choice"
          default="hub-icon"
          choices={[
            ['hub-icon', 'Hubspot Icon'],
            ['svg-icon', 'SVG Icon'],
          ]}
        />
        <IconField
          name="icon_field"
          label="Hubspot Icon"
          iconSet="fontawesome-5.14.0"
          default={{ name: 'Alternate Long Arrow Right', unicode: 'f30b', type: 'SOLID' }}
          visibility={{
            controlling_field_path: 'buttonGroup.add_icon.btnIcon',
            operator: 'EQUAL',
            controlling_value_regex: 'hub-icon',
          }}
        />
        <TextField
          name="svg_icon"
          label="SVG Icon"
          visibility={{
            controlling_field_path: 'buttonGroup.add_icon.btnIcon',
            operator: 'EQUAL',
            controlling_value_regex: 'svg-icon',
          }}
        />
        <NumberField name="icon_height" label="Icon Height" default={13}/>
      </FieldGroup>
    </FieldGroup>
   <BooleanField name="show_author_name" label="Show Author Name" default={true}/>
   <BooleanField name="show_publish_date" label="Show Publish Date" default={true}/>
      <BooleanField name="show_topics" label="Show Topics" default={true}/>
         <BooleanField name="show_read_more" label="Show Read More" default={true}/>
<TextField name="read_more_text" label="Read More Text" default="Read Article"/>
  
    //Styling
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

            <FieldGroup name="cards_style" label="Cards Style">
              <FieldGroup name="card_padding" label="Card Padding">
          <FieldGroup name="desktop_spacing" label="Desktop ">
            <SpacingField
              name="card_padding_desktop"
              label="Card Padding Desktop"
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
        
          <FieldGroup name="mobile_spacing" label="Mobile ">
            <SpacingField
              name="card_padding_mobile"
              label="Card Padding Mobile"
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

        <FieldGroup name="cards_per_row" label="Cards Per Row">
<FieldGroup name="desktop_cards_per_row" label="Desktop" >
  <ChoiceField name="card_per_row_choice_ds" label="Cards Per Row Desktop" choices={[
    ["1", "One"],
    ["2" , "Two"],
    ["3" , "Three"],
    ["4" , "Four"]
  ]}
  display="select"
  default="3"
  inlineHelpText="Desktop Screen Min-Width : 1100px"
  />

  <NumberField name="gap_between_cards_ds" label="Gap Between Cards" default={24}/>
</FieldGroup>
// Tablet
<FieldGroup name="tablet_cards_per_row" label="Tablet" >
  <ChoiceField name="card_per_row_choice_ts" label="Cards Per Row Tablet" choices={[
    ["1", "One"],
    ["2" , "Two"],
    ["3" , "Three"]
  ]}
  display="select"
  default="2"
  inlineHelpText="Tablet Screen : 850px–1100px"
  />

  <NumberField name="gap_between_cards_ts" label="Gap Between Cards" default={24}/>
</FieldGroup>              

// Mobile
<FieldGroup name="small_tablet_cards_per_row" label="Small Tablet" >
  <ChoiceField name="card_per_row_choice_st" label="Cards Per Row Small Tablet" choices={[
    ["1", "One"],
    ["2" , "Two"],
    ["3" , "Three"]
  ]}
  display="select"
  default="2"
  inlineHelpText="Tablet Small Screen : 580px-850px"
  />

  <NumberField name="gap_between_cards_st" label="Gap Between Cards" default={24}/>
</FieldGroup> 
</FieldGroup>

<FieldGroup name="card_border_radius" label="Card Border Radius">
<NumberField name="card_border" label="Border" default={7}/>
</FieldGroup>

<FieldGroup name="card_content_alignment" label="Card Content Alignment">
<AlignmentField name="content_alignment" label="Content Alignment" default={{
        horizontal_align: "LEFT",
      }}/>
</FieldGroup>
<BorderField name="card_border_style" label="Card Border"/>
<ColorField name="card_background_color" label="Card Background Color" default={{
  color:"#ffffff",
  opacity:100
}}/>
<NumberField name="image_border_radius" label="Image Border Radius" default={7}/>

<FieldGroup name="cards_inner_padding" label="Cards Inner Padding">
          <FieldGroup name="desktop_spacing" label="Desktop ">
            <SpacingField
              name="card_padding_desktop"
              label="Card Padding Desktop"
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
         
          <FieldGroup name="mobile_spacing" label="Mobile">
            <SpacingField
              name="card_padding_mobile"
              label="Card Padding Mobile"
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

        <BooleanField name="box_shadow_enable" label="Box Shadow Enable" default={true}/>

      <FieldGroup name="box_shadow" label="Box Shadow" visibility={{
         controlling_field_path: 'style.cards_style.box_shadow_enable',
            operator: 'EQUAL',
            controlling_value_regex: 'true',
      }}>
        <NumberField name="horizontal_offset" label="Horizontal Offset (X Offset)" default={0}/>
        <NumberField name="vertical_offset" label="Vertical Offset (Y Offset)" default={43}/>
        <NumberField name="blur_radius" label="Blur Radius" default={70}/>
        <NumberField name="spread_radius" label="Spread Radius" default={0}/>
        <ColorField name="border_color" label="Color" default={{
          color:"#0000",
          opacity:7
        }}/>
      </FieldGroup>

        </FieldGroup>


      <FieldGroup name="tag_style" label="Tag Style" >
<ColorField name="tag_color" label="Tag Color" default={{
  color:"#FFFFFF",
  opacity:100
}}/>
<ColorField name="tag_background_color" label="Tag Background Color" default={{
  color:"",
opacity:100
}}/>

<ColorField name="tag_border_color" label="Tag Border Color" default={{
  color:"",
  opacity:100
}}/>
<NumberField name="tag_boder_top_right_radius" label="Tag Border Top Right Radius" default={16}/>
      </FieldGroup>

      <FieldGroup name="custom_container" label="Custom Container">
<ChoiceField name="container_choice" label="Container Choice" choices={[
  ["full-width","Full Width"],
  ["page-center","Page Center"],
  ["custom-container","Custom Container"]
]}
display="select"
default="custom-container"
/>
<NumberField name="container_max_width" label="Container Max Width" default={1200} visibility={{
    controlling_field: "style.custom_container.container_choice",
            operator: "EQUAL",
            controlling_value_regex: "custom-container",
}}/>
      </FieldGroup>

      <FieldGroup name="heading_style" label="Heading Style">
<NumberField name="max_width" label="Max Width" default={460}/>
<NumberField name="heading_bottom_margin" label="Heading Bottom Margin" default={40}/>
      </FieldGroup>

      <FieldGroup name="number_post_show" label="Number Of Post Show">
        <NumberField name="number_of_post" label="Number" default={3}/>
      </FieldGroup>
        </FieldGroup>

  </ModuleFields>
);
