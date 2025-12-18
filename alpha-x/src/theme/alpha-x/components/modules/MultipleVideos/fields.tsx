import { ModuleFields, VideoField,FileField,EmbedField,ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
  <ModuleFields>
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
      default="default"
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
        loop_video: false,
        mute_by_default: false,
        autoplay: false,
      }}
       visibility={{
            controlling_field_path: "testVideo",
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
            controlling_field_path: "testVideo",
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
   source_type: "html",
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
            controlling_field_path: "testVideo",
            operator: "EQUAL",
            controlling_value_regex: "embed",
          }}
    />
  </ModuleFields>
);
