const Square=({value,click})=>{
    return(
        <>
          <button className="border-l-2 border-r-2 w-10 p-9 text-4xl" onClick={click}>{value}</button>
        </>
    )

}
export default Square;