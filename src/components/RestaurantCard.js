const Restaurantcard=(props)=>{
  const {name,image,rating,cuisine,location}=props?.data;
  return(
  <div className="rescontainer">
    <img className="rescardimg" src={image}></img>
    <div className="details">
      <h4>{name}</h4>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{location}</h4>
    </div>
  </div>)
}
export default Restaurantcard