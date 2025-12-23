import { ModuleFields,BooleanField,TextField,RichTextField,FileField,VideoField, EmbedField, FieldGroup,ChoiceField ,ImageField} from '@hubspot/cms-components/fields';
import simpleImage from '../../../images/thumnail.jpg'
import VideoFile from '../../../video/Cassie Video.mp4'
export const fields = (
 <ModuleFields>
<FieldGroup name="custom_id_class" label="Custom | Class & ID">
      <TextField
        name="class"
        label="Class"
        required={false}
        locked={false}
        default=""
      />

      <TextField
        name="custom_id"
        label="ID"
        required={false}
        locked={false}
        default=""
      />
    </FieldGroup>
<FieldGroup  name="main_heading" label="Main Heading" >
  <RichTextField
          name="heading"
          label="heading"
          default='<h2>Engaging Video Experience with Modern Overlay Design</h2><p>Capture attention instantly with a sleek video popup featuring a smooth overlay and dynamic play button. Perfect for showcasing product demos, customer stories, or brand videos in a clean, stylish format.</p>'
        />
  </FieldGroup>

<FieldGroup name='popup_enable' label='Popup Enable'>
 <BooleanField
      name="enable"
      label="Enable"
      required={false}
      locked={false}
      display="checkbox"
      default={true}
    />
</FieldGroup>

    <FieldGroup name='video_image' label='Video / Image'>
    <ChoiceField
      name="video_choice"
      label="Video / Image Choice"
      required={false}
      locked={false}
      multiple={false}
      display="select"
      choices={[
        ["embed_code", "Embed Code"],
        ["file", "Video File"],
         ["hubspot_video", "Hubspot Video"],
         ["image", "Simple Image"],
      ]}
      default="hubspot_video"
    />
    <FieldGroup name='video_thumnail' label='Thumnail Image'>
       <ImageField
      name="image"
      label="Image"
      required={false}
      locked={false}
      responsive={true}
      resizable={true}
      showLoading={false}
      default={{
        size_type: "auto",
        src:simpleImage,
        alt: "image-alt-text",
        loading: "lazy",
        width: 1200,
        height: 500,
        max_width: 1200,
        max_height: 500,
      }}
       visibility={{
              controlling_field_path: 'video_image.video_choice',
              operator: 'EQUAL',
              controlling_value_regex: 'file',
            }}
    />
    </FieldGroup>

 <VideoField
      name="videoplayer_field"
      label="Video"
      required={false}
      locked={false}
      showAdvancedOptions={false}
      default={{
        player_id: 277002467004,
        height: 1000,
        width: 1920,
        conversion_asset: {
          type: "CTA",
          id: "c3e4fa03-2c69-461d-b9af-22b2fde86bc7",
          position: "POST",
        },
        loop_video: false,
        mute_by_default: false,
        autoplay: false
      }}
visibility={{
controlling_field_path: 'video_image.video_choice',
operator: 'EQUAL',
controlling_value_regex: 'hubspot_video',
}}
    />

<EmbedField
  name="embed_field"
  label="Video Embed (URL or iframe code)"
  required={false}
  locked={false}
  supportedSourceTypes={["oembed", "html"]}
  supportedOembedTypes={["video"]}
  supportedMediaBridgeProviders={[]}
    default={{
   source_type: "oembed",
    oembed_response: {
      type:"video",
      html:`
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen>
      </iframe>
    `,
    }
  }}
  visibility={{
    controlling_field_path: "video_image.video_choice",
    operator: "EQUAL",
    controlling_value_regex: "embed_code",
  }}
/>


 <FileField name="file_field" label="Video File" required={false} locked={false} picker="file" default={VideoFile} 
     visibility={{
  controlling_field_path: 'video_image.video_choice',
  operator: 'EQUAL',
  controlling_value_regex: 'file',
}}
 />

       
<ImageField
      name="image_field"
      label="Image"
      required={false}
      locked={false}
      responsive={true}
      resizable={true}
      showLoading={false}
      default={{
        size_type: "auto",
        src: simpleImage,
        alt: "image-alt-text",
        loading: "lazy",
        width: 1200,
        height: 500,
        max_width: 1200,
        max_height: 500,
      }}
      visibility={{
controlling_field_path: 'video_image.video_choice',
operator: 'EQUAL',
controlling_value_regex: 'image',
}}
 />

</FieldGroup>

  </ModuleFields>

);
