import './InfoCard.css';

const InfoCard = () => {
   
    return (
               <div className="card background-card">
        <div className="card-body">
           <h5 className="card-title">Title</h5>
           <p className="card-text">This is my description</p>
           <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>  
    )

}

export default InfoCard;