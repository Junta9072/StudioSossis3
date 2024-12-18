import MonthHeader from "./MonthHeader.jsx";
import BlogPostPlaceholder from "./BlogPostPlaceholder.jsx";

export default function MonthBlockPlaceholder() {
  return (
    <div className="monthBlock">
      <MonthHeader title={"loading"} />
      <BlogPostPlaceholder />
      <BlogPostPlaceholder />
      <BlogPostPlaceholder />
    </div>
  );
}
