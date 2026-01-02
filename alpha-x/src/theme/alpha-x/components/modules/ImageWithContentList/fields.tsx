import {
  ModuleFields,
  TextField,
  FieldGroup,
  RichTextField,
  RepeatedFieldGroup,
  ChoiceField,
  IconField,
  ImageField,
  ColorField,
  BooleanField,
  LinkField,
  SpacingField,
  BackgroundImageField,
  NumberField,
GradientField,

} from "@hubspot/cms-components/fields";
import contentImg from "../../../images/about-company.png" 
import rightArrow from "../../../images/right-arrow.png";
import backGroundImage from "../../../images/hero-banner.png";
export const fields = (
  <ModuleFields>
    <FieldGroup name="customCss" label="Custom - Class | ID">
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
    <FieldGroup name="mainContent" label="Add Main Heading">
      <RichTextField
        name="titleHeading"
        label="Heading"
        default={`<h3>Expand and grow your business with our solutions</h3>`}
      />
    </FieldGroup>
    <FieldGroup name="addContent" label="Add Content">
      <RichTextField
        name="subHeading"
        label="Add Content"
        default={`<h2>Unlock hidden employee insights</h2><p>Dummy content, also known as placeholder content, is temporary text, images, or other media used to demonstrate the visual or structural aspects of a website, document, or application. It allows designers and developers to see how the final product will look and function once the actual content is added.</p>`}
      />
    </FieldGroup>
    <FieldGroup name="orderList" label="Order List">
      <RepeatedFieldGroup
        name="orderRepeater"
        label="Order list"
        occurrence={{ min: 0, max: 20, default: 3 }}
default={[
      {
        listIcon: "svg-icon",
        svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"/>',
        addContent: "<p>Aggregate trending themes and topics in one dashboard</p>"
      },
      {
        listIcon: "hub-icon",
        iconField: {
          name: "Check Circle",
          unicode: "f058",
          type: "REGULAR",
        },
        iconStyle: {
          iconColor: { color: "#E64097", opacity: 100 },
          stroke: false,
          fill: true
        },
        addContent: "<p>Analyze data in real-time with custom dashboards</p>"
      },
      {
        listIcon: "img-icon",
        imgIcon: {
          src: rightArrow, // Assuming rightArrow is imported
          alt: "Right arrow Image",
          height: 20,
          width: 20,
        },
        addContent: "<p>Expand your reach with global solutions</p>"
      }
    ]}      >
        <ChoiceField
          name="listIcon"
          label="Svg Icon / Img Choice"
          required={false}
          locked={false}
          multiple={false}
          display="select"
          choices={[
            ["hub-icon", "Hubspot Icon"],
            ["img-icon", "Image Icon"],
            ["svg-icon", "SVG Icon"],
          ]}
          default="svg-icon"
        />
        <IconField
          name="iconField"
          label="Hubspot Icon"
          iconSet="fontawesome-5.14.0"
          default={{
            name: "Check Circle",
            unicode: "f058",
            type: "REGULAR",
          }}
          visibility={{
            controlling_field_path: "orderList.orderRepeater.listIcon",
            operator: "EQUAL",
            controlling_value_regex: "hub-icon",
          }}
        />

        <ImageField
          name="imgIcon"
          label="Image Icon"
          default={{
            src: rightArrow,
            alt: "Right arrow Image",
            height: 20,
            width: 20,
          }}
          visibility={{
            controlling_field_path: "orderList.orderRepeater.listIcon",
            operator: "EQUAL",
            controlling_value_regex: "img-icon",
          }}
        />
        <TextField
          name="svgIcon"
          label="Svg Icon"
          default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"/>'
          visibility={{
            controlling_field_path: "orderList.orderRepeater.listIcon",
            operator: "EQUAL",
            controlling_value_regex: "svg-icon",
          }}
        />
        <FieldGroup
          name="iconStyle"
          label="Icon Style"
          visibility={{
            controlling_field_path: "orderList.orderRepeater.listIcon",
            operator: "EQUAL",
            controlling_value_regex: "hub-icon",
          }}
        >
          <ColorField
            name="iconColor"
            label="Icon Color"
            default={{ color: "#E64097", opacity: 100 }}
          />
          <FieldGroup name="iconColorApply" label="Icon Color Apply Choice" />
          <BooleanField
            name="stroke"
            label="Stroke"
            display="toggle"
            default={false}
          />
          <BooleanField
            name="fill"
            label="Fill"
            display="toggle"
            default={true}
          />
        </FieldGroup>
        <RichTextField
          name="addContent"
          label="Add Content"
          default="<p>Aggregate trending themes and topics in one dashboard</p>"
        />

      </RepeatedFieldGroup>
    </FieldGroup>
    <FieldGroup name="buttonGroup" label="Button">
  <ChoiceField
        name="buttonChoice"
        label="Button Choice"
        required={false}
        locked={false}
        display="select"
        choices={[
          ["primary", "Primary"],
          ["secondary", "Secondary"],
          ["accent", "Accent"],
          ["tertiary", "Tertiary"],
        ]}
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
            <FieldGroup name="add_icon" label="Add Button Icon">
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
      </FieldGroup>
    </FieldGroup>
    <FieldGroup name="contentImg" label="Add Image">
      <ImageField
        name="image"
        label="Image"
        default={{
          src: contentImg,
          alt: 'building-2',
          width: 460,
          height: 460,
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
        default="bg_image"
      />
      <BackgroundImageField
        name="bg_image"
        label="Background image"
        required={false}
        default={{
          src: backGroundImage,
          background_position: "MIDDLE_CENTER",
          background_size: "COVER"
        }}
        visibility={{
              controlling_field_path: 'style.background.background_type',
              operator: 'EQUAL',
              controlling_value_regex: 'bg_image',
            }}
      />
 

        <FieldGroup name='bg_overlay' label='Overlay Color'
      visibility={{
              controlling_field_path: 'style.background.background_type',
              operator: 'EQUAL',
              controlling_value_regex: 'bg_image',
            }} >
    <ColorField
        name="overlay_color"
        label="Overlay color"
        required={false}
        locked={false}
        default={{
          color: "#121212"
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
    suffix=""   
    default={30}   
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

<FieldGroup name="customContainer" label="Custom Container">
  <BooleanField name="addCustomContainer" label="Add Custom Container" default={true} display="toggle"/>
<FieldGroup name="customContainerWidth" label="Custom Container Width" >
<NumberField name="addWidth" label="Add Width"
default={1160}
 visibility={{
      controlling_field_path: "style.customContainer.addCustomContainer",
      operator: "EQUAL",
      controlling_value_regex: "true",
 }}
/>
</FieldGroup>
</FieldGroup>

<FieldGroup name="mainHeadingContentStyle" label="Main Heading/Content Style">
<NumberField name="marginBottom" label="Margin Bottom" default={124}/>
<NumberField name="marginBottomMobile" label="Margin Bottom Mobile" default={80}/>
<NumberField name="maxWidth" label="Margin Width" default={562}/>
</FieldGroup>
<FieldGroup name="flexDivideGap" label="Flex Divide/Gap/Alignment">
<NumberField name="leftColumn" label="Left Column" default={50} max={100}/>
<NumberField name="rightColumn" label="Right Column" default={50} max={100}/>
<FieldGroup name="centerSpacing" label="Gap">
<NumberField name="centerSpacingDesktop" label="Desktop" default={40}/>
<NumberField name="centerSpacingMobile" label="Mobile" default={25}/>
</FieldGroup>
<FieldGroup name="columnAlignment" label="Alignment">
<ChoiceField name="columnVerticalAlignment" label="Column Vertical Alignment" choices={[["flex-start", "Top"], ["center", "Center"], ["flex-end", "Bottom"]]}/>
</FieldGroup>
</FieldGroup>
<FieldGroup name="imageStyle" label="Image Style">
<NumberField name="imageBorderRadius" label="Image Border Radius" default={0}/>
</FieldGroup>
  </FieldGroup>

  </ModuleFields>
);
