
const TimelineItem = ({subject, title, date, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-subject">{subject}</h4>
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
      <p className="timeline-text">{description}</p>
    </li>
  );
}
export default TimelineItem;