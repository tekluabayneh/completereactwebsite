import "./style.css";
const Newsitem = ({ titile, description, src, url }) => {
  const Newsimg = "https://picsum.photos/300/200";
  return (
    <>
      <div
        className="card bg-light text-dark mb-2 d-inline-block my-2 mx-3 px-2 py-2 "
        style={{ maxWidth: "300px" }}
      >
        <img
          src={src ? src : Newsimg}
          className="card-img-top"
          alt="Card image cap"
          style={{ height: "200px", width: "280px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{titile}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "A large crowd was at the event at the time, and multiple victims were hit. Officers who"}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      
    </>
  );
};
export default Newsitem;

//https://picsum.photos/300/200
