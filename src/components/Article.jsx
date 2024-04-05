export default function Article(props) {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-lg">{props.body}</p>
      </div>
    </>
  );
}
