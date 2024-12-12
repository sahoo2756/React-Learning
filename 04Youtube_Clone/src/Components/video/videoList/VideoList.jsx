import TopNavigation from "./TopNavigation";
import Videos from "./Videos";

function VideoList() {
  return (
    <div
      style={{ width: "calc(97% - var(--leftNavigation_width))" }}
      className="pr-10"
    >
      <TopNavigation />
      <Videos />
    </div>
  );
}

export default VideoList;
