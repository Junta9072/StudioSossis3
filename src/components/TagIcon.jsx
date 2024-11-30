export default function TagIcon(props) {
  let path = "./src/assets/images/tags/";
  let alt = "";

  function getIcon() {
    if (props.alt == 1) {
      alt = "_alt";
    }

    switch (props.data) {
      case "new":
        return path + "icon_new" + alt + ".svg";
        break;
      case "Project":
        return path + "icon_project" + alt + ".svg";
        break;

      case "Micro Project":
        return path + "icon_microProject" + alt + ".svg";
        break;

      case "Webdesign":
        return path + "icon_js" + alt + ".svg";
        break;

      case "react":
        return path + "icon_react" + alt + ".svg";
        break;

      case "UI":
        return path + "icon_UI" + alt + ".svg";
        break;

      case "UX":
        return path + "icon_UX" + alt + ".svg";
        break;

      case "3D":
        return path + "icon_3D" + alt + ".svg";
        break;

      case "animation":
        return path + "icon_animation" + alt + ".svg";
        break;

      case "Creative Coding":
        return path + "icon_creativecoding" + alt + ".svg";
        break;

      case "Graphic Design":
        return path + "icon_graphicdesign" + alt + ".svg";
        break;

      case "Illustration":
        return path + "icon_illustration" + alt + ".svg";
        break;

      default:
        break;
    }
  }

  return (
    <div className="tagIcon__container">
      <img className="tagIcon" src={getIcon()} alt="" />
    </div>
  );
}
