import { parseISO, formatDistanceToNow } from "date-fns";
const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const TimePeriod = formatDistanceToNow(date);
    timeAgo = `${TimePeriod} ago`;
  }
  return (
    <span title={timeStamp}>
      &nbsp;<i>{timeAgo}</i>
    </span>
  );
};
export default TimeAgo;
