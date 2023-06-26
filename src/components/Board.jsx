import Square from "./Square";
const Board=({square,handleclick})=>{
    


    return(
        <>
        <div className="w-full h-full flex flex-col items-center p-10">
          <div className="flex w-56 ">
            <Square value={square[0]} click={()=>handleclick(0)} />
            <Square value={square[1]}click={()=>handleclick(1)}/>
            <Square value={square[2]} click={()=>handleclick(2)}/>

           </div>
           <div className="flex border-y-2 w-56  ">
             <Square value={square[3]} click={()=>handleclick(3)}/>
             <Square value={square[4]} click={()=>handleclick(4)}/>
             <Square value={square[5]} click={()=>handleclick(5)}/>


           </div>
          <div className="flex  w-56 ">
            <Square value={square[6]} click={()=>handleclick(6)}/>
            <Square value={square[7]} click={()=>handleclick(7)}/>
            <Square value={square[8]} click={()=>handleclick(8)}/>
            </div>
        </div>


        </>
    )

}
export default Board ;
