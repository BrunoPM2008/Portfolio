import './Infinite.css'

function Infinite(){
    let spans1 = [];
    let spans2 = [];

    let i = 0;

    while (i < 21) {
      spans1.push(
        <span key={i} style={{ "--i": i }}></span>
      );
      spans2.push(
        <span key={i} style={{ "--i": i }}></span>
      );
      i++;
    }
  return(

   <section className="infinite">
    <div className="container">
      <div className="circle">
          {spans1}
      </div>
      <div className="circle">
        {spans2}
      </div>
    </div>
  </section>
)}

export default Infinite;