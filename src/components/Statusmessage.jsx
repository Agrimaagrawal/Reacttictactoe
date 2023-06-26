export function Statusmessage({winner,player,square,isNext}){
    const  message=winner?`Winner is ${winner}`:`Next Player is ${player}`;
    const noMoveLeft=square.every(value=>value!==null)
    const renderMessage=()=>{
        if(winner){
            return <div className="text-xl text-white text-bold">Winner is {winner}</div>
        }
        if(!winner&&noMoveLeft){
            return <div className="text-xl text-white text-bold">Tie!</div>
        }
        if(!winner&&!noMoveLeft){
            return<div className="text-xl text-white text-bold">Next Player is <span className={isNext?'text-green-50':'text-orange-600'}>{player}</span> </div>
        }
    }
    return(
        <>
       {renderMessage()}
        </>
    )
    
}