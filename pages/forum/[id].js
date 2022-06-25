// import styles from "../../styles/Thread.module.css";

// export const getStaticPaths = async () => {
//   const res = await fetch("https://w3btek-backend.herokuapp.com/api/forum");
//   const data = await res.json();

//   const paths = data.map((myData) => {
//     return {
//       params: { id: myData._id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(
//     "https://w3btek-backend.herokuapp.com/api/forum/" + id
//   );
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// };

// const Details = ({ data }) => {
//   const answers = data.thread.messages.filter((message, index) => index !== 0);
//   console.log(answers);

//   return (
//     <div id={styles.container}>
//       <h1 id={styles.heading}>{data.thread.messages[0]}</h1>
//       <div className={styles.box}>
//         <div className={styles.date}>
//           {`Question asked at ${data.thread.date}`}
//         </div>
//         <div className={styles.name}>
//           {`Question asked by ${data.thread.name}`}
//         </div>
//       </div>
//       <div id={styles.answers}>
//         {answers.map((answer, index) => {
//           return (
//             <div key={index}>
//               <div className={styles.answer}>
//                 {answer}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Details;
