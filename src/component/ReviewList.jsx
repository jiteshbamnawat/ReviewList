import React from "react";

import reviews from "./reviewsData.json";
import HighlightText from "./HighlightText";

const ReviewList = () => {

  console.log(reviews);
  return (
    <div style={{width:"100%"}}>
     {
      reviews.map((item)=>{
        
         return <Review key={item.review_id} item={item}/>
      })
     }
    </div>
  );
};

export default ReviewList;





export const Review = ({item}) => {
  console.log(item.source.image)
  return (
   <div>
     <div
     style={{
      width:"100%",
      display:"flex",
      gap:"23px",
      marginTop:"12px",
      marginBottom:"32px",
      justifyContent:"center"

    }}
     >
      
      <img
          style={{
            width: "35px",
            height:"35px",
            padding:"3px",
            border:"2px solid black",
            borderRadius:"100px"
          }}
          src={`${item.source.image}`}
          alt=""
        />
        <div style={{display:"flex",width:"90%",flexDirection:"column"}}>

           <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <span ><span style={{fontWeight:"bold"}}>{item.reviewer_name}</span> <span> wrote a review at </span> <span style={{fontWeight:"bold"}}>{item.source.name}</span>      </span>
            <div style={{width:"100px",display:"flex",justifyContent:"end"}}>
              <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
                
                <img style={{width:"25px"}} src="https://cdn0.iconfinder.com/data/icons/eon-ui-i/32/add_friend_contact-512.png" alt="" />
                <img style={{width:"20px"}} src="https://cdn3.iconfinder.com/data/icons/flaticons-1/24/flaticon_bookmark-512.png" alt="" />
                <img style={{width:"20px"}} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_more_horiz_48px-512.png" alt="" />


              </div>
            </div>
           </div>
         
         <p style={{display:"flex",alignItems:"center"}}><span style={{width:"100px"}}> <StarRating review={item.rating_review_score}/></span> <span style={{fontSize:"12px"}}>{item.date}</span></p>
         
        <HighlightText data={item}/>

        </div>   
    </div>
    <hr></hr>
   </div>
  );
};





export const StarRating = ({ review }) => {
  const maxRating = 10;
  const numStars = Math.round(review / maxRating * 5);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < numStars) {
        stars.push(<span key={i} style={{ color: 'gold' }}>★</span>);
      } else {
        stars.push(<span key={i+5}>&#9734;</span>);
      }
    }
    return stars;
  };

  return (
    <div>
      {renderStars()}
    </div>
  );
};


