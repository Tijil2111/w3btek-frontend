export const getStaticPaths = async () => {
  const res = await fetch("https://w3btek-backend.herokuapp.com/api/forum");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((myData) => {
    return {
      params: { id: myData._id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://w3btek-backend.herokuapp.com/api/forum/" + id
  );
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.thread.name}</h1>
      <p>{ninja.thread.messages}</p>
    </div>
  );
};

export default Details;
