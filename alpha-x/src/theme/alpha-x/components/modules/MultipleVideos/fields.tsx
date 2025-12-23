import { ModuleFields, VideoField,FileField,EmbedField,ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup name="videoGroup" label="Video Repeater"  occurrence={{
        min: 0,
        max: 20,
        default: 3,
      }}
      
      default={[{
          testVideo: "embed",
          embed_field: {
        source_type: "oembed",
        oembed_response: {
          type: "video",
          html: `
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameborder="0"
              allowfullscreen>
            </iframe>
          `,
        },
      },
      },
      {
          testVideo: "embed",
          embed_field: {
        source_type: "oembed",
        oembed_response: {
          type: "video",
          html: `
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameborder="0"
              allowfullscreen>
            </iframe>
          `,
        },
      },
      },
      {
          testVideo: "embed",
          embed_field: {
        source_type: "oembed",
        oembed_response: {
          type: "video",
          html: `
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameborder="0"
              allowfullscreen>
            </iframe>
          `,
        },
      },
      },
      ]}>
     <ChoiceField
      name="testVideo"
      label="Video "
      required={false}
      locked={false}
      multiple={false}
      display="select"
      choices={[
        ["default", "Hubspot-Video"],
        ["file", "File-Video "],
        ["embed","Embed-Video"]
      ]}
      default="embed"
    />
       <VideoField
      name="videoplayer_field"
      label="Video"
      required={false}
      locked={false}
      showAdvancedOptions={false}
      default={{
        player_id: 32173842991,
        height: 1224,
        width: 1872,
        conversion_asset: {
          type: "CTA",
          id: "c3e4fa03-2c69-461d-b9af-22b2fde86bc7",
          position: "POST",
        },
        loop_video: false,
        mute_by_default: false,
        autoplay: false,
      }}

       visibility={{
            controlling_field_path: "videoGroup.testVideo",
            operator: "EQUAL",
            controlling_value_regex: "default",
          }}
    />
    <FileField
      name="file_field"
      label="File"
      required={false}
      locked={false}
      picker="file"
       visibility={{
            controlling_field_path: "videoGroup.testVideo",
            operator: "EQUAL",
            controlling_value_regex: "file",
          }}
    />

     <EmbedField
      name="embed_field"
      label="Embed"
      required={false}
      locked={false}
      supportedSourceTypes={["oembed", "html"]}
      supportedOembedTypes={["photo", "video", "link", "rich"]}
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
            controlling_field_path: "videoGroup.testVideo",
            operator: "EQUAL",
            controlling_value_regex: "embed",
          }}
    />
    </RepeatedFieldGroup>
  </ModuleFields>
);
